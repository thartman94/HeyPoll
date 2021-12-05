//import useState hook to create menu collapse state
import React, { useState } from "react";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<h3>Sidebar</h3>
				<button className="sidebar__toggle" />
			</div>
		</div>
	);
};

export default Sidebar;
