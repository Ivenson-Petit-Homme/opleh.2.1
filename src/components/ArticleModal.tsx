import React, { useEffect, useState } from 'react';
import { NewsArticle } from '../types';
import { X, Calendar, Clock, User, Share2, Check } from 'lucide-react';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setCopied(false);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#080B33]/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 border-t-4 border-t-[#E0291D] z-10 flex flex-col">
        {/* Header Photo */}
        <div className="relative h-64 sm:h-80 w-full bg-[#080B33] shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B33]/90 via-[#0E134E]/25 to-[#080B33]/30" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[#0E134E]/80 text-white hover:bg-[#E0291D] transition-colors cursor-pointer"
            aria-label="Fermer l'article"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="inline-block bg-[#E0291D] text-white text-[11px] font-wwf font-black uppercase tracking-wider px-2.5 py-0.5 mb-2">
              {article.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-wwf uppercase leading-tight">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-200 text-xs text-neutral-600 font-medium">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#E0291D]" />
                <span>{article.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E0291D]" />
                <span>{article.readTime}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#E0291D]" />
                <span>{article.author}</span>
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs text-[#E0291D] font-bold hover:underline cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Lien copié !</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Partager</span>
                </>
              )}
            </button>
          </div>

          {/* Summary deck */}
          <div className="p-4 bg-[#F5F5F5] border border-neutral-200 text-sm font-semibold text-neutral-900 leading-relaxed text-justify">
            {article.summary}
          </div>

          {/* Full content paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed text-justify">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
            <span>Source : Bulletin Officiel OPLEH · République d'Haïti</span>
            <button
              onClick={onClose}
              className="wwf-btn-dark px-5 py-2.5 text-xs font-black cursor-pointer"
            >
              Fermer la lecture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
