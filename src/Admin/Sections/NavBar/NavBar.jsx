import React, { useState } from "react";
import "./NavBar.scss";
import { FaUserAlt, FaRegUser } from "react-icons/fa";
import { LuLogOut, LuSettings } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [userIconClicked, setUserIconClicked] = useState(false);

  const handleLogOut = () => {
    setUserIconClicked(false);
    //TODO logout functionality
  };

  return (
    <div className="NavBar">
      <h3>Selva Motors</h3>
      <div
        className="login_user-icon"
        onClick={() => setUserIconClicked(!userIconClicked)}
      >
        <FaUserAlt />
      </div>
      {userIconClicked && (
        <ul>
          <li>
            <FaRegUser /> <NavLink to="profile">My Profile</NavLink>
          </li>
          <li>
            <LuSettings /> <NavLink to="settings">Settings</NavLink>
          </li>
          <li onClick={() => handleLogOut()}>
            <LuLogOut /> <NavLink to="login">Log out</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
