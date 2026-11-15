export interface HistoricalImage {
  src: string;
  alt: string;
  caption: string;
  archiveSource: string;
  thumbSrc?: string;
}

export interface QuoteItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  work?: string;
}

export interface WarCrisis {
  id: string;
  name: string;
  years: string;
  impact: string;
  cost: string;
  image?: HistoricalImage;
}

export interface VocComparison {
  aspect: string;
  voc: string;
  cultuurstelsel: string;
}

export interface Commodity {
  id: string;
  name: string;
  latinName: string;
  category: string;
  regions: string[];
  description: string;
  burdenLevel: 'Kritis' | 'Sangat Berat' | 'Berat' | 'Sedang';
  fact: string;
  image?: HistoricalImage;
}

export interface HistorianInterpretation {
  id: string;
  scholar: string;
  interpretation: string;
}

export interface SecondaryCommodity {
  name: string;
  region: string;
}

export interface LawRule {
  ruleNumber: number;
  article: string;
  officialRule: string;
  fieldReality: string;
  severity: 'Tinggi' | 'Kritis' | 'Sedang';
}

export interface OuterJavaRegion {
  id: string;
  region: string;
  island: string;
  primaryCommodity: string;
  description: string;
  targetMarket: string;
}

export interface LaborStatisticItem {
  id: string;
  period: string;
  value: string;
  label: string;
  context: string;
  citation: string;
}

export interface HistoricalCritic {
  id: string;
  name: string;
  role: string;
  period: string;
  category: 'Sastrawan & Moral' | 'Parlemen & Politik' | 'Investigasi Lapangan' | 'Pakar Ekonomi & Agraria' | 'Perintis Awal';
  keyContribution: string;
  workOrCitation: string;
  impactNote: string;
  image?: HistoricalImage;
}

export interface TimelineEvent {
  id: string;
  year: number | string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string[];
  impactPoints: string[];
  historicalFigures: string[];
  image?: HistoricalImage;
}

export interface FamineCase {
  region: string;
  years: string;
  cause: string;
  victimCount: string;
  description: string;
}

export interface BibliographyItem {
  id: string;
  authors: string;
  year: string;
  title: string;
  publisher: string;
  type: 'Buku' | 'Jurnal' | 'Arsip Kolonial';
  doiUrl?: string;
  fullCitation?: string;
}

export interface VanDenBoschControversyPoint {
  id: string;
  title: string;
  badge: string;
  description: string;
  historicalDetail: string;
}

export interface EverydayFarmerLife {
  title: string;
  subtitle: string;
  aspects: {
    title: string;
    description: string;
    tag: string;
  }[];
  quote: {
    text: string;
    source: string;
  };
}

export interface CommodityFinancialItem {
  commodity: string;
  latinName?: string;
  profit1840_1849: string;
  status1850_1860: string;
  totalSurplusShare: string;
  keyDetails: string[];
}

export interface EcologicalZoneItem {
  type: string;
  cropCategory: string;
  crops: string[];
  landCharacteristics: string;
  ecologicalRationale: string;
  regions: string[];
}

export interface BatigSlotAllocationItem {
  id: string;
  title: string;
  amountOrScale: string;
  destination: string;
  description: string;
  historicalSignificance: string;
}

export interface MacroPopulationStat {
  year: string;
  totalPopulationPct: string;
  nonCoffeePct: string;
  landAllocationPct: string;
  highestResidencies: string;
  landAreaNote: string;
}

export interface CropMacroProductionRow {
  year: string;
  households: string;
  production: string;
  totalPlantloon: string;
  plantloonPerUnitOrHousehold: string;
  cultuurprocenten: string;
  extraMeta?: string;
}

export interface ColonialGlossaryTerm {
  term: string;
  definition: string;
  modernEquivalent: string;
  contextNote: string;
}

export interface BremanCritiquePoint {
  id: string;
  title: string;
  mythVsFact: {
    officialClaim: string;
    groundReality: string;
  };
  evidence: string;
  historianCitation: string;
}

export interface ResidencyComparisonItem {
  residency: string;
  islandArea: string;
  dominantCrops: string;
  populationInvolvement: string;
  sawahConfiscated: string;
  landrentSystem: string;
  plantloonPerFamily: string;
  cultuurprocenten: string;
  farmerWelfareStatus: 'Surplus Uang' | 'Nombok Pajak' | 'Feodalisme & Kemiskinan';
  keyMechanism: string;
  historiographicalRelevance: string;
}

export interface PeasantResistancePoint {
  id: string;
  category: 'Aksi Terbuka' | 'Perlawanan Bersenjata' | 'Sabotase Fisik' | 'Pelarian Massal' | 'Penyelundupan' | 'Pelumpuhan dari Dalam';
  title: string;
  locationOrYear: string;
  description: string;
  historicalImpact: string;
}

export interface ParliamentaryDebateItem {
  id: string;
  periodOrEvent: string;
  title: string;
  factions: string;
  coreDebate: string;
  outcomeAndImpact: string;
}

export interface HistoriographyLensItem {
  historian: string;
  schoolName: string;
  framework: string;
  primaryPerspective: string;
  primarySources: string;
  economicAssessment: string;
  collapseExplanation: string;
  keyWork: string;
}

export interface BupatiRoleItem {
  id: string;
  roleNumber: number;
  title: string;
  badge: string;
  summary: string;
  details: string[];
  historicalSource: string;
}

export interface VanReesReportSection {
  id: string;
  sectionNumber: number;
  title: string;
  badge: string;
  findings: string[];
  significance: string;
}

export interface PrianganMonetizationPhase {
  id: string;
  phase: string;
  periodLabel: string;
  title: string;
  characteristics: string[];
  monetizationLevel: 'Sangat Rendah' | 'Rendah' | 'Terbatas' | 'Berkembang Pesat';
  keyFact: string;
}

export interface PreangerBlueprintElement {
  id: string;
  elementNumber: number;
  title: string;
  preangerstelselOrigin: string;
  cultuurstelselAdoption: string;
  significance: string;
}

export interface BatigSlotUsageItem {
  id: string;
  category: string;
  period: string;
  amountGulden: string;
  beneficiary: string;
  description: string;
  javaContrast: string;
}

export interface VocExpansionMechanism {
  id: string;
  mechanismNumber: number;
  title: string;
  badge: string;
  description: string;
  longTermImpact: string;
}

export interface SpatialMarker {
  id: string;
  name: string;
  category: 'commodity' | 'famine' | 'resistance' | 'railway-hub';
  lat: number;
  lon: number;
  regionGroup: 'jawa' | 'luar-jawa';
  labelPos?: 'top' | 'bottom' | 'left' | 'right';
  showLabelInNusantara?: boolean;
  residency: string;
  period: string;
  badge: string;
  title: string;
  summary: string;
  historicalDetails: {
    commodities?: string[];
    statistics?: string;
    impactSummary: string;
    vanDenBoschPolicyNote: string;
    archivalReference: string;
  };
}

export interface RailwayLine {
  id: string;
  name: string;
  coordinates: [number, number][];
  startPoint: string;
  endPoint: string;
  yearBuilt: string;
  purpose: string;
}

export interface CurrencyBenchmark {
  id: string;
  label: string;
  guldenAmount: number;
  modernIdrEstimate: number;
  historicalRole: string;
  disparityDescription: string;
}

export interface UnitConversion {
  id: string;
  unitName: string;
  dutchNotation: string;
  metricEquivalent: string;
  baseMultiplier: number;
  unitCategory: 'luas' | 'bobot' | 'populasi';
  historicalUsage: string;
}

export interface DilemmaChoice {
  id: string;
  choiceLabel: string;
  actionText: string;
  consequences: {
    peasantWelfare: number;
    colonialPressure: number;
    localStability: number;
  };
  immediateFeedback: string;
}

export interface HistoricalDilemmaScenario {
  id: string;
  role: string;
  location: string;
  year: number;
  title: string;
  situation: string;
  historicalContext: string;
  choices: DilemmaChoice[];
  historicalEpilogue: {
    whatActuallyHappened: string;
    historicalOutcome: string;
    archivalSource: string;
  };
}

export interface FeaturedQuoteItem {
  id: string;
  badge: string;
  quote: string;
  author: string;
  role: string;
  work: string;
  historicalContext: string;
}

export const heroData = {
  title: "Jejak Langkah & Denyut Niaga: Masyarakat Tionghoa dalam Sejarah Nusantara",
  subtitle: "Dari Pelayaran Angin Muson, Urat Nadi Pasar Kolonial, hingga Tembok Pecinan dan Fajar Pergerakan Kebangsaan",
  period: "Jejak Lintas Zaman (Abad ke-15 – Awal Abad ke-20)",
  tagline: "Monograf Digital Sejarah Sosial Perekonomian · Program Studi Pendidikan Sejarah FKIP Universitas Sultan Ageng Tirtayasa",
  authors: [
    { name: "Dini Nurdiyah (2288250093)", role: "Kelompok 8 · Pendidikan Sejarah" },
    { name: "Gina Khairunisa Syihab (2288250054)", role: "Kelompok 8 · Pendidikan Sejarah" },
  ],
  lecturer: "Eko Ribawati, M.Pd.",
  institution: "Program Studi Pendidikan Sejarah · FKIP Universitas Sultan Ageng Tirtayasa (2026)",
  course: "Mata Kuliah Sejarah Sosial Perekonomian · Dosen Pengampu: Eko Ribawati, M.Pd.",
  overview:
    "Jauh sebelum meriam kapal-kapal Eropa menggema di perairan Nusantara, layar-layar jung dari pesisir Fujian dan Guangdong telah menyusuri hembusan angin muson menuju pelabuhan Tuban, Gresik, Malaka, Palembang, Banten, hingga Sunda Kelapa. Mereka membawa kain sutra, porselen, serta untaian koin tembaga berlubang persegi (uang picis atau kepeng) yang memicu revolusi pasar dari dermaga hingga pedalaman Majapahit, sembari melahirkan pejabat kepercayaan raja seperti Juru Cina dan Syahbandar Kiyai Ngabehi Cakradana di Banten. Namun, kedatangan VOC di Batavia (1619) dan berdirinya negara kolonial Hindia Belanda mengubah harmoni niaga itu menjadi sistem kapitalisme kolonial yang penuh paradoks: masyarakat Tionghoa dijadikan tulang punggung perantara ekonomi (tusschenpersoon), pemegang lelang pajak (pachtstelsel), penggerak pabrik gula, hingga kuli tambang dan perkebunan di Luar Jawa—sekaligus dikurung di balik tragedi Geger Pecinan 1740, sekat hukum Timur Asing (Vreemde Oosterlingen), aturan Pecinan (Wijkenstelsel), dan surat jalan (Passenstelsel).",
  highlights: [
    { label: "Layar Muson & Kepeng", value: "Abad V – XVII", note: "Jalur Sutra Maritim, Koin Kepeng & Syahbandar" },
    { label: "Tragedi & Titik Balik", value: "Oktober 1740", note: "Geger Pecinan (>10.000 Korban) & Diaspora Pesisir" },
    { label: "Kontribusi Opiumpacht", value: "~18% APBN", note: "Pendapatan Hindia Belanda 1886–1895 (Diehl, 1993)" },
    { label: "Sekat Hukum & Fajar", value: "Vreemde Oosterlingen", note: "Wijkenstelsel, Passenstelsel & Kebangkitan 1900" },
  ],
  image: {
    src: "/images/jung-maritim-kepeng.svg",
    thumbSrc: "/images/jung-maritim-kepeng.svg",
    alt: "Ilustrasi Arsip Pelayaran Jung Tiongkok di Jalur Sutra Maritim dan Koin Kepeng",
    caption: "Pelayaran kapal jung Tiongkok yang mengikuti siklus angin muson menuju bandar Nusantara (Banten, Malaka, Tuban, Gresik, Palembang) dengan membawa sutra, porselen, dan koin tembaga (kepeng/picis) yang memicu revolusi finansial pertama di Nusantara.",
    archiveSource: "Kronik Faxian (Foguo Ji, Abad V) · Prasasti Kencana (860 M) · Anthony Reid (Age of Commerce, 1450–1680)"
  },
  quickSummary: {
    badge: "Alur Kisah Utama",
    readTime: "4 Babak Sejarah",
    title: "Peta Perjalanan Sejarah: Masyarakat Tionghoa dalam Denyut Niaga & Struktur Sosial Nusantara",
    points: [
      {
        step: "01",
        label: "Pelayaran Muson & Kemitraan Awal",
        text: "Jejak Niaga Pra-Kolonial hingga Batavia 1619 — Mengikuti layar jung di Jalur Sutra Maritim, revolusi uang kepeng di Majapahit, kiprah Syahbandar Kiyai Ngabehi Cakradana di Kesultanan Banten, hingga pembangunan Batavia bersama Kapitein Souw Beng Kong.",
      },
      {
        step: "02",
        label: "Urat Nadi Pasar & Pajak Kolonial",
        text: "Perantara Desa, Sistem Pacht & Kuli Tambang — Menelusuri jaringan distribusi pedesaan Jawa, lelang sewa pajak candu (opiumpacht ~18% APBN kolonial), kongsi timah-emas di Bangka dan Kalimantan Barat, hingga jeratan Poenale Sanctie (1880) atas kuli kontrak di Deli.",
      },
      {
        step: "03",
        label: "Tembok Pecinan & Harmoni Banten",
        text: "Sekat Hukum 1854 vs Akulturasi Nusantara — Membandingkan dinginnya penggolongan hukum Timur Asing (Vreemde Oosterlingen), Wijkenstelsel, dan Passenstelsel dengan hangatnya akulturasi Masjid Pacinan Tinggi di Banten serta masyarakat Cina Benteng di Tangerang.",
      },
      {
        step: "04",
        label: "Tragedi 1740 & Fajar Kebangsaan",
        text: "Dari Geger Pecinan hingga Sumpah Pemuda — Menyaksikan aliansi laskar Tionghoa–prajurit Jawa pasca-tragedi Oktober 1740, lahirnya sekolah modern Tiong Hoa Hwee Koan (1900), lantangnya pers Sin Po menyiarkan 'Indonesia Raya' (1928), hingga Partai Tionghoa Indonesia (1932).",
      },
    ],
  },
  quickShortcuts: [
    { label: "1. Dinamika Sejarah", targetId: "latar-belakang", icon: "book" },
    { label: "2. Peran Perekonomian", targetId: "eksploitasi", icon: "leaf" },
    { label: "3. Kedudukan Sosial", targetId: "pelaksanaan", icon: "scale" },
    { label: "Garis Waktu (Abad V–1932)", targetId: "timeline-section", icon: "clock" },
    { label: "Lab Sejarah Interaktif", targetId: "interactive-lab", icon: "compass" },
    { label: "TTS & Kuis Sejarah", targetId: "permainan-sejarah", icon: "award" },
    { label: "TTS & Kuis Sejarah", targetId: "permainan-sejarah", icon: "gamepad" },
    { label: "Daftar Pustaka", targetId: "pustaka", icon: "bookmark" },
  ],
};

export const featuredHistoricalQuotes: FeaturedQuoteItem[] = [
  {
    id: "quote-coen-1619",
    badge: "Arsip VOC Batavia (1619)",
    quote: "Daer is geen volck in de wereld, die ons beter dienen dan Chineezen — Tidak ada bangsa di dunia yang dapat melayani kami lebih baik daripada orang Tionghoa.",
    author: "Jan Pieterszoon Coen",
    role: "Gubernur Jenderal VOC (Pendiri Batavia)",
    work: "Surat Resmi kepada Direksi VOC Heeren XVII (1619), dikutip dalam Blussé (1988) & Lohanda (2007)",
    historicalContext: "Ditulis ketika VOC menghadapi krisis tenaga kerja dan logistik saat membangun Batavia pada 1619, mendorong Coen menarik saudagar dan pekerja Tionghoa dari Banten (termasuk Souw Beng Kong) serta imigran dari Tiongkok Selatan.",
  },
  {
    id: "quote-reid-commerce",
    badge: "Historiografi Maritim Asia Tenggara",
    quote: "Pada kurun niaga 1450–1680 (Age of Commerce), denyut nadi perekonomian kawasan Asia Tenggara bertumpu pada pertukaran komoditas maritim internasional dan monetisasi koin tembaga kepeng, dengan komunitas Tionghoa melebur sebagai motor penggerak utamanya di kota-kota pelabuhan.",
    author: "Anthony Reid & Leonard Blussé",
    role: "Sejarawan Maritim Asia Tenggara",
    work: "Southeast Asia in the Age of Commerce 1450–1680 & Persekutuan Aneh (1988)",
    historicalContext: "Menegaskan bahwa permukiman niaga Tionghoa (Pecinan awal) di Banten, Malaka, Tuban, Gresik, dan Palembang tumbuh secara organik atas dukungan penguasa lokal jauh sebelum kebijakan segregasi kolonial.",
  },
];

export const backgroundData = {
  sectionTitle: "Bab I · Dinamika Lintas Zaman: Dari Angin Muson hingga Fajar Kebangsaan",
  sectionSubtitle: "Perjalanan panjang komunitas Tionghoa melintasi lima abad perubahan kekuasaan di Kepulauan Nusantara",
  narrative:
    "Setiap akhir tahun, ketika angin muson timur laut mulai berhembus dari Laut Tiongkok Selatan, deretan kapal jung kayu berlayar membelah ombak menuju bandar-bandar Nusantara—sebuah tradisi pelayaran yang telah terekam sejak kronik peziarah Faxian (Foguo Ji, abad ke-5 M) hingga armada Laksamana Cheng Ho pada abad ke-15. Dari geladak kapal-kapal itulah kain sutra, porselen biru-putih, perkakas besi, dan untaian koin tembaga berlubang persegi (uang picis atau kepeng) diturunkan untuk ditukar dengan cengkih dan pala Maluku, lada Sumatra dan Banten, kayu cendana Nusa Tenggara, serta sarang burung walet dan teripang. Di tangan Kerajaan Majapahit hingga Kesultanan Banten, peredaran uang kepeng melahirkan revolusi finansial pertama yang menggantikan barter murni, sementara para saudagarnya tumbuh menjadi bagian organik kota pelabuhan. Namun, ketika VOC merebut Jayakarta dan mendirikan Batavia pada 1619, disusul tegaknya negara kolonial Hindia Belanda pada abad ke-19, posisi mereka berayun drastis: dari mitra kesultanan menjadi perantara ekonomi kolonial (tusschenpersoon), melewati tragedi berdarah Oktober 1740, hingga akhirnya bangkit merajut kesadaran kebangsaan Indonesia pada awal abad ke-20.",
  crises: [
    {
      id: "maritim-pra-eropa",
      name: "Layar Jung & Angin Muson: Harmoni Niaga Pra-Kolonial",
      years: "Abad V – XVII",
      impact: "Dalam kurun niaga Asia Tenggara (Age of Commerce, 1450–1680) sebagaimana dipetakan sejarawan Anthony Reid, para pelaut dan saudagar Tionghoa menghidupkan bandar Malaka, Banten, Tuban, Gresik, Palembang, dan Makassar. Masuknya koin tembaga berlubang persegi (picis/kepeng) yang diikat per 1.000 keping membebaskan transaksi Nusantara dari kelemahan barter murni dan memicu monetisasi pasar desa hingga pelabuhan. Di lingkungan istana, Prasasti Kencana (860 M) mencatat jabatan resmi Juru Cina (yang diperkuat di bawah Rakryan Kanuruhan pada era Majapahit), sementara di Kesultanan Banten abad ke-17 saudagar Tionghoa Muslim Tantseko dipercaya menyandang gelar Kiyai Ngabehi Cakradana sebagai Syahbandar utama sekaligus arsitek benteng pesisir, tembok Istana Surosowan, dan gudang lada.",
      cost: "Monetisasi Koin Kepeng & Integrasi Syahbandar",
      image: {
        src: "/images/kyai-ngabehi-cakradana.jpg",
        alt: "Potret Kiyai Ngabehi Cakradana dan Menara Masjid Pacinan Tinggi di Kesultanan Banten",
        caption: "Kiyai Ngabehi Cakradana (Tantseko), Syahbandar utama Kesultanan Banten abad ke-17 sekaligus arsitek benteng Istana Surosowan, dengan latar Menara Masjid Pacinan Tinggi di Banten Lama.",
        archiveSource: "Fauziah (2009) · Nayati (1985) · Fauziah & Rohman (2019)"
      }
    },
    {
      id: "kemitraan-voc-1619",
      name: "Batavia 1619: Fondasi Kemitraan di Bawah Bayang-Bayang VOC",
      years: "1619 – Abad XVIII",
      impact: "Ketika Jan Pieterszoon Coen merebut Jayakarta dan mendirikan Batavia pada 1619, VOC menghadapi krisis tenaga kerja dan permusuhan sengit dari Kesultanan Banten serta Mataram. Coen menarik saudagar dan pekerja Tionghoa dari Banten serta Tiongkok Selatan, lalu menunjuk saudagar lada terkemuka Souw Beng Kong sebagai Kapitein der Chinezen pertama (yang kemudian berkembang menjadi institusi Mayor, Kapiten, dan Letnan). Para opsir ini memungut pajak kepala (hoofdgeld) 1,5 real/bulan bagi pria usia 16–60 tahun sebagai kompensasi bebas wajib militer/rodi benteng, mendata imigran jung, dan mengadili perkara perdata adat, sementara pemborong Tionghoa membangun tembok benteng, kanal, ruko, pabrik bata/kapur, serta penggilingan gula di Ommelanden.",
      cost: "Pajak Kepala 1,5 Real/Bulan & Konstruksi Batavia",
      image: {
        src: "/images/makam-souw-beng-kong.jpg",
        alt: "Situs Cagar Budaya Makam Kapitein Souw Beng Kong (1580–1644) di Mangga Dua, Jakarta",
        caption: "Situs makam Kapitein der Chinezen pertama Batavia, Souw Beng Kong (1580–1644) di kawasan Mangga Dua, Jakarta—saksi bisu fondasi kemitraan awal VOC dan komunitas Tionghoa sejak 1619.",
        archiveSource: "Cagar Budaya DKI Jakarta · Blussé (1988) · Lohanda (2007)"
      }
    },
    {
      id: "geger-pecinan-1740",
      name: "Oktober Berdarah 1740 & Bara Persekutuan Jawa–Tionghoa",
      years: "1740 – 1743",
      impact: "Anjloknya harga gula dunia di paruh pertama abad ke-18 membuat puluhan pabrik penggilingan gula di Ommelanden Batavia bangkrut dan memicu pengangguran ribuan buruh imigran (singkek). Rencana sewenang-wenang VOC untuk mendeportasi warga Tionghoa tanpa surat izin ke Sri Lanka atau Banda—disertai desas-desus bahwa mereka akan ditenggelamkan di tengah laut—menyulut perlawanan. Pada Oktober 1740, di bawah perintah Gubernur Jenderal Adriaan Valckenier, serdadu VOC membantai lebih dari 10.000 jiwa warga Tionghoa di Batavia dan memenjarakan Kapiten Nie Hoe Kong. Para penyintas di bawah pimpinan Sepanjang (Khe Panjang) dan Singseh (Tan Sin Ko, sahabat seperjuangan Raden Mas Said yang bertempur di Demak, Grobogan, Welahan, Kudus, Pati, Juwana, hingga gugur dipenggal di Lasem pada Oktober 1742) bergerak ke timur dan bersekutu dengan prajurit Mataram dalam Perang Geger Pecinan (1740–1743), sempat menduduki keraton Kartasura, serta melahirkan diaspora Pecinan di sepanjang pesisir utara Jawa.",
      cost: "> 10.000 Jiwa Tewas & Perang Jawa 1740–1743",
      image: {
        src: "/images/khe-panjang.jpg",
        alt: "Monumen Patung Sepanjang (Khe Panjang), Panglima Perang Geger Pecinan 1740–1743",
        caption: "Sepanjang (Khe Panjang / Oei Panko), pemimpin laskar Tionghoa yang selamat dari pembantaian Batavia Oktober 1740 dan menjalin aliansi militer bersama prajurit Jawa melawan VOC (1740–1743).",
        archiveSource: "Daradjadi (2013), Geger Pacinan 1740–1743: Persekutuan Tionghoa-Jawa Melawan VOC"
      }
    },
    {
      id: "kebangkitan-pergerakan-1900",
      name: "Abad ke-19 hingga Fajar Pergerakan: Dari Kontrak Paksa ke Kesadaran Bangsa",
      years: "1800 – 1932",
      impact: "Memasuki abad ke-19, pemerintah Hindia Belanda menjadikan jaringan saudagar Cabang Atas sebagai pemegang lelang pajak (pachtstelsel, dengan opiumpacht menyumbang ~18% APBN kolonial) dan penggerak logistik gula di Jawa, sembari menaklukkan federasi emas Kongsi Thaikong & Lanfang di Kalimantan Barat (1822–1885) serta mengikat ratusan ribu kuli kontrak (sinkeh) di tambang timah Bangka-Belitung dan kebun Deli dengan sanksi pidana Koelie Ordonnantie (1880). Tekanan segregasi Vreemde Oosterlingen (1854), Wijkenstelsel, dan Passenstelsel akhirnya melahirkan gelombang emansipasi modern: pendirian sekolah Tiong Hoa Hwee Koan (THHK, 17 Maret 1900) oleh Phoa Keng Hek & Lie Kim Hok, lantangnya pers Melayu-Tionghoa seperti Sin Po yang mencetak perdana lagu 'Indonesia Raya' (November 1928), hingga lahirnya Partai Tionghoa Indonesia (PTI, 1932) pimpinan Liem Koen Hian yang meneguhkan haluan Indonesierschap.",
      cost: "THHK 1900, Pers Sin Po 1928 & PTI 1932",
      image: {
        src: "/images/phoa-keng-hek.jpg",
        alt: "Potret Arsip Phoa Keng Hek, Presiden Pertama Tiong Hoa Hwee Koan (THHK 1900)",
        caption: "Phoa Keng Hek (1857–1937), Presiden pertama Tiong Hoa Hwee Koan (THHK, 1900) yang mengawali kebangkitan pendidikan modern, pers Melayu-Tionghoa, dan kesadaran politik awal abad ke-20.",
        archiveSource: "Nio Joe Lan (1940) · Williams (1960) · Suryadinata (1981, 2020)"
      }
    },
  ] as WarCrisis[],
  vanDenBoschConcept: {
    title: "Titik Balik Sejarah: Mengapa Posisi Komunitas Tionghoa Terus Berubah?",
    summary:
      "Menelusuri lima abad perjalanan masyarakat Tionghoa di kepulauan Nusantara membawa kita pada tiga pertanyaan besar yang menjadi benang merah seluruh kisah dalam monograf ini:",
    points: [
      "Dari Mitra Kesultanan ke Perantara Kolonial: Bagaimana jaringan pelayaran angin muson, revolusi uang kepeng di Majapahit, dan kehormatan jabatan Syahbandar di Kesultanan Banten bertransformasi menjadi ketergantungan ekonomi VOC di Batavia (1619) yang berujung pada tragedi berdarah Geger Pecinan 1740?",
      "Mesin Penggerak di Dua Dunia Ekonomi: Bagaimana masyarakat Tionghoa sejak abad ke-19 menghidupi urat nadi pasar desa, logistik pabrik gula, dan sewa pajak negara (pachtstelsel & opiumpacht) di Jawa, sembari memeras keringat sebagai penambang parit kongsi dan kuli kontrak (poenale sanctie) di Luar Jawa hingga melahirkan kebangkitan pendidikan THHK (1900) serta pers pergerakan?",
      "Antara Harmoni Budaya dan Sekat Hukum Kolonial: Mengapa pemerintah Hindia Belanda yang begitu bergantung pada modal dan tenaga masyarakat Tionghoa justru mengurung mereka dalam penggolongan hukum Timur Asing (Vreemde Oosterlingen), aturan Pecinan (Wijkenstelsel), dan surat jalan (Passenstelsel), serta bagaimana komunitas Peranakan, Totok, Pecinan Banten, dan Cina Benteng merajut identitasnya?",
    ],
  },
  historianInterpretations: [
    {
      id: "interp-reid",
      scholar: "Anthony Reid (Age of Commerce, 1450–1680)",
      interpretation: "Menempatkan masyarakat Tionghoa sebagai motor penggerak utama era keemasan niaga maritim Asia Tenggara yang menghubungkan pedagang Tiongkok, Arab, dan Gujarat serta melebur dalam ekosistem kota pelabuhan seperti Banten, Malaka, dan Makassar.",
    },
    {
      id: "interp-blusse",
      scholar: "Leonard Blussé (1988) & Mona Lohanda (2007)",
      interpretation: "Menguraikan 'persekutuan aneh' (strange company) antara VOC dan komunitas Tionghoa di Batavia: kompeni bergantung mutlak pada modal, tukang, industri gula Ommelanden, dan institusi Kapitein der Chinezen untuk membangun dan menghidupi kota kolonial.",
    },
    {
      id: "interp-rush-diehl",
      scholar: "James R. Rush (1990) & F. W. Diehl (1993)",
      interpretation: "Membuktikan bahwa sistem sewa pajak (pachtstelsel)—terutama opiumpacht yang menyumbang ~18% pendapatan Hindia Belanda (1886–1895)—menjadikan jaringan kongsi Cabang Atas sebagai penghubung utama ekonomi pelabuhan Eropa dengan pedesaan agraris Jawa.",
    },
    {
      id: "interp-heidhues-breman",
      scholar: "Mary Somers Heidhues (1992, 2003) & Jan Breman (1989)",
      interpretation: "Menunjukkan kontras tajam struktur kelas Tionghoa di Luar Jawa: dari federasi otonom kongsi tambang emas Kalimantan Barat dan parit timah Bangka-Belitung hingga eksploitasi brutal kuli kontrak (sinkeh) di perkebunan Deli di bawah Koelie Ordonnantie 1880 (poenale sanctie).",
    },
    {
      id: "interp-suryadinata-fauziah",
      scholar: "Leo Suryadinata (1981, 2020), Siti Fauziah (2009) & W. Nayati (1985)",
      interpretation: "Memetakan diferensiasi sosiokultural Peranakan (Baba) vs Totok (Sinkeh), pergeseran tata ruang Pecinan Banten dan akulturasi Islam di Masjid Pacinan Tinggi, serta lahirnya tiga haluan politik Tionghoa abad ke-20 (Sin Po, Chung Hwa Hui, dan Partai Tionghoa Indonesia).",
    },
  ] as HistorianInterpretation[],
  quotes: [
    {
      id: "quote-faxian",
      quote: "Catatan perjalanan peziarah Buddha Faxian dalam kronik Foguo Ji (abad ke-5 M) merupakan sumber tertulis asing tertua yang membuktikan bahwa jalur pelayaran laut antara Nusantara dan Tiongkok telah aktif dan menjadikan Jawa titik singgah rute maritim internasional.",
      author: "Kronik Faxian (Abad ke-5 M)",
      role: "Sumber Tertulis Asing Tertua Jalur Maritim",
      work: "Foguo Ji (Catatan Negeri-Negeri Buddha)",
    },
    {
      id: "quote-prasasti-kencana",
      quote: "Sejak tahun 860 M pada era Jawa Kuno, Prasasti Kencana telah mencatat keberadaan jabatan khusus pengurus pedagang asing dengan sebutan Juru Cina, yang pada masa kejayaan Majapahit diperkuat di bawah pengawasan pejabat tinggi Rakryan Kanuruhan.",
      author: "Prasasti Kencana (860 M) & Birokrasi Majapahit",
      role: "Epigrafi Administrasi Lintas Budaya Nusantara",
      work: "Prasasti Kencana (860 M) · Epigrafi Jawa Kuno & Majapahit",
    },
    {
      id: "quote-fauziah-banten",
      quote: "Peran masyarakat Tionghoa di Banten mengalami perubahan seiring perkembangan politik dan ekonomi: dari mitra perdagangan dan pejabat Syahbandar yang dipercaya Sultan pada masa Kesultanan menjadi kelompok penyangga (buffer class) yang diatur melalui penggolongan hukum kolonial.",
      author: "Siti Fauziah (2009) & Widya Nayati (1985)",
      role: "Peneliti Sejarah & Arkeologi Banten",
      work: "Al Qalam (2009) & Berkala Arkeologi (1985)",
    },
  ] as QuoteItem[],
};

