import React from "react";

const Button = ({ className, ...rest }) => {
	return <button {...rest} className={`button ${className}`} />;
};

export default Button;
