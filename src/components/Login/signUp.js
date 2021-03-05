import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import "./SignUp.css";
import { Button } from "@material-ui/core";
import db, { auth } from "../../firebase";
import { actionTypes } from "../../reducer";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSignUp = (e) => {
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
          src='https://weareryu.nl/wp-content/uploads/2019/09/virtuagym-2.png'
          alt=''
        />
        <h1>Create a New Account</h1>
        <form onSubmit={handleSignUp}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Full Name'
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
          <Button className='login__formButton' type='submit'>
            Create Account
          </Button>
        </form>
        <Link to='/'>
          <p>Already have an account? Log-in here</p>
        </Link>
      </div>
    </div>
  );
}