export const vanDenBoschControversyData: VanDenBoschControversyPoint[] = [
  {
    id: "investigasi-kepeng",
    title: "Revolusi Finansial Pertama: Adopsi Uang Kepeng di Majapahit",
    badge: "Monetisasi Pra-Eropa",
    description: "Sebelum hadirnya koin tembaga Tiongkok (uang picis atau kepeng), transaksi barter murni di Nusantara sering gagal karena nilai tukar subjektif (misalnya ikan ditukar beras) dan sifat hasil bumi yang cepat busuk.",
    historicalDetail: "Koin tembaga berlubang persegi asal Tiongkok memiliki ukuran/bobot standar, tahan lama, dan diikat dengan tali serat tanaman per 1.000 keping. Penguasa Majapahit meresmikannya sebagai alat tukar sah, memicu tumbuhnya pasar tradisional dari pedalaman hingga pesisir."
  },
  {
    id: "investigasi-cakradana",
    title: "Juru Cina (860 M) hingga Syahbandar Kiyai Ngabehi Cakradana",
    badge: "Birokrasi Kerajaan",
    description: "Penguasa lokal Nusantara mengintegrasikan keahlian bahasa, navigasi, dan jaringan modal Tionghoa langsung ke dalam struktur pemerintahan kerajaan maritim.",
    historicalDetail: "Tercatat sebagai Juru Cina dalam Prasasti Kencana (860 M) dan di bawah Rakryan Kanuruhan pada era Majapahit. Di Kesultanan Banten abad ke-17, tokoh Tionghoa Muslim Tantseko diberi gelar Kiyai Ngabehi Cakradana, menjabat Syahbandar utama sekaligus arsitek benteng pertahanan pesisir, tembok Istana Surosowan, dan gudang lada."
  },
  {
    id: "investigasi-souw-beng-kong",
    title: "Institusi Kapitein der Chinezen & Pajak Kepala 1,5 Real",
    badge: "Batavia 1619",
    description: "Karena keterbatasan aparat Belanda dan kendala bahasa, Jan Pieterszoon Coen menerapkan pemerintahan tidak langsung (indirect rule) dengan menunjuk Souw Beng Kong sebagai Kapitein der Chinezen pertama pada 1619.",
    historicalDetail: "Jabatan ini diperluas menjadi Mayor, Kapiten, dan Letnan. Mereka bertugas memungut pajak kepala (1,5 real/bulan bagi pria Tionghoa usia 16–60 tahun sebagai kompensasi bebas wajib militer/rodi benteng), mendata imigran baru dari kapal jung, serta menyelesaikan sengketa perdata adat dan warisan."
  },
  {
    id: "investigasi-ommelanden",
    title: "Tulang Punggung Fisik Batavia & Krisis Gula Ommelanden",
    badge: "Sektor Riil & Gula",
    description: "Hampir seluruh wujud fisik kota Batavia—tembok benteng, sistem kanal, gereja, deretan ruko, hingga pabrik pembakaran batu bata, genteng, dan kapur di muara sungai—dikerjakan oleh pemborong dan tukang kayu Tionghoa.",
    historicalDetail: "Masyarakat Tionghoa juga memelopori perkebunan dan pabrik penggilingan gula di pinggiran Batavia (Ommelanden). Ketika harga gula dunia anjlok menjelang 1740, puluhan pabrik gula bangkrut dan ribuan buruh imigran (singkek) menganggur, memicu kepanikan aparat VOC."
  },
  {
    id: "investigasi-valckenier-1740",
    title: "Pembantaian Oktober 1740 & Penangkapan Kapiten Nie Hoe Kong",
    badge: "Tragedi Oktober 1740",
    description: "Rencana VOC membuang orang Tionghoa tanpa surat izin resmi ke Sri Lanka atau Kepulauan Banda memicu desas-desus bahwa mereka akan ditenggelamkan di tengah laut.",
    historicalDetail: "Di bawah perintah Gubernur Jenderal Adriaan Valckenier pada Oktober 1740, serdadu VOC membantai lebih dari 10.000 jiwa warga Tionghoa di dalam kota Batavia, merampok dan membakar habis rumah mereka, serta menangkap Kapiten Nie Hoe Kong yang sejatinya pro-kolonial."
  },
  {
    id: "investigasi-kartasura-1743",
    title: "Perang Geger Pecinan (1740–1743) & Lahirnya Pecinan Pantura",
    badge: "Aliansi Tionghoa-Jawa",
    description: "Para pejuang Tionghoa yang selamat melarikan diri ke timur dipimpin oleh Sepanjang (Khe Panjang) dan Singseh (Tan Sin Ko), lalu menjalin aliansi militer dengan bangsawan Kerajaan Mataram.",
    historicalDetail: "Pasukan gabungan Tionghoa-Jawa menyusuri pesisir utara, merebut benteng VOC, dan sempat menduduki istana Kartasura. Pasca-perang, VOC mewajibkan isolasi permukiman Pecinan di luar benteng kota, sementara diaspora Tionghoa membangun pusat ekonomi dan budaya Peranakan baru di Cirebon, Brebes, Tegal, Pekalongan, Semarang, Lasem, hingga Tuban."
  }
];

export const everydayFarmerLifeData: EverydayFarmerLife = {
  title: "Ekosistem Permukiman Niaga Pecinan Awal & Siklus Angin Muson",
  subtitle: "Bagaimana siklus alam pelayaran jung, tata ruang ruko tepi sungai, dan perlindungan raja lokal melahirkan komunitas Peranakan di pesisir Nusantara",
  aspects: [
    {
      title: "Siklus Tunggu Angin Muson (November–Maret & Mei–September)",
      tag: "Faktor Alam Maritim",
      description: "Sebelum era kapal uap, pelayaran jung Tiongkok bergantung penuh pada angin muson. Angin utara/timur laut (November–Maret) membawa jung turun ke Nusantara, sedangkan angin selatan/tenggara untuk berlayar pulang baru bertiup pada Mei–September. Masa tunggu berbulan-bulan ini mendorong pedagang memperbaiki kapal, menimbun komoditas, mendirikan gudang, hingga menetap dan berkeluarga."
    },
    {
      title: "Arsitektur Ruko Tepi Sungai & Kanal Pelabuhan",
      tag: "Tata Ruang Logistik",
      description: "Permukiman dibangun di titik temu pelayaran internasional yang tenang (Malaka, Palembang, Banten, Tuban, Gresik) tepat di tepi sungai atau kanal. Kapal kecil dari pedalaman dapat langsung merapat ke dermaga gudang sebelum dimuat ke jung besar. Secara fisik, lantai bawah berfungsi sebagai gudang logistik dan ruang transaksi, sedangkan lantai atas menjadi tempat tinggal keluarga."
    },
    {
      title: "Otonomi Penguasa Lokal & Kawasan Pecinan Banten",
      tag: "Proteksi Kesultanan",
      description: "Penguasa Majapahit hingga Kesultanan Banten mengalokasikan lahan khusus di dekat pelabuhan dengan kebebasan menjalankan adat dan ibadah karena kas kerajaan diuntungkan oleh bea cukai kapal, pajak pasar, dan pasokan porselen/sutra. Di Banten, kawasan Pecinan di sebelah barat kota utama dilengkapi bangunan bata berplester kapur dan jalan berpasir pencegah kebakaran untuk melindungi gudang lada."
    }
  ],
  quote: {
    text: "Tumbuhnya permukiman-permukiman Pecinan ini tidak akan berdiri jika tanpa izin, perlindungan, dan dukungan dari para penguasa lokal di tanah Nusantara yang memperoleh pemasukan besar dari bea cukai kapal, pajak pasar, dan upeti dagang.",
    source: "Rekonstruksi Sejarah Maritim Nusantara · Dini Nurdiyah & Gina Khairunisa Syihab (Pendidikan Sejarah FKIP UNTIRTA, 2026)"
  }
};

export const exploitationData = {
  sectionTitle: "Bab II · Peran dalam Perekonomian: Urat Nadi Pasar, Pajak, dan Keringat Kuli",
  sectionSubtitle: "Bagaimana jaringan niaga perantara, sewa pajak kolonial, dan tenaga kerja tambang menggerakkan roda ekonomi Nusantara",
  narrative:
    "Roda perekonomian kepulauan Nusantara dari masa kerajaan hingga puncak kolonialisme tidak mungkin berputar tanpa mata rantai yang menghubungkan dermaga pelabuhan internasional dengan ribuan desa di pedalaman. Di Pulau Jawa, para saudagar Peranakan dan jaringan kongsi Cabang Atas menjadi urat nadi distribusi—menggerakkan penggilingan tebu, mengedarkan tekstil serta minyak tanah ke pelosok desa, hingga memenangkan lelang pajak negara (pachtstelsel) yang menopang kas Hindia Belanda. Namun, bila kita menyeberang ke Luar Jawa, wajah ekonomi itu berubah drastis menjadi kisah peluh dan darah: di lembah-lembah timah Bangka-Belitung, sungai emas Kalimantan Barat, serta perkebunan tembakau Deli, ratusan ribu buruh imigran (sinkeh) justru memeras keringat di bawah jerat utang dan ancaman cambuk pidana Koelie Ordonnantie (1880).",
  vocComparison: [
    {
      aspect: "Posisi dalam Birokrasi & Pemungutan Pajak",
      voc: "Era Pra-Kolonial & VOC (Abad V–XVIII): Diangkat sebagai Juru Cina dan Syahbandar oleh raja lokal; pada era VOC diatur melalui institusi Kapitein der Chinezen (Souw Beng Kong, 1619) dengan kewajiban pajak kepala 1,5 real/bulan.",
      cultuurstelsel: "Era Hindia Belanda (Abad XIX–Awal Abad XX): Menguasai lelang monopoli sewa pajak negara (pachtstelsel)—mencakup bazarpacht, pandhuispacht, zoutpacht, hingga opiumpacht yang menyumbang ~18% pendapatan kolonial (Diehl, 1993).",
    },
    {
      aspect: "Peran dalam Produksi Gula & Distribusi Pedesaan",
      voc: "Mengelola perkebunan tebu dan puluhan penggilingan gula tradisional di Ommelanden Batavia serta memasok konstruksi bata, genteng, kapur, dan kayu kota Batavia.",
      cultuurstelsel: "Menjadi kontraktor pabrik gula awal Tanam Paksa (suikercontractanten), menguasai armada pedati, perahu sungai, dan pergudangan pelabuhan (Santoso, 2025), serta menyalurkan barang impor & kredit tunai ke desa (Rush, 1990).",
    },
    {
      aspect: "Struktur Tenaga Kerja di Luar Pulau Jawa",
      voc: "Didominasi pedagang maritim bebas, perajin, serta munculnya komunitas penambang awal yang membentuk federasi otonom berbasis klan (kongsi) di Kalimantan Barat dan Bangka.",
      cultuurstelsel: "Ekspansi kolonial paruh kedua abad ke-19 mendatangkan ratusan ribu buruh imigran (sinkeh) dari Fujian & Guangdong sebagai kuli timah Bangka-Belitung dan kuli perkebunan Deli di bawah Koelie Ordonnantie 1880 & poenale sanctie.",
    },
    {
      aspect: "Pendidikan, Identitas & Pergerakan Politik",
      voc: "Komunitas Peranakan awal terbentuk melalui pernikahan campur dan akulturasi pesisir (termasuk komunitas Muslim Tionghoa di Banten dan cikal bakal Cina Benteng).",
      cultuurstelsel: "Diferensiasi tajam Peranakan (Baba) vs Totok (Sinkeh) memicu lahirnya THHK (1900), HCS (1908), UU Kekawulaan WNO (1910), pers Melayu-Tionghoa, dan tiga aliran politik: Sin Po, Chung Hwa Hui (1928), serta PTI (1932).",
    },
  ] as VocComparison[],
  commodities: [
    {
      id: "kopi",
      name: "Opiumpacht (Monopoli Pajak Candu)",
      latinName: "Pachtstelsel · Ordonansi 1809 & 1847",
      category: "Sumber Fiskal Kolonial & Akumulasi Modal Cabang Atas",
      regions: ["Semarang (Keluarga Be)", "Madiun (Djie Bok Hien)", "Surabaya", "Batavia", "Pesisir & Pedalaman Jawa"],
      description: "Di antara seluruh komoditas sewa pajak (pacht), opiumpacht menjadi tulang punggung keuangan kolonial sekaligus sumber akumulasi modal terbesar bagi kongsi-kongsi Tionghoa (Cabang Atas). Diperkenalkan kembali pada 1809 dan diatur melalui ordonansi kontrak tahunan pada 1847, pemerintah menerapkan skema kuota pasokan wajib (tiban) dan tambahan (siram). Para bandar membangun jaringan subagen, pengelola rumah madat hingga ke pelosok desa, serta mata-mata untuk mengawasi penyelundupan (Rush, 1990; Diehl, 1993).",
      burdenLevel: "Kritis",
      fact: "Menurut Diehl (1993), sektor opiumpacht menyumbang sekitar 18% dari seluruh pendapatan pemerintah Hindia Belanda pada kurun 1886–1895, sekaligus memberi staf pacht hak istimewa keluar-masuk desa.",
      image: {
        src: "/images/pacht-candu-gula.svg",
        alt: "Ilustrasi Arsip Sistem Pachtstelsel dan Jaringan Distribusi Pedesaan Jawa Abad ke-19",
        caption: "Mekanisme lelang sewa pajak (Opiumpacht, Bazarpacht, Pandhuispacht) dan sirkulasi perantara distribusi pedesaan Jawa oleh kongsi Cabang Atas.",
        archiveSource: "James R. Rush (1990), Opium to Java · F.W. Diehl (1993)"
      }
    },
    {
      id: "tebu",
      name: "Suikercontractanten & Logistik Gula",
      latinName: "Cultuurstelsel (1830–1870) · Rantai Logistik",
      category: "Kontraktor Penggilingan Gula & Transportasi Pelabuhan",
      regions: ["Pantai Utara Jawa (Pantura)", "Jawa Bagian Timur", "Ommelanden Batavia", "Semarang", "Pasuruan"],
      description: "Pada dekade awal Sistem Tanam Paksa (1830–1870), para pemodal Tionghoa terlibat langsung sebagai kontraktor pemerintah (suikercontractanten) yang menerima pinjaman modal negara untuk mendirikan dan mengoperasikan pabrik penggilingan gula di Pantai Utara serta Jawa bagian timur (Elson, 1994). Ketika pemerintah mulai membatasi kontrak pabrik baru demi pengusaha Eropa sejak pertengahan abad ke-19, jaringan Tionghoa tetap memegang kendali penuh atas rantai logistik: armada pedati, perahu sungai pengangkut tebu dari sawah ke pabrik, hingga pergudangan pelabuhan ekspor (Santoso, 2025).",
      burdenLevel: "Sangat Berat",
      fact: "Uang upah tanam (plantloon) yang diterima petani Jawa diserap kembali melalui jaringan pasar, warung, pegadaian, hingga rumah candu milik jaringan perantara Tionghoa (Rush, 1990).",
      image: {
        src: "/images/pacht-candu-gula.svg",
        alt: "Ilustrasi Arsip Suikercontractanten dan Logistik Gula Tanam Paksa",
        caption: "Peran pemodal Tionghoa sebagai kontraktor pabrik gula (suikercontractanten) serta penguasa rantai angkutan pedati, perahu sungai, dan gudang pelabuhan.",
        archiveSource: "Elson (1994) · Santoso (2025) · Hasanah (2015)"
      }
    },
    {
      id: "nila",
      name: "Pacht Pasar, Pegadaian, Tol & Garam",
      latinName: "Bazarpacht · Pandhuispacht · Zoutpacht",
      category: "Sewa Pajak Negara & Perantara Distribusi Pedesaan",
      regions: ["Banten", "Batavia", "Cirebon", "Semarang", "Surakarta & Yogyakarta", "Seluruh Jawa"],
      description: "Akibat keterbatasan aparat birokrasi dan modal pemerintah kolonial untuk memungut pajak langsung dari desa, hak monopoli pemungutan pajak dilelang kepada pemodal swasta dengan setoran tunai tetap ke kas negara (Diehl, 1993; Sari, 2022). Sektor yang dilelang mencakup pajak pasar (bazarpacht), gerbang tol jalan raya dan jembatan, rumah pegadaian (pandhuispacht), pemotongan hewan, hingga distribusi garam (zoutpacht). Melalui hak istimewa keluar-masuk desa, jaringan ini menyalurkan tekstil impor, besi, minyak tanah, garam, serta kredit tunai kepada petani sembari membeli beras desa untuk kota (Rush, 1990).",
      burdenLevel: "Berat",
      fact: "Keunggulan saudagar Tionghoa memenangkan lelang pacht bertumpu pada akumulasi modal besar, organisasi kerja berbasis kekerabatan, serta penguasaan bahasa dan budaya lokal (Rush, 1990).",
      image: {
        src: "/images/pecinan-banten-cakradana.svg",
        alt: "Ilustrasi Arsip Jaringan Perdagangan Perantara dan Pasar Pecinan",
        caption: "Kedudukan pedagang perantara (middlemen / buffer class) yang menghubungkan komoditas manufaktur pelabuhan dengan hasil bumi masyarakat agraris.",
        archiveSource: "Diehl (1993) · Sari (2022) · Fauziah (2009)"
      }
    },
    {
      id: "teh",
      name: "Kongsi Timah Bangka-Belitung & Emas Kalbar",
      latinName: "Kongsi Hakka · Billiton Maatschappij · Lanfang & Thaikong",
      category: "Pertambangan Ekstraktif & Federasi Klan Luar Jawa",
      regions: ["Pulau Bangka", "Pulau Belitung", "Monterado (Kalimantan Barat)", "Mandor (Kalimantan Barat)"],
      description: "Di Bangka dan Belitung, penambangan timah bergantung sepenuhnya pada kuli tambang Tionghoa (terutama subetnis Hakka) yang bekerja dalam kelompok parit atau kongsi (Heidhues, 1992). Tambang Bangka dikelola pemerintah kolonial, sedangkan tambang swasta Belitung dimulai dari konsesi John Loudon (1852) dan dilanjutkan Billiton Maatschappij (1860). Di Kalimantan Barat, penambang emas Tionghoa yang sejak abad ke-18 membentuk federasi otonom berbasis klan ditaklukkan Belanda dalam tiga Perang Kongsi (1822–1824, 1850–1854 terhadap Kongsi Thaikong di Monterado, dan 1884–1885 terhadap Kongsi Lanfang di Mandor), sebelum beralih menjadi petani lada, karet, dan pedagang pedalaman (Yuan, 2000; Heidhues, 2003).",
      burdenLevel: "Sangat Berat",
      fact: "Tiga Perang Kongsi di Kalimantan Barat (1822–1885) menandai perlawanan terpanjang federasi otonom penambang Tionghoa terhadap ekspansi militer kolonial Belanda.",
      image: {
        src: "/images/kongsi-timah-deli.svg",
        alt: "Ilustrasi Arsip Pertambangan Timah Bangka-Belitung dan Perang Kongsi Kalimantan Barat",
        caption: "Organisasi parit/kongsi tambang timah Hakka di Bangka-Belitung serta federasi otonom penambang emas Kongsi Thaikong dan Lanfang di Kalimantan Barat.",
        archiveSource: "Heidhues (1992, 2003) · Mollema (1922) · Kamp (1960) · Yuan (2000)"
      }
    },
    {
      id: "tembakau",
      name: "Kuli Kontrak Perkebunan Deli (Sinkeh)",
      latinName: "Deli Maatschappij · Koelie Ordonnantie 1880 & Poenale Sanctie",
      category: "Buruh Kontrak Perkebunan Tembakau & Karet Sumatra Timur",
      regions: ["Deli (Sumatra Timur)", "Pelabuhan Belawan", "Jaringan Rekrutmen Penang & Singapura", "Swatow, Fujian & Guangdong"],
      description: "Karena kepadatan penduduk Luar Jawa rendah dan penduduk lokal menolak bekerja sebagai buruh upahan kolonial, pembukaan perkebunan tembakau dan karet berskala besar di Sumatra Timur (Deli) oleh Jacob Nienhuys dan Deli Maatschappij sejak dekade 1860-an memicu perekrutan ratusan ribu kuli kontrak (sinkeh) dari Fujian dan Guangdong. Mereka didatangkan lewat jaringan calo (khehtau) dari Penang, Singapura, dan Swatow menuju Pelabuhan Belawan. Di bawah Koelie Ordonnantie (1880) yang memuat aturan poenale sanctie, buruh yang melarikan diri atau melanggar kontrak diancam hukuman pidana dan kerja paksa, sembari terjerat utang candu dan perjudian di perkebunan (Breman, 1989; Stoler, 1985).",
      burdenLevel: "Kritis",
      fact: "Payung hukum Koelie Ordonnantie (1880) dengan aturan Poenale Sanctie mengkriminalisasi buruh perkebunan yang mencoba melarikan diri dari eksploitasi fisik di Deli.",
      image: {
        src: "/images/kongsi-timah-deli.svg",
        alt: "Ilustrasi Arsip Kuli Kontrak Perkebunan Tembakau Deli dan Koelie Ordonnantie 1880",
        caption: "Perekrutan kuli kontrak (sinkeh) melalui jaringan calo (khehtau) menuju perkebunan Deli di bawah ancaman pidana Poenale Sanctie (1880).",
        archiveSource: "Breman (1989) · Stoler (1985) · Furnivall (1939) · Ramayanti & Wisnu (2018)"
      }
    },
  ] as Commodity[],
  secondaryCommodities: [
    { name: "Sutra, Porselen & Keramik", region: "Impor Daratan Tiongkok via Jung Muson" },
    { name: "Uang Kepeng / Picis Tembaga", region: "Alat Tukar Resmi Majapahit & Bandar Pesisir" },
    { name: "Cengkih, Pala & Lada", region: "Ekspor Maluku, Banten & Sumatra ke Tiongkok" },
    { name: "Kayu Cendana, Walet & Teripang", region: "Komoditas Nusa Tenggara & Kawasan Timur" },
    { name: "Tekstil Impor, Besi & Minyak Tanah", region: "Distribusi Perantara Pacht ke Desa Jawa" },
    { name: "Batu Bata, Genteng & Kapur", region: "Industri Konstruksi Muara Sungai Batavia" },
  ] as SecondaryCommodity[],
  mechanisms: {
    batigSlot: {
      term: "Tiong Hoa Hwee Koan (THHK, 17 Maret 1900)",
      summary: "Organisasi pembaru pendidikan dan sosial modern pertama di Batavia yang didirikan oleh Phoa Keng Hek dan Lie Kim Hok sebagai respons atas ketiadaan sekolah negeri kolonial bagi anak-anak Tionghoa.",
      detail: "THHK mengampanyekan pemurnian ajaran Konfusianisme (Khonghucu) dari adat takhayul yang boros serta mendirikan jaringan sekolah modern Tiong Hoa Hak Tong sejak 1901. Sekolah ini mengajarkan aksara dan bahasa Mandarin (Tjeng Im), bahasa Inggris, berhitung, dan ilmu pengetahuan modern secara setara bagi anak laki-laki maupun perempuan, dilengkapi ruang baca politik Soos Po Sia (Somers, 1965; Williams, 1960; Nio, 1940).",
    },
    cultuurprocenten: {
      term: "Respons Kolonial: HCS (1908) & UU Kekawulaan WNO (1910)",
      summary: "Upaya pemerintah Hindia Belanda membendung penyatuan kaum Peranakan dan Totok di bawah panji nasionalisme Pan-Tiongkok Sun Yat-sen melalui jalur sekolah Belanda dan klaim hukum kewarganegaraan.",
      detail: "Khawatir akan meluasnya pengaruh sekolah THHK dan Revolusi Xinhai (1911), pemerintah kolonial mendirikan Hollandsch-Chineesche School (HCS) pada 1908—sekolah dasar berbahasa pengantar Belanda khusus anak Tionghoa—serta mengesahkan Wet op het Nederlandsch Onderdaanschap (WNO) pada 1910 yang mengklaim seluruh keturunan Tionghoa kelahiran Hindia Belanda sebagai kawula Belanda berdasarkan asas ius soli (Somers, 1965; Williams, 1960).",
    },
    indigenousElites: {
      term: "Pers Melayu-Tionghoa & Bahasa Lingua Franca Pergerakan",
      summary: "Tumbuh pesatnya surat kabar berbahasa Melayu Pasar sejak awal abad ke-20 yang menjadi ruang publik utama penentang Wijkenstelsel/Passenstelsel sekaligus pematang Bahasa Indonesia.",
      detail: "Dimulai dari Li Po di Sukabumi (1901), Perniagaan di Batavia (1903), Djawa Tengah di Semarang (1909), hingga harian besar Sin Po di Batavia (10 Oktober 1910 mingguan, 1 April 1912 harian), Pewarta Soerabaia, dan Sin Tit Po di Surabaya (1929). Penggunaan bahasa Melayu Pasar secara luas mematangkan lingua franca pergerakan nasional, tercermin dari pencetakan perdana naskah lagu 'Indonesia Raya' karya W.R. Supratman oleh harian Sin Po pada November 1928 (Adam, 1995; Suryadinata, 1981).",
    },
  },
  outerJavaExpansion: {
    title: "Dinamika Spasial: Banten, Pesisir Jawa, dan Ekspansi Luar Jawa",
    subtitle: "Dari Pecinan Kesultanan Banten hingga Tambang Timah, Perang Kongsi Kalbar, dan Kuli Kontrak Deli",
    overview:
      "Peran ekonomi dan kedudukan sosial masyarakat Tionghoa tidak seragam di seluruh kepulauan Nusantara. Di Jawa dan Banten, mereka berakar sejak masa kerajaan sebagai pedagang maritim, Syahbandar, perantara distribusi desa, dan pemegang pacht. Sebaliknya, di Luar Jawa pada paruh kedua abad ke-19, ekspansi kolonial atas pertambangan timah, emas, dan perkebunan besar melahirkan konsentrasi buruh kontrak (sinkeh) dan perang kongsi berskala besar.",
    regions: [
      {
        id: "banten-pecinan-tangerang",
        region: "Kesultanan Banten, Pecinan Banten Lama & Cina Benteng Tangerang",
        island: "Jawa Bagian Barat (Banten)",
        primaryCommodity: "Perdagangan Lada, Arsitektur & Pertanian Akulturatif",
        description: "Di Banten, permukiman Pecinan telah tumbuh sejak 1596 di barat laut kota dekat muara sungai dan bergeser ke sisi barat kota pada 1726 (Nayati, 1985), meninggalkan jejak Masjid Pacinan Tinggi (Fauziah & Rohman, 2019). Sementara itu, komunitas Cina Benteng di Tangerang berkembang melalui akulturasi panjang dengan budaya Sunda dan Betawi (Thresnawaty, 2015).",
        targetMarket: "Jaringan Pelayaran Selat Sunda & Pasar Lokal Banten",
      },
      {
        id: "bangka-belitung-timah",
        region: "Kepulauan Bangka & Belitung",
        island: "Sumatra Bagian Timur",
        primaryCommodity: "Pertambangan Timah (Sistem Parit / Kongsi Hakka)",
        description: "Penambangan timah bergantung penuh pada kuli tambang Tionghoa subetnis Hakka dalam kelompok parit/kongsi (Heidhues, 1992). Bangka dikelola pemerintah kolonial, sedangkan Belitung dibuka lewat konsesi John Loudon (1852) dan dilanjutkan Billiton Maatschappij (1860) (Mollema, 1922; Kamp, 1960).",
        targetMarket: "Pasar Logam Timah Industri Eropa & Dunia",
      },
      {
        id: "kalbar-perang-kongsi",
        region: "Monterado & Mandor (Kalimantan Barat)",
        island: "Kalimantan",
        primaryCommodity: "Pertambangan Emas, Lada, Karet & Dagang Pedalaman",
        description: "Federasi otonom penambang emas berbasis klan ditaklukkan Belanda melalui tiga Perang Kongsi (1822–1824, 1850–1854 terhadap Kongsi Thaikong di Monterado, dan Oktober 1884 – Februari 1885 terhadap Kongsi Lanfang di Mandor). Pasca-kekalahan, warga Tionghoa beralih menjadi petani lada, karet, dan pedagang pedalaman (Yuan, 2000; Heidhues, 2003).",
        targetMarket: "Jaringan Niaga Laut Tiongkok Selatan & Singapura",
      },
      {
        id: "deli-sumatra-timur",
        region: "Deli / Sumatra Timur (Pelabuhan Belawan)",
        island: "Sumatra",
        primaryCommodity: "Perkebunan Tembakau & Karet (Deli Maatschappij)",
        description: "Dibuka oleh Jacob Nienhuys dan Deli Maatschappij sejak 1860-an dengan merekrut kuli kontrak (sinkeh) via calo (khehtau) dari Penang, Singapura, dan Swatow. Para kuli dijerat Koelie Ordonnantie (1880) beraturan poenale sanctie serta lilitan utang candu dan judi (Breman, 1989; Stoler, 1985).",
        targetMarket: "Bursa Tembakau Cerutu & Karet Internasional Eropa",
      },
    ] as OuterJavaRegion[],
  },
  laborStatistics: {
    title: "Angka & Tonggak Kuantitatif Sejarah Ekonomi Tionghoa di Nusantara",
    subtitle: "Ringkasan metrik historis dari era Jawa Kuno, VOC Batavia, sistem Pacht abad ke-19, hingga pergerakan abad ke-20",
    items: [
      {
        id: "stat-860m",
        period: "Tahun 860 M",
        value: "Prasasti Kencana",
        label: "Catatan Epigrafi Jabatan Juru Cina",
        context: "Bukti tertulis era Jawa Kuno mengenai pejabat khusus pengurus pedagang asing (Juru Cina), yang pada masa Majapahit berada di bawah Rakryan Kanuruhan.",
        citation: "Prasasti Kencana (860 M); Dahana (2000)",
      },
      {
        id: "stat-reid-commerce",
        period: "1450 – 1680",
        value: "Age of Commerce",
        label: "Kurun Niaga Asia Tenggara",
        context: "Periode keemasan perdagangan maritim di mana bandar Malaka, Banten, dan Makassar tumbuh pesat dengan pedagang Tionghoa dan koin kepeng sebagai penggerak utama.",
        citation: "Anthony Reid (1988, 1993)",
      },
      {
        id: "stat-pajak-kepala-1619",
        period: "Mulai 1619",
        value: "1,5 Real / Bulan",
        label: "Pajak Kepala Pria Tionghoa (Usia 16–60)",
        context: "Dipungut melalui Kapitein der Chinezen (Souw Beng Kong) sebagai kompensasi pembebasan wajib militer/rodi benteng; menjadi sumber tunai paling stabil kas VOC Batavia.",
        citation: "Blussé (1988); Lohanda (2007)",
      },
      {
        id: "stat-geger-pecinan-1740",
        period: "Oktober 1740",
        value: "> 10.000 Jiwa",
        label: "Korban Pembantaian di Batavia",
        context: "Tewas dalam pembantaian di bawah perintah Gubernur Jenderal Adriaan Valckenier sebelum meletusnya Perang Geger Pecinan (1740–1743) di seluruh Jawa.",
        citation: "Daradjadi (2013)",
      },
      {
        id: "stat-opiumpacht-1886",
        period: "1886 – 1895",
        value: "~18% APBN",
        label: "Kontribusi Opiumpacht bagi Kas Kolonial",
        context: "Sektor sewa pajak candu (diperkenalkan 1809, ordonansi tahunan 1847) menyumbang sekitar 18% pendapatan pemerintah Hindia Belanda.",
        citation: "Diehl (1993); Rush (1990)",
      },
      {
        id: "stat-perang-kongsi",
        period: "1822 – 1885",
        value: "3 Perang Kongsi",
        label: "Penaklukan Federasi Emas Kalbar",
        context: "Tiga ekspedisi militer Belanda (1822–1824, 1850–1854 terhadap Thaikong di Monterado, dan 1884–1885 terhadap Lanfang di Mandor) menundukkan otonomi kongsi.",
        citation: "Yuan (2000); Heidhues (2003)",
      },
      {
        id: "stat-thhk-sinpo",
        period: "1900 – 1932",
        value: "3 Aliran Politik",
        label: "Kebangkitan Modern & Indonesierschap",
        context: "Berdirinya THHK (17 Maret 1900), harian Sin Po (1910; mencetak 'Indonesia Raya' Nov 1928), Chung Hwa Hui (1928), dan Partai Tionghoa Indonesia (1932).",
        citation: "Suryadinata (1981, 2020); Adam (1995)",
      },
    ] as LaborStatisticItem[],
  },
};

