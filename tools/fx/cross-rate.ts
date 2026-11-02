import { CrossEngine } from "../_engines/engine-cross";
import { defineTool } from "../_lib/types";

export default defineTool({
  slug: "cross-rate",
  category: "utility",
  icon: "globe",
  engine: { component: CrossEngine },
  related: ["currency-converter", "conversion-table", "fx-margin-calculator"],
  copy: {
    en: {
      name: "Cross Rate Calculator",
      h1: "Cross rate via a third currency — checked against the direct quote",
      tagline:
        "Chain USD→EUR→GBP and compare the computed USD→GBP cross rate with the direct rate from the table, so you can see the two routes agree to six digits.",
      intro: [
        "A cross rate is the exchange rate between two currencies worked out through a third. Multiply the two legs — A→B and B→C — and you get A→C without needing a market that quotes the pair directly. This tool does the multiplication with one tested function and then, because a cross rate you cannot verify is just arithmetic theater, compares the result with the direct A→C quote from the same mid-market snapshot and shows both numbers.",
        "Because both routes come from one snapshot, they agree to six significant digits — which is exactly what an arbitrage-free market looks like from the outside. If someone ever quotes you legs that do not reassemble into the direct rate, that gap is either their margin or a stale quote; this page gives you the reference to notice it.",
      ],
      steps: [
        "Pick currency A — the one you start from.",
        "Pick currency B — the middle leg you route the conversion through.",
        "Pick currency C — the destination.",
        "Read the three legs and the verdict line: computed cross rate vs direct quote.",
      ],
      faqs: [
        {
          q: "What is a cross rate, in one sentence?",
          a: "The rate between two currencies expressed through a third: 1 USD = 0.90 EUR and 1 EUR = 0.85 GBP imply 1 USD = 0.765 GBP, because the euros cancel out when you multiply the two legs.",
        },
        {
          q: "Why do the computed and direct rates match exactly here?",
          a: "Both numbers are derived from one mid-market snapshot: the direct A→C quote and the two legs come from the same table, so the multiplication reconstructs the direct quote up to floating-point dust. A real trading floor can show tiny gaps between routes; a free reference feed does not.",
        },
        {
          q: "When would the two routes disagree in real life?",
          a: "When the two legs come from different sources or moments — a bank quoting you its own spread, a remittance service with a marked-up rate, or one leg cached from before a sharp move. The gap you measure against a snapshot like this one is the cost hidden in the routing.",
        },
        {
          q: "Can I use this to find arbitrage?",
          a: "No — and the page will never show you an arbitrage opportunity, because it deliberately derives everything from a single consistent snapshot. It is a checking tool: a fast way to verify that a quoted chain of rates holds together.",
        },
      ],
    },
    zh: {
      name: "交叉汇率计算器",
      h1: "经由第三种货币的交叉汇率——并与直接报价互相校验",
      tagline:
        "串联 美元→欧元→英镑,把算出的交叉汇率与汇率表里的直接报价并排对比——两条路径应当在六位有效数字内完全一致。",
      intro: [
        "交叉汇率是通过第三种货币推出来的两种货币之间的汇率。把 A→B 和 B→C 两段相乘,不需要市场直接报这个货币对,就能得到 A→C。本工具用同一个经过测试的函数完成乘法,然后——因为无法校验的交叉汇率只是算术表演——把结果与同一份中间价快照里 A→C 的直接报价对比,两个数字都摆出来给你看。",
        "两条路径来自同一份快照,所以它们在六位有效数字内完全一致——这正是无套利市场从外面看起来的样子。如果哪天有人报给你一组“拼不回去”的两段报价,那个缺口要么是他的点差,要么是过期报价;这个页面给了你识破它的参照物。",
      ],
      steps: [
        "选择货币 A——你的出发点。",
        "选择货币 B——换算路径经过的中间货币。",
        "选择货币 C——目的地。",
        "读三段汇率和结论行:算出的交叉汇率 vs 直接报价。",
      ],
      faqs: [
        {
          q: "一句话解释什么是交叉汇率?",
          a: "通过第三种货币表达的两币汇率:1 美元 = 0.90 欧元、1 欧元 = 0.85 英镑,意味着 1 美元 = 0.765 英镑——两段相乘时欧元互相抵消。",
        },
        {
          q: "为什么算出的汇率和直接报价完全一致?",
          a: "因为两个数字都来自同一份中间价快照:直接 A→C 报价和两段汇率出自同一张表,乘法在消掉浮点尾差后精确还原直接报价。真实交易大厅的两条路径可能出现微小缝隙,免费参考数据源不会。",
        },
        {
          q: "现实中什么时候两条路径会不一致?",
          a: "当两段报价来自不同的来源或时刻——银行报的是自加点差,汇款服务的汇率被抬过价,或者其中一段是行情剧烈变动之前的缓存。对照这样一份快照量出来的缺口,就是藏在路径里的成本。",
        },
        {
          q: "能用它找套利机会吗?",
          a: "不能——页面也永远不会给你展示套利机会,因为它刻意让所有数字都出自同一份一致快照。它是一个校验工具:快速验证一组连环报价是否自洽。",
        },
      ],
    },
    ja: {
      name: "クロスレート計算",
      h1: "第 3 の通貨を経由するクロスレート — 直訳レートと照合",
      tagline:
        "USD→EUR→GBP をつなぎ、計算した USD→GBP クロスレートをレート表の直接レートと並べて比較 — 2 経路が有効数字 6 桁で一致することを確認できます。",
      intro: [
        "クロスレートとは、第 3 の通貨を介して求める 2 通貨間のレートです。A→B と B→C の 2 レッグを掛ければ、市場がこのペアを直接提示しなくても A→C が得られます。このツールは検証済みの 1 つの関数で掛け算を行い、さらに — 照合できないクロスレートは算数のショーにすぎない — 結果を同じミッドマーケット・スナップショットの A→C 直接レートと比べて、両方の数字を並べます。",
        "両経路は同じスナップショットから来るため、有効数字 6 桁で一致します — 市場がアービトラージフリーに見えるとはそういうことです。もし誰かが再構成できない 2 レッグを提示してきたら、その隙間はマージンか古いレートです。このページはそれに気づくための基準を与えます。",
      ],
      steps: [
        "通貨 A を選びます — 出発点です。",
        "通貨 B を選びます — 換算が経由する中継レッグです。",
        "通貨 C を選びます — 到着地です。",
        "3 本のレッグと結論行を読みます:計算クロスレート vs 直接レート。",
      ],
      faqs: [
        {
          q: "クロスレートを一言でいうと?",
          a: "第 3 の通貨を通じて表した 2 通貨間のレートです:1 USD = 0.90 EUR、1 EUR = 0.85 GBP なら、ユーロが相殺されて 1 USD = 0.765 GBP となります。",
        },
        {
          q: "計算値と直接レートがぴったり一致するのはなぜ?",
          a: "両方とも同じミッドマーケット・スナップショットから導かれているからです:直接の A→C も 2 レッグも同じ表に由来し、掛け算は浮動小数点の塵を除けば直接レートを正確に再現します。実際のトレーディングフロアでは経路間の微小なズレが起こり得ますが、無料の参考フィードでは起きません。",
        },
        {
          q: "現実に 2 経路が食い違うのはどんなとき?",
          a: "2 レッグが別のソースや時刻から来たときです — 銀行は自前のスプレッドを上乗せし、送金サービスはレートを持ち上げ、片方のレッグは急変前のキャッシュかもしれません。このようなスナップショットと比べた差が、経路に隠れたコストです。",
        },
        {
          q: "アービトラージ探しに使えますか?",
          a: "使えません — そしてこのページがアービトラージの機会を示すことは決してありません。すべてを意図的に一つの一貫したスナップショットから導いているからです。これは検証ツール:一連のレートが辻褄が合うかを素早く確かめる手段です。",
        },
      ],
    },
    es: {
      name: "Calculadora de tipo cruzado",
      h1: "Tipo cruzado vía una tercera moneda — verificado contra la cotización directa",
      tagline:
        "Encadene USD→EUR→GBP y compare el tipo cruzado USD→GBP calculado con el directo de la tabla, para ver que ambas rutas coinciden en seis cifras significativas.",
      intro: [
        "Un tipo cruzado es el tipo de cambio entre dos monedas calculado a través de una tercera. Multiplique los dos tramos — A→B y B→C — y obtiene A→C sin necesidad de que un mercado cotice el par directamente. Esta herramienta hace la multiplicación con una única función probada y después — porque un tipo cruzado que no se puede verificar es teatro aritmético — compara el resultado con la cotización directa A→C de la misma instantánea de mercado medio y muestra ambos números.",
        "Como las dos rutas vienen de una sola instantánea, coinciden en seis cifras significativas — que es exactamente el aspecto de un mercado sin arbitrajes visto desde fuera. Si alguien le cita algún día dos tramos que no encajan de vuelta en el tipo directo, ese hueco es su margen o una cotización caducada; esta página le da la referencia para notarlo.",
      ],
      steps: [
        "Elija la moneda A — desde la que parte.",
        "Elija la moneda B — el tramo intermedio de la ruta.",
        "Elija la moneda C — el destino.",
        "Lea los tres tramos y la línea de veredicto: cruzado calculado frente a cotización directa.",
      ],
      faqs: [
        {
          q: "¿Qué es un tipo cruzado, en una frase?",
          a: "El tipo entre dos monedas expresado a través de una tercera: 1 USD = 0,90 EUR y 1 EUR = 0,85 GBP implican 1 USD = 0,765 GBP, porque los euros se cancelan al multiplicar los tramos.",
        },
        {
          q: "¿Por qué coinciden exactamente el cálculo y la cotización directa?",
          a: "Porque ambos números salen de una misma instantánea: la cotización directa A→C y los dos tramos proceden de la misma tabla, así que la multiplicación reconstruye la cotización directa salvo polvo de coma flotante. Una sala de trading real puede mostrar microgaps entre rutas; un servicio gratuito de referencia, no.",
        },
        {
          q: "¿Cuándo discrepan las dos rutas en la vida real?",
          a: "Cuando los tramos vienen de fuentes o momentos distintos: un banco que cita su propio diferencial, un servicio de remesas con el tipo inflado, o un tramo guardado en caché de antes de un brusco movimiento. La brecha medida contra una instantánea como esta es el coste escondido en la ruta.",
        },
        {
          q: "¿Sirve para buscar arbitrajes?",
          a: "No — y esta página nunca le mostrará una oportunidad de arbitraje, porque deriva todo deliberadamente de una única instantánea coherente. Es una herramienta de verificación: una forma rápida de comprobar que una cadena de tipos citados se sostiene.",
        },
      ],
    },
    pt: {
      name: "Calculadora de taxa cruzada",
      h1: "Taxa cruzada via uma terceira moeda — conferida com a cotação direta",
      tagline:
        "Encadeie USD→EUR→GBP e compare a taxa cruzada USD→GBP calculada com a direta da tabela, para ver as duas rotas coincidirem em seis algarismos significativos.",
      intro: [
        "Uma taxa cruzada é o câmbio entre duas moedas obtido por meio de uma terceira. Multiplique os dois trechos — A→B e B→C — e você tem A→C sem depender de um mercado que cote o par diretamente. Esta ferramenta faz a multiplicação com uma única função testada e depois — porque uma taxa cruzada que não se pode conferir é teatro aritmético — compara o resultado com a cotação direta A→C do mesmo instante de mercado médio e mostra os dois números.",
        "Como as duas rotas vêm de um só instante, elas coincidem em seis algarismos significativos — que é exatamente a cara de um mercado sem arbitragem vista de fora. Se um dia alguém lhe cotar dois trechos que não se remontam na taxa direta, esse buraco é a margem dele ou uma cotação vencida; esta página lhe dá a referência para perceber.",
      ],
      steps: [
        "Escolha a moeda A — de onde você parte.",
        "Escolha a moeda B — o trecho do meio da rota.",
        "Escolha a moeda C — o destino.",
        "Leia os três trechos e a linha do veredito: cruzada calculada versus cotação direta.",
      ],
      faqs: [
        {
          q: "O que é uma taxa cruzada, em uma frase?",
          a: "A taxa entre duas moedas expressa por uma terceira: 1 USD = 0,90 EUR e 1 EUR = 0,85 GBP implicam 1 USD = 0,765 GBP, porque os euros se cancelam ao multiplicar os trechos.",
        },
        {
          q: "Por que o valor calculado e a cotação direta batem exatamente?",
          a: "Porque os dois números derivam do mesmo instante: a cotação direta A→C e os dois trechos vêm da mesma tabela, então a multiplicação reconstrói a cotação direta salvo poeira de ponto flutuante. Uma mesa de câmbio de verdade pode mostrar microvãos entre rotas; um serviço gratuito de referência, não.",
        },
        {
          q: "Quando as duas rotas divergem na vida real?",
          a: "Quando os trechos vêm de fontes ou momentos diferentes: um banco cotando o próprio spread, um serviço de remessas com taxa inflada, ou um trecho em cache de antes de um salto brusco. A diferença medida contra um instante como este é o custo escondido na rota.",
        },
        {
          q: "Dá para procurar arbitragem com isso?",
          a: "Não — e a página nunca lhe mostrará uma oportunidade de arbitragem, porque ela deriva tudo, de propósito, de um único instantâneo coerente. É uma ferramenta de conferência: um jeito rápido de verificar se uma cadeia de taxas cotadas se sustenta.",
        },
      ],
    },
  },
});
