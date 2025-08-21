# 🗳️ Alexandre Teo – Loyola Campaign Website

**Type:** Political Campaign Website  
**Candidate:** Alexandre Teo  
**Position:** Candidate for City Councillor, Loyola District – Montreal  
**Party:** Ensemble Montréal  
**Site Structure Inspired by:** [Zohran for NYC (FR)](https://www.zohranfornyc.com/fr)  
**Built with:** Bolt.new  

---

## 🌐 Languages

- **Default:** Français (FR)  
- **Option:** English (EN) via toggle in header/footer  
- Bilingual support across all sections

---

## 🎨 Branding

**Colors (from Ensemble Montréal site):**
- **Primary Blue:** `#292B87`
- **Secondary Light Blue:** `#0090D1`
- **Background Grey:** `#F7F7F7`
- **Text Black:** `#1C1C1C`
- **White:** `#FFFFFF`

**Fonts:**
- Titles: Poppins or Montserrat
- Body: Open Sans or Lato

---

## 🧭 Site Architecture & Content

### 1. Header (Sticky Navigation)
- Logo text: **Alexandre Teo – Ensemble Montréal**
- Navigation links (FR):
  - À propos | Plateforme | Soutiens | Médias | Bénévolat | Faire un don
- Language toggle (FR/EN)
- Structure identical to Zohran site :contentReference[oaicite:1]{index=1}

---

### 2. Hero Section
- Quotes section replicating Zohran:
  > “This campaign is for every person who believes in the dignity of their neighbors…”  
  becomes in French:
  > “Cette campagne est pour chaque personne qui croit en la dignité de ses voisins…”
- Center-aligned, clean design, call‑to‑action buttons (“S’impliquer” / “Faire un don”) :contentReference[oaicite:2]{index=2}

---

### 3. About Section (“Meet Zohran”)
- Titled **“Rencontrez Alexandre”**
- Biography in full-length paragraphs, image included
- Mirrors Zohran’s format: intro plus achievements :contentReference[oaicite:3]{index=3}

---

### 4. Platform Section
- Main Title: **“New York is too expensive…“** → **« Montreal mérite mieux : voici nos priorités pour Loyola »**
- Eight policy sub-sections as cards, matching Zohran’s eight blocks: logement, transit gratuit, etc. :contentReference[oaicite:4]{index=4}

---

### 5. Endorsements Section
- Titled **“Ils nous soutiennent”**, with a list grouped by category (citizens, associations, syndicats)
- Format: bold name + affiliation, like Zohran :contentReference[oaicite:5]{index=5}

---

### 6. Media/Press Section
- Titled **“Dans les médias”**
- Displays article cards: title, excerpt, “Lire plus” link
- Mirrors Zohran’s press layout :contentReference[oaicite:6]{index=6}

---

### 7. Volunteer Section
- Titled **“Rejoignez le mouvement”**
- Invitation to participate, with a volunteer sign-up form or redirect
- Parallels Zohran’s “Join Zohran for NYC” section :contentReference[oaicite:7]{index=7}

---

### 8. Footer
- Contact info + social icons (LinkedIn, Facebook, Instagram, X)
- Legal mentions
- Language switch control

---

## ⚙️ Features & Technical

- Sticky navigation with smooth scroll
- Bilingual content potential via translation files or conditional rendering
- Mobile-first responsive layout; hamburger menu for small screens
- Alternating background sections (white / light grey / blue)
- Rounded buttons with hover transitions
- SEO-focused: metadata includes “Loyola Montréal”, candidate name
- WCAG 2.1 compliance (contrast ratios, focusable elements)
- Optimized images (lazy-loaded, compressed)

---

## 📝 Next Steps

1. **Finaliser le contenu français & anglais** :
   - Bio détaillée
   - Texte des priorités (8 blocs)
   - Citations de soutiens
   - Résumés d’articles press/media

2. **Intégration** :
   - Formulaire de bénévolat
   - Page de dons ou connexion à une plateforme tierce

3. **Traduction** :
   - Préparer fichiers `fr.json` / `en.json`
   - Implémenter le toggle de langue

4. **Test & Déploiement** :
   - Tester mobile, tablettes, desktop
   - Export Bolt.new → HTML/Netlify/Vercel

5. **Maintenir & mettre à jour** :
   - Ajout des dernières actualités locales
   - Rafraîchissement des soutiens, visuels, et donation links

---

## 🔗 Références

- Zohran for NYC – homepage & structure :contentReference[oaicite:8]{index=8}  
- Zohran – endorsements list :contentReference[oaicite:9]{index=9}  
- Media articles structure :contentReference[oaicite:10]{index=10}

---

## 🚀 Fonctionnalités Récentes

- ✅ **Vote Citoyen en temps réel** - Système de vote fonctionnel avec base de données Supabase
- ✅ **Interface responsive optimisée** - Expérience mobile améliorée  
- ✅ **Gestion d'erreur robuste** - Application stable même en cas de problème réseau
- ✅ **Déploiement Netlify** - Site en production sur alexforloyola.com

---

## 👥 Maintainer

- **Contact campagne** : alexandre.teodoresco@ensemblemtl.org  
- **Web team** : [Nom de l’agence ou développeur]  
- **Mis à jour** : 05 juillet 2025
