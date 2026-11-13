import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { NavSection } from '../types';

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const offset =
    direction === 'up'
      ? { y: 24, x: 0 }
      : direction === 'down'
      ? { y: -24, x: 0 }
      : direction === 'left'
      ? { x: 24, y: 0 }
      : direction === 'right'
      ? { x: -24, y: 0 }
      : { x: 0, y: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerGrid: React.FC<StaggerGridProps> = ({
  children,
  className = '',
  staggerDelay = 0.08,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    const rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue.toLocaleString('fr-FR')}
      {suffix}
    </span>
  );
};

interface PageHeroProps {
  kicker: string;
  title: string;
  subtitle: string;
  image: string;
  breadcrumbLabel: string;
  onNavigate: (section: NavSection) => void;
}

export const PageHero: React.FC<PageHeroProps> = ({
  kicker,
  title,
  subtitle,
  image,
  breadcrumbLabel,
  onNavigate,
}) => {
  return (
    <section className="relative min-h-[380px] sm:min-h-[430px] flex items-end bg-black text-white pt-28 pb-14 overflow-hidden">
      {/* Background visual with smooth zoom entrance */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-[0.65]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Fil d'Ariane"
          className="flex items-center gap-2 text-xs text-neutral-300 font-medium mb-4"
        >
          <button
            onClick={() => onNavigate('accueil')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Accueil
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#E0291D]" />
          <span className="text-white font-semibold">{breadcrumbLabel}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-block bg-[#E0291D] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 font-wwf mb-3">
            {kicker}
          </span>
          <h1 className="font-wwf text-4xl sm:text-6xl font-black uppercase text-white leading-[0.96] tracking-tight mb-4 text-balance">
            {title}
          </h1>
          <p className="text-sm sm:text-lg text-neutral-200 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
