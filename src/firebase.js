import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAv8IZuueOch8LDQKGrmLd4Z88pwGnUfbU',
  authDomain: 'todo-react-firebase-36e33.firebaseapp.com',
  projectId: 'todo-react-firebase-36e33',
  storageBucket: 'todo-react-firebase-36e33.appspot.com',
  messagingSenderId: '257920083159',
  appId: '1:257920083159:web:867beeb1f46d34cf477c92',
}
initializeApp(firebaseConfig)

const db = getFirestore()

export { db }