export const commodityFinancialData: CommodityFinancialItem[] = [
  {
    commodity: "Opiumpacht (Monopoli Sewa Pajak Candu)",
    latinName: "Ordonansi 1809 & Kontrak Tahunan 1847",
    profit1840_1849: "Lelang Tunai Tetap + Kuota Tiban & Siram",
    status1850_1860: "~18% Pendapatan Hindia Belanda (1886–1895)",
    totalSurplusShare: "Pilar Fiskal #1",
    keyDetails: [
      "Dikuasai jaringan kongsi saudagar Cabang Atas seperti keluarga Be di Semarang dan Djie Bok Hien di Madiun (Diehl, 1993; Rush, 1990).",
      "Pemerintah menetapkan skema kuota pasokan wajib (tiban) dan tambahan (siram) untuk mengamankan nilai lelang yang tinggi.",
      "Staf pemegang pacht memperoleh hak istimewa keluar-masuk desa dan menempatkan mata-mata anti-penyelundupan."
    ]
  },
  {
    commodity: "Pacht Pasar, Pegadaian, Tol & Garam",
    latinName: "Bazarpacht · Pandhuispacht · Zoutpacht",
    profit1840_1849: "Monopoli Pungutan Pasar, Jembatan & Rumah Gadai",
    status1850_1860: "Jembatan Ekonomi Kota Pelabuhan ⇄ Desa Agraris",
    totalSurplusShare: "Jaringan Middlemen",
    keyDetails: [
      "Mengatasi keterbatasan aparat birokrasi Belanda dalam memungut pajak langsung dari pedesaan Jawa (Diehl, 1993; Sari, 2022).",
      "Menyalurkan barang manufaktur impor (tekstil, besi, minyak tanah, garam) dan kredit uang tunai ke petani.",
      "Membeli beras dan hasil bumi desa untuk dipasarkan kembali ke kota-kota besar (Rush, 1990)."
    ]
  },
  {
    commodity: "Kontraktor Gula & Logistik Tanam Paksa",
    latinName: "Suikercontractanten & Armada Angkutan (1830–1870)",
    profit1840_1849: "Pinjaman Modal Negara untuk Pabrik Gula Awal",
    status1850_1860: "Dominasi Rantai Logistik Pedati, Perahu & Gudang",
    totalSurplusShare: "Penguasa Logistik",
    keyDetails: [
      "Pada dekade awal Cultuurstelsel, pemodal Tionghoa mengoperasikan pabrik penggilingan gula di Pantura dan Jawa Timur (Elson, 1994).",
      "Saat kontrak pabrik baru dibatasi demi pengusaha Eropa, jaringan Tionghoa tetap menguasai angkutan tebu dari sawah ke pabrik hingga gudang pelabuhan (Santoso, 2025).",
      "Menyerap kembali uang upah tanam (plantloon) petani melalui pasar, warung, pegadaian, dan rumah candu (Rush, 1990)."
    ]
  },
  {
    commodity: "Ekstraksi Timah, Emas & Perkebunan Luar Jawa",
    latinName: "Bangka-Belitung · Kalimantan Barat · Deli",
    profit1840_1849: "Kongsi Tambang Hakka & Konsesi Billiton Mij (1860)",
    status1850_1860: "Kuli Kontrak Deli & Koelie Ordonnantie (1880)",
    totalSurplusShare: "Buruh & Kongsi Luar Jawa",
    keyDetails: [
      "Tambang timah Bangka (pemerintah) dan Belitung (John Loudon 1852 / Billiton Maatschappij 1860) bertumpu pada kuli Hakka sistem parit/kongsi (Heidhues, 1992).",
      "Federasi emas Kalimantan Barat ditundukkan lewat 3 Perang Kongsi (1822–1885: Thaikong di Monterado & Lanfang di Mandor) (Yuan, 2000; Heidhues, 2003).",
      "Perkebunan tembakau/karet Deli (Jacob Nienhuys / Deli Maatschappij) merekrut sinkeh via calo (khehtau) di bawah ancaman pidana poenale sanctie (Breman, 1989; Stoler, 1985)."
    ]
  }
];

export const ecologicalZoningData: EcologicalZoneItem[] = [
  {
    type: "1. Koridor Kota Pelabuhan & Pedesaan Agraris Jawa",
    cropCategory: "Perantara Niaga (Middlemen), Pachtstelsel & Logistik Gula",
    crops: ["Opiumpacht & Bazarpacht", "Suikercontractanten", "Distribusi Tekstil, Besi & Beras"],
    landCharacteristics: "Berpusat di kawasan Pecinan kota-kota pelabuhan (Batavia, Banten, Cirebon, Semarang, Surabaya) yang terhubung melalui sungai dan jalan raya ke ribuan desa agraris Jawa.",
    ecologicalRationale: "Pemerintah kolonial memanfaatkan modal, organisasi kekerabatan, dan penguasaan bahasa lokal kalangan Peranakan/Cabang Atas sebagai penghubung (tusschenpersoon) antara perusahaan dagang Eropa dan petani Jawa (Rush, 1990; Diehl, 1993).",
    regions: ["Batavia & Ommelanden", "Banten & Tangerang", "Semarang & Pantura", "Surabaya, Madiun & Pasuruan"]
  },
  {
    type: "2. Sabuk Pertambangan Aluvial Timah & Emas Luar Jawa",
    cropCategory: "Organisasi Parit / Federasi Kongsi Klan Otonom",
    crops: ["Timah Bangka (Pemerintah)", "Timah Belitung (Billiton Mij)", "Emas Monterado & Mandor (Kalbar)"],
    landCharacteristics: "Lembah aluvial timah di kepulauan Bangka-Belitung serta daerah aliran sungai pedalaman Kalimantan Barat yang kaya endapan emas namun berpenduduk lokal jarang.",
    ecologicalRationale: "Imigran subetnis Hakka menerapkan teknologi penambangan parit berbasis pembagian saham dan solidaritas klan (kongsi). Di Kalimantan Barat, otonomi politik-militer kongsi Thaikong dan Lanfang dihancurkan Belanda lewat tiga Perang Kongsi (1822–1885), mendorong alih profesi ke kebun lada dan karet (Heidhues, 1992, 2003; Yuan, 2000).",
    regions: ["Pulau Bangka", "Pulau Belitung", "Monterado (Kongsi Thaikong)", "Mandor (Kongsi Lanfang)"]
  },
  {
    type: "3. Enklave Perkebunan Korporasi Sumatra Timur (Deli)",
    cropCategory: "Kuli Kontrak Imigran (Sinkeh) & Rezim Poenale Sanctie",
    crops: ["Tembakau Deli (Deli Maatschappij)", "Karet Perkebunan", "Rekrutmen Khehtau (Penang–Singapura–Swatow)"],
    landCharacteristics: "Tanah vulkanik subur dataran rendah Sumatra Timur di sekitar Medan dan Pelabuhan Belawan yang dibuka korporasi perkebunan Eropa sejak dekade 1860-an.",
    ecologicalRationale: "Karena penduduk lokal menolak menjadi kuli upahan kolonial, korporasi Eropa mengimpor ratusan ribu buruh sinkeh dari Fujian dan Guangdong. Untuk mengikat tenaga kerja, pemerintah memberlakukan Koelie Ordonnantie (1880) dengan sanksi pidana (poenale sanctie) serta membiarkan jerat utang candu dan perjudian di barak kebun (Breman, 1989; Stoler, 1985).",
    regions: ["Deli / Medan", "Pelabuhan Belawan", "Simpul Transit Penang & Singapura", "Pelabuhan Asal Swatow, Fujian & Guangdong"]
  }
];

export const batigSlotAllocationData: BatigSlotAllocationItem[] = [
  {
    id: "transform-peranakan-totok",
    title: "1. Diferensiasi Sosiokultural: Peranakan (Baba) vs Totok (Sinkeh)",
    amountOrScale: "Pergantian Abad ke-20",
    destination: "Struktur Internal Komunitas Tionghoa",
    description: "Kaum Peranakan (Baba) merupakan keturunan imigran terdahulu yang menikah campur dengan perempuan lokal (akibat larangan emigrasi perempuan Dinasti Qing), berbahasa ibu Melayu-Tionghoa/daerah (Jawa/Sunda), berbusana sarung-kebaya encim, serta mengembangkan batik pesisiran dan kuliner hibrida.",
    historicalSignificance: "Sebaliknya, membaiknya kapal uap dan pelonggaran emigrasi akhir abad ke-19 membawa imigran baru termasuk perempuan Tionghoa yang membentuk komunitas Totok (Sinkeh) berbahasa Hokkien, Hakka, Kanton, Hainan, atau Mandarin dengan ikatan kuat pada gerakan Sun Yat-sen dan Revolusi Xinhai 1911 (Suryadinata, 2020; Somers, 1965; Williams, 1960)."
  },
  {
    id: "transform-thhk-1900",
    title: "2. Berdirinya Tiong Hoa Hwee Koan (THHK) & Sekolah Modern",
    amountOrScale: "17 Maret 1900 · Batavia",
    destination: "Phoa Keng Hek & Lie Kim Hok",
    description: "Dipicu ketimpangan hukum kolonial (termasuk pemberian status setara Eropa bagi warga Jepang pada 1899 sementara anak Tionghoa tidak disediakan sekolah negeri), tokoh pembaru Peranakan mendirikan THHK di Batavia pada 17 Maret 1900.",
    historicalSignificance: "THHK memurnikan ajaran Khonghucu dari adat takhayul yang boros dan membuka jaringan sekolah modern Tiong Hoa Hak Tong sejak 1901 (mengajarkan Mandarin Tjeng Im, Inggris, berhitung, dan sains secara setara bagi anak laki-laki dan perempuan) serta ruang baca politik Soos Po Sia (Williams, 1960; Nio, 1940)."
  },
  {
    id: "transform-hcs-wno",
    title: "3. Respons Kolonial: Pendirian HCS (1908) & UU Kekawulaan WNO (1910)",
    amountOrScale: "1908 & 1910",
    destination: "Pemerintah Kolonial Hindia Belanda",
    description: "Khawatir kaum Peranakan dan Totok bersatu di bawah panji nasionalisme Pan-Tiongkok yang antikolonial, Belanda mendirikan Hollandsch-Chineesche School (HCS) pada 1908 berbahasa pengantar Belanda khusus anak Tionghoa.",
    historicalSignificance: "Pada 1910, Belanda mengesahkan Undang-Undang Kekawulaan Belanda (Wet op het Nederlandsch Onderdaanschap / WNO) berdasarkan asas ius soli yang mengklaim seluruh keturunan Tionghoa kelahiran Hindia Belanda sebagai kawula Belanda (Somers, 1965; Williams, 1960)."
  },
  {
    id: "transform-pers-melayu",
    title: "4. Kebangkitan Pers Melayu-Tionghoa & Lagu “Indonesia Raya”",
    amountOrScale: "1901 – 1929",
    destination: "Li Po, Perniagaan, Sin Po & Sin Tit Po",
    description: "Dimulai dari Li Po di Sukabumi (1901), Perniagaan di Batavia (1903), dan Djawa Tengah di Semarang (1909), hingga harian besar Sin Po di Batavia (10 Oktober 1910 mingguan, 1 April 1912 harian), Pewarta Soerabaia, dan Sin Tit Po di Surabaya (1929).",
    historicalSignificance: "Pers Melayu-Tionghoa menjadi ruang publik utama yang menuntut penghapusan Wijkenstelsel & Passenstelsel, mematangkan bahasa Melayu Pasar menjadi lingua franca pergerakan nasional, serta mencetak perdana naskah lagu 'Indonesia Raya' karya W.R. Supratman di harian Sin Po pada November 1928 (Adam, 1995; Suryadinata, 1981)."
  },
  {
    id: "transform-sinpo-chh",
    title: "5. Aliran Politik I & II: Nasionalisme Sin Po vs Kooperatif Chung Hwa Hui",
    amountOrScale: "1910 & 1928",
    destination: "Kelompok Sin Po & Chung Hwa Hui (Kan Hok Hoei)",
    description: "Sejarawan Leo Suryadinata memetakan polarisasi politik Tionghoa masa akhir kolonial: Aliran pertama adalah kelompok Sin Po yang berorientasi pada nasionalisme Tiongkok dan menolak kekawulaan Belanda (WNO 1910).",
    historicalSignificance: "Aliran kedua adalah Chung Hwa Hui (CHH, 1928) yang didukung intelektual lulusan Belanda dan elite bisnis (seperti Kan Hok Hoei) untuk menempuh jalur kooperatif memperjuangkan hak warga Tionghoa di dalam parlemen kolonial Volksraad (Suryadinata, 1981)."
  },
  {
    id: "transform-pti-1932",
    title: "6. Aliran Politik III: Partai Tionghoa Indonesia (PTI) & Indonesierschap",
    amountOrScale: "1932 · Surabaya",
    destination: "Liem Koen Hian & Pergerakan Kemerdekaan",
    description: "Aliran ketiga diwakili oleh Partai Tionghoa Indonesia (PTI) yang didirikan pada 1932 di bawah pimpinan jurnalis dan intelektual Liem Koen Hian dengan haluan Indonesierschap (kesadaran sebagai putra Indonesia).",
    historicalSignificance: "PTI secara tegas menolak orientasi politik ke Tiongkok maupun loyalitas kolonial Belanda, serta mengajak etnis Tionghoa melebur penuh dalam perjuangan kemerdekaan Indonesia bersama kaum pergerakan nasional bumiputera (Suryadinata, 1981)."
  }
];

export const batigSlotDetailedData: BatigSlotUsageItem[] = [
  {
    id: "row-thhk-1900",
    category: "Tiong Hoa Hwee Koan (THHK) & Tiong Hoa Hak Tong",
    period: "17 Maret 1900 & 1901",
    amountGulden: "Mandarin (Tjeng Im) & Inggris",
    beneficiary: "Generasi Muda Laki-Laki & Perempuan Tionghoa",
    description: "Didirikan oleh Phoa Keng Hek dan Lie Kim Hok di Batavia untuk memurnikan ajaran Khonghucu dan menyediakan pendidikan modern setara gender.",
    javaContrast: "Mematahkan diskriminasi pemerintah kolonial yang sebelumnya tidak menyediakan sekolah negeri bagi anak-anak Tionghoa sementara warga Jepang telah disetarakan dengan Eropa pada 1899."
  },
  {
    id: "row-hcs-wno-1908",
    category: "Hollandsch-Chineesche School (HCS) & UU WNO",
    period: "1908 & 1910",
    amountGulden: "Pengantar Belanda & Asas Ius Soli",
    beneficiary: "Pemerintah Kolonial & Lulusan Berbahasa Belanda",
    description: "Pendirian sekolah dasar berbahasa Belanda (HCS) dan pengesahan Wet op het Nederlandsch Onderdaanschap (WNO) yang mengklaim keturunan Tionghoa lokal sebagai kawula Belanda.",
    javaContrast: "Dirancang pemerintah kolonial untuk membendung penyatuan kaum Peranakan dan Totok di bawah gerakan nasionalisme Pan-Tiongkok dan ruang baca politik Soos Po Sia."
  },
  {
    id: "row-sinpo-1910",
    category: "Aliran I: Kelompok Harian Sin Po Batavia",
    period: "10 Okt 1910 / 1 Apr 1912",
    amountGulden: "Melayu Pasar & Antikolonial",
    beneficiary: "Komunitas Totok & Nasionalis Peranakan",
    description: "Berorientasi pada nasionalisme Tiongkok, menolak kekawulaan Belanda (WNO), dan gigih menuntut penghapusan Wijkenstelsel serta Passenstelsel.",
    javaContrast: "Bersimpati kuat pada pergerakan nasional bumiputera dan mencetak perdana naskah lagu 'Indonesia Raya' karya W.R. Supratman pada November 1928."
  },
  {
    id: "row-chh-1928",
    category: "Aliran II: Chung Hwa Hui (CHH)",
    period: "1928",
    amountGulden: "Jalur Kooperatif Volksraad",
    beneficiary: "Intelektual Lulusan Belanda & Elite Bisnis",
    description: "Dipimpin tokoh-tokoh seperti Kan Hok Hoei untuk memperjuangkan kesetaraan hukum dan kepentingan ekonomi Tionghoa melalui kursi perwakilan di Volksraad.",
    javaContrast: "Dikritik oleh kelompok nasionalis karena dinilai terlalu akomodatif terhadap struktur kekuasaan kolonial Hindia Belanda."
  },
  {
    id: "row-pti-1932",
    category: "Aliran III: Partai Tionghoa Indonesia (PTI)",
    period: "1932",
    amountGulden: "Haluan Indonesierschap",
    beneficiary: "Perjuangan Kemerdekaan Indonesia",
    description: "Dipimpin oleh Liem Koen Hian (didukung harian Sin Tit Po Surabaya) yang menegaskan identitas politik Tionghoa sebagai bagian integral dari bangsa Indonesia.",
    javaContrast: "Menjadi jembatan historis peleburan masyarakat Tionghoa bersama kaum pergerakan nasional bumiputera menuju Indonesia merdeka (Suryadinata, 1981)."
  }
];

export const macroPopulationStatsData: MacroPopulationStat[] = [
  {
    year: "Abad V – XV",
    totalPopulationPct: "Jalur Sutra Maritim",
    nonCoffeePct: "Koin Kepeng / Picis",
    landAllocationPct: "Juru Cina (860 M)",
    highestResidencies: "Jawa, Malaka, Palembang, Banten, Tuban & Gresik",
    landAreaNote: "Kronik Faxian (Foguo Ji, abad ke-5), Prasasti Kencana (860 M), & ekspedisi Cheng Ho (abad ke-15)."
  },
  {
    year: "1450 – 1680",
    totalPopulationPct: "Age of Commerce",
    nonCoffeePct: "Monetisasi Pasar Desa",
    landAllocationPct: "Syahbandar & Pecinan",
    highestResidencies: "Kesultanan Banten (Kiyai Ngabehi Cakradana), Malaka & Makassar",
    landAreaNote: "Pecinan Banten berdiri sejak 1596 di barat laut kota dan bergeser ke sisi barat pada 1726 (Nayati, 1985)."
  },
  {
    year: "1619 – 1739",
    totalPopulationPct: "Kemitraan VOC",
    nonCoffeePct: "Pajak Kepala 1,5 Real",
    landAllocationPct: "Kapitein der Chinezen",
    highestResidencies: "Batavia & Ommelanden (Souw Beng Kong, Mayor-Kapiten-Letnan)",
    landAreaNote: "Pembangunan benteng, kanal, ruko, pabrik bata/kapur, dan penggilingan gula Ommelanden."
  },
  {
    year: "1740 – 1743",
    totalPopulationPct: "> 10.000 Korban Jiwa",
    nonCoffeePct: "Geger Pecinan",
    landAllocationPct: "Segregasi Pecinan",
    highestResidencies: "Batavia, Kartasura, Cirebon, Tegal, Pekalongan, Semarang, Lasem, Tuban",
    landAreaNote: "Pembantaian Oktober 1740 (GG Valckenier), aliansi Khe Panjang & Tan Sin Ko dengan Mataram, dan diaspora pesisir."
  },
  {
    year: "1809 – 1895",
    totalPopulationPct: "Sistem Pachtstelsel",
    nonCoffeePct: "~18% APBN (Opiumpacht)",
    landAllocationPct: "Wijken & Passenstelsel",
    highestResidencies: "Semarang (Keluarga Be), Madiun (Djie Bok Hien), Pantura & Luar Jawa",
    landAreaNote: "Dominasi pacht candu/pasar/gadai, logistik gula Tanam Paksa, Perang Kongsi Kalbar (1822–1885), & Koelie Ordonnantie 1880."
  },
  {
    year: "1900 – 1932",
    totalPopulationPct: "Kebangkitan Modern",
    nonCoffeePct: "THHK (1900) & HCS (1908)",
    landAllocationPct: "Sin Po, CHH & PTI",
    highestResidencies: "Batavia, Sukabumi, Semarang, Surabaya & Seluruh Hindia Belanda",
    landAreaNote: "UU Kekawulaan WNO (1910), pers Melayu-Tionghoa, pencetakan 'Indonesia Raya' (Nov 1928), dan PTI Liem Koen Hian (1932)."
  }
];

export const coffeeMacroStatsData: CropMacroProductionRow[] = [
  {
    year: "Abad V",
    households: "Peziarah & Pelaut",
    production: "Jalur Laut Tiongkok–Jawa",
    totalPlantloon: "Barter Komoditas Awal",
    plantloonPerUnitOrHousehold: "Sutra & Porselen",
    cultuurprocenten: "Kronik Foguo Ji (Faxian)",
    extraMeta: "Sumber tertulis asing tertua jalur pelayaran Nusantara–Tiongkok"
  },
  {
    year: "860 M",
    households: "Komunitas Pedagang Asing",
    production: "Administrasi Pelabuhan",
    totalPlantloon: "Pajak & Bea Kerajaan",
    plantloonPerUnitOrHousehold: "Jabatan Juru Cina",
    cultuurprocenten: "Prasasti Kencana (Jawa Kuno)",
    extraMeta: "Diperluas pada era Majapahit di bawah Rakryan Kanuruhan"
  },
  {
    year: "1450–1680",
    households: "Pecinan Pesisir Awal",
    production: "Lada, Cengkih, Pala, Cendana",
    totalPlantloon: "Uang Kepeng / Picis (1.000/ikat)",
    plantloonPerUnitOrHousehold: "Syahbandar Cakradana",
    cultuurprocenten: "Age of Commerce (Anthony Reid)",
    extraMeta: "Monetisasi pasar Majapahit & pembangunan Istana Surosowan Banten"
  },
  {
    year: "1619–1740",
    households: "Ribuan Warga Batavia",
    production: "Konstruksi Kota & Gula Ommelanden",
    totalPlantloon: "Hoofdgeld 1,5 Real / Bulan",
    plantloonPerUnitOrHousehold: "Kapitein Souw Beng Kong",
    cultuurprocenten: "Tragedi >10.000 Jiwa (Okt 1740)",
    extraMeta: "Krisis gula dunia memicu pembantaian Batavia & Perang Geger Pecinan 1740–1743"
  }
];

export const sugarMacroStatsData: CropMacroProductionRow[] = [
  {
    year: "1809 & 1847",
    households: "Kongsi Cabang Atas",
    production: "Opiumpacht (Tiban & Siram)",
    totalPlantloon: "~18% Pendapatan Kolonial (1886–1895)",
    plantloonPerUnitOrHousehold: "Keluarga Be & Djie Bok Hien",
    cultuurprocenten: "Hak Istimewa Masuk Desa",
    extraMeta: "Diehl (1993) & Rush (1990): jaringan rumah madat, mata-mata, & distribusi barang impor"
  },
  {
    year: "1830–1870",
    households: "Suikercontractanten",
    production: "Pabrik Gula & Rantai Logistik",
    totalPlantloon: "Pinjaman Modal & Armada Angkut",
    plantloonPerUnitOrHousehold: "Pedati, Perahu & Gudang",
    cultuurprocenten: "Penyerap Upah Plantloon",
    extraMeta: "Elson (1994) & Santoso (2025): menguasai angkutan tebu sawah ke pabrik & pelabuhan"
  },
  {
    year: "1822–1885",
    households: "Kongsi Hakka & Klan Emas",
    production: "Timah Bangka-Belitung & Emas Kalbar",
    totalPlantloon: "Billiton Mij (1860) & Sistem Parit",
    plantloonPerUnitOrHousehold: "Kongsi Thaikong & Lanfang",
    cultuurprocenten: "3 Perang Kongsi (1822–1885)",
    extraMeta: "Heidhues (1992, 2003) & Yuan (2000): penaklukan Monterado (1854) & Mandor (1885)"
  },
  {
    year: "1860–1930",
    households: "Ratusan Ribu Kuli Sinkeh",
    production: "Tembakau & Karet Deli (Belawan)",
    totalPlantloon: "Rekrutmen Calo (Khehtau)",
    plantloonPerUnitOrHousehold: "Koelie Ordonnantie (1880)",
    cultuurprocenten: "Ancaman Pidana Poenale Sanctie",
    extraMeta: "Breman (1989) & Stoler (1985): eksploitasi fisik disertai jerat utang candu & perjudian"
  }
];

export const indigoMacroStatsData: CropMacroProductionRow[] = [
  {
    year: "17 Mar 1900",
    households: "Phoa Keng Hek & Lie Kim Hok",
    production: "Tiong Hoa Hwee Koan (THHK)",
    totalPlantloon: "Sekolah Tiong Hoa Hak Tong (1901)",
    plantloonPerUnitOrHousehold: "Mandarin (Tjeng Im) & Inggris",
    cultuurprocenten: "Setara Laki-Laki & Perempuan",
    extraMeta: "Somers (1965), Williams (1960) & Nio (1940): pemurnian Khonghucu & Soos Po Sia"
  },
  {
    year: "1908 & 1910",
    households: "Pemerintah Hindia Belanda",
    production: "HCS (1908) & UU WNO (1910)",
    totalPlantloon: "Pengantar Bahasa Belanda",
    plantloonPerUnitOrHousehold: "Asas Hukum Ius Soli",
    cultuurprocenten: "Klaim Kawula Belanda",
    extraMeta: "Membendung penyatuan Peranakan & Totok di bawah nasionalisme Pan-Tiongkok"
  },
  {
    year: "1901–1929",
    households: "Pers Melayu-Tionghoa",
    production: "Li Po, Perniagaan, Sin Po, Sin Tit Po",
    totalPlantloon: "Bahasa Melayu Pasar (Lingua Franca)",
    plantloonPerUnitOrHousehold: "Cetak Perdana Indonesia Raya",
    cultuurprocenten: "Harian Sin Po (Nov 1928)",
    extraMeta: "Adam (1995) & Suryadinata (1981): ruang publik penentang Wijkenstelsel & Passenstelsel"
  },
  {
    year: "1910–1932",
    households: "Tiga Haluan Politik",
    production: "Sin Po · CHH (1928) · PTI (1932)",
    totalPlantloon: "Kan Hok Hoei vs Liem Koen Hian",
    plantloonPerUnitOrHousehold: "Volksraad vs Indonesierschap",
    cultuurprocenten: "Melebur di Indonesia Merdeka",
    extraMeta: "Suryadinata (1981): PTI mengajak etnis Tionghoa berjuang bersama kaum pergerakan bumiputera"
  }
];

