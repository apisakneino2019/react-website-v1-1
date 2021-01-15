import React from "react";
import "../../Products.css";
import Footer from "../Footer";
import ScrollToTop from "react-scroll-up";
import { Link } from "react-router-dom";

const datas = [
  {
    id: "49",
    img: "/img-v1/ImgTest.png",
    alt: "",
    title: "",
    decrition: "",
  },

  {
    id: "50",
    img: "/img-v1/ImgTest.png",
    alt: "2",
    title: "",
    decrition: "",
  },
  {
    id: "51",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "52",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "53",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "54",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "55",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "56",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "57",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "58",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "59",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "60",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "61",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "62",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "63",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "64",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "65",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "66",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "67",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "68",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "69",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "",
    decrition: "",
  },
  {
    id: "70",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "     ",
    decrition: "    ",
  },
  {
    id: "71",
    img: "/img-v1/ImgTest.png",
    alt: "1",
    title: "     ",
    decrition: "        ",
  },
  {
    id: "72",
    img: "/img-v1/ImgTest.png",
    alt: "",
    title: "     ",
    decrition: "        ",
  },
];

export default function ProductsFrist() {
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
