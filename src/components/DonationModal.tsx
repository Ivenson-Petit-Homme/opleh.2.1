import React, { useState, useEffect } from 'react';
import { X, Heart, Sparkles, CheckCircle2, ShieldCheck, CreditCard, Smartphone, Building } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [amount, setAmount] = useState<number>(30);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [method, setMethod] = useState<'card' | 'moncash' | 'natcash' | 'bank'>('card');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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

  const getImpact = (val: number) => {
    if (val < 20) return 'Finance 3 livres de lecture pour une bibliothèque de classe.';
    if (val < 40) return 'Finance un kit didactique complet de lecture pour 15 écoliers.';
    if (val < 80) return 'Finance un atelier d\'écriture de 4 séances pour une classe entière.';
    return 'Finance l\'équipement d\'un nouveau coin lecture et la formation de l\'enseignant.';
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmt <= 0) return;

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.5 },
    });
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 z-10 p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center">
            <Heart className="w-5 h-5 fill-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-slate-900">
              Soutenir l’action OPLEH
            </h3>
            <p className="text-xs text-slate-500">
              Chaque don change l’avenir d’un élève haïtien
            </p>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-6 text-center rounded-xl bg-emerald-50 border border-emerald-200">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold font-heading text-emerald-900 mb-2">
              Merci pour votre générosité !
            </h4>
            <p className="text-xs text-emerald-800 mb-4 leading-relaxed">
              Votre don de <strong>{currentAmt} $ USD</strong> ({frequency === 'monthly' ? 'mensuel' : 'ponctuel'}) via{' '}
              <span className="uppercase font-semibold">{method}</span> a été enregistré avec succès.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          <form onSubmit={handleDonate} className="space-y-5">
            {/* Frequency */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
              <button
                type="button"
                onClick={() => setFrequency('once')}
                className={`py-2 rounded-md transition-colors ${
                  frequency === 'once' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Don ponctuel
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2 rounded-md transition-colors ${
                  frequency === 'monthly' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Don mensuel
              </button>
            </div>

            {/* Amount Selection */}
            <div>
              <div className="grid grid-cols-4 gap-2 mb-2">
                {[15, 30, 50, 100].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmount(val);
                      setCustomAmount('');
                    }}
                    className={`py-2.5 rounded-lg text-xs font-bold border transition-colors ${
                      !customAmount && amount === val
                        ? 'bg-blue-900 text-white border-blue-900'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {val} $
                  </button>
                ))}
              </div>
              <input
                type="number"
                min="5"
                placeholder="Autre montant libre (USD)..."
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-900"
              />
            </div>

            {/* Impact feedback */}
            <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-xs text-orange-950 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
              <span>{getImpact(currentAmt)}</span>
            </div>

            {/* Methods */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setMethod('card')}
                className={`p-2 rounded-lg border text-xs text-center flex flex-col items-center justify-center gap-1 ${
                  method === 'card' ? 'border-blue-900 bg-blue-50 text-blue-900 font-bold' : 'border-slate-200 text-slate-600'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Carte</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod('moncash')}
                className={`p-2 rounded-lg border text-xs text-center flex flex-col items-center justify-center gap-1 ${
                  method === 'moncash' ? 'border-red-600 bg-red-50 text-red-700 font-bold' : 'border-slate-200 text-slate-600'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>MonCash</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod('natcash')}
                className={`p-2 rounded-lg border text-xs text-center flex flex-col items-center justify-center gap-1 ${
                  method === 'natcash' ? 'border-yellow-600 bg-yellow-50 text-yellow-800 font-bold' : 'border-slate-200 text-slate-600'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Natcash</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod('bank')}
                className={`p-2 rounded-lg border text-xs text-center flex flex-col items-center justify-center gap-1 ${
                  method === 'bank' ? 'border-slate-800 bg-slate-100 text-slate-900 font-bold' : 'border-slate-200 text-slate-600'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>Virement</span>
              </button>
            </div>

            {/* Inputs */}
            <div className="space-y-2">
              <input
                type="text"
                required
                placeholder="Votre nom complet"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-900"
              />
              <input
                type="email"
                required
                placeholder="Votre adresse courriel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-900"
              />
              {(method === 'moncash' || method === 'natcash') && (
                <input
                  type="tel"
                  required
                  placeholder="Numéro Haïti (+509...)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-900"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donner {currentAmt || 0} $ USD</span>
            </button>

            <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sécurisé · Reçu fiscal délivré</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
