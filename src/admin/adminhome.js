import React from "react";
import "../assets/pages/adminhome.css";
import exitButton from "../../src/images/logout.png";

function Adminhome() {
  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="admin-home">
      <h1>Welcome back Admin!</h1>
      <div className="button-container">
        <a href="viewuser">
          <button className="view-button">View User Info</button>
        </a>
        <a href>
          <button className="edit-button">Edit Content Recommendation</button>
        </a>
        <a href>
          <button className="add-button">Add New Rekomendasi</button>
        </a>
      </div>
      <img
        src={exitButton}
        alt="Exit Button"
        className="exit-button"
        onClick={handleLogout}
      />
    </div>
  );
}

export default Adminhome;
