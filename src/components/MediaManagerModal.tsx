import React, { useState } from 'react';
import { X, Image as ImageIcon, Link as LinkIcon, Check, RefreshCw, Upload } from 'lucide-react';

interface MediaManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateHeroImage: (url: string) => void;
  currentHeroUrl: string;
}

export const MediaManagerModal: React.FC<MediaManagerModalProps> = ({
  isOpen,
  onClose,
  onUpdateHeroImage,
  currentHeroUrl,
}) => {
  const [heroInput, setHeroInput] = useState(currentHeroUrl);
  const [siteUrl, setSiteUrl] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSaveHero = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroInput) return;
    onUpdateHeroImage(heroInput);
    setStatusMessage('Photo principale mise à jour avec succès !');
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const dataUrl = event.target.result as string;
          setHeroInput(dataUrl);
          onUpdateHeroImage(dataUrl);
          setStatusMessage('Photo importée depuis votre appareil avec succès !');
          setTimeout(() => setStatusMessage(null), 3000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
            <ImageIcon className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-slate-900">
              Personnalisation des Médias OPLEH
            </h3>
            <p className="text-xs text-slate-500">
              Ajoutez ou remplacez facilement les photos et liens de l'association
            </p>
          </div>
        </div>

        {statusMessage && (
          <div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        <div className="space-y-6">
          {/* 1. Importer ou changer la photo Hero */}
          <form onSubmit={handleSaveHero} className="space-y-3">
            <label className="block text-xs font-bold uppercase text-slate-700">
              Changer la photo de la bannière principale (Hero)
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Collez ici l'URL d'une photo OPLEH..."
                value={heroInput}
                onChange={(e) => setHeroInput(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-900"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-900 text-white rounded-lg text-xs font-bold hover:bg-blue-800 transition-colors"
              >
                Appliquer
              </button>
            </div>

            {/* Direct file upload from computer/phone */}
            <div className="pt-1">
              <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5 text-blue-900" />
                <span>Ou téléversez une photo depuis votre appareil</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </form>

          {/* 2. Indiquer le lien du site / page Facebook OPLEH */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <label className="block text-xs font-bold uppercase text-slate-700">
              Lien du site web / Page Facebook de l'OPLEH
            </label>
            <p className="text-xs text-slate-500">
              Si vous avez le lien exact de la page ou du site officiel où se trouvent toutes vos photos et actualités, vous pouvez également le coller dans le chat !
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  placeholder="Ex: https://facebook.com/opleh-haiti ou lien du site..."
                  value={siteUrl}
                  onChange={(e) => setSiteUrl(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-900"
                />
              </div>
              <button
                onClick={() => {
                  if (siteUrl) {
                    window.open(siteUrl, '_blank');
                  }
                }}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Ouvrir
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
