import React, { useContext, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Poll from "../../components/Poll";

function profile() {
	return (
		<div className="profile">
			<div className="sidebar">
				<Sidebar />
				<div className="profilepoll">
					<Poll />
				</div>
			</div>
		</div>
	);
}

export default profile;
