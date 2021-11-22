import React, { useContext } from "react";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { getFullCode } from "../firebase/clientApp";
import Button from "./Button";
import AppContext from "./AppContext";

export default function EnterRoomCode() {
	const { setModalVisibility } = useContext(AppContext);
	const [text, setText] = useState("");
	const [errorText, setErrorText] = useState("");
	const router = useRouter();

	return (
		<form className="enter-code">
			<p className="enter-code__title">Enter room code: </p>
			<div className="enter-code__input-wrapper">
				<input
					className="enter-code__input-wrapper--input"
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<p
					className={`enter-code__input-wrapper--error ${
						errorText && "active"
					}`}
				>
					{errorText}
				</p>
				<div className="enter-code__input-wrapper--buttons">
					<Button
						className="enter-code"
						onClick={(e) => {
							e.preventDefault();
							setErrorText("");
							setModalVisibility(false);
						}}
					>
						Cancel
					</Button>
					<Button
						className="enter-code gold"
						onClick={(e) => {
							e.preventDefault();
							getFullCode(text).then(async (result) => {
								if (result === "none") {
									setErrorText("Error: invalid room code");
								} else {
									router.push(
										{
											pathname: `/lobbies/${result}`,
											query: result,
										},
										`/lobbies/${result}`
									);
									setModalVisibility(false);
									setErrorText("");
								}
							}),
								setText("");
						}}
					>
						Join
					</Button>
				</div>
			</div>
		</form>
	);
}
