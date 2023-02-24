// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF8z1qkAMx5rVm902Wv-I_PkAA74JBePc",
  authDomain: "note-app-thanhtu.firebaseapp.com",
  projectId: "note-app-thanhtu",
  storageBucket: "note-app-thanhtu.appspot.com",
  messagingSenderId: "589322329470",
  appId: "1:589322329470:web:5bb096d50da731428ea72f",
  measurementId: "G-MK270ET7ZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
