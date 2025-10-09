import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_nTyJH_KVU0NjIx-OkDzjHd_R1qTSViA",
  authDomain: "costic-9cff6.firebaseapp.com",
  projectId: "costic-9cff6",
  storageBucket: "costic-9cff6.firebaseapp.com",
  messagingSenderId: "537287537713",
  appId: "1:537287537713:web:a123d8e7e526758947d110",
  measurementId: "G-Y79T1JN18K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };