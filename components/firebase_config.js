import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyApAPtXLFyxNMO-L_nhuuPMk20DtIFYkO8",
  authDomain: "knaz-next-js.firebaseapp.com",
  projectId: "knaz-next-js",
  storageBucket: "knaz-next-js.appspot.com",
  messagingSenderId: "55488227079",
  appId: "1:55488227079:web:705896e54b1c41df3a07a2",
  measurementId: "G-VYFVNDQ9B7"
};

const app = initializeApp(firebaseConfig);
 export const authentication =getAuth(app)