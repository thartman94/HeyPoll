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
	writeBatch,
} from "firebase/firestore";
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

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// export const createCounter = (ref, num_shards) => {
// 	var batch = writeBatch(db);
// 	// Initialize the counter document
// 	batch.set(ref, { num_shards: num_shards });
// 	// Initialize each shard with count=0
// 	for (let i = 0; i < num_shards; i++) {
// 		// const shardRef = ref.collection("shards").doc(i.toString());
// 		const shardRef = doc(ref, "shards", i.toString());
// 		// doc(db, "guestPolls", id);
// 		batch.set(shardRef, { count: 0 });
// 	}
// 	// Commit the write batch
// 	return batch.commit();
// };

// For creating accounts, tbd
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
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			// ...
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

		await setDoc(doc(db, "guestPolls", guestRef.id), {
			question: "Your Question Here",
			// answers: [
			// 	{ choice: "Yes", count: 0 },
			// 	{ choice: "No", count: 0 },
			// ], // Array to store answers
			joinCode: guestRef.id.substring(0, 5).toUpperCase(),
			guestID: user.uid,
		});

		const answerRef = await addDoc(
			collection(db, "guestPolls", guestRef.id, "answers"),
			{}
		);

		await setDoc(doc(db, "guestPolls", guestRef.id, "answers", answerRef.id), {
			choice: "Yes",
			count: 0,
			answerRef: answerRef.id,
		});

		return guestRef.id;
	});

	return guestRefID;
};

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
