import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import LinkBoxes from "../components/LinkBoxes";

export default function Home() {
	return (
		<div className="index">
			<Head>
				<title>HeyPoll</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

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
			</main>

			<Footer></Footer>
		</div>
	);
}
