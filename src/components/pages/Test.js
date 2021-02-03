// import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Annunciator from "./Annunciator";
import Devices from "./Devices";
import GuidePage from "../GuidePage";
import Heatdetectors from "./Heatdetectors";
import Manualpullstation from "./Manualpullstation";
import Firealarmmodules from "./Firealarmmodules";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Test() {
  const { t } = useTranslation();

  return (
    <div className="area">
      <GuidePage />

      <div className="breadcrumbs">
        <span className="showHere"> {t("hero.11")}: </span>
        <a href="/" className="pathway">
          {t("hero.12")}
        </a>
        <span className="showHere">
          {" "}
          <i class="fa fa-arrow-right" aria-hidden="true"></i>{" "}
        </span>
        <a href="/services" className="pathway">
          {t("nav.5")}
        </a>
      </div>
      <div className="container">
        <div className="grid">
          <ul class="pagination">
            <li>
              <a href="#">«</a>
            </li>
            <li>
              <a href="#">1</a>
            </li>

            <li>
              <a href="#">»</a>
            </li>
          </ul>

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
          <Annunciator />
          <Devices />
          <Heatdetectors />
          <Manualpullstation />
          <Firealarmmodules />
        </div>
      </div>
      <ScrollToTop showUnder={160}>
        <img src="/img-960px/up_arrow_round.png" alt="" />
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default Test;