export const colonialGlossaryData: ColonialGlossaryTerm[] = [
  {
    term: "Picis / Uang Kepeng",
    definition: "Koin logam berbahan tembaga asal Tiongkok berbentuk lingkaran dengan lubang persegi di tengahnya yang diikat tali serat per 1.000 keping.",
    modernEquivalent: "Alat Tukar Resmi Majapahit",
    contextNote: "Melahirkan revolusi finansial pertama di Nusantara yang menggantikan sistem barter murni di pasar desa hingga pelabuhan."
  },
  {
    term: "Juru Cina & Syahbandar",
    definition: "Pejabat kerajaan lokal yang mengurus pedagang asing (tercatat di Prasasti Kencana 860 M) dan kepala otoritas pelabuhan penentu tarif pajak serta keaslian timbangan.",
    modernEquivalent: "Otoritas Pelabuhan & Bea Cukai",
    contextNote: "Contoh terkenal: Tantseko (Kiyai Ngabehi Cakradana) di Kesultanan Banten abad ke-17."
  },
  {
    term: "Tusschenpersoon (Middlemen Minority)",
    definition: "Posisi struktural masyarakat Tionghoa sebagai kelas perantara ekonomi yang menjembatani elite kolonial Eropa di tingkat atas dengan masyarakat pribumi di tingkat bawah.",
    modernEquivalent: "Minoritas Perantara / Buffer Class",
    contextNote: "Menguasai distribusi eceran, kredit pedesaan, dan pembelian hasil bumi di antara firma Eropa dan petani lokal."
  },
  {
    term: "Kapitein der Chinezen",
    definition: "Pemimpin komunitas Tionghoa yang diangkat VOC/Hindia Belanda dalam sistem pemerintahan tidak langsung (indirect rule), diperluas menjadi Mayor, Kapiten, dan Letnan.",
    modernEquivalent: "Opsir Penghubung Birokrasi",
    contextNote: "Kapiten pertama di Batavia adalah Souw Beng Kong (1619); bertugas memungut pajak kepala 1,5 real/bulan dan mengadili perkara perdata adat."
  },
  {
    term: "Pachtstelsel & Opiumpacht",
    definition: "Sistem lelang hak monopoli pemungutan pajak negara kepada pemodal swasta (pasar/bazarpacht, pegadaian/pandhuispacht, garam/zoutpacht, dan candu/opiumpacht).",
    modernEquivalent: "Monopoli Sewa Pajak (~18% APBN)",
    contextNote: "Opiumpacht (1809/1847) dengan kuota wajib (tiban) dan tambahan (siram) menyumbang ~18% pendapatan kolonial pada 1886–1895 (Diehl, 1993)."
  },
  {
    term: "Suikercontractanten",
    definition: "Para kontraktor pemodal yang menerima pinjaman negara pada awal era Tanam Paksa (1830–1870) untuk mendirikan dan mengoperasikan pabrik penggilingan gula.",
    modernEquivalent: "Kontraktor Industri Gula",
    contextNote: "Ketika kontrak pabrik dibatasi, jaringan Tionghoa tetap menguasai angkutan pedati, perahu sungai, dan pergudangan pelabuhan (Elson, 1994; Santoso, 2025)."
  },
  {
    term: "Peranakan (Baba) vs Totok (Sinkeh)",
    definition: "Diferensiasi sosiokultural antara keturunan Tionghoa yang telah lama menetap dan berakulturasi (berbahasa Melayu/daerah, kebaya encim) dengan imigran baru kelahiran Tiongkok.",
    modernEquivalent: "Diferensiasi Identitas Sosiokultural",
    contextNote: "Kaum Totok meningkat pesat pada akhir abad ke-19 seiring kapal uap dan pelonggaran emigrasi perempuan (Suryadinata, 2020)."
  },
  {
    term: "Koelie Ordonnantie & Poenale Sanctie",
    definition: "Peraturan kuli kontrak tahun 1880 di Sumatra Timur (Deli) yang memuat sanksi pidana dan kerja paksa bagi buruh (sinkeh) yang melarikan diri atau melanggar kontrak.",
    modernEquivalent: "Hukum Pidana Kerja Kontrak (1880)",
    contextNote: "Kuli direkrut lewat jaringan calo (khehtau) dari Penang, Singapura, dan Swatow menuju Belawan (Breman, 1989; Stoler, 1985)."
  },
  {
    term: "Vreemde Oosterlingen (Timur Asing)",
    definition: "Golongan penduduk kelas dua dalam stratifikasi hukum Regeeringsreglement (di bawah Europeanen dan di atas Inlanders) yang mencakup etnis Tionghoa, Arab, dan India.",
    modernEquivalent: "Stratifikasi Hukum Kelas Dua",
    contextNote: "Menciptakan diskriminasi hukum dan administrasi meskipun memiliki jaringan ekonomi yang menopang koloni (Fauziah, 2009)."
  },
  {
    term: "Wijkenstelsel & Passenstelsel",
    definition: "Kebijakan segregasi kolonial yang mewajibkan etnis Tionghoa tinggal di kawasan khusus (Pecinan) dan mengantongi surat izin jalan saat bepergian antar-daerah.",
    modernEquivalent: "Segregasi Ruang & Izin Mobilitas",
    contextNote: "Berfungsi sebagai instrumen pengawasan militer-politik kolonial pasca-Geger Pecinan hingga awal abad ke-20 (Nayati, 1985; Rush, 1990)."
  }
];

export const bremanCritiqueData: BremanCritiquePoint[] = [
  {
    id: "paradoks-1-ketergantungan",
    title: "1. Paradoks Ketergantungan Fiskal vs Kecurigaan Politik",
    mythVsFact: {
      officialClaim: "Penguasa kolonial memandang pertumbuhan populasi dan kekuatan ekonomi Tionghoa sebagai ancaman keamanan yang harus dikekang secara ketat.",
      groundReality: "Sejak pembangunan Batavia (1619) hingga sistem pacht abad ke-19, kas negara dan roda logistik koloni justru tidak dapat berjalan tanpa modal, keahlian manajerial, dan jaringan Tionghoa."
    },
    evidence: "Opiumpacht menyumbang ~18% pendapatan Hindia Belanda (1886–1895) dan pajak kepala 1,5 real/bulan menjadi pemasukan tunai paling stabil VOC Batavia.",
    historianCitation: "Blussé (1988); Rush (1990); Diehl (1993)"
  },
  {
    id: "paradoks-2-pecinan",
    title: "2. Asal-Usul Pecinan: Pertumbuhan Organik vs Segregasi Wijkenstelsel",
    mythVsFact: {
      officialClaim: "Kawasan Pecinan sering dianggap semata-mata sebagai produk aturan isolasi Wijkenstelsel buatan pemerintah kolonial Belanda.",
      groundReality: "Permukiman niaga Tionghoa di kota pelabuhan seperti Banten telah tumbuh secara organik dan terintegrasi sejak masa Kesultanan (1596), jauh sebelum dikurung dalam tata pengawasan kolonial."
    },
    evidence: "Pengamatan peta kuno Kota Banten (1596–1726) serta berdirinya Masjid Pacinan Tinggi dan makam Tionghoa Muslim di Banten.",
    historianCitation: "Nayati (1985); Fauziah (2009); Fauziah & Rohman (2019)"
  },
  {
    id: "paradoks-3-kelas",
    title: "3. Mitos Homogenitas Ekonomi: Saudagar Cabang Atas vs Kuli Sinkeh",
    mythVsFact: {
      officialClaim: "Stereotip kolonial menggeneralisasi seluruh masyarakat Tionghoa sebagai kelompok pemodal kaya dan pemegang monopoli pacht.",
      groundReality: "Struktur ekonomi internal Tionghoa sangat berlapis: di samping saudagar besar (Cabang Atas), terdapat pedagang eceran sederhana, petani Cina Benteng, hingga ratusan ribu kuli kontrak (sinkeh) yang diperas di tambang dan perkebunan Deli."
    },
    evidence: "Penerapan Koelie Ordonnantie (1880) dengan poenale sanctie serta jerat utang candu dan perjudian terhadap kuli Tionghoa di Sumatra Timur.",
    historianCitation: "Breman (1989); Stoler (1985); Heidhues (1992); Fauziah (2009)"
  },
  {
    id: "paradoks-4-pendidikan",
    title: "4. Politik Pendidikan & Kewarganegaraan: THHK (1900) vs HCS (1908) & WNO (1910)",
    mythVsFact: {
      officialClaim: "Pendirian Hollandsch-Chineesche School (1908) dan UU Kekawulaan WNO (1910) diklaim sebagai kemurahan hati pemerintah kolonial memperhatikan warga Tionghoa.",
      groundReality: "Kebijakan tersebut adalah langkah reaktif Belanda karena panik melihat pesatnya sekolah mandiri Tiong Hoa Hwee Koan (1900) dan kekhawatiran bersatunya Peranakan–Totok di bawah nasionalisme Pan-Tiongkok."
    },
    evidence: "Sebelum THHK berdiri pada 17 Maret 1900, Belanda mengabaikan pendidikan anak Tionghoa sementara warga Jepang telah diberi status Eropa pada 1899.",
    historianCitation: "Somers (1965); Williams (1960); Nio Joe Lan (1940)"
  },
  {
    id: "paradoks-5-nasionalisme",
    title: "5. Kontribusi Kebangsaan: Pers Melayu-Tionghoa & Haluan Indonesierschap",
    mythVsFact: {
      officialClaim: "Politik segregasi Vreemde Oosterlingen berupaya memisahkan masyarakat Tionghoa secara permanen dari perjuangan kemerdekaan bumiputera.",
      groundReality: "Pers Melayu-Tionghoa justru mematangkan bahasa Melayu Pasar menjadi lingua franca pergerakan nasional, mencetak perdana lagu 'Indonesia Raya' (1928), dan melahirkan Partai Tionghoa Indonesia (1932) yang berhaluan Indonesierschap."
    },
    evidence: "Pencetakan perdana naskah lagu 'Indonesia Raya' karya W.R. Supratman di harian Sin Po (November 1928) dan perjuangan Liem Koen Hian di PTI (1932).",
    historianCitation: "Adam (1995); Suryadinata (1981, 2020)"
  }
];

export const implementationData = {
  sectionTitle: "Bab III · Kedudukan Sosial: Antara Harmoni Kesultanan & Sekat Hukum Kolonial",
  sectionSubtitle: "Membedah politik pecah belah Tiga Golongan, institusi Kapiten, keragaman Peranakan–Totok, hingga kehangatan akulturasi di Kesultanan Banten",
  intro:
    "Bandingkan dua lanskap sosial yang bertolak belakang ini: di masa kejayaan Kesultanan Nusantara, seorang saudagar Tionghoa Muslim seperti Kiyai Ngabehi Cakradana dipercaya Sultan Banten menjadi Syahbandar pelabuhan dan perancang tembok Istana Surosowan, menara Masjid Pacinan Tinggi berdiri anggun di jantung pemukiman, dan masyarakat Cina Benteng di tepian Sungai Cisadane Tangerang menyatu hangat dengan budaya Sunda serta Betawi. Sebaliknya, ketika negara kolonial Hindia Belanda menegakkan Regeeringsreglement 1854, keakraban lintas budaya itu dikurung di balik tembok hukum: masyarakat Tionghoa dikelompokkan sebagai Timur Asing (Vreemde Oosterlingen), diwajibkan tinggal di kawasan Pecinan terawasi (Wijkenstelsel), dan harus mengantongi surat izin jalan (Passenstelsel) setiap kali melangkah keluar kota—menjadikan mereka kelas penyangga (buffer class) yang menopang ekonomi koloni namun rentan menjadi sasaran prasangka sosial.",
  laws: [
    {
      ruleNumber: 1,
      article: "Regeeringsreglement (1854) · Tiga Golongan Penduduk",
      officialRule: "Pemerintah Hindia Belanda membagi penduduk ke dalam tiga golongan hukum resmi: Eropa (Europeanen), Timur Asing (Vreemde Oosterlingen), dan Pribumi (Inlanders).",
      fieldReality: "Masyarakat Tionghoa dimasukkan ke golongan Timur Asing bersama keturunan Arab dan India. Sekalipun memiliki jaringan ekonomi yang kuat, kedudukan hukum dan administrasi mereka tetap tidak setara dengan golongan Eropa dan terjepit sebagai buffer class (Fauziah, 2009).",
      severity: "Kritis",
    },
    {
      ruleNumber: 2,
      article: "Wijkenstelsel · Kebijakan Segregasi Wilayah Permukiman",
      officialRule: "Aturan kolonial yang mewajibkan kelompok etnis Tionghoa tinggal dan bermukim di kawasan khusus yang telah ditentukan pemerintah (Pecinan) di luar benteng utama.",
      fieldReality: "Digunakan sejak pasca-Geger Pecinan 1740 dan diperketat di abad ke-19 agar gerak-gerik warga Tionghoa mudah diawasi serdadu Belanda dan mencegah aliansi dengan penduduk pribumi. Namun di Banten, Pecinan sejatinya telah tumbuh sejak masa Kesultanan (1596) sebelum masuk ke tata pengawasan kolonial (Nayati, 1985).",
      severity: "Kritis",
    },
    {
      ruleNumber: 3,
      article: "Passenstelsel · Kewajiban Surat Izin Jalan Antar-Daerah",
      officialRule: "Setiap warga Tionghoa yang hendak bepergian keluar dari kawasan permukiman atau melakukan perjalanan dagang ke wilayah tertentu wajib mengantongi surat izin jalan (pas jalan) dari otoritas kolonial.",
      fieldReality: "Menghambat mobilitas perdagangan antar-daerah secara sengaja, kecuali bagi staf pemegang monopoli pacht yang diberi hak istimewa keluar-masuk pedesaan. Kebijakan ini menjadi sasaran kecaman utama pers Melayu-Tionghoa pada awal abad ke-20 (Rush, 1990; Adam, 1995).",
      severity: "Kritis",
    },
    {
      ruleNumber: 4,
      article: "Hoofdgeld (1619) · Pajak Kepala & Pemerintahan Tidak Langsung",
      officialRule: "Setiap pria Tionghoa dewasa berusia 16 hingga 60 tahun di Batavia diwajibkan membayar pajak kepala sebesar 1,5 real per bulan sebagai kompensasi pembebasan dari wajib militer/kerja rodi benteng.",
      fieldReality: "Dipungut melalui institusi Kapitein der Chinezen (Mayor, Kapiten, Letnan) dan menjadi salah satu sumber pendapatan tunai paling stabil bagi kas VOC, sembari mengalihkan beban administrasi kependudukan dan peradilan perdata internal kepada opsir Tionghoa.",
      severity: "Tinggi",
    },
    {
      ruleNumber: 5,
      article: "Ordonansi Pacht (1809 & 1847) · Sewa Pajak & Kuota Tiban-Siram",
      officialRule: "Pemerintah melelang hak monopoli pemungutan pajak pasar (bazarpacht), pegadaian (pandhuispacht), garam (zoutpacht), dan penjualan candu (opiumpacht) dengan kewajiban setoran tunai tetap ke kas negara.",
      fieldReality: "Untuk mengamankan nilai lelang yang sangat tinggi (~18% pendapatan kolonial pada 1886–1895), pemerintah memberlakukan kuota pasokan wajib (tiban) dan tambahan (siram), sementara pemegang pacht memperluas jaringan rumah madat dan kredit pedesaan (Diehl, 1993; Rush, 1990).",
      severity: "Tinggi",
    },
    {
      ruleNumber: 6,
      article: "Koelie Ordonnantie (1880) · Aturan Pidana Poenale Sanctie",
      officialRule: "Payung hukum kolonial yang mengatur kontrak kerja buruh imigran (sinkeh) di perkebunan besar Sumatra Timur (Deli) dengan klausul poenale sanctie.",
      fieldReality: "Buruh yang melarikan diri atau dianggap melanggar kontrak diancam hukuman pidana dan kerja paksa. Di lapangan, para kuli Tionghoa menghadapi eksploitasi fisik berat serta dijerat utang melalui penyediaan candu dan perjudian di lingkungan kebun (Breman, 1989; Stoler, 1985).",
      severity: "Kritis",
    },
    {
      ruleNumber: 7,
      article: "Wet op het Nederlandsch Onderdaanschap / WNO (1910)",
      officialRule: "Undang-Undang Kekawulaan Belanda yang mengklaim seluruh keturunan Tionghoa kelahiran Hindia Belanda sebagai kawula Belanda (onderdaan) berdasarkan asas kelahiran di wilayah (ius soli).",
      fieldReality: "Diterbitkan bersama pendirian HCS (1908) untuk membendung pengaruh Tiong Hoa Hwee Koan (THHK, 1900) dan nasionalisme Tiongkok, namun tanpa memberikan hak hukum yang setara penuh dengan warga golongan Europeanen (Somers, 1965; Williams, 1960).",
      severity: "Sedang",
    },
  ] as LawRule[],
  timeline: [
    {
      id: "tl-faxian-860",
      year: "Abad V – 860",
      title: "Kronik Faxian (Foguo Ji) & Jabatan Juru Cina dalam Prasasti Kencana",
      badge: "Akar Maritim Kuno",
      shortDesc: "Catatan peziarah Buddha Faxian (abad ke-5) membuktikan aktifnya jalur laut Tiongkok–Jawa, disusul Prasasti Kencana (860 M) yang mencatat jabatan pengurus pedagang asing (Juru Cina).",
      fullDesc: [
        "Hubungan niaga antara daratan Tiongkok dan kepulauan Nusantara telah terjalin secara terstruktur sejak awal Masehi melalui Jalur Sutra Maritim.",
        "Dalam kronik Foguo Ji (Catatan Negeri-Negeri Buddha) abad ke-5, peziarah Faxian mencatat bahwa Jawa telah menjadi titik singgah dan bersandar kapal-kapal dalam rute maritim internasional.",
        "Memasuki era Jawa Kuno tahun 860 M, Prasasti Kencana mencatat keberadaan jabatan khusus pengurus orang asing yang disebut Juru Cina—bukti bahwa pedagang Tionghoa telah terintegrasi ke dalam administrasi kerajaan lokal."
      ],
      impactPoints: [
        "Membuktikan keterlibatan ekonomi Tionghoa berakar lebih dari satu milenium sebelum kedatangan bangsa Eropa.",
        "Meletakkan dasar diplomasi niaga dan administrasi pelabuhan lintas budaya di Jawa."
      ],
      historicalFigures: ["Faxian (Peziarah Buddha Abad ke-5)", "Pejabat Juru Cina (Prasasti Kencana 860 M)"],
      image: {
        src: "/images/jung-maritim-kepeng.svg",
        alt: "Jalur Sutra Maritim dan Koin Kepeng",
        caption: "Jalur pelayaran jung Tiongkok dan adopsi koin tembaga kepeng di Nusantara.",
        archiveSource: "Kronik Foguo Ji (Abad V) & Prasasti Kencana (860 M)"
      }
    },
    {
      id: "tl-majapahit-1450",
      year: "1300 – 1680",
      title: "Monetisasi Koin Kepeng Majapahit, Age of Commerce & Syahbandar Cakradana",
      badge: "Revolusi Finansial",
      shortDesc: "Adopsi koin tembaga (picis/kepeng) sebagai alat tukar resmi Majapahit, tumbuhnya Pecinan Banten (1596), dan pengangkatan Kiyai Ngabehi Cakradana sebagai Syahbandar Banten.",
      fullDesc: [
        "Pada masa kejayaan Kerajaan Majapahit, koin tembaga Tiongkok berlubang persegi (uang picis atau kepeng) yang diikat per 1.000 keping diresmikan sebagai alat tukar sah, memicu revolusi finansial pertama yang menggantikan barter murni.",
        "Dalam kurun niaga 1450–1680 (Age of Commerce menurut Anthony Reid), pedagang Tionghoa menggerakkan bandar Malaka, Banten, Tuban, Gresik, Palembang, dan Makassar dengan siklus tunggu angin muson (Nov–Mar & Mei–Sep).",
        "Di Kesultanan Banten abad ke-17, tokoh Tionghoa Muslim Tantseko diberi gelar Kiyai Ngabehi Cakradana dan diangkat menjadi Syahbandar utama sekaligus arsitek benteng pertahanan pesisir, tembok Istana Surosowan, dan gudang lada."
      ],
      impactPoints: [
        "Monetisasi pasar desa dan pelabuhan di seluruh Jawa dan Sumatra.",
        "Berdirinya Pecinan Banten sejak 1596 serta peninggalan akulturasi Masjid Pacinan Tinggi."
      ],
      historicalFigures: ["Rakryan Kanuruhan (Majapahit)", "Laksamana Cheng Ho", "Kiyai Ngabehi Cakradana (Tantseko)"],
      image: {
        src: "/images/kyai-ngabehi-cakradana.jpg",
        alt: "Syahbandar Kiyai Ngabehi Cakradana dan Menara Masjid Pacinan Tinggi Banten",
        caption: "Kiyai Ngabehi Cakradana (Tantseko), Syahbandar Kesultanan Banten, dengan latar Menara Masjid Pacinan Tinggi.",
        archiveSource: "Anthony Reid · Nayati (1985) · Fauziah (2009)"
      }
    },
    {
      id: "tl-batavia-1619",
      year: 1619,
      title: "Pendirian Batavia & Pengangkatan Kapitein Souw Beng Kong",
      badge: "Kemitraan VOC",
      shortDesc: "Jan Pieterszoon Coen menarik pekerja Tionghoa dari Banten dan Tiongkok Selatan untuk membangun Batavia serta menunjuk Souw Beng Kong sebagai Kapitein der Chinezen pertama.",
      fullDesc: [
        "Ketika merebut Jayakarta dan mendirikan Batavia pada 1619, VOC menghadapi krisis tenaga kerja dan permusuhan dari Kesultanan Banten serta Mataram.",
        "Jan Pieterszoon Coen membujuk saudagar lada terkemuka di Banten, Souw Beng Kong, untuk pindah ke Batavia dan mengangkatnya sebagai Kapitein der Chinezen pertama dalam skema pemerintahan tidak langsung (indirect rule).",
        "Para opsir Tionghoa (Mayor, Kapiten, Letnan) memungut pajak kepala 1,5 real/bulan (usia 16–60 tahun), mendata imigran, dan mengadili perkara perdata adat, sementara kontraktor Tionghoa membangun benteng, kanal, ruko, pabrik bata/kapur, dan penggilingan gula Ommelanden."
      ],
      impactPoints: [
        "Populasi Tionghoa di Batavia melonjak dari ratusan jiwa pada 1619 menjadi ribuan jiwa dalam beberapa dekade.",
        "Pajak kepala Tionghoa menjadi salah satu sumber pendapatan tunai paling stabil bagi kas VOC."
      ],
      historicalFigures: ["Jan Pieterszoon Coen", "Souw Beng Kong (Kapitein der Chinezen Pertama)"],
      image: {
        src: "/images/makam-souw-beng-kong.jpg",
        alt: "Situs Makam Kapitein Souw Beng Kong di Batavia (Mangga Dua, Jakarta)",
        caption: "Situs makam bersejarah Kapitein Souw Beng Kong (1580–1644), Kapitein der Chinezen pertama di Batavia yang diangkat J.P. Coen pada 1619.",
        archiveSource: "Cagar Budaya DKI Jakarta · Blussé (1988) · Lohanda (2007)"
      }
    },
    {
      id: "tl-geger-pecinan-1740",
      year: "1740 – 1743",
      title: "Tragedi Pembantaian Batavia (1740) & Perang Geger Pecinan",
      badge: "Tragedi & Perlawanan",
      shortDesc: "Krisis gula Ommelanden dan rencana deportasi memicu pembantaian >10.000 warga Tionghoa di Batavia (Oktober 1740) serta perang aliansi Tionghoa-Jawa hingga menduduki Kartasura.",
      fullDesc: [
        "Jatuhnya harga gula dunia membuat puluhan pabrik gula di Ommelanden bangkrut dan ribuan buruh imigran (singkek) menganggur. Rencana VOC membuang warga Tionghoa tanpa izin ke Sri Lanka/Banda memicu desas-desus penenggelaman di laut.",
        "Pada Oktober 1740, atas perintah Gubernur Jenderal Adriaan Valckenier, serdadu VOC membantai lebih dari 10.000 warga Tionghoa di Batavia, membakar rumah mereka, dan memenjarakan Kapiten Nie Hoe Kong.",
        "Penyintas yang dipimpin Sepanjang (Khe Panjang) dan Singseh (Tan Sin Ko, sahabat Raden Mas Said yang berperang di Demak, Grobogan, Welahan, Kudus, Pati, Juwana, dan gugur dipenggal di Lasem tahun 1742) beraliansi dengan bangsawan Mataram dalam Perang Geger Pecinan (1740–1743), merebut benteng VOC, dan menduduki keraton Kartasura."
      ],
      impactPoints: [
        "Lahirnya aturan segregasi Pecinan di luar benteng kota agar mudah diawasi militer Belanda.",
        "Diaspora pelarian Tionghoa menumbuhkan pusat ekonomi dan budaya Peranakan di Cirebon, Brebes, Tegal, Pekalongan, Semarang, Lasem, hingga Tuban."
      ],
      historicalFigures: ["Adriaan Valckenier", "Kapiten Nie Hoe Kong", "Sepanjang (Khe Panjang)", "Singseh (Tan Sin Ko)", "Raden Mas Said"],
      image: {
        src: "/images/makam-tan-sin-ko.jpg",
        alt: "Monumen Makam Panglima Tan Sin Ko alias Singseh di Lasem (Gugur Oktober 1742)",
        caption: "Monumen Makam Panglima Tan Sin Ko alias Singseh di Lasem yang gugur pada Oktober 1742 dalam Perang Geger Pecinan (1740–1743) melawan VOC.",
        archiveSource: "Situs Sejarah Lasem · Daradjadi (2013)"
      }
    },
    {
      id: "tl-pacht-tanam-paksa",
      year: "1809 – 1870",
      title: "Sistem Pachtstelsel (Opiumpacht) & Logistik Gula Tanam Paksa",
      badge: "Fiskal & Middlemen",
      shortDesc: "Pajak candu diperkenalkan kembali (1809) dan diatur lewat ordonansi tahunan (1847), sementara pemodal Tionghoa menjadi suikercontractanten dan penguasa rantai logistik Tanam Paksa.",
      fullDesc: [
        "Untuk mengatasi keterbatasan birokrasi kolonial di pedesaan, pemerintah melelang monopoli sewa pajak (pachtstelsel) yang dimenangkan saudagar Cabang Atas—mencakup bazarpacht, pandhuispacht, zoutpacht, dan opiumpacht.",
        "Opiumpacht (diperkenalkan 1809, ordonansi kontrak tahunan 1847) dengan skema kuota wajib (tiban) dan tambahan (siram) menyumbang sekitar 18% pendapatan pemerintah Hindia Belanda pada 1886–1895 (Diehl, 1993).",
        "Selama era Tanam Paksa (1830–1870), pengusaha Tionghoa berperan sebagai kontraktor pabrik gula (suikercontractanten), menguasai armada pedati, perahu sungai, dan gudang pelabuhan (Santoso, 2025), serta menyalurkan barang impor dan kredit tunai ke desa (Rush, 1990)."
      ],
      impactPoints: [
        "Memantapkan posisi jaringan Tionghoa sebagai perantara distribusi utama (middlemen) antara pelabuhan Eropa dan desa agraris Jawa.",
        "Diberlakukannya Regeeringsreglement (1854) yang menggolongkan etnis Tionghoa sebagai Timur Asing (Vreemde Oosterlingen) di bawah Wijkenstelsel dan Passenstelsel."
      ],
      historicalFigures: ["Keluarga Be (Semarang)", "Djie Bok Hien (Madiun)", "Johannes van den Bosch"],
      image: {
        src: "/images/pacht-candu-gula.svg",
        alt: "Sistem Pacht dan Kontraktor Gula Abad ke-19",
        caption: "Monopoli sewa pajak (Opiumpacht) dan rantai logistik gula di Jawa pada abad ke-19.",
        archiveSource: "Rush (1990) · Diehl (1993) · Elson (1994)"
      }
    },
    {
      id: "tl-kongsi-deli-1880",
      year: "1822 – 1885",
      title: "Tiga Perang Kongsi Kalbar, Timah Bangka-Belitung & Koelie Ordonnantie 1880",
      badge: "Kongsi & Kuli Sinkeh",
      shortDesc: "Ekspansi kolonial di Luar Jawa menundukkan Kongsi Thaikong (1854) & Lanfang (1885), membuka Billiton Maatschappij (1860), dan mengikat kuli kontrak Deli dengan Poenale Sanctie (1880).",
      fullDesc: [
        "Di Bangka (tambang pemerintah) dan Belitung (konsesi John Loudon 1852 / Billiton Maatschappij 1860), produksi timah bertumpu sepenuhnya pada kuli tambang Tionghoa subetnis Hakka dalam sistem parit/kongsi (Heidhues, 1992).",
        "Di Kalimantan Barat, federasi otonom penambang emas Tionghoa menghadapi penaklukan Belanda dalam tiga Perang Kongsi (1822–1824, 1850–1854 mengalahkan Kongsi Thaikong di Monterado, dan Oktober 1884 – Februari 1885 menundukkan Kongsi Lanfang di Mandor).",
        "Di Sumatra Timur (Deli), perkebunan tembakau dan karet Jacob Nienhuys / Deli Maatschappij (sejak 1860-an) merekrut ratusan ribu kuli sinkeh via calo (khehtau) dari Penang, Singapura, dan Swatow di bawah payung hukum Koelie Ordonnantie (1880) beraturan pidana poenale sanctie."
      ],
      impactPoints: [
        "Berakhirnya otonomi politik kongsi emas di Kalimantan Barat dan beralihnya warga Tionghoa menjadi petani lada, karet, dan pedagang pedalaman.",
        "Eksploitasi fisik dan jerat utang candu/perjudian terhadap kelas buruh kontrak Tionghoa di perkebunan Deli (Breman, 1989; Stoler, 1985)."
      ],
      historicalFigures: ["John Loudon", "Jacob Nienhuys", "Kongsi Thaikong (Monterado)", "Kongsi Lanfang (Mandor)"],
      image: {
        src: "/images/kongsi-timah-deli.svg",
        alt: "Kongsi Tambang dan Kuli Kontrak Deli",
        caption: "Tiga Perang Kongsi Kalimantan Barat, tambang timah Bangka-Belitung, dan kuli kontrak Deli.",
        archiveSource: "Heidhues (1992, 2003) · Yuan (2000) · Breman (1989)"
      }
    },
    {
      id: "tl-thhk-wno-1900",
      year: "1900 – 1910",
      title: "Kebangkitan Pendidikan THHK (1900), HCS (1908) & UU Kekawulaan WNO (1910)",
      badge: "Kebangkitan Modern",
      shortDesc: "Berdirinya Tiong Hoa Hwee Koan (17 Maret 1900) oleh Phoa Keng Hek & Lie Kim Hok direspons Belanda dengan mendirikan HCS (1908) dan mengesahkan WNO berasaskan Ius Soli (1910).",
      fullDesc: [
        "Setelah warga Jepang diberi status setara Eropa pada 1899 sementara anak-anak Tionghoa tidak disediakan sekolah negeri, Phoa Keng Hek dan Lie Kim Hok mendirikan Tiong Hoa Hwee Koan (THHK) di Batavia pada 17 Maret 1900.",
        "THHK memurnikan ajaran Khonghucu dan membuka sekolah modern Tiong Hoa Hak Tong sejak 1901 (mengajarkan Mandarin Tjeng Im, Inggris, berhitung, dan sains secara setara bagi anak laki-laki dan perempuan) serta ruang baca politik Soos Po Sia.",
        "Khawatir kaum Peranakan dan Totok bersatu di bawah gerakan nasionalisme Sun Yat-sen, Belanda mendirikan Hollandsch-Chineesche School (HCS) pada 1908 dan mengesahkan Wet op het Nederlandsch Onderdaanschap (WNO) pada 1910 berdasarkan asas ius soli."
      ],
      impactPoints: [
        "Memicu emansipasi pendidikan modern bagi generasi muda laki-laki dan perempuan Tionghoa di seluruh Hindia Belanda.",
        "Mendorong tuntutan pencabutan sistem segregasi Wijkenstelsel dan surat jalan Passenstelsel."
      ],
      historicalFigures: ["Phoa Keng Hek", "Lie Kim Hok", "Dr. Sun Yat-sen"],
      image: {
        src: "/images/phoa-keng-hek.jpg",
        alt: "Potret Arsip Phoa Keng Hek, Presiden Pertama Tiong Hoa Hwee Koan (1900)",
        caption: "Phoa Keng Hek, Presiden pertama Tiong Hoa Hwee Koan (THHK, 17 Maret 1900) yang mempelopori kebangkitan pendidikan modern di Hindia Belanda.",
        archiveSource: "Nio Joe Lan (1940) · Somers (1965) · Williams (1960)"
      }
    },
    {
      id: "tl-pers-pti-1932",
      year: "1901 – 1932",
      title: "Pers Melayu-Tionghoa, Lagu “Indonesia Raya” (1928) & Partai Tionghoa Indonesia (1932)",
      badge: "Indonesierschap",
      shortDesc: "Tumbuhnya pers Melayu-Tionghoa (Li Po 1901, Sin Po 1910 yang mencetak perdana 'Indonesia Raya' Nov 1928) dan lahirnya tiga aliran politik: Sin Po, CHH (1928), serta PTI Liem Koen Hian (1932).",
      fullDesc: [
        "Pers Melayu-Tionghoa tumbuh pesat mulai dari Li Po di Sukabumi (1901), Perniagaan di Batavia (1903), Djawa Tengah di Semarang (1909), hingga harian Sin Po di Batavia (10 Oktober 1910 mingguan, 1 April 1912 harian), Pewarta Soerabaia, dan Sin Tit Po di Surabaya (1929).",
        "Penggunaan bahasa Melayu Pasar secara luas dalam ratusan surat kabar dan karya sastra Melayu-Tionghoa mematangkan bahasa Melayu sebagai lingua franca pergerakan nasional, tercermin dari pencetakan perdana naskah lagu 'Indonesia Raya' karya W.R. Supratman oleh harian Sin Po pada November 1928.",
        "Dinamika ini melahirkan tiga haluan politik menurut Leo Suryadinata: (1) Kelompok Sin Po (nasionalisme Tiongkok), (2) Chung Hwa Hui / CHH (1928, pimpinan Kan Hok Hoei di Volksraad), dan (3) Partai Tionghoa Indonesia / PTI (1932, pimpinan Liem Koen Hian) yang berhaluan Indonesierschap dan melebur dalam perjuangan kemerdekaan Indonesia."
      ],
      impactPoints: [
        "Mematangkan Bahasa Indonesia melalui pers dan sastra Melayu-Tionghoa.",
        "Menegaskan integrasi politik etnis Tionghoa ke dalam perjuangan kemerdekaan Indonesia melalui haluan Indonesierschap."
      ],
      historicalFigures: ["Liem Koen Hian (Ketua PTI)", "Kan Hok Hoei (Ketua CHH)", "W.R. Supratman", "Leo Suryadinata"],
      image: {
        src: "/images/liem-koen-hian.jpg",
        alt: "Potret Arsip Liem Koen Hian dan Partai Tionghoa Indonesia (PTI 1932)",
        caption: "Liem Koen Hian (1897–1952), pendiri Partai Tionghoa Indonesia (PTI, 1932) yang meneguhkan haluan Indonesierschap bersama pergerakan nasional Indonesia.",
        archiveSource: "Adam (1995) · Suryadinata (1981, 2020)"
      }
    },
  ] as TimelineEvent[],
};

