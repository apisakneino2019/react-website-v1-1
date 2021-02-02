import React from "react";
import "../../App.css";

import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { useTranslation } from "react-i18next";

function Devices() {
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
                src="/img-v1/Device-1.png"
                alt="control "
              />
              <div className="data-text">
                <h3>FireWatcher 971 อุปกรณ์แจ้งเตือน - Horn FW971</h3>
                <br />
                <p>
                  {" "}
                  <li>อุปกรณ์ส่งสัญญาณเสียง</li>
                  <li>
                    วงจรซิงโครไนซ์ในตัวที่สามารถซิงโครไนซ์แตรหลายตัวในระบบสัญญาณเตือนไฟไหม้ที่สมบูรณ์
                  </li>
                </p>

                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">{t("ser.9")} </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* ชุดที่ 2 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/Device-2.png"
                alt="control "
              />
              <div className="data-text">
                <h3>FireWatcher 982 Multi-Candela Strobe FW982</h3>
                <br />
                <p>
                  <li>อุปกรณ์ส่งสัญญาณภาพหลายแคนเดลา</li>
                  <li>แหล่งกำเนิดแสงที่สร้างจากไดโอดเปล่งแสงสีขาว (LED)</li>
                  <li>เลือกระดับความสว่างได้ห้าระดับ</li>
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
                src="/img-v1/Device-3.png"
                alt="control "
              />
              <div className="data-text">
                <h3>FireWatcher 962 Multi-Candela Horn / Strobe FW962</h3>
                <br />
                <p>
                  <li>
                    เครื่องใช้สัญญาณภาพและ / หรือสัญญาณเสียงแบบมัลติแคนเดลา
                  </li>
                  <li>แหล่งกำเนิดแสงที่สร้างจากไดโอดเปล่งแสงสีขาว (LED)</li>

                  <li>รวมคุณสมบัติทั้ง Horn และ Strobe (FW971, FW982)</li>
                </p>
                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">{t("ser.9")} </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* ชุดที่ 4 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/Device-4.png"
                alt="control "
              />
              <div className="data-text">
                <h3>อุปกรณ์มินิฮอร์น FireWatcher 972MR, FireWatcher 972MW</h3>
                <br />
                <p>
                  <li>แตรมีการตั้งค่าระดับเสียงสามระดับ</li>
                  <li>ผาเครื่องใช้สัญญาณเสียงที่ทำงานบน NAC เมเปิลเกราะ</li>
                  <li>รายการตาม UL 464 และ ULC-S525 สำหรับใช้ภายในอาคาร</li>
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
          <span>
            <img src="/img-960px/up_arrow_round.png" alt="up_arrow_round" />
          </span>
        </ScrollToTop>
      </div>
    </div>
  );
}

export default Devices;
