# Restrukturisasi Narasi 3 Bab Sejarah Tionghoa Nusantara Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Merombak struktur halaman dan gaya bahasa web menjadi 3 Bab Naratif Utama (*Bab I: Dinamika Lintas Zaman*, *Bab II: Peran dalam Perekonomian*, *Bab III: Kedudukan dalam Struktur Sosial*) dengan gaya bercerita sejarah (*historical storytelling*) yang mengalir, tanpa label makalah kaku, dan dengan jumlah tab yang lebih ringkas.

**Architecture:** Menggabungkan 4 komponen bab lama (`BackgroundSection`, `ExploitationSection`, `ImplementationSection`, `ImpactSection`) menjadi 3 komponen bab naratif utama di `src/App.tsx` dan `src/components/Navbar.tsx` (menghapus `ImpactSection` sebagai bagian terpisah dan melebur kisah perlawanan, kebangkitan 1900–1932, serta profil tokoh ke dalam Bab I Dinamika Sejarah). Menyederhanakan tab di Bab II dan Bab III menjadi masing-masing 3 tab bercerita yang fokus, serta menulis ulang narasi di `src/data/historyContent.ts` dan indeks pencarian `src/data/searchIndex.ts`.

**Tech Stack:** React 19, TypeScript, Vite 8, Oxlint, Vanilla CSS.

**Spec:** `docs/superpowers/specs/2026-11-15-narrative-three-chapters-design.md`

## Global Constraints

- Pertahankan sistem desain *Curatorial Exhibition Monograph* (tanpa kartu bersarang, tanpa emoji pada kontrol UI, ikon `lucide-react` strokeWidth 1.5).
- Hapus seluruh penomoran kaku khas makalah (`Bab 2.2.1`, `Rumusan Masalah 1.2`, `Tujuan Penulisan`, `Kesimpulan 3.1 & Saran 3.2`).
- Pastikan `npm run build` (`tsc -b && vite build`) dan `npm run lint` (`oxlint`) lulus dengan 0 error dan 0 warning.

## Review Focus

- Tautan pintasan pencarian cepat (`Ctrl+K`) di `src/data/searchIndex.ts` tidak boleh mengarah ke `sectionId: 'dampak'` atau `tabId` lama yang sudah dilebur, melainkan harus mengarah ke ID elemen dan tab yang valid pada 3 bab baru.
- Navigasi di `src/components/Navbar.tsx` (desktop, drawer mobile, dan bottom dock) harus selaras dengan 3 ID bab naratif (`#latar-belakang`, `#eksploitasi`, `#pelaksanaan`).
- Tidak boleh ada variabel/impor tak terpakai (`noUnusedLocals`) saat `ImpactSection` dilebur dan tab disederhanakan.

---

### Task 1: Penulisan Ulang Narasi Bercerita di `src/data/historyContent.ts`

**Files:**
- Modify: `src/data/historyContent.ts`

**Interfaces:**
- Produces: Objek data `heroData`, `backgroundData`, `vanDenBoschControversyData`, `everydayFarmerLifeData`, `exploitationData`, `commodityFinancialData`, `ecologicalZoningData`, `batigSlotAllocationData`, `implementationData`, `residencyComparisonData`, `bupatiRolesData`, `preangerBlueprintData`, `vocExpansionData`, `impactData` dengan narasi *storytelling* sejarah yang mengalir untuk 3 Bab Utama.

- [x] **Step 1: Tulis ulang `heroData` dan `backgroundData` (Bab I · Dinamika Lintas Zaman) di `src/data/historyContent.ts`**
  - Ubah `heroData.title` menjadi `"Jejak Langkah & Denyut Niaga: Masyarakat Tionghoa dalam Sejarah Nusantara"`, `heroData.subtitle`, `heroData.overview`, dan `heroData.quickSummary` menjadi 4 babak cerita mengalir.
  - Ubah `backgroundData` menjadi **Bab I · Dinamika Lintas Zaman: Dari Angin Muson hingga Fajar Kebangsaan** yang menceritakan perjalanan kronologis dari pelayaran jung, kemitraan VOC Batavia 1619, Tragedi Geger Pecinan 1740–1743, pergeseran abad ke-19, hingga kebangkitan sekolah THHK (1900), pers *Sin Po* (1928), dan PTI (1932).

