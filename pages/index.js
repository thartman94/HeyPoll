import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LinkBoxes from "../components/LinkBoxes";
import HomePageButton from "../components/HomePageButton";
import EnterRoomCode from "../components/EnterRoomCode";
import { JoinLobby, CreatePoll, Login } from "../functions/Functions";
import { googleLogin, logOut } from "../firebase/clientApp";
import { createGuestPoll } from "../firebase/clientApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/dist/client/router";

export default function Home() {
	const router = useRouter();
	let userRole = "professor";

	async function createGuestPollNew() {}

	return (
		<div className="index" style={{ position: "relative" }}>
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

				<div className="button-wrapper">
					<div style = {{display:"none"}} className ="enter-room-div"> <EnterRoomCode/>
						<button className = "close-code-button" onClick ={(e) => {
							e.preventDefault(),
							document.querySelector(".enter-room-div").style.display = "none";
						}}>
							Close
							</button>
					</div> 

					<button
						className="home-page-button"
						onClick={(e) => {
							e.preventDefault(),
								console.log("hello"),
								document.querySelector(".enter-room-div").style.display = "block";
						}}
					>
						Enter Room Code
					</button>
					<HomePageButton
						title={"Create a poll (as guest)"}
						buttonClick={() => {
							createGuestPoll().then(async (result) => {
								// console.log(result);
								router.push(
									{
										pathname: `/lobbies/${result}`,
										query: result,
									},
									`/lobbies/${result}`
								);
							});
						}}
						//path="/room"
					></HomePageButton>
					<HomePageButton
						title={"Sign in / Sign up"}
						buttonClick={googleLogin}
						path="#"
					></HomePageButton>

					<button onClick={logOut}>Sign out</button>
				</div>
			</main>
			<Footer />
		</div>
	);
}
