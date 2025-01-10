// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBadf9VOVLBwmM86OWlYazJWIx6Qlv3J_4",
  authDomain: "superwebapp-ared.firebaseapp.com",
  projectId: "superwebapp-ared",
  storageBucket: "superwebapp-ared.firebasestorage.app",
  messagingSenderId: "709611104748",
  appId: "1:709611104748:web:84db50525b91b5fafab8c9",
  measurementId: "G-BNSDBG3BZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;
