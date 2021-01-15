import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ScrollToTop from "react-scroll-up";
// import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div>
      <div className="container">
        <img src="/img-v1/DataContact.png" alt="DataContact" />
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
