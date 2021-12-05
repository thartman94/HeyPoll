import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SubMenu,
  } from "react-pro-sidebar";

export default function PollsSubMenu(){

  // Adds questions to each poll
    function QuestionList(props) {
        const questions = props.questions;
        const listItems = questions.map((question) =>
          <MenuItem key={question.toString()}>
            {question}
          </MenuItem>
        );
        return (
          <MenuItem>{listItems}</MenuItem>
        );
    }
// Adds polls to the side bar
    function PollList(props) {
      const polls = props.polls;
      const listItems = polls.map((poll) =>
        <SubMenu key={poll.toString()}
        title={poll}>
          <QuestionList questions={questions} />
        </SubMenu>
        );
        return (
          listItems
        );
    }

    function addPoll() {
      polls.push('unknown');
      console.log('yekkw')
    };
    
    var questions = ["Question 1", "Question 2", "Question 3", "Question 4"];
    var polls = ["Poll 1","Poll 2", "Poll 3"]

    return (
        <div>
          <PollList polls={polls} />
        <div className="addPollSubmenu">
            <button 
            className="addPollSubmenu__button" 
            onClick={(e) => {
              addPoll(e);
            }}
            > + Add Poll</button>
        </div>
        </div>
    );
}
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>