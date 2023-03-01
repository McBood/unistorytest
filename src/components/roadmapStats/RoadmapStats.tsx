import React from "react";

import "./roadmapStats.scss";

const RoadmapStats = () => {
  return (
    <div className="stats">
      <h3>Roadmap Stats</h3>
      <div className="stats__info">
        <span className="stats__info -number">12, 345</span>
        <span className="stats__info -text">Lorem ipsum dolor</span>
        <hr />
      </div>
      <div className="stats__info">
        <span className="stats__info -number">12, 345</span>
        <span className="stats__info -text">Lorem ipsum dolor</span>
        <hr />
      </div>
      <div className="stats__info">
        <span className="stats__info -number">12, 345</span>
        <span className="stats__info -text">Lorem ipsum dolor</span>
      </div>
    </div>
  );
};

export default RoadmapStats;
