import React, { useContext } from "react";
import AppContext from "./AppContext";
import Answer from "./Answer";
import Result from "./Result";

const PollBody = ({
	showResults,
	answers,
	selectedAnswer,
	edit,
	selectAnswer,
}) => {
	const { userRole } = useContext(AppContext);
	return (
		<div className={`poll__body ${showResults && "show-results"}`}>
			<div className="poll__answers">
				{answers.map((item, i) => (
					<div
						key={i}
						className={`poll__answers--single ${userRole} ${
							selectedAnswer === i && "selected"
						}`}
						onClick={(e) => {
							if (userRole === "student") {
								selectAnswer(i);
							}
						}}
					>
						<Answer
							index={String.fromCharCode(97 + i)}
							answer={item}
							edit={edit}
							userRole={userRole}
						/>
					</div>
				))}
			</div>
			<Result />
		</div>
	);
};

export default PollBody;
