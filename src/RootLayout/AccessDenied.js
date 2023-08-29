import React from "react";
import "./LayoutStyles.scss";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const AccessDenied = () => {
  return (
    <div className="AccessDenied">
      <h3>Contact your admin...</h3>
      <Button type="primary">
        <NavLink to="/admin-panel/dash_board">Login</NavLink>
      </Button>
    </div>
  );
};

export default AccessDenied;
