import React from 'react';
import {
  backgroundData,
  heroData,
  vanDenBoschControversyData,
  everydayFarmerLifeData
} from '../data/historyContent';
import type { HistoricalImage } from '../data/historyContent';
import { Coins, ZoomIn } from 'lucide-react';
import './BackgroundSection.css';

interface BackgroundSectionProps {
  onOpenImage?: (image: HistoricalImage, title: string) => void;
}

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({ onOpenImage }) => {
  return (
    <section id="latar-belakang" className="section background-section">
      <div className="container">
        {/* Monograph 2-Column Chapter Header (Zero Eyebrow Kicker) */}
        <div className="section-header">
          <h2 className="section-title">{backgroundData.sectionTitle}</h2>
          <p className="section-subtitle">{backgroundData.sectionSubtitle}</p>
        </div>

        {/* Opening Historical Narrative */}
        <div className="narrative-intro-sheet">
          <p className="narrative-lead">{backgroundData.narrative}</p>
        </div>

        {/* Three Fiscal & Military Crises */}
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
                  title="Klik untuk memperbesar lukisan sejarah"
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
                    <span>
                      {crisis.image.alt.includes('Raden Saleh')
                        ? 'Lukisan Raden Saleh'
                        : crisis.image.alt.includes('Wappers')
                        ? 'Lukisan Gustave Wappers'
                        : 'Litografi Sejarah'}
                    </span>
                  </div>
                </div>
              )}

              <p className="crisis-impact">{crisis.impact}</p>

              <div className="crisis-cost-footer">
                <Coins size={16} strokeWidth={1.5} className="crisis-cost-icon" />
                <div className="crisis-cost-text">
                  <span className="cost-label">Skala historis &amp; moneter</span>
                  <strong className="cost-value tabular-nums">{crisis.cost}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Johannes van den Bosch Concept — Open 2-Column Monograph Layout (Zero Nested Cards) */}
        <div className="vandenbosch-open-section" id="vandenbosch-concept-section">
          <div className="vandenbosch-content">
            <div className="vandenbosch-info">
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
              <h4 className="aside-heading">Paradoks Kebijakan Kolonial (Bab 1.1)</h4>
              <p className="aside-body">
                Di satu sisi, pemerintah kolonial sangat bergantung pada masyarakat Tionghoa untuk menggerakkan
                perdagangan perantara, pajak <em>pacht</em>, dan tenaga kerja. Namun di sisi lain, kecurigaan politik
                memicu pembantaian Geger Pecinan 1740 serta segregasi hukum <em>Vreemde Oosterlingen</em>,{' '}
                <em>Wijkenstelsel</em>, dan <em>Passenstelsel</em>.
              </p>
              <blockquote className="aside-quote">
                “Dibutuhkan sebagai tulang punggung ekonomi, namun disekat secara hukum agar tak bersatu dengan pribumi.”
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

        {/* 6 Fokus Kajian Pra-Abad ke-19 */}
        <div className="controversy-block">
          <div className="monograph-sub-opener">
            <h3 className="controversy-title">
              Enam Pilar Aktivitas Ekonomi &amp; Sosial Sebelum Abad ke-19 (Bab 2.1)
            </h3>
            <p className="controversy-subtitle">
              Dari monetisasi koin kepeng, kemitraan VOC di Batavia 1619, tragedi Geger Pecinan 1740, hingga kosmopolitanisme Kesultanan Banten
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

        {/* Potret Humanis: Sehari-hari di Bivak Rimba Kopi (Open Section — Zero Nested Cards) */}
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

        {/* Interpretations of Historians */}
        <div className="interpretations-block">
          <div className="monograph-sub-opener">
            <h3 className="interp-title">Perspektif Para Sejarawan terhadap Peran Ekonomi &amp; Sosial Tionghoa</h3>
            <p className="interp-subtitle">
              Sintesis historiografis dari kajian maritim, kolonialisme VOC, sistem Pacht abad ke-19, hingga pergerakan nasionalisme
            </p>
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
            <h3 className="quotes-title">Kutipan Definitif Para Sejarawan</h3>
            <p className="quotes-subtitle">Refleksi kritis para ahli sejarah terhadap dinamika masyarakat Tionghoa di Nusantara</p>
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
      </div>
    </section>
  );
};
