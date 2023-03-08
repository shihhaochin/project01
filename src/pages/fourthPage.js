import React from "react";
import toroImg from "../img/taroko.png";
import oceanImg from "../img/oceanpark.png";
import rareeImg from "../img/Rareseed.png";

const fourthPage = () => {
  return (
    <section className="fourthPage" id="fourthPage">
      <div className="booking-box">
        <div className="booking-left">
          <div className="Img-box">
            <img src={toroImg} alt="toroko" />
            <div className="imgFilter-1"></div>
            <p className="easyText">easy</p>
          </div>
          <div className="Img-box">
            <img src={oceanImg} alt="oceanpark" />
            <div className="imgFilter-2"></div>
            <p className="mediumText">medium</p>
          </div>
          <div className="Img-box">
            <img src={rareeImg} alt="rareseed" />
            <div className="imgFilter-3"></div>
            <p className="hardText">hard</p>
          </div>
        </div>
        <div className="booking-right">
          <div className="booking-right-left"></div>
          <div className="booking-right-input">
            <input type="text" placeholder="姓名" required />
            <input type="email" placeholder="email" required />
            <input type="text" placeholder="電話號碼" required />
            <select name="" id="">
              <option value="">請選擇冒險等級</option>
              <option>easy</option>
              <option>medium</option>
              <option>hard</option>
            </select>
            <button>預約行程</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default fourthPage;
