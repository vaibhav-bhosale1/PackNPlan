
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC49xku4ZQQSleeMZTIqAKBswMkXfzoOK0",
  authDomain: "meetnest-d7231.firebaseapp.com",
  projectId: "meetnest-d7231",
  storageBucket: "meetnest-d7231.firebasestorage.app",
  messagingSenderId: "1045766931338",
  appId: "1:1045766931338:web:3707d882fcc3e1cd55be73",
  measurementId: "G-PKT2100XCP"
};


export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
