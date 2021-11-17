import React from "react";
import RoomCode from "../components/RoomCode";

const Header = ({ title }) => {
	const toggleModal = (e) => {
		e.preventDefault();
		const modal = e.target.closest(".header").querySelector(".info-modal");
		const button = e.target.closest(".header").querySelector(".show-code");

		if (modal.classList.contains("is-active")) {
			modal.classList.remove("is-active");
			button.innerHTML = "Show Room Code";
			button.classList.remove("is-active");
		} else {
			modal.classList.add("is-active");
			button.innerHTML = "Hide Room Code";
			button.classList.add("is-active");
		}
	};

	const ShowInfoButton = () => {
		if (!(typeof window === "undefined")) {
			return window.location.href.includes("/lobbies") ? (
				<button className="show-code" onClick={toggleModal}>
					Show Room Code
				</button>
			) : null;
		} else {
			return null;
		}
	};

	const RoomInfoModal = () => (
		<div className="info-modal" onClick={toggleModal}>
			<RoomCode />
		</div>
	);

	return (
		<header className="header">
			<a href="/" className="logo">
				<img src={"./bars-logo.png"} />
			</a>
			<p className="page">{title}</p>
			{/* <button className="show-code" onClick={open_menu}>
				Show Join Info
			</button> */}
			<ShowInfoButton />
			<RoomInfoModal />
		</header>
	);
};

export default Header;
