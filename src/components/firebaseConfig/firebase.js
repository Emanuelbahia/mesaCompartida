import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4FXT9jH8X2FGrwjaPzB3vvLqDjZnSqoE",
  authDomain: "dario-web.firebaseapp.com",
  projectId: "dario-web",
  storageBucket: "dario-web.appspot.com",
  messagingSenderId: "859639499471",
  appId: "1:859639499471:web:7f1fc454f49a63d384c5ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportamos la conexion a la base de datos
export const db = getFirestore(app);

//exportamos la autenticacion
export const auth = getAuth(app);
