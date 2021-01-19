import React from "react";
import "../../Products.css";
import Footer from "../Footer";
import TopPage from "../TopPage";
import ScrollToTop from "react-scroll-up";
import { Link } from "react-router-dom";

const datas = [
  {
    id: "10",
    img: "/img-v1/Smoke.png",
    alt: "1",
    title: "เครื่องตรวจจับควันระบบไฟฟ้า CM-WT32L",
    decrition: "เป็นตัวแทนจำหน่ายที่ผ่านการรับรองจาก R.O.C",
  },

  {
    id: "11",
    img: "/img-v1/GST-IFP.png",
    alt: "2",
    title: "แผงควบคุมเตือนไฟไหม้อัจฉริยะ",
    decrition:
      "รุ่น GST-IFP8 ความสามารถในการใช้พลังงานที่หลากหลายเหมาะสำหรับอุปกรณ์ไฟฟ้าทุกประเภท",
  },
  {
    id: "12",
    img: "/img-v1/Notifier.png",
    alt: "1",
    title: "เครื่องตรวจจับความร้อน รุ่น 5600",
    decrition: "5600 Series Mechaical Heat Detectors",
  },
  {
    id: "13",
    img: "/img-v1/Address.png",
    alt: "1",
    title: "โมดูลอินพุตแอดเดรส GST",
    decrition:
      "รุ่น I-9300 เข้ารหัสด้วยโปรแกรมเมอร์มือถือ P9910 สามารถเลือกชนิดอินพุต N/O (default) หรือ N/C โดย programmer",
  },
  {
    id: "14",
    img: "/img-v1/Pannal.png",
    alt: "1",
    title: "แผงควบคุมระบบแจ้งเตือนไฟไหม้ CM-P1",
    decrition: "แผงควบคุมระบบแจ้งเตือนไฟไหม้ แบบตั้ง",
  },
  {
    id: "15",
    img: "/img-v1/Sensor.png",
    alt: "1",
    title: "เครื่องดักจับหลายเซนเซอร์ GST",
    decrition:
      "รุ่น I-9101 หมาะกับระบบความปลอดภัยในชีวิตซึ่งการตรวจสอบเพียงครั้งเดียวตามปกติไม่เพียงพอ",
  },
  {
    id: "16",
    img: "/img-v1/Buzzer.png",
    alt: "1",
    title: "ฐานเสียงสัญญาณเตือน GST",
    decrition:
      "รุ่น I/C-9402 เสียงเตือนอยู่ในโหมดการแจ้งเตือน / อพยพคนออกจากพื้นที่ เหมาะสำหรับสำนักงานหรือห้องพักโรงแรม",
  },
  {
    id: "17",
    img: "/img-v1/CM-FPI.png",
    alt: "1",
    title: "ระบบแจ้งเตือนไฟไหม้ รุ่น CM-FPI",
    decrition: "ระบบแจ้งเตือนสัญญานไฟ้ไหม้ รุ่น CM-FPI",
  },
  {
    id: "18",
    img: "/img-v1/CM-PBL.png",
    alt: "1",
    title: "ระบบแจ้งเตือนไฟไหม้ CM-PBL",
    decrition: "ระบบแจ้งเตือนไฟไหม้แบบคอมเพลกซ์",
  },
  {
    id: "19",
    img: "/img-v1/Firealam.png",
    alt: "1",
    title: "อุปกรณ์แจ้งเหตุเพลิงไหม้ด้วยมือ GST",
    decrition:
      "รุ่น I/C-9202 อุปกรณ์เตือนแบบใช้มือ ตั้งค่าใหม่ด้วยกุญแจพิเศษ รหัส MCP อัจฉริยะโดยโปรแกรมเมอร์มือถือ",
  },
];

export default function Productstest() {
  return (
    <div className="area">
      <TopPage />
      <div className="breadcrumbs">
        <span className="showHere">คุณอยู่ที่: </span>
        <a href="/" className="pathway">
          หน้าแรก
        </a>
        <span className="showHere">
          {" "}
          <i class="fa fa-arrow-right" aria-hidden="true"></i>{" "}
        </span>
        <a href="/products" className="pathway">
          อุปกรณ์ทั้งหมด
        </a>
      </div>
      <div className="containers">
        <Link to="/">
          <button
            className="btn-next-one"
            style={{
              backgroundColor: "#ff0",
              color: "#0000ff",
              padding: "5px 20px",
              margin: "0 3px",
            }}
          >
            หน้าแรก
          </button>
        </Link>
        <Link to="/products">
          <button
            className="btn-next-one"
            style={{
              backgroundColor: "#ff0",
              color: "#0000ff",
              padding: "5px 20px",
              margin: "0 3px",
            }}
          >
            หน้า 1/4
          </button>
        </Link>

        <Link to="/Productstest">
          <button
            className="btn-next-one"
            style={{
              color: "#0000ff",
              backgroundColor: "red",
              color: "white",
              padding: "5px 20px",
              margin: "0 3px",
            }}
          >
            หน้า 2/4
          </button>
        </Link>

        <Link to="/ProductsFrist">
          <button
            className="btn-next-one"
            style={{
              backgroundColor: "#ff0",
              color: "#0000ff",
              padding: "5px 20px",
              margin: "0 3px",
            }}
          >
            หน้า 3/4
          </button>
        </Link>
        <Link to="/ProductsSecond">
          <button
            className="btn-next-one"
            style={{
              backgroundColor: "#ff0",
              color: "#0000ff",
              padding: "5px 20px",
              margin: "0 3px",
            }}
          >
            หน้า 4/4
          </button>
        </Link>
        <div className="item-containers">
          {datas.map(function (data, i) {
            return (
              <div>
                <div className="img">
                  <p className="datanumber">{data.id}</p>
                  <img src={data.img} alt="1" />
                </div>
                <p className="data-one">{data.title}</p>
                <p className="data-two">{data.decrition}</p>

                <>
                  <div className="btn-btn">
                    <Link to="/AboutUs">
                      <button className="btn-btn-2">ติดต่อฝ่ายขาย </button>
                    </Link>
                  </div>
                </>
              </div>
            );
          })}

          <ScrollToTop showUnder={160}>
            <span>
              <img src="/img-960px/up_arrow_round.png" alt="" />
            </span>
          </ScrollToTop>
        </div>
      </div>
      <Footer />
    </div>
  );
}
