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

    apiKey: "TU_API_KEY",

    authDomain: "TU_AUTH_DOMAIN",

    projectId: "TU_PROJECT_ID",

    storageBucket: "TU_STORAGE_BUCKET",

    messagingSenderId: "TU_SENDER_ID",

    appId: "TU_APP_ID"
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
