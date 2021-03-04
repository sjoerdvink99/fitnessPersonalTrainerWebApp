import React from "react";
import "./InboxSidebarRow.css";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function InboxSidebarRow({ name, id }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/inbox/${id}`);
    } else {
      history.push(`/inbox/${name}`);
    }
  };

  return (
    <div className='inboxSidebarRow' onClick={selectChannel}>
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
