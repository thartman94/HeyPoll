import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppContext from "./AppContext";

const Input = ({ readonly, value, ...rest }) => {
	const { isPollLeader } = useContext(AppContext);

	return (
		<input
			className={`${!isPollLeader && "student"} ${readonly && "locked"}`}
			readOnly={readonly && "readonly"}
			autoComplete="off"
			value={readonly ? value : null}
			placeholder={readonly ? "" : value}
			{...rest}
		/>
	);
};

Input.propTypes = {};

export default Input;
