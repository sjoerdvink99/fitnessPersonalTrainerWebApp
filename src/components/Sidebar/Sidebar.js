import React, { useState } from "react";
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
import { Button } from "@material-ui/core";
import PopUpAddClient from "./PopUpAddClient";

export default function Sidebar() {
  const [buttonPopup, setButtonPopup] = useState(false);

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
      <Button
        onClick={() => setButtonPopup(true)}
        className='sidebar__addClient'
      >
        Add client
      </Button>
      <PopUpAddClient trigger={buttonPopup} setTrigger={setButtonPopup} />
    </div>
  );
}
