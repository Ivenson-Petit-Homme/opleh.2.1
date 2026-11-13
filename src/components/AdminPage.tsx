import React, { useState } from 'react';
import { NavSection, NewsArticle } from '../types';
import {
  OPLEH_REAL_PRESENTING,
  OPLEH_REAL_TEAM,
  LIBRARY_IMAGE,
  WORKSHOP_IMAGE,
  DISTRIBUTION_IMAGE,
  DIGITAL_IMAGE,
} from '../data/content';
import { PageHero, MotionReveal, StaggerGrid, StaggerItem } from './MotionPrimitives';
import {
  Lock,
  LogOut,
  Plus,
  Trash2,
  Edit3,
  Eye,
  Upload,
  CheckCircle2,
  RotateCcw,
  FileText,
  Calendar,
  Image as ImageIcon,
  ShieldCheck,
} from 'lucide-react';

interface AdminPageProps {
  articles: NewsArticle[];
  onAddArticle: (article: NewsArticle) => void;
  onUpdateArticle: (article: NewsArticle) => void;
  onDeleteArticle: (id: string) => void;
  onResetArticles: () => void;
  onPreviewArticle: (article: NewsArticle) => void;
  onNavigate: (section: NavSection) => void;
}

const ADMIN_PASSCODE = 'OPLEH2026';

const PRESET_IMAGES = [
  { label: 'Conférence OPLEH (Photo réelle)', url: OPLEH_REAL_PRESENTING },
  { label: 'Équipe fondatrice OPLEH (Photo réelle)', url: OPLEH_REAL_TEAM },
  { label: 'Club de lecture en bibliothèque', url: LIBRARY_IMAGE },
  { label: 'Atelier pédagogique enseignants', url: WORKSHOP_IMAGE },
  { label: 'Distribution de livres scolaires', url: DISTRIBUTION_IMAGE },
  { label: 'Bibliothèque numérique jeunes', url: DIGITAL_IMAGE },
];

