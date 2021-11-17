import React, { useState } from "react";
import { Answer } from "./Answer";
import PropTypes from "prop-types";
import RoomCode from "../components/RoomCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlusSquare,
	faMinusSquare,
	faEdit,
	faSave,
} from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import { Result } from "./Result";

export const Poll = ({ userRole }) => {
	const [edit, toggleEdit] = useState(false);
	const [answers, changeAnswersLength] = useState(["Subs", "Pizza", "Sushi"]);
	const [showResults, toggleResults] = useState(false);

	let question = "What should we order for dinner?";

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
	const makeAnswers = (answers) =>
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
	//
	// ============================================================================================
	const BottomButton = () => {
		return (
			userRole === "student" && (
				<button
					className={`poll__save `}
					onClick={(e) => (e.preventDefault(), console.log("User voted"))}
				>
					Vote!
				</button>
			)
		);
	};

	// ============================================================================================
	// Button for professor view to show roomcode
	// ============================================================================================
	const RoomButton = () => {
		return userRole === "professor" ? (
			<button
				className={`poll__roomcodeshow `}
				onClick={(e) => {
					setRoomCode(true);
				}}
			>
				Show Room Code
			</button>
		) : null;
	};

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
	const ToggleView = () => {
		return userRole === "professor" ? (
			<button
				className={`toggle-view ${showResults && "active"}`}
				onClick={(e) => {
					e.preventDefault();
					toggleResults(!showResults);
				}}
			>
				Show{showResults ? " Choices" : " Results"}
			</button>
		) : null;
	};

	// ============================================================================================
	// Button to clear poll results
	// ============================================================================================
	const ClearResults = () => {
		return (userRole === "professor") & (showResults === true) ? (
			<button
				className={`clear-results`}
				onClick={(e) => {
					e.preventDefault();
					toggleResults((prevShowResults) => !prevShowResults);
				}}
			>
				Clear Results
			</button>
		) : null;
	};

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
			{/* {showRoomCode ? (
				<div className="pollroomcode">
					<button
						className={`poll__roomcodehide `}
						onClick={(e) => {
							setRoomCode(false);
						}}
					>
						Hide Room Code
					</button>
					<RoomCode />
				</div>
			) : ( */}
			<form
				className="poll"
				onSubmit={(e) => {
					e.preventDefault();
					console.log("submit poll");
				}}
			>
				<EditButton />

				{/* <RoomButton /> */}
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
				<ToggleView />
				<ClearResults />
				{/* <BottomButton /> */}
			</form>
			{/* )} */}
		</div>
	);
};
