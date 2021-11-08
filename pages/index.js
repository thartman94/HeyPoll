import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LinkBoxes from "../components/LinkBoxes";
import HomePageButton from "../components/HomePageButton";
import EnterRoomCode from "../components/EnterRoomCode";
import { JoinLobby, CreatePoll, Login } from "../functions/Functions";

export default function Home() {
	return (
		<div className="index" style={{position:"relative"}}>
			<Head>
				<title>HeyPoll</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main className="index__main">
				<h1 className="title">
					Welcome to <span className="text-red-600 font-pacifico">HeyPoll</span>
				</h1>
				<br></br>

				<div>

					<EnterRoomCode/>

					<button  
						className="home-page-button"
						onClick={(e) => {
        				e.preventDefault(),
        				console.log("hello"),
        				document.querySelector(".EnterRoomDiv").classList.add('active')
					}}>
						
						Enter Room Code
					</button>
					<HomePageButton
						title={"Create a poll (as guest)"}
						buttonClick={CreatePoll}
						path="/room"
					></HomePageButton>
					<HomePageButton
						title={"Sign in / Sign up"}
						buttonClick={Login}
						path="#"
					></HomePageButton>
				</div>
			</main>
			<Footer />
		</div>
	);
}
