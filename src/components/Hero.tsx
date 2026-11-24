import React, { useEffect, useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { OPLEH_REAL_HERO, OPLEH_REAL_PRESENTING, OPLEH_REAL_TEAM } from '../data/content';
import { NavSection } from '../types';

interface HeroProps {
  onNavigate: (section: NavSection) => void;
  onOpenDonate: () => void;
  heroImage?: string;
}

interface HeroSlide {
  id: 'accueil' | 'conference' | 'team';
  label: string;
  src: string;
  alt: string;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenDonate,
  heroImage,
}) => {
  const slides: HeroSlide[] = [
    {
      id: 'accueil',
      label: 'Équipe & Jeunes',
      src: heroImage || OPLEH_REAL_HERO,
      alt: 'Action de terrain OPLEH avec les jeunes en Haïti',
    },
    {
      id: 'conference',
      label: 'Conférence scolaire',
      src: OPLEH_REAL_PRESENTING,
      alt: 'Conférence scolaire et causerie éducative OPLEH',
    },
    {
      id: 'team',
      label: 'Équipe fondatrice',
      src: OPLEH_REAL_TEAM,
      alt: 'Équipe fondatrice et membres de l’OPLEH',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic slideshow cycling smoothly across all 3 photos
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative bg-[#080B33] text-white overflow-hidden pt-[68px] md:pt-24 md:pb-20 md:min-h-[88vh] flex flex-col md:flex-row md:items-center md:justify-center">
      {/* MOBILE / ANDROID VIEW: Full 100% width uncropped photo so entire body of photo shows normally */}
      <div className="block md:hidden w-full bg-[#080B33] relative">
        <div className="w-full relative overflow-hidden bg-[#080B33]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide.id}
              src={currentSlide.src}
              alt={currentSlide.alt}
              initial={{ opacity: 0.4, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.4 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#080B33] to-transparent" />
        </div>

        {/* Mobile Photo Switcher */}
        <div className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#080B33] border-b border-[#1E2985]">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-2.5 py-1 text-[10px] font-wwf font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                activeIndex === idx ? 'bg-[#E0291D] text-white' : 'text-neutral-300 hover:text-white'
              }`}
            >
              {slide.label}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW: Full-bleed Background Slideshow (WWF France clean hero model) */}
      <div className="hidden md:block absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide.id}
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.src}
              alt={currentSlide.alt}
              className="w-full h-full object-cover object-[center_25%] filter brightness-[0.72]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B33]/90 via-[#0E134E]/45 to-[#080B33]/35 pointer-events-none" />
      </div>

      {/* Headline & Editorial Lockup */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 sm:space-y-6 flex flex-col items-center"
        >
          <div>
            <span className="inline-block bg-[#E0291D] text-white text-xs font-black uppercase tracking-widest px-3.5 py-1.5 font-wwf">
              LIRE, ÉCRIRE, S'ÉPANOUIR
            </span>
          </div>

          <h1 className="font-wwf text-3xl sm:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.95] tracking-tight drop-shadow-md text-balance max-w-4xl mx-auto">
            Raviver la passion des mots pour transformer l’avenir d’Haïti
          </h1>

          <p className="text-sm sm:text-lg text-neutral-100 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow">
            L’Organisme de Promotion de la Lecture et de l’Écriture en Haïti (OPLEH) combat la crise des apprentissages. Par nos clubs de lecture, nos distributions de livres et la formation des enseignants, nous bâtissons l’autonomie de la jeunesse.
          </p>

          {/* Centered Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-3">
            <button
              onClick={onOpenDonate}
              className="wwf-btn-primary px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>AGIR AVEC NOUS · FAIRE UN DON</span>
            </button>

            <button
              onClick={() => onNavigate('domaines')}
              className="px-6 sm:px-7 py-3.5 sm:py-4 bg-[#0E134E]/75 hover:bg-[#080B33] border border-white/50 text-white font-wwf text-xs sm:text-sm font-black uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>DÉCOUVRIR NOS DOMAINES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Desktop Bottom-Center Photo Switcher */}
      <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 z-10 items-center gap-2 bg-[#080B33]/80 backdrop-blur-xs px-3 py-1.5 border border-white/15">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setActiveIndex(idx)}
            className={`px-2.5 py-1 text-[11px] font-wwf font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
              activeIndex === idx ? 'bg-[#E0291D] text-white' : 'text-neutral-300 hover:text-white'
            }`}
          >
            {slide.label}
          </button>
        ))}
      </div>
    </section>
  );
};
