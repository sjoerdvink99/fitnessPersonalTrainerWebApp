import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFA04guiDCuIZR5EfPbqaV7AdAWlzK-JU",
  authDomain: "fitnessapp-27314.firebaseapp.com",
  projectId: "fitnessapp-27314",
  storageBucket: "fitnessapp-27314.appspot.com",
  messagingSenderId: "234391607295",
  appId: "1:234391607295:web:7187995080fef824cd39ca",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
