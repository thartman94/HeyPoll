import React from "react";

function HomePageButton(props) {
    return (
        <div className="home-page-button">
            <button onClick={props.buttonClick}>
                <a href = {props.path}>{props.title}</a>
            </button>           
        </div>
    );
};
export default HomePageButton;