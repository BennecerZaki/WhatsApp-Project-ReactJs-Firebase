/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typeed >> : ", input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/4.4/api/avataaars/${seed}.svg`}
        />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <div className={`chat__message {${false} && chat__reciver}`}>
          <span className="chat__name">Ahmed Zaki </span>
          Hey Guys
          <span className="chat__timestamp">3:52pm</span>
        </div>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form action="">
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
            value={input}
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;
