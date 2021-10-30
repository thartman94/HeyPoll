import React, { useState } from "react";
import { Answer } from "./Answer";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";

export const Poll = ({ userRole }) => {
	const [edit, toggleEdit] = useState(false);

	userRole = "student";
	// userRole = "professor";
	// userRole = "spectator";

	let question = "What should we order for dinner?";
	let answers = ["Subs", "Pizza", "Sushi"];

	// function to switch the selected answer
	const selectAnswer = (e) => {
		e.preventDefault();
		e.target.closest(".poll__answers--single").classList.toggle("selected");
		console.log("clicked answer");
	};

	// function that creates a list of answers
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

	return (
		<form
			className="poll"
			onSubmit={(e) => {
				e.preventDefault();
				console.log("submit poll");
			}}
		>
			<button
				className="poll__edit"
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
