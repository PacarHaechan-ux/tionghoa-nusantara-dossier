import React, { useState, useEffect, useMemo } from 'react';
import {
  backgroundData,
  heroData,
  vanDenBoschControversyData,
  everydayFarmerLifeData,
  impactData,
  peasantResistanceData,
  parliamentaryPoliticsData,
  historiographicalSynthesisData,
  vanReesReportData,
  prianganMonetizationData,
} from '../data/historyContent';
import type { HistoricalImage } from '../data/historyContent';
import {
  MONOGRAPH_NAVIGATE_EVENT,
  type MonographNavigationTarget,
} from '../utils/monographNavigator';
import {
  Coins,
  ZoomIn,
  AlertOctagon,
  TrendingUp,
  BookOpen,
  CheckCircle,
  XCircle,
  User,
  FileText,
  ArrowUpRight,
} from 'lucide-react';
import './BackgroundSection.css';
import './ImpactSection.css';

interface BackgroundSectionProps {
  onOpenImage?: (image: HistoricalImage, title: string) => void;
}

const getMonetizationBadgeClass = (level: string) => {
  switch (level) {
    case 'Sangat Rendah':
    case 'Rendah':
      return 'badge-crimson';
    case 'Terbatas':
      return 'badge-gold';
    default:
      return 'badge-verdigris';
  }
};

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({ onOpenImage }) => {
  const [activeImpactPolarity, setActiveImpactPolarity] = useState<'negative' | 'positive'>('negative');
  const [criticCategoryFilter, setCriticCategoryFilter] = useState<string>('Semua');
  const [selectedCriticId, setSelectedCriticId] = useState<string>(
    impactData.historicalCritics[0]?.id ?? 'tokoh-cakradana'
  );

  const criticCategories = useMemo(() => {
    const unique = Array.from(new Set(impactData.historicalCritics.map((c) => c.category)));
    return ['Semua', ...unique];
  }, []);

  const filteredCritics = useMemo(() => {
    if (criticCategoryFilter === 'Semua') return impactData.historicalCritics;
    return impactData.historicalCritics.filter((c) => c.category === criticCategoryFilter);
  }, [criticCategoryFilter]);

  const activeCritic = useMemo(() => {
    return (
      impactData.historicalCritics.find((c) => c.id === selectedCriticId) ??
      impactData.historicalCritics[0]
    );
  }, [selectedCriticId]);

  useEffect(() => {
    const handleNavigate = (e: Event) => {
      const detail = (e as CustomEvent<MonographNavigationTarget>).detail;
      if (!detail || (detail.sectionId !== 'latar-belakang' && detail.sectionId !== 'dampak')) {
        return;
      }
      if (detail.subTabId === 'negative' || detail.subTabId === 'positive') {
        setActiveImpactPolarity(detail.subTabId);
      }
      if (detail.elementId?.startsWith('tokoh-')) {
        setCriticCategoryFilter('Semua');
        setSelectedCriticId(detail.elementId);
      }
    };
    window.addEventListener(MONOGRAPH_NAVIGATE_EVENT, handleNavigate);
    return () => window.removeEventListener(MONOGRAPH_NAVIGATE_EVENT, handleNavigate);
  }, []);

  return (
    <section id="latar-belakang" className="section background-section">
      <div className="container">
        {/* Monograph 2-Column Chapter Header */}
        <div className="section-header">
          <div>
            <span className="badge badge-crimson chapter-kicker-badge">Bab I · Dinamika Sejarah</span>
            <h2 className="section-title">{backgroundData.sectionTitle}</h2>
          </div>
          <p className="section-subtitle">{backgroundData.sectionSubtitle}</p>
        </div>

        {/* Opening Historical Narrative */}
        <div className="narrative-intro-sheet">
          <p className="narrative-lead">{backgroundData.narrative}</p>
        </div>

        {/* Four Chronological Acts Across Eras */}
        <div className="crisis-cards-grid">
          {backgroundData.crises.map((crisis, index) => (
            <article key={crisis.id} className="parchment-card crisis-card" id={`crisis-card-${crisis.id}`}>
              <div className="crisis-card-header">
                <h3 className="crisis-name">
                  <span className="crisis-number tabular-nums">{index + 1}.</span> {crisis.name}
                </h3>
                <span className="badge badge-crimson tabular-nums">{crisis.years}</span>
              </div>

              {crisis.image && (
                <div
                  className="crisis-image-container"
                  onClick={() => onOpenImage?.(crisis.image!, crisis.name)}
                  role="button"
                  tabIndex={0}
                  title="Klik untuk memperbesar pelat arsip sejarah"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onOpenImage?.(crisis.image!, crisis.name);
                    }
                  }}
                >
                  <img
                    src={crisis.image.src}
                    alt={crisis.image.alt}
                    className="crisis-image-media"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) parent.style.display = 'none';
                    }}
                  />
                  <div className="crisis-image-zoom-tag">
                    <ZoomIn size={13} strokeWidth={1.5} />
                    <span>Perbesar Pelat Arsip</span>
                  </div>
                </div>
              )}

              <p className="crisis-impact">{crisis.impact}</p>

              <div className="crisis-cost-footer">
                <Coins size={16} strokeWidth={1.5} className="crisis-cost-icon" />
                <div className="crisis-cost-text">
                  <span className="cost-label">Tonggak historis &amp; moneter</span>
                  <strong className="cost-value tabular-nums">{crisis.cost}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Curatorial Narrative Threads — Open 2-Column Monograph Layout (Zero Nested Cards) */}
        <div className="vandenbosch-open-section" id="vandenbosch-concept-section">
          <div className="vandenbosch-content">
            <div className="vandenbosch-info">
              <span className="badge badge-gold chapter-kicker-badge">Pertanyaan Kunci Sejarah</span>
              <h3 className="vandenbosch-title">{backgroundData.vanDenBoschConcept.title}</h3>
              <p className="vandenbosch-summary">{backgroundData.vanDenBoschConcept.summary}</p>

              <ol className="vandenbosch-points-list">
                {backgroundData.vanDenBoschConcept.points.map((pt, idx) => (
                  <li key={idx} className="vandenbosch-point-item">
                    <span className="point-bullet tabular-nums">{idx + 1}.</span>
                    <p className="point-text">{pt}</p>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="parchment-card vandenbosch-aside-box">
              <span className="badge badge-crimson chapter-kicker-badge">Benang Merah Narasi</span>
              <h4 className="aside-heading">Paradoks Ketergantungan Ekonomi &amp; Sekat Hukum</h4>
              <p className="aside-body">
                Di satu sisi, kekuasaan kolonial sangat bergantung pada masyarakat Tionghoa untuk menggerakkan
                perdagangan perantara, pajak <em>pacht</em>, dan tenaga kerja. Namun di sisi lain, kecurigaan politik
                memicu pembantaian Geger Pecinan 1740 serta segregasi hukum <em>Vreemde Oosterlingen</em>,{' '}
                <em>Wijkenstelsel</em>, dan <em>Passenstelsel</em>.
              </p>
              <blockquote className="aside-quote">
                “Dibutuhkan sebagai tulang punggung ekonomi, namun disekat secara hukum agar tak bersatu dengan rakyat pribumi.”
              </blockquote>

              {heroData.image && (
                <div
                  className="vandenbosch-portrait-banner"
                  onClick={() => onOpenImage?.(heroData.image, 'Jalur Sutra Maritim & Koin Kepeng')}
                  role="button"
                  tabIndex={0}
                  title="Klik untuk memperbesar pelat arsip Jalur Sutra Maritim & Koin Kepeng"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onOpenImage?.(heroData.image, 'Jalur Sutra Maritim & Koin Kepeng');
                    }
                  }}
                >
                  <img
                    src={heroData.image.src}
                    alt={heroData.image.alt}
                    className="vandenbosch-portrait-media"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) parent.style.display = 'none';
                    }}
                  />
                  <div className="vandenbosch-portrait-zoom-hint">
                    <ZoomIn size={13} strokeWidth={1.5} />
                    <span>Pelat Arsip Maritim &amp; Kepeng</span>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>

        {/* 6 Jejak Kunci Pra-Kolonial & VOC */}
        <div className="controversy-block">
          <div className="monograph-sub-opener">
            <h3 className="controversy-title">
              Enam Jejak Kunci: Dari Uang Kepeng Majapahit hingga Geger Pecinan
            </h3>
            <p className="controversy-subtitle">
              Menelusuri revolusi koin kepeng, kiprah Syahbandar di Kesultanan Banten, institusi Kapiten Batavia 1619, hingga tragedi Oktober 1740 dan diaspora pesisir Jawa
            </p>
          </div>

          <div className="controversy-grid">
            {vanDenBoschControversyData.map((item) => (
              <article key={item.id} className="parchment-card controversy-card" id={item.id}>
                <div className="controversy-card-header">
                  <h4 className="controversy-item-title">{item.title}</h4>
                  <span className="badge badge-crimson">{item.badge}</span>
                </div>
                <p className="controversy-item-desc">{item.description}</p>
                <div className="controversy-detail-footer">
                  <span className="detail-tag">Catatan arsip</span>
                  <p className="detail-text">{item.historicalDetail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Ekosistem Permukiman Niaga Pecinan Awal & Siklus Angin Muson */}
        <div className="farmer-life-open-section" id="farmer-bivak-section">
          <div className="monograph-sub-opener">
            <h3 className="farmer-life-title">{everydayFarmerLifeData.title}</h3>
            <p className="farmer-life-subtitle">{everydayFarmerLifeData.subtitle}</p>
          </div>

          <div className="farmer-aspects-grid">
            {everydayFarmerLifeData.aspects.map((aspect, idx) => (
              <article key={idx} className="parchment-card farmer-aspect-card">
                <div className="aspect-card-top">
                  <h4 className="aspect-title">
                    <span className="aspect-number tabular-nums">{idx + 1}.</span> {aspect.title}
                  </h4>
                  <span className="badge badge-gold">{aspect.tag}</span>
                </div>
                <p className="aspect-desc">{aspect.description}</p>
              </article>
            ))}
          </div>

          <figure className="quote-card farmer-quote-extract">
            <blockquote className="quote-text">
              “{everydayFarmerLifeData.quote.text}”
            </blockquote>
            <figcaption className="quote-author">
              <span className="quote-role">{everydayFarmerLifeData.quote.source}</span>
            </figcaption>
          </figure>
        </div>

        {/* CLIMAX OF BAB I: BARA PERLAWANAN & FAJAR PERGERAKAN (1740–1932) */}
        <div className="controversy-block" id="bara-perlawanan-section">
          <div className="monograph-sub-opener">
            <div>
              <span className="badge badge-crimson chapter-kicker-badge">Klimaks Sejarah · 1740–1932</span>
              <h3 className="controversy-title">
                Bara Perlawanan &amp; Fajar Kebangsaan: Dari Geger Pecinan hingga Sumpah Pemuda
              </h3>
            </div>
            <p className="controversy-subtitle">
              Rekam jejak tragedi Oktober 1740, aliansi militer Tionghoa–Jawa, Perang Kongsi di Kalimantan Barat, hingga kebangkitan THHK 1900, pers Sin Po 1928, dan Partai Tionghoa Indonesia 1932
            </p>
          </div>

          {/* 3 Tragedi & Titik Balik Kekerasan Kolonial */}
          <div className="famine-cases-block">
            <div className="famine-cards-grid">
              {impactData.famineCases.map((famine, index) => (
                <article key={index} className="parchment-card famine-card" id={`famine-case-${index}`}>
                  <div className="famine-card-top">
                    <h4 className="famine-region-name">{famine.region}</h4>
                    <span className="badge badge-crimson tabular-nums">{famine.years}</span>
                  </div>

                  <div className="famine-meta-item">
                    <span className="famine-meta-label">Akar pemicu struktural</span>
                    <p className="famine-meta-val">{famine.cause}</p>
                  </div>

                  <div className="famine-meta-item victim-row">
                    <span className="famine-meta-label">Skala korban &amp; dampak</span>
                    <strong className="famine-victim-text tabular-nums">{famine.victimCount}</strong>
                  </div>

                  <p className="famine-detail-text">{famine.description}</p>
                </article>
              ))}
            </div>
          </div>

          {/* 6 Tonggak Perlawanan Bersenjata, Perang Kongsi & Emansipasi */}
          <div className="resistance-cards-grid">
            {peasantResistanceData.map((res) => (
              <article key={res.id} className="parchment-card resistance-card" id={res.id}>
                <div className="resistance-card-header">
                  <span className="badge badge-crimson">{res.category}</span>
                  <span className="resistance-loc-tag tabular-nums">{res.locationOrYear}</span>
                </div>

                <h4 className="resistance-card-title">{res.title}</h4>
                <p className="resistance-card-desc">{res.description}</p>

                <div className="resistance-impact-footer">
                  <span className="res-impact-label">Dampak historis</span>
                  <p className="res-impact-text">{res.historicalImpact}</p>
                </div>
              </article>
            ))}
          </div>

          <figure className="quote-card breman-resistance-extract">
            <figcaption className="breman-extract-heading">
              <span className="badge badge-gold">Refleksi Historiografi (Daradjadi, 2013 &amp; Onghokham, 2008)</span>
              <h4>Trauma Kolonial atas Bersatunya Laskar Tionghoa dan Prajurit Jawa (1740–1743)</h4>
            </figcaption>
            <blockquote className="quote-text">
              “Perang Geger Pecinan 1740–1743 membuktikan bahwa ketika masyarakat Tionghoa dan rakyat pribumi bersatu mengangkat senjata, kekuasaan VOC di seluruh Jawa nyaris runtuh. Trauma mendalam atas aliansi inilah yang mendorong pemerintah kolonial menciptakan sekat hukum Vreemde Oosterlingen, Wijkenstelsel, dan Passenstelsel agar kedua kelompok tidak pernah lagi bersatu.”
            </blockquote>
          </figure>
        </div>

        {/* Kebangkitan Pendidikan Modern, Pers & Tiga Haluan Politik (1900–1932) */}
        <div className="controversy-block" id="fajar-kebangsaan-section">
          <div className="monograph-sub-opener">
            <h3 className="controversy-title">
              Kebangkitan Pendidikan Modern, Pers Melayu-Tionghoa &amp; Tiga Haluan Politik (1900–1932)
            </h3>
            <p className="controversy-subtitle">
              Dari pendirian sekolah Tiong Hoa Hwee Koan (1900) dan pencetakan perdana lagu “Indonesia Raya” di harian Sin Po (1928) hingga haluan Indonesierschap Partai Tionghoa Indonesia (1932)
            </p>
          </div>

          <div className="parliamentary-timeline-grid">
            {parliamentaryPoliticsData.map((pol) => (
              <article key={pol.id} className="parchment-card pol-card" id={pol.id}>
                <div className="pol-card-header">
                  <span className="pol-period tabular-nums">{pol.periodOrEvent}</span>
                  <span className="pol-factions-tag">{pol.factions}</span>
                </div>

                <h4 className="pol-title">{pol.title}</h4>

                <div className="pol-debate-box">
                  <span className="pol-box-label">Dinamika gerakan &amp; regulasi</span>
                  <p className="pol-box-text">{pol.coreDebate}</p>
                </div>

                <div className="pol-outcome-footer">
                  <span className="pol-box-label outcome">Dampak &amp; capaian sejarah</span>
                  <p className="pol-box-text">{pol.outcomeAndImpact}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="parchment-card agrarische-wet-card">
            <div className="agrarische-header">
              <FileText size={19} strokeWidth={1.5} className="agrarische-icon" />
              <h4>Tiga Aliran Politik Masyarakat Tionghoa pada Masa Akhir Kolonial</h4>
            </div>
            <div className="agrarische-ledger">
              <div className="agrarische-pilar">
                <h5>1. Aliran Sin Po (Antikolonial &amp; Solidaritas Asia) vs Aliran CHH (Kooperatif Volksraad)</h5>
                <p>
                  <strong>Aliran Sin Po (1910)</strong> menolak kompromi dengan Belanda, menolak kekawulaan <em>WNO 1910</em>, dan menjadi pelopor pemuatan naskah lagu <em>“Indonesia Raya”</em> (November 1928). Sebaliknya, <strong>Chung Hwa Hui / CHH (1928)</strong> yang dipimpin Kan Hok Hoei (H.H. Kan) mewakili elite bisnis dan intelektual berpendidikan Belanda yang memilih jalur parlementer di dalam <em>Volksraad</em>.
                </p>
              </div>
              <div className="agrarische-pilar">
                <h5>2. Aliran Nasionalis Indonesia: Partai Tionghoa Indonesia / PTI (1932)</h5>
                <p>
                  Didirikan di Surabaya pada 25 September 1932 oleh <strong>Liem Koen Hian</strong> dengan dukungan harian <em>Sin Tit Po</em>, <strong>PTI</strong> menegaskan haluan <em>Indonesierschap</em>: masa depan kaum peranakan Tionghoa menyatu sepenuhnya dengan perjuangan kemerdekaan bangsa Indonesia bersama kaum pergerakan nasional bumiputera.
                </p>
              </div>
            </div>
          </div>

          {/* Neraca Sejarah: Luka Segregasi vs Kontribusi Historis */}
          <div className="impact-polarity-section" style={{ marginTop: '2.25rem' }}>
            <div className="impact-sub-opener">
              <h3 className="famine-title">Neraca Sejarah: Luka Segregasi Kolonial vs Warisan Kontribusi Nusantara</h3>
              <p className="famine-subtitle">
                Pilih perspektif untuk menimbang dampak struktural politik pecah belah kolonial dan warisan positif masyarakat Tionghoa bagi Nusantara
              </p>
            </div>

            <div className="impact-tab-switcher" role="tablist" aria-label="Perspektif dampak sejarah">
              <button
                type="button"
                role="tab"
                aria-selected={activeImpactPolarity === 'negative'}
                id="tab-impact-negative"
                className={`impact-switch-btn ${activeImpactPolarity === 'negative' ? 'active-negative' : ''}`}
                onClick={() => setActiveImpactPolarity('negative')}
              >
                <XCircle size={16} strokeWidth={1.5} />
                <span>Luka Segregasi &amp; Eksploitasi Kolonial</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeImpactPolarity === 'positive'}
                id="tab-impact-positive"
                className={`impact-switch-btn ${activeImpactPolarity === 'positive' ? 'active-positive' : ''}`}
                onClick={() => setActiveImpactPolarity('positive')}
              >
                <CheckCircle size={16} strokeWidth={1.5} />
                <span>Kontribusi Ekonomi, Budaya &amp; Kebangsaan</span>
              </button>
            </div>

            <div className="impact-cards-grid">
              {(activeImpactPolarity === 'negative' ? impactData.negativeImpacts : impactData.positiveImpacts).map(
                (item, idx) => (
                  <article key={idx} className={`parchment-card impact-card ${activeImpactPolarity}`}>
                    <h4 className="impact-item-title">
                      {activeImpactPolarity === 'negative' ? (
                        <AlertOctagon size={17} strokeWidth={1.5} className="impact-inline-icon red" />
                      ) : (
                        <TrendingUp size={17} strokeWidth={1.5} className="impact-inline-icon green" />
                      )}
                      <span>{item.title}</span>
                    </h4>
                    <p className="impact-item-desc">{item.description}</p>
                  </article>
                )
              )}
            </div>
          </div>

          {/* 4 Fase Evolusi Lintas Zaman */}
          <div className="van-rees-monetization-open" id="van-rees-monetization-section">
            <div className="van-rees-monetization-header">
              <ArrowUpRight size={19} strokeWidth={1.5} className="van-rees-gold-icon" />
              <h4>Empat Fase Evolusi Peran Ekonomi &amp; Kedudukan Sosial Tionghoa di Nusantara</h4>
            </div>
            <div className="van-rees-phases-grid">
              {prianganMonetizationData.map((phase) => (
                <article key={phase.id} className="parchment-card van-rees-phase-item" id={phase.id}>
                  <div className="van-rees-phase-top">
                    <strong className="van-rees-phase-title">{phase.title}</strong>
                    <span className={`badge ${getMonetizationBadgeClass(phase.monetizationLevel)}`}>
                      Integrasi: {phase.monetizationLevel}
                    </span>
                  </div>
                  <span className="van-rees-phase-label tabular-nums">
                    {phase.phase} · {phase.periodLabel}
                  </span>
                  <ul className="van-rees-phase-list">
                    {phase.characteristics.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                  <div className="van-rees-phase-fact">{phase.keyFact}</div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* GALERI TOKOH KUNCI LINTAS ZAMAN */}
        <div className="critics-block" id="galeri-tokoh-section">
          <div className="impact-sub-opener">
            <h3 className="critics-section-heading">
              Galeri Tokoh Penggerak Zaman: Dari Syahbandar Banten hingga Pelopor Kebangsaan
            </h3>
            <p className="famine-subtitle">
              Saring berdasarkan kiprah atau klik kartu tokoh untuk menelaah kontribusi historis dan memperbesar pelat potret arsip
            </p>
          </div>

          {/* Category Filter + Interactive Figure Spotlight */}
          <div className="critic-filter-toolbar" role="tablist" aria-label="Saring kategori tokoh sejarah">
            {criticCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={criticCategoryFilter === cat}
                className={`critic-filter-btn ${criticCategoryFilter === cat ? 'active' : ''}`}
                onClick={() => setCriticCategoryFilter(cat)}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {activeCritic && (
            <div className="parchment-card critic-spotlight-banner">
              <div className="critic-spotlight-meta">
                <span className="badge badge-gold">{activeCritic.category}</span>
                <span className="critic-period-text tabular-nums">{activeCritic.period}</span>
              </div>
              <h4 className="critic-spotlight-name">
                Sorotan Tokoh: {activeCritic.name} — <span>{activeCritic.role}</span>
              </h4>
              <p className="critic-spotlight-desc">{activeCritic.keyContribution}</p>
              <div className="critic-spotlight-footer">
                <span><strong>Warisan Sejarah:</strong> {activeCritic.impactNote}</span>
                <span className="critic-spotlight-cite">Rujukan: {activeCritic.workOrCitation}</span>
              </div>
            </div>
          )}

          <div className="critics-grid">
            {filteredCritics.map((critic) => {
              const isSelected = activeCritic?.id === critic.id;
              return (
                <article
                  key={critic.id}
                  className={`parchment-card critic-card ${isSelected ? 'is-selected-critic' : ''}`}
                  id={critic.id}
                  onClick={() => setSelectedCriticId(critic.id)}
                >
                  <div className="critic-profile-header">
                    {critic.image ? (
                      <div
                        className="critic-avatar-box"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenImage?.(critic.image!, critic.name);
                        }}
                        role="button"
                        tabIndex={0}
                        title="Klik untuk memperbesar arsip potret"
                        aria-label={`Perbesar potret ${critic.name}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.stopPropagation();
                            onOpenImage?.(critic.image!, critic.name);
                          }
                        }}
                      >
                        <img
                          src={critic.image.src}
                          alt={critic.image.alt}
                          className="critic-avatar-img"
                          width={72}
                          height={72}
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const parent = e.currentTarget.parentElement;
                            if (parent) parent.classList.add('avatar-error');
                          }}
                        />
                        <div className="critic-avatar-zoom-overlay">
                          <ZoomIn size={14} strokeWidth={1.5} />
                        </div>
                      </div>
                    ) : (
                      <div className="critic-avatar-fallback">
                        <User size={22} strokeWidth={1.5} />
                      </div>
                    )}

                    <div className="critic-header-text">
                      <h4 className="critic-name">{critic.name}</h4>
                      <div className="critic-role-title">{critic.role}</div>
                      <div className="critic-card-meta">
                        <span className="badge badge-gold">{critic.category}</span>
                        <span className="critic-period-text tabular-nums">{critic.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="critic-work-row">
                    <span className="critic-work-label">Karya &amp; rujukan arsip</span>
                    <p className="critic-work-val">{critic.workOrCitation}</p>
                  </div>

                  <p className="critic-contribution-text">{critic.keyContribution}</p>

                  <div className="critic-impact-footer">
                    <strong>Pengaruh:</strong> {critic.impactNote}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* TIGA BENANG MERAH SEJARAH & SINTESIS SEJARAWAN */}
        <div className="controversy-block" id="benang-merah-sejarah-section">
          <div className="monograph-sub-opener">
            <h3 className="controversy-title">Benang Merah Sejarah &amp; Refleksi Lintas Zaman</h3>
            <p className="controversy-subtitle">
              Merangkai kesinambungan antara kemitraan maritim pra-kolonial, paradoks ekonomi-hukum Hindia Belanda, dan integrasi kebangsaan Indonesia
            </p>
          </div>

          <div className="staatsblad-cards-grid">
            {vanReesReportData.map((section) => (
              <article key={section.id} className="staatsblad-card parchment-card" id={section.id}>
                <div className="staatsblad-card-header">
                  <span className="rule-number-badge">Simpul {String(section.sectionNumber).padStart(2, '0')}</span>
                  <span className={`badge ${section.sectionNumber === 4 ? 'badge-amber' : 'badge-red'}`}>
                    {section.badge}
                  </span>
                </div>
                <h4 className="staatsblad-rule-title">{section.title}</h4>
                <div className="staatsblad-reality-block">
                  <ul className="staatsblad-reality-list">
                    {section.findings.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="source-citation-box">
                  <span className="source-label">Intisari:</span> {section.significance}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Tiga Lensa Historiografi Sejarawan */}
        <div className="interpretations-block" id="lensa-historiografi-section">
          <div className="monograph-sub-opener">
            <h3 className="interp-title">Tiga Lensa Sejarawan Membedah Masyarakat Tionghoa di Nusantara</h3>
            <p className="interp-subtitle">
              Perbandingan kerangka analisis Maritim &amp; Kota Kolonial Awal (Reid, Blussé), Fiskal Pacht &amp; Buruh Luar Jawa (Rush, Diehl, Heidhues), serta Identitas, Pers &amp; Lokalitas Banten (Suryadinata, Adam, Fauziah)
            </p>
          </div>

          <div className="comparison-table-wrapper hist-table-wrap">
            <table className="hist-data-table adaptive-table">
              <thead>
                <tr>
                  <th>Dimensi Analisis</th>
                  <th>Reid, Lombard &amp; Blussé</th>
                  <th>Rush, Diehl &amp; Heidhues</th>
                  <th>Suryadinata, Adam &amp; Fauziah</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Dimensi Analisis"><strong>Mazhab &amp; Fokus Kajian</strong></td>
                  <td data-label="Reid, Lombard & Blussé">{historiographicalSynthesisData[0].schoolName}</td>
                  <td data-label="Rush, Diehl & Heidhues">{historiographicalSynthesisData[1].schoolName}</td>
                  <td data-label="Suryadinata, Adam & Fauziah">{historiographicalSynthesisData[2].schoolName}</td>
                </tr>
                <tr>
                  <td data-label="Dimensi Analisis"><strong>Perspektif Utama</strong></td>
                  <td data-label="Reid, Lombard & Blussé">{historiographicalSynthesisData[0].primaryPerspective}</td>
                  <td data-label="Rush, Diehl & Heidhues">{historiographicalSynthesisData[1].primaryPerspective}</td>
                  <td data-label="Suryadinata, Adam & Fauziah">{historiographicalSynthesisData[2].primaryPerspective}</td>
                </tr>
                <tr>
                  <td data-label="Dimensi Analisis"><strong>Sumber Data Primer</strong></td>
                  <td data-label="Reid, Lombard & Blussé">{historiographicalSynthesisData[0].primarySources}</td>
                  <td data-label="Rush, Diehl & Heidhues">{historiographicalSynthesisData[1].primarySources}</td>
                  <td data-label="Suryadinata, Adam & Fauziah">{historiographicalSynthesisData[2].primarySources}</td>
                </tr>
                <tr>
                  <td data-label="Dimensi Analisis"><strong>Temuan Ekonomi Kunci</strong></td>
                  <td data-label="Reid, Lombard & Blussé">{historiographicalSynthesisData[0].economicAssessment}</td>
                  <td data-label="Rush, Diehl & Heidhues">{historiographicalSynthesisData[1].economicAssessment}</td>
                  <td data-label="Suryadinata, Adam & Fauziah">{historiographicalSynthesisData[2].economicAssessment}</td>
                </tr>
                <tr>
                  <td data-label="Dimensi Analisis"><strong>Penjelasan Transformasi Sosial</strong></td>
                  <td data-label="Reid, Lombard & Blussé">{historiographicalSynthesisData[0].collapseExplanation}</td>
                  <td data-label="Rush, Diehl & Heidhues">{historiographicalSynthesisData[1].collapseExplanation}</td>
                  <td data-label="Suryadinata, Adam & Fauziah">{historiographicalSynthesisData[2].collapseExplanation}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="hist-cards-grid" style={{ marginBottom: '2rem' }}>
            {historiographicalSynthesisData.map((hist, idx) => (
              <article key={idx} className="parchment-card hist-lens-card" id={`hist-lens-card-${idx}`}>
                <div className="hist-lens-top">
                  <h4 className="hist-scholar-name">{hist.historian}</h4>
                  <span className="badge badge-gold">{hist.schoolName}</span>
                </div>

                <div className="hist-framework-row">
                  <span className="hist-box-label">Kerangka teori inti</span>
                  <strong className="hist-framework-text">{hist.framework}</strong>
                </div>

                <div className="hist-work-meta">
                  <BookOpen size={15} strokeWidth={1.5} className="hist-book-icon" />
                  <span>Karya kunci: <em>{hist.keyWork}</em></span>
                </div>

                <div className="hist-points-list">
                  <div className="hist-point">
                    <span className="point-sublabel">Temuan ekonomi &amp; sosial</span>
                    <p>{hist.economicAssessment}</p>
                  </div>
                  <div className="hist-point">
                    <span className="point-sublabel">Dinamika perubahan zaman</span>
                    <p>{hist.collapseExplanation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="interp-grid">
            {backgroundData.historianInterpretations.map((item) => (
              <article key={item.id} className="parchment-card interp-card" id={item.id}>
                <h4 className="interp-scholar-heading">{item.scholar}</h4>
                <p className="interp-text">{item.interpretation}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Historians Quotes Section */}
        <div className="quotes-block">
          <div className="monograph-sub-opener">
            <h3 className="quotes-title">Suara Arsip &amp; Kutipan Definitif Sejarawan</h3>
            <p className="quotes-subtitle">Rekam jejak tertulis dari kronik peziarah abad ke-5, prasasti Jawa Kuno, hingga kajian sejarah Banten</p>
          </div>

          <div className="quotes-grid">
            {backgroundData.quotes.map((item) => (
              <figure key={item.id} className="quote-card" id={item.id}>
                <blockquote className="quote-text">
                  “{item.quote}”
                </blockquote>
                <figcaption className="quote-author">
                  <span className="quote-name">{item.author}</span>
                  <span className="quote-role">{item.role}</span>
                  {item.work && (
                    <span className="quote-work">
                      Karya: <em>{item.work}</em>
                    </span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Closing Narrative Reflection */}
        <div className="reform-open-section" style={{ marginTop: '2.5rem' }}>
          <h3 className="reform-title">
            <BookOpen size={20} strokeWidth={1.5} className="reform-icon" />
            <span>{impactData.reformContext.title}</span>
          </h3>
          <p className="reform-narrative">{impactData.reformContext.narrative}</p>
        </div>
      </div>
    </section>
  );
};
