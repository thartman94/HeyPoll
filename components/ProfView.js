import React from "react";
import { Poll } from "./Poll";
import { PollControl } from "./PollControl";
import { Result } from "./Result";

export const ProfView = ({ userRole }) => {
	return (
		<section className="prof-view">
			<div className="relative flex flex-row justify-center w-full">
				{/* <PollControl direction="left" /> */}
				<Poll userRole={userRole} />
				{/* <PollControl direction="right" /> */}
			</div>
		</section>
	);
};
