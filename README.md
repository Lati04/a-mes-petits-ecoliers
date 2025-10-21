# Cahiers de coloriage éducatifs – "À mes petits écoliers"

Un site et application éducative pour enfants, proposant des **cahiers de coloriage thématiques** et des exercices ludiques pour développer la créativité, la confiance en soi et l’apprentissage des valeurs essentielles.

## Stack technique

### Frontend
- **React 18 + TypeScript (Vite)**  
- **Tailwind CSS** pour le style moderne et responsive  
- Composants principaux :
  - `BookCard`, `CTAButton`, `Section`, `Sidebar`, `Carousel`, `About`, `Contact`
- Modales interactives et animations fluides
- Responsive et mobile-friendly

### Backend
- **Node.js + TypeScript**
- Routes API :
  - `/api/contact` – pour les messages de contact
  - `/api/comments` – pour gérer les commentaires
- Validation et sécurité des données

### Développement
- **npm** pour gérer les dépendances  
- `tsconfig.json` pour la compilation TypeScript  
- `.gitignore` adapté frontend/backend pour éviter les commits inutiles


## Installation

Cloner le repository :

git clone https://github.com/Lati04/a-mes-petits-ecoliers.git
cd site-coloriages
Installer les dépendances :

# Frontend
npm install

# Backend
cd api
npm install

Scripts disponibles

Frontend

npm run dev        # Démarre le projet React en dev
npm run build      # Build du frontend
npm run preview    # Preview du build
Backend

cd api
npm run dev        # Démarre le serveur Node/TS
npm run build      # Build du backend

Structure du projet

/a-mes-petits-ecoliers
├─ src/             # Frontend React
│  ├─ components/
│  ├─ pages/
│  └─ data/
├─ api/             # Backend Node/TypeScript
│  ├─ app/api/
│  │  ├─ contact/route.ts
│  │  └─ comments/route.ts
├─ public/
├─ package.json
├─ tsconfig.json
├─ README.md
└─ .gitignore

Contribuer
Fork le repository

Créer une branche :

git checkout -b feature/ma-fonctionnalité
Commit tes changements :

git commit -am "Ajout de ma fonctionnalité"
Push :

git push origin feature/ma-fonctionnalité
Créer une Pull Request

Licence
MIT License © Latifa