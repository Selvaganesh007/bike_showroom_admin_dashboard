import React from "react";
import "./AdminPanel.scss";
import LeftPanel from "./Sections/LeftPanel/LeftPanel";
import RightPanel from "./Sections/RightPanel/RightPanel";
import NavBar from "./Sections/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="base">
      <NavBar />
      <div className="base-body">
        <LeftPanel />
        <RightPanel />
      </div>
      <Outlet />
    </div>
  );
};

export default AdminPanel;
