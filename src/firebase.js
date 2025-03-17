import { initializeApp } from 'firebase/app'
import { getDatabase, child, ref, get }  from 'firebase/database'
import { useDatabaseList} from 'vuefire'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
};

export const firebaseApp = initializeApp(firebaseConfig)

const db = ref(getDatabase(firebaseApp))
get(child(db, `questions`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});
export const auth = getAuth(firebaseApp)

export const questionsRef = useDatabaseList(db)