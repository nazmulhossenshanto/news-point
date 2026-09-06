// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgTn9TApm4KXFkOHjOBiXSDnCJ0_TbBg4",
  authDomain: "news-point-42b66.firebaseapp.com",
  projectId: "news-point-42b66",
  storageBucket: "news-point-42b66.firebasestorage.app",
  messagingSenderId: "325240668316",
  appId: "1:325240668316:web:39776086d70bb736eb6d59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);