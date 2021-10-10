import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LinkBoxes from "../components/LinkBoxes";

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
			</main>

			<Footer></Footer>
		</div>
	);
}
