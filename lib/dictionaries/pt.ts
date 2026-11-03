import type { Dictionary } from "../i18n";

const pt: Dictionary = {
  brand: "RateSnap",
  tagline: "Ferramentas de câmbio que rodam no seu navegador.",
  metaDesc:
    "Ferramentas gratuitas de câmbio no seu navegador: conversor com precisão escolhível, tabelas de conversão, taxas cruzadas e cálculo de margem FX. Cotações do open.er-api.com, em cache no seu dispositivo.",

  nav: {
    tools: "Todas as ferramentas",
    categories: "Categorias",
    about: "Sobre",
    menu: "Menu",
    language: "Idioma",
  },

  home: {
    heroTitle: "Cotações de câmbio com a precisão que seu contador quer",
    heroSub:
      "Converta mais de 160 moedas com 2 a 6 casas decimais, leia tabelas completas, confira taxas cruzadas e veja quanto sobra da sua fatura depois da margem do banco — em 15 idiomas, sem cadastro.",
    browseAll: "Ver todas as ferramentas",
    pinned: "Fixados",
    pin: "Fixar no topo",
    unpin: "Remover dos fixados",
    popular: "Populares agora",
    categoriesTitle: "Categorias",
    featuredTitle: "Ferramentas populares",
    trustLocal: "Seus arquivos ficam no seu dispositivo",
    trustFree: "Grátis, sem conta",
    trustFast: "Instantâneo, funciona offline",
    rotating: [
      "USD para EUR com 4 casas decimais — os dígitos que a caixa de respostas joga fora",
      "De 1 a 10.000 numa tabela — um instante, a coluna inteira coerente",
      "Taxas cruzadas encadeadas e conferidas com a cotação direta",
      "Veja o que os 2% do banco tiram da sua fatura — antes de assinar",
    ],
    statsLabels: { tools: "ferramentas", languages: "idiomas", uploads: "envios", accounts: "contas" },
    eyebrow: "Grátis sempre",
    heroCtaSecondary: "Como funciona",
    statsTools: "{n} ferramentas",
    statsLanguages: "{n} idiomas",
    statsUploads: "0 envios",
    statsAccounts: "0 contas",
    categoriesSub: "Quatro ferramentas, uma tabela de cotações honesta, tudo no seu dispositivo.",
    popularSub: "As ferramentas mais usadas.",
    privacyTitle: "Seus valores nunca saem do seu dispositivo.",
    privacySub: "Não existe etapa de upload. As ferramentas são JavaScript no seu navegador — a única chamada de rede é a tabela de cotações gratuita do open.er-api.com, com cache, carimbo de hora e aviso.",
    privacyPoint1T: "Processamento local",
    privacyPoint1D: "Os valores que você digita são convertidos na memória, em JavaScript. Nada é transmitido a lugar algum — o único tráfego de rede é baixar a tabela de cotações, e ela não leva nenhum dos seus dados.",
    privacyPoint2T: "Sem contas",
    privacyPoint2D: "Sem cadastro, sem e-mail, sem histórico. Abra e use.",
    privacyPoint3T: "Honestos por design",
    privacyPoint3D: "Se algo não dá para fazer no navegador, dizemos em vez de fingir.",
    privacyLink: "Ler a nota de privacidade",
    endTitle: "Escolha uma ferramenta. Ela funciona.",
    endSub: "Quinze idiomas, uma fonte de cotações gratuita, nada para instalar.",
  },

  tools: {
    title: "Todas as ferramentas",
    subtitle: "Pesquise entre {count} ferramentas gratuitas. Sem uploads, sem cadastro.",
    filterPlaceholder: "Pesquisar ferramentas…",
    count: "{count} ferramentas",
    empty: "Nenhuma ferramenta corresponde a “{query}”.",
  },

  categories: {
    pdf: { name: "PDF", desc: "Junte, divida, converta e edite PDFs sem enviar nada para servidores." },
    image: { name: "Imagem", desc: "Comprima, redimensione, recorte e converta imagens no navegador." },
    text: { name: "Texto", desc: "Conte, limpe, ordene e transforme texto na hora, enquanto digita." },
    developer: { name: "Desenvolvedor", desc: "Formatadores, codificadores, decodificadores e geradores para o dia a dia." },
    seo: { name: "SEO", desc: "Meta tags, dados estruturados, prévia de SERP e outros auxiliares de SEO." },
    security: { name: "Segurança", desc: "Senhas, hashes e consultas — gerados e verificados no seu dispositivo." },
    utility: { name: "Utilidades", desc: "Conversor, tabelas de conversão, taxas cruzadas e margem FX — sobre cotações de mercado médio, em cache no seu dispositivo." },
  },

  tool: {
    howTo: "Como usar",
    faq: "Perguntas frequentes",
    related: "Ferramentas relacionadas",
    nextStep: "Próximos passos",
    copyLink: "Copiar link",
    privacyNote:
      "Esta ferramenta roda inteiramente no seu navegador. Seus dados nunca saem do seu dispositivo e não são enviados a nenhum servidor.",
    inCategory: "Mais em {category}",
    backToCategory: "Todas as ferramentas de {category}",
  },

  common: {
    openTool: "Abrir ferramenta",
    copy: "Copiar",
    copied: "Copiado",
    download: "Baixar",
    reset: "Redefinir",
    swap: "Inverter",
    clear: "Limpar",
    error: "Algo deu errado. Verifique os dados e tente novamente.",
    input: "Entrada",
    output: "Resultado",
    settings: "Opções",
    dropFiles: "Arraste arquivos aqui ou clique para escolher",
    dropFile: "Arraste um arquivo aqui ou clique para escolher",
    processing: "Processando…",
    fileSize: "Tamanho",
    sample: "Testar um exemplo",
    uppercase: "MAIÚSCULAS",
  },

  unit: {
    from: "De",
    to: "Para",
    amount: "Quantidade",
    result: "Resultado",
    common: "Conversões comuns",
    formula: "Fórmula",
    allUnits: "Todas as unidades",
  },

  text: {
    stats: {
      words: "Palavras",
      characters: "Caracteres",
      charsNoSpaces: "Sem espaços",
      sentences: "Frases",
      paragraphs: "Parágrafos",
      lines: "Linhas",
      readingTime: "Tempo de leitura",
      readingMinutes: "{n} min de leitura",
    },
  },

  footer: {
    line: "Ferramentas de câmbio gratuitas. Cotações do open.er-api.com, em cache no seu dispositivo; seus números nunca saem dele.",
    privacy: "Privacidade",
    terms: "Termos",
    about: "Sobre",
    badges: "Selos",
    language: "Idioma",
  },

  badge: {
    title: "Selos do RateSnap",
    desc: "Coloque um selo do RateSnap no seu site, README ou documentação. Ele linka para cá e conta que as ferramentas de câmbio rodam no navegador, com cotações divulgadas e em cache.",
    voluntary: "Incorporar é totalmente voluntário — escolha um selo se gostar do projeto. Não precisa de permissão.",
    md: "Markdown (README)",
    html: "HTML (site)",
    thanks: "Obrigado por divulgar — cada incorporação ajuda mais pessoas a descobrir ferramentas que respeitam seus arquivos.",
  },

    embed: {
    title: "Incorporar esta ferramenta",
    desc: "Coloque esta ferramenta no seu site com uma linha — ela roda no navegador do visitante.",
  },

    mcp: {
    title: "Servidor MCP — ferramentas acessíveis para IA",
    desc1: "O RateSnap inclui um servidor MCP (Model Context Protocol): assistentes de IA como Claude ou Cursor podem executar as mesmas conversões e cálculos de taxas deste site — mesma lógica testada, sem reimplementação.",
    desc2: "As ferramentas rodam as funções puras do próprio site: conversão, taxas cruzadas, margem e arredondamento de moeda. A taxa é fornecida por quem chama; a execução acontece na máquina do cliente de IA via npx — nada é enviado aos nossos servidores.",
    toolsTitle: "Ferramentas executáveis ({n})",
    requiresNode: "Requer Node.js 18+. O servidor roda localmente via stdio; apenas as chamadas que você fizer são calculadas na sua máquina.",
    privacy: "Requer Node.js 18+. O servidor roda localmente via stdio; apenas as chamadas que você fizer são calculadas na sua máquina.",
  },

    notFound: {
    title: "Página não encontrada",
    body: "A ferramenta que você procura não existe. Explore todas as ferramentas.",
    home: "Ir para a página inicial",
  },
};

export default pt;
