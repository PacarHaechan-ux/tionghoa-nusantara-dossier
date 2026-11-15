import {
  backgroundData,
  vanDenBoschControversyData,
  everydayFarmerLifeData,
  exploitationData,
  commodityFinancialData,
  ecologicalZoningData,
  batigSlotAllocationData,
  colonialGlossaryData,
  bremanCritiqueData,
  implementationData,
  residencyComparisonData,
  bupatiRolesData,
  preangerBlueprintData,
  vocExpansionData,
  impactData,
  peasantResistanceData,
  parliamentaryPoliticsData,
  historiographicalSynthesisData,
  vanReesReportData,
  prianganMonetizationData,
  spatialMarkersData,
  historicalDilemmasData,
  featuredHistoricalQuotes,
  bibliographyData,
} from './historyContent';
import type { MonographNavigationTarget } from '../utils/monographNavigator';

export interface MonographSearchEntry {
  id: string;
  title: string;
  category: string;
  sectionLabel: string;
  badge?: string;
  snippet: string;
  keywords: string;
  target: MonographNavigationTarget;
}

export interface QuickTopicPreset {
  label: string;
  query: string;
}

export const QUICK_SEARCH_PRESETS: QuickTopicPreset[] = [
  { label: 'Koin Kepeng', query: 'Kepeng' },
  { label: 'Geger Pecinan 1740', query: 'Geger Pecinan' },
  { label: 'Opiumpacht ~18%', query: 'Opiumpacht' },
  { label: 'Pecinan Banten', query: 'Banten' },
  { label: 'Koelie Ordonnantie', query: 'Koelie' },
  { label: 'THHK 1900', query: 'THHK' },
  { label: 'Harian Sin Po', query: 'Sin Po' },
  { label: 'Liem Koen Hian (PTI)', query: 'Liem Koen Hian' },
];

