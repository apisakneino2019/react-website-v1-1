import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Customer from "../Customer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Customer />
      <Footer />
    </>
  );
}

export default Home;
