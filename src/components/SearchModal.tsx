import React, { useState, useEffect } from 'react';
import { X, Search, Newspaper, BookOpen, FileText, ArrowRight } from 'lucide-react';
import { DOMAINS_DATA, RESOURCES_DATA } from '../data/content';
import { NavSection, NewsArticle, ResourceItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: NewsArticle[];
  onNavigate: (section: NavSection) => void;
  onSelectArticle: (article: NewsArticle) => void;
  onSelectResource: (resource: ResourceItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onNavigate,
  onSelectArticle,
  onSelectResource,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchingArticles = q
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      )
    : articles.slice(0, 3);

  const matchingDomains = q
    ? DOMAINS_DATA.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q)
      )
    : DOMAINS_DATA.slice(0, 3);

  const matchingResources = q
    ? RESOURCES_DATA.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      )
    : RESOURCES_DATA.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-10 bg-[#080B33]/80 backdrop-blur-xs">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 bg-white w-full max-w-3xl shadow-2xl border border-neutral-200 border-t-4 border-t-[#E0291D] overflow-hidden">
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center gap-3 bg-[#F5F5F5]">
          <Search className="w-5 h-5 text-[#E0291D] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article, un domaine d'intervention, une fiche..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#0E134E] placeholder:text-neutral-500 focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-2 text-[#0E134E] hover:text-[#E0291D] hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="Fermer la recherche"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[70vh] overflow-y-auto p-6 space-y-6">
          {/* Articles */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-wwf font-black uppercase tracking-widest text-[#E0291D] flex items-center gap-1.5">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Actualités & Communiqués ({matchingArticles.length})</span>
              </span>
              <button
                onClick={() => {
                  onClose();
                  onNavigate('actualites');
                }}
                className="text-xs font-bold text-neutral-600 hover:text-[#E0291D] cursor-pointer"
              >
                Voir tout
              </button>
            </div>
            {matchingArticles.length === 0 ? (
              <p className="text-xs text-neutral-500">Aucun article trouvé.</p>
            ) : (
              <div className="space-y-2">
                {matchingArticles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      onClose();
                      onSelectArticle(art);
                    }}
                    className="w-full text-left p-3 border border-neutral-200 hover:border-[#0E134E] bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="text-[11px] text-[#E0291D] font-wwf font-bold uppercase">
                        {art.category} · {art.date}
                      </div>
                      <div className="text-sm font-bold text-[#0E134E] truncate">
                        {art.title}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 shrink-0" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Domains */}
          <div>
            <div className="text-xs font-wwf font-black uppercase tracking-widest text-neutral-900 flex items-center gap-1.5 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#E0291D]" />
              <span>Domaines d’intervention ({matchingDomains.length})</span>
            </div>
            {matchingDomains.length === 0 ? (
              <p className="text-xs text-neutral-500">Aucun domaine trouvé.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {matchingDomains.map((dom) => (
                  <button
                    key={dom.id}
                    onClick={() => {
                      onClose();
                      onNavigate('domaines');
                    }}
                    className="text-left p-3 border border-neutral-200 hover:border-[#E0291D] bg-[#F5F5F5] transition-colors cursor-pointer"
                  >
                    <div className="text-[10px] font-wwf font-black text-[#E0291D] uppercase">
                      Axe {dom.number}
                    </div>
                    <div className="text-xs font-bold text-neutral-900 mt-0.5">
                      {dom.title}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Resources */}
          <div>
            <div className="text-xs font-wwf font-black uppercase tracking-widest text-neutral-900 flex items-center gap-1.5 mb-3">
              <FileText className="w-3.5 h-3.5 text-[#E0291D]" />
              <span>Ressources pédagogiques ({matchingResources.length})</span>
            </div>
            {matchingResources.length === 0 ? (
              <p className="text-xs text-neutral-500">Aucune ressource trouvée.</p>
            ) : (
              <div className="space-y-2">
                {matchingResources.map((res) => (
                  <button
                    key={res.id}
                    onClick={() => {
                      onClose();
                      onSelectResource(res);
                    }}
                    className="w-full text-left p-3 border border-neutral-200 hover:border-black bg-white hover:bg-[#F5F5F5] transition-colors flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="text-[11px] text-neutral-500 font-medium">
                        {res.categoryLabel} · {res.format}
                      </div>
                      <div className="text-sm font-bold text-neutral-900 truncate">
                        {res.title}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 shrink-0" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
