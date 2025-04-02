// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGEAWdCZ34OVxxGh5Y-wPk7RgQrx8ptiQ",
  authDomain: "login-a7179.firebaseapp.com",
  projectId: "login-a7179",
  storageBucket: "login-a7179.firebasestorage.app",
  messagingSenderId: "453679924436",
  appId: "1:453679924436:web:3f13dd87e85a7ba95ae741",
  measurementId: "G-VH4Q006PSF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
