// it: dizionario UI italiano — forma chiavi identica a en (tests/seo.test.ts fa un confronto ricorsivo).
// Registro informale ("tu"), coerente con il resto del sito. "RateSnap" e i segnaposto {n}/{count}/{query}/{category} restano intatti.
const it = {
  brand: "RateSnap",
  tagline: "Strumenti di cambio che girano nel tuo browser.",
  metaDesc:
    "Strumenti gratuiti di cambio nel browser: convertitore con precisione a scelta, tabelle di conversione, tassi incrociati e calcolo del margine FX. Tassi da open.er-api.com, in cache sul tuo dispositivo.",

  nav: {
    tools: "Tutti gli strumenti",
    categories: "Categorie",
    about: "Chi siamo",
    menu: "Menu",
    language: "Lingua",
  },

  home: {
    heroTitle: "Tassi di cambio con la precisione che vuole il tuo commercialista",
    heroSub:
      "Converti oltre 160 valute con 2–6 decimali a scelta, leggi tabelle complete, verifica i tassi incrociati e guarda quanto resta della fattura dopo il margine della banca — in 15 lingue, senza registrazione.",
    browseAll: "Sfoglia tutti gli strumenti",
    categoriesTitle: "Categorie",
    featuredTitle: "Strumenti popolari",
    trustLocal: "I file restano sul tuo dispositivo",
    trustFree: "Gratis, senza account",
    trustFast: "Istantaneo, funziona offline",
    rotating: [
      "USD in EUR a 4 decimali — le cifre che il riquadro delle risposte butta via",
      "Da 1 a 10.000 in una tabella — un solo scatto, tutta la colonna coerente",
      "Tassi incrociati in catena e verificati contro il cambio diretto",
      "Guarda quanto ti toglie dalla fattura il 2% della banca — prima di firmare",
    ],
    statsLabels: { tools: "strumenti", languages: "lingue", uploads: "upload", accounts: "account" },
    eyebrow: "Gratis per sempre",
    heroCtaSecondary: "Come funziona",
    statsTools: "{n} strumenti",
    statsLanguages: "{n} lingue",
    statsUploads: "0 upload",
    statsAccounts: "0 account",
    categoriesSub: "Quattro strumenti, una tabella di tassi onesta, tutto sul tuo dispositivo.",
    popularSub: "Gli strumenti che le persone aprono più spesso.",
    privacyTitle: "I tuoi importi non lasciano mai il tuo dispositivo.",
    privacySub:
      "Non esiste un passo di caricamento. Gli strumenti sono JavaScript nel tuo browser — l'unica chiamata di rete è la tabella di tassi gratuita di open.er-api.com, con cache, orario e dichiarazione esplicita.",
    privacyPoint1T: "Elaborazione locale",
    privacyPoint1D:
      "Gli importi che digiti vengono convertiti in memoria da JavaScript. Nulla viene trasmesso — l'unico traffico di rete è scaricare la tabella dei tassi, e non contiene nessun tuo dato.",
    privacyPoint2T: "Nessun account",
    privacyPoint2D: "Niente registrazione, niente email, niente cronologia salvata. Apri uno strumento e usalo.",
    privacyPoint3T: "Onesti per costruzione",
    privacyPoint3D:
      "Se qualcosa non si può davvero fare nel browser, lo diciamo invece di fingere il contrario.",
    privacyLink: "Leggi la nota privacy completa",
    endTitle: "Scegli uno strumento. Funziona, e basta.",
    endSub: "Quindici lingue, una fonte di tassi gratuita, niente da installare.",
  },

  tools: {
    title: "Tutti gli strumenti",
    subtitle: "Cerca tra {count} strumenti gratuiti nel browser. Nessun upload, nessuna registrazione.",
    filterPlaceholder: "Cerca strumenti…",
    count: "{count} strumenti",
    empty: "Nessuno strumento corrisponde a “{query}”.",
  },

  categories: {
    pdf: { name: "PDF", desc: "Unisci, dividi, converti e modifica file PDF senza caricarli da nessuna parte." },
    image: { name: "Immagini", desc: "Comprimi, ridimensiona, ritaglia e converti immagini direttamente nel tuo browser." },
    text: { name: "Testo", desc: "Conta, pulisci, ordina e trasforma il testo all'istante, mentre scrivi." },
    developer: { name: "Sviluppo", desc: "Formattatori, codificatori, decodificatori e generatori per il lavoro di ogni giorno." },
    seo: { name: "SEO", desc: "Meta tag, markup schema, anteprima SERP e altri aiuti per la SEO on-page." },
    security: { name: "Sicurezza", desc: "Password, hash e ricerche — generati e verificati sul tuo dispositivo." },
    utility: { name: "Utilità", desc: "Convertitore, tabelle di conversione, tassi incrociati e margine FX — su tassi di mercato medio, in cache sul tuo dispositivo." },
  },

  tool: {
    howTo: "Come si usa",
    faq: "Domande frequenti",
    related: "Strumenti correlati",
    privacyNote:
      "Questo strumento gira interamente nel tuo browser. I tuoi dati non lasciano mai il dispositivo: non vengono caricati su nessun server.",
    inCategory: "Altri in {category}",
    backToCategory: "Tutti gli strumenti {category}",
  },

  common: {
    copy: "Copia",
    copied: "Copiato",
    download: "Scarica",
    reset: "Reimposta",
    swap: "Inverti",
    clear: "Svuota",
    error: "Qualcosa è andato storto. Controlla i dati inseriti e riprova.",
    input: "Input",
    output: "Risultato",
    settings: "Opzioni",
    dropFiles: "Trascina qui i file o clicca per sceglierli",
    dropFile: "Trascina qui un file o clicca per sceglierlo",
    processing: "Elaborazione…",
    fileSize: "Dimensione",
    sample: "Prova un esempio",
    uppercase: "MAIUSCOLO",
  },

  unit: {
    from: "Da",
    to: "A",
    amount: "Quantità",
    result: "Risultato",
    common: "Conversioni comuni",
    formula: "Formula",
    allUnits: "Tutte le unità",
  },

  text: {
    stats: {
      words: "Parole",
      characters: "Caratteri",
      charsNoSpaces: "Senza spazi",
      sentences: "Frasi",
      paragraphs: "Paragrafi",
      lines: "Righe",
      readingTime: "Tempo di lettura",
      readingMinutes: "{n} min di lettura",
    },
  },

  footer: {
    line: "Strumenti di cambio gratuiti. Tassi da open.er-api.com, in cache sul tuo dispositivo; i tuoi numeri non lo lasciano mai.",
    privacy: "Privacy",
    terms: "Termini",
    about: "Chi siamo",
    badges: "Badge",
    language: "Lingua",
  },

  badge: {
    title: "Badge RateSnap",
    desc: "Metti un badge RateSnap sul tuo sito, nel README o nella documentazione. Rimanda qui e racconta che gli strumenti di cambio dietro a quel badge girano nel browser, con tassi dichiarati e in cache.",
    voluntary: "L'incorporamento è del tutto volontario: scegli un badge se il progetto ti piace. Non serve alcun permesso.",
    md: "Markdown (README)",
    html: "HTML (sito web)",
    thanks: "Grazie per spargere la voce: ogni incorporamento aiuta più persone a scoprire strumenti che rispettano i loro file.",
  },

    embed: {
    title: "Incorpora questo strumento",
    desc: "Metti questo strumento sul tuo sito con una riga: gira nel browser del visitatore.",
  },

    mcp: {
    title: "Server MCP — strumenti accessibili all'IA",
    desc1: "RateSnap include un server MCP (Model Context Protocol): assistenti IA come Claude o Cursor possono eseguire le stesse conversioni e gli stessi calcoli di tassi di questo sito — stessa logica testata, senza reimplementazione.",
    desc2: "Gli strumenti eseguono le funzioni pure del sito stesso: conversione, tassi incrociati, margine e arrotondamento delle valute. Il tasso lo fornisce chi chiama; l'esecuzione avviene sulla macchina del client IA via npx — ai nostri server non va nulla.",
    toolsTitle: "Strumenti eseguibili ({n})",
    requiresNode: "Richiede Node.js 18+. Il server gira localmente via stdio; solo le chiamate che fai vengono calcolate sulla tua macchina.",
    privacy: "Richiede Node.js 18+. Il server gira localmente via stdio; solo le chiamate che fai vengono calcolate sulla tua macchina.",
  },

    notFound: {
    title: "Pagina non trovata",
    body: "Lo strumento che cerchi non esiste. Sfoglia invece tutti gli strumenti.",
    home: "Vai alla homepage",
  },
};

export default it;
