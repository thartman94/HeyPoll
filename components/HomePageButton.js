import React from "react";

function HomePageButton(props) {
    return (
        <div className="HomePageButton">
            <button onClick={props.buttonClick}>
                {props.title}
            </button>           
        </div>
    );
};

export default HomePageButton;