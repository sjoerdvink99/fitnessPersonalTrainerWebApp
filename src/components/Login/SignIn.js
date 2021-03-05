import React, { useState } from "react";
import "./SignIn.css";
import { auth } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(username, password)
      .then((result) => {
        console.log(">>>>>", result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='signIn'>
      <div className='signIn__container'>
        <img
          src='https://weareryu.nl/wp-content/uploads/2019/09/virtuagym-2.png'
          alt=''
        />
        <h1>Sign In To The Fitness App</h1>
        <form onSubmit={handleSignIn}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Email'
          />
          <input
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <Button className='signIn__formButton' type='submit'>
            Login
          </Button>
        </form>
        <Link to='/signup'>
          <p>No Account? Sign up here</p>
        </Link>
      </div>
    </div>
  );
}
