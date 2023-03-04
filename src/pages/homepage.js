import React from "react";
import logoIcon from "../img/logo.png";

const homepage = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <div className="header__logo">
          <img src={logoIcon} alt="logoimg" />
        </div>
        <p>HualienKing</p>
      </div>
      <div className="navigation">navi</div>
      <div className="header__text-box">
        <h1>OUTDOORS</h1>
        <p>準備好開始冒險了嗎？</p>
        <button>Start</button>
      </div>
      <p className="bg-name">Qixingtan Beach</p>
    </header>
  );
};

export default homepage;
