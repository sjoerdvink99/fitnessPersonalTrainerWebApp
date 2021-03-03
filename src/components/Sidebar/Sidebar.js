import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  AccountBox,
  CalendarToday,
  Dashboard,
  Message,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow Icon={Dashboard} title='Dashboard' />
      <SidebarRow Icon={CalendarToday} title='Calendar' />
      <SidebarRow Icon={AccountBox} title='Clients' />
      <SidebarRow Icon={Message} title='Inbox' />
    </div>
  );
}
