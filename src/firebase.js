import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAv59BX_LfH89Y1U5ezEDHJApxkHl_cKPg",
    authDomain: "clone-353f6.firebaseapp.com",
    projectId: "clone-353f6",
    storageBucket: "clone-353f6.appspot.com",
    messagingSenderId: "1052569403529",
    appId: "1:1052569403529:web:1d800b4f42454cba684658",
    measurementId: "G-1KYNSV7GBC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };