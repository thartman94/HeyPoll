import React, { useContext } from "react";
import AppContext from "./AppContext";
import Answer from "./Answer";
import Result from "./Result";

const PollBody = ({
	showResults,
	selectedAnswer,
	edit,
	selectAnswer,
	answers,
}) => {
	const { isPollLeader } = useContext(AppContext);
	return (
		<div className={`poll__body ${showResults && "show-results"}`}>
			<div className="poll__answers">
				{answers?.map((item, i) => (
					<div
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
							answer={item}
							edit={edit}
						/>
					</div>
				))}
			</div>
			<Result answers={answers} />
		</div>
	);
};

export default PollBody;
