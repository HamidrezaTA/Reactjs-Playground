import { useContext, useState } from "react";
import { userListContext } from "../App";

function ListSection() {
  const _userListContext = useContext(userListContext);

  return (
    <div className="m-5">
      <table className="table  table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {_userListContext.userList?.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSection;
