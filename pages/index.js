import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LinkBoxes from "../components/LinkBoxes";
import HomePageButton from "../components/HomePageButton";
import { JoinLobby, CreatePoll, Login } from "../functions/Functions";

export default function Home() {
	return (
		<div className="index">
			<Head>
				<title>HeyPoll</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main className="index__main">
				<h1 className="title">
					Welcome to <span className="font-pacifico text-red-600">HeyPoll</span>
				</h1>
				<br></br>
				<div>
					<HomePageButton
						title={"Join a lobby"}
						buttonClick={JoinLobby}
					></HomePageButton>
					<HomePageButton
						title={"Create a poll (as guest)"}
						buttonClick={CreatePoll}
						path="/room"
					></HomePageButton>
					<HomePageButton
						title={"Sign in / Sign up"}
						buttonClick={Login}
					></HomePageButton>
				</div>
			</main>
			<Footer />
		</div>
	);
}
