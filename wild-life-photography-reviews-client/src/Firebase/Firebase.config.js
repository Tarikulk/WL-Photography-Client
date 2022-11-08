// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdN_ZJQArJjKIZUlRmzRVFUUvXRFslgQ4",
  authDomain: "wl-photography.firebaseapp.com",
  projectId: "wl-photography",
  storageBucket: "wl-photography.appspot.com",
  messagingSenderId: "750075676514",
  appId: "1:750075676514:web:008ea5a6cc890166848e3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;