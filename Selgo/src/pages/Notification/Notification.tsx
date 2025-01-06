import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Notification: React.FC = () => {
  return (
    <div style={{ display: " flex", gap: "20px" }}>
      <NavLink to="saved-search">Saved search</NavLink>
      <NavLink to="check-out">Check out</NavLink>
      <Outlet />
    </div>
  );
};

export default Notification;
