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
      <div className="area">
        {" "}
        <ScrollToTop showUnder={160}>
          <span>
            <img src="/img-960px/up_arrow_round.png" alt="up_arrow_round" />
          </span>
        </ScrollToTop>
      </div>
      <TopTitle />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
