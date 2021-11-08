// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyAiJ4VfJ6W5pnty-xr8CddM2BaBq1ow6sM",
	authDomain: "heypoll.firebaseapp.com",
	projectId: "heypoll",
	storageBucket: "heypoll.appspot.com",
	messagingSenderId: "465843547329",
	appId: "1:465843547329:web:ed27b207038d19c6ccb840",
	measurementId: "G-4ZQ7C05NH2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

const loginBtn = document.getElementById("loginBtn");

const provider = new GoogleAuthProvider();

//export const signInWithGoogle = () => signInWithPopup(provider);

//loginBtn.buttonClick = () => signInWithPopup(provider);

// Detect auth state
onAuthStateChanged(auth, (user) => {
	console.log(user ? "Logged in!" : "No user");
});

export default { db, auth };
