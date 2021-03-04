import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { NotificationsNoneOutlined } from "@material-ui/icons";
import { useStateValue } from "../../StateProvider";

export default function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className='header'>
      <div className='header__left'>
        <h1>Logo</h1>
      </div>
      <div className='header__right'>
        <NotificationsNoneOutlined className='header__rightNotificationIcon' />
        <Avatar className='header__rightAvatar' src='' alt='Sjoerd' />
        <h4>{user.email}</h4>
      </div>
    </div>
  );
}
