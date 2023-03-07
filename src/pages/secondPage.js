import React from "react";
import taroko from "../img/taroko.png";
import ocean from "../img/oceanpark.png";
import rareseed from "../img/Rareseed.png";

const secondPage = () => {
  return (
    <section className="secondPage">
      <div className="secondBg">
        <h1>選擇屬於您的專屬旅程</h1>
        <div className="schedule-box">
          <div className="schedule_card">
            <div className="schedule_card--front-1">
              <div className="front-1-bg">
                <img src={taroko} alt="tarokoImg" />
              </div>
              <div className="front-1-text">
                <ul>
                  <h2>～太魯閣行～</h2>
                  <li>2天1夜</li>
                  <li>冒險等級： easy</li>
                  <li>推薦人數：１～２人</li>
                  <li>住宿: ４星級飯店</li>
                  <li>*有專屬導遊</li>
                </ul>
              </div>
            </div>
            <div className="schedule_card--back-1">
              <p>4900元</p>
              <button>詳細行程</button>
            </div>
          </div>
          <div className="schedule_card">
            <div className=" schedule_card--front-2">
              <div className="front-2-bg">
                <img src={ocean} alt="oceanpark" />
              </div>
              <div className="front-2-text">
                <ul>
                  <h2>～海洋公園～</h2>
                  <li>3天2夜</li>
                  <li>冒險等級： medium </li>
                  <li>推薦人數： 3~4人</li>
                  <li>住宿: 小木屋</li>
                  <li>*有附指南針及詳細地圖</li>
                </ul>
              </div>
            </div>
            <div className="schedule_card--back-2">
              <p>6900元</p>
              <button>詳細行程</button>
            </div>
          </div>
          <div className="schedule_card">
            <div className="schedule_card--front-3">
              <div className="front-3-bg">
                <img src={rareseed} alt="rareseedImg" />
              </div>
              <div className="front-3-text">
                <ul>
                  <h2>～瑞穗牧場～</h2>
                  <li>4天3夜</li>
                  <li>冒險等級： hard </li>
                  <li>推薦人數： 5~6人</li>
                  <li>住宿: 野外露宿</li>
                  <li>*有附礦泉水一瓶</li>
                </ul>
              </div>
            </div>
            <div className="schedule_card--back-3">
              <p>10900元</p>
              <button>詳細行程</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default secondPage;
