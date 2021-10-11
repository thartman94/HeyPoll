import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LinkBox } from "../components/LinkBox";
import ProjectDetails from "../components/ProjectDetails";
import Roster from "../components/Roster";

export default function AboutUs() {
	return (
		<div className="about-us">
			<Head>
				<title>Software Engineering Team 3</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header title="About Us"></Header>

			<main className="about-us__main">
				<div className="about-us__main--left">
					<ProjectDetails>
						{" "}
						HeyPoll’s purpose is to create a better engagement between students
						and professors or teachers. This is done by giving instructors the
						ability to easily poll students while lecturing. This gives the
						professors the ability to see if students are retaining the
						information or if they need to go into more details of a subject. A
						student gets the ability to see how they are doing in understanding
						the material compared to their classmates.
					</ProjectDetails>
				</div>
				<div className="about-us__main--right">
					<Roster></Roster>
					<div className="links box">
						<p className="title">Links</p>
						<LinkBox link="https://github.com/thartman94/HeyPoll">
							Github
						</LinkBox>
						<LinkBox link="https://trello.com/b/DCUEE3nb/heypoll">
							Trello
						</LinkBox>
						<LinkBox link="	https://docs.google.com/document/d/1WmoHVyQ7_uo9664lQ9L-k1pBZPYesTShY1PLu-DsKL8/edit">
							Design Document
						</LinkBox>
						<LinkBox link="https://github.com/thartman94/HeyPoll">
							User Stories
						</LinkBox>
					</div>
				</div>
			</main>
			<Footer></Footer>
		</div>
	);
}
