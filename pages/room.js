import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ProfView } from "../components/ProfView";
import { StudentView } from "../components/StudentView";

const room = ({ prof }) => {
	/*
	 * Here temproraily, ability to detect if user is professor or student
	 * remains to be developed
	 */
	prof = true;

	const View = prof ? ProfView : StudentView;

	return (
		<section className="poll-lobby">
			<Header title="Poll Lobby" />
			<View prof={prof} />
			<Footer />
		</section>
	);
};

room.propTypes = {};

export default room;
