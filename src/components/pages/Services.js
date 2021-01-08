import React from "react";
import "../../App.css";
import Footer from "../Footer";

import ScrollToTop from "react-scroll-up";
export default function Services() {
  return (
    <>
      <ScrollToTop showUnder={160}>
        <span>
          <img src="/img-960px/up_arrow_round.png" alt="" />
        </span>
      </ScrollToTop>

      <Footer />
    </>
  );
}
