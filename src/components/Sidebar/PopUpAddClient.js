import React, { useState } from "react";
import "./PopUpAddClient.css";
import { useStateValue } from "../../StateProvider";
import db from "../../firebase";
import { Button } from "@material-ui/core";

export default function PopUpAddClient(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [{ user }] = useStateValue();

  const handleAddClient = (e) => {
    e.preventDefault();
    db.collection("trainers")
      .doc(user.uid)
      .collection("clients")
      .add({
        name: name,
        email: email,
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setEmail("");
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className='popUpAddClient'>
      <div className='popUpAddClient__container'>
        <button onClick={() => props.setTrigger(false)}>X</button>
        <h1>Add a new client</h1>
        <form onSubmit={handleAddClient}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <Button className='popUpAddClient__containerButton' type='submit'>
            Add client
          </Button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
