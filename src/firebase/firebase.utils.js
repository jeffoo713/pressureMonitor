import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const myOwnConfig = {
  apiKey: "AIzaSyAtwo3vmv1GMA8Myxnr1oiYoHKQOqcGvrk",
  authDomain: "pressuremonitor-ec90c.firebaseapp.com",
  databaseURL: "https://pressuremonitor-ec90c.firebaseio.com",
  projectId: "pressuremonitor-ec90c",
  storageBucket: "pressuremonitor-ec90c.appspot.com",
  messagingSenderId: "135876127055",
  appId: "1:135876127055:web:1465015cb7eede54613d3a",
  measurementId: "G-XCM5Y3CSHV"
};

firebase.initializeApp(myOwnConfig);

export const firestore = firebase.firestore();

export default firebase; 