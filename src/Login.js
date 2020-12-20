import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png"
        alt=""
      />
      <fomr>
        <input placeholder="username" type="text" />
      </fomr>
    </div>
  );
}

export default Login;
