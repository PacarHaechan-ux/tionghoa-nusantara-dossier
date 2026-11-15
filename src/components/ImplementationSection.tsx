import React, { useState, useEffect } from 'react';
import {
  implementationData,
  residencyComparisonData,
  exploitationData,
  bupatiRolesData,
  preangerBlueprintData,
  vocExpansionData
} from '../data/historyContent';
import {
  MONOGRAPH_NAVIGATE_EVENT,
  navigateToMonographTarget,
  type MonographNavigationTarget,
} from '../utils/monographNavigator';
import {
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Coffee,
  Scale,
  TrendingDown,
  TrendingUp,
  MapPin,
  Crown,
  GitBranch,
  ArrowRight,
  Coins
} from 'lucide-react';
import './ImplementationSection.css';

type ImplementationTabId = 'staatsblad' | 'bupati' | 'three-residencies';

export const ImplementationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ImplementationTabId>('staatsblad');

  useEffect(() => {
    const applyTabFromId = (rawTabId?: string) => {
      if (!rawTabId) return;
      if (rawTabId === 'staatsblad') {
        setActiveTab('staatsblad');
      } else if (rawTabId === 'bupati' || rawTabId === 'preanger') {
        setActiveTab('bupati');
      } else if (
        rawTabId === 'three-residencies' ||
        rawTabId === 'voc-comparison' ||
        rawTabId === 'outer-java'
      ) {
        setActiveTab('three-residencies');
      }
    };

    const handleNavigate = (e: Event) => {
      const detail = (e as CustomEvent<MonographNavigationTarget>).detail;
      if (detail?.sectionId !== 'pelaksanaan') return;
      applyTabFromId(detail.tabId);
    };

    const handleCustomTabSelect = (e: Event) => {
      const detail = (e as CustomEvent<{ sectionId?: string; tabId?: string }>).detail;
      if (detail?.sectionId && detail.sectionId !== 'pelaksanaan') return;
      applyTabFromId(detail?.tabId);
    };

    window.addEventListener(MONOGRAPH_NAVIGATE_EVENT, handleNavigate);
    window.addEventListener('customTabSelect', handleCustomTabSelect);
    return () => {
      window.removeEventListener(MONOGRAPH_NAVIGATE_EVENT, handleNavigate);
      window.removeEventListener('customTabSelect', handleCustomTabSelect);
    };
  }, []);

  return (
    <section id="pelaksanaan" className="section implementation-section">
      <div className="container">
        {/* Monograph 2-Column Section Header */}
        <div className="section-header">
          <div>
            <span className="badge badge-crimson chapter-kicker-badge">Bab III · Kedudukan dalam Struktur Sosial</span>
            <h2 className="section-title">{implementationData.sectionTitle}</h2>
          </div>
          <p className="section-subtitle">{implementationData.sectionSubtitle}</p>
        </div>

        {/* Tab Switcher (3 Focused Storytelling Tabs) */}
        <div className="dossier-tabs-nav-wrapper">
          <div className="dossier-tabs-nav" role="tablist" aria-label="Tiga Babak Kedudukan Sosial Masyarakat Tionghoa">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'staatsblad'}
              className={`dossier-tab-btn ${activeTab === 'staatsblad' ? 'active' : ''}`}
              onClick={() => setActiveTab('staatsblad')}
            >
              <FileText size={16} strokeWidth={1.5} />
              <span>Piramida Tiga Golongan &amp; Tembok Pecinan</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'bupati'}
              className={`dossier-tab-btn ${activeTab === 'bupati' ? 'active' : ''}`}
              onClick={() => setActiveTab('bupati')}
            >
              <Crown size={16} strokeWidth={1.5} />
              <span>Wajah Komunitas: Peranakan, Totok &amp; Para Kapiten</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'three-residencies'}
              className={`dossier-tab-btn ${activeTab === 'three-residencies' ? 'active' : ''}`}
              onClick={() => setActiveTab('three-residencies')}
            >
              <Scale size={16} strokeWidth={1.5} />
              <span>Harmoni Kesultanan Banten &amp; Cina Benteng Tangerang</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PIRAMIDA TIGA GOLONGAN & TEMBOK PECINAN */}
        {activeTab === 'staatsblad' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="tab-lead-open">
              <div className="tab-lead-title-row">
                <h3 className="residency-lead-title">
                  Piramida Tiga Golongan, Tembok Pecinan &amp; Jerat Regulasi Kolonial
                </h3>
                <span className="badge badge-crimson">Regeeringsreglement 1854 · Wijkenstelsel · Passenstelsel</span>
              </div>
              <p className="residency-lead-desc">{implementationData.intro}</p>
            </div>

            {/* Workload Summary Ledger (Zero Icon Tile Circles) */}
            <div className="workload-summary-grid">
              <article className="workload-stat-card parchment-card">
                <h4 className="workload-label">Stratifikasi Hukum 3 Golongan</h4>
                <div className="workload-values tabular-nums">
                  <span className="val-rule">Dalih: <strong>Tertib Administrasi</strong></span>
                  <span className="val-divider">vs</span>
                  <span className="val-reality">Realitas: <strong>Politik Devide et Impera</strong></span>
                </div>
                <p className="workload-note">Eropa di puncak, Vreemde Oosterlingen sebagai penyangga, dan Inlander di lapisan terbawah.</p>
              </article>

              <article className="workload-stat-card parchment-card">
                <h4 className="workload-label">Segregasi Wijkenstelsel &amp; Passenstelsel</h4>
                <div className="workload-values tabular-nums">
                  <span className="val-rule">Dalih: <strong>Keamanan Kota</strong></span>
                  <span className="val-divider">vs</span>
                  <span className="val-reality">Realitas: <strong>Karantina Teritorial &amp; Pas Jalan</strong></span>
                </div>
                <p className="workload-note">Warga Tionghoa wajib tinggal di Pecinan dan mengurus surat jalan berbayar untuk ke luar kota.</p>
              </article>

              <article className="workload-stat-card parchment-card">
                <h4 className="workload-label">Koelie Ordonnantie 1880 (Poenale Sanctie)</h4>
                <div className="workload-values">
                  <span className="val-rule">Dalih: <strong>Kontrak Kerja Sah</strong></span>
                  <span className="val-divider">vs</span>
                  <span className="val-reality">Realitas: <strong>Perbudakan Kuli Kontrak</strong></span>
                </div>
                <p className="workload-note">Buruh sinkeh di Deli dan Bangka dijerat sanksi pidana kerja paksa dan lilitan utang meza/barak.</p>
              </article>
            </div>

            {/* 7 Law Rules Grid — Flat 2-Column Ledger inside Each Sheet (Zero Nested Boxes) */}
            <div className="law-rules-grid">
              {implementationData.laws.map((law, index) => (
                <article key={index} className="parchment-card law-card" id={`law-card-${index}`}>
                  <div className="law-card-top">
                    <div className="law-header-left">
                      <h4 className="law-article-name">
                        <span className="law-number-inline tabular-nums">Regulasi 0{law.ruleNumber} ·</span> {law.article}
                      </h4>
                    </div>
                    <span className={`badge ${law.severity === 'Kritis' ? 'badge-crimson' : 'badge-gold'}`}>
                      <AlertTriangle size={13} strokeWidth={1.5} />
                      <span>Dampak {law.severity}</span>
                    </span>
                  </div>

                  <div className="law-duo-ledger">
                    <div className="law-col official-col">
                      <div className="side-title">
                        <CheckCircle size={15} strokeWidth={1.5} className="side-icon green" />
                        <span>Ketentuan &amp; dalih resmi kolonial</span>
                      </div>
                      <p>{law.officialRule}</p>
                    </div>

                    <div className="law-col reality-col">
                      <div className="side-title">
                        <XCircle size={15} strokeWidth={1.5} className="side-icon red" />
                        <span>Realitas sosial &amp; dampak struktural</span>
                      </div>
                      <p>{law.fieldReality}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: WAJAH KOMUNITAS: PERANAKAN, TOTOK & PARA KAPITEN */}
        {activeTab === 'bupati' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="tab-lead-open">
              <div className="tab-lead-title-row">
                <h3 className="residency-lead-title">
                  Wajah Komunitas dari Dalam: Peranakan, Totok (Sinkeh) &amp; Dilema Para Kapiten
                </h3>
                <span className="badge badge-gold">Struktur internal &amp; kepemimpinan</span>
              </div>
              <p className="residency-lead-desc">
                Di balik label tunggal <em>Vreemde Oosterlingen</em> yang ditempelkan penguasa kolonial, masyarakat Tionghoa di Nusantara memiliki dinamika internal yang kaya: pertemuan antara keluarga <strong>Peranakan</strong> yang telah berakar lintas generasi dan imigran baru <strong>Totok (Sinkeh)</strong>, serta posisi dilematis para <strong>Opsir Tionghoa (Mayor, Kapiten, Letnan)</strong> di antara kepentingan warga dan tuntutan pemerintah Belanda.
              </p>
            </div>

            <h4 className="subsection-heading">Lima Dimensi Kehidupan Komunitas, Kepemimpinan &amp; Akulturasi</h4>
            <div className="staatsblad-cards-grid">
              {bupatiRolesData.map((role) => (
                <article key={role.id} className="staatsblad-card parchment-card" id={role.id}>
                  <div className="staatsblad-card-header">
                    <span className="rule-number-badge">Dimensi {String(role.roleNumber).padStart(2, '0')}</span>
                    <span className={`badge ${role.roleNumber <= 2 || role.roleNumber === 4 ? 'badge-red' : 'badge-amber'}`}>
                      {role.badge}
                    </span>
                  </div>
                  <h4 className="staatsblad-rule-title">{role.title}</h4>
                  <p className="staatsblad-official-text">{role.summary}</p>
                  <div className="staatsblad-reality-block">
                    <ul className="staatsblad-reality-list">
                      {role.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="source-citation-box">
                    <span className="source-label">Sumber:</span> {role.historicalSource}
                  </div>
                </article>
              ))}
            </div>

            {/* Transformasi Kedudukan Table */}
            <div className="preanger-blueprint-open" id="preanger-blueprint-section">
              <div className="preanger-blueprint-header">
                <GitBranch size={19} strokeWidth={1.5} className="preanger-blueprint-icon" />
                <h4>Pergeseran Kedudukan Lintas Zaman: Dari Mitra Kesultanan menuju Segregasi Kolonial</h4>
              </div>
              <p className="preanger-blueprint-lead">
                Perbandingan antara kedudukan masyarakat Tionghoa pada era kerajaan maritim Nusantara (seperti Kesultanan Banten) dengan era kolonial VOC dan Hindia Belanda melalui empat elemen struktural berikut:
              </p>
              <div className="comparison-table-wrapper">
                <table className="residency-data-table adaptive-table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Elemen Struktural</th>
                      <th>Era Kesultanan Nusantara (Pra-Kolonial)</th>
                      <th>Rekayasa Kolonial (VOC &amp; Hindia Belanda)</th>
                      <th>Signifikansi Sejarah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preangerBlueprintData.map((el) => (
                      <tr key={el.id}>
                        <td data-label="No. Elemen" className="tabular-nums"><strong>0{el.elementNumber}</strong></td>
                        <td data-label="Elemen Struktural"><strong>{el.title}</strong></td>
                        <td data-label="Era Kesultanan Nusantara">{el.preangerstelselOrigin}</td>
                        <td data-label="Rekayasa Kolonial">{el.cultuurstelselAdoption}</td>
                        <td data-label="Signifikansi Sejarah">{el.significance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HARMONI KESULTANAN BANTEN & CINA BENTENG TANGERANG (+ KOMPARASI WILAYAH) */}
        {activeTab === 'three-residencies' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="tab-lead-open">
              <div className="tab-lead-title-row">
                <h3 className="residency-lead-title">
                  Harmoni Kesultanan Banten, Cina Benteng Tangerang &amp; Peta Komunitas Nusantara
                </h3>
                <span className="badge badge-gold">Syahbandar Cakradana · Pecinan Banten · Cina Benteng</span>
              </div>
              <p className="residency-lead-desc">
                Jauh sebelum tembok segregasi kolonial didirikan, Kesultanan Banten dan kawasan tepian Sungai Cisadane di Tangerang telah menjadi ruang perjumpaan kosmopolitan yang hangat. Di sini, saudagar dan pakar Tionghoa dipercaya menjadi Syahbandar kesultanan, mendirikan <strong>Masjid Pacinan Tinggi</strong>, serta melahirkan komunitas <strong>Cina Benteng</strong> yang menyatu erat dengan budaya lokal.
              </p>
            </div>

            {/* Lima Jejak Historis Banten & Tangerang */}
            <h4 className="subsection-heading">Lima Jejak Historis Komunitas Tionghoa di Banten &amp; Tangerang</h4>
            <div className="outer-regions-grid">
              {vocExpansionData.map((mech) => (
                <article key={mech.id} className="region-card parchment-card" id={mech.id}>
                  <div className="region-card-top">
                    <h4 className="region-name">{mech.title}</h4>
                    <span className="badge badge-amber">{mech.badge}</span>
                  </div>
                  <p className="region-desc">{mech.description}</p>
                  <div className="staatsblad-reality-block voc-impact-callout">
                    <div className="voc-impact-row">
                      <ArrowRight size={14} strokeWidth={1.5} className="voc-impact-arrow" />
                      <span><strong>Warisan jangka panjang:</strong> {mech.longTermImpact}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Komparasi 3 Corak Komunitas */}
            <div className="tab-lead-open bupati-sub-top">
              <div className="tab-lead-title-row">
                <h3 className="residency-lead-title">
                  Tiga Corak Komunitas: Banten &amp; Tangerang, Pantura Jawa, dan Enklave Luar Jawa
                </h3>
                <span className="badge badge-gold">Komparasi ruang sosial-ekonomi</span>
              </div>
              <p className="residency-lead-desc">
                Perbandingan antara <strong>Banten &amp; Tangerang</strong>, <strong>Pesisir Utara Jawa (Batavia–Semarang–Surabaya)</strong>, dan <strong>Luar Jawa (Bangka, Kalbar, Deli)</strong> memperlihatkan kontras tajam antara akulturasi kultural, fungsi penyangga perantara (<em>buffer group</em>), serta eksploitasi buruh tambang dan perkebunan.
              </p>
            </div>

            <div className="comparison-table-wrapper residency-table-wrap">
              <table className="residency-data-table adaptive-table">
                <thead>
                  <tr>
                    <th>Dimensi Perbandingan</th>
                    <th>Banten &amp; Tangerang (Syahbandar &amp; Cina Benteng)</th>
                    <th>Pantura Jawa (Batavia, Semarang, Surabaya)</th>
                    <th>Luar Jawa (Bangka, Kalbar, Deli)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Dimensi Perbandingan"><strong>Komposisi &amp; Basis Populasi</strong></td>
                    <td data-label="Banten & Tangerang" className="tabular-nums">{residencyComparisonData[0].populationInvolvement}</td>
                    <td data-label="Pantura Jawa" className="tabular-nums">{residencyComparisonData[1].populationInvolvement}</td>
                    <td data-label="Luar Jawa" className="tabular-nums">{residencyComparisonData[2].populationInvolvement}</td>
                  </tr>
                  <tr>
                    <td data-label="Dimensi Perbandingan"><strong>Tata Ruang &amp; Segregasi</strong></td>
                    <td data-label="Banten & Tangerang" className="tabular-nums">{residencyComparisonData[0].sawahConfiscated}</td>
                    <td data-label="Pantura Jawa">
                      <span className="badge badge-crimson tabular-nums">{residencyComparisonData[1].sawahConfiscated}</span>
                    </td>
                    <td data-label="Luar Jawa" className="tabular-nums">{residencyComparisonData[2].sawahConfiscated}</td>
                  </tr>
                  <tr>
                    <td data-label="Dimensi Perbandingan"><strong>Rezim Hukum &amp; Pajak</strong></td>
                    <td data-label="Banten & Tangerang">
                      <span className="badge badge-gold">{residencyComparisonData[0].landrentSystem}</span>
                    </td>
                    <td data-label="Pantura Jawa">
                      <span className="table-val-accent">{residencyComparisonData[1].landrentSystem}</span>
                    </td>
                    <td data-label="Luar Jawa">{residencyComparisonData[2].landrentSystem}</td>
                  </tr>
                  <tr>
                    <td data-label="Dimensi Perbandingan"><strong>Struktur Pendapatan &amp; Modal</strong></td>
                    <td data-label="Banten & Tangerang">
                      <strong className="table-val-accent tabular-nums">{residencyComparisonData[0].plantloonPerFamily}</strong>
                    </td>
                    <td data-label="Pantura Jawa" className="tabular-nums">{residencyComparisonData[1].plantloonPerFamily}</td>
                    <td data-label="Luar Jawa">
                      <strong className="table-upah-highlight tabular-nums">{residencyComparisonData[2].plantloonPerFamily}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Dimensi Perbandingan"><strong>Kepemimpinan &amp; Institusi</strong></td>
                    <td data-label="Banten & Tangerang">
                      <span className="badge badge-crimson tabular-nums">{residencyComparisonData[0].cultuurprocenten}</span>
                    </td>
                    <td data-label="Pantura Jawa" className="tabular-nums">{residencyComparisonData[1].cultuurprocenten}</td>
                    <td data-label="Luar Jawa" className="tabular-nums">{residencyComparisonData[2].cultuurprocenten}</td>
                  </tr>
                  <tr>
                    <td data-label="Dimensi Perbandingan"><strong>Karakter Kedudukan Sosial</strong></td>
                    <td data-label="Banten & Tangerang">
                      <span className="status-tag status-surplus">Akulturasi &amp; Kosmopolitan</span>
                    </td>
                    <td data-label="Pantura Jawa">
                      <span className="status-tag status-defisit">Kelas Perantara (Buffer)</span>
                    </td>
                    <td data-label="Luar Jawa">
                      <span className="status-tag status-feodal">Kongsi &amp; Kuli Kontrak</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="residency-cards-grid">
              {residencyComparisonData.map((item, idx) => (
                <article key={idx} className="parchment-card res-card" id={`residency-card-${idx}`}>
                  <div className="res-card-top">
                    <div>
                      <h4 className="res-name">{item.residency}</h4>
                      <span className="res-island-tag">{item.islandArea}</span>
                    </div>
                    <span
                      className={`status-tag ${
                        item.farmerWelfareStatus === 'Surplus Uang'
                          ? 'status-surplus'
                          : item.farmerWelfareStatus === 'Nombok Pajak'
                          ? 'status-defisit'
                          : 'status-feodal'
                      }`}
                    >
                      {item.farmerWelfareStatus === 'Surplus Uang' && <TrendingUp size={13} strokeWidth={1.5} />}
                      {item.farmerWelfareStatus === 'Nombok Pajak' && <TrendingDown size={13} strokeWidth={1.5} />}
                      {item.farmerWelfareStatus === 'Feodalisme & Kemiskinan' && <AlertTriangle size={13} strokeWidth={1.5} />}
                      <span>{item.farmerWelfareStatus}</span>
                    </span>
                  </div>

                  <div className="res-crops-row">
                    <Coffee size={15} strokeWidth={1.5} />
                    <span>Komoditas &amp; Aktivitas: <strong>{item.dominantCrops}</strong></span>
                  </div>

                  <div className="res-mechanism-box">
                    <span className="res-box-label">Dinamika struktur sosial &amp; ruang</span>
                    <p className="res-box-desc">{item.keyMechanism}</p>
                  </div>

                  <div className="res-historiography-box">
                    <span className="res-box-label">Tinjauan sejarawan</span>
                    <p className="res-box-desc">{item.historiographicalRelevance}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Persebaran Spasial 5 Kawasan Nusantara */}
            <div className="tab-lead-open bupati-sub-top">
              <div className="tab-lead-title-row">
                <h3 className="residency-lead-title">
                  {exploitationData.outerJavaExpansion.title}
                </h3>
                <span className="badge badge-gold">{exploitationData.outerJavaExpansion.subtitle}</span>
              </div>
              <p className="residency-lead-desc">
                {exploitationData.outerJavaExpansion.overview}
              </p>
            </div>

            <div className="outer-java-grid">
              {exploitationData.outerJavaExpansion.regions.map((reg) => (
                <article key={reg.id} className="parchment-card outer-region-card" id={`region-card-${reg.id}`}>
                  <div className="region-card-top">
                    <h4 className="region-name">{reg.region}</h4>
                    <span className="badge badge-gold">{reg.island}</span>
                  </div>
                  <div className="region-commodity-row">
                    <Coffee size={15} strokeWidth={1.5} />
                    <span>Fokus: <strong>{reg.primaryCommodity}</strong> · Jaringan: {reg.targetMarket}</span>
                  </div>
                  <p className="region-desc">{reg.description}</p>
                </article>
              ))}
            </div>

            <div className="parchment-card outer-contrast-card">
              <div className="outer-contrast-header">
                <MapPin size={19} strokeWidth={1.5} className="outer-contrast-icon" />
                <h4>Diferensiasi Struktur: Perantara Peranakan Jawa vs Produsen Primer Luar Jawa</h4>
              </div>
              <div className="outer-contrast-ledger">
                <div className="contrast-col">
                  <span className="contrast-label">Jawa &amp; Banten (Peranakan, Niaga &amp; Akulturasi)</span>
                  <p>
                    Didominasi komunitas <em>Peranakan</em> yang telah menetap lintas generasi di kota pelabuhan, Pecinan Banten, dan Tangerang. Berperan sebagai pedagang perantara, pengrajin, syahbandar (era pra-kolonial), hingga pelopor sekolah THHK dan pers <em>Sin Po</em>.
                  </p>
                </div>
                <div className="contrast-col">
                  <span className="contrast-label alt">Luar Jawa (Totok/Sinkeh, Kongsi Tambang &amp; Kuli Deli)</span>
                  <p>
                    Didominasi imigran <em>Totok (Sinkeh)</em> abad ke-18–19 yang bekerja langsung sebagai penambang emas dan timah dalam federasi otonom (<em>Kongsi</em> di Kalimantan Barat dan Bangka-Belitung) maupun kuli kontrak perkebunan tembakau Deli.
                  </p>
                </div>
              </div>
            </div>

            {/* Rujukan Silang Kuratorial kembali ke Bab I Benang Merah Sejarah */}
            <div className="monetization-open-section monetization-crossref-bar">
              <div className="crossref-info">
                <div className="preanger-blueprint-header">
                  <Coins size={19} strokeWidth={1.5} className="preanger-blueprint-icon" />
                  <h4>Refleksi Lintas Zaman: Empat Babak Sejarah &amp; Galeri Tokoh Kunci</h4>
                </div>
                <p className="preanger-blueprint-lead crossref-desc">
                  Bagaimana perjalanan panjang dari pelayaran maritim, tragedi kolonial, hingga kebangkitan THHK, <em>Sin Po</em>, dan PTI 1932 merajut benang merah sejarah Indonesia? Telaah kembali potret tokoh dan refleksi sejarawan pada Bab I.
                </p>
              </div>
              <button
                type="button"
                className="btn btn-outline crossref-jump-btn"
                onClick={() =>
                  navigateToMonographTarget({
                    sectionId: 'latar-belakang',
                    elementId: 'van-rees-monetization-section',
                  })
                }
              >
                <span>Lihat Benang Merah Sejarah (Bab I)</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
