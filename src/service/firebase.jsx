// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV16EyWknFMQsT-9hdqE2sWDsuqhHblHo",
  authDomain: "coder-flex-69605.firebaseapp.com",
  projectId: "coder-flex-69605",
  storageBucket: "coder-flex-69605.firebasestorage.app",
  messagingSenderId: "361019226508",
  appId: "1:361019226508:web:71eadb2e4f25347de7bea9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
