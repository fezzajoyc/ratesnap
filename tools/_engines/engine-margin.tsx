"use client";

import { useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { ToolPanel } from "@/components/ui";
import { netAfterMargin, precisionFor, roundToDecimals } from "../_lib/fx";
import {
  CurrencySelect, Field, HowNote, NumIn, RateStatusLine, RatesError, pairRate, pick, useRates,
} from "./fx-ui";

/**
 * FX margin calculator for freelancers and importers: what a foreign-currency
 * invoice is actually worth after the bank takes its cut. The live mid-market
 * rate prefills the rate field but stays editable — paste the rate your bank
 * quoted and the numbers reflect your real contract, not the mid-market.
 * Math: `netAfterMargin()` from _lib/fx.ts, displayed at the home currency's
 * ISO minor-unit precision.
 */

const L = {
  amount: { en: "Invoice amount", zh: "账单金额", ja: "請求金額", es: "Importe de la factura", pt: "Valor da fatura" },
  invoiceCur: { en: "Invoice currency", zh: "账单货币", ja: "請求通貨", es: "Moneda de la factura", pt: "Moeda da fatura" },
  homeCur: { en: "Your currency", zh: "你的货币", ja: "自分の通貨", es: "Su moneda", pt: "Sua moeda" },
  rate: { en: "Exchange rate (1 invoice unit =)", zh: "汇率(1 单位账单货币 =)", ja: "為替レート(請求通貨 1 単位 =)", es: "Tipo de cambio (1 unidad de factura =)", pt: "Taxa de câmbio (1 unidade de fatura =)" },
  useLive: { en: "Use live rate", zh: "使用实时汇率", ja: "最新レートを使う", es: "Usar tasa en vivo", pt: "Usar taxa ao vivo" },
  margin: { en: "Bank / service margin %", zh: "银行/服务点差 %", ja: "銀行・サービスのマージン %", es: "Margen del banco/servicio %", pt: "Margem do banco/serviço %" },
  gross: { en: "Gross at mid-market", zh: "中间价毛额", ja: "ミッドマーケットの総額", es: "Bruto a mercado medio", pt: "Bruto a mercado médio" },
  cost: { en: "Margin cost", zh: "点差成本", ja: "マージンコスト", es: "Coste del margen", pt: "Custo da margem" },
  net: { en: "You receive", zh: "实际到手", ja: "実際に受け取る額", es: "Usted recibe", pt: "Você recebe" },
  effective: { en: "Effective rate", zh: "实际汇率", ja: "実効レート", es: "Tasa efectiva", pt: "Taxa efetiva" },
  invalidMargin: {
    en: "Margin must be between 0 and 100 percent.",
    zh: "点差必须在 0–100 之间。",
    ja: "マージンは 0〜100% の範囲で入力してください。",
    es: "El margen debe estar entre 0 y 100 por ciento.",
    pt: "A margem deve ficar entre 0 e 100 por cento.",
  },
};

export function MarginEngine() {
  const { locale } = useI18n();
  const rates = useRates();
  const [amount, setAmount] = useState("1000");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [margin, setMargin] = useState("2");
  const [rateOverride, setRateOverride] = useState<string | null>(null);

  const live = pairRate(rates.rates, from, to);
  const rate = rateOverride !== null ? Number(rateOverride.replace(",", ".")) : live;
  const a = Number(amount.replace(",", "."));
  const m = Number(margin.replace(",", "."));
  const dp = precisionFor(to);
  const net = Number.isFinite(a) ? netAfterMargin(a, rate, m) : NaN;
  const gross = Number.isFinite(a) && Number.isFinite(rate) ? a * rate : NaN;
  const cost = Number.isFinite(gross) && Number.isFinite(net) ? gross - net : NaN;
  const effRate = Number.isFinite(a) && a !== 0 && Number.isFinite(net) ? net / a : NaN;
  const f = (x: number) => (Number.isFinite(x) ? roundToDecimals(x, dp).toFixed(dp) : "—");
  const marginBad = Number.isFinite(m) && (m < 0 || m > 100);

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-4">
          <Field label={pick(locale, L.amount)}>
            <NumIn value={amount} onChange={setAmount} aria={pick(locale, L.amount)} className="text-lg" />
          </Field>
          <Field label={pick(locale, L.invoiceCur)}>
            <CurrencySelect value={from} onChange={(v) => { setFrom(v); setRateOverride(null); }} aria={pick(locale, L.invoiceCur)} rates={rates.rates} />
          </Field>
        </div>
        <div className="space-y-4">
          <Field label={pick(locale, L.homeCur)}>
            <CurrencySelect value={to} onChange={(v) => { setTo(v); setRateOverride(null); }} aria={pick(locale, L.homeCur)} rates={rates.rates} />
          </Field>
          <Field label={pick(locale, L.margin)}>
            <NumIn value={margin} onChange={setMargin} aria={pick(locale, L.margin)} />
            {marginBad && <p className="text-[12.5px] font-medium text-[var(--color-bad)]">{pick(locale, L.invalidMargin)}</p>}
          </Field>
        </div>
      </div>

      <div className="mt-4">
        <Field label={pick(locale, L.rate)}>
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="number"
              inputMode="decimal"
              step="any"
              className="field mono max-w-[11rem]"
              value={rateOverride ?? (Number.isFinite(live) ? live.toPrecision(6) : "")}
              onChange={(e) => setRateOverride(e.target.value)}
              placeholder="—"
              aria-label={pick(locale, L.rate)}
            />
            {Number.isFinite(live) && (
              <button
                type="button"
                onClick={() => setRateOverride(null)}
                className="inline-flex items-center gap-1.5 rounded-full border hairline px-3 py-1.5 text-[12.5px] font-medium transition-colors hover:bg-[var(--color-surface)]"
              >
                {pick(locale, L.useLive)}
              </button>
            )}
          </div>
        </Field>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border hairline px-3.5 py-3">
          <div className="text-[12.5px] font-medium text-[var(--color-sub)]">{pick(locale, L.gross)}</div>
          <div className="mono mt-1 text-[17px] font-semibold">{f(gross)} <span className="text-[13px] font-medium text-[var(--color-sub)]">{to}</span></div>
        </div>
        <div className="rounded-xl border hairline px-3.5 py-3">
          <div className="text-[12.5px] font-medium text-[var(--color-sub)]">{pick(locale, L.cost)}</div>
          <div className="mono mt-1 text-[17px] font-semibold text-[var(--color-bad)]">−{f(cost)} <span className="text-[13px] font-medium text-[var(--color-sub)]">{to}</span></div>
        </div>
        <div className="rounded-xl border hairline bg-[var(--color-surface)] px-3.5 py-3">
          <div className="text-[12.5px] font-medium text-[var(--color-sub)]">{pick(locale, L.net)}</div>
          <div className="mono mt-1 text-[19px] font-semibold text-[var(--color-good)]" aria-live="polite">{f(net)} <span className="text-[13px] font-medium text-[var(--color-sub)]">{to}</span></div>
        </div>
        <div className="rounded-xl border hairline px-3.5 py-3">
          <div className="text-[12.5px] font-medium text-[var(--color-sub)]">{pick(locale, L.effective)}</div>
          <div className="mono mt-1 text-[17px] font-semibold">{Number.isFinite(effRate) ? effRate.toPrecision(6) : "—"}</div>
        </div>
      </div>

      <RateStatusLine rates={rates} />
      <RatesError rates={rates} />
      <HowNote />
    </ToolPanel>
  );
}
