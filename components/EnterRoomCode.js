import { faAlignCenter, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { getFullCode } from "../firebase/clientApp";


export default function EnterRoomCode() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault(),
    console.log("submitted")
    getFullCode(text).then(async (result) => {
      if(result == "none"){
        alert("invalid poll code")
      }else{
        router.push(
          {
            pathname: `/lobbies/${result}`,
            query: result,
         },
         `/lobbies/${result}`
        )
      }
    }
      ),
    setText("");
  }

  return (
    <div>
    <form onSubmit={handleSubmit} className="EnterRoomDiv">
      <label className = "questionLabel">Enter room code: </label>
        <input className = "questionInput"
          type="text" 
          value={text}
          placeholder = "Enter code"
          onChange={(e) => setText(e.target.value)}
        />
      <input
          className="EnterRoomSubmit"
          type="submit"
          value = "Submit"/>
    </form>
    </div>
  )
}

