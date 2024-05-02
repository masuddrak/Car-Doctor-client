// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIS0MVkH4gnVCnC53s1NihvExVYswd5bg",
  authDomain: "car-doctor-3bdb3.firebaseapp.com",
  projectId: "car-doctor-3bdb3",
  storageBucket: "car-doctor-3bdb3.appspot.com",
  messagingSenderId: "889928903347",
  appId: "1:889928903347:web:8a07e911cadf41e9445ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
