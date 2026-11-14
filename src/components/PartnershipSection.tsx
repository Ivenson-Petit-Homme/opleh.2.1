import React, { useState } from 'react';
import { OPLEH_REAL_TEAM } from '../data/content';
import { NavSection } from '../types';
import { PageHero, MotionReveal } from './MotionPrimitives';
import { Heart, Sparkles, CheckCircle2, UserCheck, ShieldCheck, CreditCard, Smartphone, Building } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PartnershipSectionProps {
  onNavigate: (section: NavSection) => void;
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({ onNavigate }) => {
  // Donation State
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number>(30);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'moncash' | 'natcash' | 'bank'>('card');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorName, setDonorName] = useState('');
  const [phoneHaiti, setPhoneHaiti] = useState('');
  const [donationDone, setDonationDone] = useState(false);

  // Volunteer State
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [volunteerPhone, setVolunteerPhone] = useState('');
  const [volunteerDepartment, setVolunteerDepartment] = useState('Ouest (Port-au-Prince, Delmas, Pétion-Ville)');
  const [volunteerSkill, setVolunteerSkill] = useState('Animation de clubs de lecture');
  const [volunteerMotivation, setVolunteerMotivation] = useState('');
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  const effectiveAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  const getImpactDescription = (amt: number) => {
    if (amt < 20) {
      return `Permet de fournir 3 manuels et livres de contes neufs pour un élève du fondamental.`;
    } else if (amt < 40) {
      return `Finance un kit pédagogique complet (livres + fiches d'exercices) pour toute une classe.`;
    } else if (amt < 80) {
      return `Finance intégralement un atelier d'écriture créative de 4 séances pour 25 collégiens.`;
    } else {
      return `Permet l'aménagement d'un nouveau coin lecture équipé et la formation continue de son enseignant référent.`;
    }
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (effectiveAmount <= 0) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setDonationDone(true);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
    });
    setVolunteerSubmitted(true);
  };

  return (
    <div className="bg-white">
      <PageHero
        kicker="Agir à nos côtés · Mobilisation"
        title="Rejoignez l’Élan OPLEH"
        subtitle="Chaque contribution, qu’elle soit financière ou humaine, transforme le quotidien d’un écolier haïtien et rouvre la voie de l’excellence académique."
        image={OPLEH_REAL_TEAM}
        breadcrumbLabel="Partenariat & Dons"
        onNavigate={onNavigate}
      />

      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Module 1: FAIRE UN DON (WWF Style) */}
            <MotionReveal direction="up" className="lg:col-span-7 bg-[#F5F5F5] border border-neutral-200 border-t-4 border-t-[#E0291D] p-6 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-[#E0291D] text-white flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black font-wwf uppercase text-neutral-900">
                    Faire un Don pour l’Éducation
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Transparence garantie · Reçu de don officiel délivré
                  </p>
                </div>
              </div>

              {donationDone ? (
                <div className="p-8 text-center bg-emerald-50 border border-emerald-200">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black font-wwf uppercase text-emerald-900 mb-2">
                    Mèsi anpil ! Merci infiniment pour votre générosité.
                  </h3>
                  <p className="text-sm text-emerald-800 mb-4">
                    Votre don de <strong>{effectiveAmount} $ USD</strong> ({frequency === 'monthly' ? 'mensuel' : 'ponctuel'}) via{' '}
                    <span className="uppercase font-semibold">{paymentMethod}</span> soutient directement les enfants des écoles partenaires d'Haïti.
                  </p>
                  <div className="text-xs text-neutral-600 bg-white p-3 border border-emerald-100 max-w-md mx-auto mb-6">
                    Un email récapitulatif a été généré pour <strong>{donorEmail || 'votre adresse'}</strong>.
                  </div>
                  <button
                    onClick={() => {
                      setDonationDone(false);
                      setCustomAmount('');
                    }}
                    className="wwf-btn-dark px-6 py-2.5 text-xs font-black cursor-pointer"
                  >
                    Effectuer un autre don
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  {/* Frequency */}
                  <div>
                    <label className="block text-xs font-wwf font-bold uppercase text-neutral-800 mb-2 tracking-wider">
                      Fréquence du don
                    </label>
                    <div className="grid grid-cols-2 gap-1 p-1 bg-neutral-200">
                      <button
                        type="button"
                        onClick={() => setFrequency('monthly')}
                        className={`py-2.5 text-xs font-wwf font-black uppercase tracking-wider transition-colors cursor-pointer ${
                          frequency === 'monthly'
                            ? 'bg-[#0E134E] text-white'
                            : 'text-neutral-700 hover:text-[#0E134E]'
                        }`}
                      >
                        Don mensuel (Recommandé)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency('once')}
                        className={`py-2.5 text-xs font-wwf font-black uppercase tracking-wider transition-colors cursor-pointer ${
                          frequency === 'once'
                            ? 'bg-[#0E134E] text-white'
                            : 'text-neutral-700 hover:text-[#0E134E]'
                        }`}
                      >
                        Don ponctuel
                      </button>
                    </div>
                  </div>

                  {/* Amount Selector */}
                  <div>
                    <label className="block text-xs font-wwf font-bold uppercase text-neutral-800 mb-2 tracking-wider">
                      Choisissez le montant (USD)
                    </label>
                    <div className="grid grid-cols-4 gap-2.5 mb-3">
                      {[15, 30, 50, 100].map((amt) => {
                        const isSelected = !customAmount && selectedAmount === amt;
                        return (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => {
                              setSelectedAmount(amt);
                              setCustomAmount('');
                            }}
                            className={`py-3 px-2 text-center font-wwf font-black text-base transition-all border cursor-pointer ${
                              isSelected
                                ? 'bg-[#E0291D] text-white border-[#E0291D] shadow-sm'
                                : 'bg-white text-neutral-800 border-neutral-300 hover:border-[#0E134E]'
                            }`}
                          >
                            {amt} $
                          </button>
                        );
                      })}
                    </div>

                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-500">
                        Montant libre $
                      </span>
                      <input
                        type="number"
                        min="5"
                        step="1"
                        placeholder="Autre montant..."
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full pl-28 pr-4 py-2.5 text-xs bg-white border border-neutral-300 text-neutral-900 font-semibold focus:outline-none focus:border-[#0E134E]"
                      />
                    </div>
                  </div>

                  {/* Impact Card */}
                  <div className="p-4 bg-red-50 border border-red-200 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#E0291D] shrink-0 mt-0.5" />
                    <div className="text-xs text-neutral-900">
                      <span className="font-bold text-[#E0291D]">Impact concret de vos {effectiveAmount || 0} $ : </span>
                      <span>{getImpactDescription(effectiveAmount)}</span>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <label className="block text-xs font-wwf font-bold uppercase text-neutral-800 mb-2 tracking-wider">
                      Mode de paiement adapté
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3 border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                          paymentMethod === 'card'
                            ? 'border-[#0E134E] bg-white text-[#0E134E] font-bold'
                            : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500'
                        }`}
                      >
                        <CreditCard className="w-4 h-4 text-[#0E134E]" />
                        <span className="text-xs">Carte (Visa/MC)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('moncash')}
                        className={`p-3 border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                          paymentMethod === 'moncash'
                            ? 'border-[#E0291D] bg-red-50 text-[#E0291D] font-bold'
                            : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500'
                        }`}
                      >
                        <Smartphone className="w-4 h-4 text-[#E0291D]" />
                        <span className="text-xs">MonCash (Digicel)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('natcash')}
                        className={`p-3 border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                          paymentMethod === 'natcash'
                            ? 'border-amber-600 bg-amber-50 text-amber-800 font-bold'
                            : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500'
                        }`}
                      >
                        <Smartphone className="w-4 h-4 text-amber-600" />
                        <span className="text-xs">Natcash (Natcom)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('bank')}
                        className={`p-3 border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                          paymentMethod === 'bank'
                            ? 'border-[#0E134E] bg-blue-50 text-[#0E134E] font-bold'
                            : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500'
                        }`}
                      >
                        <Building className="w-4 h-4 text-[#0E134E]" />
                        <span className="text-xs">Virement</span>
                      </button>
                    </div>
                  </div>

                  {/* Donor Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Jean-Marie Pierre"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs bg-white border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Adresse Email pour le reçu *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="votre.email@exemple.com"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs bg-white border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black"
                      />
                    </div>

                    {(paymentMethod === 'moncash' || paymentMethod === 'natcash') && (
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                          Numéro de téléphone Haïti ({paymentMethod === 'moncash' ? 'Digicel' : 'Natcom'}) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+509 XX XX XXXX"
                          value={phoneHaiti}
                          onChange={(e) => setPhoneHaiti(e.target.value)}
                          className="w-full px-3 py-2.5 text-xs bg-white border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="wwf-btn-primary w-full py-3.5 px-6 text-sm font-black tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>CONFIRMER MON DON DE {effectiveAmount || 0} $ USD</span>
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-500 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Paiement 100% sécurisé
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Association à but non lucratif</span>
                  </div>
                </form>
              )}
            </MotionReveal>

            {/* Module 2: DEVENIR BÉNÉVOLE */}
            <MotionReveal direction="up" delay={0.12} className="lg:col-span-5 bg-[#0E134E] text-white p-6 sm:p-10 shadow-sm border border-[#1E2985] border-t-4 border-t-[#E0291D] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-[#E0291D] text-white flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black font-wwf uppercase text-white">
                      Devenir Bénévole
                    </h2>
                    <p className="text-xs text-blue-200/80">
                      Mettez votre talent au service des écoliers haïtiens
                    </p>
                  </div>
                </div>

                {volunteerSubmitted ? (
                  <div className="p-8 text-center bg-[#080B33] border border-[#1E2985]">
                    <div className="w-12 h-12 bg-[#E0291D] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black font-wwf uppercase text-white mb-2">
                      Candidature reçue !
                    </h3>
                    <p className="text-xs text-blue-100 leading-relaxed mb-4">
                      Merci {volunteerName || 'cher bénévole'} pour votre engagement citoyen. Notre équipe de coordination vous contactera très rapidement sur WhatsApp ou par courriel.
                    </p>
                    <button
                      onClick={() => setVolunteerSubmitted(false)}
                      className="text-xs text-[#E0291D] font-bold hover:underline cursor-pointer"
                    >
                      Envoyer une autre candidature
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-blue-100 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Votre nom et prénom"
                        value={volunteerName}
                        onChange={(e) => setVolunteerName(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs bg-[#080B33] border border-[#253196] text-white placeholder:text-blue-200/45 focus:outline-none focus:border-[#E0291D]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-blue-100 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="vous@email.com"
                          value={volunteerEmail}
                          onChange={(e) => setVolunteerEmail(e.target.value)}
                          className="w-full px-3 py-2.5 text-xs bg-[#080B33] border border-[#253196] text-white placeholder:text-blue-200/45 focus:outline-none focus:border-[#E0291D]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-blue-100 mb-1">
                          Téléphone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+509 ..."
                          value={volunteerPhone}
                          onChange={(e) => setVolunteerPhone(e.target.value)}
                          className="w-full px-3 py-2.5 text-xs bg-[#080B33] border border-[#253196] text-white placeholder:text-blue-200/45 focus:outline-none focus:border-[#E0291D]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-blue-100 mb-1">
                        Département / Ville de résidence *
                      </label>
                      <select
                        value={volunteerDepartment}
                        onChange={(e) => setVolunteerDepartment(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs bg-[#080B33] border border-[#253196] text-white focus:outline-none focus:border-[#E0291D]"
                      >
                        <option>Ouest (Port-au-Prince, Delmas, Pétion-Ville)</option>
                        <option>Artibonite (Gonaïves, Saint-Marc)</option>
                        <option>Nord (Cap-Haïtien, Limonade)</option>
                        <option>Nord-Est (Caracol, Fort-Liberté)</option>
                        <option>Sud-Est (Jacmel)</option>
                        <option>Sud (Les Cayes)</option>
                        <option>Centre (Hinche, Mirebalais)</option>
                        <option>Diaspora haïtienne (International)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-blue-100 mb-1">
                        Domaine d’action souhaité *
                      </label>
                      <select
                        value={volunteerSkill}
                        onChange={(e) => setVolunteerSkill(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs bg-[#080B33] border border-[#253196] text-white focus:outline-none focus:border-[#E0291D]"
                      >
                        <option>Animation de clubs de lecture & contes</option>
                        <option>Formation pédagogique des enseignants</option>
                        <option>Logistique & distribution de manuels scolaires</option>
                        <option>Communication, vidéo & réseaux sociaux</option>
                        <option>Numérisation & bibliothèque virtuelle</option>
                        <option>Organisation de concours littéraires</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-blue-100 mb-1">
                        Pourquoi souhaitez-vous vous engager avec l’OPLEH ?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Partagez vos motivations, votre parcours ou votre disponibilité..."
                        value={volunteerMotivation}
                        onChange={(e) => setVolunteerMotivation(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs bg-[#080B33] border border-[#253196] text-white placeholder:text-blue-200/45 focus:outline-none focus:border-[#E0291D] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="wwf-btn-primary w-full py-3.5 px-4 text-xs font-black tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>SOUMETTRE MA CANDIDATURE DE BÉNÉVOLE</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="pt-6 border-t border-[#1E2985] mt-6 text-[11px] text-blue-200/75">
                Chaque bénévole bénéficie d'une session d'accueil et d'un certificat d'engagement civique.
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
