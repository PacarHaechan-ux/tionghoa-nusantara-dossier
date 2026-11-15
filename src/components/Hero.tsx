import React, { useState } from 'react';
import { heroData, backgroundData } from '../data/historyContent';
import type { HistoricalImage } from '../data/historyContent';
import {
  ArrowRight,
  Maximize2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onOpenImage?: (image: HistoricalImage, title: string) => void;
}

interface CuratorialPlate {
  id: string;
  shortLabel: string;
  year: string;
  title: string;
  image: HistoricalImage;
}

const curatorialPlates: CuratorialPlate[] = [
  {
    id: 'plate-kapal-jung',
    shortLabel: 'Kapal Jung',
    year: 'Abad V–XVII',
    title: 'Pelayaran Kapal Jung Tiongkok di Jalur Sutra Maritim Nusantara',
    image: {
      src: '/images/kapal-jung.jpg',
      alt: 'Litografi Bersejarah Kapal Jung Dagang Tiongkok (The Chinese Junk)',
      caption: 'Kapal jung berlayar tiga tiang dari pesisir Fujian dan Guangdong yang mengarungi Laut Tiongkok Selatan menuju bandar Tuban, Gresik, Malaka, Palembang, dan Banten dengan membawa sutra, porselen, serta untaian uang kepeng.',
      archiveSource: 'Litografi Maritim Abad ke-19 · Kronik Faxian (Abad V) · Anthony Reid (Age of Commerce, 1450–1680)',
    },
  },
  {
    id: 'plate-angin-muson',
    shortLabel: 'Angin Muson',
    year: 'Nov–Mar & Mei–Sep',
    title: 'Peta Siklus Angin Muson Pelayaran Jung Tiongkok–Nusantara',
    image: {
      src: '/images/peta-angin-muson.jpg',
      alt: 'Peta Siklus Angin Muson Timur Laut (Northeast Monsoon) dan Barat Daya (Southwest Monsoon)',
      caption: 'Siklus angin muson timur laut (November–Maret) yang membawa kapal jung Tiongkok turun ke Nusantara, serta angin muson barat daya/tenggara (Mei–September) untuk pelayaran kembali—mendorong pedagang menetap dan membentuk Pecinan awal.',
      archiveSource: 'Geografi Maritim Asia Tenggara · Anthony Reid (Age of Commerce, 1450–1680)',
    },
  },
  {
    id: 'plate-maritim-kepeng',
    shortLabel: 'Koin Kepeng',
    year: 'Majapahit–Banten',
    title: 'Revolusi Finansial Untaian Koin Tembaga Kepeng (Uang Picis)',
    image: heroData.image,
  },
  {
    id: 'plate-batavia-voc',
    shortLabel: 'Kapiten Batavia',
    year: '1619–1740',
    title: 'Kapitein Souw Beng Kong & Pembangunan Ekonomi Batavia',
    image: backgroundData.crises[1].image!,
  },
  {
    id: 'plate-pecinan-banten',
    shortLabel: 'Pecinan Banten',
    year: '1596–1726',
    title: 'Syahbandar Kiyai Ngabehi Cakradana & Masjid Pacinan Tinggi',
    image: {
      src: '/images/kyai-ngabehi-cakradana.jpg',
      alt: 'Potret Kiyai Ngabehi Cakradana dan Menara Masjid Pacinan Tinggi di Kesultanan Banten',
      caption: 'Kiyai Ngabehi Cakradana (Tantseko), Syahbandar utama Kesultanan Banten abad ke-17 sekaligus arsitek benteng Istana Surosowan, dengan latar Menara Masjid Pacinan Tinggi di Banten Lama.',
      archiveSource: 'Fauziah (2009) · Nayati (1985) · Fauziah & Rohman (2019)',
    },
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenImage }) => {
  const [activePlateIndex, setActivePlateIndex] = useState<number>(0);
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(true);

  const activePlate = curatorialPlates[activePlateIndex] ?? curatorialPlates[0];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 68;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="hero-section">
      <div className="container hero-container">
        {/* Asymmetric 7:5 Rijksmuseum Curatorial Split */}
        <div className="hero-split-grid">
          <div className="hero-editorial-col">
            <h1 className="hero-title">{heroData.title}</h1>
            <p className="hero-subtitle">{heroData.subtitle}</p>
            <p className="hero-overview-text">{heroData.overview}</p>

            <div className="hero-colophon-line">
              <span>{heroData.course}</span>
              <span className="colophon-dot" aria-hidden="true">·</span>
              <span>
                Kelompok 8: <strong>{heroData.authors[0].name}</strong> &amp;{' '}
                <strong>{heroData.authors[1].name}</strong>
              </span>
            </div>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo('latar-belakang')}
                id="hero-btn-explore"
              >
                <span>Mulai Penelusuran</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => scrollTo('timeline-section')}
                id="hero-btn-timeline"
              >
                <span>Garis Waktu (Abad V–1932)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Curatorial Archival Plate */}
          <figure className="hero-curatorial-plate">
            <div className="plate-canvas-wrap">
              <img
                src={activePlate.image.src}
                alt={activePlate.image.alt}
                className="plate-artwork-img"
                width={640}
                height={480}
                decoding="async"
                fetchPriority="high"
              />
              {onOpenImage && (
                <button
                  type="button"
                  className="plate-zoom-btn"
                  onClick={() => onOpenImage(activePlate.image, activePlate.title)}
                  aria-label={`Perbesar arsip ${activePlate.title}`}
                >
                  <Maximize2 size={15} strokeWidth={1.5} />
                  <span>Perbesar Pelat</span>
                </button>
              )}
            </div>

            <figcaption className="plate-plaque">
              <div className="plate-plaque-meta">
                <strong className="plate-plaque-title">{activePlate.title}</strong>
                <span className="plate-plaque-source">{activePlate.image.archiveSource}</span>
              </div>
              <p className="plate-plaque-caption">{activePlate.image.caption}</p>

              <div className="plate-switcher" role="tablist" aria-label="Pilih pelat arsip pameran">
                {curatorialPlates.map((plate, idx) => {
                  const isSelected = idx === activePlateIndex;
                  return (
                    <button
                      key={plate.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      className={`plate-switch-btn ${isSelected ? 'active' : ''}`}
                      onClick={() => setActivePlateIndex(idx)}
                    >
                      <span className="plate-switch-num tabular-nums">{idx + 1}.</span>
                      <span>{plate.shortLabel}</span>
                      <span className="plate-switch-year tabular-nums">({plate.year})</span>
                    </button>
                  );
                })}
              </div>
            </figcaption>
          </figure>
        </div>

        {/* Open 4-Column Archival Ledger Strip (1px Hairlines, Tabular Figures, Zero Icon Tiles) */}
        <dl className="hero-ledger-strip" aria-label="Ringkasan data kunci sejarah ekonomi dan sosial Tionghoa Nusantara">
          {heroData.highlights.map((item) => (
            <div key={item.label} className="ledger-stat-cell">
              <dd className="ledger-stat-value tabular-nums">{item.value}</dd>
              <dt className="ledger-stat-label">{item.label}</dt>
              <dd className="ledger-stat-note">{item.note}</dd>
            </div>
          ))}
        </dl>

        {/* Open 4-Act Monograph Digest (Zero Nested Cards) */}
        <div className="hero-digest-section">
          <button
            type="button"
            className="hero-digest-header"
            onClick={() => setIsSummaryOpen(!isSummaryOpen)}
            aria-expanded={isSummaryOpen}
            id="toggle-1-min-summary"
          >
            <div className="digest-heading-row">
              <h2 className="digest-title">{heroData.quickSummary.title}</h2>
              <span className="digest-readtime">
                {heroData.quickSummary.badge} · {heroData.quickSummary.readTime}
              </span>
            </div>
            <span
              className="digest-toggle-icon"
              aria-label={isSummaryOpen ? 'Sembunyikan Ringkasan' : 'Buka Ringkasan'}
            >
              {isSummaryOpen ? <ChevronUp size={18} strokeWidth={1.5} /> : <ChevronDown size={18} strokeWidth={1.5} />}
            </span>
          </button>

          {isSummaryOpen && (
            <div className="hero-digest-grid">
              {heroData.quickSummary.points.map((pt) => (
                <div key={pt.step} className="digest-act-col">
                  <h3 className="digest-act-title">
                    <span className="digest-act-num tabular-nums">{pt.step}.</span> {pt.label}
                  </h3>
                  <p className="digest-act-text">{pt.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
