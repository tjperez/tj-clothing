import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAmCssc_3jnKjLZRypiKppvd8k7kz0orWQ",
  authDomain: "tj-db-e7f70.firebaseapp.com",
  databaseURL: "https://tj-db-e7f70.firebaseio.com",
  projectId: "tj-db-e7f70",
  storageBucket: "",
  messagingSenderId: "423682705642",
  appId: "1:423682705642:web:35cd0012c2040253e3ef93",
  measurementId: "G-0H5CL8LJJ3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

