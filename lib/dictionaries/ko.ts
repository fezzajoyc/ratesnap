import type { Dictionary } from "../i18n";

// 한국어(ko) — 합니다체로 통일, 불필요한 외래어 표기 지양.
// 계약: 키 구조는 en과 완전히 동일(tests/seo.test.ts), 값은 한국어로 번역.
const ko: Dictionary = {
  brand: "RateSnap",
  tagline: "브라우저에서 돌아가는 환율 도구.",
  metaDesc:
    "브라우저에서 쓰는 무료 환율 도구: 정밀도를 고르는 환율 계산기, 환전표, 교차환율, 환전 마진 계산. 환율은 open.er-api.com에서 가져와 기기에 캐시하고, 계산은 전부 브라우저에서.",

  nav: {
    tools: "전체 도구",
    categories: "카테고리",
    about: "소개",
    menu: "메뉴",
    language: "언어",
  },

  home: {
    heroTitle: "회계사가 원하는 정밀도의 환율",
    heroSub:
      "160개 이상 통화를 소수 2–6자리로 변환하고, 전체 환전표를 읽고, 교차환율을 검증하고, 은행 마진 후 실수령액까지 확인하세요 — 15개 언어, 가입 없이.",
    browseAll: "전체 도구 보기",
    categoriesTitle: "카테고리",
    featuredTitle: "인기 도구",
    trustLocal: "파일은 기기에만 보관됩니다",
    trustFree: "무료, 계정 불필요",
    trustFast: "즉시 실행, 오프라인 작동",
    rotating: [
      "USD에서 EUR로 소수 4자리까지 — 검색 답변 상자가 버리는 자릿수",
      "1부터 10,000까지 한 표에 — 같은 스냅숏, 행마다 일관",
      "교차환율을 연결해 직접 환율과 대조",
      "은행 2% 마진이 청구서에서 얼마를 가져가는지 계약 전에 확인",
    ],
    statsLabels: { tools: "도구", languages: "개 언어", uploads: "업로드", accounts: "계정" },
    eyebrow: "평생 무료",
    heroCtaSecondary: "이용 방법",
    statsTools: "도구 {n}개",
    statsLanguages: "{n}개 언어",
    statsUploads: "업로드 0건",
    statsAccounts: "계정 0개",
    categoriesSub: "도구 4개, 정직한 환율표 한 장, 전부 기기 위에서.",
    popularSub: "가장 많이 열어보는 도구입니다.",
    privacyTitle: "입력한 금액은 기기를 떠나지 않습니다.",
    privacySub:
      "업로드 단계가 없습니다. 도구는 브라우저의 JavaScript입니다 — 유일한 네트워크 호출은 open.er-api.com의 무료 환율표이며, 캐시·시각·고지가 함께 있습니다.",
    privacyPoint1T: "로컬 처리",
    privacyPoint1D:
      "입력한 금액은 JavaScript가 메모리에서 변환합니다. 어디로도 전송되지 않습니다 — 유일한 네트워크 트래픽은 환율표 내려받기이며, 여러분의 데이터는 담기지 않습니다.",
    privacyPoint2T: "계정 없음",
    privacyPoint2D: "가입도, 이메일도, 저장되는 기록도 없습니다. 도구를 열고 바로 쓰면 됩니다.",
    privacyPoint3T: "설계부터 정직하게",
    privacyPoint3D:
      "브라우저에서 정말 불가능한 일이라면 그렇다고 말합니다. 가능한 척하지 않습니다.",
    privacyLink: "전체 개인정보 노트 읽기",
    endTitle: "도구를 고르면, 바로 작동합니다.",
    endSub: "15개 언어, 무료 환율 소스 하나, 설치는 없습니다.",
  },

  tools: {
    title: "전체 도구",
    subtitle: "브라우저에서 도는 무료 도구 {count}개. 업로드도, 가입도 없습니다.",
    filterPlaceholder: "도구 검색…",
    count: "도구 {count}개",
    empty: "“{query}”에 해당하는 도구가 없습니다.",
  },

  categories: {
    pdf: { name: "PDF", desc: "어디에도 업로드하지 않고 PDF를 합치고, 나누고, 변환하고, 편집합니다." },
    image: { name: "이미지", desc: "브라우저 안에서 이미지를 압축하고, 크기를 조정하고, 자르고, 변환합니다." },
    text: { name: "텍스트", desc: "입력하는 즉시 텍스트를 세고, 정리하고, 정렬하고, 변환합니다." },
    developer: { name: "개발", desc: "매일 쓰는 포매터, 인코더, 디코더, 생성기 모음." },
    seo: { name: "SEO", desc: "메타 태그, 스키마 마크업, SERP 미리보기 등 온페이지 SEO 도우미." },
    security: { name: "보안", desc: "비밀번호, 해시, 조회 도구 — 기기에서 생성하고 확인합니다." },
    utility: { name: "생활", desc: "환율 계산기, 환전표, 교차환율, 마진 계산 — 실시간 중간 시세 기준, 기기에 캐시." },
  },

  tool: {
    howTo: "사용 방법",
    faq: "자주 묻는 질문",
    related: "관련 도구",
    privacyNote:
      "이 도구는 전부 브라우저 안에서 실행됩니다. 데이터는 기기를 떠나지 않으며 어떤 서버로도 업로드되지 않습니다.",
    inCategory: "{category}의 다른 도구",
    backToCategory: "{category} 전체 도구",
  },

  common: {
    copy: "복사",
    copied: "복사됨",
    download: "다운로드",
    reset: "초기화",
    swap: "바꾸기",
    clear: "지우기",
    error: "문제가 발생했습니다. 입력값을 확인하고 다시 시도해 주세요.",
    input: "입력",
    output: "결과",
    settings: "옵션",
    dropFiles: "파일을 끌어다 놓거나 클릭해서 선택하세요",
    dropFile: "파일을 끌어다 놓거나 클릭해서 선택하세요",
    processing: "처리 중…",
    fileSize: "크기",
    sample: "예시로 써보기",
    uppercase: "대문자",
  },

  unit: {
    from: "변환 전",
    to: "변환 후",
    amount: "값",
    result: "결과",
    common: "자주 쓰는 변환",
    formula: "계산식",
    allUnits: "전체 단위",
  },

  text: {
    stats: {
      words: "단어",
      characters: "글자",
      charsNoSpaces: "공백 제외",
      sentences: "문장",
      paragraphs: "단락",
      lines: "줄",
      readingTime: "읽는 시간",
      readingMinutes: "약 {n}분",
    },
  },

  footer: {
    line: "무료 환율 도구. 환율은 open.er-api.com에서 가져와 기기에 캐시하고, 입력한 숫자는 기기를 떠나지 않습니다.",
    privacy: "개인정보",
    terms: "약관",
    about: "소개",
    badges: "배지",
    language: "언어",
  },

  badge: {
    title: "RateSnap 배지",
    desc: "사이트, README, 문서에 RateSnap 배지를 달아 보세요. 여기로 연결되며, 배지 뒤의 환율 도구들이 브라우저 안에서, 공개된 캐시 환율로 실행된다는 뜻이기도 합니다.",
    voluntary: "배지 삽입은 완전히 자율입니다 — 마음에 드는 배지를 골라 쓰세요. 허락받을 필요 없습니다.",
    md: "Markdown (README)",
    html: "HTML (웹사이트)",
    thanks: "널리 알려 주셔서 감사합니다 — 하나의 삽입이 도구를 더 많은 사람에게 알려 줍니다.",
  },

  embed: {
    title: "도구 삽입",
    desc: "한 줄로 사이트에 도구를 넣으세요. 방문자의 브라우저에서 실행됩니다.",
  },

    mcp: {
    title: "MCP 서버 — AI가 호출하는 도구",
    desc1: "RateSnap은 MCP(Model Context Protocol) 서버를 제공합니다: Claude, Cursor 같은 AI 어시스턴트가 이 사이트의 환산·환율 계산을 그대로 실행합니다 — 같은 테스트된 로직, 재구현 없이.",
    desc2: "도구는 사이트의 순수 함수를 실행합니다: 환산, 교차환율, 마진, 통화 반올림. 환율은 호출자가 제공하고, 실행은 npx를 통해 AI 클라이언트의 머신에서 — 우리 서버로는 아무것도 보내지 않습니다.",
    toolsTitle: "실행 가능한 도구({n}개)",
    requiresNode: "Node.js 18+ 필요. 서버는 stdio로 로컬 실행되며, 호출한 도구 계산만 로컬에서 이루어집니다.",
    privacy: "Node.js 18+ 필요. 서버는 stdio로 로컬 실행되며, 호출한 도구 계산만 로컬에서 이루어집니다.",
  },

    notFound: {
    title: "페이지를 찾을 수 없습니다",
    body: "찾으시는 도구가 존재하지 않습니다. 전체 도구를 둘러보세요.",
    home: "홈으로 가기",
  },
};

export default ko;
