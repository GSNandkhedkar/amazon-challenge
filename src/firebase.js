import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJGBThMMWaJMwmKT67nC_Psat8ygXLHYQ",
    authDomain: "challenge-ad6a9.firebaseapp.com",
    projectId: "challenge-ad6a9",
    storageBucket: "challenge-ad6a9.appspot.com",
    messagingSenderId: "785982835901",
    appId: "1:785982835901:web:659108057338341ec4bbd4",
    measurementId: "G-H1XPBTNW47"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };