import React from 'react';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/HeroCarousel';
import Footer from '../Components/Footer';
import Objectives from '../Components/Objectives';
import Acedemics from '../Components/Acedemics';
import Faculty from '../Components/Faculty';
import LatestEvents from '../Components/LatestEvents';

const homepage = () => (
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

export default homepage;
