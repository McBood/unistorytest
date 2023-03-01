import React, { FC, PropsWithChildren } from "react";

import "./button.scss";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, isDisabled }) => {
  return (
    <button disabled={isDisabled} className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
