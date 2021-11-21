import React, { useContext } from "react";
import Button from "./Button";
import AppContext from "./AppContext";
import Modal from "./Modal";
import RoomCode from "./RoomCode";
import { useRouter } from "next/router";

const Header = ({ title }) => {
	const { modalVisible, setModalVisibility, isPollLeader } =
		useContext(AppContext);
	const { pathname } = useRouter();

	return (
		<header className="header">
			<a href="/" className="logo">
				<img src={"./bars-logo.png"} />
			</a>
			<p className="page">{title}</p>
			{pathname.includes("/lobbies") && isPollLeader && (
				<Button
					className={`header ${modalVisible && "is-active"}`}
					onClick={() =>
						setModalVisibility((prevModalVisible) => !prevModalVisible)
					}
				>
					{modalVisible ? "Hide " : "Show "} Room Code
				</Button>
			)}
			{pathname.includes("/lobbies") && (
				<Modal>
					<RoomCode />
				</Modal>
			)}
		</header>
	);
};

export default Header;
