import React from "react";
import "./TopTitle.css";

export default function TopTitle() {
  return (
    <>
      <div className="TopTitle">
        <video autoPlay muted loop id="myVideo">
          <source src="/video/Yellowfire.mp4" type="video/mp4" />
        </video>

        <div className="TopTitleText">
          <h1 className="text-title"> "ไฟไหม้" เราช่วยป้องกันได้</h1>
        </div>
      </div>
      <div className="area">
        <div className="breadcrumbs">
          <span className="showHere">คุณอยู่ที่: </span>
          <a href="/" className="pathway">
            หน้าแรก
          </a>
        </div>
      </div>
    </>
  );
}
