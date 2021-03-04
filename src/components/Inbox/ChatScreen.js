import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import Message from "./Message";
import "./ChatScreen.css";
import db from "../../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";

export default function ChatScreen() {
  const { chatId } = useParams();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("trainers")
        .doc("4ynzDgH7FhsetQ3NQePe")
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
      .doc("4ynzDgH7FhsetQ3NQePe")
      .collection("clients")
      .doc(chatId)
      .collection("messages")
      .add({
        message: input,
        timestamp: firebase.firestore.FlieldValue.serverTimestamp(),
        user: "Sjoerd V",
      });

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
