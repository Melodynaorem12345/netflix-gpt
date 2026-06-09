// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD27CVpqqwkJp1F7gmAMpAQJjJDHo4VNp8",
  authDomain: "netflixgpt-3bded.firebaseapp.com",
  projectId: "netflixgpt-3bded",
  storageBucket: "netflixgpt-3bded.firebasestorage.app",
  messagingSenderId: "865408250991",
  appId: "1:865408250991:web:c5dfebeb826f1c4678899a",
  measurementId: "G-P6E7V7BWKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();