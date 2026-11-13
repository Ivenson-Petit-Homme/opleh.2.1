import React, { useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { OPLEH_REAL_PRESENTING, OPLEH_REAL_TEAM } from '../data/content';
import { NavSection } from '../types';

interface HeroProps {
  onNavigate: (section: NavSection) => void;
  onOpenDonate: () => void;
  heroImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenDonate,
  heroImage,
}) => {
  const [activePhoto, setActivePhoto] = useState<'conference' | 'team'>('conference');

  const selectedImage =
    activePhoto === 'conference'
      ? heroImage || OPLEH_REAL_PRESENTING
      : OPLEH_REAL_TEAM;

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center bg-black text-white pt-24 pb-16 overflow-hidden">
      {/* Full-bleed Background Image (WWF France clean hero model) */}
      <motion.div
        key={activePhoto}
        initial={{ scale: 1.05, opacity: 0.75 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={selectedImage}
          alt="Action de terrain OPLEH en Haïti"
          className="w-full h-full object-cover object-center filter brightness-[0.72]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 text-center">
        {/* Centered WWF Headline & Editorial Lockup (No card overlaying the photo) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 flex flex-col items-center"
        >
          <div>
            <span className="inline-block bg-[#E0291D] text-white text-xs font-black uppercase tracking-widest px-3.5 py-1.5 font-wwf">
              Urgence Éducation Haïti
            </span>
          </div>

          <h1 className="font-wwf text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.95] tracking-tight drop-shadow-md text-balance max-w-4xl mx-auto">
            Raviver la passion des mots pour transformer l’avenir d’Haïti
          </h1>

          <p className="text-base sm:text-lg text-neutral-100 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow">
            L’Organisme de Promotion de la Lecture et de l’Écriture en Haïti (OPLEH) combat la crise des apprentissages. Par nos clubs de lecture, nos distributions de livres et la formation des enseignants, nous bâtissons l’autonomie de la jeunesse.
          </p>

          {/* Centered WWF Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={onOpenDonate}
              className="wwf-btn-primary px-8 py-4 text-sm font-black flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>AGIR AVEC NOUS · FAIRE UN DON</span>
            </button>

            <button
              onClick={() => onNavigate('domaines')}
              className="px-7 py-4 bg-black/55 hover:bg-black/80 border border-white/50 text-white font-wwf text-sm font-black uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>DÉCOUVRIR NOS DOMAINES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom-Center Photo Switcher */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-xs px-3 py-1.5 border border-white/15">
        <button
          onClick={() => setActivePhoto('conference')}
          className={`px-2.5 py-1 text-[11px] font-wwf font-bold uppercase tracking-wider transition-colors cursor-pointer ${
            activePhoto === 'conference' ? 'bg-[#E0291D] text-white' : 'text-neutral-300 hover:text-white'
          }`}
        >
          Conférence scolaire
        </button>
        <button
          onClick={() => setActivePhoto('team')}
          className={`px-2.5 py-1 text-[11px] font-wwf font-bold uppercase tracking-wider transition-colors cursor-pointer ${
            activePhoto === 'team' ? 'bg-[#E0291D] text-white' : 'text-neutral-300 hover:text-white'
          }`}
        >
          Équipe fondatrice
        </button>
      </div>
    </section>
  );
};
