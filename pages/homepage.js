import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/HeroCarousel';
import Footer from '../components/Footer';
import Objectives from '../components/Objectives';
import Academics from '../components/Academics';
import Faculty from '../components/Faculty';

const homepage = () => (
  <>
    <Navbar />
    <Carousel />
    <Faculty />
    <Academics />
    <Objectives />
    <Footer />
  </>
);

export default homepage;
