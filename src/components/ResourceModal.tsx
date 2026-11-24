import React, { useEffect, useState } from 'react';
import { ResourceItem } from '../types';
import { X, Download, BookOpen, Check, FileText, Share2, Printer } from 'lucide-react';

interface ResourceModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ resource, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (resource) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [resource, onClose]);

  if (!resource) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);

    const element = document.createElement('a');
    const file = new Blob(
      [
        `============================================================\n` +
        `OPLEH - RESSOURCE PÉDAGOGIQUE OFFICIELLE\n` +
        `============================================================\n\n` +
        `Titre : ${resource.title}\n` +
        `Catégorie : ${resource.categoryLabel}\n` +
        `Format : ${resource.format} (${resource.size}) - ${resource.pages} pages\n` +
        `Public cible : ${resource.targetAudience}\n\n` +
        `--- DESCRIPTION ---\n${resource.description}\n\n` +
        `--- EXTRAIT ET PLAN DU DOCUMENT ---\n${resource.sampleExcerpt}\n\n` +
        `© 2026 Organisation pour la Promotion de la Lecture et de l'Écriture en Haïti (OPLEH)\n` +
        `contact@opleh.org | www.opleh.org\n`
      ],
      { type: 'text/plain;charset=utf-8' }
    );
    element.href = URL.createObjectURL(file);
    element.download = `OPLEH_${resource.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="fixed inset-0 bg-[#080B33]/80 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 border-t-4 border-t-[#E0291D] z-10 flex flex-col">
        {/* Top Header */}
        <div className="p-6 bg-[#0E134E] text-white flex items-start justify-between gap-4 sticky top-0 z-20 border-b border-[#1E2985]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E0291D] flex items-center justify-center text-white shrink-0">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-[#E0291D] font-wwf font-bold">
                {resource.categoryLabel} · {resource.format}
              </div>
              <h2 className="text-lg sm:text-xl font-black font-wwf uppercase text-white line-clamp-1">
                {resource.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata pill strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Format</span>
              <span className="font-bold text-slate-800">{resource.format}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Pagination</span>
              <span className="font-bold text-slate-800">{resource.pages} pages</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Taille</span>
              <span className="font-bold text-slate-800">{resource.size}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Licence</span>
              <span className="font-bold text-emerald-700">Libre / Éducative</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
              Présentation pédagogique
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {resource.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
              Public cible recommandé
            </h4>
            <div className="p-3 rounded-lg bg-blue-50 text-blue-900 text-xs font-semibold">
              {resource.targetAudience}
            </div>
          </div>

          {/* Sample excerpt box styled like editorial book paper */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900">
                Aperçu et extraits du document :
              </h4>
              <span className="text-[11px] text-slate-400">Extrait authentique</span>
            </div>
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 font-mono text-xs leading-relaxed whitespace-pre-wrap select-all">
              {resource.sampleExcerpt}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimer l'extrait</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-semibold"
              >
                Fermer
              </button>
              <button
                onClick={handleDownload}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white transition-colors cursor-pointer ${
                  downloaded ? 'bg-emerald-600' : 'bg-orange-600 hover:bg-orange-500'
                }`}
              >
                {downloaded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Téléchargé !</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Télécharger le guide complet</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
