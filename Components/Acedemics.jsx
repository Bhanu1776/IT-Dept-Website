import React from 'react';
import Image from 'next/image';

const Acedemics = () => (
  <div className="container py-8">
    <h1 className="text-2xl font-fira " style={{ fontWeight: 'bold' }}>
      Acedemics
    </h1>
    <div className="grid grid-cols-1 gap-10 pt-3 rounded md:grid-cols-2 lg:grid-cols-3">
      <div className="relative items-center justify-center overflow-hidden transition-shadow rounded cursor-pointer group hover:shadow-xl hover:shadow-black/30">
        <div className="w-full h-full">
          <img
            className="object-cover transition-transform duration-500 group-hover:scale-125 group-hover:blur"
            src="/assets/images/SE.jpg"
            alt=""
          />
          <h1 className="absolute text-5xl top-[40%] left-[43%] text-white underline">
            SE
          </h1>
        </div>
      </div>
      <div className="relative items-center justify-center overflow-hidden transition-shadow rounded cursor-pointer group hover:shadow-xl hover:shadow-black/30">
        <div className="w-full h-full">
          <img
            className="object-cover transition-transform duration-500 group-hover:scale-125 group-hover:blur"
            src="/assets/images/TE.jpg"
            alt=""
          />
          <h1 className="absolute text-5xl top-[40%] left-[43%] text-white underline">
            TE
          </h1>
        </div>
      </div>
      <div className="relative items-center justify-center overflow-hidden transition-shadow rounded cursor-pointer group hover:shadow-xl hover:shadow-black/30">
        <div className="w-full h-full">
          <img
            className="object-cover transition-transform duration-500 group-hover:scale-125 group-hover:blur"
            src="/assets/images/BE.jpg"
            alt=""
          />
          <h1 className="absolute text-5xl top-[40%] left-[43%] text-white underline">
            BE
          </h1>
        </div>
      </div>
    </div>
  </div>
);

export default Acedemics;
