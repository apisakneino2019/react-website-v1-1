import React from "react";
import "../../Products.css";
import Footer from "../Footer";
import ScrollToTop from "react-scroll-up";
import { Link } from "react-router-dom";

const datas = [
  {
    id: "25",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },

  {
    id: "26",
    img: "/img-v1/alarmfire-2.png",
    alt: "2",
    title: "Smoke Detectors with Sounder and Relay Option",
    decrition:
      "System Sensor i3™ sounder and relay smoke detectors apply the guiding principles of installation ease, intelligence, and instant inspection in a series of specialty conventional devices.",
  },
  {
    id: "27",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "28",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "29",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "30",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "31",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "32",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "33",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "34",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "35",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "36",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "37",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "38",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "39",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "40",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "41",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "42",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "43",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "44",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "45",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "46",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "47",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "48",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
];

export default function Productstest() {
  return (
    <div className="area">
      <div className="containers">
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

          <div className="btn-next-page">
            <Link to="/">
              <button className="btn-next-one">หน้าแรก</button>
            </Link>

            <Link to="/products">
              <button className="btn-next-one">หน้า 1/4</button>
            </Link>

            <Link to="/Productstest">
              <button className="btn-next-one">หน้า 2/4</button>
            </Link>

            <Link to="/">
              <button className="btn-next-one">หน้า 3/4</button>
            </Link>

            <Link to="/">
              <button className="btn-next-one">หน้า 4/4</button>
            </Link>
          </div>
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
