import { DomainItem, GalleryPhoto, NewsArticle, ResourceItem, TestimonialItem } from '../types';
import libraryClubImg from '../assets/images/library_reading_club_1794506120338.jpg';
import workshopImg from '../assets/images/teacher_pedagogical_workshop_1794506120765.jpg';
import distributionImg from '../assets/images/community_book_distribution_1794506119990.jpg';
import digitalLibraryImg from '../assets/images/digital_library_technology_1794506121308.jpg';

export const OPLEH_REAL_LOGO = '/assets/aistudio/image_50f9f44f.png';
export const OPLEH_REAL_HERO = '/assets/aistudio/IMG_0422_b3264802.jpg';
export const OPLEH_REAL_TEAM = '/assets/aistudio/CTP_2847_copy_2517481d.jpg';
export const OPLEH_REAL_PRESENTING = '/assets/aistudio/DSC_7031_copie.jpg_91621e11.jpeg';

export const HERO_IMAGE = OPLEH_REAL_HERO;
export const TEAM_IMAGE = OPLEH_REAL_TEAM;
export const LIBRARY_IMAGE = libraryClubImg;
export const WORKSHOP_IMAGE = workshopImg;
export const DISTRIBUTION_IMAGE = distributionImg;
export const DIGITAL_IMAGE = digitalLibraryImg;

export const STATS_DATA = [
  { label: 'Écoles accompagnées', value: 20, prefix: '+', suffix: '', note: 'Dans 3 départements' },
  { label: 'Élèves sensibilisés', value: 1500, prefix: '+', suffix: '', note: 'Primaire, Fondamental et Secondaire' },
  { label: 'Membres', value: 25, prefix: '+', suffix: '', note: 'Actifs et adhérents' },
  { label: 'Ateliers et clubs actifs', value: 30, prefix: '+', suffix: '', note: 'Séances animées' },
];

export const OBJECTIVES_DATA = [
  {
    num: '01',
    title: 'Programmes adaptés et stimulants',
    desc: 'Développer des programmes de lecture et d’écriture adaptés aux réalités des écoliers haïtiens afin de susciter un intérêt durable pour les livres.',
  },
  {
    num: '02',
    title: 'Formation de leaders éducatifs',
    desc: 'Former des enseignants et leaders pédagogiques selon des méthodes innovantes axées sur le renforcement des compétences fondamentales en lecture et écriture.',
  },
  {
    num: '03',
    title: 'Ressources didactiques accessibles',
    desc: 'Fournir des supports pédagogiques de haute qualité (manuels scolaires, œuvres littéraires, outils interactifs) aux écoliers et bibliothèques scolaires.',
  },
  {
    num: '04',
    title: 'Environnement ludique et engagé',
    desc: 'Créer un écosystème d’apprentissage dynamique par des clubs littéraires, des ateliers d’écriture créative et des concours nationaux stimulants.',
  },
];

export const VALUES_DATA = [
  {
    num: '01',
    title: 'Respect des droits individuels',
    desc: 'Garantir l\'accès équitable au savoir, à la culture et à la liberté de pensée pour chaque enfant, sans aucune distinction sociale.',
  },
  {
    num: '02',
    title: 'Engagement citoyen',
    desc: 'Mobiliser les communautés, les enseignants et les jeunes autour d’une vision partagée pour la renaissance éducative d’Haïti.',
  },
  {
    num: '03',
    title: 'Travail en équipe',
    desc: 'Cultiver la collaboration étroite entre écoles, éducateurs, familles et partenaires pour multiplier l\'impact sur le terrain.',
  },
  {
    num: '04',
    title: 'Intégrité et honnêteté',
    desc: 'Assurer une gestion rigoureuse, transparente et exemplaire de toutes les ressources confiées par nos donateurs et partenaires.',
  },
  {
    num: '05',
    title: 'Innovation pédagogique',
    desc: 'Concevoir des méthodes créatives, interactives et contextualisées répondant aux défis réels du système éducatif haïtien.',
  },
];

