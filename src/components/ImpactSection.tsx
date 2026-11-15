import React, { useState, useEffect } from 'react';
import {
  impactData,
  peasantResistanceData,
  parliamentaryPoliticsData,
  historiographicalSynthesisData,
  vanReesReportData,
  prianganMonetizationData
} from '../data/historyContent';
import type { HistoricalImage } from '../data/historyContent';
import {
  MONOGRAPH_NAVIGATE_EVENT,
  type MonographNavigationTarget,
} from '../utils/monographNavigator';
import {
  AlertOctagon,
  TrendingUp,
  Skull,
  BookOpen,
  CheckCircle,
  XCircle,
  ZoomIn,
  User,
  Flame,
  Landmark,
  Scale,
  FileText,
  Search,
  ArrowUpRight
} from 'lucide-react';
import './ImpactSection.css';

interface ImpactSectionProps {
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

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenImage }) => {
  const [activeMainTab, setActiveMainTab] = useState<'famines-impact' | 'resistance' | 'politics' | 'historiography' | 'van-rees'>('famines-impact');
  const [activeImpactPolarity, setActiveImpactPolarity] = useState<'negative' | 'positive'>('negative');

  useEffect(() => {
    const handleNavigate = (e: Event) => {
      const detail = (e as CustomEvent<MonographNavigationTarget>).detail;
      if (detail?.sectionId !== 'dampak') return;
      if (
        detail.tabId === 'famines-impact' ||
        detail.tabId === 'resistance' ||
        detail.tabId === 'politics' ||
        detail.tabId === 'historiography' ||
        detail.tabId === 'van-rees'
      ) {
        setActiveMainTab(detail.tabId);
      }
      if (detail.subTabId === 'negative' || detail.subTabId === 'positive') {
        setActiveImpactPolarity(detail.subTabId);
      }
    };
    window.addEventListener(MONOGRAPH_NAVIGATE_EVENT, handleNavigate);
    return () => window.removeEventListener(MONOGRAPH_NAVIGATE_EVENT, handleNavigate);
  }, []);

  return (
    <section id="dampak" className="section impact-section">
      <div className="container">
        {/* Monograph 2-Column Section Header */}
        <div className="section-header">
          <h2 className="section-title">Dinamika Konflik, Pergerakan Kebangsaan &amp; Penutup (Bab II–III)</h2>
          <p className="section-subtitle">
            Dari tragedi Geger Pecinan 1740 dan Perang Kongsi hingga kebangkitan THHK 1900, pers Sin Po 1928, PTI 1932, serta Kesimpulan &amp; Saran
          </p>
        </div>

        {/* 5 MAIN TABS NAVIGATION */}
        <div className="dossier-tabs-nav-wrapper">
          <div className="dossier-tabs-nav" role="tablist" aria-label="Sub-bagian Konflik, Politik & Penutup">
            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'famines-impact'}
              className={`dossier-tab-btn ${activeMainTab === 'famines-impact' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('famines-impact')}
            >
              <Skull size={16} strokeWidth={1.5} />
              <span>Tragedi Kolonial &amp; Dampak Sosial-Ekonomi</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'resistance'}
              className={`dossier-tab-btn ${activeMainTab === 'resistance' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('resistance')}
            >
              <Flame size={16} strokeWidth={1.5} />
              <span>Perlawanan Bersenjata, Perang Kongsi &amp; Emansipasi</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'politics'}
              className={`dossier-tab-btn ${activeMainTab === 'politics' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('politics')}
            >
              <Landmark size={16} strokeWidth={1.5} />
              <span>Pendidikan, Pers &amp; Tiga Haluan Politik</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'historiography'}
              className={`dossier-tab-btn ${activeMainTab === 'historiography' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('historiography')}
            >
              <Scale size={16} strokeWidth={1.5} />
              <span>Sintesis Tiga Lensa Sejarawan</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'van-rees'}
              className={`dossier-tab-btn ${activeMainTab === 'van-rees' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('van-rees')}
            >
              <Search size={16} strokeWidth={1.5} />
              <span>Bab III Penutup: Kesimpulan &amp; Saran</span>
            </button>
          </div>
        </div>

        {/* TAB 1: TRAGEDI KOLONIAL & DAMPAK SOSIO-EKONOMI */}
        {activeMainTab === 'famines-impact' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="famine-cases-block">
              <div className="impact-sub-opener">
                <h3 className="famine-title">Tragedi Kekerasan Kolonial, Ekspedisi Militer &amp; Eksploitasi Kuli</h3>
                <p className="famine-subtitle">
                  Rekam jejak pembantaian Batavia 1740, penghancuran republik kongsi Kalimantan Barat, serta perbudakan kuli kontrak di Deli dan Bangka
                </p>
              </div>

              <div className="famine-cards-grid">
                {impactData.famineCases.map((famine, index) => (
                  <article key={index} className="parchment-card famine-card" id={`famine-case-${index}`}>
                    <div className="famine-card-top">
                      <h4 className="famine-region-name">{famine.region}</h4>
                      <span className="badge badge-crimson tabular-nums">{famine.years}</span>
                    </div>

                    <div className="famine-meta-item">
                      <span className="famine-meta-label">Akar penyebab struktural</span>
                      <p className="famine-meta-val">{famine.cause}</p>
                    </div>

                    <div className="famine-meta-item victim-row">
                      <span className="famine-meta-label">Korban &amp; dampak kemanusiaan</span>
                      <strong className="famine-victim-text tabular-nums">{famine.victimCount}</strong>
                    </div>

                    <p className="famine-detail-text">{famine.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="impact-polarity-section">
              <div className="impact-sub-opener">
                <h3 className="famine-title">Dampak Kebijakan Kolonial vs Kontribusi Historis Masyarakat Tionghoa</h3>
                <p className="famine-subtitle">
                  Pilih perspektif untuk menimbang luka struktural politik devide et impera dan warisan positif bagi Nusantara
                </p>
              </div>

              <div className="impact-tab-switcher" role="tablist" aria-label="Perspektif dampak">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeImpactPolarity === 'negative'}
                  id="tab-impact-negative"
                  className={`impact-switch-btn ${activeImpactPolarity === 'negative' ? 'active-negative' : ''}`}
                  onClick={() => setActiveImpactPolarity('negative')}
                >
                  <XCircle size={16} strokeWidth={1.5} />
                  <span>Dampak Negatif Segregasi &amp; Eksploitasi Kolonial</span>
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
                  <span>Kontribusi Positif Ekonomi, Budaya &amp; Kebangsaan</span>
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
          </div>
        )}

        {/* TAB 2: PERLAWANAN BERSENJATA, PERANG KONGSI & EMANSIPASI */}
        {activeMainTab === 'resistance' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="impact-tab-lead">
              <div className="impact-lead-title-row">
                <h3 className="impact-lead-title">
                  Ragam Perlawanan &amp; Agensi Historis: Dari Perang Sepanjang 1740 hingga PTI 1932
                </h3>
                <span className="badge badge-crimson">Agensi &amp; solidaritas lintas etnis</span>
              </div>
              <p className="impact-lead-desc">
                Masyarakat Tionghoa tidak pernah pasif di bawah tekanan kolonial. Sejarah mencatat aliansi militer Tionghoa-Jawa dalam Geger Pecinan (1740–1743), perlawanan tiga Perang Kongsi di Kalimantan Barat (1822–1885), perlawanan kuli perkebunan, hingga perlawanan intelektual melalui sekolah modern dan pers antikolonial.
              </p>
            </div>

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
        )}

        {/* TAB 3: PENDIDIKAN, PERS & TIGA HALUAN POLITIK (1900–1932) */}
        {activeMainTab === 'politics' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="impact-tab-lead">
              <div className="impact-lead-title-row">
                <h3 className="impact-lead-title">
                  Kebangkitan Modern &amp; Tiga Aliran Politik Tionghoa (1900–1932)
                </h3>
                <span className="badge badge-gold">THHK · Sin Po · CHH · PTI</span>
              </div>
              <p className="impact-lead-desc">
                Memasuki abad ke-20, kebangkitan pendidikan <strong>Tiong Hoa Hwee Koan (1900)</strong> dan pers Melayu-Tionghoa melahirkan dinamika politik yang terbagi ke dalam tiga aliran utama menurut kajian <strong>Leo Suryadinata</strong>: Aliran <em>Sin Po</em>, <em>Chung Hwa Hui (CHH)</em>, dan <em>Partai Tionghoa Indonesia (PTI)</em>.
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
                <h4>Tiga Aliran Politik Masyarakat Tionghoa Awal Abad ke-20 (Bab 2.2.3)</h4>
              </div>
              <div className="agrarische-ledger">
                <div className="agrarische-pilar">
                  <h5>1. Aliran Sin Po (Antikolonial &amp; Solidaritas Asia) vs Aliran CHH (Kooperatif Volksraad)</h5>
                  <p>
                    <strong>Aliran Sin Po (1910)</strong> menolak kompromi dengan Belanda, menolak duduk di <em>Volksraad</em>, dan menjadi pelopor pemuatan lagu <em>“Indonesia Raya”</em> (November 1928). Sebaliknya, <strong>Chung Hwa Hui / CHH (1928)</strong> yang dipimpin H.H. Kan mewakili elit peranakan berpendidikan Belanda yang memilih jalur parlementer kooperatif di dalam <em>Volksraad</em>.
                  </p>
                </div>
                <div className="agrarische-pilar">
                  <h5>2. Aliran Nasionalis Indonesia: Partai Tionghoa Indonesia / PTI (1932)</h5>
                  <p>
                    Didirikan di Surabaya pada 25 September 1932 oleh <strong>Liem Koen Hian</strong> dan Ko Kwat Tiong, <strong>PTI</strong> menegaskan bahwa masa depan kaum peranakan Tionghoa menyatu sepenuhnya dengan kemerdekaan bangsa Indonesia, bekerja sama erat dengan tokoh-tokoh pergerakan nasional seperti Soekarno, Hatta, dan Soetomo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SINTESIS 3 LENSA SEJARAWAN (HISTORIOGRAFI) */}
        {activeMainTab === 'historiography' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="impact-tab-lead">
              <div className="impact-lead-title-row">
                <h3 className="impact-lead-title">Sintesis Tiga Lensa Historiografi Sejarah Tionghoa Nusantara</h3>
                <span className="badge badge-gold">Maritim · Kolonial · Nasionalisme</span>
              </div>
              <p className="impact-lead-desc">
                Memahami sejarah masyarakat Tionghoa secara utuh memerlukan penggabungan tiga lensa historiografi utama: <strong>Lensa Niaga Maritim &amp; Kota Kolonial Awal</strong> (Reid, Lombard, Blussé), <strong>Lensa Fiskal Pacht &amp; Buruh Luar Jawa</strong> (Rush, Diehl, Heidhues), serta <strong>Lensa Identitas, Pers &amp; Nasionalisme</strong> (Suryadinata, Adam, Fauziah).
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

            <div className="hist-cards-grid">
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
          </div>
        )}

        {/* TAB 5: BAB III PENUTUP — KESIMPULAN & SARAN */}
        {activeMainTab === 'van-rees' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="impact-tab-lead">
              <div className="impact-lead-title-row">
                <h3 className="impact-lead-title">
                  Bab III Penutup: Kesimpulan (3.1) &amp; Saran Akademik (3.2)
                </h3>
                <span className="badge badge-gold">Sintesis Makalah Kelompok 8</span>
              </div>
              <p className="impact-lead-desc">
                Rangkuman komprehensif atas ketiga rumusan masalah makalah—aktivitas ekonomi pra-abad ke-19, transformasi ekonomi abad ke-19 hingga akhir masa kolonial, serta kedudukan sosial dalam struktur kolonial dan di Banten—beserta rekomendasi akademik bagi pengajaran sejarah.
              </p>
            </div>

            <h4 className="subsection-heading">Tiga Kesimpulan Utama &amp; Saran Kajian (Bab 3.1 &amp; 3.2)</h4>
            <div className="staatsblad-cards-grid">
              {vanReesReportData.map((section) => (
                <article key={section.id} className="staatsblad-card parchment-card" id={section.id}>
                  <div className="staatsblad-card-header">
                    <span className="rule-number-badge">Bagian {String(section.sectionNumber).padStart(2, '0')}</span>
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

            {/* 4 Fase Periodisasi Sejarah */}
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

            <div className="van-rees-aftermath-open">
              <h4 className="van-rees-aftermath-top">
                <CheckCircle size={17} strokeWidth={1.5} className="van-rees-green-icon" />
                <span>Pesan Kunci Makalah Kelompok 8 (Pendidikan Sejarah FKIP UNTIRTA)</span>
              </h4>
              <p>
                Sejarah masyarakat Tionghoa di Nusantara adalah bagian tak terpisahkan dari sejarah pembentukan ekonomi dan kebangsaan Indonesia. Memahami perbedaan antara <strong>rekayasa segregasi kolonial Belanda</strong> (<em>Vreemde Oosterlingen</em>, <em>Pachtstelsel</em>, <em>Wijkenstelsel</em>) dan <strong>realitas akulturasi serta perjuangan bersama rakyat Nusantara</strong> (dari Pecinan Banten dan Geger Pecinan 1740 hingga <em>Sin Po</em> 1928 dan PTI 1932) merupakan kunci untuk meruntuhkan prasangka warisan kolonial.
              </p>
            </div>
          </div>
        )}

        {/* PERSISTENT SECTION: GALERI TOKOH SEJARAH */}
        <div className="critics-block">
          <div className="impact-sub-opener">
            <h3 className="critics-section-heading">Tokoh-Tokoh Kunci dalam Sejarah Ekonomi &amp; Sosial Tionghoa Nusantara</h3>
            <p className="famine-subtitle">
              Dari Kapiten Batavia pertama, Syahbandar Kesultanan Banten, pendiri sekolah modern THHK, hingga pelopor nasionalisme Indonesia
            </p>
          </div>

          <div className="critics-grid">
            {impactData.historicalCritics.map((critic) => (
              <article key={critic.id} className="parchment-card critic-card" id={critic.id}>
                <div className="critic-profile-header">
                  {critic.image ? (
                    <div
                      className="critic-avatar-box"
                      onClick={() => onOpenImage?.(critic.image!, critic.name)}
                      role="button"
                      tabIndex={0}
                      title="Klik untuk memperbesar arsip potret"
                      aria-label={`Perbesar potret ${critic.name}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
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
                  <span className="critic-work-label">Karya &amp; dokumen</span>
                  <p className="critic-work-val">{critic.workOrCitation}</p>
                </div>

                <p className="critic-contribution-text">{critic.keyContribution}</p>

                <div className="critic-impact-footer">
                  <strong>Pengaruh:</strong> {critic.impactNote}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Reform Context: Multatuli & End of Era — Open Closing Section */}
        <div className="reform-open-section">
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
