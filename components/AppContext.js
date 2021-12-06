import React, { createContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
	const [isPollLeader, setPollLeader] = useState(false);
	const [modalVisible, setModalVisibility] = useState(false);
	const [user, loading, error] = useAuthState(auth);
	const [slideIndex, setSlideIndex] = useState(null);
	const [currentPollID, setCurrentPollID] = useState("");

	return (
		<AppContext.Provider
			value={{
				isPollLeader,
				setPollLeader,
				modalVisible,
				setModalVisibility,
				user,
				slideIndex,
				setSlideIndex,
				currentPollID,
				setCurrentPollID,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
