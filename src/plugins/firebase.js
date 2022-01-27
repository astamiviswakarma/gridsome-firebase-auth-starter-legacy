import { initializeApp } from 'firebase/app';


// Import needed firebase modules
import "firebase/auth";

// Firebase app config
const config = {
  apiKey: process.env.GRIDSOME_FIREBASE_API_KEY,
  authDomain: process.env.GRIDSOME_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GRIDSOME_FIREBASE_DATABASE_URL,
  projectId: process.env.GRIDSOME_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GRIDSOME_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GRIDSOME_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GRIDSOME_FIREBASE_APP_ID
};

// Init our firebase app
const firebase = initializeApp(config);
export default firebase;