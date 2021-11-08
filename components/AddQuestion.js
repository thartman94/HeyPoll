import React from "react";
import { useState } from "react";

const AddQuestion = ({ onAdd }) => {
	const [text, setText] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if (!text) {
			alert("Please enter a question");
			return;
		}
		onAdd({ text });
		setText("");
	};
	return (
		<div className="addQuestion">
			<form className="poll-editor-form" onSubmit={onSubmit}>
				<div className="formControl">
					<label className="questionLabel">Question: </label>
					<input
						className="questionInput"
						type="text"
						placeholder="Enter Question"
						value={text}
						onChange={(e) => setText(e.target.value)}
					></input>
				</div>
				<input className="questionSubmit" type="submit" value="Save Question" />
			</form>
			<div className="poll-editor-questions"></div>
		</div>
	);
};

export default AddQuestion;
