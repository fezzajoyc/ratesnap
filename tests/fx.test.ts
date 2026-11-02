import { describe, expect, it } from "vitest";
import {
  CURRENCY_PRECISIONS,
  DEFAULT_PRECISION,
  convert,
  crossRate,
  netAfterMargin,
  precisionFor,
  roundToDecimals,
} from "@/tools/_lib/fx";

/* ------------------------------------------------------------------ */
/* roundToDecimals — exact half-up on decimal intent                   */
/* ------------------------------------------------------------------ */

describe("roundToDecimals", () => {
  it("rounds 2.345 at 2dp to 2.35 despite its binary value being 2.34499999…", () => {
    // 2.345 存的是 2.34499999999999997…,朴素 Math.round(v*100)/100 给 2.34;
    // 本实现按“十进制意图”取整,必须 2.35(见 fx.ts 文档块)。
    expect(roundToDecimals(2.345, 2)).toBe(2.35);
    expect(roundToDecimals(1.005, 2)).toBe(1.01);
    expect(roundToDecimals(8.235, 2)).toBe(8.24);
  });

  it("rounds half up (ties away from zero) and keeps sub-half values down", () => {
    expect(roundToDecimals(2.344, 2)).toBe(2.34);
    expect(roundToDecimals(2.346, 2)).toBe(2.35);
    expect(roundToDecimals(-2.345, 2)).toBe(-2.35); // magnitude half-up
    expect(roundToDecimals(-2.344, 2)).toBe(-2.34);
  });

  it("carries correctly across a digit rollover", () => {
    expect(roundToDecimals(999.995, 2)).toBe(1000);
    expect(roundToDecimals(0.9999, 2)).toBe(1);
    expect(roundToDecimals(9.99, 0)).toBe(10);
  });

  it("supports 0 and high decimal counts", () => {
    expect(roundToDecimals(1234.567, 0)).toBe(1235);
    expect(roundToDecimals(0.001, 2)).toBe(0);
    expect(roundToDecimals(1 / 3, 6)).toBeCloseTo(0.333333, 9);
    expect(roundToDecimals(2 / 3, 6)).toBeCloseTo(0.666667, 9);
  });

  it("returns NaN for garbage without throwing (standard matrix: 非法输入)", () => {
    expect(roundToDecimals(NaN, 2)).toBeNaN();
    expect(roundToDecimals(Infinity, 2)).toBeNaN();
    expect(roundToDecimals(-Infinity, 2)).toBeNaN();
    expect(roundToDecimals(2.345, NaN as unknown as number)).toBeNaN();
    expect(roundToDecimals(2.345, -1)).toBeNaN();
    expect(roundToDecimals(2.345, 1.5)).toBeNaN();
    expect(roundToDecimals(2.345, 13)).toBeNaN();
    // ≥1e15 无小数精度可言,原样返回(诚实降级,文档化行为)
    expect(roundToDecimals(1e21, 2)).toBe(1e21);
  });
});

/* ------------------------------------------------------------------ */
/* CURRENCY_PRECISIONS — ISO 4217 minor units                          */
/* ------------------------------------------------------------------ */

describe("CURRENCY_PRECISIONS / precisionFor", () => {
  it("maps the documented minor units", () => {
    expect(precisionFor("JPY")).toBe(0);
    expect(precisionFor("KRW")).toBe(0);
    expect(precisionFor("VND")).toBe(0);
    expect(precisionFor("USD")).toBe(2);
    expect(precisionFor("EUR")).toBe(2);
    expect(precisionFor("BHD")).toBe(3);
    expect(precisionFor("KWD")).toBe(3);
    expect(precisionFor("OMR")).toBe(3);
    expect(precisionFor("CLF")).toBe(4);
  });

  it("is case-insensitive and falls back to 2 for unknown or malformed codes", () => {
    expect(precisionFor("jpy")).toBe(0);
    expect(precisionFor(" jpy ")).toBe(0);
    expect(precisionFor("XYZ")).toBe(DEFAULT_PRECISION);
    expect(precisionFor("")).toBe(DEFAULT_PRECISION);
    expect(precisionFor(undefined as unknown as string)).toBe(DEFAULT_PRECISION);
  });

  it("never stores an entry outside 0–4 decimals", () => {
    for (const [code, dp] of Object.entries(CURRENCY_PRECISIONS)) {
      expect(dp, code).toBeGreaterThanOrEqual(0);
      expect(dp, code).toBeLessThanOrEqual(4);
      expect(code).toMatch(/^[A-Z]{3}$/);
    }
  });
});

/* ------------------------------------------------------------------ */
/* convert                                                             */
/* ------------------------------------------------------------------ */

