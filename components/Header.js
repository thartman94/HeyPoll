import React from "react";
import logo from "../public/bars-logo.png";

const Header = ({ title, front, prof, edit }) => {
	const open_menu = (e) => {
		e.preventDefault();
		console.log("open");
	};
	return (
		<header className="header">
			<a href="/" className="logo">
				<img src={"./bars-logo.png"} />
			</a>
			<p className="page">{title}</p>
			<button className="hamburger" onClick={open_menu}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</button>
		</header>
	);
};

export default Header;
