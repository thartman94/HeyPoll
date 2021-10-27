import React from "react";

export const Answer = ({ index, answerText }) => {
	return (
		<div className="answer">
			<div className="answer__index">{index}</div>
			<div className="answer__body">
				<p>{answerText}</p>
			</div>
		</div>
	);
};
