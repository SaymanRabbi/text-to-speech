// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REAT_APP_authDomain,
  authDomain: process.env.REAT_APP_apiKey,
  projectId: process.env.REAT_APP_storageBucket,
  storageBucket: process.env.REAT_APP_projectId,
  messagingSenderId: process.env.REAT_APP_appId,
  appId: process.env.REAT_APP_messagingSenderId
};
// git check
// Initialize Firebase
const app = initializeApp(firebaseConfig);