export const residencyComparisonData: ResidencyComparisonItem[] = [
  {
    residency: "1. Pecinan Kesultanan & Kolonial Banten",
    islandArea: "Jawa Bagian Barat (Jalur Selat Sunda)",
    dominantCrops: "Perdagangan Lada, Bea Pelabuhan & Arsitektur Kota",
    populationInvolvement: "Mitra Dagang Sultan → Buffer Class Kolonial",
    sawahConfiscated: "Pecinan Bergeser: 1596 (Barat Laut) → 1726 (Sisi Barat)",
    landrentSystem: "Syahbandar Kesultanan → Vreemde Oosterlingen",
    plantloonPerFamily: "Masjid Pacinan Tinggi & Makam Muslim Tionghoa",
    cultuurprocenten: "Wijkenstelsel & Passenstelsel Kolonial",
    farmerWelfareStatus: "Surplus Uang",
    keyMechanism: "Sejak abad ke-16, pedagang Tionghoa menjadi pilar niaga lada Banten dan menduduki jabatan Syahbandar (Kiyai Ngabehi Cakradana). Permukiman Pecinan telah ada sejak 1596 di dekat muara sungai sebelum bergeser ke sisi barat kota pada 1726, lalu diintegrasikan ke dalam pengawasan Wijkenstelsel kolonial.",
    historiographicalRelevance: "Nayati (1985), Fauziah (2009), Fauziah & Rohman (2019), serta Wibowo et al. (2025) membuktikan bahwa Pecinan Banten dan Masjid Pacinan Tinggi lahir dari interaksi organik dan akulturasi Islam-Tionghoa jauh sebelum segregasi kolonial."
  },
  {
    residency: "2. Batavia & Koridor Pesisir Utara Jawa",
    islandArea: "Jawa (Batavia, Cirebon, Semarang, Lasem, Surabaya)",
    dominantCrops: "Opiumpacht, Bazarpacht, Pabrik Gula & Logistik",
    populationInvolvement: "Komunitas Peranakan (Baba), Cabang Atas & Singkek",
    sawahConfiscated: "Tragedi Oktober 1740 (>10.000 Tewas) & Diaspora",
    landrentSystem: "Kapitein der Chinezen (Pajak Kepala 1,5 Real)",
    plantloonPerFamily: "Opiumpacht Menyumbang ~18% APBN (1886–1895)",
    cultuurprocenten: "THHK (1900), Sin Po (1910), CHH (1928) & PTI (1932)",
    farmerWelfareStatus: "Nombok Pajak",
    keyMechanism: "Diposisikan sebagai minoritas perantara (tusschenpersoon) sejak 1619. Pasca-Geger Pecinan 1740–1743, jaringan Peranakan dan Cabang Atas menguasai lelang sewa pajak (pacht) dan rantai logistik gula Tanam Paksa, sebelum mempelopori kebangkitan pendidikan THHK (1900) dan pers Melayu-Tionghoa.",
    historiographicalRelevance: "Blussé (1988), Rush (1990), Diehl (1993), Daradjadi (2013), dan Suryadinata (1981, 2020) menyoroti ketegangan antara ketergantungan fiskal kolonial dan diskriminasi hukum yang memicu lahirnya kesadaran politik modern."
  },
  {
    residency: "3. Luar Jawa (Bangka-Belitung, Kalbar, Deli) & Cina Benteng",
    islandArea: "Sumatra, Kalimantan Barat & Tangerang",
    dominantCrops: "Timah, Emas, Lada/Karet, Tembakau Deli & Padi",
    populationInvolvement: "Kuli Kontrak Sinkeh, Kongsi Klan & Petani Akulturatif",
    sawahConfiscated: "3 Perang Kongsi Kalbar (1822–1885) & Deli",
    landrentSystem: "Koelie Ordonnantie 1880 & Poenale Sanctie",
    plantloonPerFamily: "Jerat Utang Candu, Judi & Kerja Paksa Kebun",
    cultuurprocenten: "Akulturasi Tionghoa–Sunda–Betawi (Tangerang)",
    farmerWelfareStatus: "Feodalisme & Kemiskinan",
    keyMechanism: "Membantah mitos bahwa seluruh warga Tionghoa adalah saudagar kaya: di Tangerang komunitas Cina Benteng hidup sebagai petani/pekerja berakulturasi kuat (Thresnawaty, 2015), sementara di Bangka-Belitung, Kalbar, dan Deli ratusan ribu buruh sinkeh bekerja di tambang dan kebun di bawah ancaman pidana poenale sanctie.",
    historiographicalRelevance: "Heidhues (1992, 2003), Yuan (2000), Breman (1989), dan Stoler (1985) mengungkap eksploitasi korporasi kolonial atas buruh kontrak Tionghoa serta penghancuran demokrasi klan kongsi di Kalimantan Barat."
  }
];

export const bupatiRolesData: BupatiRoleItem[] = [
  {
    id: "role-juru-cina-syahbandar",
    roleNumber: 1,
    title: "Juru Cina (860 M) & Syahbandar Kerajaan Nusantara",
    badge: "Era Pra-Kolonial",
    summary: "Sebelum kedatangan Eropa, penguasa Jawa Kuno, Majapahit, hingga Kesultanan Islam mengangkat tokoh Tionghoa sebagai pejabat resmi pengatur pelabuhan dan perdagangan internasional.",
    details: [
      "Prasasti Kencana (860 M): Mencatat jabatan khusus pengurus pedagang asing dengan sebutan Juru Cina, yang pada masa Majapahit diperluas di bawah pengawasan Rakryan Kanuruhan.",
      "Wewenang Syahbandar: Menentukan tarif pajak pelabuhan, memeriksa keaslian uang dan timbangan, menjadi penasihat ekonomi Sultan, serta menjaga keamanan bandar.",
      "Teladan Kesultanan Banten: Tantseko yang memeluk Islam dan bergelar Kiyai Ngabehi Cakradana diangkat menjadi Syahbandar utama sekaligus arsitek benteng pertahanan pesisir, tembok Istana Surosowan, dan gudang lada."
    ],
    historicalSource: "Prasasti Kencana (860 M); Fauziah, S. (2009). Peran orang Cina dalam perekonomian Kesultanan Islam Banten abad XVI–XVIII. Al Qalam, 26(3)."
  },
  {
    id: "role-kapitein-chinezen",
    roleNumber: 2,
    title: "Institusi Kapitein der Chinezen (Mayor, Kapiten, Letnan)",
    badge: "Indirect Rule VOC",
    summary: "Sejak 1619 di Batavia, VOC menerapkan pemerintahan tidak langsung dengan menunjuk pemuka Tionghoa sebagai penghubung birokrasi antara kompeni dan warga Pecinan.",
    details: [
      "Pengangkatan Pertama (1619): Jan Pieterszoon Coen menunjuk saudagar lada berpengaruh asal Banten, Souw Beng Kong, sebagai Kapitein der Chinezen pertama di Batavia.",
      "Pemungutan Pajak Kepala (Hoofdgeld): Mewajibkan setiap pria Tionghoa dewasa usia 16–60 tahun membayar 1,5 real/bulan sebagai kompensasi bebas wajib militer/rodi benteng.",
      "Administrasi & Peradilan Internal: Mencatat setiap imigran baru dari kapal jung, menerbitkan surat izin tinggal, menjaga ketertiban Pecinan, dan menyelesaikan perkara perdata adat/warisan/utang tanpa membebani pengadilan Belanda."
    ],
    historicalSource: "Blussé, L. (1988). Persekutuan Aneh; Lohanda, M. (2007). Sejarah Para Pembesar Mengatur Batavia."
  },
  {
    id: "role-cabang-atas-pacht",
    roleNumber: 3,
    title: "Saudagar Cabang Atas & Pemegang Monopoli Pacht",
    badge: "Elite Ekonomi Abad XIX",
    summary: "Kalangan elite bisnis Peranakan memenangkan lelang sewa pajak negara (pachtstelsel) dan mengendalikan jaringan distribusi antara pelabuhan Eropa dan pedesaan Jawa.",
    details: [
      "Monopoli Sewa Pajak: Mengelola pajak pasar (bazarpacht), gerbang tol, pegadaian (pandhuispacht), garam (zoutpacht), hingga candu (opiumpacht) seperti keluarga Be di Semarang dan Djie Bok Hien di Madiun.",
      "Hak Istimewa Mobilitas Desa: Staf pemegang pacht diizinkan keluar-masuk pedesaan di tengah berlakunya Passenstelsel bagi warga Tionghoa biasa.",
      "Sirkulasi Komoditas Dua Arah: Menyalurkan tekstil impor, besi, minyak tanah, garam, dan kredit tunai ke petani, sekaligus membeli beras hasil bumi desa untuk kota."
    ],
    historicalSource: "Rush, J. R. (1990). Opium to Java; Diehl, F. W. (1993); Sari (2022)."
  },
  {
    id: "role-peranakan-benteng",
    roleNumber: 4,
    title: "Komunitas Tionghoa Peranakan (Baba) & Cina Benteng",
    badge: "Akulturasi Nusantara",
    summary: "Keturunan imigran terdahulu yang menetap berabad-abad dan menikah campur dengan perempuan lokal, melahirkan kebudayaan hibrida yang berakar kuat di tanah Nusantara.",
    details: [
      "Bahasa & Busana Hibrida: Tidak lagi memakai bahasa dialek Tiongkok, melainkan berbahasa ibu Melayu-Tionghoa dan bahasa daerah (Jawa, Sunda, Betawi), mengenakan sarung-kebaya encim, serta mengembangkan batik pesisiran dan kuliner peranakan.",
      "Komunitas Cina Benteng di Tangerang: Mengalami akulturasi mendalam antara unsur Tionghoa, Sunda, dan Betawi dengan sejarah dan lokasi yang berbeda dari komunitas Pecinan Banten Lama (Thresnawaty, 2015).",
      "Jejak Islam-Tionghoa di Banten: Pembangunan Masjid Pacinan Tinggi dengan menara berarsitektur Tionghoa dan kompleks makam Tionghoa Muslim (Fauziah & Rohman, 2019)."
    ],
    historicalSource: "Suryadinata, L. (2020); Thresnawaty, E. (2015); Fauziah, S., & Rohman, M. (2019)."
  },
  {
    id: "role-totok-sinkeh-reformis",
    roleNumber: 5,
    title: "Komunitas Totok (Sinkeh), Kuli Kontrak & Pelopor Pergerakan",
    badge: "Imigrasi Baru & Emansipasi",
    summary: "Gelombang imigran akhir abad ke-19 (pasca kapal uap dan pelonggaran emigrasi perempuan) serta kaum intelektual pembaru yang menggerakkan pendidikan dan pers modern.",
    details: [
      "Kaum Totok (Sinkeh): Berbicara dalam dialek Hokkien, Hakka, Kanton, Hainan, atau Mandarin, mempertahankan tradisi Tiongkok daratan, dan memiliki ikatan kuat dengan gerakan Sun Yat-sen serta Revolusi Xinhai 1911.",
      "Kelas Buruh Luar Jawa: Ratusan ribu sinkeh asal Fujian dan Guangdong bekerja sebagai kuli parit timah Bangka-Belitung dan kuli kontrak perkebunan Deli di bawah ancaman pidana poenale sanctie.",
      "Transformasi Pendidikan & Politik: Interaksi Peranakan dan Totok melahirkan Tiong Hoa Hwee Koan (1900), pers Melayu-Tionghoa, hingga Partai Tionghoa Indonesia (1932) yang berhaluan Indonesierschap."
    ],
    historicalSource: "Williams, M. C. (1960); Somers, M. F. (1965); Suryadinata, L. (1981); Breman, J. (1989)."
  }
];

export const preangerBlueprintData: PreangerBlueprintElement[] = [
  {
    id: "diff-origins",
    elementNumber: 1,
    title: "Asal-Usul Demografis & Sejarah Kedatangan",
    preangerstelselOrigin: "Tionghoa Peranakan (Baba): Keturunan imigran terdahulu yang telah menetap berabad-abad di Nusantara dan menikah campur dengan perempuan lokal akibat larangan emigrasi perempuan pada masa Dinasti Qing.",
    cultuurstelselAdoption: "Tionghoa Totok (Sinkeh): Gelombang imigran baru sejak akhir abad ke-19 yang dipicu membaiknya transportasi kapal uap dan pelonggaran aturan emigrasi (termasuk masuknya perempuan Tionghoa).",
    significance: "Melahirkan dualisme struktur internal masyarakat Tionghoa Hindia Belanda pada pergantian abad ke-20 (Suryadinata, 2020; Somers, 1965)."
  },
  {
    id: "diff-language-culture",
    elementNumber: 2,
    title: "Bahasa Ibu, Busana & Ekspresi Kebudayaan",
    preangerstelselOrigin: "Tionghoa Peranakan (Baba): Tidak lagi menguasai dialek Tiongkok; memakai bahasa Melayu-Tionghoa serta bahasa daerah (Jawa, Sunda, Betawi), berbusana sarung-kebaya encim, dan mengembangkan batik pesisiran, sastra, serta kuliner hibrida.",
    cultuurstelselAdoption: "Tionghoa Totok (Sinkeh): Berbicara dalam bahasa dialek asal (Hokkien, Hakka, Kanton, Hainan) maupun bahasa Mandarin, serta mempertahankan adat dan tradisi Tiongkok daratan secara murni.",
    significance: "Meskipun berbeda latar budaya, kedua kelompok saling berinteraksi dan bersama-sama mendorong modernisasi pendidikan dan organisasi sosial."
  },
  {
    id: "diff-economic-role",
    elementNumber: 3,
    title: "Basis Aktivitas Ekonomi di Jawa & Luar Jawa",
    preangerstelselOrigin: "Tionghoa Peranakan (Baba): Mendominasi jaringan perdagangan perantara di Jawa, elite Cabang Atas pemegang lelang pacht, kontraktor gula, serta komunitas agraris akulturatif seperti Cina Benteng di Tangerang.",
    cultuurstelselAdoption: "Tionghoa Totok (Sinkeh): Mengisi kebutuhan buruh/kuli kontrak tambang timah Bangka-Belitung, tambang emas Kalimantan Barat, dan perkebunan Deli, sekaligus pedagang eceran dan perajin baru di kota-kota.",
    significance: "Membuktikan bahwa kondisi ekonomi masyarakat Tionghoa tidak seragam dalam satu tingkatan kelas sosial (Fauziah, 2009; Heidhues, 1992)."
  },
  {
    id: "diff-political-orientation",
    elementNumber: 4,
    title: "Orientasi Pendidikan & Haluan Politik Abad ke-20",
    preangerstelselOrigin: "Tionghoa Peranakan (Baba): Memelopori berdirinya THHK (Phoa Keng Hek & Lie Kim Hok, 1900), pers Melayu-Tionghoa, serta terbagi ke dalam tiga aliran politik: Sin Po, Chung Hwa Hui (1928), dan Partai Tionghoa Indonesia (1932, Indonesierschap).",
    cultuurstelselAdoption: "Tionghoa Totok (Sinkeh): Memiliki ikatan emosional dan politik yang kuat terhadap gerakan nasionalisme Dr. Sun Yat-sen, Revolusi Xinhai 1911, sekolah berbahasa Mandarin, dan haluan nasionalis Tiongkok.",
    significance: "Kekhawatiran Belanda bahwa Peranakan dan Totok akan bersatu melawan kolonialisme mendorong didirikannya HCS (1908) dan pengesahan UU Kekawulaan WNO (1910) (Williams, 1960; Suryadinata, 1981)."
  }
];

export const vocExpansionData: VocExpansionMechanism[] = [
  {
    id: "banten-1-nayati",
    mechanismNumber: 1,
    title: "Pergeseran Lokasi Pecinan Kota Banten (1596 – 1726)",
    badge: "Arkeologi Ruang (Nayati, 1985)",
    description: "Berdasarkan pengamatan peta kuno Kota Banten oleh Widya Nayati (1985), lokasi permukiman orang Cina mengalami beberapa kali pergeseran antara abad ke-16 hingga ke-19. Pada 1596, permukiman berada di luar sudut barat laut kota dekat muara sungai dan Laut Jawa, lalu pada sekitar 1726 bergeser ke bagian tengah sisi barat Kota Banten.",
    longTermImpact: "Menunjukkan bahwa Pecinan telah menjadi bagian organik dari tata ruang dan ekonomi Banten jauh sebelum kebijakan Wijkenstelsel kolonial diberlakukan."
  },
  {
    id: "banten-2-cakradana",
    mechanismNumber: 2,
    title: "Syahbandar Kiyai Ngabehi Cakradana & Arsitektur Istana Surosowan",
    badge: "Birokrasi Kesultanan (Fauziah, 2009)",
    description: "Pada abad ke-17 di Kesultanan Banten, saudagar Tionghoa bernama Tantseko memeluk Islam, diberi gelar Kiyai Ngabehi Cakradana, dan diangkat menjadi Syahbandar utama. Ia mengatur keluar-masuknya perdagangan lada internasional, menentukan tarif pajak pelabuhan, mengecek keaslian uang/timbangan, serta mengawasi pembangunan benteng pertahanan pesisir, tembok dinding Istana Surosowan, dan gudang lada.",
    longTermImpact: "Membuktikan keterbukaan dan integrasi tingkat tinggi antara elit Tionghoa Muslim dengan struktur kekuasaan Kesultanan Islam Nusantara."
  },
  {
    id: "banten-3-masjid-pacinan",
    mechanismNumber: 3,
    title: "Masjid Pacinan Tinggi & Makam Tionghoa Muslim",
    badge: "Warisan Islam-Tionghoa (2019)",
    description: "Peninggalan fisik yang membuktikan eratnya hubungan masyarakat Tionghoa dengan kehidupan sosial-keagamaan Banten adalah berdirinya Masjid Pacinan Tinggi. Pengaruh arsitektur Tionghoa pada menaranya serta keberadaan kompleks makam Tionghoa Muslim di sekitarnya menjadi bukti autentik interaksi budaya dan keagamaan antara komunitas Tionghoa dengan masyarakat Muslim Banten.",
    longTermImpact: "Menegaskan bahwa kawasan Pecinan Banten berfungsi sebagai ruang temu lintas budaya, agama, dan niaga (Fauziah & Rohman, 2019)."
  },
  {
    id: "banten-4-cina-benteng",
    mechanismNumber: 4,
    title: "Akulturasi Masyarakat Cina Benteng di Tangerang",
    badge: "Sosiokultural (Thresnawaty, 2015)",
    description: "Di wilayah Tangerang, proses akulturasi tampak jelas pada komunitas Cina Benteng yang kehidupan sosial-budayanya dipengaruhi unsur Tionghoa, Sunda, dan Betawi. Penggunaan bahasa lokal dan pemeliharaan tradisi leluhur memperlihatkan identitas yang tumbuh melalui hubungan panjang dengan lingkungan setempat.",
    longTermImpact: "Komunitas Cina Benteng di Tangerang memiliki lokasi dan lintasan sejarah yang khas serta perlu dibedakan dari komunitas Pecinan Banten Lama (Thresnawaty, 2015)."
  },
  {
    id: "banten-5-toponimi",
    mechanismNumber: 5,
    title: "Toponimi Multietnis Kawasan Banten Lama",
    badge: "Multikulturalisme (Wibowo et al., 2025)",
    description: "Kawasan Banten Lama menyimpan jejak interaksi erat antar-etnis Nusantara dan mancanegara melalui nama-nama permukiman (toponimi) bersejarah seperti Pecinan, Pekojan, Kampung Bugis, Dermayon, dan Kebalen.",
    longTermImpact: "Menegaskan kontribusi masyarakat Tionghoa bersama berbagai kelompok etnis lain dalam membentuk sejarah sosial, ekonomi, dan kebudayaan Banten (Wibowo et al., 2025)."
  }
];

