import React from "react";
import logo from "../img/logo.png";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";
import youtube from "../img/youtube.svg";

const footer = () => {
  return (
    <footer>
      <div className="footer-head">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <h2>HualienKing</h2>
      </div>
      <div className="footer-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-img">
        <img src={facebook} alt="facebookIcon" />
        <img src={instagram} alt="instagramIcon" />
        <img src={twitter} alt="twitterIcon" />
        <img src={youtube} alt="youtubeIcon" />
      </div>
    </footer>
  );
};

export default footer;
