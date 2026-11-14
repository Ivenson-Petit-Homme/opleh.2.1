import React from 'react';
import { TESTIMONIALS_DATA } from '../data/content';
import { Quote } from 'lucide-react';
import { MotionReveal, StaggerGrid, StaggerItem } from './MotionPrimitives';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F5F5] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal className="max-w-3xl mx-auto text-center mb-14 pb-4 border-b border-neutral-200">
          <span className="text-xs uppercase tracking-widest text-[#E0291D] font-bold font-wwf block mb-1">
            La Voix du Terrain
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-wwf uppercase text-neutral-900 tracking-tight leading-tight mb-2">
            Témoignages : Ils vivent l’expérience OPLEH
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Paroles d’élèves, de professeurs de lettres et de parents engagés au quotidien dans la reconquête du livre.
          </p>
        </MotionReveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <StaggerItem
              key={t.id}
              className="p-8 bg-white border border-neutral-200 border-t-4 border-t-[#E0291D] flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-[#E0291D] mb-4 opacity-80" />
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed italic mb-6 text-justify">
                  « {t.quote} »
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-200">
                <div className="w-11 h-11 bg-[#0E134E] text-white flex items-center justify-center font-wwf font-black text-base shrink-0">
                  {t.avatarText}
                </div>
                <div>
                  <div className="text-base font-bold text-[#0E134E] font-wwf uppercase">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#E0291D] font-semibold">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    {t.schoolOrOrg}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};
