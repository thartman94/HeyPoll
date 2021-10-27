import React from "react";

function HomePageButton(props) {
  return (
    <button className="home-page-button" onClick={props.buttonClick}>
      {props.title}
    </button>
  );
}
export default HomePageButton;