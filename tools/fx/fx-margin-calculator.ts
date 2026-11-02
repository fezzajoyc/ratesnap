import { MarginEngine } from "../_engines/engine-margin";
import { defineTool } from "../_lib/types";

export default defineTool({
  slug: "fx-margin-calculator",
  category: "utility",
  icon: "calc",
  engine: { component: MarginEngine },
  related: ["currency-converter", "conversion-table", "cross-rate"],
  copy: {
    en: {
      name: "FX Margin Calculator",
      h1: "What your invoice is really worth after the bank's margin",
      tagline:
        "Enter a foreign-currency invoice, the exchange rate and your bank's margin percentage, and see the gross, the hidden cost and the amount that actually lands.",
      intro: [
        "The mid-market rate is not the rate you get. Banks, card networks and payment services take a margin — often 1 to 4 percent — off every foreign-currency amount, and they rarely put the number in the same sentence as the headline rate. This calculator makes the gap visible: enter the invoice amount in its own currency, the rate you were quoted (prefilled with the live mid-market rate, editable to match your bank exactly), and the margin percentage. You get the gross value, the cost of the margin, the net amount that actually arrives and the effective rate you ended up with.",
        "Freelancers billing abroad and importers paying suppliers both live on this difference: on a 1000-unit invoice at 2 percent, it is real money every single month. Nothing is sent anywhere — the rate comes from the free open.er-api.com feed, cached an hour on your device, and the arithmetic runs locally.",
      ],
      steps: [
        "Enter the invoice amount and its currency.",
        "Enter your home currency — the one the money actually arrives in.",
        "Keep the live mid-market rate or overwrite it with the exact rate your bank quoted.",
        "Enter the margin percentage and read: gross, margin cost, net received, effective rate.",
      ],
      faqs: [
        {
          q: "What margin percentage should I enter?",
          a: "The cheapest route is usually the bank's stated FX fee plus any spread hidden in the rate: compare your bank's quoted rate to the mid-market rate shown here — the percent difference is the true margin. Card payments and payment platforms commonly run 1.5–4%; SWIFT wires add flat fees on top.",
        },
        {
          q: "Why does the calculator let me edit the rate?",
          a: "Because your contract is with your bank's number, not the mid-market. Overwriting the prefilled rate with the one actually quoted to you keeps the gross, cost and net figures honest for your specific transaction — the live rate is a convenience, not a constraint.",
        },
        {
          q: "Is the margin applied before or after conversion?",
          a: "This model converts the full invoice amount at the given rate, then takes the margin off the converted total — the way most percentage-based FX fees work in practice. If your provider instead widens the rate itself (quoting you a worse rate rather than charging a fee), entering that worse rate with 0% margin gives the same net answer.",
        },
        {
          q: "Does it round to my currency's convention?",
          a: "Yes. Results display at the home currency's ISO 4217 minor-unit precision — two decimals for most, none for yen or won, three for dinars and the Omani rial — using exact half-up rounding rather than floating-point guesswork.",
        },
      ],
    },
    zh: {
      name: "外汇点差计算器",
      h1: "扣除银行点差后,你的账单到底值多少",
      tagline:
        "输入外币账单金额、汇率和银行的点差百分比,一次看清毛额、隐性成本和实际到手的金额。",
      intro: [
        "中间价不是你拿到的汇率。银行、卡组织和支付服务商会对每一笔外币金额抽走 1%–4% 的点差,而且很少把具体数字和宣传汇率写在同一句话里。这个计算器把缺口摆到明处:输入账单金额和账单货币、你被报的汇率(已用实时中间价预填,可改成银行实际报价),再输入点差百分比,就能得到毛额、点差成本、实际到手的净额,以及你最终拿到的实际汇率。",
        "给海外客户开账单的自由职业者、给供应商付款的进口商,都活在这个差值上:一张 1000 单位的账单、2% 的点差,每个月都是真金白银。所有数据都不外发——汇率来自免费的 open.er-api.com 并在你的设备上缓存一小时,计算全部在本地完成。",
      ],
      steps: [
        "输入账单金额和账单货币。",
        "输入你的本币——钱最终落到哪个币种。",
        "保留实时中间价,或改写成银行实际报给你的那个汇率。",
        "输入点差百分比,读取四项:毛额、点差成本、到手净额、实际汇率。",
      ],
      faqs: [
        {
          q: "点差百分比该填多少?",
          a: "最便宜路径通常是银行公示的外汇手续费加上藏在汇率里的价差:把银行报价和这里的中间价一比,百分比差就是真实点差。刷卡和支付平台一般在 1.5%–4%,SWIFT 电汇还要另加固定费用。",
        },
        {
          q: "为什么允许改汇率?",
          a: "因为你签的合同认的是银行的数字,不是中间价。把预填的实时汇率改写成实际报价,毛额、成本、净额才对你的这笔交易诚实——实时汇率是便利,不是约束。",
        },
        {
          q: "点差是在换算前还是换算后扣?",
          a: "本模型先用给定汇率把账单全额换算,再从换算总额里扣点差——这也是实践中大多数按百分比计的外汇费用的做法。如果你的服务商是直接把汇率放宽(给你一个更差的汇率而不是另收费),填入那个更差的汇率、点差填 0%,得到的净额一样。",
        },
        {
          q: "结果会按我货币的小数惯例取整吗?",
          a: "会。结果按本币的 ISO 4217 最小单位精度显示——多数货币两位,日元、韩元零位,第纳尔和阿曼里亚尔三位——用的是精确的“四舍五入(半升)”,不是浮点数碰运气。",
        },
      ],
    },
    ja: {
      name: "FXマージン計算",
      h1: "銀行のマージンを引いたら、請求書は本当にいくら?",
      tagline:
        "外貨建て請求額・為替レート・銀行のマージン率を入力すれば、総額・隠れたコスト・実際に着金する金額が一度に見えます。",
      intro: [
        "ミッドマーケットレートは、あなたが実際にもらうレートではありません。銀行・カード会社・決済サービスは外貨建ての金額から 1〜4% のマージンを取りますが、その数字をアピール用のレートと同じ文に書くことはめったにありません。この計算機はその差を可視化します:請求額と通貨、提示されたレート(最新ミッドマーケットで事前入力、銀行の実勢レートに書き換え可)、マージン率を入れると、総額・マージンコスト・実際の着金額・実効レートが出ます。",
        "海外に請求するフリーランスも、仕入れ先に払う輸入業者も、この差の上で暮らしています:1000 単位の請求書に 2% なら、毎月リアルな金額です。データはどこにも送られません — レートは無料の open.er-api.com から 1 時間キャッシュされ、計算はすべてローカルで行われます。",
      ],
      steps: [
        "請求額とその通貨を入力します。",
        "自分の通貨 — 実際に着金する通貨 — を選びます。",
        "最新ミッドマーケットレートをそのまま使うか、銀行に提示された正確なレートに書き換えます。",
        "マージン率を入れて 4 つの数字を読みます:総額・マージンコスト・受取額・実効レート。",
      ],
      faqs: [
        {
          q: "マージン率はいくつを入れるべき?",
          a: "最も安い経路は、通常「銀行が明示する外貨手数料+レートに隠れたスプレッド」です。銀行の提示レートとここのミッドマーケットを比べ、その百分率の差が実マージン。カード決済や決済プラットフォームは 1.5〜4% が一般的で、SWIFT 送金は固定費が別途かかります。",
        },
        {
          q: "レートを編集できるのはなぜ?",
          a: "契約上効くのは銀行の数字であってミッドマーケットではないからです。事前入力を実際に提示されたレートに書き換えれば、総額・コスト・受取額が自分の取引について正直になります。最新レートは利便性であって制約ではありません。",
        },
        {
          q: "マージンは換算の前と後のどちらで引かれる?",
          a: "このモデルは請求額全額をレートで換算してから総額からマージンを引きます — 割合ベースの外貨手数料の実際のやり方です。提供元がレート自体を広げている(手数料ではなく悪いレートを提示している)なら、その悪いレートとマージン 0% を入れても同じ受取額になります。",
        },
        {
          q: "結果は通貨の慣行に合わせて丸められますか?",
          a: "はい。受取通貨の ISO 4217 補助単位の精度で表示します — 多くは 2 桁、円やウォンは 0 桁、ディナールやオマーン・リアルは 3 桁 — 浮動小数点の勘ではなく、厳密な half-up 丸めを使います。",
        },
      ],
    },
    es: {
      name: "Calculadora de margen FX",
      h1: "Lo que su factura vale de verdad después del margen del banco",
      tagline:
        "Introduzca una factura en moneda extranjera, el tipo de cambio y el porcentaje de margen de su banco, y vea el bruto, el coste oculto y lo que llega de verdad.",
      intro: [
        "El tipo de mercado medio no es el tipo que usted recibe. Bancos, redes de tarjetas y plataformas de pago se llevan un margen — entre el 1 y el 4 por ciento, habitualmente — de cada importe en divisa, y rara vez ponen la cifra en la misma frase que el tipo del titular. Esta calculadora hace visible la diferencia: introduzca el importe en su moneda, el tipo que le citaron (precargado con el mercado medio en vivo, editable para igualar a su banco) y el porcentaje de margen. Obtiene el valor bruto, el coste del margen, el importe neto que llega de verdad y el tipo efectivo resultante.",
        "Autónomos que facturan al extranjero e importadores que pagan a proveedores viven sobre esa diferencia: en una factura de 1000 unidades al 2 por ciento, es dinero real todos los meses. Nada se envía a ningún sitio — el tipo viene del servicio gratuito open.er-api.com, en caché una hora en su dispositivo, y la aritmética es local.",
      ],
      steps: [
        "Introduzca el importe de la factura y su moneda.",
        "Introduzca su moneda — en la que el dinero llega realmente.",
        "Conserve el mercado medio en vivo o sustitúyalo por el tipo exacto que le citó el banco.",
        "Introduzca el porcentaje de margen y lea: bruto, coste del margen, neto recibido, tipo efectivo.",
      ],
      faqs: [
        {
          q: "¿Qué porcentaje de margen debo introducir?",
          a: "La vía más barata suele ser la comisión de divisa declarada por el banco más el diferencial escondido en el tipo: compare el tipo citado por su banco con el mercado medio mostrado aquí — la diferencia porcentual es el margen real. Tarjetas y plataformas de pago suelen moverse entre el 1,5 y el 4%; las transferencias SWIFT añaden comisiones fijas.",
        },
        {
          q: "¿Por qué la calculadora me deja editar el tipo?",
          a: "Porque su contrato es con la cifra del banco, no con el mercado medio. Sobrescribir el tipo precargado con el que le citaron de verdad mantiene brutos, costes y netos honestos para su operación concreta — el tipo en vivo es una comodidad, no una obligación.",
        },
        {
          q: "¿El margen se aplica antes o después de convertir?",
          a: "Este modelo convierte el importe íntegro al tipo indicado y luego resta el margen del total convertido — como funcionan en la práctica la mayoría de comisiones porcentuales de divisa. Si su proveedor en cambio ensancha el propio tipo (le cita uno peor en vez de cobrar una comisión), introduzca ese tipo peor con 0% y el neto será el mismo.",
        },
        {
          q: "¿Se redondea según la convención de mi moneda?",
          a: "Sí. Los resultados se muestran con la precisión de unidades menores ISO 4217 de la moneda destino — dos decimales para casi todas, ninguno para yenes o wones, tres para dinares y el rial omaní — con redondeo medio hacia arriba exacto, no adivinanzas de coma flotante.",
        },
      ],
    },
    pt: {
      name: "Calculadora de margem FX",
      h1: "Quanto sua fatura vale de verdade depois da margem do banco",
      tagline:
        "Informe uma fatura em moeda estrangeira, a taxa de câmbio e a porcentagem de margem do seu banco, e veja o bruto, o custo escondido e o valor que cai na conta.",
      intro: [
        "A taxa de mercado médio não é a taxa que você recebe. Bancos, bandeiras de cartão e serviços de pagamento tiram uma margem — de 1 a 4 por cento, em geral — de todo valor em moeda estrangeira, e raramente colocam o número na mesma frase que a taxa do anúncio. Esta calculadora torna o vão visível: informe o valor da fatura na moeda dela, a taxa que cotaram para você (pré-preenchida com o mercado médio ao vivo, editável para bater com o seu banco) e a porcentagem de margem. Você recebe o valor bruto, o custo da margem, o valor líquido que chega de fato e a taxa efetiva final.",
        "Freelancers que faturam no exterior e importadores que pagam fornecedores vivem dessa diferença: numa fatura de 1000 unidades com 2 por cento, é dinheiro real todo mês. Nada é enviado a lugar algum — a taxa vem do serviço gratuito open.er-api.com, em cache por uma hora no seu dispositivo, e a aritmética é local.",
      ],
      steps: [
        "Informe o valor da fatura e a moeda dela.",
        "Informe a sua moeda — na qual o dinheiro realmente chega.",
        "Mantenha a taxa de mercado médio ao vivo ou substitua pela taxa exata que seu banco cotou.",
        "Informe a porcentagem de margem e leia: bruto, custo da margem, líquido recebido, taxa efetiva.",
      ],
      faqs: [
        {
          q: "Que porcentagem de margem devo informar?",
          a: "O caminho mais barato costuma ser a tarifa de câmbio declarada pelo banco mais o spread escondido na taxa: compare a taxa cotada pelo seu banco com o mercado médio mostrado aqui — a diferença percentual é a margem real. Pagamentos de cartão e plataformas ficam normalmente entre 1,5% e 4%; transferências SWIFT somam tarifas fixas.",
        },
        {
          q: "Por que a calculadora me deixa editar a taxa?",
          a: "Porque o seu contrato vale o número do banco, não o mercado médio. Sobrescrever a taxa pré-preenchida com a que cotaram de verdade mantém bruto, custo e líquido honestos para a sua operação específica — a taxa ao vivo é uma conveniência, não uma imposição.",
        },
        {
          q: "A margem é aplicada antes ou depois da conversão?",
          a: "Este modelo converte o valor integral pela taxa informada e depois desconta a margem do total convertido — como na prática funcionam a maioria das tarifas de câmbio em porcentagem. Se o provedor em vez disso alarga a própria taxa (cota uma pior em vez de cobrar tarifa), informe essa taxa pior com 0% e o líquido será o mesmo.",
        },
        {
          q: "O resultado é arredondado pela convenção da minha moeda?",
          a: "Sim. Os resultados aparecem com a precisão de unidades menores ISO 4217 da moeda de destino — duas casas para quase todas, nenhuma para iene ou won, três para dinares e o rial omanita — com arredondamento half-up exato, não chute de ponto flutuante.",
        },
      ],
    },
  },
});
