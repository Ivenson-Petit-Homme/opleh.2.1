export type NavSection =
  | 'accueil'
  | 'apropos'
  | 'domaines'
  | 'ressources'
  | 'partenariat'
  | 'contact'
  | 'actualites'
  | 'admin';

export interface DomainItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  iconName: string;
  levers: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  author: string;
  featured?: boolean;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'lecture' | 'ecriture' | 'fiches' | 'numerique';
  categoryLabel: string;
  format: 'PDF' | 'EPUB' | 'Interactif';
  size: string;
  description: string;
  targetAudience: string;
  sampleExcerpt: string;
  pages: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  schoolOrOrg: string;
  quote: string;
  avatarText: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: string;
  location: string;
  caption: string;
}
