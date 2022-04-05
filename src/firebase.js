// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEZtTOdhzErGIlUj5SL03Ff6mZdJu8Wug",
  authDomain: "react-login-authenticate.firebaseapp.com",
  projectId: "react-login-authenticate",
  storageBucket: "react-login-authenticate.appspot.com",
  messagingSenderId: "647206189481",
  appId: "1:647206189481:web:4fac49e19718e78fda2cb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}
