import React from "react";
import "../../Products.css";
import Footer from "../Footer";
import ScrollToTop from "react-scroll-up";
import { Link } from "react-router-dom";

const datas = [
  {
    id: "73",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },

  {
    id: "74",
    img: "/img-v1/ImgTest.png",
    alt: "2",
    title: "",
    decrition: "",
  },
  {
    id: "75",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "76",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "77",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "78",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "79",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "80",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "81",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "82",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "83",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "84",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "85",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "86",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "87",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "88",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "89",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "90",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "91",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "92",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "93",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "94",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "95",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "96",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
];

export default function ProductsSecond() {
  return (
    <div className="area">
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
              color: "#0000ff",
              backgroundColor: "red",
              color: "white",
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
