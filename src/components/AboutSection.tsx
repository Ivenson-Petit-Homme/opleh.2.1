import React from 'react';
import { OBJECTIVES_DATA, VALUES_DATA, OPLEH_FOUNDERS_IMAGE, OPLEH_REAL_PRESENTING } from '../data/content';
import { NavSection } from '../types';
import { PageHero, MotionReveal, StaggerGrid, StaggerItem } from './MotionPrimitives';
import { Target, Compass, BookOpen, Users, Shield, HeartHandshake, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (section: NavSection) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const objectiveIcons = [BookOpen, Users, Target, Sparkles];
  const valueIcons = [Shield, HeartHandshake, Users, Compass, Lightbulb];

  return (
    <div className="bg-white">
      <PageHero
        kicker="À Propos de l’Organisation"
        title="Comprendre notre engagement pour la jeunesse haïtienne"
        subtitle="L’Organisme de Promotion de la Lecture et de l’Écriture en Haïti (OPLEH) est né du sursaut d’éducateurs convaincus que la maîtrise de la langue écrite est le premier levier de l’émancipation civique et sociale."
        image={OPLEH_REAL_PRESENTING}
        breadcrumbLabel="À propos"
        onNavigate={onNavigate}
      />

      {/* 1. Notre Histoire (Editorial Layout) */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <MotionReveal direction="up" className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed text-base text-justify">
              <div className="text-left">
                <div className="text-xs uppercase tracking-widest text-[#E0291D] font-bold mb-2 font-wwf">
                  Origines & Constat Fondateur
                </div>
                <h2 className="text-3xl sm:text-5xl font-black font-wwf uppercase text-neutral-900 pb-4 border-b border-neutral-200 tracking-tight">
                  Notre Histoire
                </h2>
              </div>

              <p className="first-letter:text-5xl first-letter:font-black first-letter:font-wwf first-letter:text-[#E0291D] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                OPLEH est née d’un constat alarmant partagé par plusieurs jeunes enseignants engagés dans l’enseignement secondaire en Haïti : la performance académique des élèves est en déclin constant. Les élèves peinent à comprendre les textes, à structurer leur pensée ou à produire une réflexion personnelle. L’école, jadis lieu d’éveil intellectuel, ne parvient plus à stimuler la curiosité et la créativité.
              </p>
              <p>
                Cette situation se reflète dans les résultats du baccalauréat, particulièrement faibles au cours des sept dernières années. D’année en année, les taux de réussite stagnent ou chutent, révélant une crise profonde du système éducatif et un manque criant de maîtrise des compétences de base, notamment la lecture et l’écriture.
              </p>
              <p>
                Dans ce contexte, les réseaux sociaux prennent une place démesurée dans le quotidien des jeunes, devenant leur principale source de distraction. Faute de programmes littéraires adaptés et motivants, les élèves se détournent naturellement des livres et des activités intellectuelles, laissant un vide que les écrans remplissent trop facilement.
              </p>
              <p>
                La situation ne s’améliore guère à l’université. Les étudiants abandonnent souvent leur spécialité, faute d’orientation initiale et de fondations solides. Les débats sont rares, la pensée critique s’efface, et l’espace universitaire perd peu à peu sa vocation de formation citoyenne et intellectuelle.
              </p>

              <div className="p-6 bg-[#F5F5F5] border-t-4 border-[#E0291D] text-neutral-900 font-medium">
                C’est face à cette série de constats que nous avons décidé de créer <strong>OPLEH – Organisme de Promotion de la Lecture et de l’Écriture en Haïti</strong>. Notre ambition : redonner goût à la lecture, développer l’esprit critique des jeunes, et contribuer à l’émergence d’une nouvelle génération d’écrivains et de penseurs engagés. Par des actions concrètes dans les écoles, OPLEH entend raviver la passion pour les mots et faire de la lecture un outil de transformation sociale durable.
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={0.12} className="lg:col-span-5">
              <div className="overflow-hidden shadow-xl border border-neutral-200 bg-[#080B33]">
                <img
                  src={OPLEH_FOUNDERS_IMAGE}
                  alt="Équipe Dirigeante & Fondateurs de l'OPLEH en Haïti"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
                <div className="p-7 bg-[#0E134E] text-white border-t-4 border-[#E0291D]">
                  <div className="text-xs uppercase tracking-widest text-[#E0291D] font-black font-wwf mb-1">
                    Équipe Dirigeante & Fondateurs
                  </div>
                  <h3 className="text-2xl font-black font-wwf uppercase mb-3 tracking-tight">
                    Une initiative née des salles de classe
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-5 text-justify">
                    « Nous ne pouvions pas rester spectateurs face au découragement de nos élèves devant une feuille blanche. L’écriture est le pouvoir de dire le monde, de repenser la citoyenneté et de le réparer. »
                  </p>
                  <button
                    onClick={() => onNavigate('domaines')}
                    className="wwf-btn-primary px-5 py-2.5 text-xs font-black inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>VOIR NOS DOMAINES D'ACTION</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 2. Mission et Vision */}
      <section className="py-20 bg-[#F5F5F5] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="mb-12 text-center max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-[#E0291D] font-bold mb-2 font-wwf">
              Cap Stratégique
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-wwf uppercase text-neutral-900 tracking-tight">
              Notre Mission & Notre Vision
            </h2>
          </MotionReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="p-8 sm:p-10 bg-[#0E134E] text-white border-t-4 border-[#E0291D] shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#E0291D] text-white flex items-center justify-center mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#E0291D] font-wwf font-bold mb-1">
                    Notre Raison d'Être
                  </div>
                  <h3 className="text-3xl font-black font-wwf uppercase mb-4 tracking-tight">
                    Notre Mission
                  </h3>
                  <p className="text-blue-100 text-base leading-relaxed text-justify">
                    Développer et améliorer les capacités de lecture des élèves haïtiens en leur fournissant des ressources adaptées et tout le soutien nécessaire pour réussir leur parcours scolaire et personnel.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#1E2985] text-xs text-blue-200/80">
                  Action directe dans les écoles primaires, secondaires et espaces communautaires.
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 sm:p-10 bg-white text-[#0E134E] border border-neutral-200 border-t-4 border-t-[#0E134E] shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#0E134E] text-white flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6 text-[#E0291D]" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500 font-wwf font-bold mb-1">
                    Notre Horizon d'Impact
                  </div>
                  <h3 className="text-3xl font-black font-wwf uppercase mb-4 tracking-tight text-[#0E134E]">
                    Notre Vision
                  </h3>
                  <p className="text-neutral-700 text-base leading-relaxed text-justify">
                    Favoriser l’autonomie intellectuelle et l’esprit critique des jeunes, afin qu’ils puissent pleinement s’épanouir sur le plan intellectuel et se faire une place dans la littérature haïtienne tout en contribuant activement au développement de leur communauté à travers leur action et œuvre littéraire.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-500">
                  Faire émerger une génération d’auteurs, de chercheurs et de citoyens conscients.
                </div>
              </div>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* 3. Nos Objectifs */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-[#E0291D] font-bold mb-2 font-wwf">
              Lignes Directrices
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-wwf uppercase text-neutral-900 tracking-tight">
              Nos 4 Objectifs Stratégiques
            </h2>
          </MotionReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OBJECTIVES_DATA.map((obj, i) => {
              const Icon = objectiveIcons[i % objectiveIcons.length];
              return (
                <StaggerItem key={obj.num}>
                  <div className="p-6 sm:p-8 bg-[#F5F5F5] border border-neutral-200 hover:border-[#0E134E] transition-colors flex gap-5 items-start h-full">
                    <div className="w-12 h-12 bg-[#0E134E] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#E0291D]" />
                    </div>
                    <div>
                      <div className="text-xs font-wwf font-black uppercase tracking-widest text-[#E0291D] mb-1">
                        Objectif {obj.num}
                      </div>
                      <h3 className="text-xl font-black font-wwf uppercase text-[#0E134E] mb-2">
                        {obj.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed text-justify">
                        {obj.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* 4. Nos Valeurs */}
      <section className="py-20 bg-[#080B33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-[#E0291D] font-bold mb-2 font-wwf">
              Éthique & Principes
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-wwf uppercase text-white tracking-tight">
              Nos 5 Valeurs Fondamentales
            </h2>
          </MotionReveal>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {VALUES_DATA.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <StaggerItem key={val.num}>
                  <div className="p-6 bg-[#0E134E] border border-[#1E2985] hover:border-[#E0291D] transition-all flex flex-col justify-between h-full">
                    <div>
                      <div className="w-10 h-10 bg-[#E0291D] text-white flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-[11px] font-wwf font-bold uppercase tracking-widest text-blue-200/70 mb-1">
                        Valeur {val.num}
                      </div>
                      <h3 className="text-lg font-black font-wwf uppercase text-white mb-2">
                        {val.title}
                      </h3>
                      <p className="text-xs text-blue-100/85 leading-relaxed text-justify">
                        {val.desc}
                      </p>
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
