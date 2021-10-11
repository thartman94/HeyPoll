import React from "react";

function HomePageButton(props) {
    return (
        <div className="HomePageButton">
            <button onClick={props.button}>
                <a href="">{props.title}</a>
            </button>           
        </div>
    );
};

export default HomePageButton;