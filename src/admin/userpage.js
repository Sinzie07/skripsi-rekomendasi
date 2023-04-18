import React from "react";
import UserTable from "./usertable";
import "../../src/assets/pages/viewuserpage.css";

class UserPage extends React.Component {
  state = {
    users: [{ no: 1, nama: "Sinzie Winata", rekomendasi: "cybersecurity" }],
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1> User List</h1>
        <UserTable users={users} />
      </div>
    );
  }
}

export default UserPage;
