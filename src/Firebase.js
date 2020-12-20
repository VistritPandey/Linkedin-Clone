import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmdDZnHTHWZbezrht_5BRmuCucZiZqlTQ",
  authDomain: "vistrit-linkedin.firebaseapp.com",
  projectId: "vistrit-linkedin",
  storageBucket: "vistrit-linkedin.appspot.com",
  messagingSenderId: "612816959798",
  appId: "1:612816959798:web:a400ed9f64455a01451b97",
  measurementId: "G-C163XDYGEF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
