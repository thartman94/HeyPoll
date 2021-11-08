import React from "react";

export default function RoomCode(){
    return (
        <div class="roomcode">
            <div class="roomcode__box1">
                <div class="roomcode__titlebox">
                    <p class="title">Room Code</p>
                </div>
                <div class="roomcode__codebox">
                    <p class="code">ABCDE</p>
                </div>
            </div>
            <div class="roomcode__box2">
                <div class="roomcode__titlebox">
                    <p class="title">Room QRcode</p>
                </div>
                <div class="roomcode__qrcodebox">
                    <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"></img>
                </div>
            </div>
        </div>
    );
}