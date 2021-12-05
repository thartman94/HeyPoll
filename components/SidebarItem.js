import React from "react";

const SidebarItem = ({ title, questions }) => {
	return (
		<li>
			<p>{title}</p>
			<ul>
				{questions.map((question, i) => (
					<li key={i}>{question}</li>
				))}
			</ul>
		</li>
	);
};

export default SidebarItem;
