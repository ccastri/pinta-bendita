// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmaHCuw1JY5FcpX4RtsZE419vmW2Nf224",
    authDomain: "pinta-bendita.firebaseapp.com",
    projectId: "pinta-bendita",
    storageBucket: "pinta-bendita.appspot.com",
    messagingSenderId: "335059131160",
    appId: "1:335059131160:web:66cdc278e0ef36449c5c6d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage }
