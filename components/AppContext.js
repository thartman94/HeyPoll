import React, { createContext, useState } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
	const [userRole, setRole] = useState("professor");
	const [modalVisible, setModalVisibility] = useState(false);

	return (
		<AppContext.Provider
			value={{ userRole, setRole, modalVisible, setModalVisibility }}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
