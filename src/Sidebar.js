import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.costacruises.com/content/dam/costa/inventory-assets/countries/IND/IND.jpg.image.750.563.low.jpg"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src="https://lh3.googleusercontent.com/ogw/ADGmqu9jlTtiVnYKEPl0kL5mXmjMil3nzlUpJ1XwTZpZ5g=s192-c-mo"
        />
        <h2>Vistrit Pandey</h2>
        <h4>Mobile Developer at MSA</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed you</p>
          <p className="sidebar__statNumber">2,303</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">2,323</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Career")}
        {recentItem("Study")}
        {recentItem("Future Stuff")}
        {recentItem("Technology")}
      </div>
    </div>
  );
}

export default Sidebar;
