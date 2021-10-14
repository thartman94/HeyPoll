import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LinkBoxes from "../components/LinkBoxes";
import HomePageButton from "../components/HomePageButton";
import JoinLobby from "../components/JoinLobby";
import Login from "../components/Login";
import CreatePoll from "../components/CreatePoll";

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
					Welcome to <span className="text-red-600 font-pacifico">HeyPoll</span>
				</h1>
				<div>
					<HomePageButton 
						title={'Join a lobby'}
						buttonClick={JoinLobby}
					></HomePageButton>
					<HomePageButton 
						title={'Create a poll (as guest)'}
						buttonClick={CreatePoll}	
					></HomePageButton>
					<HomePageButton 
						title={'Sign in / Sign up'}
						buttonClick={Login}
					></HomePageButton>
				</div>
			</main>

			<Footer></Footer>
		</div>
	);
}
