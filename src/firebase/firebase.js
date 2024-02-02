// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDvlsPwttLVWvM9go-_FiNmrPOAgsSkHYA",
  authDomain: "instagram-db-2b24d.firebaseapp.com",
  projectId: "instagram-db-2b24d",
  storageBucket: "instagram-db-2b24d.appspot.com",
  messagingSenderId: "941452231764",
  appId: "1:941452231764:web:ff5187b96acd35b62599c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage}