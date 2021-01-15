import React from "react";
import "../../Products.css";
import Footer from "../Footer";
import ScrollToTop from "react-scroll-up";
import { Link } from "react-router-dom";

const datas = [
  {
    id: "1",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },

  {
    id: "2",
    img: "/img-v1/alarmfire-2.png",
    alt: "2",
    title: "Smoke Detectors with Sounder and Relay Option",
    decrition:
      "System Sensor i3™ sounder and relay smoke detectors apply the guiding principles of installation ease, intelligence, and instant inspection in a series of specialty conventional devices.",
  },
  {
    id: "3",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "4",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "5",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "6",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "7",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "8",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "9",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "10",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "11",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "12",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "13",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "14",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "15",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "16",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "17",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "18",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "19",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "20",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "21",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "22",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "23",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
  {
    id: "24",
    img: "/img-v1/alarmfire-1.png",
    alt: "1",
    title: "Intelligent Addressable Fire Alarm System NFS2-640",
    decrition:
      "TheNFS2-640intelligentFireAlarmControlPanelispartofthe ONYX® Series of Fire Alarm Controls from NOTIFIER.",
  },
];

export default function Products() {
  return (
    <div className="area">
      <div className="containers">
        <Link to="/">
          <button
            className="btn-next-one"
            style={{
              padding: "5px 20px",
              margin: "0 3px",
              backgroundColor: "#ff0",
              color: "#0000ff",
            }}
          >
            หน้าแรก
          </button>
        </Link>
        <Link to="/products">
          <button
            className="btn-next-one"
            style={{
              backgroundColor: "red",
              color: "white",
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
              padding: "5px 20px",
              margin: "0 3px",
              backgroundColor: "#ff0",
              color: "#0000ff",
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
              backgroundColor: "#ff0",
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
              padding: "5px 20px",
              margin: "0 3px",
              backgroundColor: "#ff0",
              color: "#0000ff",
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
