import React from "react";
import "../Products.css";
import "../App.css";

const datas = [
  {
    id: "20",
    img: "/imgservices/services-1.jpg",
    alt: "1",
    title: "ระบบควบคุมอัจฉริยะ",
    decrition: "",
  },
  {
    id: "21",
    img: "/imgservices/services-2.jpg",
    alt: "1",
    title: "ระบบเสียงสำหรับห้องประชุม",
    decrition: "",
  },
  {
    id: "22",
    img: "/imgservices/services-3.jpg",
    alt: "1",
    title: "โปรแกรมสำเร็จรูปพร้อมใช้งาน",
    decrition: "",
  },
  {
    id: "23",
    img: "/imgservices/services-4.jpg",
    alt: "1",
    title: "ไมโครโฟนไร้สาย",
    decrition: "",
  },
  {
    id: "24",
    img: "/imgservices/services-5.jpg",
    alt: "1",
    title: "กล้องสำหรับการประชุม",
    decrition: "",
  },
  {
    id: "25",
    img: "/imgservices/services-6.jpg",
    alt: "1",
    title: "อุปกรณ์ตรวจจับควัน",
    decrition: "",
  },
  {
    id: "26",
    img: "/imgservices/services-7.jpg",
    alt: "1",
    title: "เครื่องบันทึกภาพ",
    decrition: "",
  },
  {
    id: "27",
    img: "/imgservices/services-8.jpg",
    alt: "1",
    title: "ระบบสัญญาณกันขโมย",
    decrition: "",
  },
  {
    id: "28",
    img: "/imgservices/services-9.jpg",
    alt: "1",
    title: "นาฬิกายาม",
    decrition: "",
  },
  {
    id: "29",
    img: "/imgservices/services-10.jpg",
    alt: "1",
    title: "โปรแกรมอ่านป้ายทะเบียนรถยนต์อัตโนมัติ",
    decrition: "",
  },
  {
    id: "31",
    img: "/imgservices/services-11.jpg",
    alt: "1",
    title: "เครื่องบันทึกภาพ",
    decrition: "",
  },
  {
    id: "32",
    img: "/imgservices/services-12.jpg",
    alt: "1",
    title: "กริ่งไร้สายอัจฉริยะ",
    decrition: "",
  },
  {
    id: "33",
    img: "/imgservices/services-13.jpg",
    alt: "1",
    title: "กล้องวงจรปิด",
    decrition: "",
  },
  {
    id: "34",
    img: "/imgservices/services-14.jpg",
    alt: "1",
    title: "ปุ่มกดมือประตูฉุกเฉิน",
    decrition: "",
  },
  {
    id: "35",
    img: "/imgservices/services-19.jpg",
    alt: "1",
    title: "เซ็นเซอร์ตรวจจับการเคลื่อนไหวอัจฉริยะ",
    decrition: "",
  },
  {
    id: "36",
    img: "/imgservices/services-23.jpg",
    alt: "1",
    title: "ระบบรั้วไฟฟ้า",
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
                  {/* <p className="datanumber">{data.id}</p> */}
                  <img src={data.img} alt="1" />
                </div>
                <a
                  target="_blank"
                  href="https://allweb.co.th/2019/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%B2.html"
                >
                  <p className="data-one">{data.title}</p>
                </a>

                <p className="data-two">{data.decrition}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
