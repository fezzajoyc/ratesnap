/**
 * RateSnap FX core — pure currency math. No fetch, no DOM, no state.
 *
 * The engines (tools/_engines/*) own the network: they fetch mid-market rates
 * from the free open.er-api.com endpoint and hand a plain rate number to
 * `convert`. Everything here is deterministic and Node-testable, and the MCP
 * server (mcp/tools.ts) runs the exact same functions — one tested
 * implementation for humans and AI alike.
 */

/** ISO 4217 minor units for currencies that deviate from the usual 2 decimals. */
export const CURRENCY_PRECISIONS: Record<string, number> = {
  // 0-decimal currencies
  BIF: 0, CLP: 0, DJF: 0, GNF: 0, ISK: 0, JPY: 0, KMF: 0, KRW: 0,
  PYG: 0, RWF: 0, UGX: 0, VND: 0, VUV: 0, XAF: 0, XOF: 0, XPF: 0,
  // 3-decimal currencies
  BHD: 3, IQD: 3, JOD: 3, KWD: 3, LYD: 3, OMR: 3, TND: 3,
  // the only 4-decimal ISO currency (Chile's unidad de fomento)
  CLF: 4,
};

/** Decimal places assumed when a currency code is not in CURRENCY_PRECISIONS. */
export const DEFAULT_PRECISION = 2;

/**
 * Decimal places for a currency code (case-insensitive).
 * Unknown or malformed codes fall back to 2 (the ISO-4217 default).
 */
export function precisionFor(code: string): number {
  if (typeof code !== "string") return DEFAULT_PRECISION;
  const p = CURRENCY_PRECISIONS[code.trim().toUpperCase()];
  return p ?? DEFAULT_PRECISION;
}

/**
 * Round to `decimals` places, half-up on the decimal value (ties round away
 * from zero — the money convention).
 *
 * Why not `Math.round(v * 100) / 100`? Binary floats: 2.345 is stored as
 * 2.34499999999999997…, so the naive shift gives 2.34. Why not `+EPSILON`
 * hacks? The deficit is relative, so a fixed epsilon only works near 1.
 *
 * This implementation is string-based and exact for |value| < 1e15:
 *  1. `toFixed(decimals + 1)` recovers the intended decimal digits — the
 *     binary noise sits far beyond that digit for this range (2.345 → "2.345").
 *  2. The digit just past the target precision decides the rounding, and the
 *     scaled integer is built with BigInt, so carry chains (999.995 → 1000.00)
 *     cannot lose a cent.
 * Values ≥ 1e15 are returned unchanged: a double has no fractional precision
 * left there, and honest code beats silently wrong cents.
 */
export function roundToDecimals(value: number, decimals: number): number {
  if (!Number.isFinite(value)) return NaN;
  if (!Number.isInteger(decimals) || decimals < 0 || decimals > 12) return NaN;
  if (Math.abs(value) >= 1e15) return value;

  const neg = value < 0;
  const s = Math.abs(value).toFixed(decimals + 1); // e.g. 2.345 @2dp → "2.345"
  const dot = s.indexOf(".");
  const intPart = dot === -1 ? s : s.slice(0, dot);
  const frac = dot === -1 ? "" : s.slice(dot + 1);

  const kept = (frac + "0".repeat(decimals)).slice(0, decimals); // exactly `decimals` digits
  const roundDigit = frac[decimals] ?? "0";
  let scaled = BigInt(intPart + kept); // |value| × 10^decimals, exact
  if (roundDigit >= "5") scaled += 1n; // half-up, carry included

  const digits = scaled.toString().padStart(decimals + 1, "0");
  const outInt = digits.slice(0, digits.length - decimals) || "0";
  const outFrac = decimals > 0 ? `.${digits.slice(digits.length - decimals)}` : "";
  return Number(`${neg ? "-" : ""}${outInt}${outFrac}`);
}

/**
 * Convert `amount` at `rate` (units of TARGET per 1 unit of SOURCE — the
 * same direction open.er-api.com's cross-table implies) and round to
 * `decimals`. Returns NaN for a non-finite amount or a rate that is not > 0;
 * a negative amount is allowed (refunds, adjustments).
 */
export function convert(amount: number, rate: number, decimals: number = DEFAULT_PRECISION): number {
  if (!Number.isFinite(amount) || !Number.isFinite(rate) || rate <= 0) return NaN;
  return roundToDecimals(amount * rate, decimals);
}

/**
 * Cross rate through a middle currency: `aToB` (1 A = r₁ B) and `bToC`
 * (1 B = r₂ C) give 1 A = r₁ × r₂ C. Non-positive or non-finite inputs → NaN.
 */
export function crossRate(aToB: number, bToC: number): number {
  if (!Number.isFinite(aToB) || !Number.isFinite(bToC) || aToB <= 0 || bToC <= 0) return NaN;
  const cross = aToB * bToC;
  return Number.isFinite(cross) ? cross : NaN; // overflow of two finite legs is still a failure
}

/**
 * What actually lands in the account: `amount` (invoice currency) × `rate`
 * (home-currency units per invoice unit) minus the bank's FX `marginPct`
 * taken off the top. 1000 @ 0.9 with a 2% margin → 882.
 * marginPct must be within 0–100; anything else (and any non-finite input or
 * non-positive rate) → NaN. Result is raw — round with roundToDecimals and
 * the home currency's precision for display.
 */
export function netAfterMargin(amount: number, rate: number, marginPct: number): number {
  if (!Number.isFinite(amount) || !Number.isFinite(rate) || rate <= 0) return NaN;
  if (!Number.isFinite(marginPct) || marginPct < 0 || marginPct > 100) return NaN;
  const gross = amount * rate;
  if (!Number.isFinite(gross)) return NaN; // finite × finite can still overflow
  const net = gross * (1 - marginPct / 100);
  return Number.isFinite(net) ? net : NaN;
}
