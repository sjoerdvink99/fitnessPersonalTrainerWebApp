import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import Message from "./Message";
import "./ChatScreen.css";
import db from "../../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import { useStateValue } from "../../StateProvider";

export default function ChatScreen() {
  const { chatId } = useParams();
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    if (chatId) {
      db.collection("trainers")
        .doc(user.uid)
        .collection("clients")
        .doc(chatId)
        .onSnapshot((snapshot) => {
          setClientName(snapshot.data().name);
        });

      db.collection("trainers")
        .doc(user.uid)
        .collection("clients")
        .doc(chatId)
        .collection("messages")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [chatId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("trainers")
      .doc(user.uid)
      .collection("clients")
      .doc(chatId)
      .collection("messages")
      .add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        name: user.email,
      });
    setInput("");
  };

  return (
    <div className='chatScreen'>
      <div className='chatScreen__header'>
        <div className='chatScreen__headerInfo'>
          <Avatar />
          <h4>{clientName}</h4>
        </div>
        <MoreVert />
      </div>
      <div className='chatScreen__body'>
        {messages.map(({ message, timestamp, name }) => (
          <Message message={message} timestamp={timestamp} user={name} />
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
