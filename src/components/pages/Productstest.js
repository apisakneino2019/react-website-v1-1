import React from "react";
import "../../Products.css";
import Footer from "../Footer";
import ScrollToTop from "react-scroll-up";
import { Link } from "react-router-dom";

const datas = [
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
    alt: "2",
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
  {
    id: "30",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "31",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "32",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "33",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "34",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "35",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "36",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "37",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "38",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "39",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "40",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "41",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "42",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "43",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "44",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "45",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "46",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "47",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "48",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
];

export default function Productstest() {
  return (
    <div className="area">
      <div className="containers">
        <Link to="/">
          <button
            className="btn-next-one"
            style={{
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
              <div className="img">
                <p className="datanumber">{data.id}</p>
                <img src={data.img} alt="1" />
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
