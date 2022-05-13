import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCWcdp1-mjVaSNnFAXknCF583YmpmdyACY",
  authDomain: "nwitter-fd5fc.firebaseapp.com",
  projectId: "nwitter-fd5fc",
  storageBucket: "nwitter-fd5fc.appspot.com",
  messagingSenderId: "934679972951",
  appId: "1:934679972951:web:dc2078d493c076d0aee712",
  measurementId: "G-49Z3ZTXMH4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();