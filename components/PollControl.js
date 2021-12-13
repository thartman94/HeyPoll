import React from "react";

// FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const reversePoll = (e) => {
	e.preventDefault();
	console.log("Professor has reversed the poll");
};

const advancePoll = (e) => {
	e.preventDefault();
	console.log("Professor has advanced the poll");
};

const PollControl = ({ left }) => {
	return (
		<button class={`control ${left && "left"}`}>
			<FontAwesomeIcon
				className="control__icon"
				onClick={left ? reversePoll : advancePoll}
				icon={left ? faChevronLeft : faChevronRight}
			/>
		</button>
	);
};

export default PollControl;
