import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDL0F4gj1lUfrNigbH-5WDh6L4eHZr07sM",
  authDomain: "bookstore-36327.firebaseapp.com",
  projectId: "bookstore-36327",
  storageBucket: "bookstore-36327.appspot.com",
  messagingSenderId: "814775476219",
  appId: "1:814775476219:web:056f0c255362109594755e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);