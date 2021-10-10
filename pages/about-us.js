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
			<Header></Header>

			<main className="about-us__main">
				<div className="about-us__main--left">
					<ProjectDetails>
						{" "}
						Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
						dui. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac
						diam sit amet quam vehicula elementum sed sit amet dui. Donec
						sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget
						tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta
						dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque
						in ipsum id orci porta dapibus. Cras ultricies ligula sed magna
						dictum porta. Nulla quis lorem ut libero malesuada feugiat.
						Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam
						id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Proin eget tortor risus. Vestibulum ac diam sit
						amet quam vehicula elementum sed sit amet dui. Donec rutrum congue
						leo eget malesuada. Pellentesque in ipsum id orci porta dapibus.
						Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
						suscipit tortor eget felis porttitor volutpat. Donec sollicitudin
						molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et,
						porttitor at sem. Quisque velit nisi, pretium ut lacinia in,
						elementum id enim. Cras ultricies ligula sed magna dictum porta.
						Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit,
						eget tincidunt nibh pulvinar a.
					</ProjectDetails>
				</div>
				<div className="about-us__main--right">
					<Roster></Roster>
					<div>
						<LinkBox link="https://github.com/thartman94/HeyPoll"></LinkBox>
					</div>
				</div>
			</main>

			<Footer></Footer>
		</div>
	);
}
