import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const app = initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
})

export const db = getFirestore(app)