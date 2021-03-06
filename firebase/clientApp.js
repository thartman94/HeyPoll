// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
	collection,
	doc,
	addDoc,
	setDoc,
	query,
	where,
	getDocs,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

export const googleLogin = () => {
	const provider = new GoogleAuthProvider();
	const tempUser = signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			// ...
			return user.uid;
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
	return tempUser;
};

export const logOut = () => {
	signOut(auth)
		.then(() => {
			console.log("Signed out");
		})
		.catch((error) => {});
};

export const createGuestPoll = () => {
	const guestRefID = signInAnonymously(auth).then(async (result) => {
		const user = result.user;
		const guestRef = await addDoc(collection(db, "guestPolls"), {}); // Create empty guest poll


		setDoc(doc(db, "guestPolls", guestRef.id), {
			question: "",
			correctAnswer: 0, // Index of correct answer
			joinCode: guestRef.id.substring(0, 5).toUpperCase(), // 5-character join code
			guestID: user.uid,
		});


		return guestRef.id;
	});

	return guestRefID;
};

export const getJoinCode = () => {};

// Detect auth state
onAuthStateChanged(auth, (user) => {
	if (user) {
		const uid = user.uid;
		console.log("Signed in as: " + user.uid);
	} else {
		console.log("No user");
	}
});

export const getFullCode = async (inputCode) => {
	const upperCode = inputCode.toUpperCase();
	const q = query(
		collection(db, "guestPolls"),
		where("joinCode", "==", upperCode)
	);
	const querySnapshot = await getDocs(q);
	console.log(querySnapshot.docs.length);
	if (querySnapshot.docs.length > 0) {
		return querySnapshot.docs[0].id;
	} else {
		return "none";
	}
};
export default { db, auth };
