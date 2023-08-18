import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { Button, Input } from "antd";
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import logo from '../Images/logo.png';

function Login() {
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
    if (inputDetails.userName === 'admin' && inputDetails.passWord === 'admin') {
      navigate("/admin-panel/dash_board");
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

export default Login;
