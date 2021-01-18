import React from "react";
import "./TopTitle.css";
export default function TopAbout() {
  return (
    <div className="TopTitle">
      <video autoPlay muted loop id="myVideo">
        <source src="/video/Yellowfire.mp4" type="video/mp4" />
      </video>
      <h1 className="text-title">ติดต่อเรา</h1>
    </div>
  );
}
