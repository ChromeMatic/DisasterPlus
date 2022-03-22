import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIV3vKiAsWUWWNlPbMw08cSvVQUjfYSnY",
    authDomain: "disaster-plus-management.firebaseapp.com",
    projectId: "disaster-plus-management",
    storageBucket: "disaster-plus-management.appspot.com",
    messagingSenderId: "522510525536",
    appId: "1:522510525536:web:e9c24242a78d7710950f05",
    measurementId: "G-FZ9ET9YXBK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

