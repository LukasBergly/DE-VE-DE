// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJGl3lrE70idEAm1DAEXe2CTSg6usN-to",
    authDomain: "de-ve-de-6afae.firebaseapp.com",
    projectId: "de-ve-de-6afae",
    storageBucket: "de-ve-de-6afae.appspot.com",
    messagingSenderId: "847777470674",
    appId: "1:847777470674:web:6510984a3ec2ce829f750b"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }