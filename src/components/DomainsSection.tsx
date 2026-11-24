import React, { useState } from 'react';
import { DOMAINS_DATA, OPLEH_REAL_PRESENTING } from '../data/content';
import { NavSection } from '../types';
import { PageHero, MotionReveal, StaggerGrid, StaggerItem } from './MotionPrimitives';
import { BookOpen, GraduationCap, Laptop, Library, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DomainsSectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenDonate: () => void;
}

export const DomainsSection: React.FC<DomainsSectionProps> = ({ onNavigate, onOpenDonate }) => {
  const [selectedId, setSelectedId] = useState<string>(DOMAINS_DATA[0].id);

  const iconsMap: Record<string, React.FC<{ className?: string }>> = {
    BookOpen,
    GraduationCap,
    Laptop,
    Library,
    Sparkles,
    ShieldCheck,
  };

  const activeDomain = DOMAINS_DATA.find((d) => d.id === selectedId) || DOMAINS_DATA[0];
  const ActiveIcon = iconsMap[activeDomain.iconName] || BookOpen;

  return (
    <div className="bg-white">
      <PageHero
        kicker="Axes d’Action Stratégique"
        title="Nos 5 Domaines d’Intervention"
        subtitle="OPLEH fait choix de cinq domaines complémentaires visant à bâtir une génération de jeunes Haïtiens autonomes intellectuellement, capables de réfléchir, d’innover et de s’exprimer clairement."
        image={OPLEH_REAL_PRESENTING}
        breadcrumbLabel="Domaines d’intervention"
        onNavigate={onNavigate}
      />

      {/* Interactive Domain Explorer */}
      <section className="py-20 bg-[#F5F5F5] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-3xl mx-auto text-center mb-10">
            <div className="text-xs uppercase tracking-widest text-[#E0291D] font-bold mb-2 font-wwf">
              Exploration Interactive
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-wwf uppercase text-[#0E134E] tracking-tight leading-tight">
              Sélectionnez un axe pour explorer nos actions
            </h2>
          </MotionReveal>

          {/* Interactive Domain Navigation Tabs (5 domains) */}
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {DOMAINS_DATA.map((domain) => {
              const isSelected = domain.id === selectedId;
              const Icon = iconsMap[domain.iconName] || BookOpen;
              return (
                <StaggerItem key={domain.id}>
                  <button
                    onClick={() => setSelectedId(domain.id)}
                    className={`w-full h-full p-4 text-left transition-all border flex flex-col justify-between cursor-pointer focus-visible:outline-none ${
                      isSelected
                        ? 'bg-[#E0291D] text-white border-[#E0291D] shadow-lg'
                        : 'bg-white text-[#0E134E] border-neutral-200 hover:border-[#0E134E]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3 w-full">
                      <div
                        className={`w-8 h-8 flex items-center justify-center ${
                          isSelected ? 'bg-[#0E134E] text-white' : 'bg-[#F5F5F5] text-[#E0291D]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-xs font-wwf font-black ${
                          isSelected ? 'text-white/90' : 'text-neutral-400'
                        }`}
                      >
                        {domain.number}
                      </span>
                    </div>
                    <div className="font-bold text-xs sm:text-sm font-wwf uppercase line-clamp-2 leading-snug tracking-wide">
                      {domain.title}
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerGrid>

          {/* Detailed Domain Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-neutral-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left / Info Column */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 bg-[#E0291D] text-white flex items-center justify-center shrink-0">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-wwf font-bold text-[#E0291D] uppercase tracking-widest">
                        Axe d'intervention {activeDomain.number}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black font-wwf uppercase text-[#0E134E]">
                        {activeDomain.title}
                      </h3>
                    </div>
                  </div>

                  <div className="text-sm font-bold text-[#0E134E] mb-4 pb-3 border-b border-neutral-200">
                    {activeDomain.summary}
                  </div>

                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 text-justify">
                    {activeDomain.description}
                  </p>

                  {/* Action Levers */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs uppercase tracking-wider font-black font-wwf text-[#0E134E]">
                      Leviers d’action concrets :
                    </div>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeDomain.levers.map((lever, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 p-3 bg-[#F5F5F5] border border-neutral-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#E0291D] shrink-0 mt-0.5" />
                          <span>{lever}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-neutral-500">
                    Vous souhaitez parrainer ce programme éducatif ?
                  </span>
                  <button
                    onClick={onOpenDonate}
                    className="wwf-btn-primary px-6 py-3 text-xs font-black flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>SOUTENIR CET AXE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right / Visual Column - 100% full uncropped photo */}
              <div className="lg:col-span-5 bg-[#080B33] flex flex-col justify-between">
                <div className="w-full flex-1 flex items-center justify-center bg-[#080B33] overflow-hidden">
                  <img
                    src={activeDomain.image}
                    alt={activeDomain.title}
                    className="w-full h-auto block"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 bg-[#0E134E] border-t-4 border-[#E0291D] text-white">
                  <div className="text-xs font-wwf font-black text-[#E0291D] uppercase tracking-wider mb-1">
                    OPLEH sur le terrain
                  </div>
                  <div className="text-lg font-wwf font-bold uppercase">
                    Impact direct dans les écoles haïtiennes
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Complete Overview Grid of all 5 Domains */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-[#E0291D] font-bold mb-2 font-wwf">
              Vue d’Ensemble · Architecture Complète
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-wwf uppercase text-[#0E134E] tracking-tight">
              Les 5 piliers de transformation éducative
            </h2>
          </MotionReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {DOMAINS_DATA.map((domain) => {
              const Icon = iconsMap[domain.iconName] || BookOpen;
              const isSelected = domain.id === selectedId;
              return (
                <StaggerItem key={domain.id}>
                  <div
                    onClick={() => {
                      setSelectedId(domain.id);
                      window.scrollTo({ top: 320, behavior: 'smooth' });
                    }}
                    className={`border transition-all cursor-pointer flex flex-col justify-between h-full group ${
                      isSelected
                        ? 'border-[#E0291D] bg-[#F5F5F5] shadow-md'
                        : 'border-neutral-200 bg-white hover:border-[#0E134E] hover:shadow-lg'
                    }`}
                  >
                    <div>
                      <div className="relative w-full overflow-hidden bg-[#080B33]">
                        <img
                          src={domain.image}
                          alt={domain.title}
                          className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-[#E0291D] text-white font-wwf font-black text-xs px-2.5 py-1 uppercase shadow-sm">
                          Axe {domain.number}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2 text-[#E0291D]">
                          <Icon className="w-4 h-4" />
                          <span className="text-[11px] font-wwf font-bold uppercase tracking-wider text-neutral-500">
                            Programme OPLEH
                          </span>
                        </div>
                        <h3 className="text-xl font-black font-wwf uppercase text-[#0E134E] mb-2 group-hover:text-[#E0291D] transition-colors">
                          {domain.title}
                        </h3>
                        <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 text-justify">
                          {domain.description}
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-2">
                      <span className="text-xs font-wwf font-black uppercase tracking-wider text-[#0E134E] group-hover:text-[#E0291D] inline-flex items-center gap-1.5">
                        <span>Explorer cet axe</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>
    </div>
  );
};
