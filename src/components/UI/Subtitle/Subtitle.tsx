import React, { FC, PropsWithChildren } from "react";

import "./subtitle.scss";

const Subtitle: FC<PropsWithChildren> = ({ children }) => {
  return <span className="subtitle">{children}</span>;
};

export default Subtitle;
