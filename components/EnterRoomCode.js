import { faAlignCenter, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";



export default function EnterRoomCode() {
  const [code, roomCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(code)
  }

  return (
    <form onSubmit={handleSubmit} className="EnterRoomDiv">
      <label>Enter room code:
        <input
          type="text" 
          value={code}
          onChange={(e) => roomCode(e.target.value)}
        />
      </label>
      <input
          className="EnterRoomSubmit"
          type="submit" />
    </form>
  )
}

