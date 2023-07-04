import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvtTO39FGTxRNBrr0qa8tWQkhadxF-8iw",
    authDomain: "linkedin-clone-89761.firebaseapp.com",
    projectId: "linkedin-clone-89761",
    storageBucket: "linkedin-clone-89761.appspot.com",
    messagingSenderId: "734568467562",
    appId: "1:734568467562:web:8bb08c4929d26c5ec78e13"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};
export default firebase