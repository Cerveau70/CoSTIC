import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWoMq00y7kIR6QsXO_Z_lwSC6DS2O4K5I",
  authDomain: "costic2026.firebaseapp.com",
  projectId: "costic2026",
  storageBucket: "costic2026.firebasestorage.app",
  messagingSenderId: "1024891143489",
  appId: "1:1024891143489:web:6bd4f6014f16c5e3088dc0",
  measurementId: "G-SE28R81YF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };