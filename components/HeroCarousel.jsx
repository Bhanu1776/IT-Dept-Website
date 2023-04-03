import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeroCarousel = () => (
  <div className="flex flex-col items-center justify-center ">
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showStatus={false}
      showThumbs={false}
      useKeyboardArrows
      swipeable
    >
      <div>
        <Image
          src="/assets/images/IT_staff-01.jpeg"
          height={700}
          width={1550}
        />
      </div>
      <div>
        <Image
          src="/assets/images/SE_IT_STAFF-01.jpeg"
          height={700}
          width={1550}
        />
      </div>
      <div>
        <Image src="/assets/images/T_staff-01.jpeg" height={700} width={1550} />
      </div>
      <div>
        <Image src="/assets/images/TE_IT-01.jpeg" height={700} width={1550} />
      </div>
    </Carousel>
  </div>
);

export default HeroCarousel;
