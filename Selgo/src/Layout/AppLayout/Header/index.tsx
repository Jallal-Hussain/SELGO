import React from "react";
import "./styles/index.css";
import {
  AddIcon,
  MenuIcon,
  MessageIcon,
  NotificationIcon,
  AvatarIcon,
} from "../../../assets/icons";

const Header: React.FC = () => {
  return (
    <>
      <header className="header-container">
        <div className="menu-icon">
          <MenuIcon />
        </div>
        <div className="logo">Selgo</div>
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
