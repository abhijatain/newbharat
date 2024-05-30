// plugins/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDDvzYMAuIceDytcmOZ6Bf28MtjrEFcOjk",
    authDomain: "bharat-guild-f02d0.firebaseapp.com",
    projectId: "bharat-guild-f02d0",
    storageBucket: "bharat-guild-f02d0.appspot.com",
    messagingSenderId: "724548591779",
    appId: "1:724548591779:web:da77bee042632d34f71f16",
    measurementId: "G-H9XNY6PEY3"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  export default defineNuxtPlugin(() => {
    return {
      provide: {
        firebase: {
          auth,
          GoogleAuthProvider,
          signInWithPopup,
        },
      },
    }
  })
