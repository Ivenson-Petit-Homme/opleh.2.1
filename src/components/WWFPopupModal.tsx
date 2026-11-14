import React, { useState, useEffect } from 'react';
import { X, Heart, Sparkles, CheckCircle2, ShieldCheck, CreditCard, Smartphone, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { OPLEH_REAL_TEAM } from '../data/content';

interface WWFPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WWFPopupModal: React.FC<WWFPopupModalProps> = ({ isOpen, onClose }) => {
  const [frequency, setFrequency] = useState<'monthly' | 'once'>('monthly');
  const [amount, setAmount] = useState<number>(30);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'moncash' | 'natcash'>('card');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentAmt = customAmount ? parseFloat(customAmount) || 0 : amount;

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmt <= 0) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 },
    });
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080B33]/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-white rounded-none sm:rounded-xl max-w-2xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-neutral-200 flex flex-col md:flex-row overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-[#0E134E]/80 hover:bg-[#E0291D] text-white transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Visual Column (Style WWF France Campagne d'Urgence) */}
        <div className="md:w-5/12 bg-[#080B33] relative min-h-[200px] md:min-h-full">
          <img
            src={OPLEH_REAL_TEAM}
            alt="Équipe fondatrice OPLEH sur le terrain"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B33] via-[#0E134E]/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-block bg-[#E0291D] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 mb-1.5 font-wwf">
              Urgence Éducation Haïti
            </span>
            <h4 className="font-wwf text-xl font-bold uppercase leading-tight">
              Agissons ensemble pour la jeunesse haïtienne
            </h4>
            <p className="text-[11px] text-blue-100 mt-1 leading-snug">
              Chaque don équipe un écolier en livres et finance un club de lecture.
            </p>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between bg-white">
          {isSuccess ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-wwf text-2xl font-bold uppercase text-neutral-900 mb-2">
                Mèsi anpil ! Merci pour votre don
              </h4>
              <p className="text-xs text-neutral-600 mb-6">
                Votre soutien de <strong>{currentAmt} $ USD</strong> ({frequency === 'monthly' ? 'mensuel' : 'ponctuel'}) renforce directement les écoles de l'Artibonite, du Nord et de l'Ouest.
              </p>
              <button
                onClick={onClose}
                className="wwf-btn-primary px-6 py-2.5 text-xs font-bold w-full"
              >
                Continuer la visite du site
              </button>
            </div>
          ) : (
            <form onSubmit={handleDonate} className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E0291D]">
                  Appel à la générosité
                </span>
                <h3 className="font-wwf text-2xl font-black uppercase text-neutral-950 tracking-tight leading-none mt-0.5">
                  Je soutiens l'OPLEH
                </h3>
              </div>

              {/* Frequency Selector */}
              <div className="grid grid-cols-2 gap-1 p-1 bg-neutral-100 text-xs font-bold font-wwf uppercase">
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-2 text-center transition-colors cursor-pointer ${
                    frequency === 'monthly' ? 'bg-[#0E134E] text-white' : 'text-neutral-700 hover:text-[#0E134E]'
                  }`}
                >
                  Je donne tous les mois
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`py-2 text-center transition-colors cursor-pointer ${
                    frequency === 'once' ? 'bg-[#0E134E] text-white' : 'text-neutral-700 hover:text-[#0E134E]'
                  }`}
                >
                  Je donne une fois
                </button>
              </div>

              {/* Amount Buttons */}
              <div className="grid grid-cols-4 gap-2">
                {[15, 30, 50, 100].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmount(val);
                      setCustomAmount('');
                    }}
                    className={`py-2.5 text-center font-wwf font-black text-base border transition-all cursor-pointer ${
                      !customAmount && amount === val
                        ? 'bg-[#E0291D] text-white border-[#E0291D]'
                        : 'bg-white text-neutral-800 border-neutral-300 hover:border-[#0E134E]'
                    }`}
                  >
                    {val} $
                  </button>
                ))}
              </div>

              {/* Free Amount */}
              <input
                type="number"
                min="5"
                placeholder="Autre montant libre ($)..."
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-neutral-300 focus:outline-none focus:border-[#0E134E] font-medium"
              />

              {/* Payment methods */}
              <div>
                <span className="block text-[10px] uppercase font-bold text-neutral-500 mb-1.5 font-wwf">
                  Moyens de paiement sécurisés
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2 border text-[11px] font-bold text-center flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      paymentMethod === 'card' ? 'border-[#0E134E] bg-blue-50/50 text-[#0E134E]' : 'border-neutral-200 text-neutral-500'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Carte</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('moncash')}
                    className={`p-2 border text-[11px] font-bold text-center flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'moncash' ? 'border-[#E0291D] bg-red-50 text-[#E0291D]' : 'border-neutral-200 text-neutral-500'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5 text-[#E0291D]" />
                    <span>MonCash</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('natcash')}
                    className={`p-2 border text-[11px] font-bold text-center flex flex-col items-center justify-center gap-1 ${
                      paymentMethod === 'natcash' ? 'border-amber-600 bg-amber-50 text-amber-800' : 'border-neutral-200 text-neutral-500'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Natcash</span>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="wwf-btn-primary w-full py-3.5 text-sm font-black flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>FAIRE UN DON DE {currentAmt || 0} $ USD</span>
              </button>

              <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Paiement 100% sécurisé
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-neutral-500 hover:text-black underline cursor-pointer"
                >
                  Non merci, je continue vers le site
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
