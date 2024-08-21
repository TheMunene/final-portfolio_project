// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP1yxFpvNxn2929GGZF8UyyeyfAvocktY",
  authDomain: "empire-dance.firebaseapp.com",
  projectId: "empire-dance",
  storageBucket: "empire-dance.appspot.com",
  messagingSenderId: "303048486647",
  appId: "1:303048486647:web:8ef00daa419201b5ebadf2",
  measurementId: "G-WM5CC6LEC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

// Export the authentication instance
export { auth };
export default app;
