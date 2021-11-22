import React from "react";
import { Answer } from "./Answer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export const Poll = ({ prof, edit, student }) => {
	let choices = 2;
	// prof = true;
	edit = true;
	student = true;

	const edit_title = (e) => {
		e.preventDefault();
		console.log("change question text");
	};

	const add_choice = (e) => {
		e.preventDefault();
		console.log("add choice");
	};

	const remove_choice = (e) => {
		e.preventDefault();
		console.log("remove choice");
	};

	return (
		<div className="poll">
			<div className="poll__question">
				<p>How much wood could a woodchuck chuck?</p>
				{edit && (
					<button onClick={edit_title}>
						<FontAwesomeIcon icon={faEdit} />
					</button>
				)}
			</div>
			<div className="poll__answers">
				<div className="poll__answers--single">
					<Answer index="A" answerText="A whole lot" />
					{edit && (
						<button className="remove" onClick={remove_choice}>
							<FontAwesomeIcon className="icon" icon={faMinusCircle} />
						</button>
					)}
				</div>
				<div className="poll__answers--single">
					<Answer index="B" answerText="Not a bunch" />
					{edit && (
						<button className="remove" onClick={remove_choice}>
							<FontAwesomeIcon className="icon" icon={faMinusCircle} />
						</button>
					)}
				</div>
				<div className="poll__answers--single">
					<Answer index="C" answerText="Need more info" />
					{edit && (
						<button className="remove" onClick={remove_choice}>
							<FontAwesomeIcon className="icon" icon={faMinusCircle} />
						</button>
					)}
				</div>
				{edit && (
					<button className="poll__answers--add" onClick={add_choice}>
						<div className="line"></div>
						<FontAwesomeIcon className="icon" icon={faPlusSquare} />
						<div className="line"></div>
					</button>
				)}
			</div>
		</div>
	);
};
