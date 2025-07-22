// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHeK9ZFNsOTgCZUG1tYOZF_dCgyNAKIfY",
  authDomain: "kodlab-589fc.firebaseapp.com",
  projectId: "kodlab-589fc",
  storageBucket: "kodlab-589fc.firebasestorage.app",
  messagingSenderId: "908798286954",
  appId: "1:908798286954:web:6c21995081110ffab13e13",
  measurementId: "G-M707WCCHL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
export default app; 