import React from "react";
import "../../Products.css";
import Footer from "../Footer";
import TopPage from "../TopPage";
import ScrollToTop from "react-scroll-up";
import { Link } from "react-router-dom";

const datas = [
  {
    id: "20",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "21",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "22",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "23",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "24",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "25",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "26",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "27",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "28",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "29",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
];

export default function ProductsFrist() {
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
              backgroundColor: "#ff0",
              color: "#0000ff",
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
              backgroundColor: "red",
              color: "white",
              padding: "5px 20px",
              margin: "0 3px",

              color: "#0000ff",
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
                  <p className="data-one">{data.title}</p>
                </div>
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
            <img src="/img-960px/up_arrow_round.png" alt="" />
          </ScrollToTop>
        </div>
      </div>
      <Footer />
    </div>
  );
}
