import React, { useState } from "react";
import "../../src/assets/pages/login.css";

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
      <button type="submit" className="button-submit">
        {" "}
        Login
      </button>
      <div className="error-message">
        {errorMessage && <p>{errorMessage}</p>}
        {errorMessage && (
          <button onClick={() => setErrorMessage("")}>Try Again</button>
        )}
      </div>
    </form>
  );
}

export default LoginPage;
