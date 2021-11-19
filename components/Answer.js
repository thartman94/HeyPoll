import React from "react";
import Input from "./Input";

const Answer = ({ index, edit, answer, userRole }) => {
	return (
		<div className="answer">
			<div className="answer__index">{index}</div>
			<div className="answer__body">
				<Input readonly={!edit} value={answer} userRole={userRole} />
			</div>
		</div>
	);
};

export default Answer;
