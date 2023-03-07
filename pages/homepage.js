import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/HeroCarousel';
import Footer from '../components/Footer';
import Objectives from '../components/Objectives';
import Acedemics from '../components/Acedemics';
import Faculty from '../components/Faculty';
import LatestEvents from '../components/LatestEvents';

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

export default homepage;