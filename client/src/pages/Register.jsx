import React, { useState } from "react";
import { SERVER_URL } from "../env";
import Axios from "axios";
import Header from "./fragments/Header";
import { Navigate } from "react-router-dom";
function Register() {
  const [data, setData] = useState(null);
  const [registerUser, setRegisterUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegisterUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setData(null)
  };

  const register = () => {
    console.log(registerUser);
    Axios({
      method: "POST",
      data: {
        username: registerUser.username,
        password: registerUser.password,
      },
      withCredentials: true,
      url: SERVER_URL + "register",
    }).then((res) => {
      console.log(res);
      setData(res.data);
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="authenGroup">
        <div>
          <h1>Register</h1>
          <div>

            <label>username</label>
            <input
              placeholder="username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          {data === "User already exist" ? <div className="warning">user already exist</div> : <div>&nbsp;</div>}
          <button onClick={register} className="navButton">
            Submit
          </button>
        </div>
        {data === "Authenticated" ? <Navigate to="/" replace={true} /> : null}
      </div>
    </div>
  );
}

export default Register;
