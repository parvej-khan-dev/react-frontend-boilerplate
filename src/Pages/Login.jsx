import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { requestHandler } from "../utils";
import { loginUser } from "../api";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (data) => {
    await requestHandler(async () => await loginUser(data)),
      setLoading,
      (res) => {
        const { data } = res;
        dispatch(loginUser(data));
        // navigation any protect route
        navigate("/admin");
      };
    setError;
  };

  return <div>Login</div>;
};

export default Login;


