// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "type-blog-9591d.firebaseapp.com",
  projectId: "type-blog-9591d",
  storageBucket:
    "https://console.firebase.google.com/project/type-blog-9591d/storage/type-blog-9591d.appspot.com/files",
  messagingSenderId: "193634362155",
  appId: "1:193634362155:web:89620253eaca56f87b5b6e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
