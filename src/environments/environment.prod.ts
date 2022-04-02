export const environment = {
  firebase: {
    projectId: 'goodreads-9170c',
    appId: '1:20174072525:web:30d3fcc2e887e0d020d784',
    databaseURL: 'https://goodreads-9170c-default-rtdb.firebaseio.com',
    storageBucket: 'goodreads-9170c.appspot.com',
    apiKey: 'AIzaSyCO3UVzTD-X9bpX-L05wBHLRzRKcPEdM9w',
    authDomain: 'goodreads-9170c.firebaseapp.com',
    messagingSenderId: '20174072525',
    measurementId: 'G-YSWPBYDSSX',
  },
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO3UVzTD-X9bpX-L05wBHLRzRKcPEdM9w",
  authDomain: "goodreads-9170c.firebaseapp.com",
  databaseURL: "https://goodreads-9170c-default-rtdb.firebaseio.com",
  projectId: "goodreads-9170c",
  storageBucket: "goodreads-9170c.appspot.com",
  messagingSenderId: "20174072525",
  appId: "1:20174072525:web:c5850cad3a46bc6620d784",
  measurementId: "G-Q4YVKF14W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);