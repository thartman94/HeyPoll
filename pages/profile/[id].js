import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import Poll from "../../components/Poll";

function profile() {
	return (
		<section className="profile">
			<Header className="relative" title="User Profile" />
			<div className="profile__body">
				<Sidebar />
				<div className="poll-wrapper">
					<Poll />
				</div>
			</div>
			<Footer />
		</section>
	);
}

export default profile;
