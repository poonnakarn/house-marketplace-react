import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCRsEMYlWpFIucDz5GN8WNTU-rHwFml03c',
  authDomain: 'house-marketplace-app-e3f82.firebaseapp.com',
  projectId: 'house-marketplace-app-e3f82',
  storageBucket: 'house-marketplace-app-e3f82.appspot.com',
  messagingSenderId: '411410742238',
  appId: '1:411410742238:web:69ac6fa4ac5f72cc3bfb4f',
}

export const db = getFireStore()
