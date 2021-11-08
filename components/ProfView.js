import React, { useState } from "react";
import { Poll } from "./Poll";
import { PollControl } from "./PollControl";
import { Result } from "./Result";

export const ProfView = ({ userRole }) => {
	const [showResults, toggleResults] = useState(false);

	return (
		<section className="prof-view">
			<div className="relative flex flex-row justify-center w-full">
				<PollControl direction="left" />
				{showResults ? <Result /> : <Poll userRole={userRole} />}
				<PollControl direction="right" />
			</div>
			{/* !change this for acceibility later */}
			<div className={`toggle-results ${showResults ? "results" : null}`}>
				<button
					className="toggle-results__half"
					onClick={(e) => {
						e.preventDefault();
						toggleResults(false);
					}}
				>
					Poll
				</button>
				{/* <div className="toggle-results__divider"></div> */}
				<button
					className="toggle-results__half"
					onClick={(e) => {
						e.preventDefault();
						toggleResults(true);
					}}
				>
					Results
				</button>
			</div>
		</section>
	);
};
