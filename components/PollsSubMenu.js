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

    function NumberList(props) {
        const numbers = props.numbers;
        const listItems = questions.map((question) =>
          <MenuItem key={question.toString()}>
            {question}
          </MenuItem>
        );
        return (
          <MenuItem>{listItems}</MenuItem>
        );
      }
      const questions = ["Question 1", "Question 2", "Question 3", "Question 4"];

    

    return (
        <div>
        <SubMenu 
        title="Poll 1"
        >
            <NumberList questions={questions} />
        </SubMenu> 
        <SubMenu
        title="Poll 2"
        >
            <MenuItem>Question 1</MenuItem>
            <MenuItem>Question 2</MenuItem>
            <MenuItem>Question 3</MenuItem>
            <MenuItem>Question 4</MenuItem>
        </SubMenu>
        <SubMenu
        title="Poll 3"
        >
            <MenuItem>Question 1</MenuItem>
            <MenuItem>Question 2</MenuItem>
            <MenuItem>Question 3</MenuItem>
            <MenuItem>Question 4</MenuItem>
            <MenuItem>Question 1</MenuItem>
            <MenuItem>Question 2</MenuItem>
            <MenuItem>Question 3</MenuItem>
            <MenuItem>Question 4</MenuItem>
            <MenuItem>Question 5</MenuItem>
            <MenuItem>Question 6</MenuItem>
            <MenuItem>Question 1</MenuItem>
            <MenuItem>Question 2</MenuItem>
            <MenuItem>Question 3</MenuItem>
            <MenuItem>Question 4</MenuItem>
            <MenuItem>Question 5</MenuItem>
            <MenuItem>Question 6</MenuItem>
        </SubMenu>
        <div className="addPollSubmenu">
            <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <button className="addPollSubmenu__button">Add Poll</button>
        </div>
        </div>
    );
}
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>