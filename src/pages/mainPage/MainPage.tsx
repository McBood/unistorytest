import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import BottomContent from "../../components/bottomContent/BottomContent";
import TopContent from "../../components/topContent/TopContent";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import { IData, IUser } from "../../types/types";

import "./mainPage.scss";

interface MainPageProps {
  account: string | undefined;
}

const MainPage: FC<MainPageProps> = ({ account }: MainPageProps) => {
  const metamaskURL =
    "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";
  const initialState = {
    id: 0,
    username: "",
    email: "",
    address: "",
  };
  const [visible, setVisible] = useState<boolean>(true);
  const [users, setUsers] = useState<IUser[]>([]);
  const [newUser, setNewUser] = useState<IUser>(initialState);

  async function fetchUsers() {
    try {
      const res = await axios.get<IData>(
        "https://new-backend.unistory.app/api/data"
      );
      setUsers(res.data.items);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const createUser = (user: IUser) => {
    const createNewUser = {
      ...user,
      address: typeof account == "string" ? account.toLowerCase() : account,
    };
    const newUsers = [createNewUser, ...users];
    if (typeof account == "string") {
      setUsers(newUsers);
      setNewUser(createNewUser);
    } else {
      alert("You need to connect Metamask");
    }
  };

  const removeUser = (id: number) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    setNewUser(initialState);
  };

  return (
    <section className="main">
      <Modal visible={visible} setVisible={setVisible}>
        <div className="modal">
          <h4 className="modal__title">Metamask Extention</h4>
          <div className="modal__description">
            <span>
              To work with our application, you have to install the{" "}
              <a rel="noopener noreferrer" target="_blank" href={metamaskURL}>
                Metamask browser extension
              </a>
            </span>
          </div>
          <div className="modal__btn">
            <Button onClick={() => setVisible(false)}>Skip this step</Button>
          </div>
        </div>
      </Modal>
      <TopContent />
      <BottomContent users={users} newUser={newUser} createUser={createUser} removeUser={removeUser} />
    </section>
  );
};

export default MainPage;
