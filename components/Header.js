import React, { useContext } from "react";
import Button from "./Button";
import AppContext from "./AppContext";
import Modal from "./Modal";
import RoomCode from "./RoomCode";

const Header = ({ title }) => {
	const { modalVisible, setModalVisibility } = useContext(AppContext);

	return (
		<header className="header">
			<a href="/" className="logo">
				<img src={"./bars-logo.png"} />
			</a>
			<p className="page">{title}</p>
			{/* <ShowInfoButton /> */}
			<Button
				className={`header ${modalVisible && "is-active"}`}
				onClick={() =>
					setModalVisibility((prevModalVisible) => !prevModalVisible)
				}
			>
				{modalVisible ? "Hide " : "Show "} Room Code
			</Button>
			<Modal>
				<RoomCode />
			</Modal>
		</header>
	);
};

export default Header;
