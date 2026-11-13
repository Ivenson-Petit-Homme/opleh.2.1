import React from 'react';
import { STATS_DATA } from '../data/content';
import { Activity } from 'lucide-react';
import { AnimatedCounter, MotionReveal, StaggerGrid, StaggerItem } from './MotionPrimitives';

export const StatsBanner: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 border-y border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-800 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#E0291D] font-wwf block mb-1">
              Impact Réel en Haïti
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-wwf uppercase text-white tracking-tight">
              L’OPLEH en chiffres
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Données évolutives de terrain · 2025–2026</span>
          </div>
        </MotionReveal>

        <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS_DATA.map((item, index) => (
            <StaggerItem
              key={index}
              className="p-6 bg-neutral-900 border-t-2 border-[#E0291D] hover:bg-neutral-800 transition-colors text-center"
            >
              <div className="text-4xl sm:text-6xl font-black font-wwf text-white mb-1 tracking-tight">
                <AnimatedCounter
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              </div>
              <div className="text-sm font-bold uppercase font-wwf text-neutral-200 tracking-wider mb-1">
                {item.label}
              </div>
              <p className="text-xs text-neutral-400">{item.note}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};
