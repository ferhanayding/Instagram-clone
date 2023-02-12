// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyACuDXdpWSCOntu2R4_pE2-MANTghW_pqg",
  authDomain: "instagram-clone-tailwind-6c585.firebaseapp.com",
  projectId: "instagram-clone-tailwind-6c585",
  storageBucket: "instagram-clone-tailwind-6c585.appspot.com",
  messagingSenderId: "373732590384",
  appId: "1:373732590384:web:d2090edd96c2aab4923ef5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response.user);
  } catch (error) {
    toast.error(error.code);
  }
};
