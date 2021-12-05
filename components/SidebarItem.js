import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";
import { db } from "../firebase/clientApp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SidebarItem = ({ title, id }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [questions, isQuestionsLoading, questionsError] = useCollectionData(
		collection(db, "savedPolls", id, "pollQuestions"),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);
	let scollTime = isQuestionsLoading
		? 0
		: questions.length > 7
		? 700
		: questions.length * 100;

	return (
		<li className={`sidebarItem ${isOpen && "open"}`}>
			<button
				className={`sidebarItem__title ${isOpen && "open"}`}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{title}
				<FontAwesomeIcon
					className={`${isOpen && "rotate"}`}
					icon={faChevronDown}
				/>
			</button>

			<AnimateHeight duration={scollTime} height={isOpen ? "auto" : 0}>
				<ul className={`sidebarItem__questions  ${isOpen && "open"}`}>
					{!isQuestionsLoading &&
						questions.map((question, i) => (
							<li className="sidebarItem__questions--single" key={i}>
								{question.question}
							</li>
						))}
				</ul>
			</AnimateHeight>
		</li>
	);
};

export default SidebarItem;
