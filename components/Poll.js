import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";
import {
	collection,
	updateDoc,
	doc,
	addDoc,
	setDoc,
} from "@firebase/firestore";
import { db } from "../firebase/clientApp";

import AppContext from "./AppContext";
import Input from "./Input";
import Button from "./Button";
import PollBody from "./PollBody";
import EditButton from "./EditButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";

const Poll = ({ userID, isProfile }) => {
	const router = useRouter();
	const [edit, toggleEdit] = useState(false);
	const { slideIndex, currentPollID } = useContext(AppContext);

	const [questions, isQuestionsLoading, questionsError] = useCollection(
		collection(db, "savedPolls", currentPollID, "pollQuestions"),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);

	const savePoll = () => {
		if (edit === true) {
			const inputs = document
				? document.querySelectorAll(".poll__answers input")
				: [];
			const newQuestion = document.querySelector(".poll__question input").value;

			updateDoc(
				doc(
					db,
					"savedPolls",
					currentPollID,
					"pollQuestions",
					questions.docs[slideIndex].id
				),
				{
					question: newQuestion,
					answers: Array.from(inputs).map((input) => input.value),
				}
			);
		}
	};

	const changeAnswerAmount = async (action) => {
		if (action === "add") {
			updateDoc(
				doc(
					db,
					"savedPolls",
					currentPollID,
					"pollQuestions",
					questions.docs[slideIndex].id
				),
				{
					answers: [...questions.docs[slideIndex].data().answers, ""],
				}
			);
		} else {
			updateDoc(
				doc(
					db,
					"savedPolls",
					currentPollID,
					"pollQuestions",
					questions.docs[slideIndex].id
				),
				{
					answers: questions.docs[slideIndex].data().answers.slice(0, -1),
				}
			);
		}
	};

	const createGuestPoll = async () => {
		const guestRef = await addDoc(collection(db, "guestPolls"), {}); // Create empty guest poll

		if (!!guestRef) {
			setDoc(doc(db, "guestPolls", guestRef.id), {
				question: questions.docs[slideIndex]?.data().question,
				correctAnswer: 0, //literally serves no purpose
				joinCode: guestRef.id.substring(0, 5).toUpperCase(),
				guestID: userID,
			});

			const promises = questions.docs[slideIndex]
				?.data()
				?.answers.map((answer) => {
					console.log(answer);
					addDoc(collection(db, "guestPolls", guestRef.id, "answers"), {
						choice: answer,
						count: 0,
					});
				});

			await Promise.all(promises);
		}

		return guestRef.id;
	};

	return (
		<form className="poll">
			<EditButton
				edit={edit}
				onClick={(e, edit) => {
					e.preventDefault();
					toggleEdit((prevEdit) => !prevEdit);
					savePoll(e, edit);
				}}
			/>
			<div className="poll__question">
				<Input
					className="poll__question"
					readonly={!edit}
					value={
						!isQuestionsLoading
							? questions.docs[slideIndex]?.data().question
							: ""
					}
				/>
			</div>
			<div className="poll__wrapper">
				{!isQuestionsLoading && (
					<PollBody
						isProfile={isProfile}
						docRef={"docRef"}
						edit={edit}
						answers={questions.docs[slideIndex]?.data()?.answers}
					/>
				)}
			</div>
			<div className={`poll__controls ${!edit ? "hidden" : ""}`}>
				<button
					className="poll__controls--minus"
					onClick={(e) => {
						e.preventDefault();
						changeAnswerAmount("remove");
					}}
				>
					<FontAwesomeIcon className="icon" icon={faMinusSquare} />
				</button>
				<button
					className="poll__controls--add"
					onClick={(e) => {
						e.preventDefault();
						changeAnswerAmount("add");
					}}
				>
					<FontAwesomeIcon className="icon" icon={faPlusSquare} />
				</button>
			</div>
			<Button
				className="gold"
				onClick={(e) => {
					e.preventDefault();
					createGuestPoll().then((result) => {
						router.push(
							{
								pathname: `/lobbies/${result}`,
								query: result,
							},
							`/lobbies/${result}`
						);
					});
				}}
			>
				Create New Room
			</Button>
		</form>
	);
};

export default Poll;
