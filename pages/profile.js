import Sidebar from '../components/Sidebar'
import { AccountPollEditor } from '../components/AccountPollEditor';

import Header from "../components/Header";
import Footer from "../components/Footer";

function profile() {
  return (
    <div className="profile">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="polleditor">
          <AccountPollEditor />
        </div>
    </div>
  );
}

export default profile;