import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM63eaN8C1DRyy0UskU2-kCc4np7_X3SE",
  authDomain: "whatsapp-clone-69583.firebaseapp.com",
  projectId: "whatsapp-clone-69583",
  storageBucket: "whatsapp-clone-69583.appspot.com",
  messagingSenderId: "848042242779",
  appId: "1:848042242779:web:3fc1ee62e9fc03e7f212fe",
  measurementId: "G-WNLTF17CLY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
