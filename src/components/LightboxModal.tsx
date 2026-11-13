import React, { useEffect } from 'react';
import { GalleryPhoto } from '../types';
import { GALLERY_DATA } from '../data/content';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose, onSelectPhoto }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && photo) handleNext();
      if (e.key === 'ArrowLeft' && photo) handlePrev();
    };
    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  const currentIndex = GALLERY_DATA.findIndex((p) => p.id === photo.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % GALLERY_DATA.length;
    onSelectPhoto(GALLERY_DATA[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length;
    onSelectPhoto(GALLERY_DATA[prevIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/95 backdrop-blur-md">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
        aria-label="Fermer la vue"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white z-50 transition-colors"
        aria-label="Photo précédente"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white z-50 transition-colors"
        aria-label="Photo suivante"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[70vh] bg-black">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-auto max-h-[70vh] object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Captions */}
        <div className="mt-4 text-center max-w-2xl px-4 text-white">
          <div className="flex items-center justify-center gap-2 text-xs text-orange-400 font-semibold mb-1">
            <span>{photo.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{photo.location}</span>
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold font-heading mb-1 text-white">
            {photo.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            {photo.caption}
          </p>
          <div className="text-[11px] text-slate-500 mt-2 font-mono">
            {currentIndex + 1} / {GALLERY_DATA.length}
          </div>
        </div>
      </div>
    </div>
  );
};
