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

<<<<<<< HEAD
			<main className="index__main">
				<h1 className="title">
					Welcome to <span className="font-pacifico text-red-600">HeyPoll</span>
				</h1>
=======
			<main className="index__main font-mont">
				<h2 className="title">
					Welcome to <span className="nextjs">Group 3!</span>
				</h2>

				<p className="mt-3 text-2xl">
					Get started by editing{" "}
					<code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
						pages/index.js
					</code>
				</p>
				<LinkBoxes></LinkBoxes>
>>>>>>> 775d5608d4ab079cacfd1567252e8c1a639d8f42
			</main>

			<Footer></Footer>
		</div>
	);
}
