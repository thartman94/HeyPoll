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
	isProfile,
}) => {
	const { isPollLeader } = useContext(AppContext);
	return (
		<div
			className={`poll__body ${showResults && !isProfile && "show-results"}`}
		>
			{!!answers && (
				<ul className="poll__answers">
					{answers?.map((item, i) => (
						<li
							key={i}
							className={`poll__answers--single ${
								!isPollLeader && !isProfile && "student"
							} ${selectedAnswer === i && "selected"}`}
							onClick={(e) => {
								if (!isPollLeader && !isProfile) {
									selectAnswer(i);
								}
							}}
						>
							<Answer
								index={String.fromCharCode(97 + i)}
								answer={isProfile ? item : item.choice}
								edit={edit}
								docRef={docRef}
							/>
						</li>
					))}
				</ul>
			)}
			<Result answers={answers} />
		</div>
	);
};

export default PollBody;
