import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
};

export const firebaseApp = initializeApp(firebaseConfig)

// used for the firestore refs
const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')