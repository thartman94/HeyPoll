import React from "react";
import { faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditButton = ({ edit, ...rest }) => {
	return (
		<button className="poll__edit" {...rest}>
			{edit ? (
				<FontAwesomeIcon className="icon active" icon={faSave} />
			) : (
				<FontAwesomeIcon className="icon" icon={faEdit} />
			)}
		</button>
	);
};

export default EditButton;
