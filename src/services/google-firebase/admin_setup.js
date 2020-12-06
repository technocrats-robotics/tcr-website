import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Firebase Setup
const firebaseAdminConfig = require('./firebase_config.json');
var secondaryApp=firebase.initializeApp(firebaseAdminConfig, "secondary");

// Firebase product objects
export var auth = secondaryApp.auth();
export var db = secondaryApp.firestore();