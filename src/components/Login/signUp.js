import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import "./signUp.css";
import { Button } from "@material-ui/core";
import db, { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        db.collection("trainers").doc(result.user.uid).set({
          name: name,
          email: email,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://foundercontent.com/static/media/slack_icon.55ad9eab.png'
          alt=''
        />
        <h1>Sign up for a new account</h1>
        <form onSubmit={signUp}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='firstName lastName'
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <input
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <button type='submit'>Sign up</button>
        </form>
      </div>
    </div>
  );
}
