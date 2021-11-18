import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlusSquare,
	faMinusSquare,
	faEdit,
	faSave,
} from "@fortawesome/free-solid-svg-icons";

import Input from "./Input";
import { Result } from "./Result";
import { Answer } from "./Answer";

export const Poll = ({ userRole }) => {
	const [edit, toggleEdit] = useState(false);
	const [answers, changeAnswersLength] = useState(["Subs", "Pizza", "Sushi"]);
	const [showResults, toggleResults] = useState(false);
	const [selectedAnswer, selectAnswer] = useState(null);

	let question = "What should we order for dinner?";

	// ============================================================================================
	// function that creates a list of answers divs, think of it like a for-each loop
	// ============================================================================================
	const makeAnswers = (answers) =>
		answers.map((item, i) => (
			<div
				key={i}
				className={`poll__answers--single ${userRole} ${
					selectedAnswer === i && "selected"
				}`}
				onClick={(e) => {
					if (userRole === "student") {
						selectAnswer(i);
					}
				}}
			>
				<Answer
					index={String.fromCharCode(97 + i)}
					answer={item}
					edit={edit}
					userRole={userRole}
				/>
			</div>
		));

	// ============================================================================================
	//	Function for Student submitting answer
	// ============================================================================================
	const submitAnswer = (e) => {
		e.preventDefault();
		const answer = document.querySelector(".selected");
		const response = document.querySelector(".response");
		if (answer) {
			toggleResults((prevShowResults) => !prevShowResults);
		}
	};

	// ============================================================================================
	//	Button for students to submit answer
	// ============================================================================================
	const SubmitAnswer = () => (
		<button className={`save-answer`} onClick={submitAnswer}>
			SUBMIT
		</button>
	);

	// ============================================================================================
	// Answer section of the poll compnent
	// ============================================================================================
	const PollBody = () => (
		<div className={`poll__body ${showResults && "show-results"}`}>
			<div className="poll__answers">{makeAnswers(answers)}</div>
			<Result />
		</div>
	);

	// ============================================================================================
	// Button to switch between answers and results
	// ============================================================================================
	const ToggleView = () => (
		<button
			className={`toggle-view ${showResults && "active"}`}
			onClick={(e) => {
				e.preventDefault();
				toggleResults(!showResults);
			}}
		>
			Show{showResults ? " Choices" : " Results"}
		</button>
	);

	// ============================================================================================
	// Button to clear poll results
	// ============================================================================================
	const ClearResults = () => (
		<button
			className={`clear-results`}
			onClick={(e) => {
				e.preventDefault();
				toggleResults((prevShowResults) => !prevShowResults);
			}}
		>
			Clear Results
		</button>
	);

	// ============================================================================================
	// Edit Button
	// ============================================================================================
	const EditButton = () => {
		return (
			userRole === "professor" && (
				<button
					className="poll__edit"
					onClick={(e) => {
						e.preventDefault();
						toggleEdit((prevEdit) => !prevEdit);
					}}
				>
					{edit ? (
						<FontAwesomeIcon className="icon active" icon={faSave} />
					) : (
						<FontAwesomeIcon className="icon" icon={faEdit} />
					)}
				</button>
			)
		);
	};

	// ============================================================================================
	// Main Component
	// ============================================================================================
	return (
		<div>
			<form
				className="poll"
				onSubmit={(e) => {
					e.preventDefault();
					console.log("submit poll");
				}}
			>
				<EditButton />
				<div className="poll__question">
					<Input readonly={!edit} value={question} />
				</div>
				<div className="poll__wrapper">
					<PollBody showResults={showResults} />
				</div>
				<div className={`poll__controls ${!edit ? "hidden" : ""}`}>
					<button
						className="poll__controls--minus"
						onClick={(e) => {
							e.preventDefault();
							changeAnswersLength((prevAnswers) => prevAnswers.slice(0, -1));
						}}
					>
						<FontAwesomeIcon className="icon" icon={faMinusSquare} />
					</button>
					<button
						className="poll__controls--add"
						onClick={(e) => {
							e.preventDefault();
							changeAnswersLength((prevAnswers) => [...prevAnswers, ""]);
						}}
					>
						<FontAwesomeIcon className="icon" icon={faPlusSquare} />
					</button>
				</div>

				{userRole === "professor" && <ToggleView />}
				{userRole === "professor" && showResults === true ? (
					<ClearResults />
				) : null}
				{selectedAnswer !== null && !showResults && userRole === "student" ? (
					<SubmitAnswer />
				) : null}
			</form>
		</div>
	);
};
