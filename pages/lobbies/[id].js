import React from "react";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ProfView } from "../../components/ProfView";
import { StudentView } from "../../components/StudentView";
import { useRouter } from "next/dist/client/router";

export default function Lobby() {
	const router = useRouter();
	const pollID = router.query.id;

	let userRole = "professor";
	// let userRole = "student";

	const View = userRole ? ProfView : StudentView;
	console.log(pollID, userRole);

	return (
		<section className="poll-lobby">
			<Header title="Poll Lobby" />
			<View userRole={userRole} />
			<Footer />
		</section>
	);
}
