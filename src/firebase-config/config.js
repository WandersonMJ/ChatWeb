import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// const app = initializeApp({
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID,
// })

const app = initializeApp({
  apiKey: "AIzaSyAheyrqW1MZYq-BDj-7H8X44esBqwC1LUQ",
  authDomain: "chat-bot-a03bd.firebaseapp.com",
  projectId: "chat-bot-a03bd",
  storageBucket: "chat-bot-a03bd.appspot.com",
  messagingSenderId: "421360497197",
  appId: "1:421360497197:web:25e886aa7aaa3efef23ea4",
  measurementId: "G-G0ETH0KD3Z",
})

export const db = getFirestore(app)