import React from "react";
import "../App.css";

import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay muted loop id="myVideo">
        <source src="/video/Yellowfire.mp4" type="video/mp4" />
      </video>

      <div className="img-home">
        {/* <img src="/img-960px/firet.jpg" alt="" width="615" height="auto" /> */}{" "}
        <h1>ระบบ Fire Alarm ในอาคารช่วยอะไรได้บ้าง</h1>
        <p>ทำไมคุณถึงควรติดตั้งระบบ Fire Alarm ในอาคาร</p>
      </div>
    </div>
  );
}

export default HeroSection;
