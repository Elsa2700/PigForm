//firebase
import firebase from 'firebase/app';
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCouzP3raUgvn1WQBt_7CmGOmnlqi768vg",
  authDomain: "pigapp-waste.firebaseapp.com",
  projectId: "pigapp-waste",
  storageBucket: "pigapp-waste.appspot.com",
  messagingSenderId: "648663865187",
  appId: "1:648663865187:web:bbbeededd8922497b66556",
  measurementId: "G-WKTR30B6JN"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);;
 }else {
    firebase.app(); // if already initialized, use that one
 }

const db = firebase.firestore();
export default db;