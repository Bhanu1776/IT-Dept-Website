import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeroCarousel = () => {
  const slides = [
    {
      key: 1,
      image: "/assets/images/IT_staff.jpg",
    },
    {
      key: 2,
      image: "/assets/images/TE_IT.jpg",
    },
    {
      key: 3,
      image: "/assets/images/SE_IT_STAFF.jpg",
    },
    {
      key: 4,
      image: "/assets/images/Staff.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const autoc = () => {
    nextSlide();
  };
  useEffect(() => {
    const intervalId = setTimeout(autoc, 5000);
    return () => clearTimeout(intervalId);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="h-[34rem] w-full relative group">
          <div className="relative w-full h-full duration-500 bg-center bg-cover ">
            <div className="relative w-full h-full ">
              <Image
                className="object-cover object-center bg-center bg-cover h-[34rem] "
                src={`${slides[currentIndex].image}`}
                alt="/"
                layout="fill"
              />
            </div>
            {/* <div className="absolute p-1 px-2 rounded-md bottom-1 bg-black/50 backdrop-blur-sm">
              <h2 className="text-lg font-thin md:text-2xl lg:text-3xl">{`${slides[currentIndex].desc}`}</h2>
            </div> */}
          </div>
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            id="data-carousel-prev"
            type="button"
            class="absolute top-10 left-0 z-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="hidden">Previous</span>
            </span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            id="data-carousel-next"
            type="button"
            class="absolute top-10 right-0 z-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span class="hidden">Next</span>
            </span>
          </button>
          <div className="flex justify-center py-2 top-4">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                {/* <RxDotFilled
                  className={`${
                    currentIndex === slideIndex ? "text-blue-500" : ""
                  }`}
                /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
