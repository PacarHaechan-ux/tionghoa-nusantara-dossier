export type CrosswordDirection = 'across' | 'down';

export interface CrosswordWord {
  id: string;
  number: number;
  direction: CrosswordDirection;
  row: number;
  col: number;
  answer: string;
  clue: string;
  wittyNote: string;
}

export interface CrosswordCellMeta {
  key: string;
  row: number;
  col: number;
  solution: string;
  clueNumber?: number;
  acrossWordId?: string;
  downWordId?: string;
}

export type QuizQuestionType = 'multiple-choice' | 'stamp-verdict';

export interface QuizQuestion {
  id: string;
  number: number;
  type: QuizQuestionType;
  contextTag: string;
  question: string;
  options: string[];
  correctIndex: number;
  funnyRightReaction: string;
  funnyWrongReaction: string;
  historicalFact: string;
  sourceRef: string;
}

export interface QuizRankTier {
  id: string;
  minPct: number;
  badgeLabel: string;
  rankTitle: string;
  colonialSubtitle: string;
  satiricalNote: string;
}

export const CROSSWORD_ROWS = 11;
export const CROSSWORD_COLS = 12;

export const KEYBOARD_ROWS: readonly (readonly string[])[] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

export const crosswordWordsData: CrosswordWord[] = [
  {
    id: '1-across',
    number: 1,
    direction: 'across',
    row: 0,
    col: 4,
    answer: 'KEPENG',
    clue: 'Koin tembaga berlubang persegi asal Tiongkok yang menjadi alat tukar resmi pasar tradisional dari Jawa, Banten, hingga Bali sejak era Sriwijaya–Majapahit.',
    wittyNote: 'Cring! Ratusan keping picis tembaga berlubang langsung diikat tali benang di sabuk saudagar pelabuhan.',
  },
  {
    id: '2-down',
    number: 2,
    direction: 'down',
    row: 0,
    col: 6,
    answer: 'PECINAN',
    clue: 'Kawasan permukiman khusus masyarakat Tionghoa di kota pelabuhan Nusantara yang pada masa kolonial dikontrol ketat melalui aturan Wijkenstelsel.',
    wittyNote: 'Tepat! Dari sebelah barat Sungai Cibanten hingga Glodok Batavia, kawasan ini menjadi denyut nadi niaga kota.',
  },
  {
    id: '3-down',
    number: 3,
    direction: 'down',
    row: 2,
    col: 2,
    answer: 'BENTENG',
    clue: 'Sebutan khas komunitas Tionghoa peranakan di Tangerang yang telah berasimilasi ratusan tahun hingga melahirkan kesenian Gambang Kromong dan Cokek.',
    wittyNote: 'Mantap! Harmoni gesekan sukong, tehyan, dan kongahyan langsung menggema dari tepian Sungai Cisadane.',
  },
  {
    id: '4-across',
    number: 4,
    direction: 'across',
    row: 2,
    col: 4,
    answer: 'PACHT',
    clue: 'Sistem lelang hak sewa monopoli pajak kolonial (termasuk Opiumpacht candu) yang menyumbang sekitar 18% dari total pendapatan APBN Hindia Belanda.',
    wittyNote: 'Jitu! Di balik lelang konsesi candu dan rumah gadai ini, kas pemerintah kolonial meraup ratusan juta gulden.',
  },
  {
    id: '5-down',
    number: 5,
    direction: 'down',
    row: 2,
    col: 8,
    answer: 'THHK',
    clue: 'Singkatan organisasi pendidikan Tionghoa modern pertama (Tiong Hoa Hwee Koan) yang didirikan di Batavia pada 17 Maret 1900 oleh Phoa Keng Hek dkk.',
    wittyNote: 'Luar biasa! Gerakan sekolah modern yang membuat pemerintah Belanda panik lalu buru-buru mendirikan HCS pada 1908.',
  },
  {
    id: '6-across',
    number: 6,
    direction: 'across',
    row: 5,
    col: 0,
    answer: 'BATAVIA',
    clue: 'Kota markas besar VOC tempat Kapitein Souw Beng Kong diangkat pada 1619 sekaligus lokasi tragedi Geger Pecinan Oktober 1740.',
    wittyNote: 'Benar! Kota kanal yang dibangun di atas keringat buruh, batu bata, dan pajak kepala 1,5 real masyarakat Tionghoa.',
  },
  {
    id: '7-across',
    number: 7,
    direction: 'across',
    row: 5,
    col: 8,
    answer: 'KULI',
    clue: 'Pekerja kontrak imigran (sinkeh) di perkebunan tembakau Deli dan tambang timah yang dijerat sanksi pidana Poenale Sanctie dalam Koelie Ordonnantie 1880.',
    wittyNote: 'Tajam! Membantah tesis usang bahwa seluruh masyarakat Tionghoa di masa kolonial hidup sebagai pedagang kaya.',
  },
  {
    id: '8-down',
    number: 8,
    direction: 'down',
    row: 6,
    col: 7,
    answer: 'SINPO',
    clue: 'Surat kabar Melayu-Tionghoa legendaris (berdiri 1910) yang pertama kali memuat teks lagu "Indonesia Raya" karya W.R. Supratman pada November 1928.',
    wittyNote: 'Sah! Mesin cetak di Batavia langsung mengabarkan semangat antikolonial dan istilah "Indonesia" ke seluruh Hindia.',
  },
  {
    id: '9-across',
    number: 9,
    direction: 'across',
    row: 7,
    col: 0,
    answer: 'BANTEN',
    clue: 'Kesultanan maritim tempat Syahbandar Kiyai Ngabehi Cakradana mengabdi kepada Sultan Ageng Tirtayasa dan berdirinya Masjid Pacinan Tinggi.',
    wittyNote: 'Tepat sasaran! Bukti sejarah harmonisnya akulturasi Tionghoa-Islam dan kosmopolitanisme pelabuhan Karangantu.',
  },
  {
    id: '10-across',
    number: 10,
    direction: 'across',
    row: 8,
    col: 5,
    answer: 'KONGSI',
    clue: 'Federasi otonom penambang timah dan emas Tionghoa (seperti Lanfang, Thaikong, dan Samtiaokioe di Kalimantan Barat) yang berperang melawan Belanda 1822–1885.',
    wittyNote: 'Sempurna! Republik komunal penambang emas Monterado dan Mandor yang gigih mempertahankan otonominya selama puluhan tahun.',
  },
];