- [x] **Step 2: Tulis ulang narasi `exploitationData` (Bab II · Peran dalam Perekonomian) dan `implementationData` (Bab III · Kedudukan dalam Struktur Sosial) di `src/data/historyContent.ts`**
  - Ubah kalimat deskripsi yang semula berformat laporan makalah menjadi narasi sejarah populer yang hidup dan mudah dipahami.

- [x] **Step 3: Verifikasi kompilasi TypeScript pada `src/data/historyContent.ts`**
  - Run: `npx tsc --noEmit`
  - Expected: Exit code 0.

---

### Task 2: Peleburan Menjadi 3 Komponen Bab Utama & Penyederhanaan Tab

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/BackgroundSection.tsx`
- Modify: `src/components/ExploitationSection.tsx`
- Modify: `src/components/ImplementationSection.tsx`
- Modify: `src/data/searchIndex.ts`

**Interfaces:**
- Consumes: Data naratif dari `src/data/historyContent.ts`
- Produces: Alur 3 Bab Utama di DOM (`#latar-belakang`, `#eksploitasi`, `#pelaksanaan`) dan katalog pencarian `MONOGRAPH_SEARCH_INDEX` yang bersih.

- [x] **Step 1: Perbarui `src/components/BackgroundSection.tsx` menjadi Bab I (Dinamika Lintas Zaman)**
  - Sajikan alur cerita kronologis dari pelayaran awal, tragedi Geger Pecinan 1740 & perlawanan kongsi, kebangkitan modern 1900–1932 (THHK, *Sin Po*, PTI), hingga Galeri Tokoh Kunci (`impactData.historicalCritics`) dan refleksi sejarawan dalam satu alur gulir yang mengalir.

- [x] **Step 2: Sederhanakan `src/components/ExploitationSection.tsx` menjadi Bab II (Peran dalam Perekonomian) dengan 3 Tab Cerita**
  - Tab 1 (`'financial'`): *Koin Kepeng, Gula & Jaringan Pasar Desa*
  - Tab 2 (`'batig-slot'`): *Mesin Pajak Kolonial (Sistem Pacht & Opiumpacht)*
  - Tab 3 (`'ecology'`): *Kontras Dua Dunia: Saudagar Jawa vs Kongsi Tambang & Kuli Deli* (termasuk glosarium istilah penting).

- [x] **Step 3: Sederhanakan `src/components/ImplementationSection.tsx` menjadi Bab III (Kedudukan dalam Struktur Sosial) dengan 3 Tab Cerita**
  - Tab 1 (`'staatsblad'`): *Piramida Tiga Golongan & Tembok Pecinan (Vreemde Oosterlingen, Wijkenstelsel & Surat Jalan)*
  - Tab 2 (`'bupati'`): *Wajah Komunitas: Peranakan, Totok & Para Kapiten*
  - Tab 3 (`'three-residencies'`): *Harmoni Kesultanan Banten & Cina Benteng Tangerang (Syahbandar Cakradana, Masjid Pacinan Tinggi & Perbandingan Wilayah)*.

- [x] **Step 4: Perbarui `src/App.tsx`, `src/components/Navbar.tsx`, dan `src/data/searchIndex.ts`**
  - Hapus render `<ImpactSection />` yang terpisah di `src/App.tsx` karena isinya telah menyatu secara organik ke dalam Bab I–III.
  - Perbarui `navItems` dan `quickDockItems` di `src/components/Navbar.tsx` menjadi: `Beranda`, `1. Dinamika Sejarah`, `2. Peran Ekonomi`, `3. Kedudukan Sosial`, `Garis Waktu`, `Lab Sejarah`, `TTS & Kuis`, `Pustaka`.
  - Perbarui `src/data/searchIndex.ts` agar seluruh entri pencarian mengarah tepat ke 3 bab dan tab baru.

- [x] **Step 5: Jalankan verifikasi build & linter serta commit**
  - Run: `npm run build && npm run lint`
  - Expected: `✓ built` dan `Found 0 warnings and 0 errors.`
