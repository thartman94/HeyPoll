import React from "react";
import QRCode from "qrcode.react";

function QrCode() {
  return (
    <div>
      <h1>Qr code</h1>
      <QRCode id="1" value="https://github.com/" />
    </div>
  );
}

export default QrCode;
