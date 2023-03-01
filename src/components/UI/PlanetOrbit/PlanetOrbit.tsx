import React from "react";

import Planet from "../../../assets/img/planet.png";
import PlanetAnimation from "../PlanetAnimation/PlanetAnimation";
import "./planetOrbit.scss";

const PlanetOrbit = () => {
  return (
    <div className="orbit">
      <div className="orbit__dot"></div>
      <div className="orbit__outer">
        <div className="orbit__inner -first"></div>
        <div className="orbit__animation">
          <PlanetAnimation />
        </div>
        <div className="orbit__inner -second">
          <div className="orbit__inner -third">
            <div className="orbit__inner -fourth">
              <img src={Planet} alt="planet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetOrbit;
