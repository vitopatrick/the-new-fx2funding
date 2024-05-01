import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyAcqUHH6Gk_ObcDTP5x67APVpGQiwm3m5I",
  authDomain: "fx2funding-e66b2.firebaseapp.com",
  projectId: "fx2funding-e66b2",
  storageBucket: "fx2funding-e66b2.appspot.com",
  messagingSenderId: "479241628989",
  appId: "1:479241628989:web:25232d24b19f4b720d2954",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);