import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import "firebase/firestore";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyDYZdJRbwcPuDe-vw4ainlJUb5HiePzxXk",
  authDomain: "mytasks-60e7a.firebaseapp.com",
  projectId: "mytasks-60e7a",
  storageBucket: "mytasks-60e7a.appspot.com",
  messagingSenderId: "735808346088",
  appId: "1:735808346088:web:acfd94131a9568c0ecf65d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const st = getStorage();
export default db;
