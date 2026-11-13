import React from 'react';
import { OPLEH_REAL_LOGO } from '../data/content';

interface OPLEHLogoProps {
  className?: string;
  size?: number; // Height in pixels
  light?: boolean;
}

export const OPLEHLogo: React.FC<OPLEHLogoProps> = ({
  className = '',
  size = 46,
  light = false,
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={OPLEH_REAL_LOGO}
        alt="OPLEH - Organisme de Promotion de la Lecture et de l'Écriture en Haïti"
        style={{ height: `${size}px`, width: 'auto' }}
        className={`object-contain transition-all duration-200 ${
          light ? 'filter brightness-0 invert drop-shadow-md' : 'drop-shadow-xs'
        }`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
