
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {firebase} from "firebase/firestore";
// import auth from "firebase/app";
// import 'firebase/firebase-firestore';

let firebaseConfig = {
  apiKey: "AIzaSyDYZdJRbwcPuDe-vw4ainlJUb5HiePzxXk",
  authDomain: "mytasks-60e7a.firebaseapp.com",
  projectId: "mytasks-60e7a",
  storageBucket: "mytasks-60e7a.appspot.com",
  messagingSenderId: "735808346088",
  appId: "1:735808346088:web:acfd94131a9568c0ecf65d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const db = app.firestore();
