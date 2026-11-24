import React, { useState } from 'react';
import { OPLEH_REAL_PRESENTING } from '../data/content';
import { NavSection } from '../types';
import { PageHero, MotionReveal } from './MotionPrimitives';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Share2 } from 'lucide-react';

interface ContactSectionProps {
  onNavigate: (section: NavSection) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState("Demande d'information générale");
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socialLinks = [
    { label: 'Facebook', code: 'FB', handle: '@espacedev.haiti', href: 'https://www.facebook.com/espacedev.haiti' },
    {
      label: 'LinkedIn',
      code: 'IN',
      handle: 'OPLEH Haïti',
      href: 'https://www.linkedin.com/company/organisme-de-promotion-de-la-lecture-et-de-l-ecriture-en-haïti-opleh/?viewAsMember=true',
    },
    { label: 'X (Twitter)', code: 'X', handle: '@hople_haiti', href: 'https://x.com/hople_haiti' },
    { label: 'Instagram', code: 'IG', handle: '@hople_haiti', href: 'https://www.instagram.com/hople_haiti/' },
  ];

  return (
    <div className="bg-white">
      <PageHero
        kicker="Contact & Permanence · Haïti"
        title="Contactez l’Équipe de l’OPLEH"
        subtitle="Vous représentez un établissement scolaire, une association, une institution culturelle ou un média ? Écrivez-nous, nos équipes vous répondront avec grand plaisir."
        image={OPLEH_REAL_PRESENTING}
        breadcrumbLabel="Contact"
        onNavigate={onNavigate}
      />

      <section className="py-20 bg-[#F5F5F5] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Column */}
            <MotionReveal direction="up" className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 bg-white border border-neutral-200 border-t-4 border-t-[#E0291D] shadow-xs">
                <h2 className="text-2xl font-black font-wwf uppercase text-neutral-900 mb-6">
                  Coordonnées Officielles
                </h2>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0E134E] text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#E0291D]" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">
                        Coordination nationale & Antennes régionales
                      </div>
                      <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                        189, rue Christophe, Gonaïves (Artibonite) · P4N, Village EKAM, Caracol (Nord-Est), Haïti
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E0291D] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Téléphone & WhatsApp</div>
                      <a
                        href="https://wa.me/50933777089"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#E0291D] font-bold hover:underline block mt-0.5"
                      >
                        +509 33777089 / +509 31690811
                      </a>
                      <span className="text-[11px] text-neutral-500">
                        Permanence du lundi au vendredi, 8h00 - 16h00
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-neutral-100 text-neutral-900 border border-neutral-300 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Courriel officiel</div>
                      <a
                        href="mailto:contact@opleh.org"
                        className="text-xs text-[#E0291D] font-bold hover:underline block mt-0.5"
                      >
                        contact@opleh.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-neutral-100 text-neutral-900 border border-neutral-300 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Délai de réponse</div>
                      <p className="text-xs text-neutral-600 mt-0.5">
                        Sous 24 à 48 heures ouvrables
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stylized Social Links on Contact Page */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <div className="flex items-center gap-2 text-xs font-wwf font-black uppercase tracking-wider text-neutral-900 mb-3">
                    <Share2 className="w-3.5 h-3.5 text-[#E0291D]" />
                    <span>Réseaux Sociaux Officiels</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 p-2.5 bg-[#F5F5F5] border border-neutral-200 hover:border-[#E0291D] hover:bg-red-50/40 transition-colors group"
                      >
                        <span className="w-7 h-7 bg-[#0E134E] group-hover:bg-[#E0291D] text-white text-[11px] font-wwf font-black flex items-center justify-center transition-colors">
                          {s.code}
                        </span>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-[#0E134E] truncate">{s.label}</div>
                          <div className="text-[10px] text-neutral-500 truncate">{s.handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Community Note */}
              <div className="p-6 bg-[#0E134E] text-white border-t-4 border-[#E0291D]">
                <div className="flex items-center gap-2 text-xs font-wwf font-bold uppercase tracking-wider text-[#E0291D] mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Réseau d'écoles partenaires</span>
                </div>
                <h3 className="font-black font-wwf uppercase text-xl mb-2">
                  Votre école souhaite rejoindre le réseau OPLEH ?
                </h3>
                <p className="text-xs text-blue-100/85 leading-relaxed text-justify">
                  Précisez le nom de votre établissement, votre localité et le nombre approximatif d'élèves concernés dans le formulaire ci-contre.
                </p>
              </div>
            </MotionReveal>

            {/* Form Column */}
            <MotionReveal direction="up" delay={0.12} className="lg:col-span-7 bg-white p-6 sm:p-10 border border-neutral-200 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black font-wwf uppercase text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                Envoyez-nous un Message
              </h2>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 border border-emerald-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h3 className="text-2xl font-black font-wwf uppercase text-emerald-900 mb-2">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-xs text-emerald-800 leading-relaxed mb-6">
                    Merci {name || 'cher correspondant'}. Notre secrétariat général a bien reçu votre demande et vous répondra à <strong>{email}</strong> dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="wwf-btn-dark px-5 py-2.5 font-bold text-xs cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Votre nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Daphnée Célestin"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F5] border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                        Votre adresse email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nom@exemple.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F5] border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                      Objet de votre démarche *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F5] border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black"
                    >
                      <option>Demande d'information générale</option>
                      <option>Inscription d'une école partenaire</option>
                      <option>Proposition de partenariat ou don de livres</option>
                      <option>Presse & Médias</option>
                      <option>Candidature bénévole / Enseignant formateur</option>
                      <option>Autre sujet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                      Votre message *
                    </label>
                    <textarea
                      rows={6}
                      required
                      placeholder="Écrivez votre message ici..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F5] border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="wwf-btn-primary w-full py-3.5 px-6 text-xs font-black tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMETTRE LE MESSAGE</span>
                  </button>
                </form>
              )}
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
