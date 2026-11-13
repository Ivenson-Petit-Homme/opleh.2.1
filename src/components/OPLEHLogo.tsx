import React from 'react';

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
        src="/public/assets/aistudio/image_50f9f44f.png"
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
