import React from "react";
import "../../App.css";
// import Footer from "../Footer";

import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";

function Heatdetectors() {
  return (
    <div className="area">
      <div className="container">
        <div className="grid">
          <div className="item">
            {/* ชุดที่1 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/Heatdetectors-1.png"
                alt="control "
              />
              <div className="data-text">
                <h3>
                  FireWatcher 511 เครื่องตรวจจับควันโฟโตอิเล็กทริคอัจฉริยะ FW511
                </h3>
                <br />
                <p>
                  <li>
                    มันตอบสนองอย่างรวดเร็วและเชื่อถือได้กับการยิงในวงกว้าง
                  </li>
                  <li>
                    การออกแบบที่บางเฉียบผสมผสานการดึงดูดสายตาเข้ากับมาตรฐานความน่าเชื่อถือระดับสูง
                  </li>
                  <li>
                    เครื่องตรวจจับควันอัจฉริยะใช้กับฐานตรวจจับ FW500 / FW501
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
                src="/img-v1/Heatdetectors-2.png"
                alt="control "
              />
              <div className="data-text">
                <h3>FireWatcher 521 เครื่องตรวจจับความร้อนอัจฉริยะ FW521</h3>
                <br />
                <p>
                  <li>
                    เครื่องตรวจจับความร้อนอัจฉริยะสำหรับใช้ภายในอาคารพร้อมทั้งสัญญาณเตือนอุณหภูมิคงที่และลักษณะการเตือนอัตราการเพิ่มขึ้น
                  </li>
                  <li>
                    การออกแบบที่บางเฉียบผสมผสานการดึงดูดสายตาเข้ากับมาตรฐานความน่าเชื่อถือระดับสูง
                  </li>
                  <li>
                    เครื่องตรวจจับมีหน่วยไมโครคอนโทรลเลอร์ (MCU)
                    ที่ทำการทดสอบวินิจฉัยตัวเองแบบครอบคลุมและการวิเคราะห์ผลลัพธ์
                  </li>
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
      {/* <Footer /> */}
    </div>
  );
}

export default Heatdetectors;
