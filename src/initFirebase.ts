import { initializeApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChnGny6QwZayxLIyFm1NT5Kj3pEFRqHno",
  authDomain: "to-do-list-37730.firebaseapp.com",
  projectId: "to-do-list-37730",
  storageBucket: "to-do-list-37730.firebasestorage.app",
  messagingSenderId: "900083808583",
  appId: "1:900083808583:web:7ce856c075d99b9482f462",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
