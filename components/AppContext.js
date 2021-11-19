import React, { createContext, useState } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
	const [userRole, setRole] = useState("professor");

	return (
		<AppContext.Provider value={{ userRole, setRole }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
