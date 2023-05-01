import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import image from "../json/image.json";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const productsCollection = collection(db, "images");

export const feedProducts = async () => {
  //DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(productsCollection);
  querySnapshot.forEach(async (product) => {
    await deleteDoc(doc(db, "images", product.id));
  });
  // ADD NEW DOCS
  image.forEach(async (product) => {
    console.log(product);
    const docRef = await doc(productsCollection);
    await setDoc(docRef, { ...product, id: docRef.id });
  });
};

export const getProducts = async () => {
    const querySnapshot = await getDocs(productsCollection);
    
    let result = [];
    querySnapshot.forEach(async (product) => {
       await result.push(product.data());
    });
    return result;
 };
