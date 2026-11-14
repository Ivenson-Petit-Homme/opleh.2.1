import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Search, ChevronRight } from 'lucide-react';
import { NavSection } from '../types';
import { OPLEHLogo } from './OPLEHLogo';

interface HeaderProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenDonate: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenDonate,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavSection; wwfLabel: string }[] = [
    { id: 'accueil', wwfLabel: 'ACCUEIL' },
    { id: 'apropos', wwfLabel: 'À PROPOS' },
    { id: 'domaines', wwfLabel: 'DOMAINES' },
    { id: 'actualites', wwfLabel: 'ACTUALITÉS' },
    { id: 'ressources', wwfLabel: 'RESSOURCES' },
    { id: 'partenariat', wwfLabel: 'PARTENARIAT' },
    { id: 'contact', wwfLabel: 'CONTACT' },
  ];

  const handleNavClick = (id: NavSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white shadow-md border-b border-neutral-200 py-2.5'
            : 'bg-white/95 backdrop-blur-md border-b border-neutral-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: OPLEH Official Logo */}
            <button
              onClick={() => handleNavClick('accueil')}
              className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded cursor-pointer"
              aria-label="OPLEH - Page d'accueil"
            >
              <OPLEHLogo size={isScrolled ? 40 : 46} light={false} />
            </button>

            {/* Zone 2: Multi-Page Navigation Links (including ACTUALITÉS) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-wwf text-sm font-extrabold tracking-wider">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer focus-visible:outline-none relative ${
                      isActive
                        ? 'text-[#E0291D]'
                        : 'text-[#0E134E] hover:text-[#E0291D]'
                    }`}
                  >
                    <span>{item.wwfLabel}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E0291D]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Search + FAIRE UN DON CTA + Mobile Menu Button) */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={onOpenSearch}
                className="p-2 text-[#0E134E] hover:text-[#E0291D] hover:bg-neutral-100 transition-colors cursor-pointer rounded"
                title="Rechercher sur le site"
                aria-label="Rechercher"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenDonate}
                className="wwf-btn-primary px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-black flex items-center gap-2 cursor-pointer shadow-sm whitespace-nowrap shrink-0"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span className="font-wwf tracking-wider">FAIRE UN DON</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center gap-1.5 px-2.5 py-2 text-[#0E134E] border border-[#0E134E]/30 font-wwf font-black text-xs uppercase cursor-pointer hover:bg-neutral-100 transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                <span className="hidden sm:inline">MENU</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#080B33]/80 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-85 max-w-[90vw] bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
                <OPLEHLogo size={38} light={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#0E134E] hover:text-[#E0291D] hover:bg-neutral-100 transition-colors cursor-pointer"
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-1 font-wwf">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left px-3 py-3 text-base font-extrabold uppercase tracking-wide flex items-center justify-between border-b border-neutral-100 cursor-pointer ${
                        isActive
                          ? 'text-[#E0291D] bg-red-50/50'
                          : 'text-[#0E134E] hover:text-[#E0291D] hover:bg-neutral-50'
                      }`}
                    >
                      <span>{item.wwfLabel}</span>
                      <ChevronRight className="w-4 h-4 text-neutral-400" />
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-neutral-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="wwf-btn-primary w-full py-3.5 text-center text-sm font-black flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>FAIRE UN DON</span>
              </button>
              <div className="text-[11px] text-center text-neutral-500 font-medium">
                Organisme de Promotion de la Lecture et de l'Écriture en Haïti
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