export const DOMAINS_DATA: DomainItem[] = [
  {
    id: 'formation-enseignants',
    number: '01',
    title: 'Formation des enseignants',
    summary: 'Renforcer les compétences didactiques des éducateurs qui façonnent l’esprit des générations futures.',
    description: 'La place des enseignants est cruciale dans le développement intellectuel des enfants qui passent la majeure partie de leur journée avec eux. L\'OPLEH considère les professeurs comme les piliers de la transmission et collabore étroitement avec eux afin de moderniser et fortifier leurs pratiques pédagogiques en lecture et expression écrite.',
    image: WORKSHOP_IMAGE,
    iconName: 'GraduationCap',
    levers: [
      'Organisation d’ateliers de perfectionnement sur les meilleures pratiques d’enseignement de la lecture et de l’écriture',
      'Élaboration et distribution gratuite de guides pédagogiques et de fiches didactiques prêtes à l’emploi',
      'Sensibilisation continue aux pédagogies actives, bienveillantes et adaptées au contexte linguistique haïtien',
      'Création d’un réseau d’échange entre enseignants du primaire et du secondaire',
    ],
  },
  {
    id: 'technologie-educative',
    number: '02',
    title: 'Technologie éducative',
    summary: 'Démocratiser l’accès aux savoirs grâce au numérique et aux bibliothèques virtuelles.',
    description: 'Les innovations technologiques transforment les approches d’enseignement et ouvrent des opportunités inédites d’accès aux savoirs pour les enfants haïtiens. L\'OPLEH mobilise le numérique comme un formidable levier d’inclusion afin de dépasser les barrières matérielles et géographiques.',
    image: DIGITAL_IMAGE,
    iconName: 'Laptop',
    levers: [
      'Développement d’applications interactives et de plateformes de lecture numérique adaptées aux connexions réduites',
      'Création de bibliothèques numériques hébergeant des œuvres littéraires libres de droits et des manuels scolaires',
      'Intégration d’outils multimédias ludiques dans les clubs de lecture pour stimuler l’engagement des adolescents',
      'Formation des écoles à la gestion et à l’utilisation d’espaces d’apprentissage assistés par ordinateur',
    ],
  },
  {
    id: 'approvisionnement-bibliotheques',
    number: '03',
    title: 'Approvisionnement des bibliothèques',
    summary: 'Créer des sanctuaires de lecture chaleureux et approvisionnés en livres de qualité.',
    description: 'Les bibliothèques sont les foyers où les lecteurs se rassemblent, cultivent leur soif de savoir et élargissent leurs horizons intellectuels. L’accès direct à une variété de livres physiques demeure la condition première pour faire naître chez l’écolier le plaisir irrésistible de tourner les pages.',
    image: LIBRARY_IMAGE,
    iconName: 'Library',
    levers: [
      'Dons réguliers d’ouvrages jeunesse et de littérature haïtienne aux bibliothèques scolaires et communautaires',
      'Aménagement d’espaces de lecture conviviaux, calmes et sécurisants dans les écoles défavorisées',
      'Lancement d’initiatives de bibliothèques mobiles et malles itinérantes pour les localités rurales reculées',
      'Organisation d’opérations de collecte de livres auprès des institutions culturelles et de la diaspora',
    ],
  },
  {
    id: 'promotion-culturelle',
    number: '04',
    title: 'Promotion culturelle',
    summary: 'Valoriser les trésors de la littérature haïtienne et faire émerger les plumes de demain.',
    description: 'Promouvoir la lecture consiste à forger une culture durable qui célèbre nos auteurs et encourage l’enfant à chérir son patrimoine linguistique. À travers nos événements culturels, les jeunes découvrent les chefs-d’œuvre des écrivains haïtiens (Roumain, Frankétienne, Lahens, Trouillot) tout en explorant la littérature internationale.',
    image: DISTRIBUTION_IMAGE,
    iconName: 'Sparkles',
    levers: [
      'Organisation de clubs de lecture hebdomadaires animés par des passionnés de littérature',
      'Lancement de concours annuels de rédaction et d’éloquence pour révéler et récompenser les jeunes talents',
      'Organisation de cafés littéraires, rencontres scolaires avec des écrivains contemporains et salons du livre',
      'Publication de recueils réunissant les meilleures créations littéraires rédigées par les élèves participants',
    ],
  },
  {
    id: 'education-citoyenne',
    number: '05',
    title: 'Éducation citoyenne',
    summary: 'Développer l’esprit critique et former des citoyens conscients, tolérants et engagés.',
    description: 'La lecture est un outil démocratique puissant pour développer la pensée critique et l’autonomie de jugement. L\'OPLEH encourage l\'engagement républicain et civique des jeunes en leur apprenant à analyser l\'information, à débattre avec rigueur et à défendre des valeurs de justice et de solidarité.',
    image: HERO_IMAGE,
    iconName: 'ShieldCheck',
    levers: [
      'Développement de modules thématiques sur la citoyenneté, l\'histoire haïtienne, l\'environnement et les droits humains',
      'Sensibilisation aux enjeux collectifs à travers la lecture guidée d’essais et d’articles de société',
      'Ateliers d’écriture argumentative et tournois de débats structurés au sein des lycées et collèges',
      'Sensibilisation au discernement face aux réseaux sociaux et aux fausses informations',
    ],
  },
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'nouvelle-1',
    title: 'Premier anniversaire de l’OPLEH et création du Club Littéraire « Franckétienne »',
    category: 'Célébration & Littérature',
    date: 'Mars 2026',
    readTime: '3 min de lecture',
    summary: 'À l’occasion de sa première année d’existence, l’OPLEH inaugure son club littéraire placé sous le thème « Lecture, écriture et communauté » pour reconnecter les jeunes aux grands textes.',
    content: [
      'Fondée en mars 2025 par de jeunes éducateurs passionnés, l’Organisation de Promotion de la Lecture et de l’Écriture en Haïti (OPLEH) a célébré son premier anniversaire en posant un jalon culturel d’envergure : la création officielle du Club Littéraire « Franckétienne ».',
      'Placé sous la devise « Lecture, écriture et communauté », ce club a pour vocation d’offrir aux élèves des cycles fondamentaux et secondaires un cadre chaleureux et rigoureux pour apprivoiser le livre, s’initier aux techniques de rédaction créative et débattre librement des grandes œuvres haïtiennes.',
      '« Le génie littéraire de Frankétienne incarne l’audace des mots et la résistance créatrice de notre peuple. Nous voulons transmettre cette flamme à chaque écolier haïtien », a rappelé l’équipe de direction lors de la cérémonie de lancement.',
    ],
    image: HERO_IMAGE,
    author: 'Direction de la Rédaction OPLEH',
  },
  {
    id: 'nouvelle-2',
    title: 'Mobilisation de centaines de jeunes aux Gonaïves pour la Journée de la Paix',
    category: 'Citoyenneté & Dialogue',
    date: 'Septembre 2025',
    readTime: '4 min de lecture',
    summary: 'L’OPLEH a rassemblé des centaines d’écoliers et d’enseignants dans la Cité de l’Indépendance pour promouvoir l’école et les livres comme remparts contre la violence.',
    content: [
      'Dans le cadre de la Journée Internationale de la Paix, l’OPLEH a organisé aux Gonaïves (département de l’Artibonite) une vaste journée de réflexion et de causeries autour du rôle pacificateur de l’éducation et de la lecture.',
      'Les jeunes participants ont pris part à des ateliers d’écriture de plaidoyers pacifistes, à des concours de lecture expressive et à des échanges inter-établissements sur le vivre-ensemble et la non-violence en milieu scolaire.',
      'Cette initiative illustre la conviction fondamentale de l’OPLEH : un enfant qui lit et qui maîtrise l’écriture développe un esprit critique et une tolérance qui en font un artisan de paix dans sa communauté.',
    ],
    image: LIBRARY_IMAGE,
    author: 'Pôle Artibonite · OPLEH Gonaïves',
  },
  {
    id: 'nouvelle-3',
    title: 'Causeries interactives et orientation académique à Limonade et Caracol',
    category: 'Grand Nord & Éducation',
    date: 'Janvier 2026',
    readTime: '4 min de lecture',
    summary: 'Accompagnement méthodique des élèves du secondaire pour consolider leurs compétences textuelles et préparer sereinement leur entrée à l’université.',
    content: [
      'Les équipes de l’OPLEH se sont déployées dans les communes de Limonade et Caracol (Grand Nord) pour animer une série de causeries interactives axées sur la réussite au baccalauréat et l’orientation universitaire.',
      'Face au taux alarmant d’abandons lors des premières années d’études supérieures en Haïti, les animateurs ont guidé les lycéens dans l’élaboration de projets professionnels cohérents et le renforcement de leur méthode de dissertation.',
      'Des lots de dictionnaires, d’ouvrages didactiques et de livrets méthodologiques ont été remis gratuitement aux bibliothèques des collèges et lycées partenaires de la région.',
    ],
    image: WORKSHOP_IMAGE,
    author: 'Mission Pédagogique Grand Nord',
  },
];

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'guide-ecriture-creative',
    title: 'Guide pratique d\'animation d\'atelier d\'écriture créative',
    category: 'ecriture',
    categoryLabel: 'Écriture',
    format: 'PDF',
    size: '2.8 Mo',
    pages: 32,
    targetAudience: 'Enseignants & Animateurs de clubs',
    description: 'Manuel complet proposant 15 séances clés en main pour désinhiber les élèves face à la page blanche, développer leur vocabulaire et enrichir leur style narratif.',
    sampleExcerpt: `Module 1 : L'amorce sensorielle.
Invitez chaque élève à fermer les yeux pendant deux minutes et à se remémorer un son familier de son quartier en Haïti (l'appel d'un marchand, la pluie tropicale sur la tôle, le vent dans les feuillages).
Sur sa feuille, l'élève commence son texte par : « Ce matin-là, le son qui me réveilla... »
Objectifs visés :
1. Développer l'observation attentive des détails concrets.
2. Éviter les descriptions abstraites en privilégiant les cinq sens.
3. Structurer le paragraphe en trois temps logiques.`,
  },
  {
    id: 'anthologie-auteurs-haitiens',
    title: 'Anthologie pédagogique : Découvrir les maîtres de la littérature haïtienne',
    category: 'lecture',
    categoryLabel: 'Lecture',
    format: 'PDF',
    size: '4.5 Mo',
    pages: 48,
    targetAudience: 'Collégiens & Lycéens (Classes de 4e à Terminale)',
    description: 'Sélection annotée d\'extraits choisis (Jacques Roumain, Marie Chauvet, Dany Laferrière, Yanick Lahens) accompagnés de questionnaires d\'analyse littéraire et de repères historiques.',
    sampleExcerpt: `Extrait choisi : « Gouverneurs de la rosée » de Jacques Roumain.
« Nous sommes pauvres, c'est vrai. Nous sommes malheureux, c'est vrai. Mais sais-tu ce que c'est que la terre ? La terre est dans le ciel comme une étoile, mais elle est à nous, avec ses arbres, ses collines, son eau qu'on entend chanter sous la pierre... »

Pistes de réflexion pour la classe :
1. Comment l'auteur associe-t-il la misère matérielle et la dignité humaine ?
2. Quelle métaphore végétale exprime le renouveau de Fonds-Rouge ?
3. Exercice d'écriture : Rédigez à votre tour un court plaidoyer sur l'attachement à votre communauté.`,
  },
  {
    id: 'fiche-esprit-critique',
    title: 'Fiche pédagogique : Développer l’esprit critique et l’argumentation',
    category: 'fiches',
    categoryLabel: 'Fiches pédagogiques',
    format: 'PDF',
    size: '1.4 Mo',
    pages: 16,
    targetAudience: 'Secondaire & Pré-universitaire',
    description: 'Outil didactique axé sur l\'analyse des discours, la distinction entre fait et opinion, et la construction d\'un plan d\'argumentation solide pour les dissertations.',
    sampleExcerpt: `Grille d'analyse : Du fait à la prise de position argumentée.
- Étape 1 : Identifier la thèse centrale défendue par l'auteur.
- Étape 2 : Distinguer les preuves empiriques (chiffres, sources vérifiables) des jugements de valeur ou des appels à l'émotion.
- Étape 3 : Repérer les contre-arguments possibles et formuler une synthèse nuancée.
Exercice pratique : Débat contradictoire structuré en 3 minutes par orateur.`,
  },
  {
    id: 'catalogue-bibliotheque-numerique',
    title: 'Guide d\'accès à la Bibliothèque Numérique Jeunesse OPLEH',
    category: 'numerique',
    categoryLabel: 'Bibliothèque numérique',
    format: 'Interactif',
    size: 'Plateforme Web / EPUB',
    pages: 24,
    targetAudience: 'Élèves, Éducateurs & Familles',
    description: 'Guide détaillé expliquant comment consulter hors-ligne plus de 250 œuvres libres de droits, contes traditionnels haïtiens numérisés et livrets scolaires interactifs.',
    sampleExcerpt: `Fonctionnalités de l'espace numérique :
- Téléchargement léger optimisé pour les téléphones Android d'entrée de gamme.
- Mode de lecture sans connexion internet après synchronisation initiale.
- Dictionnaire intégré français-créole accessible en un clic sur chaque mot complexe.
- Quiz d'auto-évaluation de compréhension à la fin de chaque chapitre.`,
  },
  {
    id: 'module-lecture-primaire',
    title: 'Kit d\'activités ludiques pour les clubs de lecture primaire',
    category: 'lecture',
    categoryLabel: 'Lecture',
    format: 'PDF',
    size: '2.1 Mo',
    pages: 28,
    targetAudience: 'Écoles primaires (7-11 ans)',
    description: 'Jeux de cartes de vocabulaire, devinettes de contes créoles traditionnels (Tim-Tim Bwa Chèch) et saynètes de théâtre pour susciter l\'envie spontanée de lire.',
    sampleExcerpt: `Activité phare : Le « Détective des histoires ».
Les élèves reçoivent un indice extrait d'un conte (un objet mystérieux, une citation d'animal, une phrase énigmatique).
Par groupes de quatre, ils doivent explorer les étagères de la bibliothèque pour identifier le livre correspondant et en lire le dénouement à voix haute devant leurs camarades.`,
  },
  {
    id: 'guide-methodologique-bac',
    title: 'Méthodologie de la dissertation littéraire au Baccalauréat haïtien',
    category: 'ecriture',
    categoryLabel: 'Écriture',
    format: 'PDF',
    size: '3.2 Mo',
    pages: 36,
    targetAudience: 'Candidats au Bac & Professeurs',
    description: 'Conseils pratiques, pièges récurrents à éviter et modèles de plans détaillés rédigés par les enseignants certifiés du réseau OPLEH pour réussir les épreuves de français.',
    sampleExcerpt: `Structure recommandée pour l'introduction :
1. Accroche thématique (mise en contexte historique ou philosophique du sujet).
2. Définition des termes clés du libellé pour éviter le hors-sujet.
3. Problématique formulée sous forme de question directrice.
4. Annonce fluide du plan en 2 ou 3 parties équilibrées sans utiliser de formules scolaires rigides.`,
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'temoignage-1',
    name: 'Mireille Jean-Baptiste',
    role: 'Professeure de Lettres au Secondaire',
    schoolOrOrg: 'Lycée National de Pétion-Ville',
    quote: 'Depuis que nos classes participent aux ateliers de l’OPLEH, mes élèves ont enfin repris confiance en eux. Leurs dissertations sont plus riches, leur vocabulaire s\'étoffe et ils s\'intéressent enfin aux auteurs de notre pays.',
    avatarText: 'MJ',
  },
  {
    id: 'temoignage-2',
    name: 'Woodley D.',
    role: 'Élève en classe de Terminale',
    schoolOrOrg: 'Lycée Toussaint Louverture, Port-au-Prince',
    quote: 'Avant le club de lecture, je passais toutes mes heures libres sur TikTok sans ouvrir un seul livre. Le concours d\'écriture de l\'OPLEH m\'a donné envie d\'écrire mon premier recueil de poèmes. La lecture m\'a ouvert l\'esprit.',
    avatarText: 'WD',
  },
  {
    id: 'temoignage-3',
    name: 'Patrick Dorsainvil',
    role: 'Parent d\'élève et Membre du Comité Scolaire',
    schoolOrOrg: 'Commune de Saint-Marc (Artibonite)',
    quote: 'L\'arrivée des malles de livres de l\'OPLEH dans notre localité a changé la vie de nos enfants. Voir ma fille lire des contes le soir à haute voix pour ses petits frères est la plus belle preuve de l\'utilité de cette association.',
    avatarText: 'PD',
  },
];

