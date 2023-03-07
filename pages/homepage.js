import Navbar from "../Components/Navbar";
import Carousel from "../Components/HeroCarousel";
import React from "react";
import Footer from "../Components/Footer";
import Objectives from "../Components/Objectives";
import Acedemics from "../Components/Acedemics";
import Faculty from "../Components/Faculty";
import LatestEvents from "../Components/LatestEvents";
const homepage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <LatestEvents />
      <Faculty />
      <Acedemics />
      <Objectives />
      <Footer />
    </>
  );
};

export default homepage;