"use client";

import { useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { ToolPanel } from "@/components/ui";
import { convert, precisionFor } from "../_lib/fx";
import {
  CurrencySelect, Field, HowNote, RateStatusLine, RatesError, pairRate, pick, useRates,
} from "./fx-ui";

/**
 * Conversion table engine: one base, one target, a fixed ladder of amounts.
 * This is the long-tail page type — "usd to eur table" style queries land here
 * and get every row above the fold. Rates are fetched once via the shared
 * pipeline; rows are computed with `convert()` at the target currency's ISO
 * minor-unit precision.
 */

const AMOUNTS = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000];

const L = {
  base: { en: "Base currency", zh: "基准货币", ja: "基準通貨", es: "Moneda base", pt: "Moeda base" },
  target: { en: "Target currency", zh: "目标货币", ja: "相手通貨", es: "Moneda destino", pt: "Moeda de destino" },
  amountCol: { en: "Amount", zh: "金额", ja: "金額", es: "Cantidad", pt: "Valor" },
  convertedCol: { en: "Converted", zh: "换算结果", ja: "換算後", es: "Convertido", pt: "Convertido" },
  rateLine: { en: "Rate used", zh: "所用汇率", ja: "使用レート", es: "Tasa aplicada", pt: "Taxa aplicada" },
};

export function TableEngine() {
  const { locale } = useI18n();
  const rates = useRates();
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  const rate = pairRate(rates.rates, from, to);
  const dp = precisionFor(to);
  const fmtRow = (amount: number) => (Number.isFinite(rate) ? convert(amount, rate, dp).toFixed(dp) : "—");

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={pick(locale, L.base)}>
          <CurrencySelect value={from} onChange={setFrom} aria={pick(locale, L.base)} rates={rates.rates} />
        </Field>
        <Field label={pick(locale, L.target)}>
          <CurrencySelect value={to} onChange={setTo} aria={pick(locale, L.target)} rates={rates.rates} />
        </Field>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[320px] text-left text-[14px]">
          <thead>
            <tr className="border-b hairline text-[12.5px] uppercase tracking-wide text-[var(--color-sub)]">
              <th scope="col" className="py-2 pr-4 font-semibold">{from} → {to}</th>
              <th scope="col" className="py-2 text-right font-semibold">{pick(locale, L.convertedCol)} ({to})</th>
            </tr>
          </thead>
          <tbody>
            {AMOUNTS.map((amount) => (
              <tr key={amount} className="border-b hairline last:border-0">
                <td className="mono py-2.5 pr-4 font-medium">{amount.toLocaleString("en-US")}</td>
                <td className="mono py-2.5 text-right font-semibold" aria-live="polite">{fmtRow(amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {Number.isFinite(rate) && (
        <p className="mt-4 text-[13px] text-[var(--color-sub)]">
          {pick(locale, L.rateLine)}: 1 {from} = <strong className="text-[var(--color-ink)]">{rate.toPrecision(6)}</strong> {to}
        </p>
      )}

      <RateStatusLine rates={rates} />
      <RatesError rates={rates} />
      <HowNote />
    </ToolPanel>
  );
}
