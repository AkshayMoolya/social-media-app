// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdLqOn-w_BwuEhs7vjidQRBWEy32Use28",
  authDomain: "social-media-b4c49.firebaseapp.com",
  projectId: "social-media-b4c49",
  storageBucket: "social-media-b4c49.appspot.com",
  messagingSenderId: "617807161438",
  appId: "1:617807161438:web:eeab2605ac83ad3783eccf",
  measurementId: "G-P1EM269FVV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
