import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Add } from "@material-ui/icons";
import SidebarChannel from "./SidebarChannel";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Talks</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <Add className="sidebar__addChannel" />
        </div>
      </div>
      <div className="sidebar__channelsList">
        <SidebarChannel />
      </div>
    </div>
  );
}

export default Sidebar;
