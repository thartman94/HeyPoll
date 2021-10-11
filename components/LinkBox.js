import React from "react";

export const LinkBox = ({ children, link }) => {
	return (
		<a href={link} target="_blank" className="link-box">
			{children}
		</a>
	);
};