export function buildCrosswordGridMeta(): (CrosswordCellMeta | null)[][] {
  const grid: (CrosswordCellMeta | null)[][] = Array.from({ length: CROSSWORD_ROWS }, () =>
    Array.from({ length: CROSSWORD_COLS }, () => null)
  );

  for (const word of crosswordWordsData) {
    const dr = word.direction === 'down' ? 1 : 0;
    const dc = word.direction === 'across' ? 1 : 0;

    for (let i = 0; i < word.answer.length; i++) {
      const r = word.row + dr * i;
      const c = word.col + dc * i;
      const ch = word.answer[i];
      const existing = grid[r][c];

      if (!existing) {
        grid[r][c] = {
          key: `${r}-${c}`,
          row: r,
          col: c,
          solution: ch,
          clueNumber: i === 0 ? word.number : undefined,
          acrossWordId: word.direction === 'across' ? word.id : undefined,
          downWordId: word.direction === 'down' ? word.id : undefined,
        };
      } else {
        if (i === 0 && existing.clueNumber === undefined) {
          existing.clueNumber = word.number;
        }
        if (word.direction === 'across') {
          existing.acrossWordId = word.id;
        } else {
          existing.downWordId = word.id;
        }
      }
    }
  }

  return grid;
}

export const quizQuestionsData: QuizQuestion[] = [
  {
    id: 'quiz-1',
    number: 1,
    type: 'stamp-verdict',
    contextTag: 'Uji Klaim Sosial-Ekonomi Kolonial',
    question:
      '"Seluruh masyarakat Tionghoa pada masa kolonial Hindia Belanda merupakan kelas pedagang kaya yang hidup makmur di atas penderitaan pribumi."',
    options: ['Mitos / Stereotip Kolonial', 'Fakta Historis Arsip'],
    correctIndex: 0,
    funnyRightReaction:
      'Tepat sekali! Ratusan ribu kuli kontrak (sinkeh) di perkebunan tembakau Deli serta tambang timah Bangka-Belitung justru hidup terjebak utang dan cambuk Poenale Sanctie!',
    funnyWrongReaction:
      'Kena jebakan stereotip kolonial! Faktanya, kelas kaya hanya segelintir elit pachter/opsir, sedangkan ratusan ribu buruh sinkeh di Deli dan Bangka-Belitung mengalami eksploitasi berat.',
    historicalFact:
      'Masyarakat Tionghoa di Hindia Belanda sangat berlapis: di luar elit opsir dan pemegang pacht di Jawa, ratusan ribu imigran sinkeh bekerja sebagai kuli kontrak di bawah Koelie Ordonnantie 1880.',
    sourceRef: 'Heidhues (1992); Breman (1989); Bab 2.2.2 & Bab 2.3',
  },
  {
    id: 'quiz-2',
    number: 2,
    type: 'multiple-choice',
    contextTag: 'Monetisasi Nusantara Pra-Abad ke-19',
    question:
      'Apa kontribusi moneter paling revolusioner dari jaringan niaga Tionghoa terhadap perekonomian pasar tradisional Nusantara sejak era Sriwijaya dan Majapahit?',
    options: [
      'Peredaran koin kepeng (picis) tembaga berlubang persegi yang menggeser sistem barter menuju ekonomi uang pecahan kecil',
      'Pencetakan uang kertas gulden oleh Bank van Courant di pelabuhan Tuban pada abad ke-14',
      'Kewajiban transaksi menggunakan batangan emas murni untuk membeli sayur di pasar desa',
      'Penghapusan seluruh pajak pelabuhan di sepanjang Selat Malaka',
    ],
    correctIndex: 0,
    funnyRightReaction:
      'Jitu! Berkat koin kepeng tembaga yang bisa diikat per ratusan keping, transaksi eceran di pasar Jawa, Banten, hingga Bali menjadi jauh lebih cair!',
    funnyWrongReaction:
      'Kurang tepat! Jawabannya adalah peredaran koin kepeng (picis) tembaga asal Tiongkok yang menjadi uang pecahan kecil resmi di pasar-pasar Nusantara.',
    historicalFact:
      'Koin kepeng/picis tembaga Tiongkok diadopsi secara luas oleh kerajaan-kerajaan Nusantara (termasuk Majapahit dan Banten) untuk transaksi pasar harian maupun pembayaran pajak.',
    sourceRef: 'Reid (1992); Lombard (1996); Bab 2.1.1',
  },
  {
    id: 'quiz-3',
    number: 3,
    type: 'multiple-choice',
    contextTag: 'Kosmopolitanisme Kesultanan Banten',
    question:
      'Siapakah tokoh Tionghoa Muslim kepercayaan Sultan Ageng Tirtayasa di Kesultanan Banten yang diangkat menjadi Syahbandar pelabuhan sekaligus diplomat ke Inggris dan Denmark?',
    options: [
      'Kiyai Ngabehi Cakradana (Tan Tse Koan)',
      'Kapitein Souw Beng Kong',
      'Raden Mas Tirto Adhi Soerjo',
      'Phoa Keng Hek',
    ],
    correctIndex: 0,
    funnyRightReaction:
      '100 poin! Kiyai Ngabehi Cakradana adalah bukti nyata betapa terbukanya Kesultanan Banten terhadap kecakapan maritim dan akulturasi Tionghoa-Islam!',
    funnyWrongReaction:
      'Bukan tokoh itu! Syahbandar Kesultanan Banten pada masa Sultan Ageng Tirtayasa adalah Kiyai Ngabehi Cakradana (Tan Tse Koan).',
    historicalFact:
      'Di Kesultanan Banten pra-kolonial, masyarakat Tionghoa tidak disekat secara rasial kaku, melainkan dipercaya menjabat Syahbandar (Kiyai Ngabehi Cakradana) dan mewariskan situs Masjid Pacinan Tinggi.',
    sourceRef: 'Guillot, Ambary, & Dumarcay (1990); Fauziah (2012); Bab 2.1.3 & Bab 2.3',
  },
  {
    id: 'quiz-4',
    number: 4,
    type: 'stamp-verdict',
    contextTag: 'Audit Hukum Segregasi Kolonial',
    question:
      '"Melalui Wijkenstelsel dan Passenstelsel, warga Tionghoa wajib tinggal di kawasan Pecinan dan harus mengantongi surat jalan (pas) berbayar setiap kali hendak bepergian ke luar kota."',
    options: ['Mitos / Stereotip Kolonial', 'Fakta Historis Arsip'],
    correctIndex: 1,
    funnyRightReaction:
      'Tajam! Pasca-Geger Pecinan 1740 dan dipertegas dalam Regeeringsreglement 1854, mobilitas warga Tionghoa dikunci rapat lewat Wijkenstelsel dan Passenstelsel!',
    funnyWrongReaction:
      'Itu fakta historis! Pemerintah kolonial memberlakukan Wijkenstelsel (wajib tinggal di Pecinan) dan Passenstelsel (wajib surat jalan) untuk mencegah aliansi Tionghoa dengan rakyat pribumi.',
    historicalFact:
      'Regulasi Wijkenstelsel dan Passenstelsel membatasi ruang hidup dan mobilitas warga Vreemde Oosterlingen (Timur Asing) hingga akhirnya dihapus secara bertahap antara 1914–1919.',
    sourceRef: 'Onghokham (2008); Suryadinata (2002); Bab 2.2.3 & Bab 2.3',
  },
  {
    id: 'quiz-5',
    number: 5,
    type: 'multiple-choice',
    contextTag: 'Mesin Fiskal Abad ke-19',
    question:
      'Sistem sewa monopoli pajak apa yang dilelang pemerintah kolonial kepada saudagar Tionghoa dan menyumbang sekitar 18% dari total pendapatan negara Hindia Belanda pada abad ke-19?',
    options: [
      'Pachtstelsel (khususnya Opiumpacht / Pacht Candu, rumah gadai, dan pasar)',
      'Preangerstelsel (setoran wajib kopi pegunungan)',
      'Landrentestelsel (pajak tanah langsung Raffles)',
      'Contingentenstelsel (upeti rempah Maluku)',
    ],
    correctIndex: 0,
    funnyRightReaction:
      'Analisis sejarawan sejati! Pemerintah kolonial menikmati ~18% APBN dari Opiumpacht sembari menimpakan citra buruk pemungut pajak kepada para perantara di lapangan!',
    funnyWrongReaction:
      'Keliru! Sistem tersebut adalah Pachtstelsel (terutama Opiumpacht / pacht candu) yang dianalisis secara mendalam oleh James R. Rush (1990) dan F.W. Diehl (1993).',
    historicalFact:
      'Melalui Pachtstelsel, negara kolonial melelang hak monopoli penjualan candu (Opiumpacht), rumah gadai, rumah potong hewan, dan pasar kepada sindikat pemodal tertinggi.',
    sourceRef: 'Rush (1990); Diehl (1993); Bab 2.2.1',
  },
  {
    id: 'quiz-6',
    number: 6,
    type: 'multiple-choice',
    contextTag: 'Tragedi & Aliansi Bersenjata 1740–1743',
    question:
      'Peristiwa pembantaian lebih dari 10.000 warga Tionghoa di Batavia pada Oktober 1740 di bawah Gubernur Jenderal Adriaan Valckenier memicu perlawanan besar bersama prajurit Jawa Mataram yang dikenal sebagai...',
    options: [
      'Geger Pecinan (Perang Sepanjang 1740–1743)',
      'Perang Kongsi Lanfang (1884–1885)',
      'Perang Padri Sumatera Barat',
      'Pemberontakan Petani Banten 1888',
    ],
    correctIndex: 0,
    funnyRightReaction:
      'Betul sekali! Pasukan Tionghoa pimpinan Khe Pandjang (Oey Panko) dan Kapiten Sepanjang bersatu dengan pasukan Jawa di bawah Sunan Kuning mengguncang benteng-benteng VOC!',
    funnyWrongReaction:
      'Kurang tepat! Tragedi Oktober 1740 tersebut memicu Geger Pecinan (Perang Sepanjang 1740–1743), aliansi militer bersejarah antara laskar Tionghoa dan prajurit Jawa Mataram.',
    historicalFact:
      'Geger Pecinan (1740–1743) menghancurkan pos-pos VOC di sepanjang pesisir utara Jawa dan membuat Belanda trauma terhadap bersatunya kekuatan Tionghoa dan pribumi.',
    sourceRef: 'Blussé (1986); Daradjadi (2013); Ricklefs (2008); Bab 2.1.2 & Bab 2.3',
  },
  {
    id: 'quiz-7',
    number: 7,
    type: 'multiple-choice',
    contextTag: 'Pers Pergerakan & Sumpah Pemuda 1928',
    question:
      'Surat kabar Melayu-Tionghoa manakah yang menjadi pelopor pemuatan teks lagu kebangsaan "Indonesia Raya" karya W.R. Supratman pada November 1928 serta mengganti kata "Hindia Belanda" dengan "Indonesia"?',
    options: [
      'Harian Sin Po (Batavia)',
      'Javasche Courant (Batavia)',
      'De Locomotief (Semarang)',
      'Soeara Parindra (Surabaya)',
    ],
    correctIndex: 0,
    funnyRightReaction:
      'Tepat sekali! W.R. Supratman sendiri merupakan jurnalis di Harian Sin Po, dan surat kabar inilah yang berani menyebarluaskan teks "Indonesia Raya" ke seluruh Nusantara!',
    funnyWrongReaction:
      'Hampir! Surat kabar pelopor tersebut adalah Harian Sin Po yang terbit di Batavia sejak 1910.',
    historicalFact:
      'Pers Melayu-Tionghoa seperti Sin Po dan Keng Po berperan krusial mempopulerkan bahasa Melayu Pasar sebagai lingua franca yang menjadi fondasi Bahasa Indonesia.',
    sourceRef: 'Adam (1995); Suryadinata (2002); Bab 2.2.3',
  },
  {
    id: 'quiz-8',
    number: 8,
    type: 'multiple-choice',
    contextTag: 'Nasionalisme Indonesia 1932',
    question:
      'Organisasi politik apa yang didirikan oleh Liem Koen Hian pada 25 September 1932 di Surabaya dengan haluan tegas mendukung kemerdekaan Indonesia dan menolak politik pro-kolonial?',
    options: [
      'Partai Tionghoa Indonesia (PTI)',
      'Chung Hwa Hui (CHH)',
      'Nederlandsche Handel-Maatschappij (NHM)',
      'Vereenigde Oostindische Compagnie (VOC)',
    ],
    correctIndex: 0,
    funnyRightReaction:
      'Sempurna! Liem Koen Hian dan PTI menegaskan bahwa tanah air peranakan Tionghoa adalah Indonesia, hingga kelak ia turut duduk sebagai anggota BPUPKI pada 1945!',
    funnyWrongReaction:
      'Keliru! Chung Hwa Hui (CHH) adalah organisasi elit yang cenderung kooperatif di Volksraad, sedangkan partai nasionalis pro-kemerdekaan Indonesia bentukan Liem Koen Hian adalah Partai Tionghoa Indonesia (PTI).',
    historicalFact:
      'Pendirian Partai Tionghoa Indonesia (PTI) pada 1932 menandai puncak integrasi politik masyarakat peranakan Tionghoa ke dalam gerakan nasionalisme Indonesia.',
    sourceRef: 'Suryadinata (1999, 2002); Bab 2.2.3 & Bab III',
  },
];

