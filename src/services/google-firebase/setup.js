import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Firebase Setup
const firebaseConfig = require('./firebase_config.json');
firebase.initializeApp(firebaseConfig);

// Firebase product objects
export var auth = firebase.auth();
export var db = firebase.firestore();