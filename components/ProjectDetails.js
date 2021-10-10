import React from "react";

export default function ProjectDetails({ children }) {
	return (
		<div className="project-details">
			<h2>Project Details</h2>
			<p>{children}</p>
		</div>
	);
}
