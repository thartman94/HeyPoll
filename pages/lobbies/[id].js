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
	const { setPollLeader } = useContext(AppContext);

	const docRef = doc(db, "guestPolls", id);
	const [poll, isLoading, Error] = useDocumentData(docRef, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const { user } = useContext(AppContext);

	setPollLeader(!!poll && !!user && poll.guestID === user.uid);

	return (
		<section className="poll-lobby">
			<Header title="Poll Lobby" />
			<View poll={poll} />
			<Footer />
		</section>
	);
}
