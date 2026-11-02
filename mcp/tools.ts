import { z } from "zod";
import { convert, crossRate, netAfterMargin, precisionFor, roundToDecimals } from "../tools/_lib/fx";

/**
 * RateSnap MCP 工具注册表:把 tools/_lib/fx.ts 的纯函数暴露为 AI 可执行工具。
 * 站上的同名工具在浏览器里跑(交互式 + 免费 er-api 汇率源),这里只做诚实的
 * 纯数学——汇率由调用方提供,本服务不代替 AI 取数,也不假装有实时行情。
 */

const num = (n: number) => (Number.isFinite(n) ? String(n) : "invalid input — see tool description for accepted ranges");
const json = (v: unknown) => ({ content: [{ type: "text" as const, text: JSON.stringify(v, null, 2) }] });
const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });

export type McpToolDef = {
  name: string;
  title: string;
  description: string;
  schema: Record<string, any>;
  run: (args: any) => { content: { type: "text"; text: string }[]; isError?: boolean };
};

const bad = (msg: string) => ({ content: [{ type: "text" as const, text: msg }], isError: true as const });

export const MCP_TOOLS: McpToolDef[] = [
  {
    name: "fx_convert",
    title: "FX convert (you supply the rate)",
    description:
      "Convert an amount between currencies by multiplying with an exchange rate YOU provide. This tool does NOT fetch live rates — get the rate from your own data source first, then pass it here for honest arithmetic: amount × rate, rounded half-up to `decimals` (default 2; use 0 for JPY/KRW, 3 for BHD/KWD-style dinars). rate is expressed as target-currency units per 1 source-currency unit.",
    schema: {
      amount: z.number().describe("amount to convert, in the source currency (negative allowed for adjustments)"),
      rate: z.number().positive().describe("exchange rate: units of the TARGET currency per 1 unit of the SOURCE currency, e.g. 0.9231 for USD→EUR"),
      decimals: z.number().int().min(0).max(12).optional().describe("decimal places for the result, 0–12 (default 2)"),
      from: z.string().optional().describe("optional ISO 4217 source code, e.g. 'USD' — used only for labels"),
      to: z.string().optional().describe("optional ISO 4217 target code, e.g. 'EUR' — used only for labels"),
    },
    run: (a) => {
      const result = convert(a.amount, a.rate, a.decimals ?? 2);
      if (!Number.isFinite(result)) return bad("conversion failed: amount must be finite and rate must be a positive number (rate is target units per 1 source unit)");
      return json({
        input: { amount: a.amount, rate: a.rate, from: a.from ?? null, to: a.to ?? null },
        decimals: a.decimals ?? 2,
        result,
        note: "arithmetic only — the rate was supplied by the caller, not fetched",
      });
    },
  },
  {
    name: "cross_rate",
    title: "Cross rate via a third currency",
    description:
      "Compute the cross rate A→C from two legs you supply: a_to_b (1 A = r B) and b_to_c (1 B = r C) give A→C = a_to_b × b_to_c. Pure multiplication on rates YOU provide — no live quotes. Example: USD→EUR 0.9 and EUR→GBP 0.85 give USD→GBP 0.765.",
    schema: {
      a_to_b: z.number().positive().describe("rate for the first leg: units of B per 1 unit of A"),
      b_to_c: z.number().positive().describe("rate for the second leg: units of C per 1 unit of B"),
    },
    run: (a) => {
      const cross = crossRate(a.a_to_b, a.b_to_c);
      if (!Number.isFinite(cross)) return bad("cross rate failed: both legs must be positive finite numbers");
      return json({
        legs: { a_to_b: a.a_to_b, b_to_c: a.b_to_c },
        cross: cross,
        formula: "A→C = A→B × B→C",
      });
    },
  },
  {
    name: "net_after_margin",
    title: "Net payout after FX margin",
    description:
      "What actually arrives from a foreign-currency amount after an FX margin percentage is taken off: amount × rate × (1 − margin_pct/100). The rate and margin are supplied by YOU (rate = home-currency units per 1 invoice-currency unit; margin_pct 0–100, e.g. a 2% bank spread). Also returns the gross and the cost of the margin. Estimates only — real payout depends on your provider's fees.",
    schema: {
      amount: z.number().describe("invoice amount in the invoice currency"),
      rate: z.number().positive().describe("exchange rate: home-currency units per 1 invoice-currency unit"),
      margin_pct: z.number().min(0).max(100).describe("FX margin percentage taken off the converted total, 0–100"),
    },
    run: (a) => {
      const net = netAfterMargin(a.amount, a.rate, a.margin_pct);
      if (!Number.isFinite(net)) return bad("calculation failed: amount and rate must be finite, rate must be positive, margin_pct must be within 0–100");
      const gross = a.amount * a.rate;
      return json({
        amount: a.amount,
        rate: a.rate,
        margin_pct: a.margin_pct,
        gross: roundToDecimals(gross, 6),
        margin_cost: roundToDecimals(gross - net, 6),
        net: roundToDecimals(net, 6),
        formula: "net = amount × rate × (1 − margin_pct/100)",
      });
    },
  },
  {
    name: "round_currency",
    title: "Round to currency precision",
    description:
      "Round a number half-up to a currency's standard decimal places (ISO 4217 minor units): 0 for JPY/KRW-style, 2 for most, 3 for BHD/KWD/OMR-style, 4 for CLF. Pass `currency` to use the built-in table, or an explicit `decimals` (0–12) to override. Implemented with exact string/BigInt arithmetic, so 2.345 rounds to 2.35 — not 2.34 as naive float math gives.",
    schema: {
      value: z.number().describe("number to round"),
      currency: z.string().optional().describe("ISO 4217 code, e.g. 'JPY' — uses the built-in minor-unit precision table"),
      decimals: z.number().int().min(0).max(12).optional().describe("explicit decimal places, overrides `currency` (0–12)"),
    },
    run: (a) => {
      const dp = a.decimals ?? precisionFor(a.currency ?? "");
      const rounded = roundToDecimals(a.value, dp);
      if (!Number.isFinite(rounded)) return bad(`rounding failed: value must be finite and decimals must be an integer within 0–12 (got ${String(a.decimals)})`);
      return json({
        value: a.value,
        decimals: dp,
        rounded,
        basis: a.decimals !== undefined ? "explicit decimals" : `ISO 4217 minor units for ${a.currency ?? "default"}`,
      });
    },
  },
];
