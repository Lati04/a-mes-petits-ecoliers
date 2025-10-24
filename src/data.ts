import type { ReactNode } from "react";

/* ---------- NAVIGATION ---------- */
export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Accueil" },
  { id: "tomes", label: "Tomes" },
  { id: "about", label: "À propos" },
  { id: "contact", label: "Contact" },
];

export interface HeaderProps {
  navItems?: NavItem[];
}

/*---------------BUTTON-----------*/
export interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;             
  onClick?: () => void;       
  variant?: "line-hover" | "button-gold" | "line-under" | "icon";
  className?: string;         
  targetBlank?: boolean;  
  style?: React.CSSProperties;    
  type?: "button" | "submit" | "reset"
}

/* ---------- SECTION ---------- */
export interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  bgColor?: string;
  noMarginTop?: boolean;
  className?: string; 
}

export interface HomeProps {
  featuredBooks?: Book[];     
  exercises?: Exercise[];       
  themes?: Theme[];              
}

/*------------WAVESEPARATOR----------------*/
export interface WaveSeparatorProps {
  flip?: boolean;
  height?: string;
  className?: string;
}

/* ---------- THEMES / CAROUSEL ---------- */
export interface Theme {
  title: string;
  description: string;
  image: string;
}
export interface CarouselProps {
  items?: Theme[];
  autoPlay?: boolean;
  interval?: number;
}
export const themes: Theme[] = [
  {
    title: "L’alphabet",
    description:
      "L’alphabet vient des lettres phéniciennes, grecques et latines. Chaque lettre a une forme unique. Apprendre à les écrire développe lecture, mémoire et créativité.",
    image: "/images/alphabet_majuscules_minuscules_kawaii_v2.jpg",
  },
  {
    title: "Les couleurs",
    description:
      "Les couleurs influencent nos émotions et nos perceptions. Colorier permet d’exprimer ses sentiments et d’observer le monde avec attention.",
    image: "/images/4.png",
  },
  {
    title: "Les chiffres et les nombres",
    description:
      "Venant des systèmes indiens et arabes, les nombres développent logique, concentration et confiance en soi.",
    image: "/images/chiffres_0_a_9_tous_yeux_normaux.jpg",
  },
  {
    title: "Le manga",
    description:
      "Forme de BD japonaise du XIXe siècle. Dessiner ou colorier stimule imagination et capacité à raconter des histoires.",
    image: "/images/monde_manga.jpg",
  },
  {
    title: "Le mandala",
    description:
      "Mot sanskrit signifiant 'cercle sacré', utilisé pour l’harmonie et l’équilibre. Colorier un mandala favorise patience et concentration.",
    image: "/images/3.png",
  },
  {
    title: "Le kawaii",
    description:
      "Apparu au Japon dans les années 1970, il rend le monde plus doux. Colorier du kawaii développe créativité et joie de vivre.",
    image: "/images/univers_kawaii.jpg",
  },
  {
    title: "L’empathie",
    description:
      "Capacité à comprendre et partager les émotions des autres. Observer et colorier des scènes émotionnelles développe cette qualité.",
    image: "/images/empathie_enfants_kawaii.jpg",
  },
  {
    title: "La bienveillance",
    description:
      "Agir avec douceur et respect envers soi et les autres. Colorier des scènes positives renforce attention et générosité.",
    image: "/images/bienveillance_enfants_kawaii.jpg",
  },
  {
    title: "Le respect et le courage",
    description:
       "Le respect consiste à reconnaître la valeur des autres et le courage à affronter les difficultés. Ces valeurs aident à dire non au harcèlement.",
    image: "/images/harcelement_defense_enfants_kawaii.jpg",
  },
  {
    title: "S’organiser",
    description:
      "Planifier ses journées apporte équilibre, bien-être et confiance. Laisser place à l’imprévu renforce sérénité et créativité.",
    image: "/images/organisation_enfant_kawaii.jpg",
  },
];

export interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

export interface Exercise {
  title: string;
  description: string;
  images: string[]; 
}

export interface ExerciseCardProps {
  exercise: Exercise;
}

export interface BooksProps {
  book: Book; 
}

export interface Book {
  title: string;
  img: string;
  link?: string;
  desc?: string;
  price?: number; 
  amazonLink?: string;
}

