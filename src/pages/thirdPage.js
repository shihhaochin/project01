import React from "react";
import headshot1 from "../img/headshot1.png";
import headshot2 from "../img/headshot2.png";

const thirdPage = () => {
  return (
    <section className="thirdPage" id="thirdPage">
      <div className="thirdPage-bg">
        <h1>冒險心得</h1>
        <div className="message--card">
          <div className="message--card-left">
            <img src={headshot1} alt="headshot" />
            <p>Kelly</p>
          </div>
          <div className="message--card-right">
            <h2>跟家人過了一個愉快的週末</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              impedit dolorem placeat fugiat perferendis minima, sit hic
              veritatis nemo earum laudantium soluta veniam nihil exercitationem
              explicabo facilis repellat, ea sapiente?
            </p>
            <div className="message-email">
              <p>IAMKELLY@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="message--card">
          <div className="message--card-left">
            <img src={headshot2} alt="headshot" />
            <p>John</p>
          </div>
          <div className="message--card-right">
            <h2>永生難忘的一場大冒險</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem blanditiis repellat, quisquam sit, enim velit, vero
              cupiditate harum error vitae incidunt? Vitae praesentium, id
              consequatur consequuntur molestiae iste explicabo blanditiis.
            </p>
            <div className="message-email">
              <p>JOHNISME@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default thirdPage;
