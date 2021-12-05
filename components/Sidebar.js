//import useState hook to create menu collapse state
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem";
import { collection, query, where } from "@firebase/firestore";
import { db } from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
const Sidebar = ({ id }) => {
	const [polls, isPollsLoading, pollsError] = useCollection(
		query(collection(db, "savedPolls"), where("userID", "==", id)),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);

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
				<button className="sidebar__footer--button">
					Sign-out button go here plz
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
