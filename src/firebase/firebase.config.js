

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdgH-yk_7snbicPFQk8b9vznxLCD1ctXw",
  authDomain: "task3-70ed9.firebaseapp.com",
  projectId: "task3-70ed9",
  storageBucket: "task3-70ed9.firebasestorage.app",
  messagingSenderId: "831109098710",
  appId: "1:831109098710:web:07057633158d186e086d77",
  measurementId: "G-LWG71PW6L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export {app,firebaseConfig}