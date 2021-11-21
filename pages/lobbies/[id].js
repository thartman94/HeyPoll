import React, { useContext, useState } from "react";
import AppContext from "../../components/AppContext";
import { db } from "../../firebase/clientApp";
import { doc } from "@firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
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
	const { setPollLeader, isPollLeader } = useContext(AppContext);
	const [edit, toggleEdit] = useState(false);
	const [showResults, toggleResults] = useState(false);
	const [selectedAnswer, selectAnswer] = useState(null);
	const [answerChoices, setAnswerChoices] = useState([
		"Subs",
		"Pizza",
		"Sushi",
		"Burgers",
	]);
	const [pollQuestion, setPollQuestion] = useState(
		"What should we order for dinner?"
	);

	const docRef = doc(db, "guestPolls", id);
	const [poll, isLoading, Error] = useDocumentData(docRef, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const { user } = useContext(AppContext);

	setPollLeader(!!poll && !!user && poll.guestID === user.uid);

	return (
		<section className="poll-lobby">
			<Header title="Poll Lobby" />
			<section className="prof-view">
				<div className="relative flex flex-row justify-center w-full">
					<form className="poll">
						{isPollLeader && (
							<EditButton
								edit={edit}
								onClick={(e) => {
									e.preventDefault();
									toggleEdit((prevEdit) => !prevEdit);
								}}
							/>
						)}
						<div className="poll__question">
							<Input readonly={!edit} value={pollQuestion} />
						</div>
						<div className="poll__wrapper">
							<PollBody
								showResults={showResults}
								selectedAnswer={selectedAnswer}
								edit={edit}
								selectAnswer={selectAnswer}
								answerChoices={answerChoices}
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
			</section>
			<Footer />
		</section>
	);
}
