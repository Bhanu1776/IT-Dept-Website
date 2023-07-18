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
    >
      <div>
        <Image
          src="/assets/images/carousel/IT_staff.jpeg"
          height={700}
          width={1550}
        />
      </div>
      <div>
        <Image
          src="/assets/images/carousel/SE_IT_STAFF.jpeg"
          height={700}
          width={1550}
        />
      </div>
      <div>
        <Image
          src="/assets/images/carousel/T_staff.jpeg"
          height={700}
          width={1550}
        />
      </div>
      <div>
        <Image
          src="/assets/images/carousel/TE_IT.jpeg"
          height={700}
          width={1550}
        />
      </div>
    </Carousel>
  </div>
);

export default HeroCarousel;
