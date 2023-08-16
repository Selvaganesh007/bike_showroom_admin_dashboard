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
          <NavLink to="profile">
            <li>
              <FaRegUser /> My Profile
            </li>
          </NavLink>
          <NavLink to="settings">
            <li>
              <LuSettings /> Settings
            </li>
          </NavLink>
          <NavLink to="/login">
            <li onClick={() => handleLogOut()}>
              <LuLogOut /> Log out
            </li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
