import React from "react";
import { Poll } from "./Poll";

export const ProfView = ({ userRole }) => {
	return (
		<section className="prof-view">
			<Poll userRole={userRole} />
		</section>
	);
};
