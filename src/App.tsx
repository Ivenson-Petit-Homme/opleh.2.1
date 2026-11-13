/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { AboutSection } from './components/AboutSection';
import { DomainsSection } from './components/DomainsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { NewsSection } from './components/NewsSection';
import { NewsPage } from './components/NewsPage';
import { AdminPage } from './components/AdminPage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { PartnershipSection } from './components/PartnershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { ResourceModal } from './components/ResourceModal';
import { LightboxModal } from './components/LightboxModal';
import { WWFPopupModal } from './components/WWFPopupModal';
import { SearchModal } from './components/SearchModal';
import { MotionReveal } from './components/MotionPrimitives';
import { HERO_IMAGE, NEWS_DATA } from './data/content';
import { GalleryPhoto, NavSection, NewsArticle, ResourceItem } from './types';
import { BookOpen, Sparkles, Heart, ArrowRight } from 'lucide-react';

const ARTICLES_STORAGE_KEY = 'opleh_articles_v1';
const VALID_PAGES: NavSection[] = [
  'accueil',
  'apropos',
  'domaines',
  'ressources',
  'partenariat',
  'contact',
  'actualites',
  'admin',
];

function getInitialPageFromHash(): NavSection {
  const hash = window.location.hash.replace('#', '') as NavSection;
  return VALID_PAGES.includes(hash) ? hash : 'accueil';
}

function loadStoredArticles(): NewsArticle[] {
  try {
    const raw = localStorage.getItem(ARTICLES_STORAGE_KEY);
    if (!raw) return NEWS_DATA;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return NEWS_DATA;
  } catch {
    return NEWS_DATA;
  }
}

