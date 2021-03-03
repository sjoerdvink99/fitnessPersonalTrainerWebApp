import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";

export default function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <h1>Logo</h1>
      </div>
      <div className='header__right'>
        <Avatar src='' alt='Sjoerd' />
        <HelpOutline />
      </div>
    </div>
  );
}
