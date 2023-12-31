import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBJXDOhNOsDWyqBR5QdeLyPVPpzhRE4jnQ",
  authDomain: "reactnativeauth-3a66d.firebaseapp.com",
  projectId: "reactnativeauth-3a66d",
  storageBucket: "reactnativeauth-3a66d.appspot.com",
  messagingSenderId: "501525856248",
  appId: "1:501525856248:web:88651379bbb86d67cbe00d"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});



export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);