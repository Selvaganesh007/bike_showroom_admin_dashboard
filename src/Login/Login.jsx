import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { Button, Input } from "antd";
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import logo from '../Images/logo.png';
import { loginDetails } from "../mockdata";
import { connect } from "react-redux";
import { adminDetailsUpdate } from "../Features/Actions/Access.action";

function Login({ updateAdminDetail }) {
  const navigate = useNavigate();
  const [inputDetails, setInputDetails] = useState({
    userName: '',
    passWord: '',
  });

  const handleOnChange = (field, value) => {
    if (field === 'username') {
      setInputDetails({...inputDetails, userName: value})
    } else if (field === 'password') {
      setInputDetails({...inputDetails, passWord: value})
    }
  };

  const handleLogin = () => {
    const adminDetails = loginDetails.filter(val => val.userName === inputDetails.userName && val.password === inputDetails.passWord);
    updateAdminDetail(adminDetails[0]);
    sessionStorage.setItem("adminDetails", JSON.stringify(adminDetails[0]));
    if (adminDetails.length > 0) {
      navigate("/admin-panel/dash_board");
    } else {
      alert('Kindly fill correct usename and password');
    }
  };

  return (
    <div className="login">
      <div className="login-content">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>
        <Input
          placeholder="User name"
          value={inputDetails.userName}
          prefix={<BiSolidUser />}
          onChange={(e) => handleOnChange('username', e.target.value)}
        />
        <Input.Password
          placeholder="Password"
          prefix={<RiLockPasswordLine />}
          onChange={(e) => handleOnChange('password', e.target.value)}
          />
        <Button
          type="primary"
          onClick={() => handleLogin()}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

const mapStatesToProps = () => {};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAdminDetail: (data) => dispatch(adminDetailsUpdate(data)),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Login);
