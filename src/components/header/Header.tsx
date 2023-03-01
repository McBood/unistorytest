import React from "react";
import Button from "../UI/Button/Button";

import "./header.scss";

interface HeaderProps {
  activate: () => void;
  account: any;
}

const Header = ({ activate, account }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <a href="/">Logo</a>
        </div>
        {!account ? (
          <Button onClick={() => activate()}>Connect Metamask</Button>
        ) : (
          <p>{account}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
