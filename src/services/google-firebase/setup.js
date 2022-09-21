import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Firebase Setup
const firebaseConfig = require("./firebase_config.json");
var defaultApp = firebase.initializeApp(firebaseConfig);
var adminApp = firebase.initializeApp(firebaseConfig, "admin");

// Firebase product objects
export var auth = defaultApp.auth();
export var db = defaultApp.firestore();
export var admin_auth = adminApp.auth();
export var admin_db = adminApp.firestore();
