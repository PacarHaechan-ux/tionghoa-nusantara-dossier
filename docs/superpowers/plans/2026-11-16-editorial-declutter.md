# Kurasi & Pemangkasan Pengulangan Narasi (Editorial Declutter) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Memangkas blok-blok kartu dan tabel yang berulang di dalam Bab I, Bab II, dan Bab III sehingga ritme membaca mengalir nyaman (~7–10 menit baca) tanpa informasi ganda atau label sisa web lama.

**Architecture:** Merampingkan komponen `BackgroundSection.tsx` (Bab I) dari 11 sub-blok menjadi 4 bagian cerita utama, menyederhanakan isi masing-masing dari 3 tab di `ExploitationSection.tsx` (Bab II) dan `ImplementationSection.tsx` (Bab III) agar setiap tab hanya menampilkan 1 sajian fokus tanpa tabel/kartu kembar, serta menyinkronkan `src/data/searchIndex.ts`.

**Tech Stack:** React 19, TypeScript, Vite 8, Oxlint.

**Spec:** `docs/superpowers/specs/2026-11-16-editorial-declutter-design.md`

## Global Constraints

- Wajib lulus `npm run build` (`tsc -b && vite build`) dan `npm run lint` (`oxlint`) dengan 0 error dan 0 warning (termasuk `noUnusedLocals` setelah pemangkasan).
- Pertahankan 100% atribusi penulis Kelompok 8 UNTIRTA dan seluruh fakta inti sejarah pada bagian yang dipertahankan.
- Jangan menyisakan tabel dan deretan kartu yang menceritakan data yang sama persis secara berurutan.

## Review Focus

- Tidak boleh ada impor data atau ikon `lucide-react` yang menganggur (`noUnusedLocals`) di `BackgroundSection.tsx`, `ExploitationSection.tsx`, dan `ImplementationSection.tsx` setelah pemangkasan blok.
- Tidak boleh ada label sisa kode lama (`"Surplus Uang"`, `"Nombok Pajak"`, `"Feodalisme & Kemiskinan"`) di `ImplementationSection.tsx`.
- Seluruh `elementId` pada `src/data/searchIndex.ts` harus mengarah ke elemen DOM yang benar-benar masih di-render setelah pemangkasan.

---

### Task 1: Perampingan Bab I, Bab II, Bab III & Sinkronisasi Pencarian

**Files:**
- Modify: `src/components/BackgroundSection.tsx`
- Modify: `src/components/ExploitationSection.tsx`
- Modify: `src/components/ImplementationSection.tsx`
- Modify: `src/data/searchIndex.ts`

**Interfaces:**
- Consumes: Objek data dari `src/data/historyContent.ts`
- Produces: Komponen `BackgroundSection`, `ExploitationSection`, `ImplementationSection` yang ringkas tanpa blok duplikat, serta `MONOGRAPH_SEARCH_INDEX` yang valid.

- [ ] **Step 1: Padatkan `src/components/BackgroundSection.tsx` menjadi 4 bagian inti**
  - Pertahankan Bagian 1 (*Narasi Pembuka + 4 Babak Lintas Zaman `backgroundData.crises` + Kotak Paradoks `backgroundData.vanDenBoschConcept`*), Bagian 2 (*Fajar Kebangsaan 1900–1932 `parliamentaryPoliticsData` + 3 Aliran Politik + Saklar Neraca Sejarah `negativeImpacts`/`positiveImpacts`*), Bagian 3 (*Galeri Tokoh `impactData.historicalCritics`*), dan Bagian 4 (*3 Kartu Lensa Sejarawan `historiographicalSynthesisData` + 3 Kutipan Arsip `backgroundData.quotes` + Refleksi Penutup `impactData.reformContext`*).
  - Hapus blok yang mengulang cerita yang sama: `vanDenBoschControversyData`, `everydayFarmerLifeData`, `famineCases`, `peasantResistanceData`, `prianganMonetizationData`, `vanReesReportData`, tabel `hist-data-table` kembar, dan `historianInterpretations`, beserta impor yang tidak lagi dipakai.

- [ ] **Step 2: Pangkas tabel & kartu kembar di `src/components/ExploitationSection.tsx`**
  - Hapus blok tabel `voc-comparison-block` di luar tab agar pembaca langsung masuk ke 3 tab fokus setelah membaca paragraf pengantar.
  - Pada Tab 1 (`'financial'`): pertahankan pemilih interaktif 5 Sektor Ekonomi (`exploitationData.commodities`) dan chips komoditas Nusantara (`secondaryCommodities`); hapus `commodityFinancialData` yang mengulang 5 sektor yang sama.
  - Pada Tab 2 (`'batig-slot'`): pertahankan pengantar, rumus *Pachtstelsel*, 3 mekanisme institusi (`exploitationData.mechanisms`), dan rincian visual *Opiumpacht* (`batigSlotAllocationData`); hapus tabel panjang kedua (`batigSlotDetailedData`).
  - Pada Tab 3 (`'ecology'`): pertahankan kontras Jawa vs Luar Jawa (`ecologicalZoningData`), kutipan refleksi (`bremanCritiqueData`), dan Glosarium Istilah Penting (`colonialGlossaryData`); hapus tumpukan kartu statistik (`laborStatistics`, `macroPopulationStatsData`, dan 3 sub-tabel `coffeeMacroStatsData`/`sugarMacroStatsData`/`indigoMacroStatsData`) beserta state/impor yang tidak terpakai.

- [ ] **Step 3: Pangkas kartu kembar & sisa label lama di `src/components/ImplementationSection.tsx`**
  - Pada Tab 1 (`'staatsblad'`): pertahankan 3 kartu ringkasan piramida hukum dan 4 regulasi utama (`implementationData.laws.slice(0, 4)`).
  - Pada Tab 2 (`'bupati'`): pertahankan 5 dimensi komunitas internal (`bupatiRolesData`) dan Tabel Pergeseran Kedudukan (`preangerBlueprintData`).
  - Pada Tab 3 (`'three-residencies'`): pertahankan 5 jejak historis Kesultanan Banten & Cina Benteng Tangerang (`vocExpansionData`), Tabel Perbandingan 3 Wilayah (`residencyComparisonData`), dan tombol lompat bab; hapus `residency-cards-grid` (yang mengulang isi tabel di atasnya dan masih menyisakan label `"Surplus Uang"` / `"Nombok Pajak"`) serta daftar 5 kawasan Luar Jawa (`exploitationData.outerJavaExpansion`) yang sudah dibahas di Bab II.

- [ ] **Step 4: Perbarui `src/data/searchIndex.ts` agar selaras dengan elemen yang dipertahankan**
  - Arahkan entri pencarian yang semula menuju ID kartu yang dipangkas ke ID induk atau kartu bab yang aktif (`crisis-card-*`, `pol-*`, `tokoh-*`, `hist-lens-card-*`, `commodity-tab-*`, `law-card-*`, `bupati-role-*`, `voc-mech-*`, `residency-comparison-table`).

- [ ] **Step 5: Verifikasi build & lint serta commit**
  - Run: `npm run build && npm run lint`
  - Expected: `✓ built` dan `Found 0 warnings and 0 errors.`
