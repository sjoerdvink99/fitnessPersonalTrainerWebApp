import React from "react";
import "./Inbox.css";
import InboxSidebar from "./InboxSidebar";
import ChatScreen from "./ChatScreen";

export default function Inbox() {
  return (
    <div className='inbox'>
      <InboxSidebar />
      <ChatScreen />
    </div>
  );
}
