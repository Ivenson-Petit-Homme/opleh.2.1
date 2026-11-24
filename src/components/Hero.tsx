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
  caption: string;
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
      caption: 'Rencontres littéraires et accompagnement direct des écoliers',
      src: heroImage || OPLEH_REAL_HERO,
      alt: 'Action de terrain OPLEH avec les jeunes en Haïti',
    },
    {
      id: 'conference',
      label: 'Conférence scolaire',
      caption: 'Causeries éducatives et ateliers d’écriture dans les écoles',
      src: OPLEH_REAL_PRESENTING,
      alt: 'Conférence scolaire et causerie éducative OPLEH',
    },
    {
      id: 'team',
      label: 'Équipe fondatrice',
      caption: 'Des éducateurs et lecteurs mobilisés pour la jeunesse haïtienne',
      src: OPLEH_REAL_TEAM,
      alt: 'Équipe fondatrice et membres de l’OPLEH',
    },
  ];

  const [slideState, setSlideState] = useState<{ active: number; prev: number }>({
    active: 0,
    prev: 0,
  });

  const selectSlide = (nextIdx: number) => {
    setSlideState((current) => {
      if (current.active === nextIdx) return current;
      return { active: nextIdx, prev: current.active };
    });
  };

  // Automatic slideshow cycling smoothly across all 3 photos
  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideState((current) => ({
        active: (current.active + 1) % slides.length,
        prev: current.active,
      }));
    }, 4800);
    return () => window.clearInterval(interval);
  }, [slides.length]);

  const { active, prev } = slideState;
  const currentSlide = slides[active];

  const renderSlideLayers = (isDesktop: boolean) =>
    slides.map((slide, idx) => {
      const isCurrent = idx === active;
      const isPrev = idx === prev && prev !== active;

      return (
        <motion.div
          key={`${isDesktop ? 'd' : 'm'}-${slide.id}`}
          initial={false}
          animate={
            isCurrent
              ? { opacity: 1, scale: [1.04, 1] }
              : isPrev
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 1.04 }
          }
          transition={
            isCurrent
              ? {
                  opacity: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 4.8, ease: 'easeOut' },
                }
              : { duration: 0 }
          }
          style={{ zIndex: isCurrent ? 2 : isPrev ? 1 : 0 }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src={slide.src}
            alt={slide.alt}
            loading="eager"
            decoding="sync"
            className={`w-full h-full object-cover ${
              isDesktop
                ? 'object-[center_22%] filter brightness-[0.72]'
                : 'object-center'
            }`}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      );
    });

  return (
    <section className="relative bg-[#080B33] text-white overflow-hidden pt-[68px] lg:pt-24 lg:pb-20 lg:min-h-[84vh] flex flex-col lg:flex-row lg:items-center lg:justify-center">
      {/* MOBILE & TABLET VIEW (< lg): Full 100% width 3:2 container with zero cropped edges or blank flash */}
      <div className="block lg:hidden w-full bg-[#080B33] relative">
        <div className="w-full aspect-[3/2] relative overflow-hidden bg-[#080B33]">
          {renderSlideLayers(false)}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 z-[3] bg-gradient-to-t from-[#080B33] to-transparent" />
        </div>

        {/* Mobile/Tablet Photo Switcher */}
        <div className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#080B33] border-b border-[#1E2985]">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => selectSlide(idx)}
              className={`px-2.5 py-1 text-[10px] font-wwf font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                active === idx ? 'bg-[#E0291D] text-white' : 'text-neutral-300 hover:text-white'
              }`}
            >
              {slide.label}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW (lg+): Full-bleed Seamless Ken Burns Slideshow */}
      <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden bg-[#080B33]">
        {renderSlideLayers(true)}
        <div className="absolute inset-0 z-[3] bg-gradient-to-t from-[#080B33]/90 via-[#0E134E]/45 to-[#080B33]/35 pointer-events-none" />
      </div>

      {/* Animated Editorial Text & Action Lockup */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-10 text-center">
        <div className="space-y-5 sm:space-y-6 flex flex-col items-center">
          {/* Animated Kicker Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            <span className="inline-block bg-[#E0291D] text-white text-xs font-black uppercase tracking-widest px-3.5 py-1.5 font-wwf shadow-md">
              LIRE, ÉCRIRE, S'ÉPANOUIR
            </span>
          </motion.div>

          {/* Animated Staggered Main Headline */}
          <h1 className="font-wwf text-3xl sm:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.95] tracking-tight drop-shadow-md text-balance max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Raviver la passion des mots
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="block text-white"
            >
              pour transformer l’avenir d’Haïti
            </motion.span>
          </h1>

          {/* Animated Slide-Synced Highlight Caption */}
          <div className="min-h-[28px] overflow-hidden flex items-center justify-center px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-wwf font-bold uppercase tracking-widest text-red-300"
              >
                {currentSlide.label} · {currentSlide.caption}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Animated Editorial Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-lg text-neutral-100 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow"
          >
            L’Organisme de Promotion de la Lecture et de l’Écriture en Haïti (OPLEH) combat la crise des apprentissages. Par nos clubs de lecture, nos distributions de livres et la formation des enseignants, nous bâtissons l’autonomie de la jeunesse.
          </motion.p>

          {/* Animated Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-3"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenDonate}
              className="wwf-btn-primary px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>AGIR AVEC NOUS · FAIRE UN DON</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('domaines')}
              className="px-6 sm:px-7 py-3.5 sm:py-4 bg-[#0E134E]/75 hover:bg-[#080B33] border border-white/50 text-white font-wwf text-xs sm:text-sm font-black uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>DÉCOUVRIR NOS DOMAINES</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Desktop Bottom-Center Photo Switcher */}
      <div className="hidden lg:flex absolute bottom-5 left-1/2 -translate-x-1/2 z-10 items-center gap-2 bg-[#080B33]/80 backdrop-blur-xs px-3 py-1.5 border border-white/15">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => selectSlide(idx)}
            className={`px-2.5 py-1 text-[11px] font-wwf font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
              active === idx ? 'bg-[#E0291D] text-white' : 'text-neutral-300 hover:text-white'
            }`}
          >
            {slide.label}
          </button>
        ))}
      </div>
    </section>
  );
};
