import React from "react";

// FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const PollControl = ({ left, onClick }) => {
  return (
    <button class={`control ${left && "left"}`}>
      <FontAwesomeIcon
        className="control__icon"
        onClick={onClick}
        icon={left ? faChevronLeft : faChevronRight}
      />
    </button>
  );
};

export default PollControl;
