import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {

    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    updateProfile,
    signOut,
    GoogleAuthProvider,
    signInWithPopup

}
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

import {

    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc

}
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

/* =========================
FIREBASE CONFIG
========================= */

const firebaseConfig = {

    apiKey: "AIzaSyBGz-1qPwyG86kJe0IZn0I_NZNERtwFMlk",

    authDomain: "annacore-web.firebaseapp.com",

    projectId: "cannacore-web",

    storageBucket: "cannacore-web.firebasestorage.app",

    messagingSenderId: "648812089616",

    appId: "1:648812089616:web:3a5d468e6a1da1c18cd595"
};

/* =========================
INIT
========================= */

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

/* =========================
EXPORTS
========================= */

export {

    auth,
    db,

    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    updateProfile,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,

    doc,
    setDoc,
    getDoc,
    updateDoc
};
