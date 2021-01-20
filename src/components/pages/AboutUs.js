import React from "react";
import "../../App.css";
import Footer from "../Footer";

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
      <div className="hero-img-container">
        <img
          className="DataContact"
          src="/img-v1/DataContact.png"
          alt="DataContact"
        />
        <iframe
          className="DataContact"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3136.904378559478!2d102.057141!3d14.957799000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x493fec817647dd10!2z4LiB4Lil4LmJ4Lit4LiH4Lin4LiH4LiI4Lij4Lib4Li04LiU4LmC4LiE4Lij4Liy4LiKIENDVFYgSVAgQ2FtZXJhIOC4quC4seC4jeC4jeC4suC4k-C4geC4seC4meC4guC5guC4oeC4oiDguKrguYHguIHguJnguJnguLTguYnguKfguKHguLfguK0g4LiE4Li14Lii4LmM4LiB4Liy4Lij4LmM4LiUIOC5hOC4oeC5ieC4geC4seC5ieC4meC4o-C4luC4ouC4meC4leC5jA!5e1!3m2!1sen!2sth!4v1608796503566!5m2!1sen!2sth"
          width={650}
          height={450}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
        <div className="DataContact">
          <img className="Img" src="/images-notifier/map.jpg" alt="map" />
        </div>
      </div>
      <ScrollToTop showUnder={160}>
        <span>
          <img src="/img-960px/up_arrow_round.png" alt="" />
        </span>
      </ScrollToTop>

      <Footer />
    </div>
  );
}
