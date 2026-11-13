import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/content';
import { GalleryPhoto } from '../types';
import { Maximize2, MapPin } from 'lucide-react';
import { MotionReveal, StaggerGrid, StaggerItem } from './MotionPrimitives';

interface GallerySectionProps {
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectPhoto }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'Vie scolaire', 'Citoyenneté', 'Bibliothèques', 'Formation', 'Distribution'];

  const filteredPhotos =
    filter === 'all'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((p) => p.category === filter);

  return (
    <section className="py-24 bg-neutral-950 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-4 border-b border-neutral-800">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#E0291D] font-wwf block mb-1">
              Photothèques & Reportages
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-wwf uppercase text-white tracking-tight">
              L’action OPLEH en images
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Des moments d’engagement citoyen et de lecture capturés dans les écoles partenaires en Haïti.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1 bg-neutral-900 p-1 border border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-wwf font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-[#E0291D] text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat === 'all' ? 'Toutes les photos' : cat}
              </button>
            ))}
          </div>
        </MotionReveal>

        {/* 3x2 Grid */}
        <StaggerGrid key={filter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <StaggerItem key={photo.id}>
              <div
                onClick={() => onSelectPhoto(photo)}
                className="group relative overflow-hidden bg-neutral-900 aspect-4/3 cursor-pointer border border-neutral-800 hover:border-[#E0291D] transition-all duration-300"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 right-3 w-8 h-8 bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                  <div className="flex items-center gap-2 text-[10px] text-[#E0291D] font-wwf font-black uppercase tracking-wider mb-1">
                    <span>{photo.category}</span>
                    <span aria-hidden="true" className="text-neutral-500">·</span>
                    <span className="flex items-center gap-1 text-neutral-300">
                      <MapPin className="w-3 h-3 text-[#E0291D]" />
                      <span>{photo.location}</span>
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-wwf uppercase text-white line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 mt-1">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};
