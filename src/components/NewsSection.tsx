import React from 'react';
import { NavSection, NewsArticle } from '../types';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { MotionReveal, StaggerGrid, StaggerItem } from './MotionPrimitives';

interface NewsSectionProps {
  articles: NewsArticle[];
  onSelectArticle: (article: NewsArticle) => void;
  onNavigate: (section: NavSection) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  articles,
  onSelectArticle,
  onNavigate,
}) => {
  const displayedArticles = articles.slice(0, 3);

  return (
    <section className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#E0291D] font-wwf block mb-1">
              Sur le terrain · Actualités
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-wwf uppercase text-neutral-900 tracking-tight">
              Nos dernières actions en Haïti
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('actualites')}
              className="text-xs font-wwf font-bold uppercase tracking-wider text-neutral-900 hover:text-[#E0291D] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Toutes les actualités ({articles.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </MotionReveal>

        {/* 3 WWF-style Cards Grid */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedArticles.map((article) => (
            <StaggerItem key={article.id}>
              <article
                className="bg-white border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
                onClick={() => onSelectArticle(article)}
              >
                <div>
                  {/* Photo container */}
                  <div className="relative h-56 overflow-hidden bg-[#080B33]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B33]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-xs font-wwf font-black uppercase text-white bg-[#E0291D] px-2.5 py-1">
                      {article.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{article.date}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-wwf uppercase text-neutral-900 leading-snug mb-3 group-hover:text-[#E0291D] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-4 text-justify">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Read button */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    className="wwf-btn-dark w-full py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>LIRE LE COMMUNIQUÉ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};
