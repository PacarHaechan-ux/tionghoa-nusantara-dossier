# Desain Restrukturisasi Narasi 3 Bab: Masyarakat Tionghoa di Nusantara

## 1. Tujuan & Alasan (Intent & Why)
Mengubah penyajian materi web dari format laporan makalah kuliah yang kaku dan terpecah-pecah menjadi **narasi sejarah populer (*historical storytelling*) yang mengalir, memukau, dan mudah dicerna**, terfokus pada tiga pilar utama sesuai judul kajian Kelompok 8:
1. **Dinamika Sejarah** (Alur perjalanan lintas zaman & pergolakannya)
2. **Peran Perekonomian** (Mesin penggerak niaga, fiskal, tambang, dan perkebunan)
3. **Kedudukan Sosial** (Posisi dalam masyarakat Kesultanan Banten vs rekayasa hukum kolonial)

## 2. Goals, Non-Goals, & Anti-Goals
- **Goals:**
  - Menyederhanakan alur baca utama menjadi **3 Bab Naratif** (`Bab I: Dinamika Lintas Zaman`, `Bab II: Peran dalam Perekonomian`, `Bab III: Kedudukan dalam Struktur Sosial`), diikuti `Garis Waktu`, `Lab Sejarah`, `TTS & Kuis`, dan `Pustaka`.
  - Menghapus seluruh label kaku khas makalah (*"Bab 2.2.1"*, *"Rumusan Masalah 1.2"*, *"Tujuan Penulisan"*, *"Kesimpulan 3.1 & Saran 3.2"*).
  - Memangkas jumlah tab berlapis yang membingungkan pembaca menjadi alur bercerita yang bersih dan fokus.
  - Menulis ulang teks di `src/data/historyContent.ts` dengan gaya cerita sejarah yang hidup, atmosferik, dan tetap akurat secara fakta/sitasi.
- **Non-Goals:**
  - Tidak mengubah palet warna dasar atau sistem desain *Curatorial Exhibition Monograph*.
- **Anti-Goals:**
  - Jangan sampai web terasa seperti *copy-paste* dokumen Word/PDF tugas kuliah, atau menumpuk 4–5 tab di setiap bab hingga pembaca kehilangan benang merah cerita.

## 3. Pendekatan yang Dipilih (Approaches)
- **Pendekatan A (Dipilih):** Peleburan 4 bagian materi lama menjadi **3 Bab Naratif Utuh** + penyederhanaan tab + penulisan ulang gaya bahasa menjadi *storytelling* sejarah.
- **Pendekatan B (Ditolak):** Hanya mengganti teks tanpa menyederhanakan jumlah bab dan tab, ditolak karena tidak menyelesaikan masalah alur baca yang membingungkan.

## 4. Rancangan Alur 3 Bab Utama ( Keputusan Desain)

### Beranda (`#beranda` · `Hero.tsx`)
- **Judul Utama:** *Jejak Langkah & Denyut Niaga: Masyarakat Tionghoa dalam Sejarah Nusantara*
- **Subjudul:** *Kisah lintas abad tentang pelayar angin muson, penggerak pasar kepulauan, dan pergulatan di balik tembok hukum kolonial*
- **Ringkasan Pembuka:** 4 babak cerita mengalir (bukan poin rumusan masalah): *1. Layar Jung & Koin Kepeng*, *2. Darah di Kali Angke 1740*, *3. Mesin Ekonomi di Dua Dunia*, *4. Dari Pecinan Menuju Indonesia*.

