import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import Message from "./Message";
import "./ChatScreen.css";
import db from "../../firebase";

export default function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("trainers")
      .doc("Sjoerd Vink")
      .collection("clients")
      .doc("Piet Veldhuizen")
      .collection("messages")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className='chatScreen'>
      <div className='chatScreen__header'>
        <div className='chatScreen__headerInfo'>
          <Avatar />
          <h4>Sjoerd Vink</h4>
        </div>
        <MoreVert />
      </div>
      <div className='chatScreen__body'>
        {messages.map(({ message, timestamp, user }) => (
          <Message message={message} timestamp={timestamp} user={user} />
        ))}
      </div>
      <div className='chatScreen__footer'>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            placeholder='Enter a message'
            onChange={(e) => setInput(e.target.value)}
          />
          <button type='submit'>SEND</button>
        </form>
      </div>
    </div>
  );
}
