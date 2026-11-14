import React, { useState } from 'react';
import { RESOURCES_DATA, OPLEH_REAL_TEAM } from '../data/content';
import { NavSection, ResourceItem } from '../types';
import { PageHero, MotionReveal, StaggerGrid, StaggerItem } from './MotionPrimitives';
import { FileText, Download, Eye, Search, BookOpen, PenTool, FileSpreadsheet, Smartphone, Check } from 'lucide-react';

interface ResourcesSectionProps {
  onSelectResource: (resource: ResourceItem) => void;
  onNavigate: (section: NavSection) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  onSelectResource,
  onNavigate,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'lecture' | 'ecriture' | 'fiches' | 'numerique'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Toutes les ressources', icon: FileText },
    { id: 'lecture', label: 'Lecture', icon: BookOpen },
    { id: 'ecriture', label: 'Écriture', icon: PenTool },
    { id: 'fiches', label: 'Fiches pédagogiques', icon: FileSpreadsheet },
    { id: 'numerique', label: 'Bibliothèque numérique', icon: Smartphone },
  ];

  const filteredResources = RESOURCES_DATA.filter((res) => {
    const matchesFilter = activeFilter === 'all' || res.category === activeFilter;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleDownload = (res: ResourceItem) => {
    setDownloadSuccessId(res.id);
    setTimeout(() => {
      setDownloadSuccessId(null);
    }, 2500);

    const element = document.createElement('a');
    const file = new Blob(
      [
        `============================================================\n` +
        `ORGANISME DE PROMOTION DE LA LECTURE ET DE L'ÉCRITURE EN HAÏTI (OPLEH)\n` +
        `Document officiel de formation et de pédagogie\n` +
        `============================================================\n\n` +
        `Titre : ${res.title}\n` +
        `Format : ${res.format} (${res.size}) - ${res.pages} pages\n` +
        `Public cible : ${res.targetAudience}\n` +
        `Catégorie : ${res.categoryLabel}\n\n` +
        `--- RÉSUMÉ DU DOCUMENT ---\n${res.description}\n\n` +
        `--- EXTRAIT DU GUIDE / FICHE ---\n${res.sampleExcerpt}\n\n` +
        `© 2026 OPLEH - Tous droits réservés. contact@opleh-haiti.org\n`,
      ],
      { type: 'text/plain;charset=utf-8' }
    );
    element.href = URL.createObjectURL(file);
    element.download = `OPLEH_${res.id}_guide.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="bg-white">
      <PageHero
        kicker="Centre de Documentation & Outils Pédagogiques"
        title="Ressources Didactiques et Littéraires"
        subtitle="Consultez et téléchargez gratuitement nos guides d’ateliers, anthologies de littérature haïtienne et fiches d’exercices conçus pour les enseignants et les élèves."
        image={OPLEH_REAL_TEAM}
        breadcrumbLabel="Ressources"
        onNavigate={onNavigate}
      />

      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter and Search Bar */}
          <MotionReveal className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 mb-10 border-b border-neutral-200">
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F5F5F5] border border-neutral-200">
              {filterTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id as any)}
                    className={`flex items-center gap-2 px-3.5 py-2 text-xs font-wwf font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#E0291D] text-white'
                        : 'text-neutral-700 hover:text-black hover:bg-neutral-200/70'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une fiche, un auteur..."
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-[#F5F5F5] border border-neutral-300 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#0E134E]"
              />
            </div>
          </MotionReveal>

          {/* Resources Grid */}
          {filteredResources.length === 0 ? (
            <div className="p-12 text-center bg-[#F5F5F5] border border-neutral-200 text-neutral-600">
              <FileText className="w-8 h-8 mx-auto text-neutral-400 mb-2" />
              <p className="text-sm font-semibold">Aucun document ne correspond à votre recherche.</p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs text-[#E0291D] font-bold hover:underline cursor-pointer"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((res) => {
                const isDownloaded = downloadSuccessId === res.id;
                return (
                  <StaggerItem key={res.id}>
                    <div className="p-6 bg-white border border-neutral-200 hover:border-[#0E134E] hover:shadow-lg transition-all flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-3">
                          <span className="text-[#E0291D] font-wwf font-black uppercase tracking-wider">
                            {res.categoryLabel}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{res.format}</span>
                          <span aria-hidden="true">·</span>
                          <span>{res.size}</span>
                          <span aria-hidden="true">·</span>
                          <span>{res.pages} p.</span>
                        </div>

                        <h3 className="text-xl font-black font-wwf uppercase text-[#0E134E] mb-2 line-clamp-2 leading-snug">
                          {res.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-4 text-justify">
                          {res.description}
                        </p>

                        <div className="text-[11px] text-neutral-600 bg-[#F5F5F5] border border-neutral-200 p-3 mb-6">
                          <span className="font-bold text-[#0E134E]">Public :</span> {res.targetAudience}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-neutral-200 flex items-center justify-between gap-3">
                        <button
                          onClick={() => onSelectResource(res)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#F5F5F5] hover:bg-neutral-200 text-[#0E134E] font-wwf uppercase tracking-wider font-black text-xs transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Consulter</span>
                        </button>

                        <button
                          onClick={() => handleDownload(res)}
                          className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 font-wwf uppercase tracking-wider font-black text-xs transition-colors cursor-pointer ${
                            isDownloaded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-[#0E134E] text-white hover:bg-[#E0291D]'
                          }`}
                        >
                          {isDownloaded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Téléchargé</span>
                            </>
                          ) : (
                            <>
                              <Download className="w-3.5 h-3.5" />
                              <span>Télécharger</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGrid>
          )}
        </div>
      </section>
    </div>
  );
};
