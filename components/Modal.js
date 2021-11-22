import React, { useContext } from "react";
import AppContext from "./AppContext";

const Modal = ({ children }) => {
	const { modalVisible, setModalVisibility } = useContext(AppContext);

	return (
		<div className={`modal ${modalVisible && "show"}`}>
			<div
				className="modal__background"
				onClick={() => setModalVisibility(false)}
			/>
			{children}
		</div>
	);
};

export default Modal;
