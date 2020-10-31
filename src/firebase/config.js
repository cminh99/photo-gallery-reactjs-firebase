import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDPiq09tiFC6-bwadQfnGdlReVfNrygbew',
  authDomain: 'photo-gallery-reactjs-firebase.firebaseapp.com',
  databaseURL: 'https://photo-gallery-reactjs-firebase.firebaseio.com',
  projectId: 'photo-gallery-reactjs-firebase',
  storageBucket: 'photo-gallery-reactjs-firebase.appspot.com',
  messagingSenderId: '426396331283',
  appId: '1:426396331283:web:3a3ae11a82a13077d1fee6'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appStorage, appFirestore, timestamp };
