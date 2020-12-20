import React from "react";
import "./Login.css";
import { provider, auth } from "./Firebase";
import { Button } from "@material-ui/core";

function Login() {
  const signIn = (e) => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png"
        alt=""
      />
      <form>
        <input placeholder="username" type="text" />
        <input placeholder="password" type="text" />
      </form>
    </div>
  );
}

export default Login;
