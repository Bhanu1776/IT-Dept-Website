import Navbar from '../components/navigation/Navbar';
import Carousel from '../components/landing/HeroCarousel';
import Footer from '../components/navigation/Footer';
import Objectives from '../components/landing/Objectives';
import Academics from '../components/landing/Academics';
import Faculty from '../components/landing/Faculty';
import NewEvents from '../components/landing/NewEvents';

const Home = () => (
  <main>
    <Navbar />
    <Carousel />
    <NewEvents />
    <Faculty />
    <Academics />
    <Objectives />
    <Footer />
  </main>
);

export default Home;
