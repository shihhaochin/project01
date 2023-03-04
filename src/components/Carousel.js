import React from "react";

const Carousel = ({ slides, curr }) => {
  return (
    <div
      className="carousel"
      style={{ transform: `translateX(-${curr * 100}%)` }}
    >
      {slides.map((s) => (
        <div className="carousel__Img-box">
          <img src={s} alt="img" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
