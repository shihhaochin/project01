import React, { useState } from "react";
import Carousel from "../components/Carousel";
import taroko from "../img/taroko.png";
import oceanpark from "../img/oceanpark.png";
import rareseed from "../img/Rareseed.png";
import tarokoText from "../img/ttoroko-text.png";
import oceanText from "../img/ocean-text.png";
import rareseedText from "../img/rareseed-text.png";
import leftbtn from "../img/left.png";
import rightbtn from "../img/right.png";

const firstPage = () => {
  const slides = [taroko, oceanpark, rareseed];
  const slides2 = [tarokoText, oceanText, rareseedText];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    setCurr((curr) => (curr === 0 ? slides2.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    setCurr((curr) => (curr === slides2.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="firstPage" id="firstPage">
      <div className="firstPage-filter"></div>
      <div className="tourist-box">
        <section className="touristSpot">
          <Carousel slides={slides} curr={curr} />
        </section>
        <div className="control-btn">
          <div className="left-btn">
            <img src={leftbtn} onClick={next} alt="" />
          </div>
          <div className="right-btn">
            <img src={rightbtn} onClick={prev} alt="" />
          </div>
        </div>

        <section className="touristText">
          <div
            className="carousel-text"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slides2.map((s) => (
              <div className="carousel__text-box">
                <img src={s} alt="img" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default firstPage;
