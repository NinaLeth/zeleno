// Kræver installation "npm install firebase"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhspgqVnYx0_k1RyATJI6MQT7TU3LBwko",
  authDomain: "zeleno-dc235.firebaseapp.com",
  databaseURL: "https://zeleno-dc235-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zeleno-dc235",
  storageBucket: "zeleno-dc235.appspot.com",
  messagingSenderId: "1023290265684",
  appId: "1:1023290265684:web:5ae47f13287fdb82c09dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
