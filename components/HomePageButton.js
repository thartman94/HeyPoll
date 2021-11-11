import React from "react";
import Link from "next/link";

function HomePageButton(props) {
	return (
		<button className="home-page-button" onClick={props.buttonClick}>
			{/* <Link href={props.path}> */}
				<a>{props.title}</a>
			{/* </Link> */}
		</button>
	);
}
export default HomePageButton;
