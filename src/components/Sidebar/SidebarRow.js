import React from "react";
import "./SidebarRow.css";
import { useHistory } from "react-router-dom";

export default function SidebarRow({ Icon, title }) {
  const history = useHistory();

  const selectPage = () => {
    history.push(title.toLowerCase());
  };

  return (
    <div className='sidebarRow' onClick={selectPage}>
      {Icon && <Icon className='sidebarRow__icon' />}
      <h3>{title}</h3>
    </div>
  );
}
