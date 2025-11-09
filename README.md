# CoSTIC 2026 - Colloque Scientifique sur les TIC

<div align="center">

![CoSTIC 2026](https://img.shields.io/badge/CoSTIC-2026-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-12.3.0-FFCA28?style=for-the-badge&logo=firebase)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite)

**Site web officiel du Colloque Scientifique sur les Technologies de l'Information et de la Communication (CoSTIC 2026)**

*Interface moderne, animée et responsive avec gestion complète des soumissions d'articles et inscriptions*

[ Démo Live](https://costic2026.web.app) • [Documentation](#-documentation) • [Signaler un bug](https://github.com/cerveau70/costic-2026/issues) • [Suggestions](https://github.com/cerveau70/costic-2026/issues)

</div>

---

## Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Technologies utilisées](#️-technologies-utilisées)
- [Démarrage rapide](#-démarrage-rapide)
- [Installation](#-installation)
- [Configuration](#️-configuration)
- [Fonctionnalités détaillées](#-fonctionnalités-détaillées)
- [Développement](#-développement)
- [Responsive Design](#-responsive-design)
- [Internationalisation](#-internationalisation)
- [Sécurité](#-sécurité)
- [Structure du projet](#-structure-du-projet)
- [Contribution](#-contribution)
- [Licence](#-licence)
- [Auteur](#-auteur)

---

## Fonctionnalités

### Fonctionnalités principales

- **Interface utilisateur moderne et animée** avec Framer Motion
- **Soumission d'articles gratuite** avec upload de fichiers PDF
- **Système d'inscription avec paiement** via GeniusPay (Wave)
- **Validation en temps réel** des formulaires avec messages d'erreur clairs
- **Dashboard administrateur** complet et sécurisé
- **Multilingue** (Français/Anglais) avec i18next
- **Design responsive** pour tous les appareils
- **Animations fluides** et transitions élégantes
- **Compteur de visiteurs** en temps réel
- **Newsletter** fonctionnelle
- **Gestion des partenaires** avec carrousel animé
- **Timeline interactive** des événements
- **Calendrier avancé** avec dates importantes

### Animations et effets

-  **Animations au scroll** avec Intersection Observer
-  **Transitions fluides** entre les sections
-  **Carrousels animés** pour les partenaires et comités
-  **Compteur de compte à rebours** pour l'événement
-  **Effets de parallaxe** et animations CSS
-  **Indicateurs de progression** visuels

### Système de paiement

-  **Paiement sécurisé** via GeniusPay (Wave)
-  **Tarifs différenciés** (Chercheur/Étudiant)
-  **Validation des paiements** en temps réel
-  **Notifications de confirmation** après paiement
-  **Redirection automatique** après paiement réussi

---

##  Technologies utilisées

### Frontend

- **React 18.3.1** - Bibliothèque UI
- **TypeScript 5.8.2** - Typage statique
- **Vite 6.2.0** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion 12.23.24** - Animations fluides
- **React Router DOM 7.9.4** - Routing
- **i18next 25.6.0** - Internationalisation

### Backend & Services

- **Firebase 12.3.0**
  - Firestore - Base de données NoSQL
  - Storage - Stockage de fichiers
  - Authentication - Authentification
- **GeniusPay API** - Paiements en ligne (Wave)

### Outils de développement

- **TypeScript** - Typage statique
- **ESLint** - Linting
- **Vite** - Build tool et dev server

---

## Démarrage rapide

### Prérequis

- **Node.js** >= 16.x
- **npm** ou **yarn**
- **Compte Firebase** (gratuit)
- **Compte GeniusPay** (pour les paiements)

### Installation en 3 étapes

```bash
# 1. Cloner le repository
git clone https://github.com/cerveau70/costic-2026---colloque-scientifique-sur-les-tic.git
cd costic-2026---colloque-scientifique-sur-les-tic

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp env.example .env
# Éditer .env avec vos clés API
```

### Lancer le projet

```bash
# Mode développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

Le site sera accessible sur `http://localhost:3000`

---

## Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=votre_clé_api_firebase
VITE_FIREBASE_AUTH_DOMAIN=votre_projet.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=votre_id_projet
VITE_FIREBASE_STORAGE_BUCKET=votre_projet.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
VITE_FIREBASE_APP_ID=votre_app_id
VITE_FIREBASE_MEASUREMENT_ID=votre_measurement_id

# GeniusPay Configuration
VITE_GENIUSPAY_API_URL=https://pay.genius.ci
VITE_GENIUSPAY_API_KEY=votre_clé_api_geniuspay
VITE_GENIUSPAY_SECRET_KEY=votre_clé_secrète_geniuspay
```

### Configuration Firebase

1. Créez un projet sur [Firebase Console](https://console.firebase.google.com/)
2. Activez **Firestore Database**, **Storage** et **Authentication**
3. Dans Authentication, activez la méthode **Email/Password**
4. Créez un utilisateur admin pour accéder au dashboard
5. Copiez vos clés de configuration dans `.env`

### Configuration GeniusPay

1. Créez un compte sur [GeniusPay](https://pay.genius.ci)
2. Obtenez vos clés API (API Key et Secret Key)
3. Ajoutez-les dans le fichier `.env`

---

##  Fonctionnalités détaillées

### Soumission d'articles

- **Gratuite** pour tous les participants
- Upload de fichiers **PDF uniquement**
- Validation des champs en temps réel
- Sauvegarde automatique dans Firebase Storage
- Métadonnées stockées dans Firestore

### Inscription et paiement

- **Tarifs différenciés** :
  - Chercheur/Professionnel : **50 000 FCFA**
  - Étudiant : **35 000 FCFA**
- Validation en temps réel de l'email et du nom
- Paiement sécurisé via **GeniusPay (Wave)**
- Confirmation automatique après paiement
- Redirection vers la plateforme après paiement réussi

### Dashboard administrateur

Accès via `/admin` avec authentification Firebase :

- **Gestion des articles** : Voir, télécharger tous les articles soumis
- **Gestion des participants** : Liste des participants ayant payé
- **Statistiques** : Nombre d'articles et participants
- **Gestion des partenaires** : Ajouter, modifier, supprimer des partenaires

###  Internationalisation

- **Français** (par défaut)
- **Anglais**
- Détection automatique de la langue du navigateur
- Changement de langue dynamique

---

## Développement

### Structure des composants

# Mode développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run previewroduction
npm run build        # Crée un build optimisé
npm run preview      # Prévisualise le build de production

# Déploiement Firebase
firebase deploy      # Déploie sur Firebase Hosting
```

### Bonnes pratiques

- **Validation en temps réel** des formulaires
- **Gestion d'erreurs** complète avec messages clairs
- **TypeScript strict** pour la sécurité du code
- **Composants réutilisables** et modulaires
- **Animations performantes** avec Framer Motion
- **Responsive design** mobile-first

---

## Responsive Design

Le site est entièrement responsive et optimisé pour :

- **Mobile** (< 768px)
- **Tablette** (768px - 1024px)
- **Desktop** (> 1024px)
- **Large Desktop** (> 1440px)

### Breakpoints Tailwind

```css
sm: 640px   /* Petits écrans */
md: 768px   /* Tablettes */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
2xl: 1536px /* Extra Large */
```

---

##  Internationalisation

### Ajout d'une nouvelle langue

1. Ajoutez les traductions dans `i18n.ts`
2. Créez un objet de traduction pour la nouvelle langue
3. Ajoutez la langue dans la configuration i18next

### Utilisation dans les composants

```typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <h1>{t('welcome_message')}</h1>;
};
```

---

##  Sécurité

### Bonnes pratiques implémentées

- **Variables d'environnement** pour les clés API
- **Validation côté client** et serveur
- **Authentification Firebase** pour l'admin
- **Règles Firestore** pour la sécurité des données
- **HTTPS** obligatoire en production
- **Validation des emails** avec regex
- **Sanitization** des entrées utilisateur

###  Important

- **Ne jamais commiter** le fichier `.env`
- **Utiliser des clés de test** en développement
- **Activer les règles Firestore** en production
- **Configurer CORS** correctement

---

##  Structure du projet

# Firebase Configuration
VITE_FIREBASE_API_KEY=votre_clé_api_firebase
VITE_FIREBASE_AUTH_DOMAIN=votre_projet.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=votre_id_projet
VITE_FIREBASE_STORAGE_BUCKET=votre_projet.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
VITE_FIREBASE_APP_ID=votre_app_id
VITE_FIREBASE_MEASUREMENT_ID=votre_measurement_id

# GeniusPay Configuration
VITE_GENIUSPAY_API_URL=https://pay.genius.ci
VITE_GENIUSPAY_API_KEY=votre_clé_api_geniuspay
VITE_GENIUSPAY_SECRET_KEY=votre_clé_secrète_geniuspay
- S'assurer que le code compile sans erreurs
- Tester sur différents navigateurs


##  Remerciements

- **LASTIC** - Organisation du colloque
- **ESATIC** - Institution d'accueil
- **Firebase** - Infrastructure backend
- **GeniusPay** - Solution de paiement
- **Tous les contributeurs** qui ont participé au projet

---

##  Support

Pour toute question ou problème :

- **Email** : costic2026@esatic.edu.ci
- **Site web** : [https://costic2026.web.app](https://costic2026.web.app)
- **Issues** : [GitHub Issues](https://github.com/cerveau70/costic-2026/issues)

---

# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Crée un build optimisé
npm run preview      # Prévisualise le build de production

# Déploiement Firebase
firebase deploy      # Déploie sur Firebase Hosting

sm: 640px   /* Petits écrans */
md: 768px   /* Tablettes */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
2xl: 1536px /* Extra Large */


costic-2026---colloque-scientifique-sur-les-tic/






<img width="1440" height="789" alt="Capture d’écran 2025-11-09 à 11 54 07" src="https://github.com/user-attachments/assets/654b18b1-4115-4596-96d3-7b70601c6ae8" />




---

##  Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

---

##  Auteur

<div align="center">

**Alloma Jean-Luc** @ **Cerveau70**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cerveau70)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@costic2026.com)

*Développeur Full-Stack passionné par les technologies modernes et les interfaces utilisateur innovantes*

</div>

---

<div align="center">

  **N'oubliez pas de mettre une étoile si ce projet vous a aidé !** 

</div>


