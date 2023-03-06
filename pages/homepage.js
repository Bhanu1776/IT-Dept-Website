import Navbar from "../Components/Navbar";
import Carousel from "../Components/HeroCarousel";
import React from "react";
import Footer from "../Components/Footer";
import Objectives from "../Components/Objectives";
import Acedemics from "../Components/Acedemics";
const homepage = () => {
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

export default homepage;
import LatestEvents from '@/Components/LatestEvents'
import Faculty from '@/Components/Faculty'
import React from 'react'

const homepage = () => {
  return (
    <div>
      <LatestEvents/>
      {/* <Faculty/> */}
    </div>
  )
}

export default homepage
