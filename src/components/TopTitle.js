import React from "react";
import "./TopTitle.css";

export default function TopTitle() {
  return (
    <>
      <div className="TopTitle">
        <div className="TopTitleText">
          <h1 className="text-title">
            {" "}
            เพลิงไหม้ มีสาเหตุ ! <br />{" "}
          </h1>
          <h1 className="text-title">
            {" "}
            เราจะป้องกันได้อย่างไร ? ที่นี่มีคำตอบ
          </h1>
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
