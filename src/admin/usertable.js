import React from "react";

class UserTable extends React.Component {
  render() {
    const { users } = this.props;

    return (
      <table>
        <thread>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Rekomendasi</th>
            <th>Action</th>
          </tr>
        </thread>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nama}</td>
              <td>{user.rekomendasi}</td>
              <td>{user.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserTable;
