import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/functions'

const config = {
  apiKey: 'AIzaSyAP2-e7sf60uj8uSq3q4c4GjLFlclOorlA',
  authDomain: 'prototype-54477.firebaseapp.com',
  databaseURL: 'https://prototype-54477.firebaseio.com',
  projectId: 'prototype-54477',
  storageBucket: 'prototype-54477.appspot.com',
  messagingSenderId: '528690565290',
}
firebase.initializeApp(config)

export const firestore = firebase.firestore()
const settings = { /* your settings... */ timestampsInSnapshots: true }
firestore.settings(settings)

export default firebase
