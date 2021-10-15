import React from "react";

function HomePageButton(props) {
    return (
        <div className="home-page-button">
            <button onClick={props.buttonClick}>
                {props.title}
            </button>           
        </div>
    );
};
export default HomePageButton;