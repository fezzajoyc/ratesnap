// vi — từ điển tiếng Việt. Hình dạng khóa phải khớp en chính xác (tests/seo.test.ts).
// Giữ nguyên "RateSnap", các placeholder {n}/{count}/{query}/{category} và token kỹ thuật.
const vi = {
  brand: "RateSnap",
  tagline: "Công cụ tỷ giá chạy ngay trong trình duyệt của bạn.",
  metaDesc:
    "Công cụ tỷ giá miễn phí trong trình duyệt: bộ chuyển đổi chọn được độ chính xác, bảng quy đổi, tỷ giá chéo và tính biên độ FX. Tỷ giá từ open.er-api.com, lưu cache trên thiết bị của bạn.",

  nav: {
    tools: "Tất cả công cụ",
    categories: "Danh mục",
    about: "Giới thiệu",
    menu: "Menu",
    language: "Ngôn ngữ",
  },

  home: {
    heroTitle: "Tỷ giá với độ chính xác mà kế toán của bạn muốn",
    heroSub:
      "Chuyển đổi hơn 160 đồng tiền với 2–6 chữ số thập phân, đọc cả bảng quy đổi, kiểm tra tỷ giá chéo và xem hóa đơn còn lại bao nhiêu sau biên độ ngân hàng — bằng 15 ngôn ngữ, không cần đăng ký.",
    browseAll: "Xem tất cả công cụ",
    categoriesTitle: "Danh mục",
    featuredTitle: "Công cụ phổ biến",
    trustLocal: "File luôn ở lại thiết bị của bạn",
    trustFree: "Miễn phí, không cần tài khoản",
    trustFast: "Tức thì, dùng được cả khi offline",
    rotating: [
      "USD sang EUR với 4 chữ số thập phân — những con số ô trả lời của công cụ tìm kiếm bỏ đi",
      "Từ 1 đến 10.000 trong một bảng — một ảnh chụp, cả cột nhất quán",
      "Tỷ giá chéo nối chuỗi rồi đối chiếu với tỷ giá trực tiếp",
      "Xem ngân hàng lấy 2% bao nhiêu từ hóa đơn của bạn — trước khi ký",
    ],
    statsLabels: { tools: "công cụ", languages: "ngôn ngữ", uploads: "lượt tải lên", accounts: "tài khoản" },
    eyebrow: "Miễn phí mãi mãi",
    heroCtaSecondary: "Cách hoạt động",
    statsTools: "{n} công cụ",
    statsLanguages: "{n} ngôn ngữ",
    statsUploads: "0 lượt tải lên",
    statsAccounts: "0 tài khoản",
    categoriesSub: "Bốn công cụ, một bảng tỷ giá trung thực, tất cả trên thiết bị của bạn.",
    popularSub: "Những công cụ được mở nhiều nhất.",
    privacyTitle: "Số tiền bạn nhập không bao giờ rời thiết bị.",
    privacySub:
      "Không có bước tải lên. Công cụ là JavaScript chạy trong trình duyệt — cuộc gọi mạng duy nhất là lấy bảng tỷ giá miễn phí từ open.er-api.com, có cache, có dấu thời gian, có ghi rõ.",
    privacyPoint1T: "Xử lý cục bộ",
    privacyPoint1D:
      "Số tiền bạn nhập được JavaScript quy đổi trong bộ nhớ. Không có gì được gửi đi — lưu lượng mạng duy nhất là tải bảng tỷ giá, và nó không chứa dữ liệu nào của bạn.",
    privacyPoint2T: "Không cần tài khoản",
    privacyPoint2D: "Không đăng ký, không email, không lưu lịch sử. Mở công cụ lên và dùng ngay.",
    privacyPoint3T: "Trung thực từ thiết kế",
    privacyPoint3D:
      "Nếu có gì đó thực sự không thể làm trong trình duyệt, chúng tôi nói thẳng thay vì giả vờ được.",
    privacyLink: "Đọc ghi chú riêng tư đầy đủ",
    endTitle: "Chọn một công cụ. Nó chỉ đơn giản là hoạt động.",
    endSub: "Mười lăm ngôn ngữ, một nguồn tỷ giá miễn phí, không cần cài đặt gì.",
  },

  tools: {
    title: "Tất cả công cụ",
    subtitle: "Tìm kiếm trong {count} công cụ trình duyệt miễn phí. Không tải lên, không đăng ký.",
    filterPlaceholder: "Tìm công cụ…",
    count: "{count} công cụ",
    empty: "Không có công cụ nào khớp với “{query}”.",
  },

  categories: {
    pdf: { name: "PDF", desc: "Gộp, tách, chuyển đổi và chỉnh sửa file PDF mà không cần tải lên bất cứ đâu." },
    image: { name: "Ảnh", desc: "Nén, đổi kích thước, cắt và chuyển đổi ảnh ngay trong trình duyệt của bạn." },
    text: { name: "Văn bản", desc: "Đếm, làm sạch, sắp xếp và biến đổi văn bản tức thì khi bạn gõ." },
    developer: { name: "Lập trình viên", desc: "Trình định dạng, bộ mã hóa, bộ giải mã và trình tạo cho công việc dev hằng ngày." },
    seo: { name: "SEO", desc: "Thẻ meta, dữ liệu có cấu trúc, xem trước SERP và các trợ thủ SEO trên trang." },
    security: { name: "Bảo mật", desc: "Mật khẩu, hàm băm và tra cứu — tạo và kiểm tra ngay trên thiết bị của bạn." },
    utility: { name: "Tiện ích", desc: "Bộ chuyển đổi, bảng quy đổi, tỷ giá chéo và biên độ FX — trên tỷ giá giữa thị trường, lưu cache trên thiết bị của bạn." },
  },

  tool: {
    howTo: "Cách sử dụng",
    faq: "Câu hỏi thường gặp",
    related: "Công cụ liên quan",
    privacyNote:
      "Công cụ này chạy hoàn toàn trong trình duyệt của bạn. Dữ liệu không bao giờ rời khỏi thiết bị — không được tải lên bất kỳ máy chủ nào.",
    inCategory: "Xem thêm trong {category}",
    backToCategory: "Tất cả công cụ {category}",
  },

  common: {
    openTool: "Mở công cụ",
    copy: "Sao chép",
    copied: "Đã sao chép",
    download: "Tải xuống",
    reset: "Đặt lại",
    swap: "Đảo chiều",
    clear: "Xóa",
    error: "Đã xảy ra lỗi. Kiểm tra dữ liệu nhập và thử lại.",
    input: "Đầu vào",
    output: "Kết quả",
    settings: "Tùy chọn",
    dropFiles: "Kéo thả file vào đây hoặc bấm để chọn",
    dropFile: "Kéo thả file vào đây hoặc bấm để chọn",
    processing: "Đang xử lý…",
    fileSize: "Dung lượng",
    sample: "Dùng thử ví dụ",
    uppercase: "CHỮ IN HOA",
  },

  unit: {
    from: "Từ",
    to: "Sang",
    amount: "Số lượng",
    result: "Kết quả",
    common: "Chuyển đổi thường dùng",
    formula: "Công thức",
    allUnits: "Tất cả đơn vị",
  },

  text: {
    stats: {
      words: "Từ",
      characters: "Ký tự",
      charsNoSpaces: "Không khoảng trắng",
      sentences: "Câu",
      paragraphs: "Đoạn",
      lines: "Dòng",
      readingTime: "Thời gian đọc",
      readingMinutes: "{n} phút đọc",
    },
  },

  footer: {
    line: "Công cụ tỷ giá miễn phí. Tỷ giá từ open.er-api.com, lưu cache trên thiết bị của bạn; các con số của bạn không bao giờ rời nó.",
    privacy: "Quyền riêng tư",
    terms: "Điều khoản",
    about: "Giới thiệu",
    badges: "Huy hiệu",
    language: "Ngôn ngữ",
  },

  badge: {
    title: "Huy hiệu RateSnap",
    desc: "Gắn huy hiệu RateSnap lên trang web, README hay tài liệu của bạn. Nó dẫn về đây và cho mọi người biết các công cụ tỷ giá phía sau chạy trong trình duyệt, với tỷ giá được công bố và lưu cache.",
    voluntary: "Việc nhúng hoàn toàn tự nguyện — chọn một huy hiệu nếu bạn thích dự án này. Không cần xin phép ai.",
    md: "Markdown (README)",
    html: "HTML (trang web)",
    thanks: "Cảm ơn bạn đã lan tỏa — mỗi lượt nhúng giúp nhiều người hơn khám phá những công cụ tôn trọng file của họ.",
  },

  embed: {
    title: "Nhúng công cụ này",
    desc: "Đưa công cụ này vào trang của bạn bằng một dòng — nó chạy trong trình duyệt của khách.",
  },

    mcp: {
    title: "Máy chủ MCP — công cụ cho AI gọi trực tiếp",
    desc1: "RateSnap đi kèm máy chủ MCP (Model Context Protocol): các trợ lý AI như Claude hay Cursor có thể chạy chính các phép quy đổi và tính tỷ giá trên site này — cùng logic đã kiểm thử, không viết lại.",
    desc2: "Các công cụ chạy chính hàm thuần của site: quy đổi, tỷ giá chéo, biên độ và làm tròn tiền tệ. Tỷ giá do bên gọi cung cấp; thực thi diễn ra trên máy của AI client qua npx — không gửi gì đến máy chủ của chúng tôi.",
    toolsTitle: "Công cụ chạy được ({n})",
    requiresNode: "Cần Node.js 18+. Máy chủ chạy cục bộ qua stdio; chỉ các lệnh bạn gọi được tính trên máy của bạn.",
    privacy: "Cần Node.js 18+. Máy chủ chạy cục bộ qua stdio; chỉ các lệnh bạn gọi được tính trên máy của bạn.",
  },

    notFound: {
    title: "Không tìm thấy trang",
    body: "Công cụ bạn tìm không tồn tại. Hãy xem tất cả công cụ thay thế.",
    home: "Về trang chủ",
  },
};

export default vi;
