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
import { collection, doc, addDoc, setDoc } from "firebase/firestore";

export default function Home() {
	const router = useRouter();

	return (
		<div className="index" style={{ position: "relative" }}>
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

				<div className="button-wrapper">
					{/* <div><EnterRoomCode/></div> */}

					<button
						className="home-page-button"
						onClick={(e) => {
							e.preventDefault(),
								console.log("hello"),
								document.querySelector(".EnterRoomDiv").classList.add("active");
						}}
					>
						Enter Room Code
					</button>
					<HomePageButton
						title={"Create a poll (as guest)"}
						buttonClick={function (event) {
							createGuestPoll();
							router.push(`/room/`);
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
