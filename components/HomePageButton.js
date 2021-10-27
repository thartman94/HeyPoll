import React from "react";

function HomePageButton(props) {
<<<<<<< HEAD
  return (
    <button className="home-page-button" onClick={props.buttonClick}>
      {props.title}
    </button>
  );
}
=======
    return (
        <div className="home-page-button">
            <button onClick={props.buttonClick}>
                <a href = {props.path}>{props.title}</a>
            </button>           
        </div>
    );
};
>>>>>>> ee560539ce2d083c42cec8a9f15f8103a7d2249b
export default HomePageButton;