import React from "react";
import "./styles/index.css";
import {
  AddIcon,
  MenuIcon,
  MessageIcon,
  NotificationIcon,
  AvatarIcon,
} from "../../../assets/icons";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header className="header-container">
        <div className="menu-icon">
          <MenuIcon />
        </div>
        <NavLink to='/' className="logo">Selgo</NavLink>
        <div className="icons">
          {" "}
          <AddIcon />
          <MessageIcon />
          <NotificationIcon />
          <AvatarIcon />
        </div>
      </header>
    </>
  );
};

export default Header;
