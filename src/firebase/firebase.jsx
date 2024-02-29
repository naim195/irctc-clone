// firebase.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz-LGDxDns-7YumXZCOh1rkfuVi5eKn64",
  authDomain: "irctc-clone-df22b.firebaseapp.com",
  projectId: "irctc-clone-df22b",
  storageBucket: "irctc-clone-df22b.appspot.com",
  messagingSenderId: "847051572226",
  appId: "1:847051572226:web:68b097c0ef52fa6356d31b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

