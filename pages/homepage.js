import Navbar from "../Components/Navbar";
import Carousel from "../Components/HeroCarousel";
import React from "react";
import Footer from "../Components/Footer";
import Objectives from "../Components/Objectives";
import Acedemics from "../Components/Acedemics";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Acedemics />
      <Objectives />
      <Footer />
    </>
  );
};

export default Homepage;
