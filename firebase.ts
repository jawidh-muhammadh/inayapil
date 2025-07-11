import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

import { getAuth } from 'firebase/auth';

// Your firebaseConfig from earlier
// const firebaseConfig = {
//   apiKey: 'AIzaSyBSgzQ9kG96O6kTZy5epoZR83U2hdZmryU',
//   authDomain: 'contrologypilates-fa020.firebaseapp.com',
//   projectId: 'contrologypilates-fa020',
//   storageBucket: 'contrologypilates-fa020.appspot.com', // FIXED THIS LINE
//   messagingSenderId: '750703059967',
//   appId: '1:750703059967:web:0ab3e437e4c541f7c4fdca',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyD6cpJSH6OhebUDxpZot0wsTdLhSPT4scs',
  authDomain: 'inayapil.firebaseapp.com',
  projectId: 'inayapil',
  storageBucket: 'inayapil.firebasestorage.app',
  messagingSenderId: '995384574932',
  appId: '1:995384574932:web:4854184d63f35d3242cc41',
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyBvkpyDWbJOdWWcASbaL3A8BmmgPHF5-7w',
//   authDomain: 'tttt-7bf7d.firebaseapp.com',
//   projectId: 'tttt-7bf7d',
//   storageBucket: 'tttt-7bf7d.firebasestorage.app',
//   messagingSenderId: '864929430008',
//   appId: '1:864929430008:web:822c149d0bd7bf0d7cbe0d',
// };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
