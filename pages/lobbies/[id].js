import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../components/AppContext";
import { db } from "../../firebase/clientApp";
import { doc, setDoc, onSnapshot } from "@firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import PollBody from "../../components/PollBody";
import EditButton from "../../components/EditButton";

// holding this for later... dont touch :)
// document.dispatchEvent(event);
// setTimeout(() => {
// 	formResponse.innerHTML = "";
// }, 5000);
// if (this.hasDownloadTarget) this.downloadTarget.click();
// form.reset();

export const getServerSideProps = async (context) => {
	const { id } = context.params;
	return {
		props: { id },
	};
};

export default function Lobby({ id }) {
	const { setPollLeader, isPollLeader } = useContext(AppContext);
	const [edit, toggleEdit] = useState(false);
	const [showResults, toggleResults] = useState(false);
	const [selectedAnswer, selectAnswer] = useState(null);

	const docRef = doc(db, "guestPolls", id);
	const [poll, isLoading, Error] = useDocumentData(docRef, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const [answerChoices, setAnswerChoices] = useState(poll?.answers);
	const [pollQuestion, setPollQuestion] = useState(poll?.question);
	const { user } = useContext(AppContext);

	setPollLeader(!!poll && !!user && poll.guestID === user.uid);

	// useEffect(() => {
	// const docRef = doc(db, "guestPolls", id);
	// const [poll, isLoading, Error] = useDocumentData(docRef, {
	// 	snapshotListenOptions: { includeMetadataChanges: true },
	// });
	// }),
	// 	[id];

	let newPoll = onSnapshot(docRef, (snapshot) => {
		setAnswerChoices(snapshot.data().answers);
		setPollQuestion(snapshot.data().question);
	});

	// console.log(newPoll);

	const savePoll = (e) => {
		const newQuestion = e.target
			.closest(".poll")
			.querySelector(".poll__question--actual").value;
		const answerList = e.target
			.closest(".poll")
			.querySelectorAll(".poll__answer--input");
		const newAnswers = [];
		for (let i = 0; i < answerList.length; i++) {
			newAnswers[i] = answerList[i].value;
		}

		setDoc(
			docRef,
			{ question: newQuestion, answers: newAnswers },
			{ merge: true }
		);
	};

	return (
		<section className="poll-lobby">
			<Header title="Poll Lobby" />
			<div className="prof-view">
				<div className="relative flex flex-row justify-center w-full">
					<form className="poll">
						{isPollLeader && (
							<EditButton
								edit={edit}
								onClick={(e) => {
									e.preventDefault();
									toggleEdit((prevEdit) => !prevEdit);

									savePoll(e);
								}}
							/>
						)}
						<div className="poll__question">
							<Input
								className="poll__question--actual"
								readonly={!edit}
								// value={poll?.question}
								value={pollQuestion}
							/>
						</div>
						<div className="poll__wrapper">
							<PollBody
								showResults={showResults}
								selectedAnswer={selectedAnswer}
								edit={edit}
								selectAnswer={selectAnswer}
								// answers={poll?.answers}
								answers={answerChoices}
								setAnswerChoices={setAnswerChoices}
							/>
						</div>
						<div className={`poll__controls ${!edit ? "hidden" : ""}`}>
							<button
								className="poll__controls--minus"
								onClick={(e) => {
									e.preventDefault();
									setAnswerChoices((answerChoices) =>
										answerChoices.slice(0, -1)
									);
								}}
							>
								<FontAwesomeIcon className="icon" icon={faMinusSquare} />
							</button>
							<button
								className="poll__controls--add"
								onClick={(e) => {
									e.preventDefault();
									setAnswerChoices((answerChoices) => [...answerChoices, ""]);
								}}
							>
								<FontAwesomeIcon className="icon" icon={faPlusSquare} />
							</button>
						</div>

						{isPollLeader && (
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
