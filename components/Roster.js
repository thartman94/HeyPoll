import React from "react";

const Roster = () => {
	return (
		<div className="roster box">
			<p className="title">Our Team</p>

			<div className="roster__list owner">
				<p>Product Owner</p>
				<ul>
					<li>
						<a href="#" target="blank">
							Emerson Henkel
						</a>
					</li>
				</ul>
			</div>
			<div className="roster__list scrum-master">
				<p>Scrum Master</p>
				<ul>
					<li>
						<a href="#" target="blank">
							Brian Raley
						</a>
					</li>
				</ul>
			</div>
			<div className="roster__list dev-team">
				<p>Development Team</p>
				<ul>
					<li>
						<a href="#" target="blank">
							Kyle Flannelly
						</a>
					</li>
					<li>
						<a href="https://github.com/thartman94" target="blank">
							Thomas Hartman
						</a>
					</li>
					<li>
						<a href="#" target="blank">
							Zachary Leesman
						</a>
					</li>
					<li>
						<a href="#" target="blank">
							Rithwik Raj Mallam
						</a>
					</li>
					<li>
						<a href="#" target="blank">
							Pradeep Chandra Matam
						</a>
					</li>
				</ul>
			</div>
			<div className="roster__list professsor">
				<p>Professsor</p>
				<ul>
					<li>
						<a href="#" target="blank">
							Jeffrey Pierantozzi
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Roster;
