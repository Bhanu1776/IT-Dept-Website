import React from 'react';
import LatestEvents from '../Components/LatestEvents';
import Faculty from '../Components/Faculty';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/HeroCarousel';
import Footer from '../Components/Footer';
import Objectives from '../Components/Objectives';
import Acedemics from '../Components/Acedemics';

const Homepage = () => (
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

export default Homepage;
