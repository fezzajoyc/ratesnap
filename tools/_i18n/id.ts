import type { ToolCopy } from "../_lib/types";

/**
 * Overlay bahasa Indonesia (id) — Baku, terminologi keuangan akurat:
 * kurs, valas, kurs mid-market (pasar tengah), biaya margin.
 * Token teknis (160+, 2/4/6 desimal, open.er-api.com, mid-market, ISO 4217,
 * floating-point, half-up, SWIFT) dipertahankan apa adanya.
 */
export const id: Record<string, ToolCopy> = {
  "currency-converter": {
    name: "Konverter Mata Uang",
    h1: "Konverter mata uang dengan kendali presisi",
    tagline:
      "Konversi antara 160+ mata uang dengan 2, 4, atau 6 angka desimal, kurs mid-market terkini, dan kurs kebalikan — presisi yang tidak akan dipersoalkan akuntan Anda.",
    intro: [
      "Sebagian besar konverter berhenti di dua angka desimal dan menyajikan angka yang tampak meyakinkan. Konverter ini mengizinkan Anda memilih presisi sendiri — 2, 4, atau 6 angka desimal — menampilkan kurs dan kurs kebalikan secara berdampingan, serta menyatakan dengan tepat kapan tabel kurs terakhir diperbarui. Kurs berasal dari layanan mid-market gratis open.er-api.com dan disimpan dalam cache di perangkat Anda selama satu jam; perhitungan berjalan sepenuhnya di peramban, dan tidak ada masukan yang Anda ketik dikirim ke mana pun.",
      "Jika layanan kurs tidak dapat dijangkau, konverter beralih ke tabel yang sudah tersimpan dalam cache di perangkat Anda dan menandainya dengan jelas, sehingga angka usang tidak pernah menyamar sebagai angka terkini.",
    ],
    steps: [
      "Masukkan jumlahnya dan pilih dua mata uang — tersedia 160+ kode dengan nama mata uang dalam bahasa Anda.",
      "Pilih 2, 4, atau 6 angka desimal sesuai tingkat presisi yang diharapkan penerima.",
      "Periksa baris kurs: kurs maju dan kurs kebalikan keduanya ditampilkan, lengkap dengan waktu pembaruannya.",
      "Tukar pasangan mata uang dengan satu klik untuk menjalankan konversi secara terbalik.",
    ],
    faqs: [
      {
        q: "Dari mana data kursnya berasal?",
        a: "Dari open.er-api.com, penyedia kurs mid-market gratis yang tidak memerlukan kunci API maupun akun. Seluruh tabel diambil sekali dan disimpan dalam cache di perangkat Anda selama satu jam, dan setiap halaman yang menampilkan kurs selalu mencantumkan kapan tabel terakhir diperbarui.",
      },
      {
        q: "Kapan saya perlu 4 atau 6 angka desimal?",
        a: "Dua angka desimal cocok untuk uang kertas, tetapi tidak untuk faktur. Penetapan harga logam mulia, penyelesaian transaksi bervolume besar, dan perbandingan harga satuan rutin bekerja pada 4–6 desimal, di mana pembulatan bernilai uang sungguhan. Kurs mid-market sendiri memiliki lebih banyak angka daripada yang mampu ditampilkan oleh dua desimal.",
      },
      {
        q: "Apakah kurs ini sudah termasuk margin bank saya?",
        a: "Tidak — yang Anda lihat adalah kurs mid-market, titik tengah antara kuotasi beli dan jual. Bank menambahkan margin di atasnya. Gunakan kalkulator margin FX untuk melihat berapa hasil nyata dari sebuah kurs ditambah persentase margin.",
      },
      {
        q: "Apa yang terjadi saat offline?",
        a: "Konverter tetap berfungsi menggunakan tabel kurs yang tersimpan dalam cache di perangkat Anda dan menandai hasilnya sebagai cache, bukan berpura-pura bahwa data tersebut real-time. Kunjungan pertama memerlukan koneksi internet; setelah itu tabel terakhir tetap tersimpan hingga diperbarui kembali.",
      },
    ],
  },
  "conversion-table": {
    name: "Tabel Konversi Mata Uang",
    h1: "Tabel konversi mata uang untuk pasangan apa pun",
    tagline:
      "Satu halaman memuat seluruh tangga: 1, 5, 10, 50, 100, 500, 1000, 5000, dan 10000 unit dikonversi antara dua mata uang apa pun dari satu snapshot mid-market.",
    intro: [
      "Hasil pencarian senang menjawab \u201c100 dolar berapa euro\u201d lalu berhenti di situ. Tabel ini menjawab satu keluarga pertanyaan sekaligus: sembilan jumlah preset dari 1 hingga 10.000, semuanya dikonversi dengan kurs yang sama dari snapshot yang sama, sehingga seluruh kolom konsisten secara internal alih-alih mencampur kuotasi yang diambil berjeda beberapa menit. Pilih mata uang dasar dan tujuan apa pun — tersedia 160+ mata uang — dan jumlahnya dibulatkan mengikuti konvensi desimal mata uang tujuan (tanpa desimal untuk yen, tiga untuk dinar).",
      "Kurs diambil satu kali dari layanan gratis open.er-api.com dan disimpan dalam cache di perangkat Anda selama satu jam, dengan waktu pembaruan ditampilkan di atas tabel. Ketika jaringan terputus, tabel cache terakhir menjaga halaman tetap dapat digunakan dan memberitahukannya secara terbuka.",
    ],
    steps: [
      "Pilih mata uang dasar — mata uang yang jumlah-jumlahnya ingin Anda lihat dalam daftar.",
      "Pilih mata uang tujuan; setiap baris mengonversi satu jumlah preset ke dalamnya.",
      "Baca tangganya: 1, 5, 10, 50, 100, 500, 1000, 5000, 10000 — satu kurs, satu snapshot.",
      "Periksa baris kurs di bawah tabel untuk angka pastinya beserta waktu pencatatannya.",
    ],
    faqs: [
      {
        q: "Mengapa sembilan jumlah inilah yang dipilih?",
        a: "Ini adalah angka-angka yang benar-benar diketik orang ke kolom pencarian: 1 untuk membaca kurs itu sendiri, angka kecil untuk hitungan cepat, ratusan dan ribuan bulat untuk faktur, pembelian, dan penganggaran. Tangga yang tetap juga menjaga setiap baris memakai satu kurs yang konsisten, alih-alih mengambil sampel pasar sembilan kali.",
      },
      {
        q: "Mengapa baris yen tidak punya desimal, sedangkan dinar punya tiga?",
        a: "Itu mengikuti konvensi satuan pecahan ISO 4217: yen, won, dan sejawatnya pada praktiknya tidak memiliki satuan pecahan, sementara dinar Bahrain, Kuwait, dan beberapa dinar lain diperdagangkan dalam seperseribu. Membulatkan jumlah yen ke dua desimal semu akan menyiratkan presisi yang tidak dimiliki mata uang tersebut.",
      },
      {
        q: "Apakah kursnya sama dengan yang dipakai bank saya?",
        a: "Itu adalah kurs mid-market — titik tengah acuan antara harga beli dan jual. Bank Anda menambahkan margin di atasnya, jadi perkirakan kurs transaksi Anda sedikit lebih buruk. Kalkulator margin FX menunjukkan dengan tepat berapa biaya dari suatu persentase margin tertentu.",
      },
      {
        q: "Seberapa baru data di tabel ini?",
        a: "Stempel waktu di samping tabel yang memberi tahu Anda. Kurs diperbarui paling sering setiap satu jam dari open.er-api.com dan tetap tersimpan dalam cache di perangkat Anda di antara kunjungan; jika layanan tidak dapat dijangkau, tabel cache ditampilkan disertai catatan jelas bahwa datanya sudah lama.",
      },
    ],
  },
  "cross-rate": {
    name: "Kalkulator Kurs Silang",
    h1: "Kurs silang melalui mata uang ketiga — diperiksa silang dengan kuotasi langsung",
    tagline:
      "Rangkai USD→EUR→GBP dan bandingkan kurs silang USD→GBP hasil hitungan dengan kurs langsung dari tabel, sehingga Anda dapat melihat kedua rute sepakat hingga enam digit.",
    intro: [
      "Kurs silang adalah nilai tukar antara dua mata uang yang diperoleh melalui mata uang ketiga. Kalikan dua segmennya — A→B dan B→C — dan Anda mendapatkan A→C tanpa perlu pasar yang menguotasi pasangan tersebut secara langsung. Alat ini melakukan perkalian dengan satu fungsi teruji, lalu — karena kurs silang yang tidak dapat Anda verifikasi hanyalah pertunjukan aritmetika — membandingkan hasilnya dengan kuotasi langsung A→C dari snapshot mid-market yang sama dan menampilkan kedua angka itu.",
      "Karena kedua rute berasal dari satu snapshot, keduanya sepakat hingga enam angka signifikan — dan itulah persisnya wujud pasar bebas arbitrase bila dilihat dari luar. Jika suatu saat ada yang menguotasi segmen yang tidak tersusun kembali menjadi kurs langsung, celah itu adalah margin mereka atau kuotasi usang; halaman ini memberi Anda acuan untuk menyadarinya.",
    ],
    steps: [
      "Pilih mata uang A — titik awal Anda.",
      "Pilih mata uang B — segmen tengah yang dilalui jalur konversi.",
      "Pilih mata uang C — tujuan akhir.",
      "Baca ketiga segmen dan baris kesimpulannya: kurs silang hasil hitungan versus kuotasi langsung.",
    ],
    faqs: [
      {
        q: "Apa itu kurs silang, dalam satu kalimat?",
        a: "Kurs antara dua mata uang yang dinyatakan melalui mata uang ketiga: 1 USD = 0,90 EUR dan 1 EUR = 0,85 GBP berarti 1 USD = 0,765 GBP, karena euro saling menghilangkan saat kedua segmen dikalikan.",
      },
      {
        q: "Mengapa kurs hasil hitungan dan kurs langsung cocok persis di sini?",
        a: "Kedua angka diturunkan dari satu snapshot mid-market yang sama: kuotasi langsung A→C dan kedua segmen berasal dari tabel yang sama, sehingga perkalian tersebut merekonstruksi kuotasi langsung hanya menyisakan galat floating-point yang sangat kecil. Lantai transaksi sungguhan dapat menampilkan celah kecil antar rute; layanan referensi gratis tidak.",
      },
      {
        q: "Kapan kedua rute bisa berbeda dalam praktik nyata?",
        a: "Ketika kedua segmen berasal dari sumber atau waktu yang berbeda — bank yang menguotasi dengan spread-nya sendiri, layanan pengiriman uang dengan kurs yang telah dinaikkan, atau salah satu segmen masih cache dari sebelum pasar bergerak tajam. Celah yang Anda ukur terhadap snapshot seperti ini adalah biaya yang tersembunyi dalam jalur tersebut.",
      },
      {
        q: "Apakah alat ini bisa dipakai untuk mencari arbitrase?",
        a: "Tidak — dan halaman ini tidak akan pernah menampilkan peluang arbitrase, karena semua angkanya sengaja diturunkan dari satu snapshot yang konsisten. Ini adalah alat pemeriksa: cara cepat memastikan bahwa rangkaian kurs yang dikutip benar-benar koheren.",
      },
    ],
  },
  "fx-margin-calculator": {
    name: "Kalkulator Margin FX",
    h1: "Berapa nilai faktur Anda yang sesungguhnya setelah margin bank",
    tagline:
      "Masukkan faktur berdenominasi valas, kurs, dan persentase margin bank Anda, lalu lihat nilai bruto, biaya tersembunyi, dan jumlah yang benar-benar diterima.",
    intro: [
      "Kurs mid-market bukanlah kurs yang Anda terima. Bank, jaringan kartu, dan layanan pembayaran memotong margin — sering kali 1 sampai 4 persen — dari setiap jumlah berdenominasi valas, dan mereka jarang menuliskan angka itu dalam kalimat yang sama dengan kurs andalan mereka. Kalkulator ini membuat selisihnya terlihat: masukkan jumlah faktur dalam mata uang aslinya, kurs yang dikutipkan kepada Anda (terisi lebih dulu dengan kurs mid-market terkini, dapat diedit agar persis dengan bank Anda), dan persentase marginnya. Anda mendapatkan nilai bruto, biaya margin, jumlah netto yang benar-benar diterima, serta kurs efektif yang pada akhirnya Anda dapatkan.",
      "Pekerja lepas yang menagih ke luar negeri dan importir yang membayar pemasok sama-sama hidup dari selisih ini: pada faktur 1000 unit dengan margin 2 persen, itu uang nyata setiap bulannya. Tidak ada data yang dikirim ke mana pun — kurs berasal dari layanan gratis open.er-api.com dan disimpan dalam cache satu jam di perangkat Anda, sementara perhitungan berjalan sepenuhnya secara lokal.",
    ],
    steps: [
      "Masukkan jumlah faktur dan mata uangnya.",
      "Masukkan mata uang domestik Anda — mata uang tempat uang benar-benar tiba.",
      "Pertahankan kurs mid-market terkini atau timpa dengan kurs persis yang dikutipkan bank Anda.",
      "Masukkan persentase margin dan bacakan hasilnya: bruto, biaya margin, netto yang diterima, kurs efektif.",
    ],
    faqs: [
      {
        q: "Persentase margin berapa yang sebaiknya saya masukkan?",
        a: "Jalur termurah biasanya adalah biaya valas yang diumumkan bank ditambah spread yang tersembunyi di dalam kurs: bandingkan kurs yang dikutipkan bank Anda dengan kurs mid-market yang ditampilkan di sini — selisih persennya itulah margin sesungguhnya. Pembayaran kartu dan platform pembayaran umumnya berkisar 1,5–4%; transfer SWIFT menambahkan biaya tetap di atasnya.",
      },
      {
        q: "Mengapa kalkulator ini mengizinkan saya mengedit kurs?",
        a: "Karena kontrak Anda adalah dengan angka bank Anda, bukan dengan mid-market. Menimpa kurs yang terisi lebih dulu dengan kurs yang benar-benar dikutipkan kepada Anda membuat angka bruto, biaya, dan netto tetap jujur untuk transaksi spesifik Anda — kurs terkini adalah kenyamanan, bukan paksaan.",
      },
      {
        q: "Apakah margin dipotong sebelum atau sesudah konversi?",
        a: "Model ini mengonversi seluruh jumlah faktur pada kurs yang diberikan, lalu memotong margin dari total hasil konversi — cara kerja kebanyakan biaya valas berbasis persentase dalam praktik. Jika penyedia Anda justru melebarkan kursnya sendiri (mengutipkan kurs yang lebih buruk alih-alih memungut biaya), memasukkan kurs yang lebih buruk itu dengan margin 0% memberikan jawaban netto yang sama.",
      },
      {
        q: "Apakah hasilnya dibulatkan mengikuti konvensi mata uang saya?",
        a: "Ya. Hasil ditampilkan pada presisi satuan pecahan terkecil ISO 4217 dari mata uang domestik Anda — dua desimal untuk sebagian besar, nol untuk yen atau won, tiga untuk dinar dan rial Oman — menggunakan pembulatan half-up yang presisi, bukan terkaan floating-point.",
      },
    ],
  },
};
