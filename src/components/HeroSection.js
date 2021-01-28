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
  "/images-all/fireinhome.png",
  "/images-all/allballfirealam.png",
  "/images-all/installfirealam.png",
  "/images-all/installfire.png",
  "/images-all/FireExtinguishers.png",
];
const datas = [
  {
    title1:
      "บริการติดตั้งครบวงจร แผงควบคุมสัญญาณเตือนไฟไหม้, เครื่องแจ้งเตือนไฟไหม้, อุปกรณ์แจ้งเตือนเครื่องตรวจจับความร้อนและควัน, คู่มือการแจ้งเหตุเพลิงไหม้สถานีโมดูลสัญญาณเตือนไฟไหม้",
    title: "  บ้าน ,โรงเรียน ,โรงแรม ,โชว์รูม ,โรงงาน ,โกดัง ",
    decrition:
      "เราเชี่ยวชาญและชำนาญการ ด้านงานระบบแจ้งเหตูเพลิงไหม้และมุ่งมั่น เพื่อบริการที่ดีที่สุด Fire Alarm System",
  },
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
    <div className="area">
      <div className="hero-container">
        <div className="img-home">
          <div className="hero-img-container">
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
          <div className="hero-img-container">
            {datas.map(function (data, i) {
              return (
                <div>
                  <p className="data__Text">{data.title1}</p>
                  <p className="dataText">{data.title}</p>
                  <p className="dataText">{data.decrition}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
