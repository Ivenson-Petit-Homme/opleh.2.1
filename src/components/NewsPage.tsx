import React, { useState } from 'react';
import { NavSection, NewsArticle } from '../types';
import { HERO_IMAGE } from '../data/content';
import { PageHero, MotionReveal, StaggerGrid, StaggerItem } from './MotionPrimitives';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';

interface NewsPageProps {
  articles: NewsArticle[];
  onSelectArticle: (article: NewsArticle) => void;
  onNavigate: (section: NavSection) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({
  articles,
  onSelectArticle,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...Array.from(new Set(articles.map((a) => a.category)))];

  const filtered = articles.filter((a) => {
    const matchesCat = selectedCategory === 'all' || a.category === selectedCategory;
    const matchesQuery =
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const leadArticle = filtered[0];
  const secondaryArticles = filtered.slice(1);

  return (
    <div className="bg-white">
      <PageHero
        kicker="Actualités & Communiqués"
        title="Toutes les nouvelles de l'OPLEH"
        subtitle="Retrouvez nos reportages sur le terrain, annonces officielles, lancements de clubs littéraires et mobilisations citoyennes en Haïti."
        image={HERO_IMAGE}
        breadcrumbLabel="Actualités"
        onNavigate={onNavigate}
      />

      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toolbar */}
          <MotionReveal className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 mb-10 border-b border-neutral-200">
            <div className="flex flex-wrap items-center gap-1.5 bg-[#F5F5F5] p-1.5 border border-neutral-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-wwf font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#E0291D] text-white'
                      : 'text-neutral-700 hover:text-black hover:bg-neutral-200/70'
                  }`}
                >
                  {cat === 'all' ? 'Toutes les publications' : cat}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher un article..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-[#F5F5F5] border border-neutral-300 text-neutral-900 focus:outline-none focus:border-[#0E134E]"
                />
              </div>
            </div>
          </MotionReveal>

          {filtered.length === 0 ? (
            <div className="p-16 text-center bg-[#F5F5F5] border border-neutral-200">
              <p className="text-sm font-bold text-neutral-700">
                Aucun article ne correspond à votre recherche.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="mt-3 text-xs font-bold text-[#E0291D] underline cursor-pointer"
              >
                Afficher tous les articles
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {/* WWF Lead Story Feature Card */}
              {leadArticle && (
                <MotionReveal>
                  <article
                    onClick={() => onSelectArticle(leadArticle)}
                    className="grid grid-cols-1 lg:grid-cols-12 border border-neutral-200 bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                  >
                    <div className="lg:col-span-7 relative w-full aspect-[3/2] lg:aspect-auto lg:min-h-[420px] bg-[#080B33] overflow-hidden">
                      <img
                        src={leadArticle.image}
                        alt={leadArticle.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-[#E0291D] text-white font-wwf font-black uppercase text-xs px-3 py-1">
                        À la une · {leadArticle.category}
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#F7F7F7]">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#E0291D]" />
                            <span>{leadArticle.date}</span>
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{leadArticle.readTime}</span>
                          </span>
                        </div>

                        <h2 className="font-wwf text-2xl sm:text-4xl font-black uppercase text-neutral-900 leading-tight mb-4 group-hover:text-[#E0291D] transition-colors">
                          {leadArticle.title}
                        </h2>

                        <p className="text-sm text-neutral-600 leading-relaxed mb-6 text-justify">
                          {leadArticle.summary}
                        </p>
                      </div>

                      <div>
                        <div className="text-xs text-neutral-500 mb-4">
                          Par <strong className="text-neutral-800">{leadArticle.author}</strong>
                        </div>
                        <button
                          type="button"
                          className="wwf-btn-dark w-full py-3 px-5 text-xs font-black flex items-center justify-center gap-2"
                        >
                          <span>LIRE L'ARTICLE COMPLET</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                </MotionReveal>
              )}

              {/* Secondary Grid */}
              {secondaryArticles.length > 0 && (
                <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {secondaryArticles.map((article) => (
                    <StaggerItem key={article.id}>
                      <article
                        onClick={() => onSelectArticle(article)}
                        className="bg-white border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
                      >
                        <div>
                          <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#080B33]">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute bottom-3 left-3 text-xs font-wwf font-black uppercase text-white bg-[#E0291D] px-2.5 py-1">
                              {article.category}
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-3">
                              <span>{article.date}</span>
                              <span aria-hidden="true">·</span>
                              <span>{article.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold font-wwf uppercase text-neutral-900 leading-snug mb-3 group-hover:text-[#E0291D] transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3 text-justify">
                              {article.summary}
                            </p>
                          </div>
                        </div>
                        <div className="px-6 pb-6 pt-2">
                          <button
                            type="button"
                            className="wwf-btn-dark w-full py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-2"
                          >
                            <span>LIRE LE COMMUNIQUÉ</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </article>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
