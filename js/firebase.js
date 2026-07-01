import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

export const firebaseConfig = {

    apiKey: "AIzaSyBGz-1qPwyG86kJe0IZn0I_NZNERtwFMlk",

    authDomain: "cannacore-web.firebaseapp.com",

    projectId: "cannacore-web",

    storageBucket: "cannacore-web.firebasestorage.app",

    messagingSenderId: "648812089616",

    appId: "1:648812089616:web:3a5d468e6a1da1c18cd595"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);