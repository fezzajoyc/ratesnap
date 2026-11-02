import { ConverterEngine } from "../_engines/engine-converter";
import { defineTool } from "../_lib/types";

export default defineTool({
  slug: "currency-converter",
  category: "utility",
  icon: "swap",
  featured: true,
  engine: { component: ConverterEngine },
  related: ["conversion-table", "cross-rate", "fx-margin-calculator"],
  copy: {
    en: {
      name: "Currency Converter",
      h1: "Currency converter with precision control",
      tagline:
        "Convert between 160+ currencies with 2, 4 or 6 decimal places, live mid-market rates and the inverse rate — precision your accountant will not complain about.",
      intro: [
        "Most converters stop at two decimals and a number that looks authoritative. This one lets you choose the precision — 2, 4 or 6 decimal places — shows the rate and the inverse rate side by side, and tells you exactly when the rate table was last updated. Rates come from the free open.er-api.com mid-market feed, cached on your device for an hour; the arithmetic runs in your browser, and nothing you type is sent anywhere.",
        "If the rate service cannot be reached, the converter falls back to the table already cached on your device and labels it clearly, so a stale number never masquerades as a live one.",
      ],
      steps: [
        "Type the amount and pick the two currencies — 160+ codes, named in your language.",
        "Choose 2, 4 or 6 decimal places depending on how much precision the recipient expects.",
        "Check the rate line: forward and inverse rates are both shown, with the update timestamp.",
        "Swap the pair with one click to run the conversion backwards.",
      ],
      faqs: [
        {
          q: "Where do the exchange rates come from?",
          a: "From open.er-api.com, a free mid-market rate feed that needs no key or account. The whole table is fetched once and cached on your device for one hour, and every page that shows rates states when the table was last updated.",
        },
        {
          q: "Why would I need 4 or 6 decimal places?",
          a: "Two decimals match banknotes, but not invoices. Metals pricing, large-volume settlements and unit-price comparisons routinely work at 4–6 decimals, where the rounding is worth real money. The mid-market rate itself carries more digits than a 2-decimal display can show.",
        },
        {
          q: "Does this rate include my bank's margin?",
          a: "No — what you see is the mid-market rate, the midpoint between buy and sell quotes. Banks add a margin on top of it. Use the FX margin calculator to see what a rate plus a margin percentage actually pays out.",
        },
        {
          q: "What happens offline?",
          a: "The converter keeps working from the rate table cached on your device and marks the results as cached rather than pretending they are live. The first visit needs a connection; after that the last table survives until it is refreshed.",
        },
      ],
    },
    zh: {
      name: "汇率换算器",
      h1: "可控制精度的汇率换算",
      tagline:
        "在 160 多种货币之间换算,可选 2、4 或 6 位小数,显示实时中间价与反向汇率——精度高到会计也挑不出毛病。",
      intro: [
        "大多数换算器只给两位小数,再摆出一个看起来很权威的数字。这个换算器让你自己选精度——2、4 或 6 位小数——同时并排显示正向与反向汇率,并明确标注汇率表的更新时间。汇率来自免费的 open.er-api.com 中间价数据源,在你的设备上缓存一小时;乘法在浏览器里完成,你输入的任何内容都不会被发送出去。",
        "如果汇率服务暂时连不上,换算器会退回设备上已缓存的汇率表,并如实标注“缓存”,绝不让过期数字冒充实时的。",
      ],
      steps: [
        "输入金额并选择两种货币——支持 160 多个代码,并以你的语言显示货币名称。",
        "按对方要求的精度选择 2、4 或 6 位小数。",
        "看汇率行:正向与反向汇率并列显示,并附更新时间。",
        "一键交换两种货币,即可反向换算。",
      ],
      faqs: [
        {
          q: "汇率数据从哪里来?",
          a: "来自 open.er-api.com——一个免费、无需密钥、无需注册的中间价数据源。整张汇率表只获取一次,在设备上缓存一小时;每个显示汇率的页面都会标注数据更新时间。",
        },
        {
          q: "为什么会需要 4 或 6 位小数?",
          a: "两位小数对应的是纸币,不是账单。贵金属报价、大额结算和单价比较通常在 4–6 位小数上运作,那时舍入误差就是真金白银。中间价本身的位数也远超两位小数能显示的范围。",
        },
        {
          q: "这个汇率包含银行的点差吗?",
          a: "不包含。你看到的是中间价——买入价与卖出价的中点,银行会在此基础上加收点差。想知道“汇率 + 点差”实际能换到多少,请用 FX 点差计算器。",
        },
        {
          q: "离线时会怎样?",
          a: "换算器会继续用设备上缓存的汇率表工作,并把结果明确标注为“缓存”而不是假装实时。首次访问需要联网;之后最近一份汇率表会一直保留到下次刷新。",
        },
      ],
    },
    ja: {
      name: "通貨コンバーター",
      h1: "精度を選べる通貨換算",
      tagline:
        "160 以上の通貨を小数 2・4・6 桁で換算。ミッドマーケットレートと逆レートを並べて表示 — 経理担当も納得の精度です。",
      intro: [
        "多くの換算ツールは小数 2 桁で打ち切られ、それでいて権威ありげな数字を提示します。このツールは精度を自分で選べます — 小数 2・4・6 桁 — さらに順レートと逆レートを並べて表示し、レート表の更新時刻も明示します。レートは無料の open.er-api.com ミッドマーケット配信から取得し、1 時間デバイスにキャッシュ。掛け算はブラウザ内で行われ、入力した内容が送信されることはありません。",
        "レートサービスに接続できない場合は、デバイスに保存済みのレート表にフォールバックし、「キャッシュ」と明示します。古い数字が最新のふりをすることはありません。",
      ],
      steps: [
        "金額を入力し、2 つの通貨を選びます — 160 以上の通貨コードを日本語名付きで表示。",
        "相手先が求める精度に合わせて、小数 2・4・6 桁を選択します。",
        "レート行を確認:順レートと逆レートを並べて、更新時刻とともに表示します。",
        "ワンクリックで通貨ペアを入れ替えれば、逆方向の換算もすぐできます。",
      ],
      faqs: [
        {
          q: "為替レートはどこから来ますか?",
          a: "キーも登録も不要な無料のミッドマーケット配信 open.er-api.com からです。レート表は 1 回だけ取得して 1 時間デバイスにキャッシュし、レートを表示するページには必ず更新時刻を示しています。",
        },
        {
          q: "小数 4 桁や 6 桁が必要なのはどんなとき?",
          a: "小数 2 桁は紙幣の世界の話です。請求書は違います。貴金属の価格、大量決済、単価比較は 4〜6 桁で行われ、その桁での丸めが実際の金額になります。ミッドマーケットレート自体、2 桁では収まりきらない桁を持っています。",
        },
        {
          q: "表示レートに銀行のマージンは含まれますか?",
          a: "含まれません。表示はミッドマーケットレート — 売値と買値の中間値 — で、銀行はそこに上乗せします。レートとマージン率を掛けた実際の受取額は、FX マージン計算で確認できます。",
        },
        {
          q: "オフラインではどうなりますか?",
          a: "デバイスにキャッシュされたレート表で動作を続け、結果を「キャッシュ」と明示します。リアルタイムのふりはしません。初回のみ接続が必要で、以降は最新のレート表が更新まで保持されます。",
        },
      ],
    },
    es: {
      name: "Conversor de monedas",
      h1: "Conversor de divisas con precisión a su medida",
      tagline:
        "Convierta entre más de 160 monedas con 2, 4 o 6 decimales, tipos de referencia en vivo y la tasa inversa — con la precisión que su contable no va a cuestionar.",
      intro: [
        "La mayoría de conversores se detienen en dos decimales y presentan una cifra con aire oficial. Este le deja elegir la precisión — 2, 4 o 6 decimales — muestra el tipo y el tipo inverso juntos, e indica exactamente cuándo se actualizó la tabla por última vez. Los tipos vienen del servicio gratuito de mercado medio open.er-api.com, en caché en su dispositivo durante una hora; la aritmética ocurre en su navegador y nada de lo que escribe se envía a ningún sitio.",
        "Si el servicio de tipos no responde, el conversor sigue con la tabla ya guardada en su dispositivo y lo declara sin rodeos: una cifra desactualizada nunca se hace pasar por reciente.",
      ],
      steps: [
        "Escriba el importe y elija las dos monedas — más de 160 códigos, con nombre en su idioma.",
        "Elija 2, 4 o 6 decimales según la precisión que espere quien cobra.",
        "Revise la línea del tipo: se muestran la tasa directa y la inversa, con la fecha de actualización.",
        "Invierta el par con un clic para hacer la conversión al revés.",
      ],
      faqs: [
        {
          q: "¿De dónde salen los tipos de cambio?",
          a: "De open.er-api.com, un servicio gratuito de tipos de mercado medio que no pide clave ni cuenta. La tabla completa se descarga una vez y queda en caché en su dispositivo una hora; toda página que muestra tipos indica cuándo se actualizó.",
        },
        {
          q: "¿Para qué sirven 4 o 6 decimales?",
          a: "Dos decimales son para billetes; las facturas son otra cosa. Los metales, la liquidación de grandes volúmenes y la comparación de precios unitarios trabajan a 4–6 decimales, donde redondear vale dinero real. El propio tipo de mercado medio tiene más dígitos de los que dos decimales pueden enseñar.",
        },
        {
          q: "¿Este tipo incluye el margen de mi banco?",
          a: "No — lo que ve es el tipo de mercado medio, el punto medio entre compra y venta. Los bancos añaden su margen encima. Use la calculadora de margen FX para ver qué paga de verdad un tipo con un porcentaje de margen.",
        },
        {
          q: "¿Qué pasa sin conexión?",
          a: "El conversor sigue funcionando con la tabla en caché de su dispositivo y etiqueta el resultado como guardado, no como reciente. La primera visita necesita conexión; después, la última tabla se conserva hasta que la actualice.",
        },
      ],
    },
    pt: {
      name: "Conversor de moedas",
      h1: "Conversor de câmbio com precisão sob controle",
      tagline:
        "Converta entre mais de 160 moedas com 2, 4 ou 6 casas decimais, cotações de referência ao vivo e a taxa inversa — com a precisão que seu contador exige.",
      intro: [
        "A maioria dos conversores para em duas casas decimais e entrega um número com cara de definitivo. Este deixa você escolher a precisão — 2, 4 ou 6 casas — mostra a taxa e a taxa inversa lado a lado e informa exatamente quando a tabela foi atualizada. As cotações vêm do serviço gratuito de mercado médio open.er-api.com, em cache no seu dispositivo por uma hora; a aritmética roda no navegador e nada do que você digita é enviado a lugar algum.",
        "Se o serviço de cotações não responder, o conversor continua com a tabela já guardada no seu dispositivo e diz isso com todas as letras: número antigo nunca se passa por recente.",
      ],
      steps: [
        "Digite o valor e escolha as duas moedas — mais de 160 códigos, com nome no seu idioma.",
        "Escolha 2, 4 ou 6 casas decimais conforme a precisão que quem recebe espera.",
        "Confira a linha da taxa: direta e inversa aparecem juntas, com o horário da atualização.",
        "Inverta o par com um clique para converter no sentido contrário.",
      ],
      faqs: [
        {
          q: "De onde vêm as cotações?",
          a: "Do open.er-api.com, um serviço gratuito de cotações de mercado médio que não pede chave nem cadastro. A tabela inteira é baixada uma vez e fica em cache no seu dispositivo por uma hora; toda página que mostra cotações informa quando foi atualizada.",
        },
        {
          q: "Por que eu precisaria de 4 ou 6 casas decimais?",
          a: "Duas casas servem para cédulas; faturas são outro assunto. Metais preciosos, liquidações de grande volume e comparação de preço unitário trabalham com 4–6 casas, onde o arredondamento vale dinheiro de verdade. A própria taxa de mercado médio tem mais dígitos do que duas casas conseguem mostrar.",
        },
        {
          q: "Essa taxa inclui a margem do meu banco?",
          a: "Não — o que você vê é a taxa de mercado médio, o ponto médio entre compra e venda. Os bancos adicionam a margem por cima. Use a calculadora de margem FX para ver quanto rende de fato uma taxa com um percentual de margem.",
        },
        {
          q: "O que acontece offline?",
          a: "O conversor segue funcionando com a tabela em cache do seu dispositivo e marca o resultado como salvo, não como recente. Só a primeira visita precisa de conexão; depois, a última tabela fica guardada até a próxima atualização.",
        },
      ],
    },
  },
});
