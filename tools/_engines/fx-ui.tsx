"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useI18n } from "@/components/i18n-provider";
import { Icon } from "@/components/icons";
import type { Locale } from "@/lib/site";

/**
 * RateSnap engine shared layer: UI primitives plus the single rates pipeline.
 * Every engine fetches mid-market rates from the free, keyless
 * open.er-api.com endpoint, caches the table in localStorage for one hour,
 * and falls back to the cached table (clearly labeled as such) when the
 * network is unavailable. The conversion math itself runs on tools/_lib/fx.ts.
 */

export const API = "https://open.er-api.com/v6/latest/USD";
export const CACHE_KEY = "ratesnap-fx-rates-v1";
export const TTL_MS = 60 * 60 * 1000; // 1 hour

export const COMMON = [
  "USD", "EUR", "GBP", "JPY", "CNY", "INR", "AUD", "CAD", "CHF", "HKD",
  "SGD", "KRW", "BRL", "MXN", "RUB", "TRY", "AED", "SAR", "THB", "NZD",
  "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "ZAR", "TWD", "VND", "PHP",
  "IDR", "MYR", "ILS", "EGP", "NGN", "ARS", "CLP", "COP", "PKR", "BDT",
];

type CacheEntry = { t: number; r: Record<string, number> };

function readCache(): CacheEntry | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CacheEntry;
    if (parsed && typeof parsed.t === "number" && parsed.r && typeof parsed.r.USD === "number") return parsed;
    return null;
  } catch {
    return null;
  }
}

function writeCache(entry: CacheEntry): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // storage unavailable — session-only caching then
  }
}

export type RatesStatus = "loading" | "ok" | "error";

export type Rates = {
  rates: Record<string, number> | null;
  updated: number | null;
  stale: boolean;
  status: RatesStatus;
  refresh: () => void;
};

/**
 * One rates pipeline shared by all four engines (and therefore one cache key —
 * whatever the converter fetched, the table and margin tools reuse).
 */
