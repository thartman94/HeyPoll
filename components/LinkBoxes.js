import React from "react";

const LinkBoxes = () => {
	return (
		<div className="link-boxes">
			<a
				href="https://github.com/thartman94/se-project"
				target="_blank"
				className="single hover:bg-blue-500 focus:bg-blue-500"
			>
				<h3 className="text-2xl font-bold">Github &rarr;</h3>
				<p className="mt-4 text-xl">
					Look through the source code and see what's under the hood.
				</p>
			</a>

			<a
				href="https://trello.com/b/DCUEE3nb/classroom-polling-app-project"
				target="_blank"
				className="single hover:bg-red-500 focus:bg-red-500"
			>
				<h3 className="text-2xl font-bold">Trello &rarr;</h3>
				<p className="mt-4 text-xl">
					See what's on everyone's plate and upcoming features.
				</p>
			</a>

			<a
				href="https://docs.google.com/spreadsheets/d/1oq34ixRLF8oJ9MaO9eC47HMd9Elg3y2axLFqoWarMKE/edit#gid=0"
				target="_blank"
				className="single hover:bg-green-600 focus:bg-green-600"
			>
				<h3 className="text-2xl font-bold">User Stories &rarr;</h3>
				<p className="mt-4 text-xl">Take a look at what we aim to acomplish.</p>
			</a>

			<a
				href="https://www.vets4pets.com/siteassets/species/dog/large-dog-on-walk-looking-over-hills.jpg?w=585&scale=down"
				target="_blank"
				className="single hover:bg-yellow-500 focus:bg-yellow-500"
			>
				<h3 className="text-2xl font-bold">Dog &rarr;</h3>
				<p className="mt-4 text-xl">
					Didn't have anything for this box... so here's a dog. 😊
				</p>
			</a>
		</div>
	);
};

export default LinkBoxes;
