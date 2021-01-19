import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ContactUs from "../ContactUs";
import ScrollToTop from "react-scroll-up";
import TopAbout from "../TopAbout";

export default function AboutUs() {
  return (
    <div className="area">
      <TopAbout />
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
          ติดต่อเรา
        </a>
      </div>
      <div className="container">
        <img src="/img-v1/DataContact.png" alt="DataContact" />
      </div>
      <ScrollToTop showUnder={160}>
        <span>
          <img src="/img-960px/up_arrow_round.png" alt="" />
        </span>
      </ScrollToTop>
      <ContactUs />
      <Footer />
    </div>
  );
}
