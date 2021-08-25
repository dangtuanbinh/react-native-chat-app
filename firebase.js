// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase"
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD_VVsKM7Olx5jY2KepE_7ck0-ne-ItKeM",
    authDomain: "chat-app-54948.firebaseapp.com",
    projectId: "chat-app-54948",
    storageBucket: "chat-app-54948.appspot.com",
    messagingSenderId: "988872131551",
    appId: "1:988872131551:web:63865f0351eff0fa19fa6a",
    measurementId: "G-SL4T2CTG14"
  };

  let app;

  if(firebase.app.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app()
  }
