import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlanetOrbit from "../../components/UI/PlanetOrbit/PlanetOrbit";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import { IUser } from "../../types/types";

import "./userPage.scss";

const UserPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://new-backend.unistory.app/api/data/id/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="user">
      <div className="user__planet">
        <PlanetOrbit />
      </div>
      <h2>Personal Data</h2>
      <div className="data">
        <div className="data__subtitle">
          <Subtitle>Name</Subtitle>
        </div>
        <h3>{user?.username}</h3>
      </div>

      <div className="data">
        <div className="data__subtitle">
          <Subtitle>Email</Subtitle>
        </div>
        <h3>{user?.email}</h3>
      </div>

      <div className="data">
        <div className="data__subtitle">
          <Subtitle>Wallet</Subtitle>
        </div>
        <h3>{user?.address}</h3>
      </div>
    </div>
  );
};

export default UserPage;
