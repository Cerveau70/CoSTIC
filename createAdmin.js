// Script pour créer un utilisateur admin
// Exécutez ce script avec : node createAdmin.js

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Configuration Firebase (même que dans votre projet)
const firebaseConfig = {
  apiKey: "AIzaSyB_nTyJH_KVU0NjIx-OkDzjHd_R1qTSViA",
  authDomain: "costic-9cff6.firebaseapp.com",
  projectId: "costic-9cff6",
  storageBucket: "costic-9cff6.firebasestorage.app",
  messagingSenderId: "537287537713",
  appId: "1:537287537713:web:a123d8e7e526758947d110",
  measurementId: "G-Y79T1JN18K"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Créer un utilisateur admin
const createAdmin = async () => {
  const email = 'admin@costic2026.com';  // Changez l'email si nécessaire
  const password = 'AdminCostic2026!';   // Changez le mot de passe

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('✅ Utilisateur admin créé avec succès !');
    console.log('📧 Email:', email);
    console.log('🔑 Mot de passe:', password);
    console.log('👤 UID:', userCredential.user.uid);
    console.log('\n🚀 Vous pouvez maintenant vous connecter sur /admin avec ces identifiants');
  } catch (error) {
    console.error('❌ Erreur lors de la création de l\'utilisateur:', error.message);
    if (error.code === 'auth/email-already-in-use') {
      console.log('ℹ️  Cet email est déjà utilisé. Essayez un autre email ou connectez-vous directement.');
    }
  }
};

createAdmin();
