import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDtfINbv2Ttr_lzOcZG4B2Cz1wDmtD4Ayc",
    authDomain: "poll-system-vue.firebaseapp.com",
    projectId: "poll-system-vue",
    storageBucket: "poll-system-vue.firebasestorage.app",
    messagingSenderId: "16485415567",
    appId: "1:16485415567:web:23fd8a6a855c6547e08efa",
    measurementId: "G-7P8L3C6QMT"
};

export const firebaseApp = initializeApp(firebaseConfig)

// used for the firestore refs
const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')