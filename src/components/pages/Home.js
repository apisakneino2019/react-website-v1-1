import React from "react";
import "../../App.css";
import Cards from "../Cards";
import TopTitle from "../TopTitle";
import HeroSection from "../HeroSection";

import Footer from "../Footer";
import ScrollToTop from "react-scroll-up";

function Home() {
  return (
    <>
      <ScrollToTop showUnder={160}>
        <span>
          <img src="/img-960px/up_arrow_round.png" alt="UpArrow" />
        </span>
      </ScrollToTop>
      <TopTitle />
      <HeroSection />
      <Cards />

      <Footer />
    </>
  );
}

export default Home;
