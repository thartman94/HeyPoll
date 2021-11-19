import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ProfView } from "../../components/ProfView";
import { StudentView } from "../../components/StudentView";
import { useRouter } from "next/dist/client/router";
import { onAuthStateChanged } from "@firebase/auth";
import {auth} from "../../firebase/clientApp";
import { collection, doc, getDoc, getDocs } from "@firebase/firestore";
import { db } from "../../firebase/clientApp";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export const getServerSideProps = async (context) => {
	const id = context.params.id;
	const docRef = doc(db, "guestPolls", id);
	const docSnap = await getDoc(docRef);
	let temp = "";
	if(docSnap.exists){
		temp = docSnap.data().guestID;
		console.log ("whats good baby");
	} else {
		temp = "reload the page";
	}
	
	return {
		props: {guestid : temp}
	}
}
export default function Lobby({guestid}) {
	console.log(guestid);
	const router = useRouter();
	const pollID = router.query.id;
	const [currUser, setcurrUser] = useState("")
	const [currPoll, setcurrPoll] = useState();
	onAuthStateChanged(auth, (user) => {
		if(user){
			console.log(user.uid, " is the user");
			setcurrUser(user.uid);

		} else{
			console.log("we have no user");
		}
	});

	let userRole = (guestid == currUser) ? "professor" : "student";
	// let userRole = "student";
	//console.log(currPoll);
	console.log(userRole);
	const View = userRole ? ProfView : StudentView;
	return (
		<section className="poll-lobby">
			<Header title="Poll Lobby" />
			<View userRole={userRole} />
			<Footer />
		</section>
	);
}

