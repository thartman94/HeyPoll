import React, { useContext } from "react";
import Head from "next/head";
import { googleLogin, logOut } from "../firebase/clientApp";
import { createGuestPoll } from "../firebase/clientApp";
import { useRouter } from "next/router";

import AppContext from "../components/AppContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import EnterRoomCode from "../components/EnterRoomCode";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function Home() {
	const router = useRouter();
	const { setModalVisibility } = useContext(AppContext);

	return (
		<div className="index">
			<Head>
				<title>HeyPoll</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="index__main">
				<h1 className="title">
					Welcome to <span className="font-pacifico text-red-600">HeyPoll</span>
				</h1>

				<div className="button-wrapper">
					<Modal>
						<EnterRoomCode />
					</Modal>
					<Button
						className="homepage"
						onClick={() => {
							setModalVisibility(true);
						}}
					>
						Enter Room Code
					</Button>
					<Button
						className="homepage "
						onClick={() => {
							createGuestPoll().then(async (result) => {
								router.push(
									{
										pathname: `/lobbies/${result}`,
										query: result,
									},
									`/lobbies/${result}`
								);
							});
						}}
					>
						Create Poll (as guest)
					</Button>
					<Button
						className="gold homepage"
						onClick={() => {
							googleLogin().then(async (id) => {
								router.push(
									{
										pathname: `/profile/${id}`,
										query: id,
									},
									`/profile/${id}`
								);
							});
						}}
					>
						Sign in / Sign up
					</Button>

					<Button onClick={logOut}>Sign out</Button>
				</div>
			</main>
			<Footer />
		</div>
	);
}
