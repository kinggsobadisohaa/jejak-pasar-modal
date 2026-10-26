// Complete course data for Jejak Pasar Modal according to PRD v2.0

export interface SubTopic {
  id: string;
  title: string;
  summary: string;
  content: string;
  keyPoints: string[];
  takeaway: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface GlossaryItem {
  term: string;
  category: 'dasar' | 'pelaku' | 'tren';
  shortDef: string;
  fullDef: string;
  analogy?: string;
}

export interface TrendExercise {
  id: string;
  title: string;
  description: string;
  chartType: 'uptrend' | 'downtrend' | 'sideways';
  points: { x: number; y: number; label?: string; type?: 'peak' | 'trough' | 'neutral' }[];
  explanation: string;
  criteria: string[];
}

export const MODULE_1_SUBTOPICS: SubTopic[] = [
  {
    id: 'apa-itu-pasar-modal',
    title: '1. Apa Itu Pasar Modal?',
    summary: 'Pasar modal adalah tempat bertemunya pihak yang membutuhkan dana jangka panjang (perusahaan/pemerintah) dengan penyedia dana (investor).',
    content: `Secara sederhana, bayangkan pasar tradisional tempat bertemunya penjual beras dan pembeli. Di pasar modal, komoditas yang diperjualbelikan bukanlah barang konsumsi fisik, melainkan instrumen keuangan jangka panjang seperti saham dan obligasi.

Pihak yang membutuhkan dana (misalnya perusahaan yang ingin membangun pabrik baru atau memperluas jaringan toko) bertemu dengan masyarakat atau institusi yang memiliki kelebihan dana dan ingin menumbuhkan uangnya dalam jangka panjang.

Pasar modal memiliki peran krusial bagi perekonomian:
1. **Fungsi Ekonomi**: Memfasilitasi alokasi dana dari masyarakat produktif ke sektor riil yang menghasilkan lapangan kerja dan inovasi.
2. **Fungsi Keuangan**: Memberikan kesempatan bagi masyarakat umum untuk memperoleh imbal hasil atas modal yang mereka investasikan.`,
    keyPoints: [
      'Pasar modal bukan tempat perjudian, melainkan sarana pendanaan resmi jangka panjang.',
      'Menghubungkan pencari modal (perusahaan/emiten) dengan penyedia modal (investor).',
      'Diatur dan diawasi ketat oleh lembaga negara (di Indonesia: OJK dan BEI).'
    ],
    takeaway: 'Pasar modal adalah jembatan pendanaan jangka panjang yang mempertemukan perusahaan yang ingin berekspansi dengan masyarakat yang ingin berinvestasi.'
  },
  {
    id: 'apa-itu-saham',
    title: '2. Apa Itu Saham?',
    summary: 'Saham adalah bukti tanda kepemilikan seseorang atau badan usaha atas bagian dari suatu perusahaan.',
    content: `Ketika Anda membeli 1 lot saham sebuah perusahaan yang tercatat di bursa, Anda secara hukum telah menjadi salah satu pemilik (pemegang saham) perusahaan tersebut, sekecil apa pun persentase kepemilikannya.

**Analogi Kedai Kopi:**
Bayangkan tiga sahabat—Andi, Budi, dan Citra—mendirikan sebuah kedai kopi dengan modal total Rp300 juta. Masing-masing menyetor Rp100 juta. Maka Andi memiliki 33,3% saham, Budi 33,3%, dan Citra 33,3%. Jika kedai kopi tersebut sukses dan menghasilkan laba bersih Rp60 juta dalam setahun, laba tersebut dapat dibagikan kepada mereka bertiga sesuai porsi kepemilikan (disebut dividen).

Di pasar modal publik, perusahaan yang sudah terdaftar (*Go Public* / Emiten) membagi kepemilikannya ke dalam jutaan hingga miliaran lembar saham yang dapat dibeli oleh masyarakat umum.

Sebagai pemegang saham, Anda berhak atas:
- **Hak atas keuntungan perusahaan** dalam bentuk dividen (jika diputuskan dalam RUPS).
- **Hak suara** dalam Rapat Umum Pemegang Saham (RUPS).
- **Klaim proporsional** atas aset perusahaan jika terjadi likuidasi setelah seluruh kewajiban utang dilunasi.`,
    keyPoints: [
      'Saham = bukti sah kepemilikan sebagian perusahaan.',
      'Satuan perdagangan saham di Indonesia adalah 1 lot (100 lembar saham).',
      'Keuntungan berasal dari dividen (bagi hasil laba) dan capital gain (kenaikan harga pasar).'
    ],
    takeaway: 'Membeli saham berarti membeli porsi kepemilikan bisnis riil, bukan sekadar membeli angka di layar.'
  },
  {
    id: 'perbedaan-pasar-modal-saham-bursa',
    title: '3. Perbedaan Pasar Modal, Pasar Saham, & Bursa Efek',
    summary: 'Ketiga istilah ini sering tertukar, namun memiliki tingkatan cakupan yang berbeda.',
    content: `Banyak pemula mengira ketiga istilah ini sama persis. Berikut adalah perbedaan hierarkisnya:

| Istilah | Pengertian Sederhana | Cakupan |
|---|---|---|
| **Pasar Modal** (*Capital Market*) | Ekosistem menyeluruh tempat transaksi instrumen keuangan jangka panjang. | Paling luas (mencakup saham, obligasi/sukuk, reksa dana, ETF, derivatif). |
| **Pasar Saham** (*Stock Market*) | Bagian spesifik dari pasar modal yang khusus memperdagangkan instrumen saham. | Fokus pada kepemilikan ekuitas perusahaan. |
| **Bursa Efek** (*Stock Exchange*) | Lembaga/wadah resmi penyelenggara sistem dan sarana tempat transaksi berlangsung. | Tempat/institusi fisik dan digitalnya (di Indonesia: PT Bursa Efek Indonesia / BEI / IDX). |

**Ibarat Pusat Perbelanjaan:**
- Pasar modal adalah kawasan niaga terpadu.
- Bursa efek (BEI) adalah gedung mal berizin resmi yang menyediakan tempat, listrik, dan aturan keamanan.
- Pasar saham adalah lantai atau deretan kios di dalam mal tersebut yang khusus menjual kepemilikan toko.`,
    keyPoints: [
      'Pasar modal memuat banyak instrumen, saham hanya salah satunya.',
      'Bursa Efek Indonesia (BEI) adalah penyelenggara sistem transaksi.',
      'Investor bertransaksi melalui sistem yang disediakan bursa efek melalui perantara sekuritas.'
    ],
    takeaway: 'Pasar modal adalah ekosistem payung besar, pasar saham adalah segmen instrumennya, dan bursa efek adalah pengelola pasarnya.'
  },
  {
    id: 'mengapa-perusahaan-terbit-saham',
    title: '4. Mengapa Perusahaan Menerbitkan Saham?',
    summary: 'Perusahaan menjual saham ke publik (IPO) terutama untuk memperoleh dana ekspansi tanpa beban bunga pinjaman.',
    content: `Ketika sebuah perusahaan ingin membuka 50 pabrik baru, membangun infrastruktur canggih, atau membayar utang berbunga tinggi, ada dua cara utama mendapatkan modal:

1. **Meminjam uang (utang / obligasi)**: Perusahaan harus membayar bunga tetap secara berkala, dan pokok pinjaman harus dikembalikan tepat waktu, terlepas dari apakah bisnis sedang untung atau rugi.
2. **Menerbitkan Saham (Ekuitas)**: Perusahaan menawarkan kepemilikan kepada publik melalui penawaran umum perdana (*Initial Public Offering* / IPO). Dana yang masuk menjadi modal setor tetap perusahaan dan tidak perlu dicicil. Sebagai gantinya, para pemegang saham baru berhak menikmati keuntungan di masa depan jika perusahaan bertumbuh.

Selain modal, *go public* meningkatkan reputasi merek, transparansi tata kelola (*Good Corporate Governance*), dan memudahkan akses pendanaan di masa depan.`,
    keyPoints: [
      'Modal ekuitas tidak memiliki jatuh tempo pembayaran dan bunga wajib.',
      'Risiko bisnis ditanggung bersama oleh pemilik lama dan investor baru.',
      'Perusahaan yang go public wajib transparan mempublikasikan laporan keuangan secara rutin.'
    ],
    takeaway: 'Menerbitkan saham memberi perusahaan modal tanpa beban utang berkala, sekaligus menuntut tata kelola yang transparan kepada publik.'
  },
  {
    id: 'mengapa-membeli-menjual-saham',
    title: '5. Mengapa Seseorang Membeli & Menjual Saham?',
    summary: 'Investor membeli saham untuk menumbuhkan kekayaan dan menjual saham untuk merealisasikan keuntungan atau kebutuhan dana.',
    content: `Transaksi di pasar modal terjadi karena ada perbedaan tujuan, jangka waktu, dan penilaian antarpeserta pasar:

**Alasan Membeli Saham:**
- **Dividen**: Mengharapkan bagian laba kas tahunan yang dibagikan secara rutin oleh perusahaan yang sudah mapan.
- **Apresiasi Nilai (*Capital Gain*)**: Mengharapkan kinerja bisnis perusahaan terus membaik sehingga nilai sahamnya meningkat di masa depan.
- **Proteksi Inflasi**: Saham bisnis yang sehat secara historis mampu mengalahkan laju inflasi jangka panjang.

**Alasan Menjual Saham:**
- **Realisasi Keuntungan**: Mengunci hasil investasi yang telah tercapai sesuai target.
- **Kebutuhan Kas Likuid**: Menarik modal untuk keperluan hidup, membeli properti, atau kebutuhan mendesak lainnya.
- **Perubahan Fundamental**: Bisnis perusahaan mengalami kemunduran atau arah manajemen tidak lagi sejalan.
- **Manajemen Risiko**: Membatasi kerugian (*cut loss*) jika harga bergerak berlawanan dengan rencana.`,
    keyPoints: [
      'Setiap ada yang menjual saham, pasti ada pembeli di harga kesepakatan tersebut.',
      'Perbedaan ekspektasi inilah yang menciptakan pasar yang likuid.',
      'Keberhasilan investasi didasari kesabaran dan pemahaman atas bisnis yang dibeli.'
    ],
    takeaway: 'Membeli saham adalah keputusan menjadi rekan bisnis; menjual saham adalah keputusan mengalihkan modal ke instrumen lain atau kebutuhan hidup.'
  },
  {
    id: 'pihak-terlibat-pasar-modal',
    title: '6. Siapa Saja Pihak yang Terlibat?',
    summary: 'Ekosistem pasar modal Indonesia dibangun oleh regulator resmi, lembaga penunjang, perantara, dan para investor.',
    content: `Agar transaksi aman, adil, dan teratur, pasar modal Indonesia memiliki struktur lembaga yang jelas:

1. **Otoritas Jasa Keuangan (OJK)**: Lembaga negara independen yang mengawasi seluruh aktivitas jasa keuangan, menetapkan regulasi, dan melindungi kepentingan konsumen serta masyarakat.
2. **Self-Regulatory Organizations (SRO)**:
   - **Bursa Efek Indonesia (BEI)**: Mengoperasikan sistem perdagangan saham, menetapkan aturan pencatatan efek, dan memantau pergerakan pasar.
   - **KPEI (Kliring Penjaminan Efek Indonesia)**: Memastikan hak dan kewajiban setiap transaksi terjamin pemenuhannya.
   - **KSEI (Kustodian Sentral Efek Indonesia)**: Menyimpan efek secara elektronik dan mengelola pembagian hak (seperti dividen) secara terpusat.
3. **Perusahaan Sekuritas (Broker / Pialang)**: Anggota bursa berizin tempat Anda membuka Rekening Dana Nasabah (RDN) dan aplikasi jual beli saham.
4. **Emiten (Perusahaan Tercatat)**: Perusahaan yang menjual sahamnya di bursa (misalnya BBCA, TLKM, ASII).
5. **Investor**: Pemilik modal, baik perorangan (investor ritel) maupun lembaga (dana pensiun, manajer investasi, asuransi).`,
    keyPoints: [
      'Investor ritel tidak bisa langsung datang ke BEI; transaksi wajib melalui Perusahaan Sekuritas berizin OJK.',
      'Uang Anda disimpan terpisah di Rekening Dana Nasabah (RDN) atas nama Anda sendiri di bank kustodian.',
      'KSEI memungkinkan Anda mengecek kepemilikan efek Anda secara transparan kapan saja lewat portal AKSes.'
    ],
    takeaway: 'Pasar modal beroperasi di bawah pengawasan ketat OJK dengan infrastruktur terintegrasi antara BEI, KPEI, KSEI, dan Perusahaan Sekuritas.'
  },
  {
    id: 'mekanisme-transaksi-saham',
    title: '7. Bagaimana Transaksi Saham Berlangsung?',
    summary: 'Transaksi berlangsung secara elektronik dengan mempertemukan harga penawaran jual (Ask / Offer) dan beli (Bid).',
    content: `Semua pesanan di Bursa Efek Indonesia dipertemukan melalui sistem otomatis bernama JATS (*Jakarta Automated Trading System*) dengan prinsip prioritas harga (*price priority*) dan prioritas waktu (*time priority*).

**Konsep Buku Pesanan (*Order Book*):**
- **Bid (Antrean Beli)**: Daftar harga di mana pembeli bersedia membeli saham, diurutkan dari harga tertinggi ke terendah.
- **Ask / Offer (Antrean Jual)**: Daftar harga di mana penjual bersedia melepas saham, diurutkan dari harga terendah ke tertinggi.
- **Match (Transaksi Terjadi)**: Saat penawar beli menaikkan harga atau penawar jual menurunkan harga hingga bertemu pada angka yang sama, sistem seketika mengeksekusi transaksi.

**Penyelesaian Transaksi (Settlement T+2):**
Jika Anda membeli atau menjual saham pada hari Senin (T), penyelesaian administrasi dan perpindahan hak resmi berlangsung 2 hari bursa berikutnya, yaitu hari Rabu (T+2). Namun di aplikasi sekuritas, kepemilikan dan saldo sudah langsung tercatat.`,
    keyPoints: [
      'Minimal pembelian adalah 1 lot (100 lembar saham).',
      'Aturan prioritas: Penawaran beli tertinggi dan jual terendah akan dilayani lebih dulu.',
      'Jam perdagangan bursa terbagi menjadi sesi 1 dan sesi 2 pada hari kerja (Senin–Jumat).'
    ],
    takeaway: 'Transaksi terjadi secara otomatis dan objektif saat penawaran beli tertinggi bertemu dengan penawaran jual terendah di buku pesanan.'
  },
  {
    id: 'peluang-dan-risiko-dasar',
    title: '8. Apa Saja Peluang & Risiko Dasar Saham?',
    summary: 'Investasi saham menawarkan pertumbuhan imbal hasil yang menarik namun disertai risiko fluktuasi harga dan penurunan nilai modal.',
    content: `Memahami risiko adalah langkah terpenting bagi setiap pemula sebelum memikirkan potensi keuntungan.

**Peluang (Imbal Hasil):**
1. **Capital Gain**: Keuntungan dari selisih harga jual yang lebih tinggi dari harga beli.
2. **Dividen**: Bagian dari laba bersih perusahaan yang dibagikan secara tunai kepada pemegang saham.
3. **Bunga Berbunga (*Compounding*)**: Menginvestasikan kembali dividen yang diterima untuk membeli lebih banyak saham sehingga pertumbuhan modal berlipat ganda dari waktu ke waktu.

**Risiko Nyata yang Harus Dipahami:**
1. **Capital Loss**: Kerugian modal yang terjadi ketika harga jual lebih rendah dari harga beli.
2. **Risiko Likuiditas**: Kesulitan menjual saham dengan cepat karena tidak ada pembeli di harga yang diinginkan (sering terjadi pada saham lapis tiga yang sepi peminat).
3. **Risiko Fluktuasi Pasar**: Harga saham bisa turun drastis dalam jangka pendek akibat gejolak ekonomi global, krisis industri, atau suku bunga.
4. **Risiko Bisnis & Delisting**: Jika kinerja emiten memburuk, merugi terus-menerus, atau bangkrut, bursa dapat mencoret saham tersebut (*delisting*), menyebabkan nilai saham jatuh atau hilang.`,
    keyPoints: [
      'Prinsip umum: Imbal hasil yang lebih tinggi biasanya berjalan berdampingan dengan risiko yang lebih tinggi.',
      'Jangan pernah menggunakan uang kebutuhan pokok, dana darurat, atau dana pinjaman untuk membeli saham.',
      'Diversifikasi (membeli beberapa perusahaan berkualitas dari sektor berbeda) membantu mengurangi risiko kegagalan satu emiten.'
    ],
    takeaway: 'Saham memberi peluang pertumbuhan kekayaan jangka panjang, namun membutuhkan kedisiplinan mengelola risiko dan kesabaran menghadapi fluktuasi.'
  },
  {
    id: 'rangkuman-materi-1',
    title: '9. Rangkuman & Kuis Pemahaman Modul 1',
    summary: 'Evaluasi singkat untuk menguji pemahaman Anda mengenai fondasi pasar modal dan saham.',
    content: `Selamat! Anda telah mempelajari seluruh fondasi pasar modal:
- Anda mengetahui bahwa pasar modal adalah wadah pendanaan jangka panjang resmi yang diawasi OJK.
- Anda memahami bahwa saham adalah bukti nyata kepemilikan bisnis, bukan sekadar instrumen spekulasi.
- Anda mengerti peran BEI, sekuritas, buku pesanan (Bid/Ask), serta keseimbangan antara peluang dividen/capital gain dengan risiko fluktuasi modal.

Lakukan pemeriksaan pemahaman mandiri di bawah ini untuk menguji daya serap materi Anda sebelum melanjutkan ke materi membaca tren.`,
    keyPoints: [
      'Pasar modal mempertemukan emiten pencari modal dengan investor penyedia modal.',
      'Membeli saham = memiliki bagian kepemilikan bisnis riil.',
      'Hasil investasi tidak dijamin; pemahaman risiko adalah tameng utama investor.'
    ],
    takeaway: 'Pemahaman fondasi yang kokoh adalah bekal terbaik sebelum mempelajari grafik harga saham.'
  }
];

export const MODULE_1_QUIZ: QuizQuestion[] = [
  {
    id: 'q1-1',
    question: 'Apa arti sebenarnya ketika Anda membeli saham suatu perusahaan publik?',
    options: [
      'Memberikan pinjaman berbunga kepada dewan komisaris perusahaan.',
      'Memiliki bagian kepemilikan sah atas bisnis perusahaan tersebut.',
      'Membeli hak monopoli untuk menjual produk perusahaan.',
      'Menitipkan uang tanpa risiko di brankas bursa efek.'
    ],
    correctIndex: 1,
    explanation: 'Saham adalah bukti tanda kepemilikan modal seseorang atau badan usaha atas bagian dari suatu perusahaan tercatat.'
  },
  {
    id: 'q1-2',
    question: 'Berapa jumlah lembar saham minimum dalam 1 lot transaksi di Bursa Efek Indonesia?',
    options: [
      '10 lembar',
      '50 lembar',
      '100 lembar',
      '1.000 lembar'
    ],
    correctIndex: 2,
    explanation: 'Satu lot transaksi saham di Bursa Efek Indonesia (BEI) secara standar berisi 100 lembar saham.'
  },
  {
    id: 'q1-3',
    question: 'Lembaga independen negara yang bertugas mengatur dan mengawasi seluruh aktivitas pasar modal di Indonesia adalah:',
    options: [
      'Otoritas Jasa Keuangan (OJK)',
      'Bank Indonesia (BI)',
      'Kementerian Perdagangan',
      'Lembaga Penjamin Simpanan (LPS)'
    ],
    correctIndex: 0,
    explanation: 'OJK bertugas melakukan pengaturan dan pengawasan terhadap seluruh kegiatan di sektor pasar modal, perbankan, dan industri keuangan nonbank.'
  },
  {
    id: 'q1-4',
    question: 'Manakah pernyataan yang paling tepat mengenai risiko berinvestasi saham?',
    options: [
      'Saham bebas dari risiko penurunan modal jika perusahaan sudah besar.',
      'Keuntungan saham selalu dijamin oleh pemerintah setiap kuartal.',
      'Saham memiliki potensi capital loss dan fluktuasi harga yang dipengaruhi kondisi bisnis dan pasar.',
      'Investor dijamin tidak akan pernah merugi jika menyimpan saham selama lebih dari 3 bulan.'
    ],
    correctIndex: 2,
    explanation: 'Saham merupakan instrumen pasar modal yang nilainya berfluktuasi. Risiko penurunan nilai modal (capital loss) tetap ada.'
  }
];

export const MODULE_2_SUBTOPICS: SubTopic[] = [
  {
    id: 'apa-itu-tren-harga',
    title: '1. Apa yang Dimaksud dengan Tren Harga Saham?',
    summary: 'Tren harga adalah kecenderungan arah umum ke mana harga saham bergerak dalam jangka waktu tertentu.',
    content: `Jika Anda mengamati grafik pergerakan harga saham menit demi menit atau hari demi hari, Anda akan melihat bahwa harga tidak bergerak lurus seperti garis penggaris. Harga umumnya bergerak zig-zag: naik sedikit, turun sedikit, lalu naik lagi, atau sebaliknya.

Meskipun terlihat bergerigi dan acak pada pandangan sekilas, jika kita mundur beberapa langkah dan melihat gambaran yang lebih luas, pergerakan zig-zag tersebut membentuk sebuah arah kecenderungan umum. **Arah kecenderungan umum inilah yang disebut sebagai tren (*trend*).**

Ada tiga arah tren utama di pasar keuangan:
1. **Tren Naik (*Uptrend*)**: Kecenderungan umum harga bergerak ke atas.
2. **Tren Turun (*Downtrend*)**: Kecenderungan umum harga bergerak ke bawah.
3. **Tren Mendatar (*Sideways / Konsolidasi*)**: Harga bergerak mendatar dalam kisaran rentang harga tertentu tanpa arah naik atau turun yang dominan.`,
    keyPoints: [
      'Harga tidak bergerak garis lurus, melainkan berupa gelombang pasang surut (zig-zag).',
      'Tren adalah kecenderungan arah besar dari rangkaian gelombang tersebut.',
      'Mengenali tren membantu melihat apakah minat pasar secara agregat sedang optimis, pesimis, atau menunggu.'
    ],
    takeaway: 'Tren bukan jaminan masa depan, melainkan cerminan arah kecenderungan pergerakan harga saat ini.'
  },
  {
    id: 'mengapa-tren-diamati',
    title: '2. Mengapa Tren Diamati dalam Analisis Pasar?',
    summary: 'Mengamati tren membantu pembaca memahami sentimen pasar dan menghindari tindakan melawan arah pergerakan yang dominan.',
    content: `Pepatah terkenal di kalangan analis teknis berbunyi: *"The trend is your friend until it bends"* (Tren adalah sahabat Anda sampai ia berbelok).

Mengapa pengamatan tren sangat penting bagi pemula?
- **Mengetahui Situasi Pasar Saat Ini**: Membedakan apakah saham sedang diapresiasi pasar atau justru sedang mengalami aksi jual terus-menerus.
- **Mencegah Kesalahan Mental "Menangkap Pisau Jatuh"**: Banyak pemula tergiur membeli saham yang harganya sedang anjlok tajam hanya karena merasa harganya "sudah murah", padahal tren turunnya masih sangat kuat.
- **Membangun Rencana yang Realistis**: Memahami tren membantu menentukan ekspektasi waktu dan toleransi risiko.

**Peringatan Penting:**
Mengamati tren **bukanlah** ilmu ramalan pasti. Tren yang terlihat sangat kuat bisa melambat atau berbalik arah sewaktu-waktu jika terjadi perubahan fundamental bisnis atau sentimen ekonomi. Pengamatan tren adalah alat bantu observasi, bukan alat penentu kepastian.`,
    keyPoints: [
      'Tren membantu mengukur keseimbangan antara pembeli dan penjual.',
      'Membeli saham di tengah tren turun tajam meningkatkan risiko kerugian modal.',
      'Tren adalah observasi masa lalu dan masa kini, bukan ramalan masa depan yang pasti.'
    ],
    takeaway: 'Mengamati tren memberi konteks objektif atas kondisi pasar, sehingga keputusan tidak didasari oleh tebakan atau emosi semata.'
  },
  {
    id: 'tren-naik-uptrend',
    title: '3. Tren Naik (Uptrend): Puncak & Lembah Semakin Tinggi',
    summary: 'Uptrend terbentuk ketika rangkaian puncak harga baru lebih tinggi dari puncak sebelumnya, dan lembah baru lebih tinggi dari lembah sebelumnya.',
    content: `Kunci utama dalam mengenali tren naik bukanlah seberapa cepat harga melonjak, melainkan **struktur gelombang harga**.

Dalam tren naik yang sehat (*uptrend*):
- Setiap kali harga naik dan mencapai titik tertinggi sementara sebelum terkoreksi, titik tertinggi itu disebut **Puncak (*Peak / High*)**.
- Ketika harga sedikit mundur lalu memantul kembali ke atas, titik terendah koreksi tersebut disebut **Lembah (*Trough / Low*)**.

**Aturan Emas Uptrend:**
1. **Higher High (HH)**: Setiap puncak baru berada di level harga yang **lebih tinggi** daripada puncak sebelumnya.
2. **Higher Low (HL)**: Setiap lembah baru berada di level harga yang **lebih tinggi** daripada lembah sebelumnya.

Selama pola HH dan HL ini terus terbentuk, saham tersebut secara teknis masih berada dalam status tren naik (*uptrend*). Ketika koreksi harga terjadi, pembeli baru segera masuk di harga yang lebih tinggi dari koreksi sebelumnya, menandakan permintaan (*demand*) masih mendominasi penawaran (*supply*).`,
    keyPoints: [
      'Uptrend ditandai dengan Higher High (puncak meninggi) dan Higher Low (lembah meninggi).',
      'Harga tidak naik tanpa henti; biasanya ada jeda koreksi sehat.',
      'Garis tren naik (*uptrend line*) ditarik dengan menghubungkan titik-titik lembah (HL) yang meninggi.'
    ],
    takeaway: 'Tren naik terkonfirmasi jika rangkaian puncak dan lembah secara konsisten bergerak semakin tinggi.'
  },
  {
    id: 'tren-turun-downtrend',
    title: '4. Tren Turun (Downtrend): Puncak & Lembah Semakin Rendah',
    summary: 'Downtrend terbentuk ketika rangkaian puncak harga baru lebih rendah dari puncak sebelumnya, dan lembah baru lebih rendah dari lembah sebelumnya.',
    content: `Kebalikan dari tren naik, tren turun (*downtrend*) menunjukkan bahwa penjual lebih agresif melepas saham daripada pembeli yang bersedia menampung.

Dalam tren turun:
- Harga turun ke titik terendah baru, lalu mencoba memantul sedikit (*rebound*). Namun pantulan tersebut kehabisan tenaga di level yang lebih rendah dari puncak sebelumnya.
- Tekanan jual kembali mendorong harga menembus level terendah sebelumnya.

**Aturan Emas Downtrend:**
1. **Lower High (LH)**: Setiap puncak baru berada di level harga yang **lebih rendah** daripada puncak sebelumnya.
2. **Lower Low (LL)**: Setiap lembah baru berada di level harga yang **lebih rendah** daripada lembah sebelumnya.

Pemula sering terkecoh oleh pantulan harga sementara (*dead cat bounce*) di tengah tren turun dan mengiranya sebagai pembalikan arah, padahal struktur LH dan LL masih berlanjut.`,
    keyPoints: [
      'Downtrend ditandai dengan Lower High (puncak menurun) dan Lower Low (lembah menurun).',
      'Pantulan naik sesaat adalah bagian alami dari gelombang tren turun, bukan otomatis pembalikan tren.',
      'Garis tren turun (*downtrend line*) ditarik dengan menghubungkan titik-titik puncak (LH) yang menurun.'
    ],
    takeaway: 'Tren turun terkonfirmasi jika rangkaian puncak dan lembah secara konsisten merosot semakin rendah.'
  },
  {
    id: 'tren-mendatar-sideways',
    title: '5. Tren Mendatar (Sideways): Pergerakan dalam Rentang Serupa',
    summary: 'Sideways terjadi ketika kekuatan pembeli dan penjual relatif seimbang sehingga harga bergerak bolak-balik dalam rentang horizontal.',
    content: `Pasar tidak selalu naik atau turun. Faktanya, dalam banyak periode waktu, harga saham bergerak mendatar (*sideways* atau fase konsolidasi).

Karakteristik Tren Mendatar:
- Puncak-puncak harga tertahan di sekitar level yang relatif sama (disebut area resistansi / *resistance*).
- Lembah-lembah harga juga memantul di sekitar level yang relatif sama (disebut area dukungan / *support*).
- Tidak ada pembentukan puncak yang jauh lebih tinggi atau lembah yang jauh lebih rendah secara konsisten.

Fase *sideways* mencerminkan keraguan atau penantian pasar, misalnya menjelang rilis laporan keuangan penting, keputusan suku bunga bank sentral, atau aksi korporasi besar.`,
    keyPoints: [
      'Sideways adalah fase keseimbangan sementara antara kekuatan penawaran dan permintaan.',
      'Harga bergerak bolak-balik di antara batas atas (resistance) dan batas bawah (support).',
      'Fase sideways biasanya akan diakhiri oleh penembusan (*breakout*) ke atas menjadi uptrend atau ke bawah menjadi downtrend.'
    ],
    takeaway: 'Tren mendatar menandakan konsolidasi harga dalam rentang horizontal sebelum arah tren baru terbentuk.'
  },
  {
    id: 'cara-mengamati-puncak-lembah',
    title: '6. Cara Mengamati Rangkaian Puncak & Lembah',
    summary: 'Metode sistematis 4 langkah untuk mengidentifikasi titik belok harga secara objektif pada grafik sederhana.',
    content: `Agar Anda tidak bingung melihat grafik, berikut langkah praktis membaca struktur harga:

1. **Langkah 1: Perlebar Tampilan Grafik (Zoom Out)**
   Jangan hanya melihat 2 atau 3 batang lilin (*candlestick*) terakhir. Lihat minimal 3 hingga 6 bulan pergerakan harga untuk melihat gambaran yang utuh.

2. **Langkah 2: Tandai Titik-Titik Puncak Nyata (Swing High)**
   Cari titik di mana harga sempat mencapai angka tertinggi lokal sebelum kemudian berbalik turun minimal 3–5 periode. Beri tanda huruf **H**.

3. **Langkah 3: Tandai Titik-Titik Lembah Nyata (Swing Low)**
   Cari titik di mana harga sempat menyentuh dasar lokal sebelum kemudian memantul naik kembali. Beri tanda huruf **L**.

4. **Langkah 4: Bandingkan Urutan Titik Tersebut**
   - Apakah Puncak 2 > Puncak 1, dan Lembah 2 > Lembah 1? → **Uptrend**.
   - Apakah Puncak 2 < Puncak 1, dan Lembah 2 < Lembah 1? → **Downtrend**.
   - Apakah titik puncak dan lembah berada pada kisaran horizontal yang hampir sama? → **Sideways**.`,
    keyPoints: [
      'Gunakan grafik garis (Line Chart) terlebih dahulu jika grafik lilin (candlestick) terasa terlalu ramai.',
      'Abaikan riak-riak fluktuasi kecil harian; fokus pada ayunan harga yang jelas (*major swings*).',
      'Objektivitas adalah kunci: catat fakta apa yang digambarkan grafik, bukan apa yang Anda harapkan.'
    ],
    takeaway: 'Menandai ayunan puncak dan lembah secara runut adalah fondasi paling murni dalam analisis pergerakan harga.'
  },
  {
    id: 'rentang-waktu-timeframe',
    title: '7. Perbedaan Tren pada Berbagai Kerangka Waktu',
    summary: 'Arah tren saham sangat bergantung pada jendela waktu yang Anda amati: harian, mingguan, atau bulanan.',
    content: `Salah satu sumber kebingungan terbesar bagi pemula adalah ketika dua orang memperdebatkan tren suatu saham: yang satu berkata sedang naik, yang lain berkata sedang turun, dan keduanya bisa sama-sama benar! Mengapa demikian?

Jawabannya adalah **Perbedaan Kerangka Waktu (*Timeframe*)**:

1. **Tren Jangka Panjang (*Major Trend* / Grafik Mingguan & Bulanan)**:
   Mencerminkan perjalanan harga selama 1 hingga beberapa tahun. Misalnya, sebuah saham bank besar berada dalam tren naik solid selama 3 tahun terakhir.
2. **Tren Menengah (*Intermediate Trend* / Grafik Harian)**:
   Mencerminkan pergerakan dalam beberapa minggu hingga beberapa bulan. Di tengah tren naik jangka panjang, saham bisa saja mengalami koreksi turun selama 1 bulan.
3. **Tren Jangka Pendek (*Minor Trend* / Grafik 1 jam atau 15 menit)**:
   Mencerminkan fluktuasi dalam hitungan jam atau beberapa hari.

Bagi pemula, disarankan mengamati grafik **harian (daily)** dan **mingguan (weekly)** agar tidak tersesat dalam kebisingan fluktuasi jangka sangat pendek (*noise*).`,
    keyPoints: [
      'Tren jangka pendek dapat berlawanan arah dengan tren jangka panjang.',
      'Koreksi turun sementara di grafik harian sering kali hanyalah lembah Higher Low pada grafik mingguan.',
      'Pilihlah satu kerangka waktu acuan utama yang sesuai dengan profil dan tujuan belajar Anda.'
    ],
    takeaway: 'Sebelum menyimpulkan sebuah tren, selalu perjelas kerangka waktu apa yang sedang Anda gunakan.'
  },
  {
    id: 'contoh-grafik-langkah-demi-langkah',
    title: '8. Contoh Grafik Langkah Demi Langkah',
    summary: 'Bedah kasus visual bagaimana sebuah saham bertransisi dari sideways, menuju uptrend, lalu beralih ke downtrend.',
    content: `Mari kita amati siklus pergerakan harga umum melalui 3 fase transisi:

**Fase 1: Konsolidasi (*Sideways*)**
Harga saham emiten "A" bergerak bolak-balik antara Rp1.000 (support) dan Rp1.100 (resistance) selama 4 bulan. Volume transaksi relatif rendah. Puncak dan lembah tidak mencetak level tertinggi atau terendah baru.

**Fase 2: Terbentuknya Tren Naik (*Uptrend*)**
Tiba-tiba harga berhasil menembus batas Rp1.100 disertai peningkatan volume. Harga naik ke Rp1.250 (Puncak 1), terkoreksi ke Rp1.150 (Lembah 1), lalu melesat ke Rp1.400 (Puncak 2 / Higher High), dan mundur ke Rp1.300 (Lembah 2 / Higher Low).
*Kesimpulan*: Struktur HH dan HL terkonfirmasi → Uptrend aktif.

**Fase 3: Peringatan & Transisi ke Tren Turun (*Downtrend*)**
Setelah mencapai Rp1.500, harga turun tajam ke Rp1.300 (menembus Lembah 2 sebelumnya). Saat mencoba naik kembali, harga hanya mampu mencapai Rp1.380 (Lower High, gagal mencetak level tertinggi baru). Kemudian harga anjlok lagi ke Rp1.200 (Lower Low).
*Kesimpulan*: Struktur tren naik telah rusak dan berpindah menjadi tren turun.`,
    keyPoints: [
      'Tren tidak berubah dalam sekejap mata; biasanya ada tanda-tanda perubahan struktur puncak dan lembah.',
      'Kegagalan membuat Higher High baru adalah sinyal awal bahwa tenaga tren naik mulai melemah.',
      'Penembusan lembah sebelumnya mengonfirmasi potensi dimulainya tren turun.'
    ],
    takeaway: 'Perhatikan titik di mana struktur Higher High dan Higher Low terhenti dan berganti menjadi Lower High dan Lower Low.'
  },
  {
    id: 'kesalahan-umum-pemula',
    title: '9. Kesalahan Umum Pemula Saat Membaca Tren',
    summary: 'Waspadai bias psikologis dan kesalahan interpretasi teknis yang sering dialami pembaca baru.',
    content: `Belajar membaca tren membutuhkan disiplin dan kewaspadaan terhadap kesalahan umum berikut:

1. **Menganggap Tren Sebagai Kepastian Masa Depan**
   Grafik harga mencatat apa yang telah terjadi, bukan ramalan mutlak hari esok. Jangan pernah mempertaruhkan dana di luar toleransi risiko hanya karena grafik terlihat "sempurna".
2. **Memaksakan Garis Tren (*Curve Fitting*)**
   Menarik garis tren yang memotong banyak badan lilin hanya demi membenarkan harapan pribadi bahwa saham tersebut akan naik. Garis tren yang valid harus menyentuh titik-titik pembalikan alami tanpa dipaksakan.
3. **Mengabaikan Rentang Waktu yang Lebih Luas**
   Terlalu fokus pada grafik 5 menit sehingga merasa saham sedang "melonjak", padahal di grafik harian saham tersebut sedang berada di dasar tren turun yang sangat curam.
4. **Membeli Saham Turun Karena Dianggap "Murah"**
   Saham yang harganya turun dari Rp5.000 ke Rp2.000 bukanlah otomatis "diskon". Selama struktur trennya masih Lower Low dan Lower High, harga masih bisa turun lebih dalam ke Rp1.000 atau Rp500.`,
    keyPoints: [
      'Jangan biarkan harapan pribadi memanipulasi cara Anda membaca grafik.',
      'Gunakan grafik dengan sudut pandang yang jujur dan objektif.',
      'Selalu terapkan prinsip manajemen risiko dan batasan kerugian.'
    ],
    takeaway: 'Membaca tren dengan benar menuntut kejujuran intelektual: terima apa yang tampak di grafik, bukan apa yang Anda harapkan.'
  },
  {
    id: 'rangkuman-materi-2',
    title: '10. Rangkuman & Pedoman Analisis Tren',
    summary: 'Ringkasan komprehensif seluruh prinsip membaca tren untuk dijadikan panduan belajar mandiri.',
    content: `Anda kini telah memahami anatomi tren harga saham:
- **Tren Naik (*Uptrend*)**: Higher High (HH) + Higher Low (HL)
- **Tren Turun (*Downtrend*)**: Lower High (LH) + Lower Low (LL)
- **Tren Mendatar (*Sideways*)**: Puncak dan lembah bergerak di rentang batas yang relatif serupa (*Support & Resistance*)
- **Prinsip Utama**: Tren adalah gambaran probabilitas saat ini pada kerangka waktu tertentu, bukan jaminan arah di masa mendatang.

Sekarang, Anda siap menguji kemampuan mata dan pemahaman Anda melalui fitur **Latihan Interaktif Mengenali Tren** di bawah ini!`,
    keyPoints: [
      'Kombinasi puncak dan lembah adalah kunci utama membaca arah pasar.',
      'Selalu tanyakan pada diri sendiri: Apa kerangka waktu saya? Apa struktur puncak dan lembahnya?',
      'Latihan berulang kali adalah cara terbaik membiasakan mata mengenali pola secara alami.'
    ],
    takeaway: 'Praktik langsung adalah jembatan yang mengubah teori membaca tren menjadi pemahaman yang melekat.'
  }
];

export const TREND_EXERCISES: TrendExercise[] = [
  {
    id: 'sim-1',
    title: 'Latihan 1: Mengamati Pergerakan Saham Bank Swasta',
    description: 'Perhatikan pergerakan harga saham selama 18 periode perdagangan. Amati posisi titik-titik puncak dan lembah yang terbentuk.',
    chartType: 'uptrend',
    points: [
      { x: 1, y: 100, label: 'L1', type: 'trough' },
      { x: 3, y: 120, label: 'H1', type: 'peak' },
      { x: 5, y: 110, label: 'HL1', type: 'trough' },
      { x: 8, y: 140, label: 'HH1', type: 'peak' },
      { x: 11, y: 130, label: 'HL2', type: 'trough' },
      { x: 14, y: 165, label: 'HH2', type: 'peak' },
      { x: 16, y: 155, label: 'HL3', type: 'trough' },
      { x: 18, y: 185, label: 'HH3', type: 'peak' }
    ],
    explanation: 'Grafik ini menunjukkan TREN NAIK (Uptrend). Perhatikan bahwa setiap puncak baru (HH1 di 140, HH2 di 165, HH3 di 185) selalu lebih tinggi dari puncak sebelumnya. Demikian pula setiap lembah koreksi (HL1 di 110, HL2 di 130, HL3 di 155) selalu memantul di level yang lebih tinggi dari lembah sebelumnya.',
    criteria: [
      'Puncak selalu meninggi (Higher High)',
      'Lembah koreksi selalu meninggi (Higher Low)',
      'Tekanan beli lebih mendominasi daripada tekanan jual'
    ]
  },
  {
    id: 'sim-2',
    title: 'Latihan 2: Siklus Tekanan Jual Saham Komoditas',
    description: 'Perhatikan pergerakan harga saham ketika komoditas global mengalami kelebihan pasokan selama 18 periode.',
    chartType: 'downtrend',
    points: [
      { x: 1, y: 200, label: 'H1', type: 'peak' },
      { x: 4, y: 170, label: 'L1', type: 'trough' },
      { x: 7, y: 185, label: 'LH1', type: 'peak' },
      { x: 10, y: 150, label: 'LL1', type: 'trough' },
      { x: 13, y: 160, label: 'LH2', type: 'peak' },
      { x: 15, y: 130, label: 'LL2', type: 'trough' },
      { x: 17, y: 140, label: 'LH3', type: 'peak' },
      { x: 18, y: 115, label: 'LL3', type: 'trough' }
    ],
    explanation: 'Grafik ini menunjukkan TREN TURUN (Downtrend). Setiap kali harga mencoba memantul, pantulan tersebut tertahan di level yang lebih rendah dari puncak sebelumnya (LH1 di 185, LH2 di 160, LH3 di 140). Setelah itu, tekanan jual terus menekan harga hingga mencetak level terendah baru (LL1 di 150, LL2 di 130, LL3 di 115).',
    criteria: [
      'Puncak pantulan selalu lebih rendah (Lower High)',
      'Lembah baru selalu lebih rendah (Lower Low)',
      'Penjual terus mendominasi pasar di setiap kesempatan kenaikan kecil'
    ]
  },
  {
    id: 'sim-3',
    title: 'Latihan 3: Fase Menunggu Menjelang Laporan Keuangan',
    description: 'Amati pergerakan harga saham konsumer yang bergerak dalam kisaran terbatas tanpa mencetak level tertinggi atau terendah baru.',
    chartType: 'sideways',
    points: [
      { x: 1, y: 140, label: 'S1', type: 'neutral' },
      { x: 3, y: 165, label: 'R1', type: 'peak' },
      { x: 6, y: 138, label: 'S2', type: 'trough' },
      { x: 9, y: 168, label: 'R2', type: 'peak' },
      { x: 12, y: 142, label: 'S3', type: 'trough' },
      { x: 15, y: 164, label: 'R3', type: 'peak' },
      { x: 17, y: 140, label: 'S4', type: 'trough' },
      { x: 18, y: 162, label: 'R4', type: 'peak' }
    ],
    explanation: 'Grafik ini menunjukkan TREN MENDATAR (Sideways / Konsolidasi). Harga bergerak dalam lorong harga yang teratur antara batas atas resistance (sekitar level 164–168) dan batas bawah support (sekitar level 138–142). Tidak ada Higher High maupun Lower Low yang konsisten.',
    criteria: [
      'Harga tertahan berulang kali di area batas atas yang sama (Resistance)',
      'Harga memantul berulang kali di area batas bawah yang sama (Support)',
      'Kekuatan pembeli dan penjual berada dalam kondisi seimbang'
    ]
  },
  {
    id: 'sim-4',
    title: 'Latihan 4: Jebakan Koreksi dalam Tren Naik Panjang',
    description: 'Harga sempat mengalami penurunan cepat selama 4 hari bursa. Apakah tren jangka menengahnya sudah berubah?',
    chartType: 'uptrend',
    points: [
      { x: 1, y: 80, label: 'L0', type: 'trough' },
      { x: 4, y: 110, label: 'H1', type: 'peak' },
      { x: 7, y: 95, label: 'HL1', type: 'trough' },
      { x: 10, y: 135, label: 'H2', type: 'peak' },
      { x: 13, y: 115, label: 'HL2', type: 'trough' },
      { x: 15, y: 160, label: 'H3', type: 'peak' },
      { x: 17, y: 138, label: 'HL3', type: 'trough' },
      { x: 18, y: 155, label: 'Ongoing', type: 'neutral' }
    ],
    explanation: 'Grafik ini tetap mencerminkan TREN NAIK (Uptrend). Meskipun ada penurunan tajam dari 160 ke 138, lembah di 138 tersebut masih berada jauh di atas lembah sebelumnya (HL2 di 115). Ini adalah koreksi normal dalam struktur tren naik, bukan pembalikan menjadi tren turun.',
    criteria: [
      'Lembah terbaru (138) masih lebih tinggi daripada lembah sebelumnya (115)',
      'Struktur Higher Low masih terjaga utuh',
      'Penurunan tajam jangka pendek tidak otomatis membatalkan tren naik'
    ]
  },
  {
    id: 'sim-5',
    title: 'Latihan 5: Kelelahan Pembeli dan Awal Penurunan',
    description: 'Saham yang tadinya naik mulai gagal mencetak titik tertinggi baru dan menembus garis lembah sebelumnya.',
    chartType: 'downtrend',
    points: [
      { x: 1, y: 150, label: 'H_Old', type: 'peak' },
      { x: 4, y: 170, label: 'Top', type: 'peak' },
      { x: 7, y: 155, label: 'L_Key', type: 'trough' },
      { x: 10, y: 165, label: 'LH1', type: 'peak' },
      { x: 13, y: 145, label: 'LL1', type: 'trough' },
      { x: 15, y: 152, label: 'LH2', type: 'peak' },
      { x: 17, y: 135, label: 'LL2', type: 'trough' },
      { x: 18, y: 125, label: 'LL3', type: 'trough' }
    ],
    explanation: 'Grafik ini menunjukkan transisi menuju TREN TURUN (Downtrend). Pada periode 10, harga gagal melampaui puncak 170 dan hanya mencapai 165 (Lower High). Setelah itu harga menembus level lembah kunci 155 dan meluncur ke 145 (Lower Low). Struktur Lower High dan Lower Low telah terbentuk.',
    criteria: [
      'Gagal membuat puncak lebih tinggi (muncul Lower High di 165)',
      'Menembus dasar lembah penyangga sebelumnya (L_Key di 155)',
      'Terbentuk rangkaian Lower Low baru'
    ]
  }
];

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    term: 'Saham (Stock / Share)',
    category: 'dasar',
    shortDef: 'Bukti tanda kepemilikan modal seseorang atau badan usaha atas bagian dari suatu perseroan terbatas.',
    fullDef: 'Saham mewakili klaim atas sebagian laba dan aset perusahaan. Di pasar publik, saham diperdagangkan dalam satuan lot.',
    analogy: 'Memiliki 1 lembar sertifikat kepemilikan atas 1 dari 1.000 bagian dari sebuah toko kelontong.'
  },
  {
    term: 'Pasar Modal (Capital Market)',
    category: 'dasar',
    shortDef: 'Pasar untuk berbagai instrumen keuangan jangka panjang yang bisa diperjualbelikan.',
    fullDef: 'Sarana pertemuan antara pihak yang memiliki kelebihan dana (investor) dengan pihak yang membutuhkan dana jangka panjang (perusahaan/pemerintah).',
    analogy: 'Bursa tempat berkumpulnya pebisnis yang mencari modal ekspansi dan masyarakat yang ingin menaruh modal jangka panjang.'
  },
  {
    term: 'Bursa Efek (Stock Exchange / BEI)',
    category: 'pelaku',
    shortDef: 'Lembaga resmi yang menyelenggarakan dan menyediakan sistem serta sarana perdagangan efek.',
    fullDef: 'Di Indonesia, bursa efek resmi yang beroperasi adalah PT Bursa Efek Indonesia (BEI) atau Indonesia Stock Exchange (IDX).',
    analogy: 'Gedung pasar modern berizin yang mengatur tata tertib pedagang dan menyediakan timbangan resmi.'
  },
  {
    term: 'Otoritas Jasa Keuangan (OJK)',
    category: 'pelaku',
    shortDef: 'Lembaga negara independen yang mengatur dan mengawasi seluruh kegiatan di sektor jasa keuangan.',
    fullDef: 'OJK bertugas menjaga agar seluruh kegiatan pasar modal terselenggara secara teratur, adil, transparan, dan akuntabel guna melindungi masyarakat.',
    analogy: 'Wasit resmi pertandingan yang menetapkan aturan main dan menjatuhkan sanksi jika ada pelanggaran hukum.'
  },
  {
    term: 'Emiten (Issuer)',
    category: 'pelaku',
    shortDef: 'Perusahaan atau institusi yang menerbitkan efek (seperti saham atau obligasi) untuk memperoleh modal dari masyarakat di bursa.',
    fullDef: 'Emiten wajib memenuhi kriteria keterbukaan informasi, melaporkan kinerja keuangan secara berkala, dan menggelar RUPS.',
    analogy: 'Produsen atau pemilik bisnis yang membuka gerainya di dalam bursa efek.'
  },
  {
    term: 'Perusahaan Sekuritas (Broker / Pialang)',
    category: 'pelaku',
    shortDef: 'Perusahaan berizin OJK yang bertindak sebagai perantara pedagang efek bagi investor.',
    fullDef: 'Investor perorangan tidak bisa langsung mengirim order ke bursa efek tanpa melalui aplikasi atau layanan yang disediakan oleh perusahaan sekuritas.',
    analogy: 'Agen resmi berlisensi yang menghubungkan pesanan Anda langsung ke loket pusat perbelanjaan.'
  },
  {
    term: 'Rekening Dana Nasabah (RDN)',
    category: 'dasar',
    shortDef: 'Rekening bank khusus atas nama investor sendiri yang digunakan untuk menampung dana transaksi jual beli saham.',
    fullDef: 'Dana di RDN terpisah dari rekening operasional sekuritas, sehingga aman dan dilindungi secara hukum.',
    analogy: 'Dompet saldo khusus beridentitas pribadi untuk belanja saham.'
  },
  {
    term: 'Lot',
    category: 'dasar',
    shortDef: 'Satuan standar perdagangan saham di Bursa Efek Indonesia. 1 lot setara dengan 100 lembar saham.',
    fullDef: 'Jika harga saham ABCD adalah Rp2.000 per lembar, maka minimal pembelian 1 lot membutuhkan dana sebesar Rp200.000 (belum termasuk komisi broker).',
    analogy: 'Membeli telur per kotak kemasan isi 100 butir, bukan eceran butiran.'
  },
  {
    term: 'Dividen (Dividend)',
    category: 'dasar',
    shortDef: 'Bagian keuntungan bersih perusahaan yang dibagikan kepada para pemegang saham berdasarkan persetujuan RUPS.',
    fullDef: 'Dividen biasanya dibagikan secara tunai per lembar saham yang dimiliki pada tanggal cum date.',
    analogy: 'Bagi hasil keuntungan tahunan kedai kopi kepada para pemilik modal.'
  },
  {
    term: 'Capital Gain',
    category: 'dasar',
    shortDef: 'Keuntungan modal yang diperoleh ketika harga jual saham lebih tinggi daripada harga belinya.',
    fullDef: 'Misalnya membeli saham di harga Rp1.000 per lembar dan menjualnya di harga Rp1.400 per lembar.',
    analogy: 'Membeli tanah seharga Rp100 juta dan menjualnya beberapa tahun kemudian seharga Rp140 juta.'
  },
  {
    term: 'Capital Loss',
    category: 'dasar',
    shortDef: 'Kerugian modal yang dialami ketika harga jual saham lebih rendah daripada harga belinya.',
    fullDef: 'Terjadi akibat penurunan harga pasar saat posisi saham ditutup atau direalisasikan.',
    analogy: 'Menjual barang bekas di bawah harga beli awal.'
  },
  {
    term: 'Buku Pesanan (Order Book)',
    category: 'dasar',
    shortDef: 'Daftar tampilan digital yang menunjukkan antrean harga dan volume penawaran beli (Bid) serta jual (Ask / Offer).',
    fullDef: 'Sistem bursa secara otomatis mempertemukan harga penawaran beli tertinggi dengan harga penawaran jual terendah.',
    analogy: 'Papan antrean lelang elektronik yang transparan.'
  },
  {
    term: 'Bid (Penawaran Beli)',
    category: 'dasar',
    shortDef: 'Harga yang bersedia dibayarkan oleh calon pembeli untuk suatu saham.',
    fullDef: 'Diurutkan dari harga penawaran tertinggi di baris paling atas.',
    analogy: 'Calon pembeli yang menawar harga di loket pembelian.'
  },
  {
    term: 'Ask / Offer (Penawaran Jual)',
    category: 'dasar',
    shortDef: 'Harga yang diminta oleh pemilik saham yang bersedia menjual sahamnya.',
    fullDef: 'Diurutkan dari harga penawaran terendah di baris paling atas.',
    analogy: 'Pedagang yang memasang label harga dagangannya.'
  },
  {
    term: 'Settlement T+2',
    category: 'dasar',
    shortDef: 'Jadwal penyelesaian transaksi resmi dua hari bursa setelah tanggal transaksi perdagangan berlangsung.',
    fullDef: 'Transaksi hari Senin diselesaikan secara administrasi dan pemindahan efek resmi pada hari Rabu.',
    analogy: 'Barang dibayar dan dipesan hari ini, surat kepemilikan resmi diterbitkan lusa.'
  },
  {
    term: 'Tren (Trend)',
    category: 'tren',
    shortDef: 'Kecenderungan arah umum pergerakan harga saham dalam periode waktu tertentu.',
    fullDef: 'Pasar tidak bergerak garis lurus, melainkan zig-zag. Tren merupakan arah umum dari rangkaian zig-zag tersebut.',
    analogy: 'Arah aliran sungai besar di tengah riak-riak air kecil.'
  },
  {
    term: 'Tren Naik (Uptrend)',
    category: 'tren',
    shortDef: 'Kondisi pergerakan harga ketika rangkaian puncak dan lembah secara konsisten bergerak semakin tinggi.',
    fullDef: 'Didefinisikan secara struktural oleh kemunculan Higher High (HH) dan Higher Low (HL).',
    analogy: 'Menaiki tangga: setiap anak tangga yang diinjak lebih tinggi dari sebelumnya.'
  },
  {
    term: 'Tren Turun (Downtrend)',
    category: 'tren',
    shortDef: 'Kondisi pergerakan harga ketika rangkaian puncak dan lembah secara konsisten bergerak semakin rendah.',
    fullDef: 'Didefinisikan secara struktural oleh kemunculan Lower High (LH) dan Lower Low (LL).',
    analogy: 'Menuruni tangga: setiap undakan berikutnya selalu lebih rendah.'
  },
  {
    term: 'Tren Mendatar (Sideways / Konsolidasi)',
    category: 'tren',
    shortDef: 'Kondisi pergerakan harga ketika fluktuasi bergerak dalam rentang batas horizontal tanpa arah dominan.',
    fullDef: 'Mencerminkan keseimbangan sementara antara penawaran dan permintaan.',
    analogy: 'Bola yang dipantulkan bolak-balik antara lantai dan langit-langit kamar.'
  },
  {
    term: 'Puncak (Peak / Swing High)',
    category: 'tren',
    shortDef: 'Titik harga tertinggi sementara yang dicapai sebelum harga berbalik turun.',
    fullDef: 'Merupakan titik belok lokal tempat tenaga pembeli mulai terhenti dan tekanan jual mengambil alih.',
    analogy: 'Puncak bukit sebelum jalan mulai menurun.'
  },
  {
    term: 'Lembah (Trough / Swing Low)',
    category: 'tren',
    shortDef: 'Titik harga terendah sementara yang dicapai sebelum harga berbalik naik.',
    fullDef: 'Merupakan titik belok lokal tempat tekanan jual mereda dan pembeli baru mulai masuk.',
    analogy: 'Dasar lembah sebelum jalan kembali menanjak.'
  },
  {
    term: 'Higher High (HH)',
    category: 'tren',
    shortDef: 'Puncak harga baru yang terbentuk pada level yang **lebih tinggi** daripada puncak sebelumnya.',
    fullDef: 'Karakteristik utama pembentuk tren naik (*uptrend*).',
    analogy: 'Lompatan baru atlet yang melampaui lompatan sebelumnya.'
  },
  {
    term: 'Higher Low (HL)',
    category: 'tren',
    shortDef: 'Lembah harga baru yang terbentuk pada level yang **lebih tinggi** daripada lembah sebelumnya.',
    fullDef: 'Menandakan pembeli bersedia menampung koreksi di harga yang lebih mahal dari sebelumnya.',
    analogy: 'Lantai pijakan berikutnya yang posisinya lebih tinggi dari lantai pijakan awal.'
  },
  {
    term: 'Lower High (LH)',
    category: 'tren',
    shortDef: 'Puncak pantulan harga baru yang terbentuk pada level yang **lebih rendah** daripada puncak sebelumnya.',
    fullDef: 'Karakteristik utama pembentuk tren turun (*downtrend*); pembeli kehabisan daya dorong.',
    analogy: 'Pantulan bola tenis yang ketinggiannya semakin lama semakin rendah.'
  },
  {
    term: 'Lower Low (LL)',
    category: 'tren',
    shortDef: 'Lembah harga baru yang terbentuk pada level yang **lebih rendah** daripada lembah sebelumnya.',
    fullDef: 'Konfirmasi kelanjutan tren turun (*downtrend*); tekanan jual menembus dasar sebelumnya.',
    analogy: 'Dasar jurang baru yang lebih dalam dari jurang sebelumnya.'
  },
  {
    term: 'Support (Area Dukungan)',
    category: 'tren',
    shortDef: 'Tingkat harga di mana minat beli diperkirakan cukup kuat untuk menahan penurunan harga lebih lanjut.',
    fullDef: 'Area psikologis tempat pembeli cenderung merasa harga sudah cukup menarik untuk dibeli.',
    analogy: 'Lantai rumah yang menahan jatuhnya barang agar tidak tembus ke bawah.'
  },
  {
    term: 'Resistance (Area Hambatan)',
    category: 'tren',
    shortDef: 'Tingkat harga di mana minat jual diperkirakan cukup kuat untuk menahan kenaikan harga lebih lanjut.',
    fullDef: 'Area psikologis tempat banyak investor yang ingin mengunci keuntungan atau menjual sahamnya.',
    analogy: 'Langit-langit ruangan yang menahan bola agar tidak melambung lebih tinggi.'
  },
  {
    term: 'Timeframe (Kerangka Waktu)',
    category: 'tren',
    shortDef: 'Periode waktu yang diwakili oleh satu satuan data pada grafik harga (misalnya harian, mingguan, atau bulanan).',
    fullDef: 'Satu candlestick pada kerangka waktu harian mewakili 1 hari perdagangan; pada kerangka waktu mingguan mewakili 1 minggu.',
    analogy: 'Tingkat pembesaran (zoom) peta navigasi: peta satu kelurahan vs peta satu provinsi.'
  }
];
