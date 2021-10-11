import React from "react";
import logo from "../public/bars-logo.png";

const Header = ({ title, front }) => {
	return (
		<header className="header">
			<a href="/" className="logo">
				<img src={"./bars-logo.png"} />
			</a>
			<p className="page">{title}</p>
		</header>
	);
};

export default Header;