export const GALLERY_DATA: GalleryPhoto[] = [
  {
    id: 'photo-1',
    url: OPLEH_REAL_PRESENTING,
    title: 'Conférence interactive et causerie littéraire de l\'OPLEH',
    category: 'Vie scolaire',
    location: 'Gonaïves (Artibonite)',
    caption: 'Les dirigeants de l\'OPLEH animent une causerie inspirante devant les élèves et éducateurs.',
  },
  {
    id: 'photo-2',
    url: TEAM_IMAGE,
    title: 'L\'Équipe dirigeante de l\'OPLEH sur le terrain',
    category: 'Citoyenneté',
    location: 'Gonaïves / Limonade',
    caption: 'Les fondateurs de l\'OPLEH mobilisés pour repenser la citoyenneté et promouvoir l\'écriture.',
  },
  {
    id: 'photo-3',
    url: WORKSHOP_IMAGE,
    title: 'Atelier pédagogique d\'orientation et d\'écriture',
    category: 'Formation',
    location: 'Caracol (Nord-Est)',
    caption: 'Formation continue des enseignants et éducateurs partenaires aux pédagogies actives de lecture.',
  },
  {
    id: 'photo-4',
    url: DISTRIBUTION_IMAGE,
    title: 'Remise officielle de manuels scolaires et livres jeunesse',
    category: 'Distribution',
    location: 'Gonaïves (Artibonite)',
    caption: 'Célébration de la Journée de la Paix avec remise de lots de livres aux écoles fondamentales.',
  },
  {
    id: 'photo-5',
    url: DIGITAL_IMAGE,
    title: 'Espace d\'apprentissage numérique et bibliothèque virtuelle',
    category: 'Technologie',
    location: 'Nord / Nord-Est',
    caption: 'Les lycéens consultent l’anthologie numérique et les fiches méthodologiques de dissertation.',
  },
  {
    id: 'photo-6',
    url: HERO_IMAGE,
    title: 'Jeunesse haïtienne épanouie par la lecture',
    category: 'Éducation',
    location: 'Réseau National OPLEH',
    caption: 'Bâtir une génération de jeunes Haïtiens autonomes intellectuellement et maîtres de leur destin.',
  },
];
