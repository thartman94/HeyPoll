import React, { useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "../../firebase/clientApp";
import { doc } from "@firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import View from "../../components/View";

import { useState } from "react/cjs/react.development";
import AppContext from "../../components/AppContext";

export const getServerSideProps = async (context) => {
	const { id } = context.params;
	return {
		props: { id },
	};
};

export default function Lobby({ id }) {
	const { userRole, setRole } = useContext(AppContext);
	const [currUser, setCurrUser] = useState("");

	const docRef = doc(db, "guestPolls", id);
	const [poll, isLoading, Error] = useDocumentData(docRef, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	// should be a hook, keeping it cuz zach made it and it works
	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log(user.uid, " is the user");
			setCurrUser(user.uid);
		} else {
			console.log("we have no user");
		}
	});

	setRole(poll?.guestID === currUser ? "professor" : "student");

	return (
		<section className="poll-lobby">
			<Header title="Poll Lobby" />
			<View poll={poll} />
			<Footer />
		</section>
	);
}
