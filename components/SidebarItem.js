import React, { useState } from "react";
import AnimateHeight from "react-animate-height";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SidebarItem = ({ title, questions }) => {
	const [isOpen, setIsOpen] = useState(false);
	let scollTime = questions.length > 7 ? 700 : questions.length * 100;

	return (
		<li className={`sidebarItem ${isOpen && "open"}`}>
			<button
				className={`sidebarItem__title ${isOpen && "open"}`}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{title}
				<FontAwesomeIcon
					className={`${isOpen && "rotate"}`}
					icon={faChevronDown}
				/>
			</button>

			<AnimateHeight duration={scollTime} height={isOpen ? "auto" : 0}>
				<ul className={`sidebarItem__questions  ${isOpen && "open"}`}>
					{questions.map((question, i) => (
						<li className="sidebarItem__questions--single" key={i}>
							{question}
						</li>
					))}
				</ul>
			</AnimateHeight>
		</li>
	);
};

export default SidebarItem;
