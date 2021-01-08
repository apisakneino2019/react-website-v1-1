import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import ScrollToTop from "react-scroll-up";
// import Customer from "../Customer";

function Home() {
  return (
    <>
      <ScrollToTop showUnder={160}>
        <span>
          <img src="/img-960px/up_arrow_round.png" alt="" />
        </span>
      </ScrollToTop>

      <HeroSection />
      <Cards />
      {/* <Customer /> */}
      <Footer />
    </>
  );
}

export default Home;
