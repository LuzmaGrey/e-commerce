// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDFCr4cn2AD23JPBuSj7R_2XsC5C3IGUo",
  authDomain: "pokecommerce-294e5.firebaseapp.com",
  projectId: "pokecommerce-294e5",
  storageBucket: "pokecommerce-294e5.appspot.com",
  messagingSenderId: "666082055112",
  appId: "1:666082055112:web:74d42d02da9674613166fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
