import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkSc4FNFrptTTSA5cRpu0yYyshQqMt_aQ",
  authDomain: "clone-e9694.firebaseapp.com",
  projectId: "clone-e9694",
  storageBucket: "clone-e9694.appspot.com",
  messagingSenderId: "532869151052",
  appId: "1:532869151052:web:80847a8feed7f2957137e9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
