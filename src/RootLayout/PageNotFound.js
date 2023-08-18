import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Result } from "antd";

const PageNotFound = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary">
            <NavLink to="/admin-panel/dash_board">Login</NavLink>
          </Button>
        }
      />
    </div>
  );
};

export default PageNotFound;
