import React from "react";
import AppContext from "./AppContext";
import Input from "./Input";

const Answer = ({ index, edit, answer }) => {
	return (
		<div className="answer">
			<div className="answer__index">{index}</div>
			<div className="answer__body">
				<Input
					className="poll__answer--input"
					readonly={!edit}
					value={answer}
				/>
			</div>
		</div>
	);
};

export default Answer;
