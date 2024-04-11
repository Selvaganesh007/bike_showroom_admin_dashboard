import React, { useEffect, useRef, useState } from "react";
import "./NavBar.scss";
import { FaUserAlt, FaRegUser } from "react-icons/fa";
import { LuLogOut, LuSettings } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({ adminDetail }) => {
  const [userIconClicked, setUserIconClicked] = useState(false);

  const newRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(!newRef?.current?.contains(event.target)) {
        setUserIconClicked(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, [newRef]);

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
        {(adminDetail?.first_name || '').toUpperCase()} <FaUserAlt />
      </div>
      {userIconClicked && (
        <ul ref={newRef}>
          <NavLink to="/MyProfile">
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

const mapStateToProps = (state) => {
  return {
    adminDetail: state.admin.admin_details,
  }
}

export default connect(mapStateToProps)(NavBar);
