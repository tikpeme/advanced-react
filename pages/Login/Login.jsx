import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../../Api/api";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/host";
  const [status, setstatus] = useState("idle");
  const [error, seterror] = useState(null);

  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  console.log(location);

  function handleSubmit(e) {
    e.preventDefault();
    //console.log(loginFormData);
    setstatus("submitting");

    const sendCredentials = async (req, res) => {
      try {
        const response = await loginUser(loginFormData);
        //console.log(response.token);
        seterror(null);
        localStorage.setItem("loggedin", true);

        navigate(from === location.pathname ? "/host" : from, {
          replace: true,
        });
      } catch (error) {
        //console.log(error);
        seterror(error);
      }
      setstatus("idle");
      //console.log(status);
    };
    sendCredentials();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      {location.state?.message && <h3>{location.state?.message}</h3>}
      <h1>Sign in to your account</h1>
      {error?.message && <h3 className="login-first">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting" ? true : false}>
          Log in
        </button>
      </form>
    </div>
  );
}
