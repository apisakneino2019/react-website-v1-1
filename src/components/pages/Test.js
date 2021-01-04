import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Test() {
  return (
    <div className="area">
      <div className="container">
        <div className="grid">
          <div className="item">
            <div className="img">
              <img src="/img-v1/annunciators.jpg" alt />
              <div className="data-text">
                ทฤษฎีที่แสดงให้เห็นถึงพฤติกรรมทั่วไปของมนุษย์เมื่อตกอยู่ในสถานะการณ์ที่มีเหตุเพลิงไหม้
                ขั้นการรับรู้
                เป็นขั้นตอนสำคัญที่สุดเพื่อให้ผู้ที่อยู่ในอาคารสามารถรับรู้ได้ว่ากำลังเกิดเพลิงไหม้ในอาคาร
                ถ้าไม่มีระบบ Fire Alarm จะทำให้พวกเขารู้ตัวได้ช้า
                ซึ่งเสี่ยงต่อการเกิดอันตรายต่อชีวิตได้ ขั้นการประเมินสถานะการณ์
                เป็นขั้นตอนที่จะประเมินความเสี่ยงถึงความรุนแรงของเพลิงไหม้ในอาคาร
                เช่น การค้นหาต้นเพลิง
                หรือการมองออกไปด้านนอกอาคารเพื่อดูว่ามีควันไฟจำนวนมากหรือไม่
                ขั้นตอนการตัดสินใจ
                เมื่อพบต้นเพลิงแล้วพวกเขามีความสามารถในการดับไฟหรือไม่
                หรือควรรีบอพยพออกจากอาคารเนื่องจากเพลิงลุกไหม้เกินการควบคุมด้วยตนเอง
                ขั้นลงมือทำ หลังจากการตัดสินใจแล้วว่าจะดับต้นเพลิงด้วยตนเอง
                ก็เริ่มมองหาอุปกรณ์ดับเพลิงใกล้ตัว เช่น ถังฉีดน้ำดับเพลิง
                ตู้ดับเพลิง หรือตัดสินใจอพยพออกจากตัวอาคารตามทางหนีไฟ
                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">Readmore </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="img">
              <img src="images-notifier\coming-soon-1.jpg" alt />
              <div className="text">
                ระบบไฟอลาม
                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">Readmore </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="img">
              <img src="images-notifier\coming-soon-1.jpg" alt />
              <div className="text">
                ระบบไฟอลาม
                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">Readmore </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="img">
              <img src="images-notifier\coming-soon-1.jpg" alt />
              <div className="text">
                ระบบไฟอลาม
                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">Readmore </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="img">
              <img src="images-notifier\coming-soon-1.jpg" alt />
              <div className="text">
                ระบบไฟอลาม
                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">Readmore </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="img">
              <img src="images-notifier\coming-soon-1.jpg" alt />
              <div className="text">
                ระบบไฟอลาม
                <div className="btn">
                  <Link to="/products">
                    <button className="btn-1">Readmore </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Test;
