// tr — Türkçe sözlük. Anahtar şekli en ile birebir aynıdır (tests/seo.test.ts derin karşılaştırır).
const tr = {
  brand: "RateSnap",
  tagline: "Tarayıcınızda çalışan döviz araçları.",
  metaDesc:
    "Tarayıcınızda ücretsiz döviz araçları: hassasiyeti seçilebilir çevirici, dönüşüm tabloları, çapraz kurlar ve FX marj hesabı. Kurlar open.er-api.com'dan, cihazınızda önbelleklenir.",

  nav: {
    tools: "Tüm araçlar",
    categories: "Kategoriler",
    about: "Hakkında",
    menu: "Menü",
    language: "Dil",
  },

  home: {
    heroTitle: "Muhasebecinizin istediği hassasiyette döviz kurları",
    heroSub:
      "160'tan fazla para birimini 2–6 ondalıkla çevirin, tam tablolar okuyun, çapraz kurları doğrulayın ve bankanın marjından sonra faturanızdan ne kaldığını görün — 15 dilde, kayıt yok.",
    browseAll: "Tüm araçlara göz at",
    pinned: "Sabitlenen",
    pin: "Üste sabitle",
    unpin: "Sabitlemeyi kaldır",
    popular: "Şu anda popüler",
    categoriesTitle: "Kategoriler",
    featuredTitle: "Popüler araçlar",
    trustLocal: "Dosyalar cihazında kalır",
    trustFree: "Ücretsiz, hesap yok",
    trustFast: "Anında, çevrimdışı bile çalışır",
    rotating: [
      "USD'den EUR'a 4 ondalıkla — cevap kutusunun çöpe attığı basamaklar",
      "1'den 10.000'e tek tabloda — tek anlık görüntü, tutarlı kolon",
      "Çapraz kurlar zincirlendi ve doğrudan kur ile karşılaştırıldı",
      "Bankanın %2'si faturanızdan ne alıyor — imzalamadan önce görün",
    ],
    statsLabels: { tools: "araç", languages: "dil", uploads: "yükleme", accounts: "hesap" },
    eyebrow: "Sonsuza kadar ücretsiz",
    heroCtaSecondary: "Nasıl çalışır",
    statsTools: "{n} araç",
    statsLanguages: "{n} dil",
    statsUploads: "0 yükleme",
    statsAccounts: "0 hesap",
    categoriesSub: "Dört araç, dürüst bir kurlar tablosu, her şey cihazınızda.",
    popularSub: "En çok açılan araçlar.",
    privacyTitle: "Girdiğiniz tutarlar cihazınızdan asla çıkmaz.",
    privacySub:
      "Yükleme adımı yok. Araçlar tarayıcınızda çalışan JavaScript'tir — tek ağ çağrısı, open.er-api.com'dan ücretsiz kurlar tablosudur; önbellekli, zaman damgalı ve açıkça bildirilmiştir.",
    privacyPoint1T: "Yerel işleme",
    privacyPoint1D:
      "Girdiğiniz tutarlar bellekte JavaScript ile çevrilir. Hiçbir şey iletilmez — tek ağ trafiği kurlar tablosunun indirilmesidir ve sizin veriniz içermez.",
    privacyPoint2T: "Hesap yok",
    privacyPoint2D: "Kayıt yok, e-posta yok, saklanan geçmiş yok. Aracı aç ve kullan.",
    privacyPoint3T: "Tasarımdan dürüst",
    privacyPoint3D:
      "Bir şey gerçekten tarayıcıda yapılamıyorsa, yapılabiliyormuş gibi göstermek yerine bunu söyleriz.",
    privacyLink: "Tüm gizlilik notunu oku",
    endTitle: "Bir araç seç. Gerisi kendiliğinden.",
    endSub: "On beş dil, ücretsiz tek bir kur kaynağı, kurulacak bir şey yok.",
  },

  tools: {
    title: "Tüm araçlar",
    subtitle: "{count} ücretsiz tarayıcı aracı. Yükleme yok, kayıt yok.",
    filterPlaceholder: "Araçlarda ara…",
    count: "{count} araç",
    empty: "“{query}” ile eşleşen araç yok.",
  },

  categories: {
    pdf: { name: "PDF", desc: "PDF dosyalarını hiçbir yere yüklemeden birleştir, böl, dönüştür ve düzenle." },
    image: { name: "Görsel", desc: "Görselleri doğrudan tarayıcında sıkıştır, yeniden boyutlandır, kırp ve dönüştür." },
    text: { name: "Metin", desc: "Metni yazarken anında say, temizle, sırala ve dönüştür." },
    developer: { name: "Geliştirici", desc: "Günlük geliştirici işleri için biçimlendiriciler, kodlayıcılar, çözücüler ve üreteçler." },
    seo: { name: "SEO", desc: "Meta etiketleri, schema işaretlemesi, SERP önizlemesi ve diğer sayfa içi SEO yardımcıları." },
    security: { name: "Güvenlik", desc: "Şifreler, karma (hash) değerleri ve sorgular — cihazında üretilir, cihazında denetlenir." },
    utility: { name: "Yardımcı Araçlar", desc: "Çevirici, dönüşüm tabloları, çapraz kurlar ve FX marjı — canlı orta piyasa kurlarıyla, cihazınızda önbelleklenir." },
  },

  tool: {
    howTo: "Nasıl kullanılır",
    faq: "Sık sorulan sorular",
    related: "İlgili araçlar",
    nextStep: "Sonraki adımlar",
    copyLink: "Bağlantıyı kopyala",
    privacyNote:
      "Bu araç tamamen tarayıcında çalışır. Verilerin asla cihazından çıkmaz — hiçbir sunucuya yüklenmez.",
    inCategory: "{category} kategorisinde daha fazlası",
    backToCategory: "Tüm {category} araçları",
  },

  common: {
    openTool: "Aracı aç",
    copy: "Kopyala",
    copied: "Kopyalandı",
    download: "İndir",
    reset: "Sıfırla",
    swap: "Değiştir",
    clear: "Temizle",
    error: "Bir şeyler ters gitti. Girdini kontrol edip tekrar dene.",
    input: "Girdi",
    output: "Sonuç",
    settings: "Seçenekler",
    dropFiles: "Dosyaları buraya bırak veya tıklayarak seç",
    dropFile: "Dosyayı buraya bırak veya tıklayarak seç",
    processing: "İşleniyor…",
    fileSize: "Boyut",
    sample: "Örneği dene",
    uppercase: "BÜYÜKHARF",
  },

  unit: {
    from: "Kaynak",
    to: "Hedef",
    amount: "Miktar",
    result: "Sonuç",
    common: "Sık kullanılan dönüşümler",
    formula: "Formül",
    allUnits: "Tüm birimler",
  },

  text: {
    stats: {
      words: "Kelime",
      characters: "Karakter",
      charsNoSpaces: "Boşluksuz",
      sentences: "Cümle",
      paragraphs: "Paragraf",
      lines: "Satır",
      readingTime: "Okuma süresi",
      readingMinutes: "{n} dk okuma",
    },
  },

  footer: {
    line: "Ücretsiz döviz araçları. Kurlar open.er-api.com'dan, cihazınızda önbellekli; girdiğiniz sayılar cihazınızdan çıkmaz.",
    privacy: "Gizlilik",
    terms: "Kullanım Koşulları",
    about: "Hakkında",
    badges: "Rozetler",
    language: "Dil",
  },

  badge: {
    title: "RateSnap rozetleri",
    desc: "RateSnap rozetini sitene, README'ne veya dokümanlarına ekle. Rozet buraya bağlanır ve arkasındaki döviz araçlarının tarayıcıda, açıkça bildrilmiş ve önbellekli kurlarla çalıştığını söyler.",
    voluntary: "Yerleştirme tamamen isteğe bağlıdır — projeyi seviyorsan bir rozet seç. İzin almaya gerek yok.",
    md: "Markdown (README)",
    html: "HTML (web sitesi)",
    thanks: "Duyulmamıza yardım ettiğin için teşekkürler — her yerleştirme, dosyalarına saygı duyan araçları daha çok kişinin keşfetmesini sağlar.",
  },

  embed: {
    title: "Bu aracı gömün",
    desc: "Tek satırla bu aracı sitenize ekleyin — ziyaretçinin tarayıcısında çalışır.",
  },

    mcp: {
    title: "MCP sunucusu — AI erişimli araçlar",
    desc1: "RateSnap bir MCP (Model Context Protocol) sunucusu içerir: Claude veya Cursor gibi yapay zekâ asistanları, bu sitedeki hesaplamaları ve kur işlemlerini aynı şekilde çalıştırabilir — aynı test edilmiş mantık, yeniden yazım yok.",
    desc2: "Araçlar sitenin kendi saf işlevlerini çalıştırır: çevrim, çapraz kur, marj ve para birimi yuvarlama. Kuru çağıran taraf sağlar; yürütme npx üzerinden yapay zekâ istemcisinin makinesinde olur — sunucularımıza hiçbir şey gitmez.",
    toolsTitle: "Çalıştırılabilir araçlar ({n})",
    requiresNode: "Node.js 18+ gerekir. Sunucu stdio üzerinden yerel çalışır; yalnızca yaptığınız çağrılar makinenizde hesaplanır.",
    privacy: "Node.js 18+ gerekir. Sunucu stdio üzerinden yerel çalışır; yalnızca yaptığınız çağrılar makinenizde hesaplanır.",
  },

    notFound: {
    title: "Sayfa bulunamadı",
    body: "Aradığın araç mevcut değil. Onun yerine tüm araçlara göz at.",
    home: "Ana sayfaya git",
  },
};

export default tr;
