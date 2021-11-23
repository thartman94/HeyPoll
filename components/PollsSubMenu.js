import React from "react";

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
    function NumberList(props) {
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
          <NumberList questions={questions} />
        </SubMenu>
        );
        return (
          listItems
        );
    }
    
    const questions = ["Question 1", "Question 2", "Question 3", "Question 4"];
    const polls = ["Poll 1","Poll 2", "Poll 3"]

    return (
        <div>
          <PollList polls={polls} />
        <div className="addPollSubmenu">
            <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <button className="addPollSubmenu__button">Add Poll</button>
        </div>
        </div>
    );
}
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>