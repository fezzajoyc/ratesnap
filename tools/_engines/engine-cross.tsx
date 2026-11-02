"use client";

import { useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { ToolPanel } from "@/components/ui";
import { crossRate } from "../_lib/fx";
import {
  CurrencySelect, Field, HowNote, RateStatusLine, RatesError, pairRate, pick, useRates,
} from "./fx-ui";

/**
 * Cross-rate engine: A→B and B→C from the table, A→C computed with the
 * `crossRate()` pure function, then compared against the table's direct A→C.
 * Both legs and the direct quote come from the same mid-market snapshot, so
 * the two A→C numbers agree to the displayed precision — the page states that
 * explicitly (arbitrage-free consistency) instead of faking a spread.
 */

const L = {
  a: { en: "Currency A (start)", zh: "货币 A(起始)", ja: "通貨 A(開始)", es: "Moneda A (origen)", pt: "Moeda A (origem)" },
  b: { en: "Currency B (via)", zh: "货币 B(经由)", ja: "通貨 B(経由)", es: "Moneda B (vía)", pt: "Moeda B (via)" },
  c: { en: "Currency C (end)", zh: "货币 C(终点)", ja: "通貨 C(到着)", es: "Moneda C (destino)", pt: "Moeda C (destino)" },
  legAB: { en: "A → B", zh: "A → B", ja: "A → B", es: "A → B", pt: "A → B" },
  legBC: { en: "B → C", zh: "B → C", ja: "B → C", es: "B → C", pt: "B → C" },
  cross: { en: "A → C cross rate (A→B × B→C)", zh: "A → C 交叉汇率(A→B × B→C)", ja: "A → C クロスレート(A→B × B→C)", es: "A → C cruzada (A→B × B→C)", pt: "A → C cruzada (A→B × B→C)" },
  direct: { en: "A → C direct from the rate table", zh: "A → C 直接汇率(来自汇率表)", ja: "A → C 直接レート(レート表より)", es: "A → C directa (de la tabla)", pt: "A → C direta (da tabela)" },
  consistent: {
    en: "Both routes agree to 6 significant digits — one mid-market snapshot, no hidden spread between legs.",
    zh: "两条路径在 6 位有效数字内一致——同一份中间价快照,各段之间没有隐藏点差。",
    ja: "どちらの経路も有効数字 6 桁で一致 — 同一のミッドマーケット快照であり、各レッグ間の隠れたスプレッドはありません。",
    es: "Ambas rutas coinciden en 6 cifras significativas — una misma instantánea de referencia, sin diferencial oculto entre tramos.",
    pt: "Ambas as rotas coincidem em 6 algarismos significativos — um mesmo instantâneo de referência, sem spread oculto entre os trechos.",
  },
};

export function CrossEngine() {
  const { locale } = useI18n();
  const rates = useRates();
  const [a, setA] = useState("USD");
  const [b, setB] = useState("EUR");
  const [c, setC] = useState("GBP");

  const rAB = pairRate(rates.rates, a, b);
  const rBC = pairRate(rates.rates, b, c);
  const computed = crossRate(rAB, rBC);
  const direct = pairRate(rates.rates, a, c);
  const show = Number.isFinite(computed) && Number.isFinite(direct);
  const consistent = show && Math.abs(computed - direct) <= 1e-9 * Math.max(1, direct);

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label={pick(locale, L.a)}>
          <CurrencySelect value={a} onChange={setA} aria={pick(locale, L.a)} rates={rates.rates} />
        </Field>
        <Field label={pick(locale, L.b)}>
          <CurrencySelect value={b} onChange={setB} aria={pick(locale, L.b)} rates={rates.rates} />
        </Field>
        <Field label={pick(locale, L.c)}>
          <CurrencySelect value={c} onChange={setC} aria={pick(locale, L.c)} rates={rates.rates} />
        </Field>
      </div>

      <dl className="mt-5 space-y-2.5">
        {[
          { k: `${pick(locale, L.legAB)}: 1 ${a}`, v: Number.isFinite(rAB) ? rAB.toPrecision(6) : "—", s: b },
          { k: `${pick(locale, L.legBC)}: 1 ${b}`, v: Number.isFinite(rBC) ? rBC.toPrecision(6) : "—", s: c },
          { k: pick(locale, L.cross), v: Number.isFinite(computed) ? computed.toPrecision(6) : "—", s: c, strong: true },
          { k: pick(locale, L.direct), v: Number.isFinite(direct) ? direct.toPrecision(6) : "—", s: c },
        ].map((row) => (
          <div
            key={row.k}
            className={`flex items-baseline justify-between gap-4 rounded-xl border hairline px-4 py-3 ${
              row.strong ? "bg-[var(--color-surface)]" : ""
            }`}
          >
            <dt className="text-[13px] font-medium text-[var(--color-sub)]">{row.k}</dt>
            <dd className="mono text-[16px] font-semibold text-[var(--color-ink)]" aria-live="polite">
              {row.v}
              <span className="ml-1.5 text-[12px] font-medium text-[var(--color-sub)]">{row.s}</span>
            </dd>
          </div>
        ))}
      </dl>

      {consistent && <p className="mt-4 text-[13px] font-medium text-[var(--color-good)]">✓ {pick(locale, L.consistent)}</p>}

      <RateStatusLine rates={rates} />
      <RatesError rates={rates} />
      <HowNote />
    </ToolPanel>
  );
}
