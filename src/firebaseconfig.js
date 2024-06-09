// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyBeDmEruwo0KVLud98RdCH4Dt6vmojMLHw",
  authDomain: "react-firebase-auth-ce695.firebaseapp.com",
  projectId: "react-firebase-auth-ce695",
  storageBucket: "react-firebase-auth-ce695.appspot.com",
  messagingSenderId: "561535500489",
  appId: "1:561535500489:web:6d724f72f62c8731fbcd18"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app