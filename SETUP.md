# 🚀 Configuration du Projet CoSTIC 2026

## 📋 Prérequis

- Node.js (version 16 ou plus récente)
- npm ou yarn
- Compte Firebase
- Compte Paystack (pour les paiements)

## 🔧 Installation

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd costic-2026---colloque-scientifique-sur-les-tic
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration des variables d'environnement**
```bash
# Copier le fichier d'exemple
cp env.example .env

# Éditer le fichier .env avec vos vraies clés
nano .env
```

## 🔑 Configuration Firebase

1. Créez un projet sur [Firebase Console](https://console.firebase.google.com/)
2. Activez Firestore Database, Storage et Authentication
3. Dans Authentication, activez la méthode "Email/Password"
4. Créez un utilisateur admin dans Authentication (cet utilisateur pourra se connecter au dashboard)
5. Copiez vos clés de configuration dans le fichier `.env` :

```env
VITE_FIREBASE_API_KEY=votre_clé_api_firebase
VITE_FIREBASE_AUTH_DOMAIN=votre_projet.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=votre_id_projet
VITE_FIREBASE_STORAGE_BUCKET=votre_projet.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
VITE_FIREBASE_APP_ID=votre_app_id
VITE_FIREBASE_MEASUREMENT_ID=votre_measurement_id
```

## 💳 Configuration Paystack

1. Créez un compte sur [Paystack](https://paystack.com/)
2. Obtenez votre clé publique (pk_test_...)
3. Ajoutez-la dans le fichier `.env` :

```env
VITE_PAYSTACK_PUBLIC_KEY=pk_test_votre_clé_publique_paystack
```

## 🏃‍♂️ Lancement du projet

```bash
# Mode développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

## 📊 Structure de la Base de Données Firestore

Le projet utilise les collections suivantes :

### `submissions`
- Documents des soumissions d'articles
- Champs : authorName, authorEmail, affiliation, articleTitle, themeSelect, fileUrl, fileName, submittedAt

### `registrations`
- Documents des inscriptions au colloque
- Champs : name, email, participantType, paymentStatus, amount, currency, registeredAt, paymentReference, paymentDate

### `newsletter_subscriptions`
- Documents des abonnements à la newsletter
- Champs : email, subscribedAt, source

## 🔐 Accès Administrateur

Le système inclut un dashboard administrateur accessible via `/admin` :

### Fonctionnalités Admin
- **Connexion sécurisée** : Authentification Firebase
- **Gestion des articles** : Voir tous les articles soumis
- **Téléchargement** : Télécharger les fichiers PDF des articles
- **Gestion des participants** : Voir la liste des participants ayant payé
- **Statistiques** : Nombre d'articles et participants

### Configuration Admin
1. Allez sur Firebase Console > Authentication
2. Activez la méthode "Email/Password"
3. Créez un utilisateur admin avec email/mot de passe
4. Utilisez ces identifiants pour vous connecter sur `/admin`

## 🔒 Sécurité

- Les clés API sont maintenant dans les variables d'environnement
- Le fichier `.env` ne doit JAMAIS être commité dans Git
- Ajoutez `.env` à votre `.gitignore`

## 🎯 Fonctionnalités Implémentées

### ✅ Fonctionnelles
- ✅ Interface utilisateur complète et responsive
- ✅ **Soumission d'articles GRATUITE** avec upload de fichiers
- ✅ **Paiement obligatoire pour participation** via Paystack
- ✅ Newsletter fonctionnelle
- ✅ Configuration sécurisée avec variables d'environnement
- ✅ **Dashboard administrateur complet**
- ✅ **Authentification admin sécurisée**
- ✅ **Téléchargement des articles par l'admin**
- ✅ **Liste des participants ayant payé**

### 🔄 Améliorations Possibles
- Page de confirmation après paiement
- Gestion des emails de confirmation
- Système de webhooks Paystack
- Notifications en temps réel

## 🐛 Dépannage

### Erreur de connexion Firebase
- Vérifiez vos clés dans le fichier `.env`
- Assurez-vous que Firestore et Storage sont activés

### Erreur Paystack
- Vérifiez votre clé publique Paystack
- Testez avec les cartes de test Paystack

### Problèmes de build
```bash
# Nettoyer le cache
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

Pour toute question technique, contactez :
- Email : costic2026@esatic.edu.ci
- Site : http://costic2026.esatic.ci
