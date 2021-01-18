import React from "react";
import "../../Products.css";
import Footer from "../Footer";
import TopPage from "../TopPage";
import ScrollToTop from "react-scroll-up";
import { Link } from "react-router-dom";

const datas = [
  {
    id: "10",
    img: "/img-v1/Smoke.jpg",
    alt: "1",
    title: "",
    decrition: "",
  },

  {
    id: "11",
    img: "/img-v1/GST-IFP.jpg",
    alt: "2",
    title: "",
    decrition: "",
  },
  {
    id: "12",
    img: "/img-v1/Notifier.jpg",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "13",
    img: "/img-v1/Notifier-NFS.jpg",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "14",
    img: "/img-v1/Pannal.jpg",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "15",
    img: "/img-v1/Sensor.jpg",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "16",
    img: "/img-v1/Buzzer.jpg",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "17",
    img: "/img-v1/CM-FPI.jpg",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "18",
    img: "/img-v1/CM-PBL.jpg",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "19",
    img: "/img-v1/Firealam.jpg",
    alt: "1",
    title: "",
    decrition: "",
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
        <a href="/services" className="pathway">
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
                    <Link to="/services">
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
