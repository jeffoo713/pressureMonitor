import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import {
  calculateStatsFromData,
  insertAndSortDataArray,
  compareByTimeStamp,
} from '../redux/data/data.utils';

const myOwnConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMNET_ID,
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log(
        'error from createUserProfileDocument from firebase.utils',
        error.message
      );
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      if (userAuth) {
        resolve(userAuth);
      } else {
        reject('error from getCurrentUser in firebase.utils ');
      }
    });
  });
};

export const getUserDataFromFirestore = async userId => {
  const dataRef = firestore.collection('data').where('userId', '==', userId);
  const snapshot = await dataRef.get();

  if (snapshot.empty) {
    const dataDocRef = firestore.collection('data').doc();
    await dataDocRef.set({ userId, dataArray: [] });
    const dataSnapshot = await dataDocRef.get();
    return dataSnapshot.data();
  } else {
    const dataDocRef = firestore.doc(`data/${snapshot.docs[0].ref.id}`);
    const dataSnapshot = await dataDocRef.get();
    return dataSnapshot.data();
  }
};

export const calculateStats = dataArray => {
  return new Promise(resolve => {
    const calculatedDataArray = calculateStatsFromData(dataArray);
    resolve(calculatedDataArray);
  });
};

export const getCurrentUserDataDocRef = async currentUser => {
  const { id } = currentUser;
  const dataRef = firestore.collection('data').where('userId', '==', id);
  const snapshot = await dataRef.get();
  return firestore.doc(`data/${snapshot.docs[0].id}`);
};

export const addDataItemInFirestore = async (item, currentUser, dataArray) => {
  const dataDocRef = await getCurrentUserDataDocRef(currentUser);
  const newDataArray = insertAndSortDataArray(
    dataArray,
    item,
    compareByTimeStamp
  );
  await dataDocRef.update({ dataArray: newDataArray });
};

export const removeDataItemInFirestore = async (
  itemToRemoveId,
  currentUser,
  dataArray
) => {
  const dataDocRef = await getCurrentUserDataDocRef(currentUser);
  const newDataArray = dataArray.filter(data => data.id !== itemToRemoveId);
  await dataDocRef.update({ dataArray: newDataArray });
};

firebase.initializeApp(myOwnConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
