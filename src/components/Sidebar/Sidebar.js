import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  CalendarToday,
  CreditCardOutlined,
  DashboardOutlined,
  FitnessCenterOutlined,
  MessageOutlined,
  PeopleOutlined,
  PersonPinOutlined,
  SubjectOutlined,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow Icon={DashboardOutlined} title='Dashboard' />
      <SidebarRow Icon={CalendarToday} title='Calendar' />
      <SidebarRow Icon={PersonPinOutlined} title='Clients' />
      <SidebarRow Icon={PeopleOutlined} title='Groups' />
      <SidebarRow Icon={MessageOutlined} title='Inbox' />
      <SidebarRow Icon={FitnessCenterOutlined} title='Exercises' />
      <SidebarRow Icon={SubjectOutlined} title='Workout templates' />
      <SidebarRow Icon={CreditCardOutlined} title='Payments' />
    </div>
  );
}
