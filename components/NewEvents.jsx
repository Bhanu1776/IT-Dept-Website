import React from 'react';

const NewEvents = () => (
  <div className="h-[100vh] 2xl:mx-[200px] xl:mx-[100px] my-10">
    <h1 className="mt-10 text-4xl text-center font-fira text-bold">
      Latest Events
    </h1>
    <div className="grid grid-cols-2 pt-5 2xl:gap-0 xl:gap-5">
      <div className="relative flex flex-wrap 2xl:w-[700px] px-10 py-32 mb-4 bg-gray-800 h-[820px] rounded-xl">
        <img
          alt="gallery"
          className="absolute inset-0 block object-cover object-center w-full h-full opacity-25 rounded-xl"
          src="/Assets/images/TE_IT.jpg"
        />
        <div className="relative z-10 w-full text-left top-[95%]">
          <h2 className="mb-2 text-2xl font-medium text-white title-font">
            Event Name
          </h2>
          <p className="leading-relaxed text-white">
            It is a long established fact that a reader will be distracted by
            the readable content
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 2xl:gap-20 xl:gap-5 h-[800px]">
        <div className="shadow-xl h-[370px] rounded-xl 2xl:w-[400px]">
          <img
            className="h-[60%] w-[100vw] rounded-tl-xl rounded-tr-xl"
            src="/Assets/images/TE_IT.jpg"
            alt=""
          />
          <div className="mx-2 my-2">
            <h1 className="text-xl font-semibold">Event Name</h1>
            <h1 className="text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content{' '}
            </h1>
          </div>
        </div>
        <div className="shadow-xl h-[370px] rounded-xl 2xl:w-[400px]">
          <img
            className="h-[60%] w-[100vw] rounded-tl-xl rounded-tr-xl"
            src="/Assets/images/TE_IT.jpg"
            alt=""
          />
          <div className="mx-2 my-2">
            <h1 className="text-xl font-semibold">Event Name</h1>
            <h1 className="text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content{' '}
            </h1>
          </div>
        </div>
        <div className="shadow-xl h-[370px] rounded-xl 2xl:w-[400px]">
          <img
            className="h-[60%] w-[100vw] rounded-tl-xl rounded-tr-xl"
            src="/Assets/images/TE_IT.jpg"
            alt=""
          />
          <div className="mx-2 my-2">
            <h1 className="text-xl font-semibold">Event Name</h1>
            <h1 className="text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content{' '}
            </h1>
          </div>
        </div>
        <div className="shadow-xl h-[370px] rounded-xl 2xl:w-[400px]">
          <img
            className="h-[60%] w-[100vw] rounded-tl-xl rounded-tr-xl"
            src="/Assets/images/TE_IT.jpg"
            alt=""
          />
          <div className="mx-2 my-2">
            <h1 className="text-xl font-semibold">Event Name</h1>
            <h1 className="text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content{' '}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewEvents;
