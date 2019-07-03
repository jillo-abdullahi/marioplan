import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAlhbergCOsmBoE5jHok16gOCZJefLIR70",
    authDomain: "marioplan-f930a.firebaseapp.com",
    databaseURL: "https://marioplan-f930a.firebaseio.com",
    projectId: "marioplan-f930a",
    storageBucket: "",
    messagingSenderId: "705809517773",
    appId: "1:705809517773:web:b0b371fe9fc919cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;