function buildSearchCatalog(): MonographSearchEntry[] {
  const entries: MonographSearchEntry[] = [];

  // 1. Bab I · Dinamika Lintas Zaman (Abad ke-5 – 1932)
  backgroundData.crises.forEach((crisis) => {
    entries.push({
      id: `search-crisis-${crisis.id}`,
      title: `${crisis.name} (${crisis.years})`,
      category: 'Empat Babak Lintas Zaman',
      sectionLabel: 'Bab I · Dinamika Lintas Zaman',
      badge: crisis.years,
      snippet: `${crisis.impact} Skala: ${crisis.cost}.`,
      keywords: `${crisis.name} ${crisis.years} ${crisis.impact} ${crisis.cost} maritim kepeng syahbandar VOC`,
      target: {
        sectionId: 'latar-belakang',
        elementId: `crisis-card-${crisis.id}`,
      },
    });
  });

  entries.push({
    id: 'search-vandenbosch-concept',
    title: backgroundData.vanDenBoschConcept.title,
    category: 'Benang Merah Narasi',
    sectionLabel: 'Bab I · Dinamika Lintas Zaman',
    badge: 'Abad V–1932',
    snippet: backgroundData.vanDenBoschConcept.summary,
    keywords: `Jalur Sutra Maritim Koin Kepeng Syahbandar Cakradana VOC Souw Beng Kong Geger Pecinan ${backgroundData.vanDenBoschConcept.points.join(' ')}`,
    target: {
      sectionId: 'latar-belakang',
      elementId: 'vandenbosch-concept-section',
    },
  });

  vanDenBoschControversyData.forEach((c, idx) => {
    const mappedCrisisId =
      idx < 2
        ? backgroundData.crises[0]?.id ?? 'maritim-pra-eropa'
        : idx < 4
        ? backgroundData.crises[1]?.id ?? 'kemitraan-voc-1619'
        : backgroundData.crises[2]?.id ?? 'geger-pecinan-1740';

    entries.push({
      id: `search-controversy-${c.id}`,
      title: c.title,
      category: 'Jejak Maritim, VOC & Banten',
      sectionLabel: 'Bab I · Dinamika Lintas Zaman',
      badge: c.badge,
      snippet: `${c.description} ${c.historicalDetail}`,
      keywords: `${c.title} ${c.badge} ${c.description} ${c.historicalDetail} kepeng syahbandar VOC Batavia Banten`,
      target: {
        sectionId: 'latar-belakang',
        elementId: `crisis-card-${mappedCrisisId}`,
      },
    });
  });

  entries.push({
    id: 'search-farmer-bivak',
    title: everydayFarmerLifeData.title,
    category: 'Banten & Pesisir Jawa',
    sectionLabel: 'Bab I · Dinamika Lintas Zaman',
    badge: 'Banten 1596–1726',
    snippet: everydayFarmerLifeData.subtitle,
    keywords: `${everydayFarmerLifeData.title} Banten Cakradana Masjid Pacinan Tinggi Lasem Semarang Tuban ${everydayFarmerLifeData.aspects.map((a) => a.title + ' ' + a.description).join(' ')}`,
    target: {
      sectionId: 'latar-belakang',
      elementId: 'vandenbosch-concept-section',
    },
  });

  // Klimaks Bab I: Bara Perlawanan, Tragedi Kolonial & Fajar Kebangsaan (1740–1932)
  impactData.famineCases.forEach((fam, idx) => {
    const mappedCrisisId =
      idx === 0
        ? backgroundData.crises[2]?.id ?? 'geger-pecinan-1740'
        : backgroundData.crises[3]?.id ?? 'kebangkitan-pergerakan-1900';

    entries.push({
      id: `search-famine-${idx}`,
      title: `Tragedi Kolonial: ${fam.region} (${fam.years})`,
      category: 'Tragedi & Eksploitasi Kolonial',
      sectionLabel: 'Bab I · Bara Perlawanan & Fajar Kebangsaan',
      badge: fam.years,
      snippet: `${fam.cause} Skala Korban: ${fam.victimCount}.`,
      keywords: `Geger Pecinan Perang Kongsi Koelie Ordonnantie ${fam.region} ${fam.years} ${fam.cause} ${fam.victimCount} ${fam.description}`,
      target: {
        sectionId: 'latar-belakang',
        elementId: `crisis-card-${mappedCrisisId}`,
      },
    });
  });

  impactData.positiveImpacts.forEach((pos, idx) => {
    entries.push({
      id: `search-pos-impact-${idx}`,
      title: `Kontribusi Historis: ${pos.title}`,
      category: 'Warisan Sosial-Ekonomi',
      sectionLabel: 'Bab I · Bara Perlawanan & Fajar Kebangsaan',
      badge: 'Kontribusi Historis',
      snippet: pos.description,
      keywords: `kontribusi positif monetisasi akulturasi pers nasionalisme ${pos.title} ${pos.description}`,
      target: {
        sectionId: 'latar-belakang',
        subTabId: 'positive',
        elementId: 'tab-impact-positive',
      },
    });
  });

  peasantResistanceData.forEach((res, idx) => {
    const mappedElementId =
      idx < 2
        ? `crisis-card-${backgroundData.crises[2]?.id ?? 'geger-pecinan-1740'}`
        : idx < 4
        ? `crisis-card-${backgroundData.crises[3]?.id ?? 'kebangkitan-pergerakan-1900'}`
        : 'fajar-kebangsaan-section';

    entries.push({
      id: `search-res-${res.id}`,
      title: `Perlawanan & Agensi: ${res.title}`,
      category: res.category,
      sectionLabel: 'Bab I · Bara Perlawanan & Fajar Kebangsaan',
      badge: res.locationOrYear,
      snippet: `${res.description} Dampak: ${res.historicalImpact}`,
      keywords: `perlawanan Geger Pecinan Perang Kongsi THHK Sin Po PTI ${res.category} ${res.title} ${res.locationOrYear} ${res.description} ${res.historicalImpact}`,
      target: {
        sectionId: 'latar-belakang',
        elementId: mappedElementId,
      },
    });
  });

  parliamentaryPoliticsData.forEach((pol) => {
    entries.push({
      id: `search-pol-${pol.id}`,
      title: `Dinamika Politik (${pol.periodOrEvent}): ${pol.title}`,
      category: 'Kebangkitan & Haluan Politik',
      sectionLabel: 'Bab I · Bara Perlawanan & Fajar Kebangsaan',
      badge: pol.periodOrEvent,
      snippet: `${pol.coreDebate} Hasil: ${pol.outcomeAndImpact}`,
      keywords: `THHK HCS Kekawulaan Belanda Sin Po CHH PTI Liem Koen Hian ${pol.periodOrEvent} ${pol.title} ${pol.factions} ${pol.coreDebate} ${pol.outcomeAndImpact}`,
      target: {
        sectionId: 'latar-belakang',
        elementId: pol.id,
      },
    });
  });

  prianganMonetizationData.forEach((pm, idx) => {
    const mappedCrisisId = backgroundData.crises[idx]?.id ?? 'maritim-pra-eropa';

    entries.push({
      id: `search-monetization-${pm.id}`,
      title: `Periodisasi Sejarah (${pm.phase}): ${pm.title}`,
      category: 'Evolusi Empat Babak',
      sectionLabel: 'Bab I · Dinamika Lintas Zaman',
      badge: pm.periodLabel,
      snippet: `${pm.characteristics.join(' ')} ${pm.keyFact}`,
      keywords: `periodisasi fase maritim VOC kolonial kebangkitan ${pm.phase} ${pm.periodLabel} ${pm.title} ${pm.characteristics.join(' ')} ${pm.keyFact}`,
      target: {
        sectionId: 'latar-belakang',
        elementId: `crisis-card-${mappedCrisisId}`,
      },
    });
  });

  impactData.historicalCritics.forEach((critic) => {
    entries.push({
      id: `search-critic-${critic.id}`,
      title: `${critic.name} — ${critic.role}`,
      category: `Tokoh Sejarah (${critic.category})`,
      sectionLabel: 'Bab I · Galeri Tokoh Kunci Sejarah',
      badge: critic.period,
      snippet: `${critic.keyContribution} Sumber: ${critic.workOrCitation}.`,
      keywords: `${critic.name} ${critic.role} ${critic.period} ${critic.category} ${critic.workOrCitation} ${critic.keyContribution} ${critic.impactNote}`,
      target: {
        sectionId: 'latar-belakang',
        elementId: critic.id,
      },
    });
  });

  vanReesReportData.forEach((vr) => {
    entries.push({
      id: `search-vanrees-${vr.id}`,
      title: `Benang Merah Sejarah: ${vr.title}`,
      category: 'Refleksi Lintas Zaman',
      sectionLabel: 'Bab I · Tiga Benang Merah Sejarah',
      badge: vr.badge,
      snippet: `${vr.findings.join(' ')} Signifikansi: ${vr.significance}`,
      keywords: `benang merah refleksi sintesis sejarah ${vr.title} ${vr.findings.join(' ')} ${vr.significance}`,
      target: {
        sectionId: 'latar-belakang',
        elementId: 'vandenbosch-concept-section',
      },
    });
  });

  historiographicalSynthesisData.forEach((hist, idx) => {
    entries.push({
      id: `search-hist-lens-${idx}`,
      title: `Lensa Historiografi: ${hist.historian}`,
      category: hist.schoolName,
      sectionLabel: 'Bab I · Perspektif Sejarawan',
      badge: hist.framework,
      snippet: `${hist.economicAssessment} Karya: ${hist.keyWork}.`,
      keywords: `${hist.historian} ${hist.schoolName} ${hist.framework} ${hist.primaryPerspective} ${hist.economicAssessment} ${hist.collapseExplanation} ${hist.keyWork}`,
      target: {
        sectionId: 'latar-belakang',
        elementId: `hist-lens-card-${idx}`,
      },
    });
  });

  backgroundData.historianInterpretations.forEach((h) => {
    entries.push({
      id: `search-interp-${h.id}`,
      title: `Perspektif Sejarawan: ${h.scholar}`,
      category: 'Historiografi',
      sectionLabel: 'Bab I · Perspektif Sejarawan',
      snippet: h.interpretation,
      keywords: `${h.scholar} ${h.interpretation} sejarawan Tionghoa Nusantara`,
      target: {
        sectionId: 'latar-belakang',
        elementId: 'lensa-historiografi-section',
      },
    });
  });

  // 2. Bab II · Peran dalam Perekonomian (#eksploitasi — 3 Tabs: 'financial' | 'batig-slot' | 'ecology')
  entries.push({
    id: 'search-voc-comparison',
    title: 'Transformasi Struktur Ekonomi: Era Maritim & VOC vs Negara Kolonial',
    category: 'Komparasi Historis',
    sectionLabel: 'Bab II · Peran Ekonomi',
    badge: 'Abad V–XX',
    snippet: 'Pergeseran dari kemitraan maritim bebas & syahbandar menuju sistem Pachtstelsel, perantara distribusi desa, dan korporasi modern.',
    keywords: `komparasi VOC Hindia Belanda Pachtstelsel perantara ${exploitationData.vocComparison.map((v) => `${v.aspect} ${v.voc} ${v.cultuurstelsel}`).join(' ')}`,
    target: {
      sectionId: 'eksploitasi',
      tabId: 'financial',
      elementId: 'commodity-tab-kopi',
    },
  });

  // Tab 1 Bab II ('financial'): Koin Kepeng, Gula & Jaringan Pasar Desa
  exploitationData.commodities.forEach((c) => {
    entries.push({
      id: `search-commodity-${c.id}`,
      title: `${c.name} (${c.latinName})`,
      category: 'Sektor Ekonomi Nusantara',
      sectionLabel: 'Bab II · Tab 1 Koin Kepeng, Gula & Pasar Desa',
      badge: `Intensitas ${c.burdenLevel}`,
      snippet: `${c.description} Wilayah: ${c.regions.join(', ')}.`,
      keywords: `${c.name} ${c.latinName} ${c.category} ${c.regions.join(' ')} ${c.description} ${c.fact}`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'financial',
        subTabId: c.id,
        elementId: `commodity-tab-${c.id}`,
      },
    });
  });

  const finCommodityMap = ['kopi', 'nila', 'tebu', 'teh'];
  commodityFinancialData.forEach((fin, idx) => {
    const mappedCommId = finCommodityMap[idx] ?? 'kopi';
    entries.push({
      id: `search-fin-${idx}`,
      title: `Jejak Ekonomi & Fiskal: ${fin.commodity}`,
      category: 'Transformasi Sektor Ekonomi',
      sectionLabel: 'Bab II · Tab 1 Koin Kepeng, Gula & Pasar Desa',
      badge: fin.totalSurplusShare,
      snippet: `Abad ke-19: ${fin.profit1840_1849} · Akhir Kolonial: ${fin.status1850_1860}.`,
      keywords: `${fin.commodity} fiskal pacht gula timah kuli bank ${fin.keyDetails.join(' ')}`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'financial',
        subTabId: mappedCommId,
        elementId: `commodity-tab-${mappedCommId}`,
      },
    });
  });

  // Tab 2 Bab II ('batig-slot'): Mesin Pajak Kolonial: Sistem Pacht & Opiumpacht
  batigSlotAllocationData.forEach((b) => {
    entries.push({
      id: `search-batig-${b.id}`,
      title: `Peralihan Modal & Institusi: ${b.title}`,
      category: 'Sistem Pacht & Kemandirian Modern',
      sectionLabel: 'Bab II · Tab 2 Mesin Pajak Kolonial & Pacht',
      badge: b.amountOrScale,
      snippet: `${b.description} Tokoh/Institusi: ${b.destination}.`,
      keywords: `Pacht Opiumpacht THHK Siang Hwee Sin Po PTI CHH Oei Tiong Ham ${b.title} ${b.amountOrScale} ${b.destination} ${b.description} ${b.historicalSignificance}`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'batig-slot',
        elementId: 'batig-allocation-section',
      },
    });
  });

  Object.entries(exploitationData.mechanisms).forEach(([key, mech]) => {
    entries.push({
      id: `search-mech-${key}`,
      title: mech.term,
      category: 'Institusi Ekonomi Kolonial',
      sectionLabel: 'Bab II · Tab 2 Mesin Pajak Kolonial & Pacht',
      snippet: `${mech.summary} ${mech.detail}`,
      keywords: `${mech.term} ${mech.summary} ${mech.detail}`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'batig-slot',
        elementId: `mech-card-${key}`,
      },
    });
  });

  // Tab 3 Bab II ('ecology'): Kontras Dua Dunia: Saudagar Jawa vs Kongsi & Kuli Deli (+ Glosarium)
  ecologicalZoningData.forEach((z, idx) => {
    entries.push({
      id: `search-eco-${idx}`,
      title: `${z.type} (${z.cropCategory})`,
      category: 'Kontras Jawa vs Luar Jawa',
      sectionLabel: 'Bab II · Tab 3 Saudagar Jawa vs Kongsi & Kuli Deli',
      badge: z.crops.join(', '),
      snippet: `${z.landCharacteristics} ${z.ecologicalRationale}`,
      keywords: `${z.type} ${z.cropCategory} ${z.crops.join(' ')} ${z.landCharacteristics} ${z.ecologicalRationale} ${z.regions.join(' ')} Jawa Luar Jawa Bangka Deli Kalbar`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'ecology',
        elementId: `eco-zone-${idx}`,
      },
    });
  });

  exploitationData.laborStatistics.items.forEach((stat) => {
    entries.push({
      id: `search-labor-${stat.id}`,
      title: `${stat.label}: ${stat.value} (${stat.period})`,
      category: 'Indikator Kuantitatif',
      sectionLabel: 'Bab II · Tab 3 Saudagar Jawa vs Kongsi & Kuli Deli',
      badge: stat.period,
      snippet: `${stat.context} (${stat.citation}).`,
      keywords: `${stat.label} ${stat.value} ${stat.period} ${stat.context} ${stat.citation} statistik kuantitatif`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'ecology',
        elementId: 'ecological-zoning-section',
      },
    });
  });

  bremanCritiqueData.forEach((bc) => {
    entries.push({
      id: `search-breman-${bc.id}`,
      title: `Bedah Paradoks Kolonial: ${bc.title}`,
      category: 'Analisis Kritis Struktural',
      sectionLabel: 'Bab II · Tab 3 Saudagar Jawa vs Kongsi & Kuli Deli',
      badge: 'Stereotip vs Realitas',
      snippet: `Narasi Kolonial: ${bc.mythVsFact.officialClaim} Realitas: ${bc.mythVsFact.groundReality}`,
      keywords: `${bc.title} ${bc.mythVsFact.officialClaim} ${bc.mythVsFact.groundReality} ${bc.evidence} paradoks kolonial`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'ecology',
        elementId: bc.id,
      },
    });
  });

  colonialGlossaryData.forEach((g, idx) => {
    entries.push({
      id: `search-glossary-${idx}`,
      title: `Glosarium Sejarah: ${g.term}`,
      category: 'Istilah & Regulasi',
      sectionLabel: 'Bab II · Tab 3 Glosarium Ekonomi & Kolonial',
      badge: g.modernEquivalent,
      snippet: `${g.definition} ${g.contextNote}`,
      keywords: `${g.term} ${g.modernEquivalent} ${g.definition} ${g.contextNote} glosarium istilah`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'ecology',
        elementId: `glossary-term-${idx}`,
      },
    });
  });

  // 3. Bab III · Kedudukan dalam Struktur Sosial (#pelaksanaan — 3 Tabs: 'staatsblad' | 'bupati' | 'three-residencies')
  implementationData.laws.forEach((law, idx) => {
    const activeLawCardIdx = Math.min(idx, 3);
    entries.push({
      id: `search-law-${law.ruleNumber}`,
      title: `Regulasi Kolonial 0${law.ruleNumber}: ${law.article}`,
      category: 'Hukum & Segregasi Kolonial',
      sectionLabel: 'Bab III · Tab 1 Piramida Tiga Golongan & Tembok Pecinan',
      badge: `Dampak ${law.severity}`,
      snippet: `Regulasi: ${law.officialRule} Realitas: ${law.fieldReality}`,
      keywords: `Regeeringsreglement Vreemde Oosterlingen Wijkenstelsel Passenstelsel Koelie Ordonnantie ${law.ruleNumber} ${law.article} ${law.officialRule} ${law.fieldReality}`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'staatsblad',
        elementId: `law-card-${activeLawCardIdx}`,
      },
    });
  });

  bupatiRolesData.forEach((role) => {
    entries.push({
      id: `search-bupati-${role.id}`,
      title: `Wajah Komunitas 0${role.roleNumber}: ${role.title}`,
      category: 'Peranakan, Totok & Para Kapiten',
      sectionLabel: 'Bab III · Tab 2 Wajah Komunitas & Para Kapiten',
      badge: role.badge,
      snippet: role.summary,
      keywords: `peranakan totok sinkeh kapitein majoor luitenant Cina Benteng akulturasi ${role.title} ${role.summary} ${role.details.join(' ')}`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'bupati',
        elementId: role.id,
      },
    });
  });

  preangerBlueprintData.forEach((bp) => {
    entries.push({
      id: `search-blueprint-${bp.id}`,
      title: `Transformasi Kedudukan: ${bp.title}`,
      category: 'Pra-Kolonial vs Kolonial',
      sectionLabel: 'Bab III · Tab 2 Wajah Komunitas & Para Kapiten',
      badge: `Dimensi 0${bp.elementNumber}`,
      snippet: `${bp.preangerstelselOrigin} -> ${bp.cultuurstelselAdoption}`,
      keywords: `Syahbandar Kapitein Pecinan Banten ${bp.title} ${bp.preangerstelselOrigin} ${bp.cultuurstelselAdoption} ${bp.significance}`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'bupati',
        elementId: 'preanger-blueprint-section',
      },
    });
  });

  vocExpansionData.forEach((ve) => {
    entries.push({
      id: `search-vocexp-${ve.id}`,
      title: `Jejak Historis Banten & Tangerang: ${ve.title}`,
      category: 'Kesultanan Banten & Cina Benteng',
      sectionLabel: 'Bab III · Tab 3 Harmoni Banten & Cina Benteng',
      badge: ve.badge,
      snippet: `${ve.description} Warisan: ${ve.longTermImpact}`,
      keywords: `Banten Karangantu Pacinan Tinggi Kelenteng Avalokitesvara Cina Benteng ${ve.title} ${ve.badge} ${ve.description} ${ve.longTermImpact}`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'three-residencies',
        elementId: ve.id,
      },
    });
  });

  residencyComparisonData.forEach((res, idx) => {
    entries.push({
      id: `search-residency-${idx}`,
      title: `Komparasi Sosial-Spasial: ${res.residency}`,
      category: 'Komparasi 3 Wilayah',
      sectionLabel: 'Bab III · Tab 3 Harmoni Banten & Cina Benteng',
      badge: res.islandArea,
      snippet: `Sektor: ${res.dominantCrops}. ${res.keyMechanism}`,
      keywords: `${res.residency} ${res.islandArea} ${res.dominantCrops} ${res.keyMechanism} ${res.historiographicalRelevance}`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'three-residencies',
        elementId: 'residency-comparison-table',
      },
    });
  });

  exploitationData.outerJavaExpansion.regions.forEach((reg) => {
    entries.push({
      id: `search-outer-${reg.id}`,
      title: `Jaringan Komunitas: ${reg.region}`,
      category: 'Persebaran Spasial Nusantara',
      sectionLabel: 'Bab III · Tab 3 Harmoni Banten & Cina Benteng',
      badge: reg.island,
      snippet: `Fokus: ${reg.primaryCommodity}. ${reg.description}`,
      keywords: `${reg.region} ${reg.island} ${reg.primaryCommodity} ${reg.description} ${reg.targetMarket} Banten Tangerang Lasem Bangka Kalbar Deli`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'three-residencies',
        elementId: 'residency-comparison-table',
      },
    });
  });

  // 4. Garis Waktu (Abad V – 1932)
  implementationData.timeline.forEach((ev) => {
    entries.push({
      id: `search-timeline-${ev.id}`,
      title: `Kronik ${ev.year}: ${ev.title}`,
      category: 'Garis Waktu Sejarah',
      sectionLabel: 'Garis Waktu · Abad V hingga 1932',
      badge: String(ev.year),
      snippet: ev.shortDesc,
      keywords: `${ev.year} ${ev.title} ${ev.badge} ${ev.shortDesc} ${ev.fullDesc.join(' ')} ${ev.historicalFigures.join(' ')}`,
      target: {
        sectionId: 'timeline-section',
        tabId: ev.id,
        elementId: 'timeline-featured-card',
      },
    });
  });

  // 5. Laboratorium Sejarah: Peta Spasial, Kalkulator, & Simulasi Dilema
  spatialMarkersData.forEach((m) => {
    entries.push({
      id: `search-map-${m.id}`,
      title: `Peta Spasial: ${m.name} (${m.residency})`,
      category: 'Peta Geospasial Nusantara',
      sectionLabel: 'Lab Sejarah · Tab 1 Peta Jaringan',
      badge: `${Math.abs(m.lat).toFixed(1)}° ${m.lat >= 0 ? 'LU' : 'LS'}, ${m.lon.toFixed(1)}° BT`,
      snippet: `${m.summary} Sumber: ${m.historicalDetails.archivalReference}`,
      keywords: `peta geospasial lokasi koordinat ${m.name} ${m.residency} ${m.title} ${m.summary} ${m.historicalDetails.statistics} ${m.historicalDetails.archivalReference}`,
      target: {
        sectionId: 'interactive-lab',
        tabId: 'map',
        subTabId: m.id,
        elementId: 'lab-map-panel',
      },
    });
  });

  entries.push({
    id: 'search-lab-calculator',
    title: 'Kalkulator Kurs Gulden/Kepeng, Konversi Pikul/Tahil, & Simulator Ekonomi Kolonial',
    category: 'Instrumen Kuantitatif',
    sectionLabel: 'Lab Sejarah · Tab 2 Kalkulator & Simulator',
    badge: 'Interaktif',
    snippet: 'Konversi daya beli Gulden & Real ke Rupiah modern, konversi satuan Pikul/Kati/Tahil/Kepeng, serta simulator struktur ekonomi Pacht, Kongsi & Kuli Deli.',
    keywords: 'kalkulator kurs gulden real kepeng pikul kati tahil simulator kuli kontrak Deli kongsi timah pacht',
    target: {
      sectionId: 'interactive-lab',
      tabId: 'calculator',
      elementId: 'lab-calc-panel',
    },
  });

  historicalDilemmasData.forEach((dil) => {
    entries.push({
      id: `search-dilemma-${dil.id}`,
      title: `Simulasi Dilema (${dil.year}): ${dil.title}`,
      category: 'Simulasi Peran Sejarah',
      sectionLabel: 'Lab Sejarah · Tab 3 Simulasi Dilema',
      badge: dil.role,
      snippet: `${dil.situation} Konteks: ${dil.historicalContext}`,
      keywords: `simulasi dilema sejarah ${dil.title} ${dil.role} ${dil.location} ${dil.year} ${dil.situation} ${dil.historicalContext}`,
      target: {
        sectionId: 'interactive-lab',
        tabId: 'dilemma',
        subTabId: dil.id,
        elementId: 'lab-dilemma-panel',
      },
    });
  });

  // 6. Permainan Sejarah (TTS & Kuis)
  entries.push({
    id: 'search-game-tts',
    title: 'Teka-Teki Silang Nusantara (11×12) — Suplemen Harian Sin Po',
    category: 'Permainan Edukasi',
    sectionLabel: 'TTS & Kuis · Tab 1 TTS Nusantara',
    badge: '10 Kata',
    snippet: 'Asah ketajaman istilah sejarah ekonomi & sosial masyarakat Tionghoa di Nusantara dengan papan TTS 11×12 interaktif.',
    keywords: 'TTS teka-teki silang permainan game Sin Po Kepeng Pecinan Banten Batavia Kongsi THHK',
    target: {
      sectionId: 'permainan-sejarah',
      tabId: 'tts',
    },
  });

  entries.push({
    id: 'search-game-quiz',
    title: 'Kuis Evaluasi Sejarah Sosial-Ekonomi & Piagam Kehormatan',
    category: 'Evaluasi Interaktif',
    sectionLabel: 'TTS & Kuis · Tab 2 Kuis Sejarah',
    badge: '8 Soal',
    snippet: 'Uji pemahaman kritis atas tiga bab utama melalui 8 soal pilihan ganda & uji klaim mitos/fakta historis untuk meraih Piagam Kehormatan.',
    keywords: 'kuis quiz evaluasi soal ujian sejarah sosial ekonomi piagam skor',
    target: {
      sectionId: 'permainan-sejarah',
      tabId: 'quiz',
    },
  });

  // 7. Kutipan & Daftar Pustaka
  featuredHistoricalQuotes.forEach((fq) => {
    entries.push({
      id: `search-fquote-${fq.id}`,
      title: `Kutipan Historiografi: ${fq.author}`,
      category: 'Kutipan Sejarawan & Tokoh',
      sectionLabel: 'Daftar Pustaka · Kutipan & Referensi',
      badge: fq.badge,
      snippet: `“${fq.quote}” (${fq.work})`,
      keywords: `kutipan quote ${fq.author} ${fq.work} ${fq.quote} ${fq.historicalContext}`,
      target: {
        sectionId: 'pustaka',
        elementId: fq.id,
      },
    });
  });

  bibliographyData.forEach((bib) => {
    entries.push({
      id: `search-bib-${bib.id}`,
      title: `${bib.authors} (${bib.year}) — ${bib.title}`,
      category: `Pustaka (${bib.type})`,
      sectionLabel: 'Daftar Pustaka · Referensi Akademik',
      badge: bib.year,
      snippet: `${bib.publisher}${bib.doiUrl ? ` · ${bib.doiUrl}` : ''}`,
      keywords: `pustaka referensi sitasi APA ${bib.authors} ${bib.year} ${bib.title} ${bib.publisher} ${bib.type}`,
      target: {
        sectionId: 'pustaka',
        subTabId: bib.type,
        elementId: `biblio-item-${bib.id}`,
      },
    });
  });

  return entries;
}

export const MONOGRAPH_SEARCH_INDEX: MonographSearchEntry[] = buildSearchCatalog();

export function searchMonographCatalog(rawQuery: string, limit = 18): MonographSearchEntry[] {
  const query = rawQuery.trim().toLowerCase();
  if (!query) {
    return MONOGRAPH_SEARCH_INDEX.slice(0, 10);
  }

  const tokens = query.split(/\s+/).filter(Boolean);

  const scored: { entry: MonographSearchEntry; score: number }[] = [];

  for (const entry of MONOGRAPH_SEARCH_INDEX) {
    const titleLower = entry.title.toLowerCase();
    const catLower = entry.category.toLowerCase();
    const hayLower = `${titleLower} ${catLower} ${entry.sectionLabel.toLowerCase()} ${entry.keywords.toLowerCase()}`;

    const allMatched = tokens.every((t) => hayLower.includes(t));
    if (!allMatched) continue;

    let score = 0;
    if (titleLower.includes(query)) score += 50;
    for (const token of tokens) {
      if (titleLower.includes(token)) score += 20;
      if (catLower.includes(token)) score += 10;
      if (entry.badge?.toLowerCase().includes(token)) score += 12;
      score += 5;
    }

    scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.entry);
}
