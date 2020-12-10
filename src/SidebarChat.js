/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      console.log("hello world");
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar
        src={`https://avatars.dicebear.com/4.4/api/avataaars/${seed}.svg`}
      />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message ...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChat;
