import React from "react";
import QRCode from "qrcode.react";

export default function RoomCode() {
	function getCode() {
		return typeof window !== "undefined"
			? window.location.pathname.split("/")[2].substring(0, 5)
			: null;
	}
	function getURL() {
		return typeof window !== "undefined" ? window.location : null;
	}

	const code = getCode();
	// const code = "12345";
	const url = getURL();

	return (
		<div class="roomcode">
			<div class="roomcode__box">
				<div class="roomcode__box--titlebox">
					<p class="title">Room Code</p>
				</div>
				<div class="roomcode__box--codebox">
					<p class="code">{code}</p>
				</div>
			</div>
			<div class="roomcode__box">
				<div class="roomcode__box--titlebox">
					<p class="title">Room QRcode</p>
				</div>
				{/* <div class="roomcode__box--qrcodebox">
					<img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img>
				</div> */}
				<QRCode
					value={url}
					size={256}
					bgColor={"#fff"}
					fgColor={"#000"}
					level={"L"}
					includeMargin={true}
					renderAs={"canvas"}
				/>
			</div>
		</div>
	);
}
