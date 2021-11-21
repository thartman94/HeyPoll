import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import AppContext from "./AppContext";
import Input from "./Input";
import Button from "./Button";
import PollBody from "./PollBody";
import EditButton from "./EditButton";

const Poll = ({ poll }) => {
	const { isPollLeader } = useContext(AppContext);
	const [edit, toggleEdit] = useState(false);
	const [showResults, toggleResults] = useState(false);
	const [selectedAnswer, selectAnswer] = useState(null);
	const [answerChoices, setAnswerChoices] = useState([
		"Subs",
		"Pizza",
		"Sushi",
		"Burgers",
	]);

	let question = "What should we order for dinner?";
	return (
		<div>
			<form
				className="poll"
				onSubmit={(e) => {
					e.preventDefault();
					console.log("submit poll");
				}}
			>
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
					<Input readonly={!edit} value={question} />
				</div>
				<div className="poll__wrapper">
					<PollBody
						showResults={showResults}
						selectedAnswer={selectedAnswer}
						edit={edit}
						selectAnswer={selectAnswer}
						answerChoices={answerChoices}
					/>
				</div>
				<div className={`poll__controls ${!edit ? "hidden" : ""}`}>
					<button
						className="poll__controls--minus"
						onClick={(e) => {
							e.preventDefault();
							setAnswerChoices((answerChoices) => answerChoices.slice(0, -1));
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
	);
};

export default Poll;
