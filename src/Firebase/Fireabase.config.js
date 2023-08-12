// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXqnTqSOwVondfIV8Ch5EfG6PykRNNSpc",
  authDomain: "bismillah-tower.firebaseapp.com",
  projectId: "bismillah-tower",
  storageBucket: "bismillah-tower.appspot.com",
  messagingSenderId: "224984121827",
  appId: "1:224984121827:web:e716a5ec0ba933cadc60d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;