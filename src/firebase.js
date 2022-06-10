// import firebase from "./firebase";
// import "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFunctions } from "firebase/functions"


const firebaseConfig = {
//   apiKey: "AIzaSyCtIwQNS1fDKIpEjwxfit-9PeWvHXoYato",
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: "albarrusurvey-b428c",
  // storageBucket: "albarrusurvey-b428c.appspot.com",
  // messagingSenderId: "1019322829703",
  // appId: "1:1019322829703:web:319c99c9f3e3a48dcda122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
export const functions = getFunctions(app)

export const provider = new GoogleAuthProvider(app);
// export const provider = new firebase.auth.GoogleAuthProvider();
// export default firebase
