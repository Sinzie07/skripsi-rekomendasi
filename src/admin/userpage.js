import React from "react";
import UserTable from "./usertable";
import "../../src/assets/pages/viewuserpage.css";

function UserPage() {
  return (
    <div className="user-page">
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Rekomendasi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ridwan</td>
            <td>petani</td>
            <td>
              <button className="useredit-button">Edit</button>
              <button className="userdelete-button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default UserPage;
