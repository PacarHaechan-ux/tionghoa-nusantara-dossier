# Desain Kurasi & Pemangkasan Pengulangan Narasi (Editorial Declutter)

**Tanggal:** 16 November 2026
**Status:** Menunggu Persetujuan Pengguna

## 1. Tujuan & Latar Belakang (Intent & Why)
Meskipun struktur 3 bab utama dan gaya bahasa bercerita (*historical storytelling*) sudah diterapkan, pembaca masih mengalami kelelahan visual (*information overload*) karena adanya sub-bagian yang mengulang cerita yang sama (misalnya Geger Pecinan 1740 dan 4 fase zaman muncul hingga 4 kali di Bab I), serta tabel yang langsung diikuti oleh kartu kembar di Bab II dan Bab III. Perubahan ini bertujuan memangkas elemen yang berulang agar ritme baca mengalir nyaman seperti majalah sejarah kuratorial (~7–10 menit baca).

## 2. Goals, Non-Goals & Anti-Goals
- **Goals:**
  - Memadatkan **Bab I (`BackgroundSection.tsx`)** dari 11 sub-blok menjadi **4 bagian cerita utama** yang mengalir tanpa pengulangan.
  - Menyederhanakan isi tiap tab di **Bab II (`ExploitationSection.tsx`)** dan **Bab III (`ImplementationSection.tsx`)** agar setiap tab hanya menampilkan 1 sajian utama (tanpa tabel + kartu kembar).
  - Menghapus sisa label kode lama (`"Surplus Uang"`, `"Nombok Pajak"`, `"Feodalisme & Kemiskinan"`) pada kartu wilayah di Bab III.
  - Menyinkronkan kembali `src/data/searchIndex.ts` agar tidak ada pintasan pencarian yang mengarah ke elemen DOM yang sudah dipangkas.
- **Non-Goals:**
  - Tidak mengubah isi materi sejarah pokok atau atribusi penulis Kelompok 8 UNTIRTA.
  - Tidak mengubah komponen `TimelineSection`, `InteractiveLabSection`, `HistoricalGamesSection`, dan `BibliographySection`.
- **Anti-Goals:**
  - Jangan menyisakan tabel dan deretan kartu yang menceritakan data yang sama persis secara berurutan.

## 3. Batasan Teknis (Constraints)
- Wajib lulus `npm run build` (`tsc -b && vite build`) dan `npm run lint` (`oxlint`) dengan 0 error dan 0 warning (termasuk `noUnusedLocals` setelah pemangkasan).

## 4. Pendekatan yang Dipertimbangkan (Approaches)
1. **Pendekatan A (Dipilih): Ritme Majalah Sejarah (*Editorial Story Flow — Fokus, Padat, Tanpa Pengulangan*)**
   - Memangkas langsung blok-blok yang duplikatif sehingga setiap topik diceritakan satu kali secara utuh dan kuat.
2. **Pendekatan B: Mode Ringkas + Tombol Lipat (*Collapsible Deep-Dive*)**
   - Menyembunyikan blok-blok berulang di balik tombol *accordion*, namun tetap menyisakan kerumitan visual dan pengulangan saat dibuka.

## 5. Rincian Desain per Bab (Pendekatan A)
1. **Bab I · Dinamika Sejarah (`src/components/BackgroundSection.tsx`) — 4 Bagian Inti:**
   - **Bagian 1 · Empat Babak Lintas Zaman & Paradoks Kolonial:** Menampilkan narasi pembuka, 4 kartu babak bergambar arsip (`backgroundData.crises`), dan kotak 2 kolom *Pertanyaan Kunci & Paradoks Ketergantungan Ekonomi vs Sekat Hukum* (`backgroundData.vanDenBoschConcept`). *(Menghapus blok duplikat: `vanDenBoschControversyData`, `everydayFarmerLifeData`, `famineCases`, `peasantResistanceData`, dan `prianganMonetizationData`).*
   - **Bagian 2 · Fajar Kebangsaan & Tiga Haluan Politik (1900–1932):** Menampilkan 4 tonggak kebangkitan modern (`parliamentaryPoliticsData`: THHK 1900, *Sin Po* 1928, CHH, PTI 1932), ringkasan 3 aliran politik, serta saklar *Neraca Sejarah (Luka Segregasi vs Warisan Kontribusi)*.
   - **Bagian 3 · Galeri Tokoh Penggerak Zaman:** Galeri 6 potret tokoh interaktif (`impactData.historicalCritics` dengan filter kategori & sorotan tokoh).
   - **Bagian 4 · Lensa Sejarawan & Suara Arsip:** Menampilkan 3 kartu mazhab sejarawan (`historiographicalSynthesisData`), 3 kutipan arsip (`backgroundData.quotes`), dan paragraf refleksi penutup (`impactData.reformContext`). *(Menghapus tabel kembar di atas kartu mazhab, `vanReesReportData`, dan `historianInterpretations` yang duplikatif).*
2. **Bab II · Peran dalam Perekonomian (`src/components/ExploitationSection.tsx`):**
   - Menghapus tabel perbandingan besar di luar tab agar pembaca langsung masuk ke 3 tab fokus setelah membaca paragraf pengantar.
   - **Tab 1 (`'financial'`):** Pemilih interaktif 5 Sektor Ekonomi (`exploitationData.commodities`) + chips komoditas Nusantara (`secondaryCommodities`). *(Menghapus `commodityFinancialData` yang mengulang 5 sektor yang sama).*
   - **Tab 2 (`'batig-slot'`):** Rumus cara kerja *Pachtstelsel* + 3 mekanisme institusi (`exploitationData.mechanisms`) + grafik bar kontribusi *Opiumpacht* (`batigSlotAllocationData`). *(Menghapus tabel panjang kedua `batigSlotDetailedData`).*
   - **Tab 3 (`'ecology'`):** Kontras Jawa vs Luar Jawa (`ecologicalZoningData`) + kutipan refleksi (`bremanCritiqueData`) + Glosarium Istilah Penting (`colonialGlossaryData`). *(Menghapus kartu statistik buruh & 3 sub-tabel komoditas yang berulang).*
3. **Bab III · Kedudukan Sosial (`src/components/ImplementationSection.tsx`):**
   - **Tab 1 (`'staatsblad'`):** 3 kartu ringkasan piramida hukum + 4 regulasi utama (`implementationData.laws.slice(0, 4)`).
   - **Tab 2 (`'bupati'`):** 5 dimensi komunitas internal (`bupatiRolesData`) + Tabel Pergeseran Kedudukan Pra-Kolonial vs Kolonial (`preangerBlueprintData`).
   - **Tab 3 (`'three-residencies'`):** 5 jejak historis Kesultanan Banten & Cina Benteng Tangerang (`vocExpansionData`) + Tabel Perbandingan 3 Wilayah (`residencyComparisonData`). *(Menghapus 3 kartu wilayah kembar di bawah tabel yang masih memuat label "Surplus Uang / Nombok Pajak" serta 5 kartu Luar Jawa yang sudah dibahas di Bab II).*
