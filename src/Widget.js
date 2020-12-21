import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import RecordIcon from "@material-ui/icons/FiberManualRecord";

const Widget = () => {
  const newArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widget__articleLeft">
        <RecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widget__header">
        <InfoIcon />
        <h2>Linkedin Feed</h2>
      </div>
      {newArticle("ReactJS is the new game", "Top news - 2323")}
      {newArticle("Stocks are at record high", "NIFTY")}
      {newArticle("React Native is better than Flutter", "Flutter")}
      {newArticle("I made the Robinhood Clone", "Robinhood")}
      {newArticle("Follow me on Github", "Github")}
    </div>
  );
};

export default Widget;
