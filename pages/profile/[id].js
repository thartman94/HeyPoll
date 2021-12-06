import React, { useContext } from "react";
import AppContext from "../../components/AppContext";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import Poll from "../../components/Poll";

export const getServerSideProps = async (context) => {
	const { id } = context.params;
	return {
		props: { id },
	};
};

function Profile({ id }) {
	const { currentPollID } = useContext(AppContext);

	return (
		<section className="profile">
			<Header className="relative" title="User Profile" />
			<div className="profile__body">
				<Sidebar id={id} />
				<div className="poll-wrapper">{!!currentPollID && <Poll />}</div>
			</div>
			<Footer />
		</section>
	);
}

export default Profile;