export const featuredBooks: Book[] = [
  { title: "Tome 1 – J'apprends l'alphabet en coloriant", img: "/images/J'apprends l'alphabet  de A à Z en coloriant.jpg", link: "https://www.amazon.fr/dp/B0FRXB2YLT", price: 10.54 },
  { title: "Tome 2 – J'apprends les couleurs en coloriant", img: "/images/j'apprends les couleurs en coloriant.jpg", link: "https://www.amazon.fr/dp/B0FR4FRFTR", price: 10.54 },
  { title: "Tome 3 – J'apprends à compter en coloriant", img: "/images/j'apprends à compter en coloriant.jpg", link: "https://www.amazon.fr/dp/B0FRLVGVHW", price: 16.55 },
  { title: "Tome 4 – Bienvenue dans l'univers du mandala à colorier", img: "/images/J’apprends à me détendre avec les mandala par À mes petits écoliers (21.59 x 27.94 cm).jpg", link: "https://www.amazon.fr/dp/B0FR46XSWV", price: 11.99 },
  { title: "Tome 5 – Bienvenue dans l'univers du manga à colorier", img: "/images/j'apprends à colorier des mangas.jpg", link: "https://www.amazon.fr/dp/B0FRMKQPYW", price: 10.54 },
  { title: "Tome 6 – Bienvenue dans l'univers du kawaii à colorier", img: "/images/Bienvenue dans l'univers du kawaii à colorier.jpg", link: "https://www.amazon.fr/dp/B0FS1893ZH", price: 13.19 },
  { title: "Tome 7 – J'apprends l'empathie en coloriant", img: "/images/J'apprends l'empathie en coloriant.jpg", link: "https://www.amazon.fr/dp/B0FSK4N526", price: 10.54 },
  { title: "Tome 8 – J'apprends la bienveillance en coloriant", img: "/images/J'apprends la bienveillance en coloriant.jpg", link: "https://www.amazon.fr/dp/B0FSZPR6MY", price: 10.54 },
  { title: "Tome 9 – J'apprends le respect et le courage (anti-harcèlement)", img: "/images/j'apprends le respect et le courage en coloriant.jpg", link: "https://www.amazon.fr/dp/B0FTRGMNNN", price: 11.59 },
  { title: "Tome 10 – J'apprends à m'organiser en coloriant", img: "/images/j'apprends à m'organiser en coloriant.jpg", link: "https://www.amazon.fr/dp/B0FVX9R9D1", price: 11.59 },
];


export const books: Book[] = [
  { title: "Alphabet", desc: "Découvrir les lettres de A à Z avec des animaux amusants.", img: "/images/J'apprends l'alphabet  de A à Z en coloriant.jpg" },
  { title: "Chiffres", desc: "Apprendre à compter jusqu’à 100 en coloriant.", img: "/images/j'apprends les couleurs en coloriant.jpg" },
  { title: "Couleurs", desc: "Explorer et reconnaître les teintes en s’amusant.", img: "/images/j'apprends à compter en coloriant.jpg" },
  { title: "Mandalas", desc: "Se détendre et développer la créativité dès 8 ans.", img: "/images/J’apprends à me détendre avec les mandala par À mes petits écoliers (21.59 x 27.94 cm).jpg" },
  { title: "Manga", desc: "Découvrir des scènes inspirées du style japonais.", img: "/images/j'apprends à colorier des mangas.jpg" },
  { title: "Kawaii", desc: "Exprimer la douceur et la fantaisie à travers des coloriages mignons.", img: "/images/Bienvenue dans l'univers du kawaii à colorier.jpg" },
  { title: "Empathie", desc: "Apprendre la gentillesse et la compréhension des émotions.", img: "/images/J'apprends l'empathie en coloriant.jpg" },
  { title: "Bienveillance", desc: "Cultiver le respect et l’attention à soi et aux autres.", img: "/images/J'apprends la bienveillance en coloriant.jpg" },
  { title: "Respect & Courage", desc: "Sensibiliser à la solidarité et à l’anti-harcèlement.", img: "/images/j'apprends le respect et le courage en coloriant.jpg" },
  { title: "Organisation", desc: "Apprendre à planifier et équilibrer effort et plaisir.", img: "/images/j'apprends à m'organiser en coloriant.jpg" },
];

