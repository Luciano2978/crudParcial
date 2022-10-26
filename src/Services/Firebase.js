import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDk17wuo3lbbqGjcQyqTBgxkPG_qVAwwyU",
  authDomain: "parcialcrud-98d0a.firebaseapp.com",
  projectId: "parcialcrud-98d0a",
  storageBucket: "parcialcrud-98d0a.appspot.com",
  messagingSenderId: "544230878074",
  appId: "1:544230878074:web:f0b33713c78d4ba5ec84c3",
  measurementId: "G-P1QMK47H89"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fs = getFirestore(app);