export default function App() {
  const [activePage, setActivePage] = useState<NavSection>(getInitialPageFromHash);
  const [articles, setArticles] = useState<NewsArticle[]>(loadStoredArticles);
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [activeResource, setActiveResource] = useState<ResourceItem | null>(null);
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync articles to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(articles));
    } catch {
      // Ignore storage quota errors cleanly
    }
  }, [articles]);

  // WWF France Style Automatic Engagement Popup
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem('wwf_popup_seen');
      if (!hasSeen) {
        setIsDonateOpen(true);
        sessionStorage.setItem('wwf_popup_seen', 'true');
      }
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Browser Back / Forward hash sync
  useEffect(() => {
    const handleHashChange = () => {
      const next = getInitialPageFromHash();
      setActivePage(next);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = useCallback((section: NavSection) => {
    setActivePage(section);
    if (window.location.hash !== `#${section}`) {
      window.location.hash = section;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Article CRUD handlers for AdminPage
  const handleAddArticle = (article: NewsArticle) => {
    setArticles((prev) => [article, ...prev]);
  };

  const handleUpdateArticle = (updated: NewsArticle) => {
    setArticles((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
  };

  const handleDeleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const handleResetArticles = () => {
    setArticles(NEWS_DATA);
    try {
      localStorage.removeItem(ARTICLES_STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-neutral-800 antialiased font-sans">
        {/* Fixed Header */}
        <Header
          activeSection={activePage}
          onNavigate={handleNavigate}
          onOpenDonate={() => setIsDonateOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            {activePage === 'accueil' && (
              <motion.div
                key="accueil"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <Hero
                  onNavigate={handleNavigate}
                  onOpenDonate={() => setIsDonateOpen(true)}
                  heroImage={HERO_IMAGE}
                />

                {/* Presentation Generale (WWF-Style Focal Manifesto Block) */}
                <section className="py-20 bg-white border-b border-neutral-200">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <MotionReveal>
                      <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#E0291D] font-wwf mb-4">
                        <BookOpen className="w-4 h-4" />
                        <span>Manifeste & Engagement Fondateur</span>
                      </div>
                      <blockquote className="text-xl sm:text-3xl lg:text-4xl font-black font-wwf uppercase text-neutral-900 leading-tight tracking-tight mb-8 text-balance">
                        « L’Organisme de Promotion de la Lecture et de l’Écriture en Haïti (OPLEH) est une association à but non lucratif qui s’engage dans le développement intellectuel des écoliers haïtiens. Elle s’intéresse essentiellement au renforcement des compétences des écoliers en lecture et en écriture, piliers de l’éducation de base et du progrès social. »
                      </blockquote>
                      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-600 font-medium mb-8">
                        <span className="flex items-center gap-1.5 text-neutral-900 font-bold">
                          <Sparkles className="w-4 h-4 text-[#E0291D]" />
                          Fondé par des enseignants haïtiens du secondaire
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>Port-au-Prince, Haïti</span>
                        <span aria-hidden="true">·</span>
                        <span>Actions sur 4 départements</span>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <button
                          onClick={() => handleNavigate('apropos')}
                          className="wwf-btn-dark px-6 py-3 text-xs font-black inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>DÉCOUVRIR NOTRE HISTOIRE</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleNavigate('partenariat')}
                          className="wwf-btn-primary px-6 py-3 text-xs font-black inline-flex items-center gap-2 cursor-pointer"
                        >
                          <Heart className="w-3.5 h-3.5 fill-white" />
                          <span>NOUS REJOINDRE</span>
                        </button>
                      </div>
                    </MotionReveal>
                  </div>
                </section>

                <StatsBanner />

                <NewsSection
                  articles={articles}
                  onSelectArticle={setActiveArticle}
                  onNavigate={handleNavigate}
                />

                <TestimonialsSection />

                <GallerySection onSelectPhoto={setActivePhoto} />
              </motion.div>
            )}

            {activePage === 'apropos' && (
              <motion.div
                key="apropos"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <AboutSection onNavigate={handleNavigate} />
              </motion.div>
            )}

            {activePage === 'domaines' && (
              <motion.div
                key="domaines"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <DomainsSection
                  onNavigate={handleNavigate}
                  onOpenDonate={() => setIsDonateOpen(true)}
                />
              </motion.div>
            )}

            {activePage === 'ressources' && (
              <motion.div
                key="ressources"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <ResourcesSection
                  onSelectResource={setActiveResource}
                  onNavigate={handleNavigate}
                />
              </motion.div>
            )}

            {activePage === 'partenariat' && (
              <motion.div
                key="partenariat"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <PartnershipSection onNavigate={handleNavigate} />
              </motion.div>
            )}

            {activePage === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <ContactSection onNavigate={handleNavigate} />
              </motion.div>
            )}

            {activePage === 'actualites' && (
              <motion.div
                key="actualites"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <NewsPage
                  articles={articles}
                  onSelectArticle={setActiveArticle}
                  onNavigate={handleNavigate}
                />
              </motion.div>
            )}

            {activePage === 'admin' && (
              <motion.div
                key="admin"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <AdminPage
                  articles={articles}
                  onAddArticle={handleAddArticle}
                  onUpdateArticle={handleUpdateArticle}
                  onDeleteArticle={handleDeleteArticle}
                  onResetArticles={handleResetArticles}
                  onPreviewArticle={setActiveArticle}
                  onNavigate={handleNavigate}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenDonate={() => setIsDonateOpen(true)}
        />

        {/* Floating Donation Action for Mobile */}
        <div className="fixed bottom-5 right-5 z-30 lg:hidden">
          <button
            onClick={() => setIsDonateOpen(true)}
            className="wwf-btn-primary flex items-center gap-2 px-4 py-3 text-xs font-black shadow-xl active:scale-95 transition-transform cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>FAIRE UN DON</span>
          </button>
        </div>

        {/* Interactive Modals */}
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />

        <ResourceModal
          resource={activeResource}
          onClose={() => setActiveResource(null)}
        />

        <LightboxModal
          photo={activePhoto}
          onClose={() => setActivePhoto(null)}
          onSelectPhoto={setActivePhoto}
        />

        <WWFPopupModal
          isOpen={isDonateOpen}
          onClose={() => setIsDonateOpen(false)}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          articles={articles}
          onNavigate={handleNavigate}
          onSelectArticle={setActiveArticle}
          onSelectResource={setActiveResource}
        />
      </div>
    </MotionConfig>
  );
}
