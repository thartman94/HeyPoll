//import useState hook to create menu collapse state
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import SidebarItem from "./SidebarItem";

const Sidebar = () => {
	const questions = ["Question 1", "Question 2", "Question 3"];
	const polls = ["Poll 1", "Poll 2", "Poll 3"];

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<h3>Your Saved Polls</h3>
				{/* <button className="sidebar__header--toggle">
					<FontAwesomeIcon icon={faChevronCircleRight} />
				</button> */}
			</div>
			<ul className="sidebar__body">
				{polls.map((poll, i) => (
					<SidebarItem key={i} title={poll} questions={questions} />
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
