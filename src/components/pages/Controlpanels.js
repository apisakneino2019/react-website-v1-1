import React from "react";
import "../../App.css";
// import Footer from "../Footer";

import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { useTranslation } from "react-i18next";

function Controlpanels() {
  const { t } = useTranslation();
  return (
    <div className="area">
      <div className="container">
        <div className="grid">
          <div className="item">
            {/* ชุดที่1 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/alarmfire-1.png"
                alt="control "
              />
              <div className="data-text">
                <h3>แผงควบคุมสัญญาณเตือนไฟไหม้ FireWatcher 106S </h3>
                <br />
                <p>
                  {" "}
                  <li>แผงควบคุมสัญญาณเตือนไฟไหม้อัจฉริยะแอดเดรส</li>
                  <li>ออกแบบมาสำหรับสิ่งอำนวยความสะดวกขนาดเล็ก</li>
                  <li>
                    เหมาะสำหรับการตรวจจับและแจ้งเตือนอัคคีภัยทั้งในเชิงพาณิชย์สถาบันและอุตสาหกรรมใหม่และติดตั้งเพิ่มเติม
                  </li>
                  <li>
                    สามารถรองรับยูนิตลูปแอดเดรส 1 ชุดและอุปกรณ์แอดเดรส / จุด 252
                    รายการ
                  </li>
                </p>

                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">{t("ser.9")} </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* ชุดที่2 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/alarmfire-2.png"
                alt="control "
              />
              <div className="data-text">
                <h3>FireWatcher 106 แผงควบคุมสัญญาณเตือนไฟไหม้ FW106</h3>
                <br />
                <p>
                  <li>แผงควบคุมสัญญาณเตือนไฟไหม้อัจฉริยะแอดเดรส</li>
                  <li>ออกแบบมาสำหรับสิ่งอำนวยความสะดวกขนาดเล็กถึงขนาดกลาง</li>
                  <li>
                    เหมาะสำหรับการตรวจจับและแจ้งเตือนอัคคีภัยทั้งในเชิงพาณิชย์สถาบันและอุตสาหกรรมใหม่และติดตั้งเพิ่มเติม
                  </li>
                  <li>
                    สามารถรองรับวงจรลูปแอดเดรสได้ 4 ตัวและอุปกรณ์แอดเดรสได้
                    1,008 ชิ้น / จุด
                  </li>
                </p>

                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">{t("ser.9")} </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* ชุดที่ 3 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/alarmfire-3.png"
                alt="control "
              />
              <div className="data-text">
                <h3>หน่วยเครือข่ายภายนอก FW357A</h3>
                <br />
                <p>
                  <li>
                    เครื่องนี้มีขั้ว CAN
                    บัสสองขั้วเพื่อสื่อสารกับแผงควบคุมและตัวแจ้งเตือน
                  </li>
                  <li>
                    เป็นไปตามมาตรฐาน UL864 10th Edition และมาตรฐาน ULC-S527 3rd
                    Edition
                  </li>
                  <li>มีทั้งการเดินสาย Class X และ Class B</li>
                  <li>องรับการตั้งค่าที่แตกต่างกันสองแบบ</li>
                </p>
                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">{t("ser.9")} </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="area">
        {" "}
        <ScrollToTop showUnder={160}>
          <img src="/img-960px/up_arrow_round.png" alt="up_arrow_round" />
        </ScrollToTop>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Controlpanels;
