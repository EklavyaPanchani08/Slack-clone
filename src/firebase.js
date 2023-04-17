import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA5vkE0WuwsyqJbloG47wfKTEsewEPdBHI",
    authDomain: "slack-clone-94cb4.firebaseapp.com",
    projectId: "slack-clone-94cb4",
    storageBucket: "slack-clone-94cb4.appspot.com",
    messagingSenderId: "288717819141",
    appId: "1:288717819141:web:4f25c68a9217b78419bb6c",
    measurementId: "G-JDBVCFPDP3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db