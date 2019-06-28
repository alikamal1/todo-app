import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCcku2LZD8Ga1R3NQ7nnC5kRNiAn-sCrUY",
    authDomain: "vuejs-firebase-database.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-database.firebaseio.com",
    projectId: "vuejs-firebase-database",
    storageBucket: "vuejs-firebase-database.appspot.com",
    messagingSenderId: "707969358447",
    appId: "1:707969358447:web:c02abe7a002a5b91"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const firestore = firebaseApp.firestore()

  export default firestore