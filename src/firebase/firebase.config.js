// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ7UXAmS8DocqYCPPYxSP3oTQaEJTAPG0",
  authDomain: "happy-wedding-assignment.firebaseapp.com",
  projectId: "happy-wedding-assignment",
  storageBucket: "happy-wedding-assignment.appspot.com",
  messagingSenderId: "855561230777",
  appId: "1:855561230777:web:fe1e7bc8f3ffb63c147e68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;