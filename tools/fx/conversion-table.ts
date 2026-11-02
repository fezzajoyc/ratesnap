import { TableEngine } from "../_engines/engine-table";
import { defineTool } from "../_lib/types";

export default defineTool({
  slug: "conversion-table",
  category: "utility",
  icon: "layers",
  engine: { component: TableEngine },
  related: ["currency-converter", "cross-rate", "fx-margin-calculator"],
  copy: {
    en: {
      name: "Currency Conversion Table",
      h1: "Currency conversion table for any pair",
      tagline:
        "One page with the whole ladder: 1, 5, 10, 50, 100, 500, 1000, 5000 and 10000 units converted between any two currencies at one mid-market snapshot.",
      intro: [
        "Search results love to answer \"how much is 100 dollars in euros\" and stop there. This table answers the whole family of questions at once: nine preset amounts from 1 to 10,000, all converted with the same rate from the same snapshot, so the column is internally consistent instead of mixing quotes fetched minutes apart. Pick any base and target — 160+ currencies — and the amounts round to the target currency's own decimal convention (none for yen, three for dinars).",
        "The rate is fetched once from the free open.er-api.com feed and cached on your device for an hour, with the update time shown above the table. When the network is down, the last cached table keeps the page usable and says so.",
      ],
      steps: [
        "Choose the base currency — the one whose amounts you want to see listed.",
        "Choose the target currency; rows convert each preset amount into it.",
        "Read the ladder: 1, 5, 10, 50, 100, 500, 1000, 5000, 10000 — one rate, one snapshot.",
        "Check the rate line under the table for the exact figure and its timestamp.",
      ],
      faqs: [
        {
          q: "Why these nine amounts?",
          a: "They are the numbers people actually type into search: 1 for the rate itself, the small ones for pocket arithmetic, the round hundreds and thousands for invoices, purchases and budgeting. A fixed ladder also keeps every row on one consistent rate instead of sampling the market nine times.",
        },
        {
          q: "Why does the yen row have no decimals and the dinar three?",
          a: "That follows the ISO 4217 minor-unit convention: yen, won and their peers have no fractional unit in practice, while the Bahraini, Kuwaiti and a few other dinars trade at thousandths. Rounding a yen amount to two fake decimals would suggest a precision the currency does not have.",
        },
        {
          q: "Is the rate the same one my bank uses?",
          a: "It is the mid-market rate — the reference midpoint between buy and sell prices. Your bank adds its margin on top, so expect the executed rate to be a little worse. The FX margin calculator shows exactly how much a given margin percentage costs.",
        },
        {
          q: "How current is the table?",
          a: "The timestamp next to the table tells you. Rates refresh at most hourly from open.er-api.com and stay cached on your device between visits; if the service is unreachable, the cached table is shown with a clear stale notice.",
        },
      ],
    },
    zh: {
      name: "货币换算表",
      h1: "任意货币对的一次成型换算表",
      tagline:
        "一张表给全梯度:1、5、10、50、100、500、1000、5000、10000,同一份中间价快照一次换算完毕,行行一致。",
      intro: [
        "搜索结果喜欢只回答“100 美元是多少欧元”就收工。这张表把一整族问题一次答完:从 1 到 10000 的九档预设金额,全部用同一份快照里的同一个汇率换算——整列数字内部一致,而不是把几分钟内抓到的不同报价混在一起。基准和目标货币任选,支持 160 多种货币;金额按目标货币自己的小数惯例取整(日元无小数,第纳尔三位)。",
        "汇率从免费的 open.er-api.com 获取一次,在设备上缓存一小时,表格上方标注更新时间。断网时,最近一份缓存汇率表能让页面继续可用,并如实说明。",
      ],
      steps: [
        "选择基准货币——你想看到它各档金额被列出来的那个。",
        "选择目标货币;每一行都是一档预设金额换算成它的结果。",
        "读这张梯度表:1、5、10、50、100、500、1000、5000、10000——一个汇率,一份快照。",
        "表格下方的汇率行给出精确数字和对应时间戳。",
      ],
      faqs: [
        {
          q: "为什么是这九档金额?",
          a: "它们就是人们搜索时真的会输入的数字:1 档代表汇率本身,小面额用来心算,整百整千对应账单、采购和预算。固定的梯度还能保证每一行都用同一个汇率,而不是对市场采样九次。",
        },
        {
          q: "为什么日元那一行没有小数,第纳尔却有三位?",
          a: "这遵循 ISO 4217 的最小单位惯例:日元、韩元等在实际流通中没有更小的分数单位,而巴林、科威特等第纳尔按千分之一交易。把日元金额硬凑成两位小数,等于暗示一种这种货币并不存在的精度。",
        },
        {
          q: "这个汇率和我银行用的是同一个吗?",
          a: "这是中间价——买卖报价的参考中点。银行会在此基础上加点差,所以实际成交价通常略差一点。具体差多少,可以用 FX 点差计算器算清楚。",
        },
        {
          q: "表里的数据有多新?",
          a: "看表格旁边的时间戳。汇率最多每小时从 open.er-api.com 刷新一次,并在两次访问之间缓存在你的设备上;服务连不上时会显示缓存表,并附明确的过期提示。",
        },
      ],
    },
    ja: {
      name: "通貨換算テーブル",
      h1: "あらゆる通貨ペアの換算表",
      tagline:
        "1・5・10・50・100・500・1000・5000・10000 の全段を一つのページに。同一スナップショットのミッドマーケットレートで一気に換算します。",
      intro: [
        "検索結果は「100 ドルは何ユーロ?」に答えて終わりがちです。このテーブルはその一族の質問にまとめて答えます:1 から 10,000 までの 9 段階の定額を、同じスナップショットの同じレートで換算 — 列全体が内部整合し、数分差の違うレートを混ぜません。基準通貨と相手通貨は 160 以上から自由に選べ、金額は相手通貨の小数慣行に合わせて丸めます(円は小数なし、ディナールは 3 桁)。",
        "レートは無料の open.er-api.com から 1 回だけ取得し、1 時間デバイスにキャッシュ。更新時刻はテーブルの上に表示します。ネットワークが使えないときは、キャッシュ済みのテーブルでページを動かし続け、その旨を明示します。",
      ],
      steps: [
        "基準通貨を選びます — 各段の金額を並べたい側です。",
        "相手通貨を選ぶと、各行が定額をそれに換算した値になります。",
        "1・5・10・50・100・500・1000・5000・10000 の並びをどうぞ — 一つのレート、一つのスナップショット。",
        "テーブル下のレート行に、正確な数値と時刻が出ます。",
      ],
      faqs: [
        {
          q: "なぜこの 9 段なのですか?",
          a: "人が実際に検索窓に打ち込む数字だからです:1 はレートそのもの、小さい段は暗算用、丸い百・千の段は請求書や買い物、予算のため。固定の並びにすれば、市場を 9 回サンプリングする代わりに全行が一つのレートで揃います。",
        },
        {
          q: "円の行に小数がなく、ディナールは 3 桁なのはなぜ?",
          a: "ISO 4217 の補助単位の慣行に従っています:円やウォンなどは実際上の分数単位がなく、バーレーンやクウェートなどのディナールは 1/1000 単位で取引されます。円を偽りの 2 桁に丸めるのは、その通貨が持たない精度を示唆することになります。",
        },
        {
          q: "このレートは銀行と同じですか?",
          a: "ミッドマーケットレート — 売値と買値の中間の参考値です。銀行はそこにマージンを上乗せするので、実際の執行レートは少し悪くなります。どれだけ違うかは FX マージン計算で確かめられます。",
        },
        {
          q: "テーブルはどのくらい新しいですか?",
          a: "テーブルの隣の時刻を見てください。レートは最大で毎時 open.er-api.com から更新され、訪問の合間はデバイスにキャッシュされます。サービスに届かない場合はキャッシュ表を古い表示付きで示します。",
        },
      ],
    },
    es: {
      name: "Tabla de conversión de monedas",
      h1: "Tabla de conversión para cualquier par de divisas",
      tagline:
        "Una sola página con toda la escalera: 1, 5, 10, 50, 100, 500, 1000, 5000 y 10000, convertidos entre dos monedas cualesquiera con una misma instantánea de mercado medio.",
      intro: [
        "Los resultados de búsqueda responden a «cuánto son 100 dólares en euros» y hasta ahí llegan. Esta tabla responde de una vez a toda la familia de preguntas: nueve importes prefijados del 1 al 10.000, todos convertidos con el mismo tipo de la misma instantánea, de modo que la columna es coherente consigo misma en lugar de mezclar cotizaciones tomadas minutos aparte. Elija cualquier par entre más de 160 monedas; los importes se redondean según la convención decimal de la moneda destino (ninguno para el yen, tres para los dinares).",
        "El tipo se descarga una vez del servicio gratuito open.er-api.com y queda en caché en su dispositivo una hora, con la hora de actualización sobre la tabla. Sin red, la última tabla guardada mantiene la página usable y lo dice.",
      ],
      steps: [
        "Elija la moneda base — aquella cuyos importes quiere ver listados.",
        "Elija la moneda destino; cada fila convierte un importe prefijado a ella.",
        "Lea la escalera: 1, 5, 10, 50, 100, 500, 1000, 5000, 10000 — un tipo, una instantánea.",
        "Consulte la línea del tipo bajo la tabla para la cifra exacta y su hora.",
      ],
      faqs: [
        {
          q: "¿Por qué esos nueve importes?",
          a: "Porque son los números que la gente escribe de verdad en el buscador: 1 para el tipo en sí, los pequeños para cuentas rápidas, los cientos y miles redondos para facturas, compras y presupuestos. Una escalera fija mantiene cada fila en un solo tipo coherente en vez de muestrear el mercado nueve veces.",
        },
        {
          q: "¿Por qué la fila del yen no tiene decimales y la del dinar tres?",
          a: "Sigue la convención de unidades menores ISO 4217: el yen, el won y sus semejantes no tienen unidad fraccionaria en la práctica, mientras que los dinares de Baréin, Kuwait y algún otro se cotizan en milésimas. Redondear el yen a dos decimales fingidos sugeriría una precisión que la moneda no tiene.",
        },
        {
          q: "¿Es el mismo tipo que usa mi banco?",
          a: "Es el tipo de mercado medio — el punto de referencia entre los precios de compra y venta. Su banco añade su margen encima, así que espere un tipo ejecutado algo peor. La calculadora de margen FX muestra cuánto cuesta exactamente cada porcentaje de margen.",
        },
        {
          q: "¿Cómo de actualizada está la tabla?",
          a: "La marca de tiempo junto a la tabla se lo dice. Los tipos se refrescan como mucho cada hora desde open.er-api.com y quedan en caché en su dispositivo entre visitas; si el servicio no responde, se muestra la tabla guardada con un aviso claro de obsolescencia.",
        },
      ],
    },
    pt: {
      name: "Tabela de conversão de moedas",
      h1: "Tabela de conversão para qualquer par de moedas",
      tagline:
        "Uma página com a escadinha inteira: 1, 5, 10, 50, 100, 500, 1000, 5000 e 10000, convertidos entre duas moedas quaisquer num único instante de mercado médio.",
      intro: [
        "Os resultados de busca respondem a \"quanto são 100 dólares em euros\" e param aí. Esta tabela responde de uma vez à família inteira de perguntas: nove valores pré-definidos de 1 a 10.000, todos convertidos com a mesma taxa do mesmo instante, então a coluna é consistente consigo mesma em vez de misturar cotações colhidas minutos apartadas. Escolha qualquer par entre mais de 160 moedas; os valores são arredondados pela convenção decimal da moeda de destino (nenhuma para o iene, três para os dinares).",
        "A taxa é baixada uma vez do serviço gratuito open.er-api.com e fica em cache no seu dispositivo por uma hora, com o horário da atualização acima da tabela. Sem rede, a última tabela guardada mantém a página útil — e diz isso.",
      ],
      steps: [
        "Escolha a moeda base — aquela cujos valores você quer ver listados.",
        "Escolha a moeda de destino; cada linha converte um valor pré-definido para ela.",
        "Leia a escadinha: 1, 5, 10, 50, 100, 500, 1000, 5000, 10000 — uma taxa, um instante.",
        "Veja a linha da taxa sob a tabela para o número exato e o horário.",
      ],
      faqs: [
        {
          q: "Por que esses nove valores?",
          a: "Porque são os números que as pessoas realmente digitam no buscador: 1 para a taxa em si, os pequenos para conta de cabeça, as centenas e milhares redondas para faturas, compras e orçamentos. Uma escada fixa mantém cada linha numa única taxa coerente em vez de amostrar o mercado nove vezes.",
        },
        {
          q: "Por que a linha do iene não tem decimais e a do dinar tem três?",
          a: "Segue a convenção de unidades menores da ISO 4217: o iene, o won e similares não têm unidade fracionária na prática, enquanto os dinares do Bahrein, do Kuwait e mais alguns são cotados em milésimos. Arredondar iene para duas casas falsas sugeriria uma precisão que a moeda não tem.",
        },
        {
          q: "É a mesma taxa que meu banco usa?",
          a: "É a taxa de mercado médio — o ponto de referência entre compra e venda. Seu banco adiciona a margem por cima, então espere uma taxa executada um pouco pior. A calculadora de margem FX mostra exatamente quanto custa cada percentual de margem.",
        },
        {
          q: "Quão atualizada está a tabela?",
          a: "O carimbo de hora ao lado da tabela responde. As cotações são renovadas no máximo de hora em hora pelo open.er-api.com e ficam em cache no seu dispositivo entre visitas; se o serviço não responder, a tabela guardada aparece com um aviso claro de desatualização.",
        },
      ],
    },
  },
});
