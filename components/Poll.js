import React, { useState } from "react";
import { Answer } from "./Answer";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";

export const Poll = ({ userRole }) => {
	const [edit, toggleEdit] = useState(false);
	const [answers, changeAnswersLength] = useState(["Subs", "Pizza", "Sushi"]);

	let question = "What should we order for dinner?";
	// let answers = ["Subs", "Pizza", "Sushi"];

	// ============================================================================================
	//  swich which answer is sleceted when a student clicks on one
	// ============================================================================================
	const selectAnswer = (e) => {
		e.preventDefault();
		const selectedAnswer = e.target.closest(".poll__answers--single");
		document.querySelectorAll(".poll__answers--single").forEach((answer) => {
			answer === selectedAnswer
				? answer.classList.add("selected")
				: answer.classList.remove("selected");
		});
	};

	// ============================================================================================
	// function that creates a list of answers divs, think of it like a for-each loop
	// ============================================================================================
	const makeAnswers = (items) =>
		answers.map((item, i) => (
			<div
				className={`poll__answers--single ${userRole}`}
				onClick={(e) => {
					if (userRole === "student") {
						selectAnswer(e);
					}
				}}
			>
				<Answer
					key={i}
					index={String.fromCharCode(97 + i)}
					answer={item}
					edit={edit}
					userRole={userRole}
				/>
			</div>
		));

	// ============================================================================================
	// Component
	// ============================================================================================
	return (
		<form
			className="poll"
			onSubmit={(e) => {
				e.preventDefault();
				console.log("submit poll");
			}}
		>
			<button
				className={`poll__edit ${userRole === "professor" ? "" : "hidden"}`}
				onClick={(e) => {
					e.preventDefault();
					toggleEdit((prevEdit) => !prevEdit);
				}}
			>
				Edit
			</button>
			<div className="poll__question">
				<Input readonly={!edit} value={question} />
			</div>
			<div className="poll__answers">{makeAnswers(answers)}</div>
			<div className="poll__controls">
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
			<input
				className={`poll__save ${!edit ? "hidden" : ""}`}
				type="submit"
				value="Save"
			/>
		</form>
	);
};

Input.propTypes = {
	userRole: PropTypes.oneOf(["professor", "student", "spectator"]).isRequired,
};
