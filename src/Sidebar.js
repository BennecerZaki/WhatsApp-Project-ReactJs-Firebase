import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(rooms);

  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge fontSize="small" />
          </IconButton>
          <IconButton>
            <Chat fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVert fontSize="small" />
          </IconButton>
        </div>
      </header>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
