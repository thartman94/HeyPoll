import React from "react";

const Roster = () => {
	return (
		<div className="roster">
			<p className="roster__title">Our Team</p>

			<div className="roster__list owner">
				<p>Product Owner</p>
				<ul>
					<li>Emerson Henkel</li>
				</ul>
			</div>
			<div className="roster__list scrum-master">
				<p>Scrum Master</p>
				<ul>
					<li>Brian Raley</li>
				</ul>
			</div>
			<div className="roster__list dev-team">
				<p>Development Team</p>
				<ul>
					<li>Kyle Flannelly</li>
					<li>Thomas Hartman</li>
					<li>Zachary Leesman</li>
					<li>Rithwik Raj Mallam</li>
					<li>Pradeep Chandra Matam</li>
				</ul>
			</div>
			<div className="roster__list professsor">
				<p>Professsor</p>
				<ul>
					<li>Jeffrey Pierantozzi</li>
				</ul>
			</div>
		</div>
	);
};

export default Roster;
