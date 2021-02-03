import React from "react";
import "../../App.css";

import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { useTranslation } from "react-i18next";

function Annunciator() {
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
                src="/img-v1/Annunciator-1.png"
                alt="Annunciator "
              />
              <div className="data-text">
                <h3>FireWatcher 122 รีโมท LCD Annunciator FW122 </h3>
                <br />
                <p>
                  {" "}
                  <li>ตัวแจ้งเตือน LCD ระยะไกลอัจฉริยะ</li>
                  <li>ออกแบบมาเพื่อใช้กับ FW106 FireWatcher</li>
                  <li>จอ LCD สามารถแสดงเหตุการณ์ได้ครั้งละ 8 เหตุการณ์</li>
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
                src="/img-v1/Annunciator-2.png"
                alt="Annunciator "
              />
              <div className="data-text">
                <h3>FireWatcher 123 รีโมท LCD Annunciator FW123</h3>
                <br />
                <p>
                  <li>ตัวแจ้งเตือน LCD ขนาดกะทัดรัดระยะไกลอัจฉริยะ</li>
                  <li>ออกแบบมาเพื่อใช้กับแผงควบคุม FW106 หรือ FW106S</li>
                  <li>LCD สามารถแสดงเหตุการณ์พร้อมกันได้ 8 เหตุการณ์</li>
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
                src="/img-v1/Annunciator-3.png"
                alt="Annunciator "
              />
              <div className="data-text">
                <h3>FireWatcher 129 รีโมท LED Annunciator FW129</h3>
                <br />
                <p>
                  <li>ตัวแจ้งเตือน LED ระยะไกลอัจฉริยะ</li>
                  <li>ออกแบบมาเพื่อใช้กับแผงควบคุม FW106 / FW106S</li>

                  <li>
                    เชื่อมต่อกับแผงควบคุมผ่านเครือข่ายภายนอกเพื่อสร้างระบบเครือข่ายตรวจจับและแจ้งเตือนเหตุฉุกเฉิน
                  </li>
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
                src="/img-v1/Annunciator-4.png"
                alt="Annunciator "
              />
              <div className="data-text">
                <h3>สิ่งที่ส่งมาด้วยสภาพอากาศ MA1100</h3>
                <br />
                <p>
                  <li>มาพร้อมกับส่วนประกอบความร้อนที่ใช้สำหรับงานกลางแจ้ง</li>

                  <li>สามารถใช้ตัวแจ้งเตือน LCD FW122 กับกล่องหุ้มได้</li>
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
    </div>
  );
}

export default Annunciator;
