import React from "react";
import "../App.css";

import "./HeroSection.css";

export default function HeaderPage() {
  return (
    <div className="area">
      <div className="hero-container">
        <video autoPlay muted loop id="myVideo">
          <source src="/video/Yellowfire.mp4" type="video/mp4" />
        </video>

        <div className="img-home">
          {/* <img src="/img-960px/firet.jpg" alt="" width="615" height="auto" /> */}
          {/* <h1>เกิดเหตุไฟไหม้ ป้องกันไฟไหม้ เราช่วยคุณได้ </h1> */}
          <p>
            อุปกรณ์แจ้งสัญญาณ ระบบแจ้งเหตุเพลิงไหม้ ตู้ควบคุมแจ้งเหตุเพลิงไหม้
            <br />
            อุปกรณ์ตรวจจับสัญญาณ อุปกรณ์แจ้งสัญญาณ
            รับประกอบตู้กราฟฟิกและตู้โมดูล
          </p>
          <div className="hero-img-container">
            <div className="img-grid">
              <>
                <img
                  src="/img-960px/alarmfire.png"
                  alt=""
                  width="100%"
                  height="auto"
                />
                <img
                  src="/img-960px/alarmfire1.png"
                  alt=""
                  width="100%"
                  height="auto"
                />
                <img
                  src="/img-960px/alarmfire2.png"
                  alt=""
                  width="100%"
                  height="auto"
                />
                <img
                  src="/img-960px/alarmfire3.png"
                  alt=""
                  width="100%"
                  height="auto"
                />
              </>
              {/* <div>
              <img src="" alt="test" />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