export const impactData = {
  sectionTitle: "Pergulatan Sejarah, Tokoh Penggerak & Refleksi Lintas Zaman",
  sectionSubtitle: "Dari tragedi Geger Pecinan 1740 dan Perang Kongsi hingga kebangkitan THHK 1900, pers Sin Po 1928, PTI 1932, serta sintesis sejarah masyarakat Tionghoa di Nusantara",
  famineCases: [
    {
      region: "Batavia & Ommelanden (Chinezenmoord)",
      years: "Oktober 1740",
      cause: "Krisis anjloknya harga gula dunia, bangkrutnya puluhan pabrik gula Ommelanden, pengangguran buruh singkek, rencana deportasi paksa ke Sri Lanka/Banda, dan perintah militer Gubernur Jenderal Adriaan Valckenier.",
      victimCount: "> 10.000 Jiwa Etnis Tionghoa Tewas",
      description: "Sepanjang bulan Oktober 1740, serdadu VOC membantai ribuan warga Tionghoa di dalam kota Batavia secara membabi-buta, merampok dan membakar rumah mereka rata dengan tanah, serta menangkap Kapiten Nie Hoe Kong. Tragedi ini menyulut Perang Geger Pecinan (1740–1743) di seluruh Jawa dan melahirkan kebijakan segregasi Pecinan di luar benteng kota (Daradjadi, 2013).",
    },
    {
      region: "Monterado & Mandor (Kalimantan Barat)",
      years: "1822–1824, 1850–1854 & 1884–1885",
      cause: "Ekspansi militer kolonial Belanda untuk menghancurkan otonomi politik-ekonomi federasi penambang emas Tionghoa berbasis klan (kongsi) di Kalimantan Barat.",
      victimCount: "Runtuhnya Otonomi Kongsi Thaikong & Lanfang",
      description: "Dalam tiga Perang Kongsi, Belanda menaklukkan Kongsi Thaikong di Monterado pada ekspedisi 1850–1854 dan menundukkan Kongsi Lanfang di Mandor lewat pemberontakan Mandor (Oktober 1884 – Februari 1885). Setelah kekalahan itu, warga Tionghoa beralih menjadi petani lada, karet, dan pedagang pedalaman (Yuan, 2000; Heidhues, 2003).",
    },
    {
      region: "Perkebunan Deli (Sumatra Timur) & Bangka-Belitung",
      years: "1860-an – 1930 (Koelie Ordonnantie 1880)",
      cause: "Perekrutan masif kuli kontrak (sinkeh) asal Fujian dan Guangdong melalui jaringan calo (khehtau) untuk perkebunan tembakau/karet Deli dan tambang timah di bawah ancaman pidana poenale sanctie.",
      victimCount: "Eksploitasi Fisik, Hukuman Pidana & Jerat Utang",
      description: "Melalui Koelie Ordonnantie (1880) yang memuat aturan poenale sanctie, buruh Tionghoa yang melarikan diri atau melanggar kontrak diancam hukuman pidana dan kerja paksa, sembari terjerat utang permanen akibat penyediaan candu dan perjudian di lingkungan perkebunan (Breman, 1989; Stoler, 1985; Ramayanti & Wisnu, 2018).",
    },
  ] as FamineCase[],
  negativeImpacts: [
    {
      title: "Stratifikasi Hukum Kelas Dua (Vreemde Oosterlingen)",
      description: "Melalui Regeeringsreglement, etnis Tionghoa digolongkan sebagai Timur Asing yang tidak setara secara hukum dengan golongan Eropa (Europeanen) dan ditempatkan sebagai kelas penyangga (buffer class) yang rentan terhadap prasangka sosial (Fauziah, 2009).",
    },
    {
      title: "Segregasi Ruang (Wijkenstelsel) & Izin Jalan (Passenstelsel)",
      description: "Pemerintah kolonial membatasi kemerdekaan bermukim di kawasan Pecinan terawasi serta mewajibkan surat izin jalan bagi warga Tionghoa yang hendak bepergian atau berniaga antar-daerah (Nayati, 1985; Rush, 1990).",
    },
    {
      title: "Kekerasan Militer & Pembantaian Geger Pecinan 1740",
      description: "Ketika terjadi krisis ekonomi gula di Ommelanden, aparat VOC merespons pengangguran buruh Tionghoa dengan rencana deportasi paksa dan pembantaian lebih dari 10.000 jiwa di Batavia pada Oktober 1740 (Daradjadi, 2013).",
    },
    {
      title: "Eksploitasi Kuli Kontrak (Poenale Sanctie) & Jerat Candu",
      description: "Ratusan ribu buruh imigran (sinkeh) di perkebunan Deli dan tambang Luar Jawa mengalami eksploitasi fisik berat di bawah ancaman pidana Koelie Ordonnantie 1880 serta jerat utang candu dan perjudian (Breman, 1989; Stoler, 1985).",
    },
    {
      title: "Pengabaian Pendidikan Negeri & Politik Pecah-Belah",
      description: "Hingga tahun 1900 pemerintah kolonial tidak menyediakan sekolah negeri bagi anak-anak Tionghoa, lalu menggunakan HCS (1908) dan UU Kekawulaan WNO (1910) untuk membendung gerakan kesadaran nasional mereka (Somers, 1965; Williams, 1960).",
    },
  ],
  positiveImpacts: [
    {
      title: "Revolusi Finansial Koin Kepeng & Monetisasi Pasar Nusantara",
      description: "Peredaran koin tembaga Tiongkok (uang picis/kepeng) yang diadopsi Majapahit membebaskan ekonomi Nusantara dari kerumitan barter murni dan menghubungkan pasar desa pedalaman dengan perdagangan maritim internasional (Reid, 1993; Dahana, 2000).",
    },
    {
      title: "Pembangunan Infrastruktur Kota, Pelabuhan & Industri Gula",
      description: "Sejak era Kesultanan Banten (Syahbandar Cakradana membangun benteng & Istana Surosowan) hingga Batavia VOC (kanal, benteng, pabrik bata/kapur, dan penggilingan gula), keahlian teknis Tionghoa menjadi fondasi fisik perkotaan Nusantara.",
    },
    {
      title: "Pelopor Pendidikan Modern Setara Gender (THHK 1900)",
      description: "Berdirinya Tiong Hoa Hwee Koan (17 Maret 1900) dan sekolah Tiong Hoa Hak Tong (1901) membuka akses pendidikan modern (Mandarin, Inggris, berhitung, sains) secara setara bagi anak laki-laki maupun perempuan (Williams, 1960; Nio, 1940).",
    },
    {
      title: "Pers Melayu-Tionghoa & Pematangan Bahasa Indonesia",
      description: "Ratusan surat kabar dan karya sastra Melayu-Tionghoa (Li Po, Perniagaan, Sin Po, Sin Tit Po) mematangkan bahasa Melayu Pasar menjadi lingua franca pergerakan nasional, termasuk mencetak perdana lagu 'Indonesia Raya' pada November 1928 (Adam, 1995).",
    },
    {
      title: "Akulturasi Budaya Nusantara & Haluan Indonesierschap (PTI 1932)",
      description: "Melahirkan warisan budaya hibrida yang kaya (Masjid Pacinan Tinggi Banten, batik pesisiran, sarung-kebaya encim, budaya Cina Benteng Tangerang) serta perjuangan politik Partai Tionghoa Indonesia (Liem Koen Hian, 1932) bersama kaum pergerakan bumiputera.",
    },
  ],
  historicalCritics: [
    {
      id: "tokoh-cakradana",
      name: "Kiyai Ngabehi Cakradana (Tantseko)",
      role: "Syahbandar Utama & Arsitek Kesultanan Banten",
      period: "Abad ke-17",
      category: "Perintis Awal",
      keyContribution: "Tokoh Tionghoa Muslim kepercayaan Sultan Banten yang mengatur perdagangan lada internasional, menentukan tarif pajak pelabuhan, memeriksa keaslian uang dan timbangan, serta mengawasi pembangunan benteng pertahanan pesisir, tembok dinding kompleks Istana Surosowan, dan gudang penampungan lada.",
      workOrCitation: "Fauziah (2009) · Nayati (1985) · Fauziah & Rohman (2019)",
      impactNote: "Simbol integrasi harmonis masyarakat Tionghoa dalam birokrasi, pertahanan, dan kehidupan Islam Kesultanan Nusantara pra-kolonial.",
      image: {
        src: "/images/kyai-ngabehi-cakradana.jpg",
        alt: "Potret Kiyai Ngabehi Cakradana dan Menara Masjid Pacinan Tinggi Kesultanan Banten",
        caption: "Kiyai Ngabehi Cakradana (Tantseko), Syahbandar utama dan arsitek benteng Istana Surosowan di Kesultanan Banten abad ke-17.",
        archiveSource: "Fauziah (2009) · Nayati (1985) · Fauziah & Rohman (2019)"
      }
    },
    {
      id: "tokoh-souw-beng-kong",
      name: "Souw Beng Kong",
      role: "Kapitein der Chinezen Pertama di Batavia",
      period: "1619 – Abad ke-17",
      category: "Pakar Ekonomi & Agraria",
      keyContribution: "Saudagar lada kaya raya dan berpengaruh di Banten yang dibujuk Jan Pieterszoon Coen pindah ke Batavia pada 1619 dan diangkat menjadi Kapitein der Chinezen pertama. Ia meletakkan dasar pemerintahan tidak langsung (indirect rule), pengelolaan pajak kepala 1,5 real/bulan, pencatatan imigran, dan peradilan perdata komunitas Tionghoa.",
      workOrCitation: "Blussé (1988) · Lohanda (2007) · Arsip VOC Batavia (1619)",
      impactNote: "Menjadikan komunitas Tionghoa tulang punggung pembangunan fisik, logistik, dan fiskal kota Batavia sejak awal berdirinya.",
      image: {
        src: "/images/makam-souw-beng-kong.jpg",
        alt: "Situs Cagar Budaya Makam Kapitein Souw Beng Kong di Mangga Dua, Jakarta",
        caption: "Situs makam Kapitein Souw Beng Kong (1580–1644), Kapitein der Chinezen pertama di Batavia (1619) pada masa Gubernur Jenderal J.P. Coen.",
        archiveSource: "Cagar Budaya DKI Jakarta · Blussé (1988) · Lohanda (2007)"
      }
    },
    {
      id: "tokoh-khe-panjang",
      name: "Sepanjang (Khe Panjang / Oei Panko)",
      role: "Panglima Laskar Tionghoa dalam Perang Geger Pecinan",
      period: "1740 – 1743",
      category: "Investigasi Lapangan",
      keyContribution: "Memimpin para pejuang Tionghoa yang selamat dari pembantaian Oktober 1740 di Batavia bergerak ke timur Pulau Jawa dan menjalin aliansi militer strategis dengan para bangsawan Kerajaan Mataram. Pasukan gabungan Tionghoa-Jawa ini merebut benteng-benteng VOC di pesisir utara dan sempat menduduki istana kerajaan di Kartasura.",
      workOrCitation: "Daradjadi (2013), Geger Pacinan 1740–1743: Persekutuan Tionghoa-Jawa Melawan VOC",
      impactNote: "Perang gerilya lintas-etnis terbesar abad ke-18 yang membuat VOC nyaris bangkrut dan melahirkan diaspora Pecinan di sepanjang pesisir utara Jawa.",
      image: {
        src: "/images/khe-panjang.jpg",
        alt: "Potret Patung Sepanjang (Khe Panjang), Panglima Perang Geger Pecinan 1740–1743",
        caption: "Sepanjang (Khe Panjang / Oei Panko), panglima laskar Tionghoa dalam aliansi militer Tionghoa-Jawa melawan VOC (1740–1743).",
        archiveSource: "Daradjadi (2013)"
      }
    },
    {
      id: "tokoh-tan-sin-ko",
      name: "Tan Sin Ko (Singseh)",
      role: "Panglima Laskar Tionghoa-Jawa & Pahlawan Perang Kuning Lasem",
      period: "1740 – Gugur Oktober 1742",
      category: "Investigasi Lapangan",
      keyContribution: "Panglima perang laskar Tionghoa-Jawa sekaligus sahabat seperjuangan Raden Mas Said (Pangeran Sambernyawa) dalam Perang Geger Pecinan / Perang Kuning (1740–1743) melawan VOC. Ia memimpin pertempuran sengit di Demak, Grobogan, Welahan, Kudus, Pati, Juwana, hingga Lasem sebelum gugur dipenggal di Lasem pada Oktober 1742.",
      workOrCitation: "Daradjadi (2013) · Monumen Makam Tan Sin Ko alias Singseh di Lasem",
      impactNote: "Simbol pengorbanan tertinggi dan persaudaraan darah prajurit Tionghoa dan Jawa dalam melawan penjajahan VOC di pesisir utara Jawa.",
      image: {
        src: "/images/makam-tan-sin-ko.jpg",
        alt: "Monumen Makam Tan Sin Ko alias Singseh di Lasem (Gugur Oktober 1742)",
        caption: "Monumen Makam Tan Sin Ko alias Singseh di Lasem—Panglima Laskar Tionghoa/Jawa dan sahabat Raden Mas Said yang bertempur di Demak, Grobogan, Welahan, Kudus, Pati, Juwana, hingga gugur di Lasem pada Oktober 1742.",
        archiveSource: "Situs Sejarah Lasem · Daradjadi (2013)"
      }
    },
    {
      id: "tokoh-phoa-lie",
      name: "Phoa Keng Hek",
      role: "Presiden Pertama Tiong Hoa Hwee Koan (THHK 1900)",
      period: "1857 – 1937 (THHK 17 Maret 1900)",
      category: "Sastrawan & Moral",
      keyContribution: "Memimpin pendirian organisasi pembaru Tiong Hoa Hwee Koan (THHK) di Batavia pada 17 Maret 1900 sebagai Presiden pertama. Ia mengampanyekan pemurnian ajaran Konfusianisme (Khonghucu) dari adat takhayul yang boros serta mendirikan jaringan sekolah modern Tiong Hoa Hak Tong sejak 1901 yang membuka pendidikan setara bagi anak laki-laki dan perempuan.",
      workOrCitation: "Nio Joe Lan (1940) · Williams (1960) · Somers (1965)",
      impactNote: "Memicu kebangkitan sosial-pendidikan modern Tionghoa di seluruh Hindia Belanda dan memaksa pemerintah kolonial mendirikan HCS pada 1908.",
      image: {
        src: "/images/phoa-keng-hek.jpg",
        alt: "Potret Arsip Phoa Keng Hek, Presiden Pertama Tiong Hoa Hwee Koan (THHK 1900)",
        caption: "Phoa Keng Hek (1857–1937), Presiden pertama Tiong Hoa Hwee Koan (THHK, 17 Maret 1900) dan pelopor gerakan pendidikan modern Tionghoa di Hindia Belanda.",
        archiveSource: "Nio Joe Lan (1940), Riwajat 40 Taon T.H.H.K. Batavia · Williams (1960)"
      }
    },
    {
      id: "tokoh-lie-kim-hok",
      name: "Lie Kim Hok",
      role: "Bapak Sastra Melayu-Tionghoa & Pendiri THHK (1900)",
      period: "1853 – 1912 (THHK 1900)",
      category: "Sastrawan & Moral",
      keyContribution: "Sastrawan, pendidik, dan pembaru sosial kelahiran Bogor yang menyusun buku tata bahasa 'Melajoe Betawi' (1884), merintis pers serta kesusastraan Melayu-Tionghoa, dan bersama Phoa Keng Hek mendirikan Tiong Hoa Hwee Koan (THHK) pada 17 Maret 1900 untuk memajukan pendidikan modern lintas gender serta pembaruan adat masyarakat Tionghoa.",
      workOrCitation: "Adam (1995) · Nio Joe Lan (1940) · Suryadinata (1981, 2020)",
      impactNote: "Meletakkan fondasi tata bahasa Melayu Pasar tertulis yang kelak mematangkan Bahasa Indonesia sebagai lingua franca pergerakan nasional.",
      image: {
        src: "/images/lie-kim-hok.jpg",
        alt: "Potret Arsip Lie Kim Hok (1853–1912), Bapak Sastra Melayu-Tionghoa dan Pendiri THHK",
        caption: "Lie Kim Hok (1853–1912), pelopor kesusastraan dan pers Melayu-Tionghoa sekaligus tokoh pendiri Tiong Hoa Hwee Koan (THHK, 1900).",
        archiveSource: "Adam (1995) · Nio Joe Lan (1940) · Williams (1960)"
      }
    },
    {
      id: "tokoh-kan-hok-hoei",
      name: "Kan Hok Hoei (H.H. Kan)",
      role: "Tokoh Elite Cabang Atas & Ketua Chung Hwa Hui (CHH)",
      period: "1881 – 1951 (CHH 1928)",
      category: "Parlemen & Politik",
      keyContribution: "Mewakili aliran politik kedua masyarakat Tionghoa melalui pendirian Chung Hwa Hui (CHH) pada 1928 yang didukung kalangan intelektual lulusan Belanda dan elite bisnis untuk menempuh jalur parlementer kooperatif di dalam Volksraad.",
      workOrCitation: "Suryadinata (1981, 2020) · Lohanda (2007)",
      impactNote: "Memperjuangkan pencabutan diskriminasi hukum dan penyetaraan status warga Tionghoa melalui lembaga perwakilan kolonial.",
      image: {
        src: "/images/kan-hok-hoei.jpg",
        alt: "Potret Arsip Kan Hok Hoei (H.H. Kan), Ketua Chung Hwa Hui (CHH 1928)",
        caption: "Kan Hok Hoei (H.H. Kan, 1881–1951), tokoh terkemuka Cabang Atas Batavia, anggota Volksraad, dan Ketua Chung Hwa Hui (CHH, 1928).",
        archiveSource: "KITLV / Tropenmuseum · Leo Suryadinata (1981)"
      }
    },
    {
      id: "tokoh-liem-koen-hian",
      name: "Liem Koen Hian",
      role: "Pendiri Partai Tionghoa Indonesia (PTI) & Jurnalis Pergerakan",
      period: "1897 – 1952 (PTI 1932)",
      category: "Parlemen & Politik",
      keyContribution: "Memimpin surat kabar Sin Tit Po di Surabaya (1929) dan mendirikan Partai Tionghoa Indonesia (PTI) pada 1932 yang berhaluan Indonesierschap—mengajak etnis Tionghoa menolak orientasi politik kolonial Belanda maupun nasionalisme eksklusif Tiongkok untuk melebur penuh dalam perjuangan kemerdekaan Indonesia bersama kaum pergerakan nasional bumiputera.",
      workOrCitation: "Suryadinata (1981, 2020) · Adam (1995)",
      impactNote: "Menjadi tonggak integrasi politik masyarakat Tionghoa sebagai bagian utuh dari bangsa Indonesia yang merdeka.",
      image: {
        src: "/images/liem-koen-hian.jpg",
        alt: "Potret Arsip Liem Koen Hian (1897–1952), Pendiri Partai Tionghoa Indonesia (PTI 1932)",
        caption: "Liem Koen Hian (1897–1952), pendiri Partai Tionghoa Indonesia (PTI, 1932) dan pelopor haluan Indonesierschap dalam pergerakan kemerdekaan Indonesia.",
        archiveSource: "Arsip Nasional / Leo Suryadinata (1981)"
      }
    },
  ] as HistoricalCritic[],
  reformContext: {
    title: "Refleksi Lintas Zaman: Dari Pelayar Muson & Perantara Kolonial Menuju Bagian Utuh Bangsa Indonesia",
    narrative:
      "Menengok kembali lima abad perjalanan masyarakat Tionghoa di Nusantara memperlihatkan betapa eratnya jalinan antara denyut pasar, rekayasa kekuasaan kolonial, dan ketangguhan sosial. Jauh sebelum hadirnya kekuasaan Eropa, pelayaran jung muson dan adopsi koin tembaga (kepeng) telah merajut kemitraan erat di pelabuhan-pelabuhan kerajaan Nusantara. Memasuki masa kolonial, meskipun pemerintah Hindia Belanda sangat bergantung pada modal, jaringan distribusi pedesaan, pajak pacht, serta keringat pekerja Tionghoa di sektor gula, tambang, dan perkebunan, ketergantungan itu justru dibalas dengan tembok segregasi Wijkenstelsel, surat jalan Passenstelsel, dan penggolongan hukum kelas dua sebagai Timur Asing (Vreemde Oosterlingen). Namun sejarah membuktikan bahwa mereka tidak pernah pasif: lewat sekolah modern Tiong Hoa Hwee Koan (1900), pers Melayu-Tionghoa yang mematangkan Bahasa Indonesia dan menyiarkan 'Indonesia Raya' (1928), akulturasi budaya yang hangat di Banten maupun Tangerang, hingga haluan Indonesierschap Partai Tionghoa Indonesia (1932), masyarakat Tionghoa ikut menempuh jalan panjang menuju Indonesia merdeka.",
  },
};

export const peasantResistanceData: PeasantResistancePoint[] = [
  {
    id: "res-batavia-1740",
    category: "Perlawanan Bersenjata",
    title: "Angkat Senjata di Luar Tembok Kota Batavia",
    locationOrYear: "Batavia & Ommelanden · Oktober 1740",
    description: "Ketika VOC mengeluarkan kebijakan membuang warga Tionghoa tanpa surat izin resmi ke Sri Lanka atau Kepulauan Banda dan beredar desas-desus bahwa mereka akan ditenggelamkan di tengah laut, kelompok buruh Tionghoa di luar tembok kota mengangkat senjata melawan kompeni.",
    historicalImpact: "Gubernur Jenderal Adriaan Valckenier yang panik mengeluarkan perintah militer yang berujung pada pembantaian >10.000 warga Tionghoa di dalam kota Batavia (Daradjadi, 2013)."
  },
  {
    id: "res-kartasura-1743",
    category: "Perlawanan Bersenjata",
    title: "Perang Geger Pecinan & Aliansi Militer Tionghoa-Jawa",
    locationOrYear: "Pesisir Utara Jawa & Kartasura · 1740–1743",
    description: "Para pejuang Tionghoa yang selamat dari pembantaian Batavia bergerak ke timur dipimpin oleh Sepanjang (Khe Panjang) dan Singseh (Tan Sin Ko). Mereka menjalin aliansi militer dengan para bangsawan Kerajaan Mataram untuk melawan musuh bersama (VOC).",
    historicalImpact: "Pasukan gabungan Tionghoa-Jawa merebut benteng-benteng VOC di pesisir utara, menduduki istana Kartasura, dan membuat VOC nyaris bangkrut (Daradjadi, 2013)."
  },
  {
    id: "res-thaikong-1854",
    category: "Perlawanan Bersenjata",
    title: "Perang Kongsi Monterado: Pertahanan Federasi Kongsi Thaikong",
    locationOrYear: "Monterado, Kalimantan Barat · 1822–1824 & 1850–1854",
    description: "Para penambang emas Tionghoa yang sejak abad ke-18 membentuk federasi otonom berbasis klan (kongsi) mengangkat senjata mempertahankan kemandirian wilayah dan tata kelola tambang mereka dari intervensi militer kolonial Belanda.",
    historicalImpact: "Memaksa Belanda mengerahkan ekspedisi militer berkepanjangan pada 1822–1824 dan 1850–1854 sebelum dapat menaklukkan Kongsi Thaikong di Monterado (Yuan, 2000; Heidhues, 2003)."
  },
  {
    id: "res-lanfang-1885",
    category: "Perlawanan Bersenjata",
    title: "Pemberontakan Mandor & Pertahanan Akhir Kongsi Lanfang",
    locationOrYear: "Mandor, Kalimantan Barat · Oktober 1884 – Februari 1885",
    description: "Ketika Belanda berupaya membubarkan paksa Kongsi Lanfang di Mandor—federasi otonom terakhir penambang Tionghoa di Kalimantan Barat—warga kongsi melakukan perlawanan bersenjata sengit selama berbulan-bulan.",
    historicalImpact: "Menandai berakhirnya era pemerintahan otonom kongsi di Kalimantan Barat; pasca-1885 warga Tionghoa beralih menjadi petani lada dan karet serta pedagang pedalaman (Heidhues, 2003)."
  },
  {
    id: "res-thhk-1900",
    category: "Aksi Terbuka",
    title: "Gerakan Emansipasi Pendidikan Mandiri Tiong Hoa Hwee Koan (THHK)",
    locationOrYear: "Batavia & Seluruh Hindia Belanda · 17 Maret 1900",
    description: "Menghadapi diskriminasi pemerintah Belanda yang menolak menyediakan sekolah negeri bagi anak Tionghoa (sementara warga Jepang diberi status Eropa pada 1899), Phoa Keng Hek dan Lie Kim Hok mendirikan jaringan sekolah mandiri Tiong Hoa Hak Tong dan ruang baca politik Soos Po Sia.",
    historicalImpact: "Mematahkan monopoli akses pendidikan kolonial dan memaksa Belanda mendirikan Hollandsch-Chineesche School (HCS) pada 1908 (Somers, 1965; Williams, 1960)."
  },
  {
    id: "res-pers-pti-1928",
    category: "Aksi Terbuka",
    title: "Kampanye Pers Melayu-Tionghoa & Haluan Indonesierschap",
    locationOrYear: "Batavia, Semarang & Surabaya · 1901–1932",
    description: "Melalui surat kabar Li Po (1901), Perniagaan (1903), Sin Po (1910), dan Sin Tit Po (1929), jurnalis Tionghoa secara terbuka menggugat aturan diskriminatif Wijkenstelsel dan Passenstelsel serta mendukung pergerakan kemerdekaan Indonesia.",
    historicalImpact: "Berujung pada penghapusan bertahap pembatasan pas jalan/permukiman, pencetakan perdana lagu 'Indonesia Raya' (Nov 1928), dan berdirinya Partai Tionghoa Indonesia (1932) pimpinan Liem Koen Hian (Adam, 1995; Suryadinata, 1981)."
  }
];

export const parliamentaryPoliticsData: ParliamentaryDebateItem[] = [
  {
    id: "pol-1899-1900",
    periodOrEvent: "1899 – 17 Maret 1900",
    title: "Ketimpangan Status Eropa bagi Jepang & Lahirnya THHK",
    factions: "Pembaru Peranakan (Phoa Keng Hek & Lie Kim Hok) vs Pemerintah Kolonial",
    coreDebate: "Pada 1899 pemerintah Belanda memberikan status hukum setara Eropa kepada warga Jepang, sementara masyarakat Tionghoa tetap dikurung dalam status Vreemde Oosterlingen tanpa fasilitas sekolah negeri.",
    outcomeAndImpact: "Berdirinya Tiong Hoa Hwee Koan (THHK) di Batavia pada 17 Maret 1900 dan pembukaan sekolah modern Tiong Hoa Hak Tong (1901) yang mengajarkan Mandarin (Tjeng Im), Inggris, berhitung, dan sains secara setara bagi anak laki-laki dan perempuan."
  },
  {
    id: "pol-1908-1910",
    periodOrEvent: "1908 – 1910",
    title: "Pendirian HCS (1908) & UU Kekawulaan Belanda WNO (1910)",
    factions: "Pemerintah Hindia Belanda vs Gerakan Pan-Tiongkok & Soos Po Sia",
    coreDebate: "Kekhawatiran pemerintah kolonial bahwa pesatnya sekolah THHK dan ruang baca politik Soos Po Sia akan menyatukan kaum Peranakan dan Totok di bawah panji nasionalisme Tiongkok (Sun Yat-sen) yang antikolonial.",
    outcomeAndImpact: "Belanda mendirikan Hollandsch-Chineesche School (HCS) berbahasa pengantar Belanda pada 1908 serta mengesahkan Wet op het Nederlandsch Onderdaanschap (WNO) pada 1910 yang mengklaim keturunan Tionghoa kelahiran Hindia Belanda sebagai kawula Belanda berdasarkan asas ius soli."
  },
  {
    id: "pol-pers-1901-1928",
    periodOrEvent: "1901 – November 1928",
    title: "Kebangkitan Pers Melayu-Tionghoa & Pencetakan Perdana “Indonesia Raya”",
    factions: "Li Po (1901), Perniagaan (1903), Djawa Tengah (1909), Sin Po (1910) & Sin Tit Po (1929)",
    coreDebate: "Pemanfaatan ruang publik pers berbahasa Melayu Pasar untuk menyuarakan penghapusan Wijkenstelsel dan Passenstelsel sekaligus mendebatkan arah masa depan politik masyarakat Tionghoa.",
    outcomeAndImpact: "Bahasa Melayu Pasar dalam pers Melayu-Tionghoa matang menjadi lingua franca pergerakan nasional, mencapai puncaknya saat harian Sin Po mencetak perdana naskah lagu 'Indonesia Raya' karya W.R. Supratman pada November 1928 (Adam, 1995; Suryadinata, 1981)."
  },
  {
    id: "pol-3-aliran-1910-1932",
    periodOrEvent: "1910 – 1932",
    title: "Tiga Haluan Politik Tionghoa: Sin Po, Chung Hwa Hui (1928) & PTI (1932)",
    factions: "Kelompok Sin Po · Chung Hwa Hui (Kan Hok Hoei) · Partai Tionghoa Indonesia (Liem Koen Hian)",
    coreDebate: "Perdebatan fundamental mengenai orientasi identitas politik: berorientasi ke nasionalisme Tiongkok (Sin Po), menempuh jalur kooperatif di Volksraad bersama Belanda (CHH), atau melebur dalam perjuangan kemerdekaan Indonesia (PTI).",
    outcomeAndImpact: "Berdirinya Partai Tionghoa Indonesia (PTI) pada 1932 di bawah pimpinan Liem Koen Hian dengan haluan Indonesierschap yang mengajak etnis Tionghoa berjuang bersama kaum pergerakan nasional bumiputera menuju Indonesia merdeka (Suryadinata, 1981)."
  }
];

export const historiographicalSynthesisData: HistoriographyLensItem[] = [
  {
    historian: "Anthony Reid & Leonard Blussé",
    schoolName: "Mazhab Sejarah Maritim & Kota Kolonial Awal",
    framework: "Kurun Niaga (Age of Commerce 1450–1680) & Persekutuan Aneh (Strange Company)",
    primaryPerspective: "Integrasi jaringan pelayaran muson Asia Tenggara, monetisasi koin kepeng, dan simbiosis ekonomi VOC–Tionghoa di Batavia",
    primarySources: "Kronik Tiongkok (Foguo Ji), catatan pelabuhan Nusantara, surat resmi J.P. Coen kepada Heeren XVII, dan arsip Kong Koan Batavia",
    economicAssessment: "Masyarakat Tionghoa bukan sekadar pendatang terpisah, melainkan motor utama monetisasi pasar Nusantara (uang kepeng) dan fondasi tenaga kerja, konstruksi, serta industri gula yang memungkinkan Batavia bertahan hidup.",
    collapseExplanation: "Keretakan 'persekutuan aneh' VOC–Tionghoa terjadi akibat krisis struktural gula Ommelanden dan kepanikan birokrasi kolonial yang memicu tragedi Geger Pecinan 1740.",
    keyWork: "Southeast Asia in the Age of Commerce (1450–1680) & Persekutuan Aneh: Pemukim Cina, Wanita Peranakan dan Belanda di Batavia VOC (1988)"
  },
  {
    historian: "James R. Rush, F.W. Diehl & Mary Somers Heidhues",
    schoolName: "Mazhab Sejarah Ekonomi Fiskal & Perburuhan Luar Jawa",
    framework: "Kapitalisme Sewa Pajak (Pachtstelsel), Jaringan Cabang Atas & Rezim Kuli Kontrak",
    primaryPerspective: "Struktur fiskal kolonial abad ke-19, perantara distribusi desa Jawa, serta kontras kelas antara kongsi tambang dan kuli perkebunan di Luar Jawa",
    primarySources: "Arsip lelang Opiumpacht (1809–1895), kontrak gula Tanam Paksa, arsip tambang Bangka-Belitung/Kalbar, dan Koelie Ordonnantie 1880",
    economicAssessment: "Di Jawa, kongsi Cabang Atas memegang kunci distribusi desa–kota dan menyumbang ~18% pendapatan negara lewat opiumpacht; sebaliknya di Luar Jawa, ratusan ribu imigran sinkeh justru dieksploitasi sebagai kuli tambang dan perkebunan di bawah poenale sanctie.",
    collapseExplanation: "Penghapusan sistem pacht di akhir abad ke-19 dan penaklukan militer atas Kongsi Thaikong (1854) serta Lanfang (1885) menggeser modal Tionghoa ke perdagangan modern dan perkebunan rakyat.",
    keyWork: "Opium to Java (Rush, 1990) · Revenue Farming (Diehl, 1993) · Bangka Tin and Mentok Pepper (Heidhues, 1992) & Golddiggers, Farmers, and Traders (2003)"
  },
  {
    historian: "Leo Suryadinata, Ahmat Adam & Siti Fauziah",
    schoolName: "Mazhab Sosiopolitik, Pers Pergerakan & Sejarah Lokal Banten",
    framework: "Diferensiasi Peranakan–Totok, Ruang Publik Pers Melayu-Tionghoa & Akulturasi Lokal",
    primaryPerspective: "Transformasi identitas budaya, kebangkitan pendidikan/pers awal abad ke-20, tiga aliran politik, serta dinamika ruang Pecinan di Kesultanan/Kolonial Banten",
    primarySources: "Surat kabar Melayu-Tionghoa (Li Po, Sin Po, Sin Tit Po), dokumen THHK/CHH/PTI, peta kuno Banten (1596–1726), dan situs Masjid Pacinan Tinggi",
    economicAssessment: "Menolak pandangan yang mereduksi komunitas Tionghoa hanya sebagai aktor ekonomi; mereka juga membangun institusi pendidikan modern (THHK 1900), mematangkan Bahasa Indonesia lewat pers, dan berakulturasi erat dengan masyarakat lokal (Banten & Cina Benteng).",
    collapseExplanation: "Segregasi Wijkenstelsel dan klaim WNO (1910) gagal membendung kesadaran kebangsaan yang bermuara pada haluan Indonesierschap Partai Tionghoa Indonesia (1932).",
    keyWork: "Peranakan Chinese Politics in Java (Suryadinata, 1981) · The Vernacular Press (Adam, 1995) · Al Qalam (Fauziah, 2009; Fauziah & Rohman, 2019)"
  }
];

