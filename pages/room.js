import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ProfView } from "../components/ProfView";
import { StudentView } from "../components/StudentView";

const room = ({ userRole }) => {
	userRole = "professor";
	//userRole = "student";
	const View = userRole ? ProfView : StudentView;

	return (
		<section className="poll-lobby">
			<Header title="Poll Lobby" />
			<View userRole={userRole} />
			<Footer />
		</section>
	);
};

room.propTypes = {};

export default room;