### Bab I · Dinamika Lintas Zaman (`#latar-belakang` · `BackgroundSection.tsx`)
- **Judul:** *Bab I · Dinamika Lintas Zaman: Dari Angin Muson hingga Fajar Kebangsaan*
- **Alur Cerita (Tanpa Tab Berbelit):**
  1. **Layar Muson & Kemitraan Awal (Abad V–XVII):** Kedatangan pelaut jung, sambutan hangat raja-raja Nusantara, hingga pembangunan Batavia bersama Kapitein Souw Beng Kong (1619).
  2. **Titik Balik Berdarah: Geger Pecinan (1740–1743):** Kisah dramatis pembantaian Oktober 1740 di Batavia dan aliansi laskar Tionghoa–prajurit Jawa Mataram yang mengguncang VOC.
  3. **Kebangkitan Modern & Nasionalisme (1900–1932):** Lahirnya sekolah modern *Tiong Hoa Hwee Koan* (1900), lantangnya pers *Sin Po* menyiarkan lagu *Indonesia Raya* (1928), hingga berdirinya Partai Tionghoa Indonesia oleh Liem Koen Hian (1932).
  4. **Galeri Tokoh Penggerak Zaman:** Profil ringkas tokoh-tokoh kunci lintas masa.

### Bab II · Peran dalam Perekonomian Nusantara (`#eksploitasi` · `ExploitationSection.tsx`)
- **Judul:** *Bab II · Peran dalam Perekonomian: Urat Nadi Pasar, Pajak, dan Keringat Kuli*
- **Disayangkan dalam 3 Tab Cerita Fokus (bukan 4 tab teknis):**
  1. **Tab 1 — Uang Kepeng, Gula & Jaringan Pasar Desa:** Bagaimana koin kepeng memonetisasi pasar tradisional, kincir penggilingan tebu berputar, dan pedagang kelontong menghubungkan petani desa dengan pelabuhan dunia.
  2. **Tab 2 — Mesin Kas Kolonial (Sistem Pacht):** Kisah di balik lelang monopoli candu (*Opiumpacht* yang menyumbang ~18% APBN Hindia Belanda), rumah gadai, dan pasar—di mana pemerintah kolonial memetik untung raksasa sambil menjadikan perantara sebagai tameng.
  3. **Tab 3 — Kontras Dua Dunia (Jawa vs Luar Jawa):** Membandingkan saudagar perantara di kota-kota Jawa dengan kerasnya hidup penambang parit *Kongsi* di Bangka/Kalimantan Barat serta jeratan cambuk *Poenale Sanctie* atas kuli kontrak di perkebunan Deli.

### Bab III · Kedudukan dalam Struktur Sosial Kolonial (`#pelaksanaan` · `ImplementationSection.tsx`)
- **Judul:** *Bab III · Kedudukan Sosial: Antara Harmoni Kesultanan & Sekat Hukum Kolonial*
- **Disajikan dalam 3 Tab Cerita Fokus:**
  1. **Tab 1 — Piramida Tiga Golongan & Tembok Pecinan:** Bagaimana Belanda menciptakan kasta *Timur Asing (Vreemde Oosterlingen)* di tengah Eropa dan Pribumi, lengkap dengan aturan wajib tinggal di Pecinan (*Wijkenstelsel*) dan surat jalan (*Passenstelsel*).
  2. **Tab 2 — Wajah Ganda Komunitas (Peranakan, Totok & Para Kapiten):** Mengenal perbedaan budaya *Peranakan* dan imigran *Totok (Sinkeh)*, serta posisi dilematis para Opsir Tionghoa (*Majoor, Kapitein, Luitenant*).
  3. **Tab 3 — Kisah Harmoni dari Banten & Tangerang:** Kontras indah di Kesultanan Banten—tempat Kiyai Ngabehi Cakradana dipercaya Sultan Ageng Tirtayasa menjadi Syahbandar, berdirinya Masjid Pacinan Tinggi, hingga akulturasi masyarakat *Cina Benteng* di tepian Sungai Cisadane.

### Bagian Pendukung Interaktif
- **Garis Waktu (`#timeline-section`)**, **Laboratorium Peta & Simulator (`#interactive-lab`)**, **Permainan TTS & Kuis (`#permainan-sejarah`)**, dan **Kutipan & Pustaka (`#pustaka`)** tetap hadir dengan bahasa pengantar yang selaras dan mengalir.
