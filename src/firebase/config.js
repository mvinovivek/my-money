import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5KHgDJAFiYUshAss0VxivOzhxzm0QBXQ",
  authDomain: "mymoney-2b2c6.firebaseapp.com",
  projectId: "mymoney-2b2c6",
  storageBucket: "mymoney-2b2c6.appspot.com",
  messagingSenderId: "174213850290",
  appId: "1:174213850290:web:64eda524767509fb9215ab",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
