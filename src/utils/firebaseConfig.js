import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCinlYkhjHeZAstlOdFKhiWovIBCO5AsBc",
  authDomain: "quizgrad-14393.firebaseapp.com",
  projectId: "quizgrad-14393",
  storageBucket: "quizgrad-14393.firebasestorage.app",
  messagingSenderId: "983968940204",
  appId: "1:983968940204:web:99ff8a7f40382c0a9b1f09",
  measurementId: "G-G1LLFYEY1S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
