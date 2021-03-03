import React from "react";
import "./InboxSidebar.css";
import { Search } from "@material-ui/icons";
import InboxSidebarRow from "./InboxSidebarRow";

export default function InboxSidebar() {
  return (
    <div className='inboxSidebar'>
      <div className='inboxSidebar__input'>
        <Search />
        <input placeholder='Search Clients' />
      </div>
      <InboxSidebarRow name='Sjoerd Vink' />
      <InboxSidebarRow name='Sjoerd Vink' />
      <InboxSidebarRow name='Sjoerd Vink' />
    </div>
  );
}
