import React, { FC, useState } from "react";
import { IUser } from "../../types/types";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Subtitle from "../UI/Subtitle/Subtitle";

import "./registration.scss";

interface RegistrationProps {
  isRegistrated: boolean;
  setIsRegistrated: (value: boolean) => void;
  createUser: (user: IUser) => void;
  newUser: IUser;
}

const Registration: FC<RegistrationProps> = ({
  isRegistrated,
  setIsRegistrated,
  createUser,
  newUser,
}) => {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    address: "",
  });

  const fillNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, username: e.target.value });
  };

  const fillEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, email: e.target.value });
  };

  // Validate :D
  const getAccess = () => {
    if (!inputData.username || !inputData.email) {
      alert("Fill the form");
    } else {
      setIsRegistrated(true);
    }
  };
  return (
    <div className="registration">
      <h3>Beta test registration</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="input">
        <div className="input__sub">
          <Subtitle>Name</Subtitle>
        </div>
        {!isRegistrated ? (
          <Input
            value={inputData.username}
            onChange={fillNameInput}
            placeholder="We will display your name in participation list"
          />
        ) : (
          <h3>{inputData.username}</h3>
        )}
      </div>
      <div className="input">
        <div className="input__sub">
          <Subtitle>Email</Subtitle>
        </div>
        {!isRegistrated ? (
          <Input
            value={inputData.email}
            onChange={fillEmailInput}
            placeholder="We will display your email in participation list"
          />
        ) : (
          <h3>{inputData.email}</h3>
        )}
      </div>
      {!isRegistrated ? (
        <Button onClick={() => getAccess()}>Get early access</Button>
      ) : (
        <div className={newUser.username ? "unactive" : ""}>
          {/* ADD User to the list */}
          <Button
            isDisabled={newUser.username ? true : false}
            onClick={() => createUser({ ...inputData, id: Date.now() })}
          >
            List me to the table
          </Button>
        </div>
      )}
    </div>
  );
};

export default Registration;
