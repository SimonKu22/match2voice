import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className="header">
      <h1 className="header__title">Match2Voice</h1>
      <div className="header__links">
        <h4>
          <Link to="/play">Play</Link>
        </h4>
        <h4>
          <Link to="/leaderboard">Leaderboard</Link>
        </h4>
      </div>
    </header>
  );
};

export default Header;
