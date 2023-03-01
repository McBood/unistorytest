import React from "react";

import "./topContent.scss";
import planetText from "../../assets/img/planetText.png";
import RoadmapStats from "../roadmapStats/RoadmapStats";
import PlanetParams from "../UI/PlanetParams/PlanetParams";
import PlanetOrbit from "../UI/PlanetOrbit/PlanetOrbit";

const TopContent = () => {
  return (
    <div className="top">
      <div className="content">
        <div className="content__title">
          <h1>{"Explore your own planet \nin "}</h1>
          <h1 className="content__title -transparent">
            our new <p>metaverse</p>
          </h1>
        </div>
        <div className="content__before">
          <img src={planetText} alt="text" />
        </div>
        <div className="content__planet">
          <PlanetParams />
        </div>
        <div className="content__img">
          <PlanetOrbit />
        </div>
        <div className="content__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <RoadmapStats />
    </div>
  );
};

export default TopContent;
