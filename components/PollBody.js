import React, { useContext, useRef } from "react";
import AppContext from "./AppContext";
import Answer from "./Answer";
import Result from "./Result";

const PollBody = ({
	showResults,
	selectedAnswer,
	edit,
	selectAnswer,
	answers,
	docRef,
}) => {
	const { isPollLeader } = useContext(AppContext);
	return (
		<div className={`poll__body ${showResults && "show-results"}`}>
			<ul className="poll__answers">
				{answers?.map((item, i) => (
					<li
						key={i}
						className={`poll__answers--single ${!isPollLeader && "student"} ${
							selectedAnswer === i && "selected"
						}`}
						onClick={(e) => {
							if (!isPollLeader) {
								selectAnswer(i);
							}
						}}
					>
						<Answer
							index={String.fromCharCode(97 + i)}
							answer={item.choice}
							edit={edit}
							docRef={docRef}
						/>
					</li>
				))}
			</ul>
			<Result answers={answers} />
		</div>
	);
};

export default PollBody;
