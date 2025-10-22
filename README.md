# 🌿 Europe Rapide Expo – Site Officiel  
**Agencement, menuiserie, stands & design sur mesure**  
Développé par **Jean Danor Beaujour (Bicool)** – Métreur TCE & Développeur React.

---

## 🧭 Vue d’ensemble

Ce site vitrine présente les **réalisations d’Europe Rapide Expo** à travers une galerie interactive développée avec **React** et optimisée pour la performance et la qualité d’image.

Les images sont traitées automatiquement (anti-crénelage, conversion WebP, miniatures) via des **scripts Node.js** utilisant `sharp`.

🧰 Stack principale :
- ⚛️ **React 18 (CRA)**
- 🎨 **CSS + animations personnalisées**
- 🧩 **Sharp** (optimisation images)
- 🚀 **GitHub Pages** pour le déploiement automatique

---

## 📂 Structure du projet

src/
├── App.js
├── index.js
├── index.css
│
├── assets/
│ ├── Atelier/ → Photos d’atelier
│ ├── chantier/ → Photos chantiers réels
│ ├── galerie/ → Galerie de vignettes
│ └── projets/
│ ├── cuisines/
│ │ ├── fixed/ → Images HD WebP corrigées
│ │ ├── thumbs/ → Miniatures (_thumb.webp)
│ │ └── *.jpg|png → Images d’origine
│ ├── dressings/
│ ├── meubles/
│ ├── salons/
│ ├── salle_de_bain/
│ └── savoir_faire/
│
├── components/
│ ├── Footer.js
│ ├── Navbar.js
│ └── ScrollToTop.js
│
├── hooks/
│ └── useScrollAnimation.js
│
├── pages/
│ ├── Home.js
│ ├── Apropos.js
│ ├── Services.js
│ ├── Projet.js → Galerie interactive principale
│ └── Contact.js
│
├── style/
│ ├── home.css
│ ├── apropos.css
│ ├── services.css
│ ├── contact.css
│ └── projet.css
│
└── scripts/
├── fix-images.cjs → Corrige et optimise les images HD
└── make-thumbs.js → Génère automatiquement les miniatures WebP

---

## ⚙️ Installation & développement

### 1️⃣ Installation
```bash
npm install
2️⃣ Lancement en local
bash
Copier le code
npm start
Ouvre automatiquement http://localhost:3000

🖼️ Gestion automatique des images
🔧 Script – Correction & optimisation (fix:images)
Optimise les images d’origine :

Upscale à 2400 px max

Anti-zigzag (flou léger + sharpen)

Conversion WebP (qualité 95%)

Stockage dans fixed/

bash
Copier le code
npm run fix:images
🪞 Script – Génération de vignettes (make:thumbs)
Crée des versions 600 px légères (_thumb.webp) pour la galerie :

bash
Copier le code
npm run make:thumbs
📁 Exemple de résultat :

swift
Copier le code
src/assets/projets/meubles/thumbs/meuble_salon_thumb.webp
src/assets/projets/meubles/fixed/meuble_salon.webp
🧠 Fonctionnement de la galerie (Projet.js)
🔹 Caractéristiques :
Filtrage par catégorie dynamique (cuisines, salons, dressings, etc.)

Effet tilt 3D & hover fluide

Modal responsive pour agrandir l’image

Navigation clavier : ← → Échap

Chargement progressif (loading="lazy")

Combinaison miniature/HD (thumb → full)

🔹 Import automatique :
js
Copier le code
const cuisinesImages = mapThumbsAndFull(
  require.context("../assets/projets/cuisines/thumbs", false, /\.(webp)$/i),
  require.context("../assets/projets/cuisines", false, /\.(jpg|jpeg|png|webp)$/i)
);
💅 Apparence & animations
🎨 style/projet.css

Design moderne inspiré du vert/or Europe Rapide Expo

Animations : zoom, fade, slide-in

Responsive sur mobile / tablette

Boutons de navigation modale fluides

🧭 Navbar.js

Menu fixe avec transition douce au scroll

📩 Contact.js

Formulaire stylé, accessible et responsive

🚀 Déploiement GitHub Pages
🏗️ Build production
bash
Copier le code
npm run build
🌐 Déploiement automatique
bash
Copier le code
npm run deploy
Déployé sur :
🔗 https://beaujour.github.io/site-expo/

📜 Scripts disponibles
Commande	Description
npm start	Lancer le site en local
npm run build	Générer la version production
npm run deploy	Déployer sur GitHub Pages
npm run fix:images	Optimiser les images HD
npm run make:thumbs	Créer les miniatures (_thumb.webp)

⚡ Conseils d’utilisation
🔁 Après ajout de nouvelles images :

bash
Copier le code
npm run fix:images
npm run make:thumbs
🧹 Supprime les anciens /fixed avant de regénérer

⚠️ Utilise uniquement des fichiers .webp pour la performance

🖼️ Taille max recommandée : 3 Mo / image

👨‍💻 Auteur
Jean Danor Beaujour (Bicool)
Métreur TCE – Développeur Web React & Node.js
🏢 Europe Rapide Expo – Agencement & Menuiserie sur mesure
📧 contact@ere91.com
🌐 https://beaujour.github.io/site-expo/
🐙 GitHub – BEAUJOUR

✨ Europe Rapide Expo
L’art de l’agencement sur mesure, allié à la puissance du digital.

markdown
Copier le code

---

🟢 **Instructions finales :**
1. Copie **tout le texte ci-dessus**
2. Colle-le dans ton fichier `README.md` à la racine de ton projet  
3. Sauvegarde et fais un `git add . && git commit -m "Ajout du README complet"`  
4. Puis `git push`

Souhaites-tu que je t’ajoute ensuite une **bannière visuelle** (image d’en-tête README avec le logo “Europ