export const vanReesReportData: VanReesReportSection[] = [
  {
    id: "kesimpulan-1-prakolonial",
    sectionNumber: 1,
    title: "Benang Merah I: Akar Perdagangan Maritim & Kemitraan Kerajaan Nusantara",
    badge: "Warisan Pra-Kolonial",
    findings: [
      "Masyarakat Tionghoa memiliki peranan penting dalam perkembangan perekonomian Nusantara sejak masa pra-kolonial hingga akhir pemerintahan Hindia Belanda.",
      "Sebelum kedatangan bangsa-bangsa Eropa, masyarakat Tionghoa telah terlibat aktif dalam jaringan perdagangan maritim dengan memperkenalkan penggunaan koin tembaga (uang picis/kepeng) yang menjadi alat tukar sah.",
      "Mereka juga berperan langsung dalam kegiatan perdagangan dan birokrasi pemerintahan di kerajaan-kerajaan Nusantara (seperti Juru Cina dan Syahbandar).",
      "Hubungan harmonis ini menjadi faktor pendorong utama tumbuhnya pusat-pusat perdagangan dan permukiman Tionghoa (Pecinan awal) di berbagai bandar strategis Nusantara."
    ],
    significance: "Menegaskan bahwa jaringan niaga dan permukiman Tionghoa di Nusantara berakar dari kemitraan damai berabad-abad sebelum kedatangan kolonialisme Eropa."
  },
  {
    id: "kesimpulan-2-kolonial",
    sectionNumber: 2,
    title: "Benang Merah II: Paradoks Tulang Punggung Ekonomi vs Sekat Hukum Kolonial",
    badge: "Paradoks Kolonial",
    findings: [
      "Memasuki masa kolonial, peran ekonomi masyarakat Tionghoa semakin berkembang luas mencakup bidang perdagangan perantara, perpajakan (sistem pacht), pertanian, industri gula, pertambangan (timah dan emas), hingga perkebunan besar.",
      "Pemerintahan kolonial sangat bergantung pada modal serta jaringan perdagangan masyarakat Tionghoa karena mampu menunjang kas dan roda perekonomian Hindia Belanda.",
      "Namun, ketergantungan ekonomi yang besar ini tidak diikuti dengan kesetaraan kehidupan sosial dan hukum.",
      "Masyarakat Tionghoa masih menghadapi berbagai pembatasan diskriminatif, seperti segregasi permukiman (Wijkenstelsel), pembatasan mobilitas (Passenstelsel), serta penggolongan hukum kelas dua sebagai kelompok Timur Asing (Vreemde Oosterlingen)."
    ],
    significance: "Mengungkap kontradiksi mendasar kekuasaan Hindia Belanda yang memetik keuntungan fiskal dari jaringan Tionghoa sambil mengurung mereka secara hukum dan teritorial."
  },
  {
    id: "kesimpulan-3-kontribusi",
    sectionNumber: 3,
    title: "Benang Merah III: Ketangguhan Budaya, Pendidikan Modern & Fajar Kebangsaan",
    badge: "Integrasi Bangsa",
    findings: [
      "Sejarah masyarakat Tionghoa di wilayah Nusantara menunjukkan hubungan yang kompleks antara peran ekonomi, kebijakan kolonial, serta kedudukan sosial.",
      "Meskipun menghadapi perlakuan diskriminasi, kekerasan (seperti Geger Pecinan 1740 dan rezim poenale sanctie), serta berbagai pembatasan ruang gerak, masyarakat Tionghoa tidak bersikap pasif.",
      "Mereka tetap berupaya mengembangkan aktivitas ekonomi, mempelopori pendidikan modern (THHK 1900), membangun organisasi dan pers Melayu-Tionghoa, serta memperkaya akulturasi kebudayaan.",
      "Seluruh dinamika tersebut menjadi bagian integral dan tak terpisahkan dari sejarah perkembangan masyarakat dan bangsa Indonesia."
    ],
    significance: "Menunjukkan transformasi masyarakat Tionghoa dari komunitas perantara yang tertekan menjadi kekuatan pembaru pendidikan, bahasa, dan perjuangan kemerdekaan Indonesia."
  },
  {
    id: "saran-makalah-4",
    sectionNumber: 4,
    title: "Refleksi Historiografis: Membaca Sejarah Secara Utuh & Melampaui Stereotip",
    badge: "Refleksi Sejarah",
    findings: [
      "Penelusuran sejarah masyarakat Tionghoa di Nusantara perlu terus dihadirkan secara utuh dengan merangkai keterkaitan antara denyut perekonomian, kebijakan kolonial, dan kehidupan sosial sehari-hari.",
      "Pemahaman sejarah yang mendalam penting agar kita tidak lagi mereduksi komunitas Tionghoa semata-mata dari peranan ekonominya.",
      "Melalui perspektif yang berimbang, kita dapat mengapresiasi kontribusi luas komunitas Tionghoa dalam dunia pendidikan modern, pematangan Bahasa Indonesia, arsitektur, dan akulturasi budaya Nusantara.",
      "Keberagaman sumber sejarah yang tepercaya membantu memupuskan prasangka dan stereotip warisan kolonial yang pernah membelah masyarakat Nusantara."
    ],
    significance: "Mengajak pembaca menelusuri jejak masyarakat Tionghoa secara jernih, empatik, dan berbasis sumber sejarah yang kaya—melampaui sekat-sekat prasangka warisan kolonial."
  }
];

export const prianganMonetizationData: PrianganMonetizationPhase[] = [
  {
    id: "fase-1-maritim",
    phase: "Fase 1",
    periodLabel: "Abad V – Abad XVII (Pra-Eropa & Kesultanan)",
    title: "Monetisasi Koin Kepeng, Syahbandar & Pecinan Organik",
    monetizationLevel: "Berkembang Pesat",
    characteristics: [
      "Kapal jung Tiongkok berlayar mengikuti angin muson membawa sutra, porselen, dan koin tembaga berlubang persegi (uang picis/kepeng).",
      "Kerajaan Majapahit meresmikan koin kepeng (diikat per 1.000 keping) sebagai alat tukar sah, menggantikan barter murni dan memicu revolusi pasar desa–pelabuhan.",
      "Tokoh Tionghoa dipercaya menduduki jabatan Juru Cina (Prasasti Kencana 860 M) dan Syahbandar (Kiyai Ngabehi Cakradana di Kesultanan Banten abad ke-17)."
    ],
    keyFact: "Permukiman Pecinan awal di Banten (1596), Malaka, Palembang, Tuban, dan Gresik tumbuh makmur atas dukungan penguasa lokal."
  },
  {
    id: "fase-2-voc",
    phase: "Fase 2",
    periodLabel: "1619 – 1799 (Era VOC & Geger Pecinan)",
    title: "Kemitraan Batavia, Pajak Kepala 1,5 Real & Tragedi 1740",
    monetizationLevel: "Terbatas",
    characteristics: [
      "J.P. Coen menarik warga Tionghoa membangun Batavia (1619) dan mengangkat Souw Beng Kong sebagai Kapitein der Chinezen pertama.",
      "Pria Tionghoa usia 16–60 tahun wajib membayar pajak kepala 1,5 real/bulan; kontraktor Tionghoa membangun kanal, benteng, dan pabrik gula Ommelanden.",
      "Krisis gula dan rencana deportasi memicu pembantaian >10.000 jiwa di Batavia (Oktober 1740), Perang Geger Pecinan (1740–1743), dan aturan isolasi Pecinan."
    ],
    keyFact: "Diaspora penyintas Geger Pecinan melahirkan pusat ekonomi dan budaya Peranakan baru di sepanjang pesisir utara Jawa."
  },
  {
    id: "fase-3-hindia-belanda",
    phase: "Fase 3",
    periodLabel: "Abad ke-19 (Pachtstelsel, Gula & Kuli Kontrak)",
    title: "Dominasi Sewa Pajak, Logistik Gula & Rezim Poenale Sanctie",
    monetizationLevel: "Sangat Rendah",
    characteristics: [
      "Saudagar Cabang Atas menguasai lelang pacht (bazarpacht, pandhuispacht, zoutpacht, dan opiumpacht yang menyumbang ~18% pendapatan kolonial 1886–1895).",
      "Berperan sebagai suikercontractanten dan penguasa rantai angkutan tebu/gula Tanam Paksa, namun dikurung dalam status Vreemde Oosterlingen, Wijkenstelsel, dan Passenstelsel.",
      "Di Luar Jawa, Belanda menaklukkan kongsi emas Kalbar (1822–1885) dan mengimpor ratusan ribu kuli sinkeh ke Bangka-Belitung serta Deli di bawah Koelie Ordonnantie 1880."
    ],
    keyFact: "Kesenjangan tajam antara akumulasi modal elite pacht di Jawa dan penderitaan kuli kontrak di bawah ancaman pidana poenale sanctie di Deli."
  },
  {
    id: "fase-4-kebangkitan",
    phase: "Fase 4",
    periodLabel: "1900 – 1942 (Kebangkitan Pendidikan, Pers & Pergerakan)",
    title: "THHK (1900), Pers Melayu-Tionghoa & Haluan Indonesierschap",
    monetizationLevel: "Berkembang Pesat",
    characteristics: [
      "Phoa Keng Hek dan Lie Kim Hok mendirikan Tiong Hoa Hwee Koan (17 Maret 1900) dan sekolah modern Tiong Hoa Hak Tong (1901) yang setara gender.",
      "Pemerintah kolonial merespons dengan mendirikan HCS (1908) dan mengesahkan UU Kekawulaan Belanda WNO (1910) berasaskan ius soli.",
      "Pers Melayu-Tionghoa (Li Po, Sin Po, Sin Tit Po) mematangkan Bahasa Indonesia, mencetak perdana lagu 'Indonesia Raya' (Nov 1928), dan melahirkan PTI pimpinan Liem Koen Hian (1932)."
    ],
    keyFact: "Melalui haluan Indonesierschap, Partai Tionghoa Indonesia (1932) mengajak etnis Tionghoa melebur dalam perjuangan kemerdekaan Indonesia."
  }
];

export const spatialMarkersData: SpatialMarker[] = [
  {
    id: "marker-banten",
    name: "Banten & Tangerang",
    category: "commodity",
    lat: -6.03,
    lon: 106.15,
    regionGroup: "jawa",
    labelPos: "left",
    showLabelInNusantara: true,
    residency: "Kesultanan & Karesidenan Banten (Serta Tangerang)",
    period: "Abad XVI – XX",
    badge: "Syahbandar, Pecinan & Cina Benteng",
    title: "Pecinan Banten (1596–1726), Masjid Pacinan Tinggi & Cina Benteng",
    summary: "Bandar lada strategis di Selat Sunda tempat tokoh Tionghoa Muslim Tantseko (Kiyai Ngabehi Cakradana) menjabat Syahbandar utama dan arsitek Istana Surosowan. Kawasan Pecinan tumbuh sejak 1596 di barat laut kota dan bergeser ke sisi barat pada 1726 (Nayati, 1985), meninggalkan jejak Masjid Pacinan Tinggi, sementara di Tangerang berkembang komunitas akulturatif Cina Benteng (Thresnawaty, 2015).",
    historicalDetails: {
      commodities: ["Lada Banten", "Koin Kepeng", "Porselen & Sutra"],
      statistics: "Pergeseran Pecinan tercatat pada peta kuno 1596 dan 1726; toponimi multietnis mencakup Pecinan, Pekojan, Kampung Bugis, Dermayon, dan Kebalen.",
      impactSummary: "Transformasi dari mitra Kesultanan menjadi buffer class (Vreemde Oosterlingen) di bawah Wijkenstelsel dan Passenstelsel.",
      vanDenBoschPolicyNote: "Meskipun kolonial menerapkan Wijkenstelsel, Pecinan Banten telah berakar sejak masa Kesultanan sebelum masuk ke tata pengawasan kolonial (Nayati, 1985).",
      archivalReference: "Nayati (1985); Fauziah (2009); Fauziah & Rohman (2019); Thresnawaty (2015); Wibowo et al. (2025)."
    }
  },
  {
    id: "marker-batavia",
    name: "Batavia (Ommelanden)",
    category: "famine",
    lat: -6.13,
    lon: 106.82,
    regionGroup: "jawa",
    labelPos: "top",
    showLabelInNusantara: true,
    residency: "Batavia & Ommelanden",
    period: "1619 – 1942",
    badge: "Kapiten 1619, Geger Pecinan 1740 & THHK 1900",
    title: "Pusat Kemitraan VOC, Tragedi Oktober 1740 & Kelahiran THHK–Sin Po",
    summary: "Sejak 1619 J.P. Coen mengangkat Souw Beng Kong sebagai Kapitein der Chinezen pertama dan mengandalkan kontraktor serta pabrik gula Tionghoa di Ommelanden. Krisis gula memicu pembantaian >10.000 jiwa pada Oktober 1740 (GG Valckenier). Pada abad ke-20, Batavia menjadi tempat lahirnya Tiong Hoa Hwee Koan (17 Maret 1900) dan harian Sin Po (1910) yang mencetak perdana lagu 'Indonesia Raya' (Nov 1928).",
    historicalDetails: {
      commodities: ["Industri Gula Ommelanden", "Konstruksi Kanal & Bata", "Pers Melayu-Tionghoa"],
      statistics: "Pajak kepala 1,5 real/bulan (1619); >10.000 korban jiwa dalam tragedi Oktober 1740; THHK berdiri 17 Maret 1900.",
      impactSummary: "Titik sentral kebijakan Kapitein der Chinezen, tragedi Geger Pecinan, hingga kebangkitan pendidikan dan pers modern.",
      vanDenBoschPolicyNote: "Pasca-1740, VOC menetapkan aturan isolasi permukiman Pecinan (Glodok) di luar tembok benteng kota agar mudah diawasi militer.",
      archivalReference: "Blussé (1988); Lohanda (2007); Daradjadi (2013); Somers (1965); Adam (1995)."
    }
  },
  {
    id: "marker-cirebon-pantura",
    name: "Cirebon, Tegal & Pekalongan",
    category: "railway-hub",
    lat: -6.72,
    lon: 108.56,
    regionGroup: "jawa",
    labelPos: "bottom",
    showLabelInNusantara: false,
    residency: "Pesisir Utara Jawa Barat–Tengah",
    period: "Pasca-1740 – Abad XX",
    badge: "Diaspora Peranakan & Pabrik Gula",
    title: "Jaringan Pecinan Pantura, Batik Pesisiran & Suikercontractanten",
    summary: "Pasca-peristiwa Geger Pecinan (1740–1743), para pelarian Tionghoa menyebar ke pesisir utara Jawa dan membangun kembali permukiman niaga, pasar, serta klenteng di Cirebon, Brebes, Tegal, dan Pekalongan. Pada abad ke-19, kawasan ini menjadi basis kontraktor pabrik gula (suikercontractanten) dan pusat akulturasi seni batik pesisiran.",
    historicalDetails: {
      commodities: ["Gula Tebu Pantura", "Batik Pesisiran Peranakan", "Logistik Pelabuhan"],
      statistics: "Sentra utama diaspora Peranakan pasca-1743 dan jaringan angkutan pedati/perahu sungai era Tanam Paksa.",
      impactSummary: "Melahirkan kebudayaan hibrida Peranakan yang memadukan unsur Tionghoa dan Jawa pesisir.",
      vanDenBoschPolicyNote: "Pemodal Tionghoa berperan sebagai suikercontractanten awal sebelum beralih menguasai rantai logistik tebu dan beras.",
      archivalReference: "Daradjadi (2013); Elson (1994); Santoso (2025); Suryadinata (2020)."
    }
  },
  {
    id: "marker-semarang-lasem",
    name: "Semarang, Lasem & Kartasura",
    category: "resistance",
    lat: -6.96,
    lon: 110.42,
    regionGroup: "jawa",
    labelPos: "top",
    showLabelInNusantara: true,
    residency: "Jawa Tengah (Semarang, Lasem & Vorstenlanden)",
    period: "1740 – 1930",
    badge: "Aliansi 1740–1743 & Kongsi Opiumpacht",
    title: "Basis Aliansi Tionghoa-Jawa (1740–1743) & Imperium Pacht Keluarga Be",
    summary: "Dalam Perang Geger Pecinan (1740–1743), pasukan Tionghoa pimpinan Khe Panjang dan Tan Sin Ko beraliansi dengan bangsawan Mataram, menyusuri pesisir utara Jawa Tengah (Semarang, Lasem) dan sempat menduduki keraton Kartasura. Pada abad ke-19, Semarang menjadi markas kongsi opiumpacht keluarga Be, harian Djawa Tengah (1909), dan berdirinya Chung Hwa Hui (1928).",
    historicalDetails: {
      commodities: ["Opiumpacht (Tiban & Siram)", "Garam & Beras", "Pers Melayu-Tionghoa"],
      statistics: "Opiumpacht menyumbang ~18% pendapatan Hindia Belanda pada kurun 1886–1895 (Diehl, 1993).",
      impactSummary: "Episentrum perlawanan koalisi Tionghoa-Mataram abad ke-18 sekaligus pusat kapitalisme sewa pajak abad ke-19.",
      vanDenBoschPolicyNote: "Staf pemegang pacht di Semarang dan Madiun (Djie Bok Hien) diberi hak istimewa keluar-masuk desa untuk mengedarkan barang impor dan menarik hasil bumi.",
      archivalReference: "Daradjadi (2013); Rush (1990); Diehl (1993); Adam (1995)."
    }
  },
  {
    id: "marker-surabaya-tuban",
    name: "Tuban, Gresik & Surabaya",
    category: "railway-hub",
    lat: -7.25,
    lon: 112.74,
    regionGroup: "jawa",
    labelPos: "bottom",
    showLabelInNusantara: true,
    residency: "Jawa Timur (Tuban, Gresik, Surabaya & Madiun)",
    period: "Abad XIV – 1932",
    badge: "Bandar Majapahit & Kelahiran PTI 1932",
    title: "Bandar Koin Kepeng Majapahit, Pers Surabaya & Partai Tionghoa Indonesia",
    summary: "Sejak era Majapahit, bandar Tuban dan Gresik menjadi pintu masuk kapal jung Tiongkok dan monetisasi koin tembaga kepeng. Memasuki abad ke-20, Surabaya menjadi basis harian Pewarta Soerabaia dan Sin Tit Po (1929) serta tempat berdirinya Partai Tionghoa Indonesia (PTI, 1932) pimpinan Liem Koen Hian yang berhaluan Indonesierschap.",
    historicalDetails: {
      commodities: ["Koin Kepeng Majapahit", "Logistik Gula Jawa Timur", "Pers & Pergerakan PTI (1932)"],
      statistics: "Koin kepeng diikat per 1.000 keping; Sin Tit Po terbit 1929; PTI berdiri 1932 di bawah Liem Koen Hian.",
      impactSummary: "Menghubungkan tradisi niaga maritim era Majapahit dengan gerakan integrasi nasionalisme Indonesia modern.",
      vanDenBoschPolicyNote: "Di Madiun dan Jawa Timur, jaringan pacht Djie Bok Hien serta kontraktor gula menggerakkan sirkulasi ekonomi pedesaan.",
      archivalReference: "Rush (1990); Suryadinata (1981); Adam (1995)."
    }
  },
  {
    id: "marker-bangka-belitung",
    name: "Bangka & Belitung",
    category: "commodity",
    lat: -2.13,
    lon: 106.11,
    regionGroup: "luar-jawa",
    labelPos: "right",
    showLabelInNusantara: true,
    residency: "Kepulauan Bangka & Belitung",
    period: "Abad XVIII – XX (1852 & 1860)",
    badge: "Kongsi Tambang Timah Hakka",
    title: "Pertambangan Timah Sistem Parit/Kongsi & Billiton Maatschappij",
    summary: "Penambangan timah di Bangka dan Belitung bergantung sepenuhnya pada kuli tambang Tionghoa, terutama dari subetnis Hakka, yang bekerja dalam kelompok parit atau kongsi (Heidhues, 1992). Tambang di Bangka dikelola pemerintah kolonial, sedangkan tambang swasta di Belitung dimulai setelah konsesi John Loudon (1852) dan dilanjutkan Billiton Maatschappij (1860).",
    historicalDetails: {
      commodities: ["Timah Bangka (Pemerintah)", "Timah Belitung (Billiton Maatschappij)"],
      statistics: "Konsesi Belitung diberikan tahun 1852 kepada John Loudon; Billiton Maatschappij berdiri tahun 1860.",
      impactSummary: "Melahirkan konsentrasi komunitas pekerja tambang Hakka di Luar Jawa dengan teknik penambangan parit berbasis kongsi.",
      vanDenBoschPolicyNote: "Pemerintah kolonial dan korporasi Eropa mendatangkan buruh imigran dari Fujian dan Guangdong karena rendahnya kepadatan penduduk lokal.",
      archivalReference: "Heidhues (1992); Mollema (1922); Kamp (1960); Furnivall (1939)."
    }
  },
  {
    id: "marker-kalbar-kongsi",
    name: "Monterado & Mandor (Kalbar)",
    category: "resistance",
    lat: 0.55,
    lon: 109.15,
    regionGroup: "luar-jawa",
    labelPos: "right",
    showLabelInNusantara: true,
    residency: "Kalimantan Barat (Monterado & Mandor)",
    period: "Abad XVIII – 1885",
    badge: "Tiga Perang Kongsi (1822–1885)",
    title: "Federasi Otonom Penambang Emas: Kongsi Thaikong & Kongsi Lanfang",
    summary: "Para penambang emas Tionghoa yang sejak abad ke-18 membentuk federasi otonom berbasis klan menghadapi penaklukan militer Belanda dalam tiga Perang Kongsi (1822–1824, 1850–1854, dan 1884–1885). Kongsi Thaikong di Monterado dikalahkan pada 1850–1854, sedangkan Kongsi Lanfang di Mandor baru ditundukkan lewat pemberontakan Mandor (Oktober 1884 – Februari 1885).",
    historicalDetails: {
      commodities: ["Tambang Emas Aluvial", "Perkebunan Lada & Karet", "Perdagangan Pedalaman"],
      statistics: "3 Perang Kongsi besar: 1822–1824, 1850–1854 (Monterado), dan Okt 1884 – Feb 1885 (Mandor).",
      impactSummary: "Setelah kekalahan kongsi, banyak warga Tionghoa di Kalimantan Barat beralih menjadi petani lada dan karet atau pedagang pedalaman.",
      vanDenBoschPolicyNote: "Belanda tidak menoleransi kedaulatan otonom kongsi Tionghoa dan menghancurkannya melalui ekspedisi militer langsung.",
      archivalReference: "Yuan (2000); Heidhues (2003)."
    }
  },
  {
    id: "marker-deli-belawan",
    name: "Deli & Belawan (Sumatra Timur)",
    category: "famine",
    lat: 3.59,
    lon: 98.67,
    regionGroup: "luar-jawa",
    labelPos: "left",
    showLabelInNusantara: true,
    residency: "Sumatra Timur (Deli & Pelabuhan Belawan)",
    period: "1860-an – 1930 (Ordonansi 1880)",
    badge: "Kuli Kontrak & Poenale Sanctie",
    title: "Perkebunan Tembakau/Karet Deli, Jaringan Khehtau & Koelie Ordonnantie",
    summary: "Pembukaan perkebunan tembakau dan karet berskala besar oleh Jacob Nienhuys dan Deli Maatschappij sejak 1860-an memicu perekrutan kuli kontrak Tionghoa (sinkeh) melalui jaringan calo (khehtau) dari Penang, Singapura, dan Swatow menuju Pelabuhan Belawan. Di bawah Koelie Ordonnantie (1880) beraturan poenale sanctie, buruh diancam pidana dan kerja paksa serta terjerat utang candu dan perjudian.",
    historicalDetails: {
      commodities: ["Tembakau Deli", "Karet Perkebunan"],
      statistics: "Koelie Ordonnantie disahkan tahun 1880 dengan sanksi pidana poenale sanctie bagi kuli yang melarikan diri.",
      impactSummary: "Eksploitasi fisik ekstrem terhadap kuli kontrak laki-laki maupun perempuan disertai jerat utang struktural di lingkungan perkebunan.",
      vanDenBoschPolicyNote: "Korporasi perkebunan Eropa bekerja sama dengan aparat hukum kolonial untuk mengikat buruh migran dengan sanksi kriminal.",
      archivalReference: "Breman (1989); Stoler (1985); Ramayanti & Wisnu (2018)."
    }
  },
  {
    id: "marker-palembang-malaka",
    name: "Palembang & Selat Malaka",
    category: "commodity",
    lat: -2.99,
    lon: 104.76,
    regionGroup: "luar-jawa",
    labelPos: "left",
    showLabelInNusantara: true,
    residency: "Pesisir Timur Sumatra & Selat Malaka",
    period: "Abad V – XVII",
    badge: "Koridor Angin Muson & Pecinan Sungai",
    title: "Simpul Pelayaran Jung Muson & Permukiman Tepi Sungai",
    summary: "Titik pertemuan jalur pelayaran internasional Selat Malaka dan muara sungai besar di Sumatra (seperti Palembang) tempat pedagang Tionghoa menunggu pergantian angin muson (Nov–Mar ke selatan, Mei–Sep ke utara) dan membangun rumah-gudang dua lantai di tepi sungai.",
    historicalDetails: {
      commodities: ["Lada Sumatra", "Kain Sutra & Porselen", "Koin Tembaga Kepeng"],
      statistics: "Siklus angin muson utara (Nov–Mar) dan selatan (Mei–Sep) menentukan ritme niaga tahunan.",
      impactSummary: "Melahirkan permukiman semi-permanen hingga permanen yang menjadi cikal bakal komunitas Peranakan di pesisir.",
      vanDenBoschPolicyNote: "Lantai bawah bangunan menghadap sungai digunakan sebagai gudang logistik dan tempat transaksi, sedangkan lantai atas menjadi hunian keluarga.",
      archivalReference: "Anthony Reid (Age of Commerce, 1450–1680); Dahana (2000)."
    }
  },
  {
    id: "marker-maluku-makassar",
    name: "Makassar & Kepulauan Maluku",
    category: "commodity",
    lat: -5.14,
    lon: 119.43,
    regionGroup: "luar-jawa",
    labelPos: "top",
    showLabelInNusantara: true,
    residency: "Kawasan Timur Nusantara (Makassar, Maluku & Nusa Tenggara)",
    period: "Abad XV – XVII",
    badge: "Sentra Rempah & Hasil Laut",
    title: "Pertukaran Cengkih, Pala, Cendana, Sarang Walet & Teripang",
    summary: "Dalam era Age of Commerce (1450–1680), bandar Makassar dan kepulauan timur menjadi tujuan pedagang Tionghoa yang menukarkan porselen, sutra, kertas, dan perkakas besi dengan hasil bumi serta hasil laut yang sangat diminati pasar kekaisaran Tiongkok.",
    historicalDetails: {
      commodities: ["Cengkih & Pala Maluku", "Kayu Cendana Nusa Tenggara", "Sarang Burung Walet & Teripang"],
      statistics: "Bagian utama jaringan Kurun Niaga Asia Tenggara (1450–1680) sebelum monopoli penuh VOC.",
      impactSummary: "Menghubungkan komoditas hutan dan laut Indonesia Timur langsung dengan pasar konsumen Kekaisaran Tiongkok.",
      vanDenBoschPolicyNote: "Komunitas Tionghoa melebur dalam ekosistem perkotaan pelabuhan Nusantara sebagai mitra dagang penguasa lokal.",
      archivalReference: "Anthony Reid (Age of Commerce, 1450–1680); Al Qurtuby & Kholiludin (2021)."
    }
  }
];

export const railwayLinesData: RailwayLine[] = [
  {
    id: "rail-pantura-barat",
    name: "Koridor Niaga & Diaspora Pecinan Banten–Batavia–Cirebon",
    coordinates: [
      [106.15, -6.03],
      [106.82, -6.13],
      [108.56, -6.72]
    ],
    startPoint: "Banten & Tangerang",
    endPoint: "Batavia & Cirebon",
    yearBuilt: "1596–1743",
    purpose: "Jalur perpindahan saudagar lada Banten ke Batavia (1619) serta rute diaspora penyintas Geger Pecinan (1740) menuju Cirebon."
  },
  {
    id: "rail-geger-pecinan-tengah",
    name: "Jalur Perang Geger Pecinan & Logistik Gula Pantura–Kartasura",
    coordinates: [
      [108.56, -6.72],
      [109.67, -6.89],
      [110.42, -6.96],
      [110.74, -7.55]
    ],
    startPoint: "Cirebon & Pekalongan",
    endPoint: "Semarang & Kartasura",
    yearBuilt: "1740–1870",
    purpose: "Rute pergerakan aliansi militer Tionghoa-Jawa (1740–1743) menuju Kartasura yang pada abad ke-19 menjadi urat nadi pacht dan logistik gula."
  },
  {
    id: "rail-pantura-timur",
    name: "Koridor Pecinan Timur Semarang–Lasem–Tuban–Surabaya",
    coordinates: [
      [110.42, -6.96],
      [111.45, -6.69],
      [112.06, -6.89],
      [112.74, -7.25]
    ],
    startPoint: "Semarang & Lasem",
    endPoint: "Tuban, Gresik & Surabaya",
    yearBuilt: "Abad XIV–1932",
    purpose: "Menghubungkan bandar koin kepeng Majapahit (Tuban–Gresik), sentra budaya Peranakan Lasem, hingga pusat pergerakan PTI di Surabaya."
  }
];

