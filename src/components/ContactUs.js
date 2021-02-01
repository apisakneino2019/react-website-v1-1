import React from "react";
import "../Products.css";
import "../App.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const datas = [
  {
    id: "24",
    img: "/imgservices/NOHMI-FAPN202-R-5L.jpg",
    alt: "NOHMI-FAPN202-R-5L",
    title: "title1",
    decrition: "",
  },
  {
    id: "25",
    img: "/imgservices/notifier-SD-651Smoke-Detectors.jpg",
    alt: "notifier-SD-651Smoke-Detectors",
    title: "title2",
    decrition: "",
  },
  {
    id: "26",
    img: "/imgservices/Heat_Detectors_5600_Series.jpg",
    alt: "Heat_Detectors_5600_Series",
    title: "title3",
    decrition: "",
  },
  {
    id: "27",
    img: "/imgservices/Alarm_Bell.jpg",
    alt: "Alarm_Bell",
    title: "title4",
    decrition: "",
  },
  {
    id: "28",
    img: "/imgservices/Fire_Alarm_Pull_Stations_NBG-12-_Series.jpg",
    alt: "Fire_Alarm_Pull_Stations_NBG-12-_Series",
    title: "title5",
    decrition: "",
  },
  {
    id: "29",
    img: "/imgservices/Monitor_Modules_with_FlashScan.jpg",
    alt: "Monitor_Modules_with_FlashScan",
    title: "title6",
    decrition: "",
  },
];

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <div className="area">
      <div className="containers">
        <div className="item-containers">
          {datas.map(function (data, i) {
            return (
              <div>
                <div className="img">
                  <img src={data.img} />
                </div>
                <Link to="/Products">
                  <p className="data-one">{t("ser." + data.title)}</p>
                </Link>

                <p className="data-two">{data.decrition}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
