import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import "./HeroSection.css";

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
  // "/img-v1/MixImg02.png",
  // "/img-v1/MixImg03.png",
  // "/img-v1/MixImg04.png",
  // "/img-v1/MixImg05.png",
  // "/img-v1/MixImg06.png",
  // "/img-v1/MixImg07.png",
  "/img-v1/MixImg08.png",
  "/img-v1/MixImg09.png",
  "/img-v1/MixImg10.png",
  "/img-v1/MixImgAd.png",
  "/img-v1/MixImgAd.png",
  "/img-v1/MixImgAd.png",
];

function HeroSection() {
  let sliceimg = images.map(function (data, i) {
    return (
      <div style={{ margin: "0 10px" }}>
        <img src={data} alt="" width="100%" height="auto" />
      </div>
    );
  });
  return (
    // <div className="area">
    <div className="hero-container">
      <video autoPlay muted loop id="myVideo">
        <source src="/video/Yellowfire.mp4" type="video/mp4" />
      </video>

      <div className="img-home">
        {/* <img src="/img-960px/firet.jpg" alt="" width="615" height="auto" /> */}
        {/* <h1>ไฟไหม้สถานที่ต่างๆ เราช่วยป้องกันได้ </h1> */}
        <p className="dataText">
          "ระบบแจ้งเตือนเหตุเพลิงไหม้ คอยรักษาความปลอดภัย "
        </p>
        <p className="dataText">" บ้าน โรงเรียน โรงแรม โชว์รูม โรงงาน โกดัง"</p>

        <div className="hero-img-container">
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
            autoPlaySpeed={3000}
            autoPlay={true}
            infinite
          >
            {sliceimg}
          </Carousel>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default HeroSection;
