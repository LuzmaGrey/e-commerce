// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf-a9pOzEj6Mpg9DYvL8PFEUGiqMhKv0o",
  authDomain: "pokeshop-1d48f.firebaseapp.com",
  projectId: "pokeshop-1d48f",
  storageBucket: "pokeshop-1d48f.appspot.com",
  messagingSenderId: "529282012615",
  appId: "1:529282012615:web:02901812ff5dc4a559f5e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
