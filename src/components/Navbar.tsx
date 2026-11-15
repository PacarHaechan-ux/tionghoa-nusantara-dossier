import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Search,
  Landmark,
  ScrollText,
  Coins,
  Network,
  Clock,
  Sliders,
  Gamepad2,
  BookOpen
} from 'lucide-react';
import {
  navigateToMonographTarget,
  resolveSectionElementId,
} from '../utils/monographNavigator';
import './Navbar.css';

interface NavbarProps {
  onOpenSearch?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Beranda', icon: Landmark },
  { id: 'latar-belakang', label: '1. Dinamika Sejarah', icon: ScrollText },
  { id: 'eksploitasi', label: '2. Peran Ekonomi', icon: Coins },
  { id: 'pelaksanaan', label: '3. Kedudukan Sosial', icon: Network },
  { id: 'linimasa', label: 'Garis Waktu', icon: Clock },
  { id: 'lab-interaktif', label: 'Lab Sejarah', icon: Sliders },
  { id: 'arena-kuis', label: 'TTS & Kuis', icon: Gamepad2 },
  { id: 'bibliografi', label: 'Pustaka', icon: BookOpen },
];

const quickDockItems = [
  { id: 'hero', shortLabel: 'Beranda', icon: Landmark },
  { id: 'latar-belakang', shortLabel: 'Sejarah', icon: ScrollText },
  { id: 'eksploitasi', shortLabel: 'Ekonomi', icon: Coins },
  { id: 'pelaksanaan', shortLabel: 'Sosial', icon: Network },
  { id: 'lab-interaktif', shortLabel: 'Lab', icon: Sliders },
  { id: 'arena-kuis', shortLabel: 'Kuis', icon: Gamepad2 },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 24);

      const scrollPosition = winScroll + 220;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el =
          document.getElementById(item.id) ??
          document.getElementById(resolveSectionElementId(item.id));
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    navigateToMonographTarget({ sectionId: id });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    navigateToSection(id);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="reading-progress-track" aria-hidden="true">
          <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>

        <nav className="container navbar-container" aria-label="Navigasi Utama">
          <a
            href="#beranda"
            className="navbar-brand"
            onClick={(e) => scrollToSection(e, 'beranda')}
            id="nav-brand-logo"
          >
            <span className="brand-title">Tionghoa Nusantara</span>
            <span className="brand-divider" aria-hidden="true">/</span>
            <span className="brand-subtitle tabular-nums">Abad V–XX</span>
          </a>

          <div className="desktop-nav-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                id={`nav-link-${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            {onOpenSearch && (
              <button
                type="button"
                className="nav-cta-btn nav-search-btn"
                onClick={onOpenSearch}
                id="nav-btn-quick-search"
                aria-label="Cari materi arsip lintas bab dan tab (Ctrl+K)"
              >
                <Search size={15} strokeWidth={1.5} />
                <span>Cari Arsip</span>
                <kbd className="nav-search-kbd tabular-nums">Ctrl K</kbd>
              </button>
            )}
          </div>

          <div className="mobile-header-actions">
            {onOpenSearch && (
              <button
                type="button"
                className="mobile-menu-btn mobile-search-trigger"
                onClick={onOpenSearch}
                aria-label="Cari materi arsip"
                id="mobile-search-toggle"
              >
                <Search size={17} strokeWidth={1.5} />
                <span className="mobile-menu-label">Cari</span>
              </button>
            )}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isMobileMenuOpen ? 'Tutup Daftar Bab' : 'Buka Daftar Bab'}
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
              <span className="mobile-menu-label">Daftar Bab</span>
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="mobile-drawer" id="mobile-navigation-drawer">
            <div className="container mobile-drawer-content">
              {navItems.map((item, idx) => {
                const NavIcon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    id={`mobile-nav-${item.id}`}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                  >
                    <span className="mobile-nav-index tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <NavIcon size={15} strokeWidth={1.5} className="mobile-nav-icon" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <nav className="mobile-bottom-dock" aria-label="Pintasan Cepat Bab">
        {quickDockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`dock-item-btn ${isActive ? 'active' : ''}`}
              onClick={() => navigateToSection(item.id)}
              aria-current={isActive ? 'true' : undefined}
            >
              <Icon size={17} strokeWidth={1.5} className="dock-icon" />
              <span className="dock-label">{item.shortLabel}</span>
            </button>
          );
        })}
        <button
          type="button"
          className={`dock-item-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Semua Bab"
        >
          {isMobileMenuOpen ? (
            <X size={17} strokeWidth={1.5} className="dock-icon" />
          ) : (
            <Menu size={17} strokeWidth={1.5} className="dock-icon" />
          )}
          <span className="dock-label">Semua</span>
        </button>
      </nav>
    </>
  );
};
