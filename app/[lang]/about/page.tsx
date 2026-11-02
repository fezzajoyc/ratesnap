import { dict } from "@/lib/i18n";
import { isLocale, LOCALES, type Locale } from "@/lib/site";
import { ALL_TOOLS } from "@/tools/registry";
import { Container, Prose, SectionHead } from "@/components/ui";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

const CONTENT: Partial<Record<Locale, string[]>> = {
  en: [
    "RateSnap is a set of currency tools that run entirely in your browser. There is no backend and no account: the amounts you enter are converted by JavaScript on your own device, and the only thing downloaded is a free mid-market rate table from open.er-api.com — cached on your device, timestamped, and disclosed on every page that uses it.",
    "That design gives us three properties we care about. It is private by construction — your numbers are never sent anywhere, so nothing can leak. It is fast — the arithmetic is a multiplication on your machine. And it is honest — every page states where its rate came from and when the table was last updated, and a cached table is labeled as cached.",
    "Today the set covers four tools: a precision converter, whole conversion tables, cross rates via a third currency, and FX margin math — the four things people actually need from a rate, beyond the single number an answer box shows.",
  ],
  zh: [
    "RateSnap 是一组完全在浏览器里运行的汇率工具。没有后端,也不需要账号:你输入的金额由你自己设备上的 JavaScript 完成换算,唯一的下载是从 open.er-api.com 获取的免费中间价汇率表——缓存在你的设备上、带时间戳、并在每个用到它的页面上如实说明。",
    "这个设计带来三个我们看重的性质:隐私是构造出来的——你的数字从不外发,谈不上泄露;速度快——换算只是你机器上的一次乘法;诚实——每个页面都写明汇率来源和更新时间,缓存表会被如实标注为缓存。",
    "目前涵盖四个工具:精度可控的换算器、整表换算、经由第三种货币的交叉汇率,以及外汇点差计算——正是答案框那个单一数字之外,人们真正需要的四件事。",
  ],
  ja: [
    "RateSnap は、完全にブラウザ内で動く為替ツール集です。バックエンドもアカウントもありません。入力した金額は自分のデバイス上の JavaScript が換算し、ダウンロードするのは open.er-api.com の無料ミッドマーケット・レート表だけ — デバイスにキャッシュされ、時刻つきで、使うページごとに開示されます。",
    "この設計には、私たちが大切にする 3 つの性質があります。プライバシーは構造的に保証される(あなたの数字はどこにも送られない)、速い(換算はあなたのマシン上の一回の掛け算)、そして誠実(各ページはレートの出所と更新時刻を示し、キャッシュはキャッシュと明示する)。",
    "現在そろえているのは 4 つのツールです:精度を選べるコンバーター、換算表、第 3 の通貨を経由するクロスレート、そして FX マージン計算 — 答えボックスの 1 つの数字の向こうにある、本当に必要な 4 つです。",
  ],
  es: [
    "RateSnap es un conjunto de herramientas de divisa que funcionan por completo en su navegador. No hay backend ni cuenta: los importes que introduce los convierte el JavaScript de su propio dispositivo, y lo único que se descarga es una tabla de tipos de mercado medio gratuita de open.er-api.com — en caché en su dispositivo, con marca de tiempo y declarada en cada página que la usa.",
    "Ese diseño nos da tres propiedades que nos importan. Privacidad por construcción: sus números no se envían a ningún sitio, así que no puede haber fugas. Velocidad: la conversión es una multiplicación en su máquina. Honestidad: cada página declara de dónde viene su tipo y cuándo se actualizó la tabla, y una tabla en caché se anuncia como tal.",
    "Hoy el conjunto cubre cuatro herramientas: un conversor con precisión a elegir, tablas de conversión completas, tipos cruzados vía una tercera moneda y el cálculo del margen FX — las cuatro cosas que la gente necesita de verdad de un tipo, más allá del número único de un recuadro de respuestas.",
  ],
  pt: [
    "RateSnap é um conjunto de ferramentas de câmbio que rodam inteiramente no seu navegador. Não há backend nem conta: os valores que você digita são convertidos pelo JavaScript do seu próprio dispositivo, e o único download é uma tabela de mercado médio gratuita do open.er-api.com — em cache no seu dispositivo, com carimbo de hora e divulgada em toda página que a usa.",
    "Esse design nos dá três propriedades que valorizamos. Privacidade por construção: seus números não são enviados a lugar algum, logo não há vazamento. Velocidade: a conversão é uma multiplicação na sua máquina. Honestidade: toda página declara de onde vem a taxa e quando a tabela foi atualizada, e tabela em cache é anunciada como cache.",
    "Hoje o conjunto cobre quatro ferramentas: conversor com precisão escolhível, tabelas de conversão inteiras, taxas cruzadas via uma terceira moeda e o cálculo de margem FX — as quatro coisas que as pessoas precisam de verdade de uma taxa, além do número único da caixa de respostas.",
  ],
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = dict(lang as Locale);
  return (
    <Container className="max-w-3xl py-12">
      <SectionHead title={t.nav.about} />
      <Prose paragraphs={CONTENT[lang as Locale] ?? CONTENT.en!} />
      <p className="mt-6 text-[14px] text-[var(--color-sub)]">
        {ALL_TOOLS.length} tools · {LOCALES.length} languages
      </p>
    </Container>
  );
}
