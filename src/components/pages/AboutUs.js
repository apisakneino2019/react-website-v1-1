import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ScrollToTop from "react-scroll-up";
// import { Link } from "react-router-dom";

export default function Aboutus() {
  return (
    <div>
      <ScrollToTop showUnder={160}>
        <span>
          <img src="/img-960px/up_arrow_round.png" alt="" />
        </span>
      </ScrollToTop>
      <Footer />
    </div>
  );
}
