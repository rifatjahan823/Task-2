// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVWunEhoths3ECDDscaKz0wNuKP1MK9jM",
    authDomain: "task-2-e487c.firebaseapp.com",
    projectId: "task-2-e487c",
    storageBucket: "task-2-e487c.appspot.com",
    messagingSenderId: "831223058302",
    appId: "1:831223058302:web:291d538559a21e80a9ed2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;