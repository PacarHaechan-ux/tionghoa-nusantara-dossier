# Desain Tema Visual Porselen Biru-Putih & Samudra (Maritime Blue UI & Readability)

**Tanggal:** 16 November 2026
**Status:** Menunggu Persetujuan Pengguna

## 1. Tujuan & Latar Belakang (Intent & Why)
Menerapkan palet 4 warna biru maritim pilihan pengguna (`#132A4F`, `#0B568D`, `#5DBBE5`, `#9FE0F6`) ke dalam sistem antarmuka (UI) web dengan prioritas utama **kenyamanan mata saat membaca (*reading ergonomics*)** dan keselarasan tematik dengan sejarah Jalur Sutra Maritim, Angin Muson, serta Porselen Biru-Putih (*Qinghua*).

## 2. Goals, Non-Goals & Anti-Goals
- **Goals:**
  - Mengubah variabel warna global di `src/index.css` dan warna komponen pendukung ke palet **Porselen Biru-Putih & Samudra**.
  - Meningkatkan kenyamanan baca teks panjang melalui tinta biru malam pekat (`#0F223D`), permukaan baca putih-es porselen (`#F3F8FC`), *line-height* `1.78`, dan kontras WCAG AAA.
  - Memperbarui warna aksen pada tombol, tab aktif, *badge*, *border* tabel, bingkai pelat gambar (`#132A4F`), dan peta/visualisasi agar seragam dalam harmoni biru maritim.
- **Non-Goals:**
  - Tidak mengubah isi materi sejarah maupun struktur 3 bab yang sudah dirapikan.
- **Anti-Goals:**
  - Jangan menaruh paragraf bacaan panjang di atas latar biru muda menyala (`#5DBBE5`) yang menyilaukan mata.

## 3. Batasan Teknis (Constraints)
- Kontras teks utama terhadap latar belakang wajib $\ge 12:1$ (WCAG AAA).
- Wajib lulus `npm run build` dan `npm run lint` dengan 0 error dan 0 warning.

## 4. Pendekatan yang Dipertimbangkan (Approaches)
1. **Pendekatan A (Dipilih): Gaya *Porselen Biru-Putih & Samudra* (*Porcelain & Maritime Editorial*)**
   - Menggunakan permukaan baca putih-porselen sejuk (`#F3F8FC` & `#FFFFFF`) yang diturunkan dari `#9FE0F6`, dipadukan dengan tipografi dan bingkai pelat `#132A4F` (Navy), tombol/tab aktif `#0B568D` (Cerulean), serta *badge*/aksen `#5DBBE5` & `#9FE0F6`.
2. **Pendekatan B: Gaya *Full Biru Bertingkat***
   - Menggunakan `#5DBBE5` dan `#9FE0F6` secara penuh sebagai latar belakang halaman dan `#132A4F` untuk seluruh kartu, yang berisiko membuat mata cepat lelah saat membaca teks panjang.

## 5. Pemetaan Warna & Tipografi UI
- **Warna 1 — Deep Navy (`#132A4F`)**: Bingkai pelat foto arsip (`--bg-plate`), header tabel, judul utama, dan tinta teks primer (`#0F223D`).
- **Warna 2 — Maritime Blue (`#0B568D`)**: Aksen utama (`--accent-crimson` / tombol utama, indikator tab aktif, tautan, ikon utama, dan garis tepi kutipan).
- **Warna 3 — Sky Monsoon (`#5DBBE5`)**: Aksen sekunder, garis pemisah dekoratif, sorotan *hover*, dan *badge* kategori (`rgba(93, 187, 229, 0.18)`).
- **Warna 4 — Soft Ice Blue (`#9FE0F6`)**: Latar *badge* lembut, blok sorotan rumus/catatan (`#E6F4FA`), *border* kartu (`#C9E4F2`), dan permukaan dasar halaman (`#F3F8FC`).