export const bookDescriptions: Record<string, string> = {
  "Tome 1 – J'apprends l'alphabet en coloriant": `J’apprends l’alphabet en coloriant

Bienvenue dans le cahier "J'apprends l’alphabet en coloriant" – une aventure créative et éducative pour découvrir toutes les lettres de l’alphabet avec animaux rigolos pour enfants de 3 à 6 ans

Avec ce cahier unique de la collection À Mes petits écoliers, les enfants découvrent :
Vingt-six lettres à explorer, ce cahier ludique aide les enfants à reconnaître, tracer et mémoriser les lettres tout en s’amusant.

Offrez à votre enfant un apprentissage joyeux et créatif de l’alphabet avec ce cahier plein d’animaux drôles et mignons !
De A comme Abeille à Z comme Zèbre, chaque lettre est associée à un animal illustré avec un visage amusant, à colorier et à aimer.

Ce que tu vas découvrir :
-Les lettres de l’alphabet (26 en tout)
-Les grandes lettres (majuscules) et les petites lettres (minuscules)
-Deux costumes pour chaque lettre !

À chaque lettre :
-La lettre en GRAND et en PETIT à colorier
-quelques mots qui commencent par la lettre à colorier (exemple : A comme Abeille).
-Un dessin représentant la lettre associé à un animal drôle, amusant à colorier

Entre les séries :
-Pages d’écriture pour t’entraîner aux majuscules et aux minuscules

À la fin du cahier :
-Un grand récapitulatif de toutes les lettres
-Une page de félicitations pour ton super travail
-Des coloriages kawaii pour terminer en s’amusant !
-Jeux d’observation : retrouve et colorie les bonnes lettres
-Jeux rigolos : relie la lettre à son image, mandalas codés, labyrinthes

Objectifs pédagogiques :
-Reconnaître et mémoriser les lettres
-Enrichir le vocabulaire animalier
-Stimuler la motricité fine et la concentration
-Donner envie d’apprendre par le jeu

Pour résumer :
-26 lettres à découvrir – Chaque lettre est illustrée par un animal drôle et mignon
-Coloriage et écriture – Lettres majuscules et minuscules à tracer et colorier
-Apprentissage ludique – Développe le vocabulaire animalier tout en s’amusant
-Idéal 3-6 ans – Adapté à la maternelle, à la maison ou en vacances
-Collection “À mes petits écoliers” – Cahiers éducatifs créés pour apprendre avec le sourire`,
  "Tome 2 – J'apprends les couleurs en coloriant": `J’apprends les couleurs en coloriant

Un cahier éducatif amusant pour apprendre toutes les couleurs ! Coloriages, jeux et exercices adaptés aux enfants de 3 à 6 ans : primaires, secondaires, neutres et magiques. Idéal pour la maternelle et l’éveil créatif.
Du rouge éclatant au violet magique, votre enfant va découvrir toutes les couleurs en s’amusant !

Ce cahier éducatif progressif est spécialement conçu pour les enfants de 3 à 6 ans. Grâce à des activités simples, ludiques et pédagogiques, il permet d’apprendre à reconnaître, nommer et mélanger les couleurs.

À l’intérieur, votre enfant trouvera :
  -Les couleurs expliquées simplement avec des exemples concrets
  -Des exercices “Colorie-moi en…” pour mémoriser en coloriant
  -Des jeux d’observation et d’association pour reconnaître les bonnes couleurs, du coloriage codé et du coloriage libre
  -Des fiches spéciales “mélange de couleurs” pour comprendre comment créer de nouvelles teintes
  -Une page personnalisable et une page de félicitations “Bravo !” pour valoriser son travail

  Objectifs pédagogiques :
  -Reconnaître et nommer les couleurs primaires, secondaires, neutres et spéciales
  -Comprendre les mélanges et nuances en jouant
  -Développer la créativité, la motricité fine et la logique
  -Encourager l’autonomie et la confiance en soi grâce à des activités réussies

Un cahier idéal pour :
  -Les enfants de 3, 4, 5 ou 6 ans
  -Les parents souhaitant un support éducatif ludique à la maison
  -Les enseignants et assistantes maternelles pour compléter leurs activités pédagogiques
  -Un cadeau original et utile pour un enfant en maternelle

  Avec ce cahier, apprendre les couleurs devient un jeu !
  -Toutes les couleurs – Primaires, secondaires, neutres et magiques expliquées pas à pas
  -Coloriage interactif – Exercices “Colorie-moi en…” et jeux d’observation adaptés aux petits
  -Apprentissage créatif – Comprendre les mélanges et nuances en s’amusant
  -Pour enfants 3-6 ans – Activités ludiques et éducatives adaptées à la maternelle

Pages bonus – Une grande récap de toutes les couleurs, jeux rigolos, mandalas, coloriages codés ainsi que du coloriage libre de kawaii trop mignon`,
  "Tome 3 – J'apprends à compter en coloriant": `Un grand cahier éducatif et ludique pour apprendre à compter de 0 à 100 !

Ce cahier d’activités propose aux enfants de maternelle un apprentissage progressif des chiffres et des nombres, à travers des coloriages amusants, des pages d’écriture et des jeux éducatifs.

Idéal pour les 3-7 ans, il accompagne pas à pas l’enfant dans la découverte des chiffres, des dizaines et même des centaines, tout en développant la concentration, la motricité fine et la logique.

Ce que ton enfant va découvrir :
- Les chiffres de 0 à 9
- Les dizaines : 10, 20, 30… jusqu’à 90
- Les nombres de 10 à 99 (par séries : 10 à 19, 20 à 29, etc.)
- Un petit bonus pour aborder les centaines et les milliers

À chaque page :
- Le chiffre ou le nombre écrit en lettres à colorier
- Le chiffre ou le nombre en personnage rigolo à colorier
- Le chiffre ou le nombre en numérique à colorier
- Deux petites lignes pour s’entraîner à l’écrire en lettres et en chiffres

Entre les séries :
- Pages d’écriture pour bien s’exercer
- Pages de récréation avec des jeux amusants

À la fin du cahier :
- Un grand récapitulatif de 0 à 99 avec un bonus sur les centaines
- Une page de félicitations pour valoriser les progrès
- Des jeux rigolos : labyrinthes, coloriages codés avec des mandalas, animaux et personnages amusants

Objectifs pédagogiques :
- Reconnaître et tracer les chiffres
- Compter jusqu’à 100 et au-delà
- Développer la patience, la logique et la coordination œil-main
- Encourager l’autonomie et la fierté de progresser

Pour qui ?
- Enfants de 3 à 7 ans (maternelle, grande section, CP)
- Enfants en instruction à domicile (IEF)
- Cadeau éducatif pour anniversaire, rentrée scolaire, vacances ou activité du mercredi

Caractéristiques techniques :
- Grand format : 21,59 x 27,94 cm (8,5 x 11 pouces), pratique pour les enfants
- 177 pages d’activités et de coloriages
- Papier blanc adapté aux crayons de couleur et feutres
- Page de titre personnalisable et design joyeux

Un cahier complet, ludique et motivant pour accompagner votre enfant dans l’apprentissage des nombres et faire des mathématiques une vraie partie de plaisir !
Créé avec soin par la collection À mes petits écoliers, pour apprendre en s’amusant.`,
  
  "Tome 4 – Bienvenue dans l'univers du mandala à colorier": `Bienvenue dans l’univers du mandala à colorier
Découvre le monde magique des mandalas ! 71 dessins progressifs à colorier pour se relaxer, stimuler l’imagination et améliorer la concentration. Idéal pour les enfants dès 6 ans et les adultes débutants.
Un mandala, c’est comme un dessin qui tourne en rond, avec des formes qui se répètent pour créer un cercle plein de jolis motifs. En le coloriant, tu entres dans un univers de calme, d’harmonie et de créativité.

Pourquoi ça détend ?
Quand on colorie un mandala :
-Le souffle devient plus calme
-L’esprit se repose
-L’imagination s’éveille
-C’est un peu comme offrir un câlin à son cerveau !

À l’intérieur du cahier :
-1 page explicative simple et ludique pour comprendre ce qu’est un mandala
-71 mandalas progressifs : des modèles faciles pour débuter jusqu’à des motifs plus détaillés pour s’exercer et progresser
-Des grands dessins, clairs et variés, pour ne jamais s’ennuyer
-Papier blanc grand format, parfait pour crayons de couleur, feutres et pastels

Bienfaits et objectifs pédagogiques :
-Développer la concentration et la patience
-Favoriser la détente et la gestion du stress
-Stimuler l’imagination et la créativité
-Offrir un moment de calme aux enfants et aux adultes débutants

Un cahier idéal pour :
-Les enfants dès 6 ans (maîtrise du geste, détente, créativité)
-Les adultes débutants qui veulent découvrir le coloriage de mandalas en douceur
-Un moment de relaxation à la maison, à l’école, ou en voyage
-Un cadeau original et utile pour se détendre tout en s’amusant

Avec ce livre, colorier devient un vrai voyage intérieur.
-71 mandalas progressifs – Du plus simple au plus détaillé, parfait pour débuter et progresser
-Coloriage, détente et créativité – Un moment de calme et de bien-être pour petits et grands
-Enfants dès 6 ans et adultes débutants – Activité ludique, relaxante et pédagogique
-Papier blanc grand format (A4) – Compatibles crayons, feutres et pastels

Page explicative incluse – Comprendre les mandalas et apprendre à les colorier en douceur`,
  "Tome 5 – Bienvenue dans l'univers du manga à colorier": `Bienvenue dans l’univers du manga à colorier !
Coloriage Manga pour enfants et ados – Cahier de personnages et scènes japonaises à colorier

Plongez dans l’univers du manga avec des personnages expressifs et des scènes inspirées de l’animation
japonaise !
Un cahier de coloriage unique, pensé pour les enfants et adolescents fans de mangas, d’aventures et de créativité.

Une histoire à colorier
Deux adolescents mènent un quotidien tranquille… jusqu’au jour où ils découvrent un livre magique dans une bibliothèque.
Propulsés dans un monde parallèle plein d’aventures, ils rencontrent un vieil homme sage qui les guide face au mal. Ensemble, ils affrontent un puissant sorcier dans des combats épiques… avant de retrouver leurs proches et la paix.

Chaque page à colorier permet de donner vie à ce récit comme une véritable bande dessinée à personnaliser.

À l’intérieur du cahier :
-1 page explicative simple et ludique pour comprendre ce qu’est le manga et apprendre à le colorier
-1 page exemple de scène manga
-71 pages de scènes manga originales : deux adolescents, un vieil homme sage, un livre magique, un monde parallèle et des combats épiques
-Personnages expressifs et costumes détaillés
-Scènes variées : action, émotions, humour et moments tendres
-Contours noirs nets et précis – faciles à colorier, avec certains dessins plus complexes pour relever des défis
-Grand format sur papier blanc – idéal pour crayons de couleur, feutres et pastels

Pourquoi choisir ce cahier de coloriage manga ?
-Univers japonais – Plongez dans l’ambiance manga avec des scènes dynamiques et des personnages expressifs
-Illustrations originales – Créées spécialement pour ce cahier, sans copies d’anime connu
-Pour enfants et ados – Dès 6 ans, idéal pour stimuler créativité et imagination
-Petit plus : Les pages comportent des bulles de dialogue vides pour inventer ses propres répliques et rendre l’histoire encore plus vivante !

Offrez à vos enfants un moment créatif unique : ils colorient, inventent et deviennent les auteurs de leur propre manga.`,
  "Tome 6 – Bienvenue dans l'univers du kawaii à colorier": `Bienvenue dans l’univers du Kawaii à colorier !
Cahier de coloriage mignon avec animaux, desserts et personnages adorables
Un cahier trop mignon rempli d’animaux kawaii, de desserts rigolos et d’objets souriants – Pour enfants et ados

Plonge dans un monde tendre et joyeux avec ce cahier de coloriage kawaii !
Animaux craquants, desserts rigolos et personnages trop mignons t’attendent pour créer ton univers coloré.

Ce cahier de coloriage unique plonge les enfants et adolescents dans un monde plein de douceur, de bonne humeur et de créativité.

À l’intérieur, tu trouveras :
-Animaux adorables : renards, chats, lapins, licornes…
-Desserts rigolos : donuts, cupcakes, glaces et sucreries kawaii.
-Objets souriants & personnages : crayons joyeux, étoiles brillantes, fées, filles et garçons kawaii.
-Le cahier commence par des dessins simples aux contours épais (idéal pour débutants et jeunes enfants), puis la difficulté augmente progressivement avec des contours plus fins et des illustrations plus détaillées.
Ainsi, l’enfant progresse tout en s’amusant, jusqu’à colorier de véritables petites scènes kawaii complètes.

Pourquoi choisir ce cahier ?
-Univers kawaii complet – Animaux, desserts et personnages trop mignons.
-Progressif et ludique – Commence simple et évolue vers des dessins plus détaillés.
-Pour enfants et ados – Dès 6 ans, mais convient aussi aux adultes fans de kawaii.
-Adapté à tous les outils – Feutres, crayons de couleur, pastels.
-Grand format – Papier blanc avec grands dessins clairs et faciles à colorier.

Caractéristiques :
-Dessins adorables – Animaux, desserts rigolos et objets souriants
-Style kawaii – Univers tendre, joyeux et 100 % mignon
-Pour enfants, ados et adultes fans de kawaii
-Progressif – Dessins simples pour débutants puis plus détaillés
-Grand format – Papier blanc, idéal pour feutres et crayons`,
  "Tome 7 – J'apprends l'empathie en coloriant": `J’apprends l’empathie en coloriant

Un cahier unique pour découvrir l’empathie en s’amusant !
À travers 72 pages de coloriage variées, ce livre aide les enfants à comprendre ce que ressentent les autres et à développer une valeur essentielle : l’empathie. Consoler un ami, partager ses jouets, encourager un camarade, écouter avec attention… autant de petites scènes à colorier qui rendent l’apprentissage concret, amusant et bienveillant.

Pourquoi ce cahier plaît autant aux enfants et aux parents ?
-Un sommaire clair qui introduit l’empathie comme un “super-pouvoir du cœur”.
-Un poème enfantin qui explique avec douceur ce qu’est l’empathie.
-42 pages “L’empathie, c’est…” : de petites phrases à la première personne accompagnées d’illustrations kawaii (aider, partager, consoler, écouter, sourire…).
-12 pages de phrases positives à colorier avec leur dessin associé pour ancrer la bienveillance.
-6 scènes libres pleines d’amour et de tendresse à colorier.
-5 mandalas en forme de cœur fleuri pour se remplir d’amour et de sérénité.
-4 pages spéciales “Météo du cœur” pour exprimer ses émotions et comprendre celles des autres en couleurs.
-Une page finale de félicitations illustrée, qui valorise l’enfant et célèbre ses progrès.

Un cahier complet qui mêle coloriage, poésie, activités émotionnelles et apprentissage des valeurs.

Caractéristiques du cahier :
-72 pages variées et originales
-Grands contours noirs faciles à colorier
-Style kawaii mignon et joyeux
-Format 21,59 x 27,94 cm (8,5 x 11 pouces), idéal pour les enfants
-Convient dès 4 ans, parfait jusqu’à 10 ans

Collection À mes petits écoliers : une série de cahiers éducatifs qui allient apprentissage des valeurs et plaisir du coloriage (empathie, bienveillance, respect, émotions…).

Un livre parfait pour la maison, l’école ou en cadeau, afin d’aider les enfants à mieux vivre ensemble, tout en s’amusant !`,
  "Tome 8 – J'apprends la bienveillance en coloriant": `J’apprends la bienveillance en coloriant
La bienveillance, ça se colorie et ça se vit !
À travers des dessins kawaii, des mots doux et des activités ludiques, ce cahier apprend aux enfants à être gentils, respectueux et heureux ensemble.

Découvre la bienveillance en t’amusant !
À travers 72 pages de coloriage, ce cahier aide les enfants à comprendre et pratiquer la gentillesse au quotidien : dire bonjour, partager, remercier, aider, consoler… 
Chaque petite action devient une aventure joyeuse grâce aux illustrations kawaii, aux phrases positives et aux activités ludiques.

Ce que les enfants vont adorer :
-Un poème enfantin qui explique simplement ce qu’est la bienveillance.
-45 pages “Être bienveillant, c’est…” : des phrases à la première personne avec une scène kawaii à colorier (dire merci, partager, respecter la nature, encourager, consoler…).
-9 pages de phrases positives à colorier, illustrées par des dessins mignons, pour ancrer la bienveillance.
-5 pages de coloriages libres, pleins de douceur et de scènes d’amitié kawaii.
-Une activité originale : la boîte magique des mots bienveillants (vers soi et vers les autres), pour apprendre à cultiver la gentillesse chaque jour.
-4 pages de mandalas fleuris et décorés de cœurs, parfaits pour se détendre et exprimer sa créativité.
-Une grande page finale de félicitations qui célèbre l'apprentissage de l’enfant avec joie et encouragement.
-Un cahier complet qui mêle coloriage, poésie, créativité et apprentissage des valeurs.

Caractéristiques du cahier :
-72 pages variées et originales
-Grands contours noirs faciles à colorier
-Illustrations kawaii mignonnes et expressives
-Format 21,59 x 27,94 cm (8,5 x 11 pouces)
-Convient dès 4 ans, parfait jusqu’à 10 ans

Collection À mes petits écoliers : des cahiers éducatifs qui aident les enfants à découvrir les valeurs essentielles (empathie, bienveillance, respect, émotions…) tout en s’amusant.

Un livre idéal pour la maison, l’école ou en cadeau, pour apprendre à être doux, respectueux et heureux ensemble.`,
  "Tome 9 – J'apprends le respect et le courage (anti-harcèlement)": `J’apprends le respect et le courage en coloriant

À travers 72 pages kawaii et ludiques, ce cahier aide les enfants à dire NON au harcèlement, à reconnaître les situations injustes, à exprimer leurs émotions, à trouver des solutions positives : dire STOP, demander de l’aide, défendre un ami, s’affirmer et gagner confiance en eux. 

Colorie des scènes du quotidien, des phrases positives, des mandalas protecteurs et des activités créatives pour devenir un vrai super-héros du respect et du courage.

Un cahier unique pour apprendre le respect, le courage et la confiance en soi en s’amusant !
Ce que les enfants vont découvrir :
-Un poème enfantin comprendre le respect, le courage, la solidarité et l'importance d'avoir en confiance en soi.
-41 scènes de la vie quotidienne à colorier : entraide, défense face aux moqueries, confiance en soi, respect des autres.
-10 phrases positives à colorier pour renforcer le courage et l’estime de soi.
-5 coloriages libres kawaii autour de l'harcèlement, l’amitié et de la solidarité.
-4 activités créatives uniques :
  -Ma météo du cœur (exprimer ses émotions).
  -Mon bouclier du respect et du courage (se protéger).
  -Ma couronne du courage (valoriser ses forces).
  -Mon cercle des alliés (trouver ses soutiens).
-Des mandalas protecteurs avec cœurs, étoiles et boucliers pour se concentrer et se détendre.
-Une grande page de félicitations, pour célébrer les progrès et valoriser chaque enfant devenu un super-héros du respect et du courage.

Un cahier complet qui associe coloriage, activités créatives et apprentissage des valeurs pour donner aux enfants des outils concrets contre le harcèlement.

Caractéristiques du cahier
-72 pages variées et originales.
-Grands contours noirs faciles à colorier.
-Style kawaii mignon, joyeux et expressif.
-Format 21,59 x 27,94 cm (8,5 x 11 pouces), idéal pour les enfants.
-Convient dès 5 ans, parfait jusqu’à 11 ans.

Collection À mes petits écoliers : des cahiers éducatifs et ludiques qui transmettent des valeurs essentielles et accompagnent l’enfant dans ses apprentissages.

On y trouve des thèmes variés : empathie, bienveillance, respect et émotions, mais aussi alphabet, couleurs, chiffres et nombres, sans oublier le divertissement créatif avec mandalas, kawaii et manga.

Un outil indispensable pour accompagner les enfants à l’école, à la maison ou en cadeau, afin de développer le respect, la confiance en soi et dire NON au harcèlement.`,
  "Tome 10 – J'apprends à m'organiser en coloriant": `J’apprends à m’organiser en coloriant.

Un cahier unique pour apprendre à s’organiser tout en s’amusant !

À travers 72 pages joyeuses et variées, ton enfant découvre que l’organisation, c’est une clé du bien-être et de la sérénité. Ranger son cartable, planifier ses activités, faire ses devoirs, trouver du temps pour jouer et se reposer… 
tout devient plus facile grâce à des pages à colorier pleines de sens et de bonne humeur !

Pourquoi ce cahier plaît autant aux enfants et aux parents ?
-Un poème inspirant qui montre que s’organiser, c’est aussi apprendre à se sentir bien.
-40 pages de scènes du quotidien Kawaii à colorier pour comprendre l’importance de l’équilibre entre école, maison, loisirs et repos.
-10 pages de phrases positives à colorier pour ancrer la confiance, la sérénité et la motivation illustrés par des scènes Kawaii.
-5 pages de coloriages libres liées à l'organisation.
-12 pages d'activités créatives et ludiques :
  -Ma météo du cœur (mon humeur et mon organisation)
  -Mon code couleur personnel
  -Mon planning (planifier ma semaine)
  -Ma to-do list (gérer mes tâches)
  -Mes notes efficaces (retenir l’essentiel)
  -Mon bilan du jour (réussites et améliorations)
-4 pages de mandalas de l’équilibre avec symboles d’organisation, pour se détendre et se recentrer après une journée bien remplie.
Une grande page finale de félicitations, pour valoriser la progression et célébrer les petits succès du quotidien.

5 à 10 minutes par jour suffisent !
Colorie une page ou réalise une activité à ton rythme.
Découvre une activité à la fois (météo du cœur, to-do list, planning...) et garde-la quelques jours pour l’essayer dans ta vie quotidienne.
Quand une habitude devient facile, passe à la suivante !

💬 Astuce parents :
-Encouragez votre enfant à choisir la page du jour selon son humeur.
-Laissez-le s’approprier les outils : code couleur, to-do list, routine.
-Valorisez chaque réussite : “Tu as bien préparé ton sac !” vaut tous les compliments du monde.

Ce que ton enfant va apprendre à travers ce cahier :
-À mieux s’organiser et gagner du temps.
-À équilibrer école, maison, loisirs et repos.
-À gérer ses émotions et à rester calme.
-À planifier, anticiper et se responsabiliser.
-À cultiver confiance et autonomie dans la bonne humeur.

Caractéristiques du cahier :
-72 pages éducatives et variées.
-Grands contours noirs faciles à colorier.
-Illustrations kawaii expressives et apaisantes.
-Activités créatives et mandalas relaxants.
-Format 21,59 x 27,94 cm (8,5 x 11 pouces).
-Convient dès 6 ans, parfait jusqu’à 12 ans.

Un livre idéal pour :
-la maison,
-le soutien scolaire,
-les moments calmes,
-ou comme cadeau éducatif, ludique et bienveillant.

Collection À mes petits écoliers : des cahiers éducatifs et ludiques qui transmettent des valeurs essentielles et accompagnent l’enfant dans ses apprentissages.

On y trouve des thèmes variés : empathie, bienveillance, respect et émotions, mais aussi alphabet, couleurs, chiffres et nombres, sans oublier le divertissement créatif avec mandalas, kawaii et manga… Et maintenant, organisation et équilibre intérieur !`,
};
export const exercises: Exercise[] = [
  {
    title: "Ma météo du cœur",
    images: ["images/meteo_du_doeur1.png", "images/meteo_du_coeur2.png"],
    description: `Découvrez "Ma météo du cœur", un exercice ludique et bienveillant qui invite l’enfant à explorer et comprendre ses émotions. 
En associant chaque sentiment à une couleur ou un symbole, il apprend à exprimer ce qu’il ressent et à reconnaître les émotions des autres, développant ainsi l’empathie et la communication.

✔ Ce que votre enfant va apprendre :
- Identifier et nommer ses émotions : joie, colère, tristesse, sérénité…
- Développer l’empathie et la bienveillance envers soi et les autres.
- Prendre un moment de calme pour se recentrer et se relaxer.
- Stimuler la créativité et la motricité fine grâce au coloriage.

💖 Idéal pour les enfants dès 3 ans, en autonomie ou accompagné par les parents, cet exercice favorise l’éveil émotionnel et la confiance en soi.`
  },
  {
    title: "Ma boîte magique",
    images: ["images/boite_magique.png", "images/boite_magique1.png"],
    description: `Avec "Ma boîte magique", votre enfant apprend à cultiver l’amour de soi et la gratitude envers les autres de manière ludique et créative. 
En remplissant sa boîte de mots positifs ou de symboles colorés, il valorise ses réussites, reconnaît ses qualités et développe un état d’esprit positif.

✅ Compétences développées :
- Estime de soi et confiance en ses capacités.
- Bienveillance et gratitude envers les proches.
- Créativité et motricité fine grâce aux activités de coloriage.
- Moment de calme et de réflexion personnelle pour se recentrer.

🌈 Un outil parfait pour instaurer un rituel doux et constructif, propice à l’épanouissement émotionnel.`
  },
  {
    title: "Mon bouclier magique",
    images: ["images/bouclier_magique.png"],
    description: `"Mon bouclier magique" aide l’enfant à se protéger des émotions négatives et à renforcer son calme intérieur. 
En coloriant son bouclier personnalisé, il apprend à gérer ses émotions, à se sentir en sécurité et à cultiver la sérénité.

✅ Bienfaits pour l’enfant :
- Gestion des émotions et des situations stressantes.
- Concentration et développement de la patience.
- Créativité et imagination stimulées par le coloriage.
- Moment de relaxation pour se recentrer et se sentir fort.

🌟 Un exercice simple mais puissant pour aider l’enfant à développer son équilibre émotionnel dès le plus jeune âge.`
  },
  {
    title: "Ma couronne magique",
    images: ["images/couronne_magique.png"],
    description: `Avec "Ma couronne magique", l’enfant apprend à reconnaître sa valeur et à renforcer sa confiance en soi. 
Décorer sa couronne devient un moment ludique où il se sent fier, fort et capable de relever de nouveaux défis.

✅ Objectifs de développement :
- Renforcer la confiance et l’estime personnelle.
- Stimuler la créativité et la motricité fine.
- Instaurer un rituel positif et apaisant pour se recentrer.
- Encourager le sentiment de fierté et de réussite.

🌈 Idéal pour les enfants qui souhaitent développer leur assurance et leur autonomie en s’amusant.`
  },
  {
    title: "Le cercle des alliés",
    images: ["images/cercle_des_alliés.png"],
    description: `"Le cercle des alliés" permet à l’enfant d’identifier ses proches de confiance et de construire un réseau de soutien affectif. 
En coloriant et complétant son cercle, il comprend l’importance des relations positives et apprend à partager ses émotions de manière saine.

✅ Ce que l’enfant va apprendre :
- Développer l’empathie et la solidarité.
- Valoriser l’entraide et la coopération.
- Stimuler la créativité et l’attention via le coloriage.
- Renforcer le sentiment de sécurité et d’appartenance.

🌟 Un outil idéal pour renforcer les liens familiaux et amicaux tout en favorisant l’éveil émotionnel.`
  },
  {
    title: "Mon code couleur",
    images: ["images/Organiser2.png"],
    description: `"Mon code couleur" aide l’enfant à organiser ses idées, ses émotions ou ses tâches en associant chaque élément à une couleur. 
Cette approche visuelle facilite la mémorisation, la planification et stimule l’autonomie.

✅ Développement de compétences :
- Organisation et structuration des idées.
- Mémoire visuelle et concentration.
- Créativité et motricité fine.
- Gestion des émotions et des activités quotidiennes de façon ludique.

🌈 Idéal pour introduire la notion d’ordre et de planification dès le plus jeune âge, tout en s’amusant.`
  },
  {
    title: "Mon planning",
    images: ["images/Organiser3.png"],
    description: `"Mon planning" permet à l’enfant de planifier ses journées ou ses activités de manière ludique. 
Colorier et organiser son planning développe la gestion du temps, la responsabilité et la concentration.

✅ Compétences développées :
- Planification et organisation des tâches.
- Gestion du temps et des priorités.
- Autonomie et responsabilisation.
- Créativité et détente à travers le coloriage.

🌟 Un exercice pratique pour apprendre à structurer son quotidien tout en s’amusant.`
  },
  {
    title: "Ma to-do list",
    images: ["images/Organiser4.png"],
    description: `"Ma to-do list" apprend à l’enfant à définir ses objectifs et à suivre leurs accomplissements de manière ludique. 
Colorier sa liste renforce la motivation, l’autonomie et la satisfaction des petites réussites quotidiennes.

✅ Bienfaits :
- Planification et suivi des objectifs.
- Développement de la concentration et de l’autonomie.
- Créativité et plaisir dans le coloriage.
- Encouragement à l’auto-motivation et à la responsabilité.

🌈 Un outil parfait pour donner à l’enfant un sentiment de réussite et de fierté dans ses activités quotidiennes.`
  },
  {
    title: "Mes notes efficaces",
    images: ["images/Organiser5.png"],
    description: `"Mes notes efficaces" accompagne l’enfant dans l’apprentissage de la prise de notes et de la synthèse des idées. 
Colorier et organiser ses notes stimule la concentration, la mémoire et la créativité.

✅ Objectifs éducatifs :
- Structurer et mémoriser les informations.
- Développer l’autonomie et la réflexion personnelle.
- Stimuler la créativité et la motricité fine.
- Favoriser un moment calme et constructif pour apprendre à apprendre.

🌟 Parfait pour apprendre à organiser ses pensées de manière ludique dès le plus jeune âge.`
  },
  {
    title: "Mon bilan du jour",
    images: ["images/Organiser6.png"],
    description: `"Mon bilan du jour" propose à l’enfant de revenir sur sa journée, de noter ses réussites et de réfléchir à ce qu’il souhaite améliorer. 
Cet exercice encourage l’auto-observation, la réflexion positive et la gestion des émotions.

✅ Bienfaits pour l’enfant :
- Développement de la conscience de soi et de la réflexion personnelle.
- Pratique de l’auto-évaluation constructive.
- Créativité et concentration via le coloriage.
- Instaurer un rituel apaisant en fin de journée.

🌈 Idéal pour clôturer la journée avec sérénité, gratitude et amusement.`
  },
];

/*---------------ABOUT----------------------*/
export interface AboutProps {
  books: Book[];
  title?: string;
  subtitle?: string;
  quote?: string;
  amazonLink?: string;
}

/*---------------CONTACT----------------------*/
// export const API_URL = "http://localhost:3000";
export const API_URL = "https://api-a-mes-petits-ecoliers.onrender.com/";

export interface Comment {
  name: string;
  message: string;
}

export interface CommentForm {
  name: string;
  message: string;
}

export interface PrivateForm {
  email: string;
}

export interface ContactProps {
  apiUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/*---------------FOOTER------------*/
export interface FooterProps {
  siteName?: string;
  year?: number;
  showBackToTop?: boolean;
}