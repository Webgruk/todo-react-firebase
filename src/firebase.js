import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDEPXRLWhiGxAyVjKTF17bBx-G5pP-PDLI',
  authDomain: 'todo-react-firebase-c4253.firebaseapp.com',
  projectId: 'todo-react-firebase-c4253',
  storageBucket: 'todo-react-firebase-c4253.appspot.com',
  messagingSenderId: '453166149366',
  appId: '1:453166149366:web:c260a1c8763471107a46d7',
}

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

export { db }
