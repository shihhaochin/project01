import React, { useState } from "react";
import logoIcon from "../img/logo.png";
import { HashLink } from "react-router-hash-link";
const homepage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [navchange, setNavchange] = useState(false);

  return (
    <header className="header" id="header">
      <div className="header__logo-box">
        <div className="header__logo">
          <img src={logoIcon} alt="logoimg" />
        </div>
        <p>HualienKing</p>
      </div>
      <div
        className={navchange ? "navigationOpen" : "navigation"}
        onClick={() => {
          if (navchange) {
            setNavchange(false);
          } else {
            setNavchange(true);
          }
        }}
      >
        <div className="navi-icon-box">
          <div className="navi-icon-1"></div>
          <div className="navi-icon-2"></div>
          <div className="navi-icon-3"></div>
        </div>
      </div>
      {navchange && (
        <div className="navi-content">
          <ul>
            <li>
              <HashLink
                to="#header"
                onClick={() => {
                  setNavchange(false);
                }}
              >
                首頁
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#firstPage"
                onClick={() => {
                  setNavchange(false);
                }}
              >
                觀光景點
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#secondPage"
                onClick={() => {
                  setNavchange(false);
                }}
              >
                旅遊行程
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#thirdPage"
                onClick={() => {
                  setNavchange(false);
                }}
              >
                使用者心得
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#fourthPage"
                onClick={() => {
                  setNavchange(false);
                }}
              >
                預約
              </HashLink>
            </li>
          </ul>
        </div>
      )}
      <div className="header__text-box">
        <h1>OUTDOORS</h1>
        <p>準備好開始冒險了嗎？</p>
        <button className="btn--animated">Start</button>
      </div>
      <p className="bg-name">Qixingtan Beach</p>
    </header>
  );
};

export default homepage;
