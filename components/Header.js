import React, { useContext } from "react";
import Button from "./Button";
import AppContext from "./AppContext";
import Modal from "./Modal";
import RoomCode from "./RoomCode";
import { useRouter } from "next/router";

const Header = ({ title }) => {
	const { modalVisible, setModalVisibility, userRole } = useContext(AppContext);
	const { pathname } = useRouter();

	const includeRoomCodes = pathname.includes("/lobbies");

	return (
		<header className="header">
			<a href="/" className="logo">
				<img src={"./bars-logo.png"} />
			</a>
			<p className="page">{title}</p>
			{includeRoomCodes && userRole === "professor" && (
				<Button
					className={`header ${modalVisible && "is-active"}`}
					onClick={() =>
						setModalVisibility((prevModalVisible) => !prevModalVisible)
					}
				>
					{modalVisible ? "Hide " : "Show "} Room Code
				</Button>
			)}
			{includeRoomCodes && (
				<Modal>
					<RoomCode />
				</Modal>
			)}
		</header>
	);
};

export default Header;
