import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD82_qIWjPHEqVZ_sW1oeSwH4gJq0JLk24",
    authDomain: "cooking-pirate.firebaseapp.com",
    projectId: "cooking-pirate",
    storageBucket: "cooking-pirate.appspot.com",
    messagingSenderId: "21641329555",
    appId: "1:21641329555:web:2dee5cd0059ec58f854666"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export {projectFirestore}