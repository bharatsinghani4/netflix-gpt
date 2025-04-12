// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-ZR4WKkXFm5fRiP3U6ld2-ppt0VKAp44",
  authDomain: "netflixgpt-28138.firebaseapp.com",
  projectId: "netflixgpt-28138",
  storageBucket: "netflixgpt-28138.firebasestorage.app",
  messagingSenderId: "572175443383",
  appId: "1:572175443383:web:105f260749f213d13c7432",
  measurementId: "G-G8FKE7HSFJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
