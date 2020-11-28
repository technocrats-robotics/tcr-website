import firebase from "firebase/app";

import './firebase_config.json'
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = JSON.parse(firebase_config);

firebase.initializeApp(firebaseConfig)