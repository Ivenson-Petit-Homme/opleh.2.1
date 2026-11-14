import React, { useState } from 'react';
import { Heart, Mail, CheckCircle2, Phone, MapPin, ArrowUp } from 'lucide-react';
import { NavSection } from '../types';
import { OPLEHLogo } from './OPLEHLogo';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDonate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B33] text-white relative font-sans">
      {/* 1. Haut du footer: Bandeau d'engagement */}
      <div className="bg-[#0E134E] border-b border-[#1E2985] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E0291D] font-wwf block mb-1">
                Mobilisation & Information
              </span>
              <h3 className="text-2xl sm:text-4xl font-black font-wwf uppercase text-white mb-2 tracking-tight">
                Ensemble, nous sommes la solution pour l’avenir d’Haïti
              </h3>
              <p className="text-xs sm:text-sm text-blue-200/80 max-w-xl">
                Recevez chaque mois nos lettres d'information, les nouveaux guides pédagogiques et les bilans d'action sur le terrain.
              </p>
            </div>

            <div className="lg:col-span-5">
              {newsletterSuccess ? (
                <div className="flex items-center gap-2 p-3.5 bg-[#080B33] border border-emerald-500/50 text-emerald-300 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Merci pour votre inscription ! Vous recevrez notre prochain bulletin.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-blue-300/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="Votre adresse courriel..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 bg-[#080B33] border border-[#253196] text-xs text-white placeholder:text-blue-200/50 focus:outline-none focus:border-[#E0291D]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="wwf-btn-primary px-5 py-3 text-xs font-black tracking-wider whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    S'INSCRIRE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Corps du footer: Structure 4 colonnes */}
      <div className="py-16 border-b border-[#1E2985]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Colonne 1: Logo officiel & Mission + Réseaux sociaux */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white p-2.5 inline-block rounded">
                <OPLEHLogo size={46} light={false} />
              </div>

              <p className="text-xs text-blue-100/80 leading-relaxed text-justify">
                Organisme de Promotion de la Lecture et de l’Écriture en Haïti. Une organisation éducative citoyenne engagée pour doter chaque élève haïtien du pouvoir de lire, d’écrire et de penser par lui-même.
              </p>

              {/* Réseaux sociaux */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-blue-200/70 font-bold block mb-3 font-wwf">
                  Suivez notre action :
                </span>
                <div className="flex items-center gap-2.5">
                  {[
                    { label: 'Facebook', icon: 'FB', href: 'https://facebook.com' },
                    { label: 'LinkedIn', icon: 'IN', href: 'https://linkedin.com' },
                    { label: 'X (Twitter)', icon: 'X', href: 'https://x.com' },
                    { label: 'Instagram', icon: 'IG', href: 'https://instagram.com' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-[#0E134E] border border-[#253196] hover:border-[#E0291D] hover:text-[#E0291D] flex items-center justify-center text-xs font-bold text-blue-100 transition-colors"
                      title={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne 2: Navigation rapide */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#E0291D] font-bold mb-4 font-wwf">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
                <li>
                  <button
                    onClick={() => onNavigate('accueil')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('apropos')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Histoire & Origines
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('domaines')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Nos 5 Missions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('actualites')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Actualités OPLEH
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contact & Antennes
                  </button>
                </li>
              </ul>
            </div>

            {/* Colonne 3: Ressources & Action */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#E0291D] font-bold mb-4 font-wwf">
                Ressources & Engagement
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
                <li>
                  <button
                    onClick={() => onNavigate('ressources')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Bibliothèque numérique jeunesse
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('ressources')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Fiches pédagogiques pour enseignants
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('partenariat')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Devenir bénévole sur le terrain
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenDonate}
                    className="text-[#E0291D] hover:text-red-400 font-bold transition-colors text-left flex items-center gap-1 font-wwf uppercase cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 fill-[#E0291D]" />
                    <span>FAIRE UN DON EN LIGNE</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Colonne 4: Contact Haïti & Permanence */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#E0291D] font-bold mb-4 font-wwf">
                Contact Haïti
              </h4>
              <div className="space-y-2 text-xs text-neutral-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#E0291D] shrink-0 mt-0.5" />
                  <span>Siège : Port-au-Prince · Antennes : Gonaïves, Limonade, Caracol</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#E0291D] shrink-0" />
                  <span>+509 37 00 0000 / +509 48 00 0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#E0291D] shrink-0" />
                  <span>contact@opleh-haiti.org</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDonate}
                  className="wwf-btn-primary w-full py-2.5 px-4 text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>JE SOUTIENS LES ÉCOLIERS</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bas du footer */}
      <div className="py-6 bg-[#060826] text-blue-200/60 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span>© 2026 OPLEH - Organisme de Promotion de la Lecture et de l'Écriture en Haïti.</span>
            <span aria-hidden="true">·</span>
            <span>Organisation à but non lucratif</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Haïti · Caraïbes</span>
            <button
              onClick={() => onNavigate('admin')}
              className="text-[10px] font-mono tracking-widest text-[#141D6B] hover:text-blue-300 transition-colors cursor-pointer select-none"
              aria-label="ADM"
            >
              ADM
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-[#0E134E] border border-[#253196] hover:bg-[#151C66] text-blue-200 hover:text-white transition-colors cursor-pointer"
              aria-label="Retour en haut"
              title="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
