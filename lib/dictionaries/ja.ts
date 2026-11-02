import type { Dictionary } from "../i18n";

const ja: Dictionary = {
  brand: "RateSnap",
  tagline: "為替ツール、すべてブラウザ内で動きます。",
  metaDesc:
    "無料のオンライン為替ツール:精度を選べる通貨換算・換算表・クロスレート・FXマージン計算。レートは open.er-api.com から取得してデバイスにキャッシュ、計算はすべてブラウザ内で。",

  nav: {
    tools: "すべてのツール",
    categories: "カテゴリー",
    about: "このサイトについて",
    menu: "メニュー",
    language: "言語",
  },

  home: {
    heroTitle: "経理担当も納得の精度で見る為替レート",
    heroSub:
      "160 以上の通貨を小数 2〜6 桁で換算、1 から 10,000 までの換算表、クロスレートの照合、銀行マージン後の受取額まで — 15 言語、登録不要。",
    browseAll: "すべてのツールを見る",
    categoriesTitle: "カテゴリー",
    featuredTitle: "人気のツール",
    trustLocal: "ファイルは端末内に留存",
    trustFree: "無料・アカウント不要",
    trustFast: "即時処理・オフライン対応",
    rotating: [
      "ドルからユーロへ、小数 4 桁まで — 検索の答えボックスが捨てる桁",
      "1 から 10,000 までの換算表 — 同一スナップショットで行ごとに一貫",
      "クロスレートをつなげて、直接レートと照合",
      "銀行の 2% マージンが請求書からいくら奪うか、契約前に確認",
    ],
    statsLabels: { tools: "ツール", languages: "言語", uploads: "アップロード", accounts: "アカウント" },
    eyebrow: "ずっと無料",
    heroCtaSecondary: "仕組みを見る",
    statsTools: "{n} 個のツール",
    statsLanguages: "{n} 言語",
    statsUploads: "アップロード 0 回",
    statsAccounts: "アカウント 0 個",
    categoriesSub: "4 つのツール、1 枚の正直なレート表、すべてあなたのデバイスで。",
    popularSub: "いちばん使われているツール。",
    privacyTitle: "入力した金額は、あなたのデバイスから出ません。",
    privacySub: "アップロードの手順はありません。ツールはブラウザ内で動く JavaScript です。唯一の通信は open.er-api.com から無料のレート表を取得することで、キャッシュ・時刻・開示つきです。",
    privacyPoint1T: "ローカル処理",
    privacyPoint1D: "入力した金額は JavaScript がメモリ内で換算します。送信は一切ありません — ネットワーク通信はレート表の取得だけで、あなたのデータは含まれません。",
    privacyPoint2T: "アカウント不要",
    privacyPoint2D: "登録もメールも履歴もありません。開いてすぐ使えます。",
    privacyPoint3T: "誠実な設計",
    privacyPoint3D: "ブラウザでできないことは、できないとはっきり書きます。",
    privacyLink: "プライバシーの詳細を読む",
    endTitle: "ツールを選んで、すぐ使える。",
    endSub: "15 言語、1 つの無料レートソース、インストールは不要。",
  },

  tools: {
    title: "すべてのツール",
    subtitle: "{count} 個の無料ブラウザツールを検索。アップロード不要・登録不要。",
    filterPlaceholder: "ツールを検索…",
    count: "{count} 個のツール",
    empty: "「{query}」に一致するツールはありません。",
  },

  categories: {
    pdf: { name: "PDF", desc: "PDF の結合・分割・変換・編集をどこにもアップロードせずに行えます。" },
    image: { name: "画像", desc: "画像の圧縮・リサイズ・切り抜き・形式変換をブラウザ内で。" },
    text: { name: "テキスト", desc: "文字数・整形・並べ替え・変換を入力しながら即時に。" },
    developer: { name: "開発者", desc: "日々の開発に使うフォーマッタ・エンコーダ・ジェネレータ。" },
    seo: { name: "SEO", desc: "メタタグ・構造化データ・SERP プレビューなどの SEO ヘルパー。" },
    security: { name: "セキュリティ", desc: "パスワード・ハッシュ・各種ルックアップを端末内で生成・検証。" },
    utility: { name: "ユーティリティ", desc: "コンバーター・換算表・クロスレート・FXマージン計算 — 最新ミッドマーケットレート、デバイスにキャッシュ。" },
  },

  tool: {
    howTo: "使い方",
    faq: "よくある質問",
    related: "関連ツール",
    privacyNote:
      "このツールは完全にブラウザ内で動作します。データは端末から出ず、サーバーへアップロードされることはありません。",
    inCategory: "{category}のその他のツール",
    backToCategory: "{category}のすべてのツール",
  },

  common: {
    copy: "コピー",
    copied: "コピーしました",
    download: "ダウンロード",
    reset: "リセット",
    swap: "入れ替え",
    clear: "クリア",
    error: "エラーが発生しました。入力を確認して再試行してください。",
    input: "入力",
    output: "結果",
    settings: "オプション",
    dropFiles: "ここにファイルをドロップ、またはクリックして選択",
    dropFile: "ここにファイルをドロップ、またはクリックして選択",
    processing: "処理中…",
    fileSize: "サイズ",
    sample: "サンプルを試す",
    uppercase: "大文字",
  },

  unit: {
    from: "変換前",
    to: "変換後",
    amount: "数値",
    result: "結果",
    common: "よく使う変換",
    formula: "計算式",
    allUnits: "すべての単位",
  },

  text: {
    stats: {
      words: "単語数",
      characters: "文字数",
      charsNoSpaces: "空白除く",
      sentences: "文の数",
      paragraphs: "段落",
      lines: "行数",
      readingTime: "読了時間",
      readingMinutes: "約 {n} 分",
    },
  },

  footer: {
    line: "無料の為替ツール。レートは open.er-api.com から取得しデバイスにキャッシュ。入力した数字はどこにも送られません。",
    privacy: "プライバシー",
    terms: "利用規約",
    about: "このサイトについて",
    badges: "バッジ",
    language: "言語",
  },

  badge: {
    title: "RateSnap バッジ",
    desc: "あなたのサイトや README、ドキュメントに RateSnap バッジを置いてみてください。このサイトへリンクし、背後の通貨ツールがブラウザ内で、開示・キャッシュ付きのレートで動くことを伝えます。",
    voluntary: "設置は完全に任意です。プロジェクトを気に入ったらお好きなバッジをどうぞ。許可は不要です。",
    md: "Markdown(README)",
    html: "HTML(ウェブサイト)",
    thanks: "広めていただきありがとうございます。すべての設置が、ファイルを尊重するツールの発見につながります。",
  },

    embed: {
    title: "ツールを埋め込む",
    desc: "1 行であなたのサイトにツールを。訪問者のブラウザ内で動きます。",
  },

    mcp: {
    title: "MCP サーバー——AI から呼び出せるツール",
    desc1: "RateSnap は MCP(Model Context Protocol)サーバーを同梱しています。Claude や Cursor などの AI アシスタントが、このサイトの換算・レート計算をそのまま実行できます — 同じテスト済みロジックです。",
    desc2: "ツールはサイト自体の純粋関数(換算・クロスレート・マージン計算・通貨の丸め)を実行します。レートは呼び出し側が提供し、実行は npx 経由で AI クライアントのマシン上 — こちらのサーバーには何も送られません。",
    toolsTitle: "実行可能なツール({n} 個)",
    requiresNode: "Node.js 18+ が必要です。サーバーは stdio でローカル実行。呼び出したツール計算のみローカルで行われます。",
    privacy: "Node.js 18+ が必要です。サーバーは stdio でローカル実行。呼び出したツール計算のみローカルで行われます。",
  },

    notFound: {
    title: "ページが見つかりません",
    body: "お探しのツールは存在しません。すべてのツールからお探しください。",
    home: "ホームへ戻る",
  },
};

export default ja;
