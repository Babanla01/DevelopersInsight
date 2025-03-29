// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-cSEqiuRQCl7_zXT1_lUHRk_Owa0YMis",
  authDomain: "developersinsight-6ae51.firebaseapp.com",
  projectId: "developersinsight-6ae51",
  storageBucket: "developersinsight-6ae51.firebasestorage.app",
  messagingSenderId: "515782358862",
  appId: "1:515782358862:web:17b77be4cbf5e75e67101f",
  measurementId: "G-0P19XWPXTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db , analytics};