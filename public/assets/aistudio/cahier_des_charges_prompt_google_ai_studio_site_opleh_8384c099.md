# PROMPT / CAHIER DES CHARGES POUR GOOGLE AI STUDIO : SITE WEB OPLEH

*(Copiez et collez l'intégralité du texte ci-dessous dans Google AI Studio pour générer le code du site web).*

**Rôle :** Tu es un développeur Front-End Senior et designer UI/UX spécialisé dans la création de sites web modernes, accessibles et à fort impact visuel pour les ONG et associations éducatives.

**Objectif :** Développer le site web complet, responsive (mobile, tablette, ordinateur) et interactif de l'organisation **OPLEH (Organisation pour la Promotion de la Lecture et de l’Écriture en Haïti)** en utilisant **HTML5, Tailwind CSS (via CDN) et JavaScript moderne (Vanilla JS)** (ou React + Tailwind CSS en un seul fichier propre et prêt à l'emploi). La langue du site est le **Français**.

### 1. DIRECTIVES DE DESIGN & DIRECTION ARTISTIQUE

* **Inspiration Layout & Corps du site (Style WWF France - `wwf.fr`) :**

  * **Header / Navigation :** Barre de navigation fixe en haut, épurée, avec le logo OPLEH à gauche, les liens du menu au centre, et un bouton d'appel à l'action très visible à droite (**"Faire un don"**). Menu mobile hamburger fluide.

  * **Hero Section (Bannière principale) :** Plein écran (`100vh`) avec support d'une **vidéo en arrière-plan** (avec image de secours *poster* et superposition sombre dégradée pour la lisibilité du texte). Typographie forte, percutante, avec un titre accrocheur et deux boutons d'action (*Découvrir nos actions* / *Soutenir OPLEH*).

  * **Mise en page éditoriale :** Sections larges et aérées, alternance de fonds blancs, gris très clair (`#F8FAFC`) et touches de couleurs vives. Cartes modernes avec ombres douces, effets de survol (*hover*) fluides, grandes photographies immersives et typographie contrastée (Titres forts en *Montserrat* ou *Poppins*, corps de texte lisible en *Inter* ou *Open Sans*).