export function useRates(): Rates {
  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [updated, setUpdated] = useState<number | null>(null);
  const [stale, setStale] = useState(false);
  const [status, setStatus] = useState<RatesStatus>("loading");
  const askedRef = useRef(false);

  const load = useCallback(async (force: boolean) => {
    const cache = readCache();
    if (!force && cache && Date.now() - cache.t < TTL_MS) {
      setRates(cache.r);
      setUpdated(cache.t);
      setStale(false);
      setStatus("ok");
      return;
    }
    setStatus((s) => (s === "ok" ? s : "loading"));
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { result?: string; time_last_update_unix?: number; rates?: Record<string, number> };
      if (data.result !== "success" || !data.rates || !data.rates.USD) throw new Error("bad payload");
      const entry: CacheEntry = { t: (data.time_last_update_unix ?? Date.now() / 1000) * 1000, r: data.rates };
      writeCache(entry);
      setRates(entry.r);
      setUpdated(entry.t);
      setStale(false);
      setStatus("ok");
    } catch {
      if (cache) {
        // offline fallback: keep serving the cached table, clearly labeled below
        setRates(cache.r);
        setUpdated(cache.t);
        setStale(true);
        setStatus("ok");
      } else {
        setStatus("error");
      }
    }
  }, []);

  useEffect(() => {
    if (askedRef.current) return;
    askedRef.current = true;
    void load(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refresh = useCallback(() => void load(true), [load]);
  return { rates, updated, stale, status, refresh };
}

export const INTL_LOCALES: Record<Locale, string> = {
  en: "en-US", zh: "zh-CN", ja: "ja-JP", es: "es-ES", pt: "pt-BR",
  fr: "fr-FR", de: "de-DE", ru: "ru-RU", it: "it-IT", tr: "tr-TR",
  ko: "ko-KR", ar: "ar-SA", hi: "hi-IN", id: "id-ID", vi: "vi-VN",
};

/** Engine-local per-language strings: pick by locale, fall back to English. */
export function pick(locale: Locale, rec: Record<string, string>): string {
  return rec[locale] ?? rec.en;
}

export function fmtDate(ms: number, locale: Locale): string {
  return new Intl.DateTimeFormat(INTL_LOCALES[locale] ?? INTL_LOCALES.en, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(ms);
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <span className="block text-[13px] font-medium text-[var(--color-sub)]">{label}</span>
      {children}
    </div>
  );
}

export function NumIn({
  value,
  onChange,
  aria,
  className = "",
}: {
  value: string;
  onChange: (v: string) => void;
  aria: string;
  className?: string;
}) {
  return (
    <input
      type="number"
      inputMode="decimal"
      className={`field bare mono ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={aria}
    />
  );
}

export function Sel({
  value,
  onChange,
  aria,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  aria: string;
  children: ReactNode;
}) {
  return (
    <select className="field" value={value} onChange={(e) => onChange(e.target.value)} aria-label={aria}>
      {children}
    </select>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="text-[13px] leading-5 text-[var(--color-sub)]">{children}</p>;
}

/** Large read-only result box. */
export function BigOut({ children, label }: { children: ReactNode; label: string }) {
  return (
    <output
      aria-live="polite"
      aria-label={label}
      className="mono mt-5 block rounded-xl border hairline bg-[var(--color-surface)] px-4 py-3.5 text-lg font-semibold"
    >
      {children}
    </output>
  );
}

/** Currency name in the UI locale, e.g. "EUR · Euro". */
export function useCurrencyName(): (code: string) => string {
  const { locale } = useI18n();
  return useCallback(
    (code: string) => {
      try {
        return new Intl.DisplayNames([INTL_LOCALES[locale] ?? INTL_LOCALES.en], { type: "currency" }).of(code) ?? code;
      } catch {
        return code;
      }
    },
    [locale],
  );
}

/** Currency selector with a Common optgroup plus every code the API serves. */
export function CurrencySelect({
  value,
  onChange,
  aria,
  rates,
}: {
  value: string;
  onChange: (v: string) => void;
  aria: string;
  rates: Record<string, number> | null;
}) {
  const nameOf = useCurrencyName();
  const { locale } = useI18n();
  if (!rates) {
    // rates not loaded yet — keep the select usable with the current code
    return (
      <Sel value={value} onChange={onChange} aria={aria}>
        <option value={value}>{value}</option>
      </Sel>
    );
  }
  const all = Object.keys(rates).sort();
  const common = COMMON.filter((c) => c in rates);
  const rest = all.filter((c) => !(COMMON as string[]).includes(c));
  const opts = (list: string[]) =>
    list.map((c) => (
      <option key={c} value={c}>
        {c} · {nameOf(c)}
      </option>
    ));
  return (
    <Sel value={value} onChange={onChange} aria={aria}>
      <optgroup label={pick(locale, L.commonGroup)}>{opts(common)}</optgroup>
      <optgroup label={pick(locale, L.allGroup)}>{opts(rest)}</optgroup>
    </Sel>
  );
}

const L = {
  commonGroup: { en: "Common", zh: "常用", ja: "よく使う通貨", es: "Frecuentes", pt: "Comuns" },
  allGroup: { en: "All currencies", zh: "全部货币", ja: "すべての通貨", es: "Todas las monedas", pt: "Todas as moedas" },
  loading: {
    en: "Loading exchange rates…", zh: "正在加载汇率……", ja: "為替レートを読み込み中…",
    es: "Cargando tipos de cambio…", pt: "Carregando cotações…",
  },
  live: {
    en: "Mid-market rates updated", zh: "中间价汇率更新于", ja: "ミッドマーケットレートの更新:",
    es: "Tipos de referencia actualizados el", pt: "Cotações de referência atualizadas em",
  },
  staleNote: {
    en: "Showing rates cached on your device from {t} — the rate service could not be reached just now.",
    zh: "当前显示设备上的缓存汇率(更新于 {t})——暂时无法连接汇率服务。",
    ja: "現在デバイスにキャッシュされたレートを表示しています({t} 更新)——ただ今レートサービスに接続できません。",
    es: "Mostrando tipos en caché de tu dispositivo del {t} — no se pudo contactar el servicio ahora.",
    pt: "Exibindo cotações em cache do seu dispositivo de {t} — não foi possível contactar o serviço agora.",
  },
  refresh: {
    en: "Refresh rates", zh: "刷新汇率", ja: "レートを更新", es: "Actualizar tasas", pt: "Atualizar cotações",
  },
  error: {
    en: "Could not load exchange rates. Check your internet connection and try again — nothing you type is ever sent anywhere; only this free rate table is downloaded.",
    zh: "无法加载汇率。请检查网络连接后重试——你输入的内容不会被发送到任何地方,下载的只有这张免费汇率表。",
    ja: "為替レートを読み込めませんでした。ネットワーク接続を確認して再試行してください。入力内容が送信されることはなく、取得するのはこの無料のレート表だけです。",
    es: "No se pudieron cargar los tipos de cambio. Revise su conexión e inténtelo de nuevo — nada de lo que escriba se envía a ningún sitio; solo se descarga esta tabla de tipos gratuita.",
    pt: "Não foi possível carregar as cotações. Verifique sua conexão e tente novamente — nada do que você digita é enviado; apenas esta tabela de cotações gratuita é baixada.",
  },
  retry: { en: "Retry", zh: "重试", ja: "再試行", es: "Reintentar", pt: "Tentar novamente" },
  howNote: {
    en: "How it works: the rate table is fetched from the free open.er-api.com service (no key, no account) and cached on your device for one hour; all arithmetic runs locally in your browser.",
    zh: "工作方式:汇率表来自免费的 open.er-api.com 服务(无需密钥、无需注册),并在你的设备上缓存一小时;所有计算都在浏览器本地完成。",
    ja: "仕組み:レート表は無料の open.er-api.com から取得し(キー・登録不要)、1 時間デバイスにキャッシュします。計算はすべてブラウザ内で行われます。",
    es: "Cómo funciona: la tabla de tipos se obtiene del servicio gratuito open.er-api.com (sin clave ni cuenta) y se guarda en tu dispositivo durante una hora; todos los cálculos ocurren en tu navegador.",
    pt: "Como funciona: a tabela de cotações vem do serviço gratuito open.er-api.com (sem chave, sem cadastro) e fica em cache no seu dispositivo por uma hora; toda a aritmética roda no seu navegador.",
  },
};

/** Shared status line: loading / updated-at / stale disclosure, plus refresh. */
export function RateStatusLine({ rates }: { rates: Rates }) {
  const { locale } = useI18n();
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
      <p className="text-[13px] text-[var(--color-sub)]" aria-live="polite">
        {rates.status === "loading" && pick(locale, L.loading)}
        {rates.status === "ok" && rates.updated !== null &&
          (rates.stale
            ? pick(locale, L.staleNote).replace("{t}", fmtDate(rates.updated, locale))
            : `${pick(locale, L.live)} ${fmtDate(rates.updated, locale)}.`)}
      </p>
      {rates.status !== "error" && (
        <button
          type="button"
          onClick={rates.refresh}
          className="inline-flex items-center gap-1.5 rounded-full border hairline px-3.5 py-1.5 text-[13px] font-medium transition-colors hover:bg-[var(--color-surface)]"
        >
          <Icon name="rotate" size={14} />
          {pick(locale, L.refresh)}
        </button>
      )}
    </div>
  );
}

/** Shared hard-failure banner with retry. */
export function RatesError({ rates }: { rates: Rates }) {
  const { locale } = useI18n();
  if (rates.status !== "error") return null;
  return (
    <div className="mt-4 rounded-xl border hairline bg-[var(--color-surface)] px-4 py-3.5" role="alert">
      <p className="text-[14px] font-medium text-[var(--color-bad)]">{pick(locale, L.error)}</p>
      <button
        type="button"
        onClick={rates.refresh}
        className="mt-2.5 inline-flex rounded-full bg-[var(--color-ink)] px-4 py-1.5 text-[13.5px] font-medium text-white"
      >
        {pick(locale, L.retry)}
      </button>
    </div>
  );
}

/** Shared disclosure footnote. */
export function HowNote() {
  const { locale } = useI18n();
  return (
    <div className="mt-4">
      <Note>{pick(locale, L.howNote)}</Note>
    </div>
  );
}

/** Rate from the USD-based table for an arbitrary pair: units of `to` per 1 `from`. */
export function pairRate(rates: Record<string, number> | null, from: string, to: string): number {
  if (!rates) return NaN;
  const rf = rates[from];
  const rt = rates[to];
  if (!Number.isFinite(rf) || !Number.isFinite(rt) || rf <= 0) return NaN;
  return rt / rf;
}
