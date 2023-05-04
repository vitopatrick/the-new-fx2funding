import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyDvMEvjEgjImDVyVNzyIxRMb1QgFfGw_JU",
  authDomain: "fx2funding-6a231.firebaseapp.com",
  projectId: "fx2funding-6a231",
  storageBucket: "fx2funding-6a231.appspot.com",
  messagingSenderId: "895008642888",
  appId: "1:895008642888:web:62373a713f1e623259c57d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);