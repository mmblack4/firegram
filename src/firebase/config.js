import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_B6UKsU6x3NrqH2W_X9JfEGBxSJUrNHw",
  authDomain: "mmblack-firebase.firebaseapp.com",
  projectId: "mmblack-firebase",
  storageBucket: "mmblack-firebase.appspot.com",
  messagingSenderId: "1023328164523",
  appId: "1:1023328164523:web:f457903770b533460135ee",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const projectStorage = getStorage(firebase);
const projectFirestore = getFirestore(firebase);

export {
  projectStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  projectFirestore,
  collection,
  doc,
  setDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
};
