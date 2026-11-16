# Tema Visual Porselen Biru-Putih & Samudra (Maritime Blue UI & Readability) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menerapkan palet 4 warna biru maritim (`#132A4F`, `#0B568D`, `#5DBBE5`, `#9FE0F6`) ke seluruh antarmuka (UI) web dan meningkatkan kenyamanan baca (*reading ergonomics*) tanpa mengurangi keterbacaan teks panjang.

**Architecture:** Memperbarui token warna dasar, permukaan, bayangan, *badge*, dan tipografi bacaan di `src/index.css`, lalu menyelaraskan warna hardcoded (merah/cokelat/krem lama) pada seluruh berkas CSS komponen (`Navbar.css`, `Hero.css`, `BackgroundSection.css`, `ImpactSection.css`, `ExploitationSection.css`, `ImplementationSection.css`, `TimelineSection.css`, `InteractiveLabSection.css`, `HistoricalGamesSection.css`, `BibliographySection.css`, `Footer.css`, `QuickSearchModal.css`, `ImageLightboxModal.css`).

**Tech Stack:** CSS Custom Properties, React 19, TypeScript, Vite 8, Oxlint.

**Spec:** `docs/superpowers/specs/2026-11-16-maritime-blue-palette-design.md`

## Global Constraints

- Kontras teks utama terhadap latar belakang wajib $\ge 12:1$ (WCAG AAA: `#0F223D` di atas `#F3F8FC` dan `#FFFFFF`).
- Jangan menaruh paragraf bacaan panjang di atas latar biru muda menyala (`#5DBBE5`) yang menyilaukan mata.
- Wajib lulus `npm run build` dan `npm run lint` dengan 0 error dan 0 warning.

## Review Focus

- Pastikan tidak ada warna merah tua/cokelat hardcoded (`#8a1c14`, `#6b4c0b`, `rgba(138, 28, 20, ...)`, `rgba(107, 76, 11, ...)`) di berkas CSS komponen yang bertabrakan dengan tema biru maritim.
- Pastikan teks putih di atas tombol utama (`--accent-crimson: #0B568D` / `#132A4F`) dan di atas pelat arsip (`--bg-plate: #132A4F`) memiliki kontras tinggi dan terbaca jelas.
- Pastikan jarak antar-baris (*line-height* `1.78`) dan lebar bacaan (`--reading-measure: 68ch`) membuat paragraf cerita panjang nyaman dibaca.

---

### Task 1: Transformasi Token Warna Global & CSS Komponen ke Tema Biru Maritim + Kenyamanan Baca

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/Navbar.css`
- Modify: `src/components/Hero.css`
- Modify: `src/components/BackgroundSection.css`
- Modify: `src/components/ImpactSection.css`
- Modify: `src/components/ExploitationSection.css`
- Modify: `src/components/ImplementationSection.css`
- Modify: `src/components/TimelineSection.css`
- Modify: `src/components/InteractiveLabSection.css`
- Modify: `src/components/HistoricalGamesSection.css`
- Modify: `src/components/BibliographySection.css`
- Modify: `src/components/Footer.css`
- Modify: `src/components/QuickSearchModal.css`
- Modify: `src/components/ImageLightboxModal.css`
- Modify: `index.html`

**Interfaces:**
- Produces: Sistem tema CSS `--bg-parchment` (`#F3F8FC`), `--bg-parchment-light` (`#F9FCFF`), `--bg-parchment-card` (`#FFFFFF`), `--bg-parchment-dark` (`#E4F1FA`), `--bg-parchment-accent` (`#D3EAF8`), `--bg-plate` (`#132A4F`), `--bg-plate-elevated` (`#1A3868`), `--ink-primary` (`#0F223D`), `--ink-secondary` (`#243E63`), `--ink-muted` (`#466387`), `--accent-crimson` (`#0B568D`), `--accent-crimson-light` (`#1368A6`), `--accent-gold` (`#132A4F`), `--accent-verdigris` (`#0E6BA8`), `--border-subtle` (`#CFE4F2`), `--border-medium` (`#B3D4EA`), `--border-strong` (`#82B7DC`).

- [x] **Step 1: Perbarui token variabel CSS global dan tipografi kenyamanan baca di `src/index.css` & `index.html`**
  - Ubah `:root` di `src/index.css` agar menggunakan palet 4 warna biru (`#132A4F`, `#0B568D`, `#5DBBE5`, `#9FE0F6`) dan turunannya yang ramah mata.
  - Tingkatkan kenyamanan baca paragraf (`line-height: 1.78`, `--reading-measure: 68ch`, seleksi teks `rgba(159, 224, 246, 0.55)`).
  - Perbarui `<meta name="theme-color" content="#132A4F" />` di `index.html`.

- [x] **Step 2: Selaraskan warna hardcoded di seluruh berkas CSS komponen (`src/components/*.css`)**
  - Ganti warna `rgba(138, 28, 20, ...)`, `rgba(107, 76, 11, ...)`, `#8a1c14`, `#6b4c0b`, dan gradasi kertas krem lama pada `Navbar.css`, `Hero.css`, `BackgroundSection.css`, `ImpactSection.css`, `ExploitationSection.css`, `ImplementationSection.css`, `TimelineSection.css`, `InteractiveLabSection.css`, `HistoricalGamesSection.css`, `BibliographySection.css`, `Footer.css`, `QuickSearchModal.css`, dan `ImageLightboxModal.css` ke nuansa biru maritim (`#132A4F`, `#0B568D`, `#5DBBE5`, `#9FE0F6`).

- [x] **Step 3: Verifikasi build & lint serta commit**
  - Run: `npm run build && npm run lint`
  - Expected: `✓ built` dan `Found 0 warnings and 0 errors.`
