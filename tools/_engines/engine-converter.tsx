"use client";

import { useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { Icon } from "@/components/icons";
import { ToolPanel } from "@/components/ui";
import { convert } from "../_lib/fx";
import {
  BigOut, CurrencySelect, Field, HowNote, NumIn, RateStatusLine, RatesError,
  fmtDate, pairRate, pick, useCurrencyName, useRates,
} from "./fx-ui";

/**
 * Currency converter — the featured engine. Amount + pair, precision control
 * (2/4/6 decimals), rate and inverse rate display. Rates come from the shared
 * useRates() pipeline; the multiplication is `convert()` from _lib/fx.ts.
 */

const L = {
  amount: { en: "Amount", zh: "金额", ja: "金額", es: "Cantidad", pt: "Valor" },
  from: { en: "From", zh: "从", ja: "変換元", es: "De", pt: "De" },
  to: { en: "To", zh: "转换为", ja: "変換先", es: "A", pt: "Para" },
  precision: { en: "Decimal places", zh: "小数位数", ja: "小数桁数", es: "Decimales", pt: "Casas decimais" },
  result: { en: "Converted amount", zh: "换算结果", ja: "換算結果", es: "Resultado", pt: "Valor convertido" },
  swap: { en: "Swap currencies", zh: "交换货币", ja: "通貨を入れ替え", es: "Invertir monedas", pt: "Inverter moedas" },
  inverse: { en: "inverse", zh: "反向", ja: "逆レート", es: "inversa", pt: "inversa" },
  copy: { en: "Copy result", zh: "复制结果", ja: "結果をコピー", es: "Copiar resultado", pt: "Copiar resultado" },
  copied: { en: "Copied", zh: "已复制", ja: "コピーしました", es: "Copiado", pt: "Copiado" },
  offline: {
    en: "Offline — showing the rate table cached on your device",
    zh: "离线中——正在使用设备上缓存的汇率表",
    ja: "オフライン — デバイスにキャッシュ済みのレート表を表示中",
    es: "Sin conexión — mostrando la tabla de tipos en caché de tu dispositivo",
    pt: "Offline — exibindo a tabela de cotações em cache do seu dispositivo",
  },
};

const PRECISIONS = [2, 4, 6] as const;

export function ConverterEngine() {
  const { locale } = useI18n();
  const rates = useRates();
  const nameOf = useCurrencyName();
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [precision, setPrecision] = useState<number>(2);
  const [copied, setCopied] = useState(false);

  const a = Number(amount.replace(",", "."));
  const rate = pairRate(rates.rates, from, to);
  const result = Number.isFinite(a) ? convert(a, rate, precision) : NaN;
  const inverse = pairRate(rates.rates, to, from);
  const shown = Number.isFinite(result) ? result.toFixed(precision) : "—";
  const shownRate = Number.isFinite(rate) ? rate.toPrecision(6) : "—";
  const shownInverse = Number.isFinite(inverse) ? inverse.toPrecision(6) : "—";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${amount} ${from} = ${shown} ${to}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
        <div className="space-y-3">
          <Field label={pick(locale, L.amount)}>
            <NumIn value={amount} onChange={setAmount} aria={pick(locale, L.amount)} className="text-lg" />
          </Field>
          <Field label={pick(locale, L.from)}>
            <CurrencySelect value={from} onChange={setFrom} aria={pick(locale, L.from)} rates={rates.rates} />
          </Field>
        </div>
        <button
          type="button"
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
          className="mx-auto mb-1.5 inline-flex rounded-full border hairline p-2.5 text-[var(--color-sub)] transition-colors hover:bg-[var(--color-surface)]"
          aria-label={pick(locale, L.swap)}
        >
          <Icon name="swap" size={18} />
        </button>
        <div className="space-y-3">
          <Field label={pick(locale, L.precision)}>
            <select
              className="field mono"
              value={precision}
              onChange={(e) => setPrecision(Number(e.target.value))}
              aria-label={pick(locale, L.precision)}
            >
              {PRECISIONS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </Field>
          <Field label={pick(locale, L.to)}>
            <CurrencySelect value={to} onChange={setTo} aria={pick(locale, L.to)} rates={rates.rates} />
          </Field>
        </div>
      </div>

      <BigOut label={pick(locale, L.result)}>
        {shown}
        <span className="ml-2 text-[14px] font-medium text-[var(--color-sub)]">{to} · {nameOf(to)}</span>
      </BigOut>

      {Number.isFinite(rate) && (
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-[var(--color-sub)]">
          <span>
            1 {from} = <strong className="font-semibold text-[var(--color-ink)]">{shownRate}</strong> {to}
          </span>
          <span>
            1 {to} = <strong className="font-semibold text-[var(--color-ink)]">{shownInverse}</strong> {from}
            <span className="ml-1 text-[12px]">({pick(locale, L.inverse)})</span>
          </span>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-1 rounded-full border hairline px-2.5 py-1 text-[12.5px] font-medium transition-colors hover:bg-[var(--color-surface)]"
          >
            <Icon name={copied ? "check" : "file"} size={13} />
            {copied ? pick(locale, L.copied) : pick(locale, L.copy)}
          </button>
        </div>
      )}

      {rates.stale && rates.updated !== null && (
        <p className="mt-3 rounded-xl bg-[var(--color-surface)] px-3.5 py-2.5 text-[12.5px] text-[var(--color-sub)]">
          {pick(locale, L.offline)} · {fmtDate(rates.updated, locale)}
        </p>
      )}

      <RateStatusLine rates={rates} />
      <RatesError rates={rates} />
      <HowNote />
    </ToolPanel>
  );
}
