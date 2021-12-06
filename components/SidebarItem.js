import React, { useState, useContext, useEffect, useRef } from "react";
import AnimateHeight from "react-animate-height";
import {
	useCollectionData,
	useCollection,
} from "react-firebase-hooks/firestore";
import {
	collection,
	deleteDoc,
	doc,
	addDoc,
	getDocs,
} from "@firebase/firestore";
import { db } from "../firebase/clientApp";
import AppContext from "./AppContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faTrashAlt,
	faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

const SidebarItem = ({ title, id }) => {
	const { slideIndex, setSlideIndex, currentPollID, setCurrentPollID } =
		useContext(AppContext);
	const [isOpen, setIsOpen] = useState(false);
	const [questions, isQuestionsLoading, questionsError] = useCollection(
		collection(db, "savedPolls", id, "pollQuestions"),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);
	const firstUpdate = useRef(true);

	let scollTime = isQuestionsLoading
		? 0
		: questions.docs.length > 7
		? 700
		: questions.docs.length * 100;

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
				<button
					className="sidebarItem__title--trash"
					onClick={() => {
						deleteDoc(doc(db, "savedPolls", id));
					}}
				>
					<FontAwesomeIcon icon={faTrashAlt} />
				</button>
			</button>

			<AnimateHeight duration={scollTime} height={isOpen ? "auto" : 0}>
				<ul className={`sidebarItem__questions  ${isOpen && "open"}`}>
					{!isQuestionsLoading &&
						questions.docs.map((question, i) => {
							return (
								<li
									className={`sidebarItem__questions--single ${
										slideIndex === i && currentPollID === id && "active"
									}`}
									key={i}
									onClick={() => {
										setCurrentPollID(id);
										setSlideIndex(i);
										console.log(currentPollID, slideIndex);
									}}
								>
									{question.data().question}
									<button
										className="trash"
										onClick={async (e) => {
											e.stopPropagation();
											await deleteDoc(
												doc(db, "savedPolls", id, "pollQuestions", question.id)
											);
											const docs = await getDocs(
												collection(db, "savedPolls", id, "pollQuestions")
											);

											if (!docs || docs.size === 0) {
												deleteDoc(doc(db, "savedPolls", id));
												setCurrentPollID(null);
											} else if (slideIndex >= docs.size) {
												setSlideIndex(slideIndex - 1);
											}
										}}
									>
										<FontAwesomeIcon icon={faTrashAlt} />
									</button>
								</li>
							);
						})}
				</ul>
				<button
					className="sidebarItem__add"
					onClick={() => {
						console.log("clicked");
						addDoc(collection(db, "savedPolls", id, "pollQuestions"), {
							question: "My new question",
							answers: ["yes", "no"],
						});
					}}
				>
					<FontAwesomeIcon icon={faPlusSquare} />
				</button>
			</AnimateHeight>
		</li>
	);
};

export default SidebarItem;
