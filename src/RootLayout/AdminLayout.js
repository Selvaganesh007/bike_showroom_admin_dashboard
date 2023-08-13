import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Admin/Sections/NavBar/NavBar";
import LeftPanel from "../Admin/Sections/LeftPanel/LeftPanel";

const AdminLayout = () => {
  return (
    <>
      <div className="base">
        <NavBar />
        <div className="base-body">
          <LeftPanel />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AdminLayout;
