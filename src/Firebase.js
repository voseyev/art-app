import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const API_KEY = process.env.REACT_APP_APIKEY
const AUTH_DOMAIN = process.env.REACT_APP_AUTHDOMAIN
const DATABASE_URL = process.env.REACT_APP_DATABASEURL
const PROJECT_ID = process.env.REACT_APP_PROJECTID
const STORAGE_BUCKET = process.env.REACT_APP_STORAGEBUCKET
const MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGINGSENDERID
const APP_ID = process.env.REACT_APP_APPID

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
}
firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()
export const auth = firebase.auth()
export default firebase
