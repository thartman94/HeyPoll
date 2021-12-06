//import useState hook to create menu collapse state
import React from "react";
import {
	addDoc,
	collection,
	query,
	setDoc,
	where,
	doc,
} from "@firebase/firestore";
import { createGuestPoll, db } from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";

import SidebarItem from "./SidebarItem";
import Button from "./Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({ id }) => {
	const [polls, isPollsLoading, pollsError] = useCollection(
		query(collection(db, "savedPolls"), where("userID", "==", id)),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);

	const addPoll = async () => {
		const docRef = await addDoc(collection(db, "savedPolls"), {});

		setDoc(doc(db, "savedPolls", docRef.id), {
			title: "New Poll 2",
			userID: id,
		});

		addDoc(collection(db, "savedPolls", docRef.id, "pollQuestions"), {
			question: "My first question",
			answers: ["yes", "no"],
		});
	};

	console.log(!isPollsLoading && polls.docs);

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<h3>Saved Polls</h3>
				{/* <button className="sidebar__header--toggle">
					<FontAwesomeIcon className="" icon={faChevronCircleRight} />
				</button> */}
			</div>
			<ul className="sidebar__body">
				{!isPollsLoading &&
					polls.docs.map((poll, i) => (
						<SidebarItem key={i} title={poll.data().title} id={poll.id} />
					))}
			</ul>
			<div className="sidebar__footer">
				<Button
					className="sidebar"
					onClick={() => {
						addPoll();
					}}
				>
					Add Poll
				</Button>
			</div>
		</div>
	);
};

export default Sidebar;
