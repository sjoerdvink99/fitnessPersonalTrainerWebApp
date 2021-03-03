import React from "react";
import "./InboxSidebarRow.css";
import { Avatar } from "@material-ui/core";

export default function InboxSidebarRow({ name }) {
  return (
    <div className='inboxSidebarRow'>
      <div className='inboxSidebarRow__info'>
        <div className='inboxSidebarRow__person'>
          <Avatar />
          <h4>{name}</h4>
        </div>
        <p>Tijd</p>
      </div>
      <hr />
    </div>
  );
}
