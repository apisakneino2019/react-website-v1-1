import React from "react";
import "../../App.css";

import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { useTranslation } from "react-i18next";

function Firealarmmodules() {
  const { t } = useTranslation();
  return (
    <div className="area">
      <div className="container">
        <div className="grid">
          <div className="item">
            {/* ชุดที่ 1 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/Firealarmmodules-1.png"
                alt="control "
              />
              <div className="data-text">
                <h3>โมดูลอินพุต FireWatcher 811 FW811</h3>
                <br />
                <p>
                  <li>โมดูลอินพุตที่ตรวจสอบหน้าสัมผัสแบบแห้งเดียว</li>
                  <li>
                    อุปกรณ์ที่ระบุ UL / ULC ตามมาตรฐาน UL864 และ ULCS527
                    สำหรับระบบสัญญาณป้องกันอัคคีภัยสำหรับใช้ภายในอาคาร
                  </li>
                  <li>
                    วงจรฟิลด์ได้รับการตรวจสอบสำหรับความผิดพลาดของสายเปิดและความผิดพลาดของกราวด์และหน้าสัมผัสจะต้องต่อสายด้วยตัวต้านทานปลายสาย
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
                src="/img-v1/Firealarmmodules-2.png"
                alt="control "
              />
              <div className="data-text">
                <h3>FireWatcher 811M โมดูลอินพุตขนาดเล็ก FW811M</h3>
                <br />
                <p>
                  <li>โมดูลอินพุตที่ตรวจสอบหน้าสัมผัสแบบแห้งเดียว</li>
                  <li>
                    อุปกรณ์ที่ระบุ UL / ULC ตามมาตรฐาน UL864 และ ULC-S527
                    สำหรับระบบสัญญาณป้องกันอัคคีภัยสำหรับใช้ภายในอาคาร
                  </li>
                  <li>
                    วงจรฟิลด์ได้รับการตรวจสอบสำหรับความผิดพลาดของสายเปิดและความผิดพลาดของกราวด์และหน้าสัมผัสจะต้องต่อสายด้วยตัวต้านทานปลายสาย
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
                src="/img-v1/Firealarmmodules-3.png"
                alt="control "
              />
              <div className="data-text">
                <h3>FireWatcher 821 I / O โมดูล FW821</h3>
                <br />
                <p>
                  <li>โมดูลอินพุต - เอาต์พุต</li>
                  <li>
                    อุปกรณ์ที่ระบุ UL / ULC ตามมาตรฐาน UL864 และ ULC-S527
                    สำหรับระบบสัญญาณป้องกันอัคคีภัยสำหรับใช้ภายในอาคาร
                  </li>
                  <li>
                    ให้เอาต์พุต 24VDC
                    หนึ่งเอาต์พุตและการตรวจสอบเพิ่มเติมสำหรับผู้ติดต่ออินพุตป้อนกลับหนึ่งรายการ
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
                src="/img-v1/Firealarmmodules-4.png"
                alt="control "
              />
              <div className="data-text">
                <h3>โมดูลรีเลย์ FireWatcher 831 FW831</h3>
                <br />
                <p>
                  <li>โมดูลรีเลย์</li>
                  <li>
                    ผลิตภัณฑ์ที่จดทะเบียนใน UL / ULC ตามมาตรฐาน UL864 และ
                    ULC-S527 สำหรับระบบสัญญาณป้องกันอัคคีภัยสำหรับใช้ภายในอาคาร
                  </li>
                  <li>ให้เอาต์พุตรีเลย์ควบคุมสองชุดซึ่งจะเปิดใช้งานพร้อมกัน</li>
                </p>

                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">{t("ser.9")} </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* ชุดที่ 5 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/Firealarmmodules-5.png"
                alt="control "
              />
              <div className="data-text">
                <h3>FireWatcher 951 Sync Module FW951</h3>
                <br />
                <p>
                  <li>
                    Sync Module เป็นอุปกรณ์ที่ออกแบบมาพร้อมกับ FW961 / FW971 /
                    FW981 Horn และ / หรือ Strobe
                  </li>
                  <li>
                    วงจรซิงโครไนซ์ในตัวเพื่อซิงโครไนซ์ FW961
                    หลายตัวในระบบสัญญาณเตือนไฟไหม้ที่สมบูรณ์
                  </li>
                  <li>
                    วงจรแจ้งเตือนอุปกรณ์ (NAC) สูงสุด 64
                    วงจรเชื่อมต่อเครือข่ายแบบสแตนด์อโลนหรือเชื่อมต่อกับ FW951
                  </li>
                </p>

                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">{t("ser.9")} </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* ชุดที่ 6 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/Firealarmmodules-6.png"
                alt="control "
              />
              <div className="data-text">
                <h3>โมดูลแยก FireWatcher 851 FW851</h3>
                <br />
                <p>
                  <li>โมดูลการแยกแยกจุดชอร์ตบนวงจรสายสัญญาณ (SLC)</li>
                  <li>
                    {" "}
                    รีเลย์ภายในจะถูกกระตุ้นเพื่อตัดกำลังของสายที่ตรวจพบปัญหาสั้น
                    ๆ
                  </li>
                </p>

                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">{t("ser.9")} </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* ชุดที่ 7 */}
            <div className="img">
              <img
                className="data-img"
                src="/img-v1/Firealarmmodules-7.png"
                alt="control "
              />
              <div className="data-text">
                <h3>อุปกรณ์เขียนโปรแกรมแบบพกพา FW412</h3>
                <br />
                <p>
                  <li>
                    หน่วย FW412
                    ที่ตั้งโปรแกรมได้ช่วยให้ผู้ใช้สามารถอ่านที่อยู่ของอุปกรณ์ที่มีอยู่และสามารถตั้งโปรแกรมที่อยู่ของอุปกรณ์ใหม่ได้
                  </li>
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
      <ScrollToTop showUnder={160}>
        <img src="/img-960px/up_arrow_round.png" alt="" />
      </ScrollToTop>
    </div>
  );
}

export default Firealarmmodules;
