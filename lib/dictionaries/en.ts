// en is the typing source of truth: every other dictionary must satisfy Dictionary.
// 刻意不加 as const:字符串需放宽为 string,翻译文件才可实现同一类型。
const en = {
  brand: "RateSnap",
  tagline: "Currency tools that run in your browser.",
  metaDesc:
    "Free currency tools in your browser: precision converter, conversion tables, cross rates and FX margin math. Rates from open.er-api.com, cached on your device.",

  nav: {
    tools: "All tools",
    categories: "Categories",
    about: "About",
    menu: "Menu",
    language: "Language",
  },

  home: {
    heroTitle: "Currency rates with the precision your accountant wants",
    heroSub:
      "Convert 160+ currencies with 2–6 decimal control, read whole conversion tables, chain cross rates and see what your invoice earns after the bank's margin — in 15 languages, no signup.",
    browseAll: "Browse all tools",
    categoriesTitle: "Categories",
    featuredTitle: "Popular tools",
    trustLocal: "Files stay on your device",
    trustFree: "Free, no account",
    trustFast: "Instant, works offline",
    rotating: [
      "USD to EUR at 4 decimals — the digits answer boxes throw away",
      "1 to 10,000 in a conversion table — one snapshot, one consistent rate",
      "Cross rates chained and checked against the direct quote",
      "See what the bank's 2% margin does to your invoice — before you sign",
    ],
    statsLabels: { tools: "tools", languages: "languages", uploads: "uploads", accounts: "accounts" },
    eyebrow: "Free forever",
    heroCtaSecondary: "How it works",
    statsTools: "{n} tools",
    statsLanguages: "{n} languages",
    statsUploads: "0 uploads",
    statsAccounts: "0 accounts",
    categoriesSub: "Four tools, one honest rate table, everything on your device.",
    popularSub: "The tools people open most.",
    privacyTitle: "Your amounts never leave your device.",
    privacySub:
      "There is no upload step. The tools are JavaScript running in your browser — the only network call is the free rate table from open.er-api.com, and it is cached, timestamped and disclosed.",
    privacyPoint1T: "Local processing",
    privacyPoint1D:
      "Amounts you type are converted in memory with JavaScript. Nothing is transmitted, anywhere — the only network traffic is downloading the rate table, and it carries none of your data.",
    privacyPoint2T: "No accounts",
    privacyPoint2D: "No sign-up, no email, no stored history. Open a tool and use it.",
    privacyPoint3T: "Honest by design",
    privacyPoint3D:
      "If something genuinely cannot be done in the browser, we say so instead of pretending.",
    privacyLink: "Read the full privacy note",
    endTitle: "Pick a tool. It just works.",
    endSub: "Fifteen languages, one free rate feed, nothing to install.",
  },

  tools: {
    title: "All tools",
    subtitle: "Search {count} free browser tools. No upload, no signup.",
    filterPlaceholder: "Search tools…",
    count: "{count} tools",
    empty: "No tools match “{query}”.",
  },

  categories: {
    pdf: { name: "PDF", desc: "Merge, split, convert and edit PDF files without uploading them anywhere." },
    image: { name: "Image", desc: "Compress, resize, crop and convert images right in your browser." },
    text: { name: "Text", desc: "Count, clean, sort and transform text instantly as you type." },
    developer: { name: "Developer", desc: "Formatters, encoders, decoders and generators for daily dev work." },
    seo: { name: "SEO", desc: "Meta tags, schema markup, SERP preview and other on-page SEO helpers." },
    security: { name: "Security", desc: "Passwords, hashes and lookups — generated and checked on your device." },
    utility: { name: "Utility", desc: "Converter, conversion tables, cross rates and FX margin math — on live mid-market rates, cached on your device." },
  },

  tool: {
    howTo: "How to use",
    faq: "Frequently asked questions",
    related: "Related tools",
    privacyNote:
      "This tool runs entirely in your browser. Your data never leaves your device — it is not uploaded to any server.",
    inCategory: "More in {category}",
    backToCategory: "All {category} tools",
  },

  common: {
    copy: "Copy",
    copied: "Copied",
    download: "Download",
    reset: "Reset",
    swap: "Swap",
    clear: "Clear",
    error: "Something went wrong. Check your input and try again.",
    input: "Input",
    output: "Result",
    settings: "Options",
    dropFiles: "Drop files here or click to choose",
    dropFile: "Drop a file here or click to choose",
    processing: "Processing…",
    fileSize: "Size",
    sample: "Try an example",
    uppercase: "UPPERCASE",
  },

  unit: {
    from: "From",
    to: "To",
    amount: "Amount",
    result: "Result",
    common: "Common conversions",
    formula: "Formula",
    allUnits: "All units",
  },

  text: {
    stats: {
      words: "Words",
      characters: "Characters",
      charsNoSpaces: "No spaces",
      sentences: "Sentences",
      paragraphs: "Paragraphs",
      lines: "Lines",
      readingTime: "Reading time",
      readingMinutes: "{n} min read",
    },
  },

  footer: {
    line: "Free currency tools. Rates from open.er-api.com, cached on your device; your numbers never leave it.",
    privacy: "Privacy",
    terms: "Terms",
    about: "About",
    badges: "Badges",
    language: "Language",
  },

  badge: {
    title: "RateSnap badges",
    desc: "Put a RateSnap badge on your site, README or docs. It links back here and tells people the currency tools behind it run in the browser, on disclosed and cached rates.",
    voluntary: "Embedding is completely voluntary — pick a badge if you like the project. No permission needed.",
    md: "Markdown (README)",
    html: "HTML (website)",
    thanks: "Thanks for spreading the word — every embed helps more people discover tools that respect their files.",
  },

    embed: {
    title: "Embed this tool",
    desc: "Put this tool on your own site with one line — it runs entirely in the visitor's browser.",
  },

    mcp: {
    title: "MCP server — AI-accessible tools",
    desc1: "RateSnap ships an MCP (Model Context Protocol) server: AI assistants like Claude or Cursor can execute the same conversions and rate math you see on this site — same tested logic, no reimplementation.",
    desc2: "The tools run the site's own pure functions for conversion, cross rates, margin math and currency rounding. You supply the rate; execution happens on the AI client's machine via npx — nothing is sent to our servers.",
    toolsTitle: "Executable tools ({n})",
    requiresNode: "Requires Node.js 18+. The server runs locally over stdio; only the tool calls you make are computed on your machine.",
    privacy: "Requires Node.js 18+. The server runs locally over stdio; only the tool calls you make are computed on your machine.",
  },

    notFound: {
    title: "Page not found",
    body: "The tool you are looking for does not exist. Browse all tools instead.",
    home: "Go to homepage",
  },
};

export default en;