export const AdminPage: React.FC<AdminPageProps> = ({
  articles,
  onAddArticle,
  onUpdateArticle,
  onDeleteArticle,
  onResetArticles,
  onPreviewArticle,
  onNavigate,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => sessionStorage.getItem('opleh_admin_auth') === 'true'
  );
  const [passcodeInput, setPasscodeInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Form State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Actualité Terrain');
  const [date, setDate] = useState(
    new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  );
  const [readTime, setReadTime] = useState('3 min de lecture');
  const [author, setAuthor] = useState('Direction de la Rédaction OPLEH');
  const [summary, setSummary] = useState('');
  const [contentText, setContentText] = useState('');
  const [image, setImage] = useState(OPLEH_REAL_PRESENTING);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcodeInput.trim().toUpperCase() === ADMIN_PASSCODE) {
      sessionStorage.setItem('opleh_admin_auth', 'true');
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Code d’accès incorrect.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('opleh_admin_auth');
    setIsAuthenticated(false);
    setPasscodeInput('');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (typeof ev.target?.result === 'string') {
        setImage(ev.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setCategory('Actualité Terrain');
    setDate(
      new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    );
    setReadTime('3 min de lecture');
    setAuthor('Direction de la Rédaction OPLEH');
    setSummary('');
    setContentText('');
    setImage(OPLEH_REAL_PRESENTING);
  };

  const handleEditClick = (art: NewsArticle) => {
    setEditingId(art.id);
    setTitle(art.title);
    setCategory(art.category);
    setDate(art.date);
    setReadTime(art.readTime);
    setAuthor(art.author);
    setSummary(art.summary);
    setContentText(art.content.join('\n\n'));
    setImage(art.image);
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  const handlePublishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const paragraphs = contentText
      .split(/\n+/)
      .map((p) => p.trim())
      .filter(Boolean);

    const payload: NewsArticle = {
      id: editingId || `article-${Date.now()}`,
      title: title.trim(),
      category: category.trim(),
      date: date.trim(),
      readTime: readTime.trim(),
      author: author.trim(),
      summary: summary.trim(),
      content: paragraphs.length > 0 ? paragraphs : [summary.trim()],
      image: image.trim() || OPLEH_REAL_PRESENTING,
    };

    if (editingId) {
      onUpdateArticle(payload);
      setFeedback(`L'article « ${payload.title} » a été mis à jour et publié sur le site.`);
    } else {
      onAddArticle(payload);
      setFeedback(`Nouvel article « ${payload.title} » publié avec succès sur Accueil et Actualités !`);
    }

    resetForm();
    setTimeout(() => setFeedback(null), 5000);
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <PageHero
        kicker="Console Éditoriale · Administration"
        title="Espace Admin · Publication d'Articles"
        subtitle="Publiez vos nouvelles actualités, communiqués WhatsApp, photos de terrain et annonces officielles de l'OPLEH en temps réel."
        image={OPLEH_REAL_TEAM}
        breadcrumbLabel="Administration"
        onNavigate={onNavigate}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isAuthenticated ? (
            /* Admin Login Gate */
            <MotionReveal className="max-w-md mx-auto bg-white border border-neutral-200 border-t-4 border-t-[#E0291D] p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-black text-white flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#E0291D]" />
                </div>
                <div>
                  <h2 className="font-wwf text-2xl font-black uppercase text-neutral-900">
                    Connexion Administrateur
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Accès réservé aux responsables de publication OPLEH
                  </p>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-wwf">
                    Code d’accès Éditeur *
                  </label>
                  <input
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={passcodeInput}
                    onChange={(e) => setPasscodeInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:border-black"
                  />
                </div>

                {authError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                    {authError}
                  </div>
                )}

                <button
                  type="submit"
                  className="wwf-btn-primary w-full py-3.5 text-sm font-black tracking-wider cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>ACCÉDER AU TABLEAU DE BORD</span>
                </button>
              </form>
            </MotionReveal>
          ) : (
            /* Authenticated Admin Workspace */
            <div className="space-y-10">
              {/* Top Bar Stats + Logout */}
              <MotionReveal className="bg-white border border-neutral-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-neutral-400 block">
                      Articles publiés
                    </span>
                    <span className="font-wwf text-3xl font-black text-neutral-900 tabular-nums">
                      {articles.length}
                    </span>
                  </div>
                  <div className="h-8 w-px bg-neutral-200 hidden sm:block" />
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-neutral-400 block">
                      Statut de synchronisation
                    </span>
                    <span className="text-xs font-bold text-emerald-700">
                      Publication directe sur Accueil & Actualités
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigate('actualites')}
                    className="px-4 py-2 border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-wwf font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Voir la page Actualités
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-wwf font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Déconnexion</span>
                  </button>
                </div>
              </MotionReveal>

              {feedback && (
                <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feedback}</span>
                </div>
              )}

              {/* Main 2-Column Workspace: Editor + Live Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Article Form */}
                <MotionReveal className="lg:col-span-7 bg-white border border-neutral-200 border-t-4 border-t-[#E0291D] p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                    <div className="flex items-center gap-2.5">
                      <Plus className="w-5 h-5 text-[#E0291D]" />
                      <h2 className="font-wwf text-2xl font-black uppercase text-neutral-900">
                        {editingId ? 'Modifier l’article' : 'Publier un nouvel article'}
                      </h2>
                    </div>
                    {editingId && (
                      <button
                        type="button"
                        onClick={resetForm}
                        className="text-xs font-bold text-neutral-500 hover:text-black underline cursor-pointer"
                      >
                        Annuler la modification
                      </button>
                    )}
                  </div>

                  <form onSubmit={handlePublishSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-wwf">
                        Titre de l’article / Annonce *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Remise de 500 livres à l'École Nationale des Gonaïves"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-wwf">
                          Catégorie *
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full px-3 py-2.5 text-xs border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:border-black"
                        >
                          <option>Actualité Terrain</option>
                          <option>Célébration & Littérature</option>
                          <option>Citoyenneté & Dialogue</option>
                          <option>Grand Nord & Éducation</option>
                          <option>Formation Enseignants</option>
                          <option>Communiqué Officiel</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-wwf">
                          Date de publication *
                        </label>
                        <input
                          type="text"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-3 py-2.5 text-xs border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-wwf">
                          Temps de lecture
                        </label>
                        <input
                          type="text"
                          value={readTime}
                          onChange={(e) => setReadTime(e.target.value)}
                          className="w-full px-3 py-2.5 text-xs border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-wwf">
                        Auteur / Pôle émetteur *
                      </label>
                      <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-wwf">
                        Résumé court (affiché sur la carte) *
                      </label>
                      <textarea
                        rows={2}
                        required
                        placeholder="Résumez l'annonce en 1 ou 2 phrases percutantes..."
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5 font-wwf">
                        Contenu complet de l’article (séparez les paragraphes par une ligne vide) *
                      </label>
                      <textarea
                        rows={6}
                        required
                        placeholder="Rédigez ou collez ici votre texte (ex: publication WhatsApp ou communiqué officiel)..."
                        value={contentText}
                        onChange={(e) => setContentText(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 text-neutral-900 focus:outline-none focus:border-black"
                      />
                    </div>

                    {/* Image Selector / Upload */}
                    <div className="p-4 bg-[#F7F7F7] border border-neutral-200 space-y-3">
                      <label className="block text-xs font-bold uppercase text-neutral-800 font-wwf">
                        Photo de couverture de l’article
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <select
                          value={
                            PRESET_IMAGES.some((p) => p.url === image) ? image : ''
                          }
                          onChange={(e) => {
                            if (e.target.value) setImage(e.target.value);
                          }}
                          className="px-3 py-2 text-xs border border-neutral-300 bg-white text-neutral-800 focus:outline-none focus:border-black"
                        >
                          <option value="">-- Choisir une photo OPLEH --</option>
                          {PRESET_IMAGES.map((p) => (
                            <option key={p.url} value={p.url}>
                              {p.label}
                            </option>
                          ))}
                        </select>

                        <label className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-white border border-neutral-300 hover:border-black text-neutral-800 text-xs font-bold cursor-pointer transition-colors">
                          <Upload className="w-3.5 h-3.5 text-[#E0291D]" />
                          <span>Importer depuis ordinateur / USB</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>

                      <input
                        type="text"
                        placeholder="Ou collez le lien URL d'une image..."
                        value={image.startsWith('data:') ? '' : image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-neutral-300 bg-white text-neutral-800 focus:outline-none focus:border-black"
                      />
                    </div>

                    <button
                      type="submit"
                      className="wwf-btn-primary w-full py-3.5 px-6 text-sm font-black tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FileText className="w-4 h-4" />
                      <span>
                        {editingId
                          ? 'ENREGISTRER LES MODIFICATIONS'
                          : 'PUBLIER L’ARTICLE SUR LE SITE'}
                      </span>
                    </button>
                  </form>
                </MotionReveal>

                {/* Right: Live WWF Card Preview */}
                <MotionReveal delay={0.1} className="lg:col-span-5 space-y-6">
                  <div className="bg-white border border-neutral-200 p-6">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
                      <span className="text-xs font-wwf font-black uppercase tracking-wider text-[#E0291D] flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4" />
                        <span>Aperçu en direct (Style WWF)</span>
                      </span>
                    </div>

                    <article className="bg-white border border-neutral-200 overflow-hidden">
                      <div className="relative h-52 bg-neutral-900 overflow-hidden">
                        <img
                          src={image || OPLEH_REAL_PRESENTING}
                          alt="Aperçu"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-3 left-3 text-xs font-wwf font-black uppercase text-white bg-[#E0291D] px-2.5 py-1">
                          {category || 'Catégorie'}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-2">
                          <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{date}</span>
                          <span aria-hidden="true">·</span>
                          <span>{readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold font-wwf uppercase text-neutral-900 leading-snug mb-2">
                          {title || 'Titre de votre publication OPLEH'}
                        </h3>
                        <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                          {summary ||
                            'Votre résumé apparaîtra ici sous forme de carte éditoriale moderne.'}
                        </p>
                      </div>
                    </article>
                  </div>
                </MotionReveal>
              </div>

              {/* Published Articles Management List */}
              <MotionReveal className="bg-white border border-neutral-200 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-200">
                  <div>
                    <h3 className="font-wwf text-2xl font-black uppercase text-neutral-900">
                      Articles actuellement publiés ({articles.length})
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Modifiez, prévisualisez ou supprimez vos publications à tout moment.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={onResetArticles}
                    className="inline-flex items-center gap-1.5 px-3 py-2 border border-neutral-300 text-xs font-bold text-neutral-600 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Réinitialiser les articles par défaut</span>
                  </button>
                </div>

                <StaggerGrid className="space-y-4">
                  {articles.map((art) => (
                    <StaggerItem
                      key={art.id}
                      className="p-4 border border-neutral-200 hover:border-neutral-400 bg-[#FAFAFA] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-24 h-16 object-cover bg-neutral-200 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-500 font-medium mb-1">
                            <span className="font-wwf font-bold uppercase text-[#E0291D]">
                              {art.category}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{art.date}</span>
                            <span aria-hidden="true">·</span>
                            <span>{art.author}</span>
                          </div>
                          <h4 className="font-wwf text-lg font-bold uppercase text-neutral-900 leading-snug">
                            {art.title}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => onPreviewArticle(art)}
                          className="px-3 py-2 bg-white border border-neutral-300 hover:border-black text-neutral-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                          title="Lire l'article"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Voir</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleEditClick(art)}
                          className="px-3 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                          title="Modifier"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Modifier</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => onDeleteArticle(art.id)}
                          className="px-3 py-2 bg-red-50 hover:bg-[#E0291D] text-[#E0291D] hover:text-white border border-red-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                          title="Supprimer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Supprimer</span>
                        </button>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
              </MotionReveal>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
