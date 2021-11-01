import React from "react";
import Link from "next/link";

function HomePageButton(props) {
	return (
		<div className="home-page-button">
			<Link href={props.path}>
				<a>{props.title}</a>
			</Link>
		</div>
	);
}
export default HomePageButton;
