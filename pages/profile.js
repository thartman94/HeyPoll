import Sidebar from '../components/Sidebar'
import Poll from '../components/Poll'
import React, { useContext, useState } from "react";

function profile() {
  return (
    <div className="profile">
        <div className="sidebar">
          <Sidebar />
          <div className='profilepoll'>
              <Poll />
          </div>
        </div>
    </div>
  );
}

export default profile;