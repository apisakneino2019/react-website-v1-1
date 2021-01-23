import React from "react";
import "../../Products.css";
import Footer from "../Footer";
import TopPage from "../TopPage";
import ScrollToTop from "react-scroll-up";
import { Link } from "react-router-dom";

const datas = [
  {
    id: "1",
    img: "/img-v1/Honeywell-XH.png",
    alt: "อุปกรณ์ตรวจจับความร้อน",
    title: "อุปกรณ์ตรวจจับความร้อน Honeywell X-Series XH100",
    decrition:
      "Heat Alarm อุปกรณ์ตรวจจับความร้อน  อุปกรณ์ตรวจจับความร้อน แบบไม่ต้องเดินสายนําสัญญาณ และ ไม่ต้องต่อกับตู้ควบคุมระบบใด ๆ ",
  },

  {
    id: "2",
    img: "/img-v1/Honeywell-XS.png",
    alt: "อุปกรณ์ตรวจจับควัน",
    title: "อุปกรณ์ตรวจจับควัน Honeywell X-Series XS100",
    decrition:
      "Optical Smoke Alarm อุปกรณ์ตรวจจับควัน    อุปกรณ์ตรวจจับควัน แบบไม่ต้องเดินสายนําสัญญาณ และ ไม่ต้องต่อกับตู้ควบคุมระบบใด ๆ ",
  },
  {
    id: "3",
    img: "/img-v1/Honeywell-XST.png",
    alt: "อุปกรณ์ตรวจจับควัน",
    title: "อุปกรณ์ตรวจจับควัน Honeywell X-Series XS100T",
    decrition:
      "Optical Thermal Smoke Alarm อุปกรณ์ตรวจจับควัน    อุปกรณ์ตรวจจับควัน แบบไม่ต้องเดินสายนําสัญญาณ และ ไม่ต้องต่อกับตู้ควบคุมระบบใด ๆ อุปกรณ์ตรวจจับควันชนิดใช้ลำแสงในการตรวจจับ",
  },
  {
    id: "4",
    img: "/img-v1/DC-Smoke.png",
    alt: "อุปกรณ์แจ้งเหตุเพลิงไหม้ด้วยมือ",
    title: "อุปกรณ์แจ้งเหตุเพลิงไหม้ด้วยมือ  ",
    decrition:
      "รุ่น DC-9204 ติดตั้งง่าย ใช้งานสะดวก การสื่อสารแบบดิจิตอลยุคใหม่",
  },
  {
    id: "5",
    img: "/img-v1/C-Smoke.png",
    alt: "เครื่องตรวจจับควันไฟฟ้า",
    title: "เครื่องตรวจจับควันไฟฟ้า ",
    decrition: "รุ่น C-9102 เครื่องตรวจจับควันโฟโตอิเล็กทรอนิกธรรมดา",
  },
  {
    id: "6",
    img: "/img-v1/I-Msmoke.png",
    alt: "อุปกรณ์โมดูลระบุตำแหน่งภายใน",
    title: "อุปกรณ์โมดูลระบุตำแหน่งภายใน",
    decrition:
      " รุ่น I-M9300 เหมาะสำหรับการตรวจสอบสวิทช์คอนแท็กของอุปกรณ์ระยะไกลหรือการเชื่อมต่อเครื่องตรวจจับแบบเดิม",
  },
  {
    id: "7",
    img: "/img-v1/Notifier-NBG.png",
    alt: "NBG-12",
    title: "NBG-12 Manual dual Action",
    decrition: "คู่มือการดำเนินการคู่ NBG-12 ",
  },
  {
    id: "8",
    img: "/img-v1/Notifier-NFS.png",
    alt: "NFS2-640",
    title: "ระบบแจ้งเพลิงไหม้ Notifier NFS2-640",
    decrition: "ระบบแจ้งเหตุเพลิงไหม่ Notifier NFS2-640",
  },
  {
    id: "9",
    img: "/img-v1/Notifier-SD.png",
    alt: "SmokeRemoteLED",
    title: "เครื่องตรวจจับควันไฟ รุ่น SD-651",
    decrition: "SD-651_v3 Smoke Remote LED",
  },
];

export default function Products() {
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
        <ul class="pagination">
          <li>
            <a href="#">«</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <Link to="/Productstest">2</Link>
          </li>
          <li>
            <a href="#">»</a>
          </li>
        </ul>

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

          <div className="btn-next-page"></div>

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