export const currencyConversionBenchmarks: CurrencyBenchmark[] = [
  {
    id: "hoofdgeld-voc",
    label: "Pajak Kepala Pria Tionghoa Batavia (1,5 Real/Bulan)",
    guldenAmount: 3.75,
    modernIdrEstimate: 656250,
    historicalRole: "Kewajiban pajak kepala bulanan setiap pria Tionghoa dewasa (usia 16–60 tahun) di Batavia sejak 1619 sebagai kompensasi bebas wajib militer/rodi benteng.",
    disparityDescription: "Setara ~Rp 656.250 per bulan (atau ~18 real / 45 gulden per tahun); menjadi salah satu sumber pendapatan tunai paling stabil bagi kas VOC di Batavia (Blussé, 1988; Lohanda, 2007)."
  },
  {
    id: "kuli-deli-debt",
    label: "Jerat Utang Kontrak Kuli Sinkeh di Deli",
    guldenAmount: 65,
    modernIdrEstimate: 11375000,
    historicalRole: "Taksiran beban uang panjar perjalanan calo (khehtau), konsumsi candu, dan perjudian yang menjerat seorang kuli kontrak Tionghoa di perkebunan Deli.",
    disparityDescription: "Setara ~Rp 11,37 Juta; membuat kuli kontrak tidak mampu melunasi utang dan terus terikat kerja paksa di bawah ancaman pidana Koelie Ordonnantie 1880 (Breman, 1989; Stoler, 1985)."
  },
  {
    id: "suikercontract-loan",
    label: "Modal Kontrak Pabrik Gula (Suikercontractanten)",
    guldenAmount: 120000,
    modernIdrEstimate: 21000000000,
    historicalRole: "Skala pinjaman modal dan investasi penggilingan gula serta armada pedati/perahu sungai pada dekade awal Sistem Tanam Paksa (1830–1870).",
    disparityDescription: "Setara ~Rp 21 Miliar nilai sekarang; menempatkan pemodal Tionghoa sebagai penggerak awal industri gula sebelum kontrak pabrik dibatasi demi pengusaha Eropa (Elson, 1994; Santoso, 2025)."
  },
  {
    id: "opiumpacht-revenue",
    label: "Kontribusi Tahunan Opiumpacht (~18% APBN Kolonial)",
    guldenAmount: 21000000,
    modernIdrEstimate: 3675000000000,
    historicalRole: "Nilai setoran tahunan lelang monopoli pajak candu (opiumpacht) dari kongsi-kongsi Cabang Atas ke kas pemerintah Hindia Belanda pada kurun 1886–1895.",
    disparityDescription: "Setara ~Rp 3,67 Triliun per tahun (menyumbang sekitar 18% dari seluruh pendapatan pemerintah Hindia Belanda menurut Diehl, 1993 & Rush, 1990)."
  }
];

export const unitConversionData: UnitConversion[] = [
  {
    id: "unit-bouw",
    unitName: "Ikat Uang Kepeng / Picis (1.000 Keping)",
    dutchNotation: "1 Tali / 1.000 Cash Tembaga",
    metricEquivalent: "1.000 Keping Koin Tembaga Berlubang Persegi",
    baseMultiplier: 1000,
    unitCategory: "populasi",
    historicalUsage: "Di era Kerajaan Majapahit dan bandar pesisir Nusantara, koin tembaga Tiongkok (picis/kepeng) diikat menggunakan tali serat tanaman per 1.000 keping untuk memudahkan transaksi jumlah besar, memicu revolusi finansial pertama pengganti barter (Reid, 1993; Dahana, 2000)."
  },
  {
    id: "unit-pikul",
    unitName: "Pikul Komoditas Niaga (Lada, Gula & Timah)",
    dutchNotation: "Pikul (100 Kati)",
    metricEquivalent: "61,76 Kilogram",
    baseMultiplier: 61.76,
    unitCategory: "bobot",
    historicalUsage: "Satuan bobot standar dalam perdagangan maritim lada di Kesultanan Banten (diawasi Syahbandar), angkutan tebu/gula oleh pedati dan perahu sungai di Jawa, serta penimbangan bijih timah kongsi di Bangka-Belitung."
  },
  {
    id: "unit-pon",
    unitName: "Real Pajak Kepala VOC (1,5 Real/Bulan)",
    dutchNotation: "Spaanse Reaal (Hoofdgeld 1619)",
    metricEquivalent: "2,5 Gulden Perak per 1 Real",
    baseMultiplier: 2.5,
    unitCategory: "bobot",
    historicalUsage: "Satuan mata uang perak pada masa awal VOC di Batavia. Setiap pria Tionghoa dewasa usia 16–60 tahun wajib membayar pajak kepala 1,5 real (≈ 3,75 gulden) per bulan melalui Kapitein der Chinezen agar bebas dari wajib militer/kerja rodi benteng."
  },
  {
    id: "unit-cacah",
    unitName: "Tahil Candu Opiumpacht (Tiban & Siram)",
    dutchNotation: "Thail Opium (Ordonansi 1847)",
    metricEquivalent: "38,6 Gram (0,0386 Kilogram)",
    baseMultiplier: 0.0386,
    unitCategory: "bobot",
    historicalUsage: "Satuan takaran candu dalam skema kuota pasokan wajib (tiban) dan tambahan (siram) yang dilelang pemerintah kolonial kepada kongsi pemegang opiumpacht seperti keluarga Be di Semarang dan Djie Bok Hien di Madiun (Rush, 1990; Diehl, 1993)."
  }
];

export const historicalDilemmasData: HistoricalDilemmaScenario[] = [
  {
    id: "scenario-cirebon-1845",
    role: "Kapitein der Chinezen & Pemuka Pecinan",
    location: "Batavia & Ommelanden",
    year: 1740,
    title: "Dilema Krisis Gula Ommelanden & Ancaman Deportasi Oktober 1740",
    situation: "Harga gula dunia anjlok drastis; puluhan pabrik penggilingan gula di Ommelanden Batavia bangkrut dan ribuan buruh Tionghoa (singkek) menganggur. Gubernur Jenderal Adriaan Valckenier memerintahkan razia dan deportasi paksa warga Tionghoa tanpa surat izin ke Sri Lanka atau Banda, sementara beredar kabar bahwa mereka akan ditenggelamkan di tengah laut.",
    historicalContext: "Pada Oktober 1740, kepanikan aparat VOC dan perlawanan kelompok Tionghoa di luar tembok kota memicu tragedi pembantaian massal (Chinezenmoord) yang menewaskan lebih dari 10.000 jiwa di Batavia serta Perang Geger Pecinan (1740–1743).",
    choices: [
      {
        id: "batavia-opt-comply",
        choiceLabel: "Opsi A: Tetap Bertahan di Dalam Kota & Percayai Jaminan VOC",
        actionText: "Imbau warga di dalam tembok Batavia agar tenang dan menyerahkan penyelesaian kepada perundingan Kapiten Nie Hoe Kong dengan Dewan Hindia.",
        consequences: {
          peasantWelfare: -3,
          colonialPressure: 2,
          localStability: -3
        },
        immediateFeedback: "Tragedi tak terhindarkan: ketika pasukan di luar tembok menyerang pos VOC, Gubernur Jenderal Valckenier memerintahkan pembantaian di dalam kota. Lebih dari 10.000 warga tewas, rumah dibakar, dan Kapiten Nie Hoe Kong sendiri ditangkap serta dipenjarakan."
      },
      {
        id: "batavia-opt-alliance",
        choiceLabel: "Opsi B: Mundur ke Timur & Jalin Aliansi Militer dengan Mataram",
        actionText: "Bergabung bersama barisan Sepanjang (Khe Panjang) dan Singseh (Tan Sin Ko) menuju Jawa Tengah untuk bersekutu dengan bangsawan Kerajaan Mataram melawan VOC.",
        consequences: {
          peasantWelfare: 1,
          colonialPressure: -3,
          localStability: -1
        },
        immediateFeedback: "Pasukan gabungan Tionghoa-Jawa berhasil menyusuri pesisir utara, merebut benteng-benteng VOC, dan sempat menduduki istana Kartasura, membuat VOC nyaris bangkrut dalam perang tiga tahun (1740–1743)."
      },
      {
        id: "batavia-opt-diaspora",
        choiceLabel: "Opsi C: Evakuasi Keluarga lewat Jalur Laut ke Bandar Pesisir Utara",
        actionText: "Gunakan perahu jung niaga untuk mengungsikan keluarga dan perajin ke Cirebon, Tegal, Pekalongan, Semarang, dan Lasem guna membangun komunitas baru.",
        consequences: {
          peasantWelfare: 2,
          colonialPressure: -1,
          localStability: 2
        },
        immediateFeedback: "Keluarga dan jaringan niaga Anda selamat dari pembantaian Batavia. Permukiman baru yang Anda rintis di pesisir utara Jawa tumbuh menjadi pusat kebudayaan Peranakan, pasar, dan klenteng yang makmur."
      }
    ],
    historicalEpilogue: {
      whatActuallyHappened: "Dalam sejarah nyata Oktober 1740, warga di dalam tembok kota Batavia menjadi korban pembantaian (>10.000 jiwa tewas) dan Kapiten Nie Hoe Kong ditangkap meskipun pro-kolonial. Sementara itu, para penyintas di bawah Khe Panjang dan Tan Sin Ko mengobarkan Perang Geger Pecinan (1740–1743) bersama pasukan Mataram, dan gelombang pelarian lainnya menumbuhkan pusat-pusat Peranakan di Cirebon, Brebes, Tegal, Pekalongan, Semarang, Lasem, hingga Tuban.",
      historicalOutcome: "VOC mengubah total kebijakan pengawasannya dengan mewajibkan warga Tionghoa tinggal terisolasi di kawasan Pecinan di luar benteng kota (cikal bakal Wijkenstelsel).",
      archivalSource: "Daradjadi (2013), Geger Pacinan 1740–1743: Persekutuan Tionghoa-Jawa Melawan VOC."
    }
  },
  {
    id: "scenario-priangan-1840",
    role: "Pemimpin Kongsi & Buruh Imigran (Sinkeh)",
    location: "Mandor (Kalimantan Barat) & Deli (Sumatra Timur)",
    year: 1884,
    title: "Dilema Ekspansi Kolonial di Luar Jawa: Perang Kongsi vs Koelie Ordonnantie",
    situation: "Di Kalimantan Barat, ekspedisi militer Belanda menuntut pembubaran otonomi Kongsi Lanfang di Mandor setelah sebelumnya menaklukkan Kongsi Thaikong di Monterado (1854). Pada saat yang sama, calo (khehtau) menawarkan kontrak kerja ke perkebunan tembakau Deli yang diatur oleh Koelie Ordonnantie (1880).",
    historicalContext: "Paruh kedua abad ke-19 di Luar Jawa diwarnai penghancuran federasi otonom penambang emas di Kalimantan Barat (Perang Kongsi 1884–1885) serta eksploitasi ratusan ribu kuli kontrak di Deli di bawah sanksi pidana poenale sanctie.",
    choices: [
      {
        id: "kongsi-opt-fight",
        choiceLabel: "Opsi A: Kobarkan Perlawanan Bersenjata Mempertahankan Kongsi Mandor",
        actionText: "Galang seluruh anggota klan Kongsi Lanfang dan sekutu lokal dalam pemberontakan Mandor (Oktober 1884 – Februari 1885) menolak pencaplokan Belanda.",
        consequences: {
          peasantWelfare: 0,
          colonialPressure: -3,
          localStability: -2
        },
        immediateFeedback: "Perlawanan heroik berlangsung dari Oktober 1884 hingga Februari 1885, namun keunggulan persenjataan kolonial akhirnya menundukkan Kongsi Lanfang dan mengakhiri satu abad otonomi kongsi."
      },
      {
        id: "kongsi-opt-smallholder",
        choiceLabel: "Opsi B: Beralih Menjadi Petani Lada, Karet & Pedagang Pedalaman",
        actionText: "Lepaskan tambang emas yang dikepung militer Belanda, lalu buka kebun lada dan karet mandiri serta jaringan perdagangan sungai di pedalaman Kalimantan Barat.",
        consequences: {
          peasantWelfare: 2,
          colonialPressure: 0,
          localStability: 2
        },
        immediateFeedback: "Keputusan adaptif! Keluarga Anda terhindar dari jerat kuli kontrak dan berhasil membangun ekonomi perkebunan rakyat (lada dan karet) yang bertahan lintas generasi di Kalimantan Barat."
      },
      {
        id: "kongsi-opt-deli",
        choiceLabel: "Opsi C: Terima Tawaran Khehtau Menjadi Kuli Kontrak di Deli",
        actionText: "Berlayar lewat Penang menuju Pelabuhan Belawan untuk bekerja di perkebunan tembakau Deli Maatschappij dengan harapan mengumpulkan tabungan.",
        consequences: {
          peasantWelfare: -3,
          colonialPressure: 2,
          localStability: -1
        },
        immediateFeedback: "Anda terjebak dalam rezim Koelie Ordonnantie (1880). Di bawah aturan poenale sanctie, upaya keluar dari kebun diancam pidana dan kerja paksa, sementara upah Anda habis tersedot utang candu dan perjudian di barak."
      }
    ],
    historicalEpilogue: {
      whatActuallyHappened: "Di Kalimantan Barat, Kongsi Lanfang di Mandor baru dapat ditundukkan Belanda lewat perang Oktober 1884 hingga Februari 1885, dan setelah itu banyak warga Tionghoa beralih menjadi petani lada, karet, serta pedagang pedalaman (Yuan, 2000; Heidhues, 2003). Sementara itu di Deli, ratusan ribu kuli sinkeh yang direkrut via khehtau mengalami eksploitasi berat di bawah poenale sanctie (Breman, 1989; Stoler, 1985).",
      historicalOutcome: "Memperlihatkan kontras tajam antara kemandirian ekonomi pekebun/pedagang dengan penderitaan buruh kontrak perkebunan kolonial di Luar Jawa.",
      archivalSource: "Yuan (2000); Heidhues (1992, 2003); Breman (1989); Stoler (1985)."
    }
  },
  {
    id: "scenario-parliament-1860",
    role: "Intelektual & Jurnalis Peranakan Tionghoa",
    location: "Batavia & Surabaya",
    year: 1928,
    title: "Dilema Tiga Haluan Politik: Sin Po, Chung Hwa Hui, atau Indonesierschap PTI",
    situation: "Setelah berdirinya sekolah Tiong Hoa Hwee Koan (1900), pendirian HCS (1908), dan pengesahan UU Kekawulaan Belanda WNO (1910), masyarakat Tionghoa berdebat sengit di halaman surat kabar Melayu-Tionghoa mengenai arah perjuangan politik mereka di tengah bangkitnya pergerakan nasional Indonesia.",
    historicalContext: "Sebagaimana dipetakan sejarawan Leo Suryadinata (1981), pada masa akhir kolonial muncul tiga aliran politik utama: kelompok harian Sin Po (1910), Chung Hwa Hui (CHH, 1928), dan Partai Tionghoa Indonesia (PTI, 1932).",
    choices: [
      {
        id: "pol-opt-sinpo",
        choiceLabel: "Opsi A: Haluan Nasionalisme Tiongkok & Antikolonial (Kelompok Sin Po)",
        actionText: "Tolak Undang-Undang Kekawulaan Belanda (WNO 1910), dukung penuh Republik Tiongkok, namun tetap bersimpati dan mencetak lagu 'Indonesia Raya' karya W.R. Supratman di harian Sin Po.",
        consequences: {
          peasantWelfare: 2,
          colonialPressure: -2,
          localStability: 1
        },
        immediateFeedback: "Harian Sin Po menjadi garda depan penentang Wijkenstelsel dan Passenstelsel serta mencetak sejarah dengan mempublikasikan perdana naskah lagu 'Indonesia Raya' pada November 1928."
      },
      {
        id: "pol-opt-chh",
        choiceLabel: "Opsi B: Jalur Kooperatif Parlemen Kolonial (Chung Hwa Hui 1928)",
        actionText: "Bergabung bersama Kan Hok Hoei dan intelektual lulusan Belanda di Chung Hwa Hui (CHH) untuk memperjuangkan kepentingan Tionghoa melalui kursi di Volksraad.",
        consequences: {
          peasantWelfare: 0,
          colonialPressure: 2,
          localStability: 1
        },
        immediateFeedback: "Anda memperoleh akses lobi resmi di Volksraad untuk menuntut kesetaraan hukum Eropa, namun dikritik oleh kaum pergerakan karena dianggap terlalu elitis dan pro-status quo Belanda."
      },
      {
        id: "pol-opt-pti",
        choiceLabel: "Opsi C: Haluan Indonesierschap & Peleburan Nasional (PTI 1932)",
        actionText: "Dirikan Partai Tionghoa Indonesia (PTI) bersama Liem Koen Hian dan harian Sin Tit Po: ajak etnis Tionghoa melebur penuh dalam perjuangan kemerdekaan Indonesia bersama kaum pergerakan bumiputera.",
        consequences: {
          peasantWelfare: 3,
          colonialPressure: -3,
          localStability: 2
        },
        immediateFeedback: "Langkah visioner! Melalui haluan Indonesierschap, Anda menegaskan bahwa tanah air keturunan Tionghoa adalah Indonesia dan membangun solidaritas kokoh dengan tokoh-tokoh pergerakan kemerdekaan nasional."
      }
    ],
    historicalEpilogue: {
      whatActuallyHappened: "Ketiga aliran ini hidup berdampingan dan mewarnai ruang publik pers Melayu-Tionghoa pada dekade 1910–1930-an. Harian Sin Po berjasa mencetak perdana naskah lagu 'Indonesia Raya' (November 1928) dan mematangkan bahasa Melayu Pasar menjadi Bahasa Indonesia, sementara haluan Indonesierschap Partai Tionghoa Indonesia (Liem Koen Hian, 1932) menjadi fondasi integrasi kewarganegaraan Tionghoa di Republik Indonesia.",
      historicalOutcome: "Membuktikan kontribusi besar pers, pendidikan, dan gerakan politik Tionghoa dalam pembentukan identitas kebangsaan Indonesia modern.",
      archivalSource: "Leo Suryadinata (1981, 2020) & Ahmat Adam (1995)."
    }
  }
];

export const bibliographyData: BibliographyItem[] = [
  {
    id: "bib-alqurtuby-2021",
    authors: "Al Qurtuby, S., & Kholiludin, T. (Ed.)",
    year: "2021",
    title: "Tionghoa & budaya Nusantara",
    publisher: "eLSA Press",
    type: "Buku",
    fullCitation: "Al Qurtuby, S., & Kholiludin, T. (Ed.). (2021). Tionghoa & budaya Nusantara. eLSA Press."
  },
  {
    id: "bib-blusse-1988",
    authors: "Blussé, L.",
    year: "1988",
    title: "Persekutuan aneh: Pemukim Cina, wanita peranakan dan Belanda di Batavia VOC (Redaksi PA, Penerj.)",
    publisher: "Pustazet Perkasa",
    type: "Buku",
    fullCitation: "Blussé, L. (1988). Persekutuan aneh: Pemukim Cina, wanita peranakan dan Belanda di Batavia VOC (Redaksi PA, Penerj.). Pustazet Perkasa."
  },
  {
    id: "bib-budiman-2007",
    authors: "Budiman, H. (Ed.)",
    year: "2007",
    title: "Hak minoritas: Dilema multikulturalisme di Indonesia",
    publisher: "The Interseksi Foundation & Yayasan TIFA",
    type: "Buku",
    fullCitation: "Budiman, H. (Ed.). (2007). Hak minoritas: Dilema multikulturalisme di Indonesia. The Interseksi Foundation & Yayasan TIFA."
  },
  {
    id: "bib-dahana-2000",
    authors: "Dahana, A.",
    year: "2000",
    title: "Kegiatan awal masyarakat Tionghoa di Indonesia",
    publisher: "Wacana, Journal of the Humanities of Indonesia, 2(1), 54–72",
    type: "Jurnal",
    fullCitation: "Dahana, A. (2000). Kegiatan awal masyarakat Tionghoa di Indonesia. Wacana, Journal of the Humanities of Indonesia, 2(1), 54–72."
  },
  {
    id: "bib-daradjadi-2013",
    authors: "Daradjadi",
    year: "2013",
    title: "Geger Pacinan 1740–1743: Persekutuan Tionghoa-Jawa melawan VOC",
    publisher: "Penerbit Buku Kompas",
    type: "Buku",
    fullCitation: "Daradjadi. (2013). Geger Pacinan 1740–1743: Persekutuan Tionghoa-Jawa melawan VOC. Penerbit Buku Kompas."
  },
  {
    id: "bib-fauziah-2009",
    authors: "Fauziah, S.",
    year: "2009",
    title: "Peran orang Cina dalam perekonomian Kesultanan Islam Banten abad XVI–XVIII",
    publisher: "Al Qalam, 26(3)",
    type: "Jurnal",
    doiUrl: "https://doi.org/10.32678/alqalam.v26i3.1562",
    fullCitation: "Fauziah, S. (2009). Peran orang Cina dalam perekonomian Kesultanan Islam Banten abad XVI–XVIII. Al Qalam, 26(3). https://doi.org/10.32678/alqalam.v26i3.1562"
  },
  {
    id: "bib-fauziah-rohman-2019",
    authors: "Fauziah, S., & Rohman, M.",
    year: "2019",
    title: "Masjid Pacinan Tinggi: Merekonstruksi peran orang Tionghoa dalam penyebaran Islam di Banten",
    publisher: "Al Qalam, 36(1), 37–66",
    type: "Jurnal",
    doiUrl: "https://doi.org/10.32678/alqalam.v29i3.1407",
    fullCitation: "Fauziah, S., & Rohman, M. (2019). Masjid Pacinan Tinggi: Merekonstruksi peran orang Tionghoa dalam penyebaran Islam di Banten. Al Qalam, 36(1), 37–66. https://doi.org/10.32678/alqalam.v29i3.1407"
  },
  {
    id: "bib-hariyono-1993",
    authors: "Hariyono, P.",
    year: "1993",
    title: "Kultur Cina dan Jawa: Pemahaman menuju asimilasi kultural",
    publisher: "Pustaka Sinar Harapan",
    type: "Buku",
    fullCitation: "Hariyono, P. (1993). Kultur Cina dan Jawa: Pemahaman menuju asimilasi kultural. Pustaka Sinar Harapan."
  },
  {
    id: "bib-hasanah-2015",
    authors: "Hasanah, M.",
    year: "2015",
    title: "Ekonomi politik kolonialisme: Perspektif kebijakan ekonomi politik Pemerintah Hindia Belanda dalam mengelola industri gula Mangkunegaran pada periode 1870–1930",
    publisher: "Penerbit PolGov",
    type: "Buku",
    fullCitation: "Hasanah, M. (2015). Ekonomi politik kolonialisme: Perspektif kebijakan ekonomi politik Pemerintah Hindia Belanda dalam mengelola industri gula Mangkunegaran pada periode 1870–1930. Penerbit PolGov."
  },
  {
    id: "bib-lohanda-2007",
    authors: "Lohanda, M.",
    year: "2007",
    title: "Sejarah para pembesar mengatur Batavia",
    publisher: "Masup Jakarta",
    type: "Buku",
    fullCitation: "Lohanda, M. (2007). Sejarah para pembesar mengatur Batavia. Masup Jakarta."
  },
  {
    id: "bib-nayati-1985",
    authors: "Nayati, W.",
    year: "1985",
    title: "Pergeseran lokasi pemukiman orang Cina di Kota Banten dari abad XVI–XIX (berdasarkan pengamatan peta kuna Kota Banten)",
    publisher: "Berkala Arkeologi, 6(2), 70–83",
    type: "Jurnal",
    doiUrl: "https://doi.org/10.30883/jba.v6i2.445",
    fullCitation: "Nayati, W. (1985). Pergeseran lokasi pemukiman orang Cina di Kota Banten dari abad XVI–XIX (berdasarkan pengamatan peta kuna Kota Banten). Berkala Arkeologi, 6(2), 70–83. https://doi.org/10.30883/jba.v6i2.445"
  },
  {
    id: "bib-ramayanti-wisnu-2018",
    authors: "Ramayanti, A., & Wisnu",
    year: "2018",
    title: "Kehidupan kuli perempuan di perkebunan tembakau Deli Sumatera Timur tahun 1870–1930",
    publisher: "Avatara: e-Journal Pendidikan Sejarah, 6(3), 1–12",
    type: "Jurnal",
    fullCitation: "Ramayanti, A., & Wisnu. (2018). Kehidupan kuli perempuan di perkebunan tembakau Deli Sumatera Timur tahun 1870–1930. Avatara: e-Journal Pendidikan Sejarah, 6(3), 1–12."
  },
  {
    id: "bib-schrieke-2016",
    authors: "Schrieke, B. J. O.",
    year: "2016",
    title: "Kajian historis sosiologis masyarakat Indonesia (Jilid I)",
    publisher: "Penerbit Ombak",
    type: "Buku",
    fullCitation: "Schrieke, B. J. O. (2016). Kajian historis sosiologis masyarakat Indonesia (Jilid I). Penerbit Ombak."
  },
  {
    id: "bib-tan-2008",
    authors: "Tan, M. G.",
    year: "2008",
    title: "Etnis Tionghoa di Indonesia: Kumpulan tulisan",
    publisher: "Yayasan Pustaka Obor Indonesia",
    type: "Buku",
    fullCitation: "Tan, M. G. (2008). Etnis Tionghoa di Indonesia: Kumpulan tulisan. Yayasan Pustaka Obor Indonesia."
  },
  {
    id: "bib-thresnawaty-2015",
    authors: "Thresnawaty, E.",
    year: "2015",
    title: "Sejarah sosial-budaya masyarakat Cina Benteng di Kota Tangerang",
    publisher: "Patanjala: Jurnal Penelitian Sejarah dan Budaya, 7(1), 49–64",
    type: "Jurnal",
    doiUrl: "https://download.garuda.kemdikbud.go.id/article.php?article=737976&title=SEJARAH+SOSIALBUDAYA+MASYARAKAT+CINA+BENTENG+DI+KOTA+TANGERANG&val=11636",
    fullCitation: "Thresnawaty, E. (2015). Sejarah sosial-budaya masyarakat Cina Benteng di Kota Tangerang. Patanjala: Jurnal Penelitian Sejarah dan Budaya, 7(1), 49–64."
  },
  {
    id: "bib-wirawan-2020",
    authors: "Wirawan, Y.",
    year: "2020",
    title: "Keberagaman masyarakat Indonesia: Pengantar sejarah dan penelitian",
    publisher: "Penerbit Ombak",
    type: "Buku",
    fullCitation: "Wirawan, Y. (2020). Keberagaman masyarakat Indonesia: Pengantar sejarah dan penelitian. Penerbit Ombak."
  },
  {
    id: "bib-rush-1990",
    authors: "Rush, J. R.",
    year: "1990",
    title: "Opium to Java: Revenue farming and Chinese enterprise in colonial Indonesia, 1860–1910",
    publisher: "Cornell University Press",
    type: "Buku",
    fullCitation: "Rush, J. R. (1990). Opium to Java: Revenue farming and Chinese enterprise in colonial Indonesia, 1860–1910. Cornell University Press."
  },
  {
    id: "bib-diehl-1993",
    authors: "Diehl, F. W.",
    year: "1993",
    title: "Revenue farming and colonial finances in the Netherlands East Indies, 1816–1925",
    publisher: "Dalam J. Butcher & H. Dick (Ed.), The Rise and Fall of Revenue Farming",
    type: "Buku",
    fullCitation: "Diehl, F. W. (1993). Revenue farming and colonial finances in the Netherlands East Indies, 1816–1925. Dalam J. Butcher & H. Dick (Ed.), The Rise and Fall of Revenue Farming."
  },
  {
    id: "bib-heidhues-1992-2003",
    authors: "Heidhues, M. S.",
    year: "1992 & 2003",
    title: "Bangka tin and Mentok pepper (1992) & Golddiggers, farmers, and traders in the 'Chinese Districts' of West Kalimantan (2003)",
    publisher: "ISEAS & Cornell SEAP",
    type: "Buku",
    fullCitation: "Heidhues, M. S. (1992). Bangka tin and Mentok pepper: Chinese settlement on an Indonesian island. ISEAS; Heidhues, M. S. (2003). Golddiggers, farmers, and traders in the 'Chinese Districts' of West Kalimantan, Indonesia. Cornell SEAP."
  },
  {
    id: "bib-suryadinata-1981-2020",
    authors: "Suryadinata, L.",
    year: "1981 & 2020",
    title: "Peranakan Chinese politics in Java, 1917–1942 & Kajian Sosiokultural Tionghoa Indonesia",
    publisher: "Singapore University Press",
    type: "Buku",
    fullCitation: "Suryadinata, L. (1981). Peranakan Chinese politics in Java, 1917–1942. Singapore University Press."
  },
  {
    id: "bib-adam-1995",
    authors: "Adam, A.",
    year: "1995",
    title: "The vernacular press and the emergence of modern Indonesian consciousness (1855–1913)",
    publisher: "Cornell Southeast Asia Program",
    type: "Buku",
    fullCitation: "Adam, A. (1995). The vernacular press and the emergence of modern Indonesian consciousness (1855–1913). Cornell University Press."
  },
  {
    id: "bib-breman-stoler-deli",
    authors: "Breman, J. (1989) & Stoler, A. L. (1985)",
    year: "1985 & 1989",
    title: "Taming the Coolie Beast (Breman, 1989) & Capitalism and Confrontation in Sumatra's Plantation Belt (Stoler, 1985)",
    publisher: "Oxford University Press & Yale University Press",
    type: "Buku",
    fullCitation: "Breman, J. (1989). Taming the coolie beast: Plantation society and the colonial order in Southeast Asia. Oxford University Press; Stoler, A. L. (1985). Capitalism and confrontation in Sumatra's plantation belt. Yale University Press."
  },
  {
    id: "bib-arsip-kolonial-epigrafi",
    authors: "Sumber Epigrafi & Ordonansi Kolonial",
    year: "860 – 1910",
    title: "Prasasti Kencana (860 M), Ordonansi Opiumpacht (1809/1847), Regeeringsreglement (1854), Koelie Ordonnantie (1880), & Wet op het Nederlandsch Onderdaanschap (1910)",
    publisher: "Arsip Sejarah Nusantara & Staatsblad van Nederlandsch-Indië",
    type: "Arsip Kolonial",
    fullCitation: "Prasasti Kencana (860 M); Ordonansi Opiumpacht (1809 & 1847); Regeeringsreglement (1854); Koelie Ordonnantie (1880); Wet op het Nederlandsch Onderdaanschap / WNO (1910)."
  }
];
