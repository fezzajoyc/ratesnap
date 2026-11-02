import type { Dictionary } from "../i18n";

const zh: Dictionary = {
  brand: "RateSnap",
  tagline: "汇率工具,全部在浏览器里运行。",
  metaDesc:
    "免费在线汇率工具:精度可控的货币换算、整表换算、交叉汇率与外汇点差计算。汇率来自 open.er-api.com 并在你的设备上缓存,换算全部在浏览器本地完成。",

  nav: {
    tools: "全部工具",
    categories: "分类",
    about: "关于",
    menu: "菜单",
    language: "语言",
  },

  home: {
    heroTitle: "汇率换算,精度高到会计也挑不出毛病",
    heroSub:
      "160+ 种货币换算可选 2–6 位小数,整表梯度换算、交叉汇率互检,提前看清银行点差吃掉多少账单——15 种语言,免注册。",
    browseAll: "浏览全部工具",
    categoriesTitle: "分类",
    featuredTitle: "热门工具",
    trustLocal: "文件留在你的设备上",
    trustFree: "免费,无需账号",
    trustFast: "即开即用,离线可用",
    rotating: [
      "美元兑欧元给到 4 位小数——搜索答案框丢掉的那些数字",
      "1 到 10000 一张换算表——同一份快照,行行一致",
      "交叉汇率链式计算,再和直接报价互相校验",
      "签合同之前,先看清银行 2% 点差吃掉多少账单",
    ],
    statsLabels: { tools: "工具", languages: "语言", uploads: "上传", accounts: "账号" },
    eyebrow: "永久免费",
    heroCtaSecondary: "了解工作方式",
    statsTools: "{n} 个工具",
    statsLanguages: "{n} 种语言",
    statsUploads: "0 次上传",
    statsAccounts: "0 个账号",
    categoriesSub: "四个工具,一张诚实的汇率表,一切都在你的设备上。",
    popularSub: "大家最常用的工具。",
    privacyTitle: "你输入的金额,从不离开你的设备。",
    privacySub: "这里没有“上传”这个步骤——工具就是运行在你浏览器里的 JavaScript。唯一的网络请求是从 open.er-api.com 获取的免费汇率表,有缓存、有时间戳、有说明。",
    privacyPoint1T: "本地处理",
    privacyPoint1D: "你输入的金额由 JavaScript 在内存中换算,不对外传输——唯一的网络流量是下载汇率表,其中不含你的任何数据。",
    privacyPoint2T: "没有账号",
    privacyPoint2D: "无需注册、不要邮箱、不留历史,打开即用。",
    privacyPoint3T: "诚实设计",
    privacyPoint3D: "浏览器做不到的事,我们直说,而不是假装做到。",
    privacyLink: "阅读完整隐私说明",
    endTitle: "挑一个工具,打开就能用。",
    endSub: "15 种语言,一份免费汇率源,无需安装任何东西。",
  },

  tools: {
    title: "全部工具",
    subtitle: "搜索 {count} 个免费浏览器工具。无需上传,无需注册。",
    filterPlaceholder: "搜索工具…",
    count: "{count} 个工具",
    empty: "没有匹配“{query}”的工具。",
  },

  categories: {
    pdf: { name: "PDF", desc: "合并、拆分、转换、编辑 PDF,全程无需上传到任何服务器。" },
    image: { name: "图片", desc: "压缩、缩放、裁剪、格式转换,直接在浏览器里完成。" },
    text: { name: "文本", desc: "统计、清洗、排序、变换,边输入边出结果。" },
    developer: { name: "开发者", desc: "格式化、编解码、生成器,日常开发随手用。" },
    seo: { name: "SEO", desc: "Meta 标签、结构化数据、SERP 预览等页面级 SEO 助手。" },
    security: { name: "安全", desc: "密码、哈希与查询——都在你的设备上生成与校验。" },
    utility: { name: "实用工具", desc: "换算器、换算表、交叉汇率与外汇点差计算——基于实时中间价,缓存于你的设备。" },
  },

  tool: {
    howTo: "使用方法",
    faq: "常见问题",
    related: "相关工具",
    privacyNote:
      "该工具完全在你的浏览器中运行,数据不会离开你的设备,不会上传到任何服务器。",
    inCategory: "{category}分类下的更多工具",
    backToCategory: "全部{category}工具",
  },

  common: {
    copy: "复制",
    copied: "已复制",
    download: "下载",
    reset: "重置",
    swap: "交换",
    clear: "清空",
    error: "出错了,请检查输入后重试。",
    input: "输入",
    output: "结果",
    settings: "选项",
    dropFiles: "拖拽文件到此处,或点击选择",
    dropFile: "拖拽文件到此处,或点击选择",
    processing: "处理中…",
    fileSize: "大小",
    sample: "试个例子",
    uppercase: "大写",
  },

  unit: {
    from: "从",
    to: "到",
    amount: "数值",
    result: "结果",
    common: "常用换算",
    formula: "公式",
    allUnits: "全部单位",
  },

  text: {
    stats: {
      words: "词数",
      characters: "字符数",
      charsNoSpaces: "不含空格",
      sentences: "句数",
      paragraphs: "段落数",
      lines: "行数",
      readingTime: "阅读时长",
      readingMinutes: "约 {n} 分钟",
    },
  },

  footer: {
    line: "免费汇率工具。汇率来自 open.er-api.com 并缓存在你的设备上;你输入的数字从不离开它。",
    privacy: "隐私",
    terms: "条款",
    about: "关于",
    badges: "徽章",
    language: "语言",
  },

  badge: {
    title: "RateSnap 徽章",
    desc: "把 RateSnap 徽章放到你的网站、README 或文档里。它会链接回本站,并告诉访问者:这些货币工具在浏览器里运行,汇率来源公开且带缓存标注。",
    voluntary: "嵌入完全出于自愿——喜欢这个项目就挑一枚,无需申请授权。",
    md: "Markdown(README)",
    html: "HTML(网页)",
    thanks: "感谢帮忙传播——每一次嵌入,都让更多人发现尊重自己文件的工具。",
  },

    embed: {
    title: "嵌入这个工具",
    desc: "一行代码把工具放到你的网站——它在访客的浏览器里运行。",
  },

    mcp: {
    title: "MCP 服务器——AI 可调用的工具",
    desc1: "RateSnap 提供 MCP(Model Context Protocol)服务器:Claude、Cursor 等 AI 助手可以直接执行本站的换算与汇率计算——同一套经过测试的逻辑,不是重新实现。",
    desc2: "这些工具运行本站自己的纯函数:换算、交叉汇率、点差计算与货币取整。汇率由调用方提供;执行发生在 AI 客户端的机器上(经 npx),不会发送到我们的服务器。",
    toolsTitle: "可执行工具({n} 个)",
    requiresNode: "需要 Node.js 18+。服务器通过 stdio 在本地运行;只有你发起的工具调用会在本机计算。",
    privacy: "需要 Node.js 18+。服务器通过 stdio 在本地运行;只有你发起的工具调用会在本机计算。",
  },

    notFound: {
    title: "页面不存在",
    body: "你要找的工具不存在,去看看全部工具吧。",
    home: "回到首页",
  },
};

export default zh;
