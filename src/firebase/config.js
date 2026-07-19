// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-8bB3CKVXJBdCOjB8HMgnBJb3VSq15QI",
  authDomain: "coffee-house-ecommerce.firebaseapp.com",
  projectId: "coffee-house-ecommerce",
  storageBucket: "coffee-house-ecommerce.firebasestorage.app",
  messagingSenderId: "643960361806",
  appId: "1:643960361806:web:49845c811043d320c9041f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export database connection
export { db };