import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import "./Login.css";
import db, { auth } from "../../firebase";
import { actionTypes } from "../../reducer";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useStateValue();

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(username, password)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        db.collection("trainers").doc(result.user.id).set({
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
    setUsername("");
    setPassword("");
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://foundercontent.com/static/media/slack_icon.55ad9eab.png'
          alt=''
        />
        <h1>Sign in to fitness app</h1>
        <input value={username} placeholder='username' />
        <input value={password} type='password' placeholder='password' />
        <Button onClick={handleSignUp}>Sign up</Button>
      </div>
    </div>
  );
}
