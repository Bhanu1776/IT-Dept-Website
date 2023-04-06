import React from 'react';
import Navbar from '../components/Navbar';
// import Carousel from '../components/HeroCarousel';
// import Footer from '../components/Footer';
import Objectives from '../components/Objectives';
import Academics from '../components/Academics';
import Faculty from '../components/Faculty';
import NewEvents from '@/components/NewEvents';

const homepage = () => (
  <>
    <Navbar />
    {/* <Carousel /> */}
    <NewEvents/>
    <Faculty />
    <Academics />
    <Objectives />
    {/* <Footer /> */}
  </>
);
export default homepage;
