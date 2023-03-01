import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types/types";
import Subtitle from "../UI/Subtitle/Subtitle";

import xMark from "../../assets/img/x.svg";

import "./userList.scss";

interface UserListProps {
  users: IUser[];
  newUser: IUser;
  removeUser: (id: number) => void;
}

const UserList: FC<UserListProps> = ({
  users,
  removeUser,
  newUser,
}: UserListProps) => {
  const navigate = useNavigate();
  return (
    <div className="list">
      <h3>Participation listing (enable only for participants)</h3>
      <div className="list__block">
        <table>
          <tr>
            <th>
              <Subtitle>Name</Subtitle>
            </th>
            <th>
              <Subtitle>Email</Subtitle>
            </th>
            <th>
              <Subtitle>Wallet</Subtitle>
            </th>
          </tr>
          {users.map((user) => (
            <tr
              className={user.id === newUser.id ? "myUser" : ""}
              onClick={() =>
                user.id !== newUser.id && navigate(`/user/${user.id}`)
              }
              key={user.id}
            >
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              {user.id === newUser.id && (
                <td onClick={() => removeUser(user.id)} className="xmark">
                  <img src={xMark} alt="x" />
                </td>
              )}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UserList;
