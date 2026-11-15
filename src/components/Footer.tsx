import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand-block">
            <h3 className="footer-title">Masyarakat Tionghoa di Nusantara (Abad V–XX)</h3>
            <span className="footer-subtitle">
              Dinamika dan Peran dalam Perekonomian Nusantara serta Kedudukannya dalam Struktur Sosial Kolonial
            </span>
            <p className="footer-about">
              Monograf digital akademik Kelompok 8 yang mengkaji jaringan niaga maritim dan koin kepeng, kemitraan dan tragedi era VOC, sistem Pacht dan kuli kontrak abad ke-19, stratifikasi hukum kolonial, akulturasi Pecinan Banten, hingga kebangkitan nasionalisme.
            </p>
          </div>

          <div className="footer-authors-block">
            <h4 className="footer-col-title">Kolofon Penyusun (Kelompok 8)</h4>
            <ul className="footer-authors-list">
              <li>
                <strong>Dini Nurdiyah</strong> (NIM 2288250093)
              </li>
              <li>
                <strong>Gina Khairunisa Syihab</strong> (NIM 2288250054)
              </li>
              <li className="footer-course-item">
                Mata Kuliah Sejarah Sosial Perekonomian · Dosen Pengampu: <strong>Eko Ribawati, M.Pd.</strong>
              </li>
              <li className="footer-course-item">
                Program Studi Pendidikan Sejarah, FKIP Universitas Sultan Ageng Tirtayasa (2026)
              </li>
            </ul>
          </div>

          <div className="footer-back-to-top">
            <button
              type="button"
              className="btn back-to-top-btn"
              onClick={scrollToTop}
              id="footer-btn-top"
              aria-label="Kembali ke Atas"
            >
              <ArrowUp size={16} strokeWidth={1.5} />
              <span>Kembali ke Atas</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            © 2026 Kelompok 8 Sejarah Sosial Perekonomian (Dini Nurdiyah &amp; Gina Khairunisa Syihab) · Prodi Pendidikan Sejarah FKIP Universitas Sultan Ageng Tirtayasa.
          </p>
        </div>
      </div>
    </footer>
  );
};
