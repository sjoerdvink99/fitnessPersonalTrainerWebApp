import React, { useEffect, useState } from "react";
import "./InboxSidebar.css";
import { Search } from "@material-ui/icons";
import InboxSidebarRow from "./InboxSidebarRow";
import { useStateValue } from "../../StateProvider";
import db from "../../firebase";

export default function InboxSidebar() {
  const [{ user }] = useStateValue();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    db.collection("trainers")
      .doc(user.uid)
      .collection("clients")
      .onSnapshot((snapshot) =>
        setClients(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
          }))
        )
      );
  }, []);

  return (
    <div className='inboxSidebar'>
      <div className='inboxSidebar__input'>
        <Search />
        <input placeholder='Search Clients' />
      </div>
      {clients.map((client) => (
        <InboxSidebarRow name={client.name} id={client.id} />
      ))}
    </div>
  );
}
