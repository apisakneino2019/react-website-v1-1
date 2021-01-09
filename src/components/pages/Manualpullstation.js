import React from "react";
import "../../App.css";

import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";

function Manualpullstation() {
  return (
    <div className="area">
      <div className="container">
        <div className="grid">
          <div className="item">
            {/* ชุดที่1 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/Manualpullstation-1.png"
                alt="control "
              />
              <div className="data-text">
                <h3>FireWatcher 721 Manual Pull Station FW721</h3>
                <br />
                <p>
                  <li>สถานีคู่มือแอดเดรส</li>
                  <li>
                    อุปกรณ์ที่อยู่ในรายการ UL และ ULC ตามมาตรฐาน UL 38 และ
                    ULC-S528 สำหรับระบบสัญญาณป้องกันอัคคีภัยสำหรับใช้ภายในอาคาร
                  </li>
                  <li>
                    เป็นอุปกรณ์เริ่มต้นแบบเปิดตามปกติซึ่งทำจากวัสดุที่ทนทานและชิ้นส่วนที่เป็นของแข็งเพื่อประสิทธิภาพที่ยาวนาน
                  </li>
                </p>

                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">อุปกรณ์ทั้งหมด </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* ชุดที่ 2 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/Manualpullstation-2.png"
                alt="control "
              />
              <div className="data-text">
                <h3>FireWatcher 722 Manual Pull Station FW722</h3>
                <br />
                <p>
                  <li>สถานีคู่มือแอดเดรสที่สอดคล้องกับ ADA</li>
                  <li>
                    อุปกรณ์ที่แสดงรายการ UL / ULC ตามมาตรฐาน UL38 และ ULC-S528
                    สำหรับระบบสัญญาณป้องกันอัคคีภัยสำหรับใช้ภายในอาคาร
                  </li>
                  <li>การเปิดใช้งานแผ่นกดที่ใช้งานง่าย</li>
                </p>

                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">อุปกรณ์ทั้งหมด </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop showUnder={160}>
        <span>
          <img src="/img-960px/up_arrow_round.png" alt="" />
        </span>
      </ScrollToTop>
    </div>
  );
}

export default Manualpullstation;
