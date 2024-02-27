// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxCIilPTxzHY5Vu09kLWpjE_DrdNzJRu8",
  authDomain: "irctc-clone-93a17.firebaseapp.com",
  projectId: "irctc-clone-93a17",
  storageBucket: "irctc-clone-93a17.appspot.com",
  messagingSenderId: "764329609406",
  appId: "1:764329609406:web:a1e70da0db5ae287eef6ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
