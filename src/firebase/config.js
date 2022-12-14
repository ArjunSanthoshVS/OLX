import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCOZXe9H53acuefYt5DM7yEmpr1d_X10os",
    authDomain: "olx-clone-66715.firebaseapp.com",
    projectId: "olx-clone-66715",
    storageBucket: "olx-clone-66715.appspot.com",
    messagingSenderId: "910755136338",
    appId: "1:910755136338:web:066dbe972a02035427b08b",
    measurementId: "G-ZG7B017PYE"
};

export default firebase.initializeApp(firebaseConfig)