import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Post something" />
            <button className="light" type="submit">
              Post
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption />
        </div>
      </div>
    </div>
  );
}

export default Feed;