* **Inspiration Pied de page / Footer (Style Équiterre - `equiterre.org`) :**

  * Structure multi-colonnes sur fond sombre élégant (ex: Bleu nuit profond `#0F172A` ou Vert forêt sombre).

  * **Haut du footer :** Bandeau d'engagement (Newsletter / Appel au don ou au bénévolat).

  * **Corps du footer :**

    * Colonne 1 : Logo OPLEH + brève description de la mission + icônes des réseaux sociaux (Facebook, LinkedIn, X, Instagram).

    * Colonne 2 : Navigation rapide (*Accueil, À propos, Domaines d'intervention*).

    * Colonne 3 : Ressources & Action (*Bibliothèque numérique, Fiches pédagogiques, Devenir bénévole, Faire un don*).

    * Colonne 4 : Coordonnées complètes (Haïti, Email, Téléphone) + Bouton d'action rapide.

  * **Bas du footer :** Mentions légales, droits d'auteur (`© 2026 OPLEH - Tous droits réservés`).

* **Palette de couleurs suggérée (Éducation, Culture, Espoir) :**

  * Primaire : Bleu profond / Royal (`#1E3A8A`) – symbolise le savoir, la confiance et Haïti.

  * Accent / Action (Boutons "Faire un don") : Orange chaleureux / Corail (`#EA580C` ou `#D97706`) – attire l'œil comme sur WWF.

  * Secondaire : Vert émeraude doux (`#059669`) – symbolise la croissance intellectuelle et l'avenir.

* **Médias (Placeholders prêts à être remplacés) :**

  * Utilise des balises `<video>` et `<img>` propres avec des commentaires clairs (`<!-- REMPLACER PAR VIDÉO/PHOTO OPLEH -->`) et des images libres de droits temporaires (Unsplash) illustrant des jeunes qui lisent, des livres et des salles de classe pour que le rendu soit immédiatement esthétique.

### 2. ARCHITECTURE ET CONTENU EXACT DU SITE

Le site doit permettre de naviguer entre les 6 sections/pages principales du menu :

#### MENU DE NAVIGATION

1. **Accueil** (Sous-sections : Présentation générale, Actualités, OPLEH en chiffres, Témoignages, Galerie photo)

2. **À propos** (Sous-sections : Histoire, Mission et vision, Objectifs, Nos valeurs)

3. **Domaines d’intervention**

4. **Ressources** (Lecture, Écriture, Fiches pédagogiques, Bibliothèque numérique)

5. **Partenariat** (Faire un don, Devenir bénévole)

6. **Contact** (Formulaire, Réseaux sociaux, Coordonnées)

#### PAGE / SECTION 1 : ACCUEIL

* **Hero Section :** Vidéo d'arrière-plan + Titre : *"Raviver la passion des mots pour transformer l'avenir d'Haïti"* + Sous-titre basé sur la présentation.

* **Présentation générale :**

  > "L’Organisme de Promotion de la Lecture et de l’Écriture en Haïti (OPLEH) est une association à but non lucratif qui s’engage dans le développement intellectuel des écoliers haïtiens. Elle s’intéresse essentiellement au renforcement des compétences des écoliers en lecture et en écriture, piliers de l’éducation de base et du progrès social."

* **Actualités (Grille de 3 cartes modernes style WWF) :** Prévoir 3 cartes d'articles d'actualité avec image, date, catégorie et bouton *"Lire la suite"* (avec textes d'exemple modifiables pour les futures publications WhatsApp).

* **OPLEH en chiffres (Bandeau impactant) :** Prévoir 4 compteurs visuels (ex: *Écoles accompagnées*, *Élèves sensibilisés*, *Livres distribués*, *Ateliers organisés*) avec une mention discrète *"Données évolutives"* ou des compteurs prêts à être mis à jour.

* **Témoignages (Carrousel ou grille) :** Espace dédié aux témoignages d'élèves, d'enseignants et de parents (prévoir 3 cartes de témoignages avec photo, nom et rôle).

* **Galerie photo :** Grille interactive (*Masonry* ou grille 3x2 avec effet *Lightbox* au clic pour agrandir les photos des activités OPLEH).

#### PAGE / SECTION 2 : À PROPOS

* **Notre Histoire :**

  * OPLEH est née d’un constat alarmant partagé par plusieurs jeunes enseignants engagés dans l’enseignement secondaire en Haïti : la performance académique des élèves est en déclin constant. Les élèves peinent à comprendre les textes, à structurer leur pensée ou à produire une réflexion personnelle. L’école, jadis lieu d’éveil intellectuel, ne parvient plus à stimuler la curiosité et la créativité.

  * Cette situation se reflète dans les résultats du baccalauréat, particulièrement faibles au cours des sept dernières années. D’année en année, les taux de réussite stagnent ou chutent, révélant une crise profonde du système éducatif et un manque criant de maîtrise des compétences de base, notamment la lecture et l’écriture.

  * Dans ce contexte, les réseaux sociaux prennent une place démesurée dans le quotidien des jeunes, devenant leur principale source de distraction. Faute de programmes littéraires adaptés et motivants, les élèves se détournent naturellement des livres et des activités intellectuelles, laissant un vide que les écrans remplissent trop facilement.

  * La situation ne s’améliore guère à l’université. Les étudiants abandonnent souvent leur spécialité, faute d’orientation initiale et de fondations solides. Les débats sont rares, la pensée critique s’efface, et l’espace universitaire perd peu à peu sa vocation de formation citoyenne et intellectuelle.

  * C’est face à cette série de constats que nous avons décidé de créer OPLEH – Organisation pour la Promotion de la Lecture et de l’Écriture en Haïti. Notre ambition : redonner goût à la lecture, développer l’esprit critique des jeunes, et contribuer à l’émergence d’une nouvelle génération d’écrivains et de penseurs engagés. Par des actions concrètes dans les écoles, OPLEH entend raviver la passion pour les mots et faire de la lecture un outil de transformation sociale durable.

* **Mission et Vision (Mise en page en 2 blocs contrastés) :**

  * *Mission :* Développer et améliorer les capacités de lecture des élèves haïtiens en leur fournissant des ressources adaptées et tout le soutien nécessaire.

  * *Vision :* Favoriser l’autonomie intellectuelle et l’esprit critique des jeunes, afin qu’ils puissent pleinement s’épanouir sur le plan intellectuel et se faire une place dans la littérature haïtienne tout en contribuant activement au développement de leur communauté à travers leur action et œuvre littéraire.

* **Nos Objectifs (Liste structurée avec icônes) :**

  1. Développer des programmes de lecture et d’écriture adaptés aux besoins des écoliers haïtiens afin de stimuler leur intérêt pour la lecture ;

  2. Former des leaders éducatifs selon des méthodes innovantes de développement des compétences en lecture et en écriture ;

  3. Fournir des ressources pédagogiques tels que livres, outils interactifs aux écoliers pour la pratique de la lecture et de l’écriture ;

  4. Créer un environnement d’apprentissage engagé par l’organisation des activités ludiques et interactives tels que clubs et ateliers de lecture et concours d’écriture et de lecture pour un engagement à la lecture.

* **Nos Valeurs (5 cartes avec icônes) :**

  1. Le respect des droits individuels

  2. L’engagement citoyen

  3. Le travail en équipe

  4. L’intégrité et l’honnêteté

  5. L’innovation en matière de pédagogies créatives et adaptées aux défis éducatifs

#### PAGE / SECTION 3 : DOMAINES D'INTERVENTION

*Introduction :* OPLEH fait choix de six (6) domaines d’intervention visant à bâtir une génération de jeunes Haïtiens autonomes intellectuellement, capables de réfléchir, d’innover et de s’exprimer clairement.
*(Présenter sous forme de cartes interactives ou d'onglets détaillés avec image et liste des leviers d'action)* :

1. **Éducation et alphabétisation :**

   * *Description :* OPLEH croit que le développement des compétences en lecture commence par l’apprentissage. Cette compétence, une fois acquise dès le plus jeune âge, l’enfant est incité à mettre ses réflexions sur du papier. Donc, il s’engage à écrire pour exprimer ses émotions, décrire son vécu, contribuer à la production scientifique, etc. C’est pourquoi OPLEH s’engage à éduquer les enfants sur l’importance de la lecture non seulement dans leur réussite académique, mais aussi dans leur croissance personnelle et professionnelle.

   * *Leviers d'action :* Mise en place d’ateliers de formation sur la lecture pour les élèves haïtiens ; Sensibilisation des parents sur l’importance et le rôle de la lecture dans la réussite scolaire et l’épanouissement personnel des écoliers ; Distribution de manuels scolaires et de supports pédagogiques aux écoles.

2. **Formation des enseignants :**

   * *Description :* La place des enseignants est cruciale dans le développement intellectuel des enfants qui passent la majeure partie de leur temps avec eux. OPLEH croit que les enseignants représentent un acteur clé dans l’apprentissage de la lecture et travaille avec eux afin de renforcer leurs capacités pédagogiques.

   * *Leviers d'action :* Organisation d’ateliers de formation sur les meilleures pratiques d’enseignement de la lecture et de l’écriture ; Élaboration de guides pédagogiques et de ressources didactiques ; Sensibilisation des éducateurs aux méthodes d’apprentissage innovantes et adaptées aux réalités locales.

3. **Technologie éducative :**

   * *Description :* Le développement de la technologie apporte de l’innovation dans les méthodes d’enseignement de nos jours et facilite l’accès à l’éducation pour tous. En ce sens, la technologie représente un levier puissant pour démocratiser l’accès à la lecture et améliorer l’apprentissage des enfants.

   * *Leviers d'action :* Développer des applications interactives et des plateformes numériques pour faciliter la lecture en ligne ; Créer des bibliothèques numériques accessibles aux élèves et aux enseignants ; Intégrer des nouvelles technologies dans les méthodes d’apprentissage pour rendre la lecture plus attractive.

4. **Approvisionnement des bibliothèques et des autres espaces de lecture :**

   * *Description :* Les bibliothèques représentent le lieu où lecteurs se rencontrent et profitent de lire pour le développement de leur capacité intellectuelle, élargir leurs horizons et améliorer leur capacité d’analyse. L’accès aux livres constitue un moyen d’améliorer l’apprentissage des élèves.

   * *Leviers d'action :* Dons de livres et d’autres outils interactifs aux bibliothèques scolaires et communautaires dans les zones reculées ; Création d’espaces de lecture agréables et accessibles à tous les enfants ; Lancement de bibliothèques mobiles pour atteindre les localités les plus éloignées.

5. **Promotion culturelle :**

   * *Description :* La promotion de la lecture revient à créer une culture chez l’enfant qui l’encourage à valoriser la littérature. Cela les aide à découvrir les œuvres littéraires d’auteurs haïtiens et étrangers.

   * *Axes d'intervention :* Organisation de clubs de lecture pour inciter les jeunes à lire régulièrement ; Lancement de concours d’écriture pour révéler et encourager les talents littéraires ; Tenue d’événements culturels tels que des salons du livre, des conférences et des rencontres avec des écrivains.

6. **Éducation citoyenne :**

   * *Description :* La lecture est un puissant outil de formation citoyenne et de développement de l’esprit critique. L’OPLEH encourage l’engagement des jeunes dans la société à travers des initiatives éducatives.

   * *Axes d'intervention :* Développement de contenus éducatifs sur la citoyenneté, les droits humains et la démocratie ; Sensibilisation des jeunes aux enjeux sociaux à travers la lecture d’ouvrages pertinents ; Formation à l’écriture argumentative et aux débats pour renforcer l’expression des opinions.

#### PAGE / SECTION 4 : RESSOURCES

*Interface avec filtres par catégorie (Tout, Lecture, Écriture, Fiches pédagogiques, Bibliothèque numérique) :*

* Permettre de consulter/télécharger des documents (cartes avec titre, description, format PDF/ePub, et bouton *"Consulter / Télécharger"*).

* Inclure 4 à 6 exemples de ressources pertinentes (ex: *Guide d'atelier d'écriture créative*, *Anthologie de textes d'auteurs haïtiens*, *Fiche pédagogique : Développer l'esprit critique*, *Accès à la Bibliothèque numérique*).

#### PAGE / SECTION 5 : PARTENARIAT

*Deux grandes sections interactives :*

1. **Faire un don :** Présentation de l'impact d'un don (ex: *15\$ = 3 livres pour une bibliothèque scolaire*, *50\$ = financement d'un atelier de lecture*). Sélection de montant (Ponctuel ou Mensuel) et options de paiement adaptées (Carte bancaire, MonCash / Natcash, Virement).

2. **Devenir bénévole :** Formulaire complet de candidature (Nom complet, Email, Téléphone, Ville/Département, Domaine de compétence : *Animation lecture, Formation enseignants, Logistique, Communication*, et message de motivation).

#### PAGE / SECTION 6 : CONTACT

* **Formulaire de contact :** Nom, Email, Sujet, Message + bouton d'envoi avec notification de confirmation.

* **Coordonnées :** Adresse en Haïti, Téléphone / WhatsApp, Email officiel.

* **Réseaux sociaux :** Liens stylisés vers **Facebook, LinkedIn, X (Twitter), Instagram**.

### 3. EXIGENCES TECHNIQUES

* Le code doit être **propre, bien commenté et structuré** pour que je puisse facilement remplacer les liens des vidéos, des photos et le logo.

* Assure une navigation fluide (soit un système d'onglets/pages dynamiques en JS pour passer d'une page à l'autre sans rechargement, soit une navigation fluide avec ancres et vues dédiées).

* Ajoute des animations subtiles au défilement (*scroll reveal*) pour donner un aspect haut de gamme, fluide et vivant, fidèle à l'esprit de WWF France.