import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD2tqxkTcdBpEi2TdFhNRLATQBcIPxZQPA",
  authDomain: "trashback-124e3.firebaseapp.com",
  projectId: "trashback-124e3",
  storageBucket: "trashback-124e3.appspot.com",
  messagingSenderId: "74956022982",
  appId: "1:74956022982:web:810bbcfb97f03292ea63c7",
  measurementId: "G-FKMMZL64XE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;