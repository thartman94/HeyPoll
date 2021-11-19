import React from "react";
import { Poll } from "./Poll";
import { PollControl } from "./PollControl";

export const ProfView = () => {
	return (
		<section className="prof-view">
			<div className="relative flex flex-row justify-center w-full">
				{/* <PollControl direction="left" /> */}
				<Poll />
				{/* <PollControl direction="right" /> */}
			</div>
		</section>
	);
};
