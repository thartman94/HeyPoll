import React, { useContext, useState } from "react";
import AppContext from "../../components/AppContext";

import { db, createCounter } from "../../firebase/clientApp";
import {
	doc,
	setDoc,
	increment,
	updateDoc,
	collection,
	query,
	where,
	getDocs,
	addDoc,
	deleteDoc,
} from "@firebase/firestore";
import {
	useCollection,
	useDocumentData,
	useCollectionData,
} from "react-firebase-hooks/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import PollBody from "../../components/PollBody";
import EditButton from "../../components/EditButton";

export const getServerSideProps = async (context) => {
	const { id } = context.params;
	return {
		props: { id },
	};
};

export default function Lobby({ id }) {
	const { setPollLeader, isPollLeader, user } = useContext(AppContext);
	const [edit, toggleEdit] = useState(false);
	const [showResults, toggleResults] = useState(false);
	const [selectedAnswer, selectAnswer] = useState(null);

	const docRef = doc(db, "guestPolls", id);

	const [poll, isLoading, Error] = useDocumentData(docRef, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const [answers, isAnswersLoading, answersError] = useCollectionData(
		collection(db, "guestPolls", id, "answers"),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);

	setPollLeader(!!poll && !!user && poll.guestID === user.uid);

	const savePoll = (e) => {
		if (edit === true) {
			const inputs = document
				? document.querySelectorAll(".poll__answers input")
				: [];

			inputs.forEach((input, i) => {
				console.log({ input });
				if (input.value !== answers[i].choice) {
					console.log("updating");
					updateDoc(
						doc(db, "guestPolls", id, "answers", answers[i].answerRef),
						{
							choice: input.value,
						}
					);
				}
			});
		}
	};

	const changeAnswerAmount = async (answerID) => {
		if (!!answerID) deleteDoc(doc(db, "guestPolls", id, "answers", answerID));
		else {
			// add doc and throw its ID into it
			const answerRef = await addDoc(
				collection(db, "guestPolls", id, "answers"),
				{ choice: "", count: 0 }
			);

			await updateDoc(doc(db, "guestPolls", id, "answers", answerRef.id), {
				answerRef: answerRef.id,
			});
		}
	};

	const clearPoll = async () => {
		answers.forEach(({ answerRef }) =>
			deleteDoc(doc(db, "guestPolls", id, "answers", answerRef))
		);
		updateDoc(docRef, { question: "" });
	};

	const studentSubmit = (answerID) => {
		updateDoc(doc(db, "guestPolls", id, "answers", answerID), {
			count: increment(1),
		});
	};

	return (
		<section className="poll-lobby">
			<Header title="Poll Lobby" />
			<div className="prof-view">
				<div className="relative flex flex-row justify-center w-full">
					<form className="poll">
						{isPollLeader && !showResults && (
							<EditButton
								edit={edit}
								onClick={(e, edit) => {
									e.preventDefault();
									toggleEdit((prevEdit) => !prevEdit);
									savePoll(e, edit);
								}}
							/>
						)}
						<div className="poll__question">
							<Input
								className="poll__question--actual"
								readonly={!edit}
								value={poll?.question}
								placeholder={""}
							/>
						</div>
						<div className="poll__wrapper">
							<PollBody
								docRef={docRef}
								showResults={showResults}
								selectedAnswer={selectedAnswer}
								edit={edit}
								selectAnswer={selectAnswer}
								answers={answers}
							/>
						</div>
						<div className={`poll__controls ${!edit ? "hidden" : ""}`}>
							<button
								className="poll__controls--minus"
								onClick={(e) => {
									e.preventDefault();
									changeAnswerAmount(answers?.at(-1)?.answerRef);
								}}
							>
								<FontAwesomeIcon className="icon" icon={faMinusSquare} />
							</button>
							<button
								className="poll__controls--add"
								onClick={(e) => {
									e.preventDefault();
									changeAnswerAmount();
								}}
							>
								<FontAwesomeIcon className="icon" icon={faPlusSquare} />
							</button>
						</div>

						{isPollLeader && !edit && (
							<Button
								className={`${showResults && "left"}`}
								onClick={(e) => {
									e.preventDefault();
									toggleResults(!showResults);
								}}
							>
								Show{showResults ? " Choices" : " Results"}
							</Button>
						)}
						{isPollLeader && showResults ? (
							<Button
								className="gold"
								onClick={(e) => {
									e.preventDefault();
									toggleResults((prevShowResults) => !prevShowResults);
									clearPoll();
								}}
							>
								Clear Results
							</Button>
						) : null}
						{selectedAnswer !== null && !showResults && !isPollLeader ? (
							<Button
								className="gold"
								onClick={(e) => {
									e.preventDefault();
									toggleResults((prevShowResults) => !prevShowResults);
									studentSubmit(answers[selectedAnswer]?.answerRef);
								}}
							>
								SUBMIT
							</Button>
						) : null}
					</form>
				</div>
			</div>
			<Footer />
		</section>
	);
}
