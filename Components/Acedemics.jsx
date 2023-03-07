import React from "react";
import Image from "next/image";

const Acedemics = () => {
  return (
    <>
      <div className="container py-8">
        <h1 className="text-2xl font-fira " style={{ fontWeight: "bold" }}>
          Acedemics
        </h1>
        <div class="grid grid-cols-1 gap-10 pt-3 md:grid-cols-2 lg:grid-cols-3 rounded">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded">
            <div class="h-full w-full">
              <img
                class=" object-cover transition-transform duration-500  group-hover:scale-125 group-hover:blur"
                src="/assets/images/SE.jpg"
                alt=""
              />
              <h1 className="absolute text-5xl top-[40%] left-[43%] text-white underline">
                SE
              </h1>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded">
            <div class="h-full w-full">
              <img
                class=" object-cover transition-transform duration-500  group-hover:scale-125 group-hover:blur"
                src="/assets/images/TE.jpg"
                alt=""
              />
              <h1 className="absolute text-5xl top-[40%] left-[43%] text-white underline">
                TE
              </h1>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded">
            <div class="h-full w-full">
              <img
                class=" object-cover transition-transform duration-500 group-hover:scale-125 group-hover:blur"
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
    </>
  );
};

export default Acedemics;