export const quizRankTiersData: QuizRankTier[] = [
  {
    id: 'tier-syahbandar',
    minPct: 85,
    badgeLabel: 'PANGKAT TERTINGGI • KELAS UTAMA',
    rankTitle: 'Syahbandar Utama Pelabuhan Karangantu & Mitra Redaksi Sin Po',
    colonialSubtitle: 'Sejarawan Kritis Dinamika Ekonomi & Sosial Nusantara',
    satiricalNote:
      'Luar biasa! Kamu mampu membedah jernih antara jaringan koin kepeng maritim, jebakan Opiumpacht kolonial, penderitaan kuli kontrak Deli, hingga nasionalisme PTI Liem Koen Hian tanpa terjebak stereotip kolonial sedikit pun!',
  },
  {
    id: 'tier-kapitein',
    minPct: 65,
    badgeLabel: 'PANGKAT MENENGAH ATAS • KELAS I',
    rankTitle: 'Panitera Arsip Kongsi Lanfang & THHK Batavia',
    colonialSubtitle: 'Pemeriksa Dokumen Niaga Pesisir & Regulasi Kolonial',
    satiricalNote:
      'Tajam dan teliti! Kamu sudah menguasai seluk-beluk Pachtstelsel, Wijkenstelsel, dan kebangkitan pendidikan THHK 1900, walau sesekali masih hampir terkecoh detail arsip kolonial. Sedikit lagi setara sejarawan profesional!',
  },
  {
    id: 'tier-jurumudi',
    minPct: 40,
    badgeLabel: 'PANGKAT LAPANGAN • KELAS II',
    rankTitle: 'Jurumudi Jung Niaga Muson Utara',
    colonialSubtitle: 'Penjaga Gudang Lada & Keramik Pelabuhan',
    satiricalNote:
      'Lumayan! Kamu sudah kenal jalur pelayaran jung dan koin kepeng, tapi masih perlu membaca ulang perbedaan antara struktur ekonomi Jawa dan Luar Jawa. Seduh teh hangat dulu lalu intip kembali Bab II!',
  },
  {
    id: 'tier-magang',
    minPct: 0,
    badgeLabel: 'PANGKAT MAGANG • KELAS PEMULA',
    rankTitle: 'Korban Stereotip Politik Devide et Impera',
    colonialSubtitle: 'Calon Juru Tulis Baru Pelabuhan Sunda Kelapa',
    satiricalNote:
      'Waduh! Kamu masih sering tertukar antara mitos kolonial dan realitas sejarah masyarakat Tionghoa di Nusantara. Untung ini cuma kuis sejarah—yuk baca kembali bab-bab kajian di atas lalu coba lagi!',
  },
];
