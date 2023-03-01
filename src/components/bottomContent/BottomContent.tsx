import React, { FC, useState } from "react";
import { IUser } from "../../types/types";
import Registration from "../registration/Registration";
import UserList from "../userList/UserList";

import "./bottomContent.scss";

interface BottomContentProps {
  users: IUser[];
  newUser: IUser;
  createUser: (user: IUser) => void;
  removeUser: (id: number) => void;
}

const BottomContent: FC<BottomContentProps> = ({
  users,
  newUser,
  createUser,
  removeUser,
}: BottomContentProps) => {
  const [isRegistrated, setIsRegistrated] = useState<boolean>(false);
  return (
    <div className="bottom">
      <Registration
        isRegistrated={isRegistrated}
        setIsRegistrated={setIsRegistrated}
        createUser={createUser}
        newUser={newUser}
      />
      {isRegistrated && (
        <UserList users={users} newUser={newUser} removeUser={removeUser} />
      )}
    </div>
  );
};

export default BottomContent;
