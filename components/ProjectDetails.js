import React from "react";

export default function ProjectDetails({ children }) {
	return (
		<div className="project-details box">
			<p className="title">Project Details</p>
			<p>{children}</p>
		</div>
	);
}
