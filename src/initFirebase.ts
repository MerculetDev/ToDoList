// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
//import { getAuth } from "@firebase/auth";
//import type { Auth } from "@firebase/auth";
import type { Firestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

//後でコメントアウト外す
//export const auth: Auth = getAuth(app)
export const db: Firestore = getFirestore(app);
