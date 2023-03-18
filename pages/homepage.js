import React from 'react';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/HeroCarousel';
import Footer from '../Components/Footer';
import Objectives from '../Components/Objectives';
import Acedemics from '../Components/Acedemics';
import Faculty from '../Components/Faculty';
// eslint-disable-next-line import/no-unresolved
import NewEvents from '@/Components/NewEvents';

const homepage = () => (
  <>
    <Navbar />
    <Carousel />
    <NewEvents />
    <Faculty />
    <Acedemics />
    <Objectives />
    <Footer />
  </>
);

export default homepage;
