import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyANAZEIq5lfQenVRg4fJDKXl4VptPsd4oU",
  authDomain: "my-website-f197b.firebaseapp.com",
  databaseURL: "https://my-website-f197b-default-rtdb.firebaseio.com",
  projectId: "my-website-f197b",
  storageBucket: "my-website-f197b.appspot.com",
  messagingSenderId: "343084765114",
  appId: "1:343084765114:web:0e25be03c9931476c55783",
};

const app = initializeApp(firebaseConfig);
export { app, firebaseConfig };
