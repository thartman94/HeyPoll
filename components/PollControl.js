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

export const PollControl = ({ direction }) => {
	return (
		<button class="control">
			<FontAwesomeIcon
				className="control__icon"
				onClick={direction === "left" ? reversePoll : advancePoll}
				icon={direction === "left" ? faChevronLeft : faChevronRight}
			/>
		</button>
	);
};
