// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-c5879.firebaseapp.com",
  projectId: "mernauth-c5879",
  storageBucket: "mernauth-c5879.appspot.com",
  messagingSenderId: "393143723543",
  appId: "1:393143723543:web:b91e1ec50c357f1bef5e52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
