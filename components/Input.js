import React from "react";
import PropTypes from "prop-types";

const Input = ({ readonly, value, userRole }) => {
	return (
		<input
			className={`${userRole} ${readonly && "locked"}`}
			readOnly={readonly && "readonly"}
			autoComplete="off"
			value={readonly ? value : null}
			placeholder={readonly ? "" : value}
		/>
	);
};

Input.propTypes = {};

export default Input;
