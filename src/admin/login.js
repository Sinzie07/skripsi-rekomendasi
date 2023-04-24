import React, { useState } from "react";
import "../../src/assets/pages/login.css";
import adminImage from "../../src/images/admin.png";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === "sinzie" && password === "sinzie123") {
      //redirect to dashboard page
      window.location.href = "/homeadmin";
    } else {
      //display error message
      setErrorMessage("Incorrect username or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <img src={adminImage} alt="Admin Icon" className="admin-icon" />
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="button-login">
            {" "}
            Login
          </button>
          <div className="error-message">
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