describe("convert", () => {
  it("converts 100 at 0.85 to 85.00", () => {
    expect(convert(100, 0.85, 2)).toBe(85);
    expect(convert(100, 0.85, 2).toFixed(2)).toBe("85.00");
  });

  it("respects the requested precision, including 4 and 6 decimals", () => {
    expect(convert(100, 0.853412, 4)).toBe(85.3412);
    expect(convert(1, 0.853412, 6)).toBe(0.853412);
    expect(convert(10, 1 / 3, 6)).toBeCloseTo(3.333333, 9);
  });

  it("defaults to 2 decimals", () => {
    expect(convert(33.335, 1)).toBe(33.34);
  });

  it("accepts zero and negative amounts (refunds), rejects bad rates without throwing", () => {
    expect(convert(0, 0.85)).toBe(0);
    expect(convert(-50, 0.85)).toBe(-42.5);
    expect(convert(NaN, 0.85)).toBeNaN();
    expect(convert(Infinity, 0.85)).toBeNaN();
    expect(convert(100, NaN)).toBeNaN();
    expect(convert(100, Infinity)).toBeNaN();
    expect(convert(100, 0)).toBeNaN();
    expect(convert(100, -0.85)).toBeNaN();
  });

  it("round-trips within precision: convert back at the inverse rate recovers the amount", () => {
    const rate = 0.853412;
    const amount = 1234.56;
    const forward = convert(amount, rate, 4);
    const back = convert(forward, 1 / rate, 2);
    // 每个方向各自 4/2 位取整,允许最后一位的舍入差
    expect(Math.abs(back - amount)).toBeLessThan(0.02);
  });
});

/* ------------------------------------------------------------------ */
/* crossRate                                                           */
/* ------------------------------------------------------------------ */

describe("crossRate", () => {
  it("chains USD→EUR 0.9 and EUR→GBP 0.85 into USD→GBP 0.765", () => {
    const usdEur = 0.9;
    const eurGbp = 0.85;
    const usdGbp = crossRate(usdEur, eurGbp);
    expect(usdGbp).toBeCloseTo(0.765, 12);
    expect(roundToDecimals(usdGbp, 6)).toBe(0.765);
  });

  it("is order-consistent and associable across three legs", () => {
    const a = crossRate(1.1, crossRate(0.9, 0.85));
    const b = crossRate(crossRate(1.1, 0.9), 0.85);
    expect(a).toBeCloseTo(b, 12);
  });

  it("rejects non-positive or non-finite legs without throwing", () => {
    expect(crossRate(0, 0.85)).toBeNaN();
    expect(crossRate(0.9, 0)).toBeNaN();
    expect(crossRate(-0.9, 0.85)).toBeNaN();
    expect(crossRate(NaN, 0.85)).toBeNaN();
    expect(crossRate(0.9, Infinity)).toBeNaN();
  });
});

/* ------------------------------------------------------------------ */
/* netAfterMargin                                                      */
/* ------------------------------------------------------------------ */

describe("netAfterMargin", () => {
  it("takes 1000 at 0.9 with a 2% margin to 882", () => {
    expect(netAfterMargin(1000, 0.9, 2)).toBeCloseTo(882, 8);
    expect(roundToDecimals(netAfterMargin(1000, 0.9, 2), 2)).toBe(882);
  });

  it("charges nothing at 0% and everything at 100%", () => {
    expect(netAfterMargin(1000, 0.9, 0)).toBeCloseTo(900, 8);
    expect(netAfterMargin(1000, 0.9, 100)).toBeCloseTo(0, 8);
  });

  it("scales linearly with the margin", () => {
    const at1 = netAfterMargin(1000, 0.9, 1);
    const at3 = netAfterMargin(1000, 0.9, 3);
    expect(at1).toBeCloseTo(891, 8);
    expect(at3).toBeCloseTo(873, 8);
    expect(at1 + at3).toBeCloseTo(2 * netAfterMargin(1000, 0.9, 2), 8);
  });

  it("rejects out-of-range margins and bad inputs without throwing", () => {
    expect(netAfterMargin(1000, 0.9, -2)).toBeNaN();
    expect(netAfterMargin(1000, 0.9, 101)).toBeNaN();
    expect(netAfterMargin(1000, 0.9, NaN)).toBeNaN();
    expect(netAfterMargin(1000, 0, 2)).toBeNaN();
    expect(netAfterMargin(NaN, 0.9, 2)).toBeNaN();
  });

  it("returns NaN when finite inputs overflow to Infinity (1e308 × 2)", () => {
    expect(netAfterMargin(1e308, 2, 2)).toBeNaN();
    expect(crossRate(1e308, 1e308)).toBeNaN();
    expect(convert(1e308, 10, 2)).toBeNaN();
  });
});
