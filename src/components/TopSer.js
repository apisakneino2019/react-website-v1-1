import React from "react";
import "./TopTitle.css";

export default function TopSer() {
  return (
    <div className="TopTitle">
      <video autoPlay muted loop id="myVideo">
        <source src="/video/Yellowfire.mp4" type="video/mp4" />
      </video>
      <h1 className="text-title">สินค้าและบริการ</h1>
    </div>
  );
}
