import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAYaHDFpzrFHDYIRc-ieXJ8JmcgGN9scCc",
    authDomain: "alexahitehurst.firebaseapp.com",
    databaseURL: "https://alexahitehurst.firebaseio.com",
    projectId: "alexahitehurst",
    storageBucket: "alexahitehurst.appspot.com",
    messagingSenderId: "905027533851",
    appId: "1:905027533851:web:48357900b381d465db4cbe"
};
firebase.initializeApp(firebaseConfig);

export default firebase;