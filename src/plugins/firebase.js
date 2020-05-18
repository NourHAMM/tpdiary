import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firestore'


Vue.use(firestorePlugin)







import * as firebaseui from 'firebaseui'







const firebaseConfig = {
    apiKey: "AIzaSyCqv4r0kAL-dH6ZxYKjmrxWitD1HiFMPrg",
    authDomain: "tpdiary-b7ae7.firebaseapp.com",
    databaseURL: "https://tpdiary-b7ae7.firebaseio.com",
    projectId: "tpdiary-b7ae7",
    storageBucket: "tpdiary-b7ae7.appspot.com",
    messagingSenderId: "528816618293",
    appId: "1:528816618293:web:c387e19b740ffa45d42a7c"
   };


firebase.initializeApp(firebaseConfig)

const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui

export const db = firebase.firestore()