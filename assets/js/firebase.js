// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc7hyr1k64BsRgv0n8ZU8fvKVj99rvo9U",
  authDomain: "diario-digital-6e221.firebaseapp.com",
  projectId: "diario-digital-6e221",
  storageBucket: "diario-digital-6e221.appspot.com",
  messagingSenderId: "432925276676",
  appId: "1:432925276676:web:e5fbc379e1bc9e1251d351",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

//Operaciones CRUD
export const createTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTask = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);
