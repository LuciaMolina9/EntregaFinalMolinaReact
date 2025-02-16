
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkoBkZTJe8g0ZfCp2dYe291wZjTRexEXI",
  authDomain: "proyectofinal-ecommerce-8b096.firebaseapp.com",
  projectId: "proyectofinal-ecommerce-8b096",
  storageBucket: "proyectofinal-ecommerce-8b096.firebasestorage.app",
  messagingSenderId: "54347544296",
  appId: "1:54347544296:web:560cb1dbd328fffc36fb5d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);