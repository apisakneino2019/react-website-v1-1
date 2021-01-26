import React from "react";
import "../Products.css";
import "../App.css";
import { Link } from "react-router-dom";

const datas = [
  {
    id: "24",
    img: "/imgservices/NOHMI-FAPN202-R-5L.jpg",
    alt: "1",
    title: "ตู้ควบคุม",
    decrition: "",
  },
  {
    id: "25",
    img: "/imgservices/notifier-SD-651Smoke-Detectors.jpg",
    alt: "1",
    title: "อุปกรณ์ตรวจจับควันไฟ",
    decrition: "",
  },
  {
    id: "26",
    img: "/imgservices/Heat_Detectors_5600_Series.jpg",
    alt: "1",
    title: "อุปกรณ์ตรวจจับความร้อน",
    decrition: "",
  },
  {
    id: "27",
    img: "/imgservices/Alarm_Bell.jpg",
    alt: "1",
    title: "อุปกรณ์สัญญาณแจ้งเตือน",
    decrition: "",
  },
  {
    id: "28",
    img: "/imgservices/Fire_Alarm_Pull_Stations_NBG-12-_Series.jpg",
    alt: "1",
    title: "อุปกรณ์แจ้งเหตุด้วยมือ",
    decrition: "",
  },
  {
    id: "29",
    img: "/imgservices/Monitor_Modules_with_FlashScan.jpg",
    alt: "1",
    title: "อุปกรณ์เสริม",
    decrition: "",
  },
];

export default function ContactUs() {
  return (
    <div className="area">
      <div className="containers">
        <div className="item-containers">
          {datas.map(function (data, i) {
            return (
              <div>
                <div className="img">
                  <img src={data.img} alt="1" />
                </div>
                <Link to="/Products">
                  <p className="data-one">{data.title}</p>
                </Link>

                <p className="data-two">{data.decrition}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
