import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import ScrollToTop from "react-scroll-up";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  {
    img: "/imgservices/services-1.jpg",
    title: "ระบบควบคุมอัจฉริยะ",
  },
  {
    img: "/imgservices/services-2.jpg",
    title: "ระบบเสียงสำหรับห้องประชุม",
  },
  {
    img: "/imgservices/services-3.jpg",
    title: "โปรแกรมสำเร็จรูปพร้อมใช้งาน",
  },
  {
    img: "/imgservices/services-4.jpg",
    title: "ไมโครโฟนไร้สาย",
  },
  {
    img: "/imgservices/services-5.jpg",
    title: "กล้องสำหรับการประชุม",
  },
  {
    img: "/imgservices/services-6.jpg",
    title: "อุปกรณ์ตรวจจับควัน",
  },
  {
    img: "/imgservices/services-7.jpg",
    title: "เครื่องบันทึกภาพ",
  },
  {
    img: "/imgservices/services-8.jpg",
    title: "ระบบสัญญาณกันขโมย",
  },
  {
    img: "/imgservices/services-9.jpg",
    title: "นาฬิกายาม",
  },
  {
    img: "/imgservices/services-10.jpg",
    title: "โปรแกรมอ่านป้ายทะเบียนรถยนต์อัตโนมัติ",
  },
  {
    img: "/imgservices/services-11.jpg",
    title: "เครื่องบันทึกภาพ",
  },
  {
    img: "/imgservices/services-12.jpg",
    title: "กริ่งไร้สายอัจฉริยะ",
  },
  {
    img: "/imgservices/services-13.jpg",
    title: "กล้องวงจรปิด",
  },
  {
    img: "/imgservices/services-14.jpg",
    title: "ปุ่มกดมือประตูฉุกเฉิน",
  },
  {
    img: "/imgservices/services-15.jpg",
    title: "กล้องวงจรปิด",
  },
  {
    img: "/imgservices/services-16.jpg",
    title: "เครืองบันทึกภาพ",
  },
  {
    img: "/imgservices/services-17.jpg",
    title: "กล้องวงจรปิด",
  },
  {
    img: "/imgservices/services-18.jpg",
    title: "กล้องวงจรปิด",
  },
  {
    img: "/imgservices/services-19.jpg",
    title: "เซ็นเซอร์ตรวจจับการเคลื่อนไหวอัจฉริยะ",
  },
  {
    img: "/imgservices/services-20.jpg",
    title: "กล้องวงจรปิด",
  },
  {
    img: "/imgservices/services-21.jpg",
    title: "เครื่องสแกนนิ้วมือ",
  },
  {
    img: "/imgservices/services-22.jpg",
    title: "ระบบตู้สาขาโทรศัพท์",
  },
  {
    img: "/imgservices/services-23.jpg",
    title: "ระบบรั้วไฟฟ้า",
  },
  {
    img: "/imgservices/services-24.jpg",
    title: "กริ่งหน้าบ้าน",
  },
  {
    img: "/imgservices/services-25.jpg",
    title: "เครื่องบันทึกภาพ",
  },
  {
    img: "/imgservices/services-26.jpg",
    title: "กล้องวงจรปิด",
  },
  {
    img: "/imgservices/services-27.jpg",
    title: "ป้ายไฟวิ่ง",
  },
  {
    img: "/imgservices/services-28.jpg",
    title: "อุปกรตรวจจับโลหะ",
  },
  {
    img: "/imgservices/services-29.jpg",
    title: "Digital Signage สำหรับแสดงสื่อประชาสัมพันธ์",
  },
  {
    img: "/imgservices/services-30.jpg",
    title: "ระบบควบคุมการเปิดปิดไฟฟ้า",
  },
  {
    img: "/imgservices/services-31.jpg",
    title: "ระบบแจ้งเตือน Real Time ผ่าน Line",
  },
  {
    img: "/imgservices/services-32.jpg",
    title: "ชุดกล้องวงจรปิด",
  },
  {
    img: "/imgservices/services-33.jpg",
    title: "เครื่องสแกนลายนิ้วมือ",
  },
  {
    img: "/imgservices/services-34.jpg",
    title: "ระบบลานจอดรถ",
  },
  {
    img: "/imgservices/services-35.jpg",
    title: "อุแกรณ์ที่ใช้ติดตามตำแหน่งด้วยดาวเทียม GPS",
  },
  {
    img: "/imgservices/services-36.jpg",
    title: "เครื่องทาบบัตรคีย์การ์ด",
  },
  {
    img: "/imgservices/services-37.jpg",
    title: "ประตูอัตโนมัติ",
  },
  {
    img: "/imgservices/services-38.jpg",
    title: "กล้องวงจรปิด",
  },
  {
    img: "/imgservices/services-39.jpg",
    title: "กล้องวงจรปิด",
  },
  {
    img: "/imgservices/services-40.jpg",
    title: "กล้องติดรถยนต์",
  },
];
export default function Services() {
  let sliceimg = images.map(function (data, i) {
    return (
      <div style={{ margin: "0 10px" }}>
        <img
          src={data.img}
          alt="ServicesDataAllweb"
          width="100%"
          height="auto"
        />
        <Link to="/AboutUs">
          <p style={{ textAlign: "center" }}>{data.title}</p>
        </Link>
      </div>
    );
  });
  return (
    <>
      <div className="hero-img-container">
        <div className="hero-containers" style={{ padding: "50px 50px" }}>
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
            autoPlaySpeed={2000}
            autoPlay={true}
            infinite
          >
            {sliceimg}
          </Carousel>
        </div>
      </div>
      <ScrollToTop showUnder={160}>
        <span>
          <img src="/img-960px/up_arrow_round.png" alt="" />
        </span>
      </ScrollToTop>

      <Footer />
    </>
  );
}
