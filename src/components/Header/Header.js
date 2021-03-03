import React from "react";
import "./Header.css";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { NotificationsNoneOutlined } from "@material-ui/icons";

export default function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <h1>Logo</h1>
      </div>
      <div className='header__right'>
        <NotificationsNoneOutlined className='header__rightNotificationIcon' />
        <Avatar className='header__rightAvatar' src='' alt='Sjoerd' />
        <h4>Trainer Name</h4>
      </div>
    </div>
  );
}
