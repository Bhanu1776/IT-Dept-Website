import React from "react";

const Footer = () => {
  return (
    <>
      <div className="max-w-[100%] mt-[100px] 2xl:h-[410px] xl:h-[280px] bg-[#202124] text-white">
        <div className="max-w-[1500px] mx-auto relative top-[30px]">
          <div className="grid 2xl:grid-cols-3 2xl:gap-5 xl:grid-cols-3 xl:mx-16 2xl:mx-0 xl:gap-5">
            <div className="">
              <h1 className="font-bold 2xl:text-3xl xl:text-2xl 2xl:m-0">
                Information Technology
              </h1>
              <div className="2xl:text-lg 2xl:pt-[20px] 2xl:leading-[35px] grid 2xl:grid-cols-1 2xl:m-0">
                <div>
                  To nurture the joy of excellence in the world of Information
                  Technology.
                </div>
              </div>
            </div>
            <div className="2xl:pt-0 2xl:m-0">
              <h1 className="font-bold 2xl:text-3xl xl:text-2xl">Mission</h1>
              <div className="2xl:text-lg 2xl:pt-[20px] 2xl:leading-[35px] grid 2xl:grid-cols-1">
                <div>
                  To develop the critical thinking ability of students by
                  promoting interactive learning.
                </div>
                <div className="pt-4">
                  To encourage students to pursue higher studies and provide
                  them awareness on various career
                </div>
              </div>
            </div>
            <div className="2xl:pt-0 2xl:m-0">
              <h1 className="text-xl font-bold">Hosting</h1>
              <div className="text-ps 2xl:pt-[20px] 2xl:leading-[45px] grid 2xl:grid-cols-1">
                <div>Airbnb your home</div>
                <div>AirCover for Hosts</div>
                <div>Explore hosting resources</div>
                <div>Visit our community forum</div>
                <div>How to host responsibly</div>
              </div>
            </div>
          </div>

          <div className="max-w-[1500px] border-solid border-2 border-gray-300 mt-[50px] xl:mx-16 2xl:mx-0"></div>

          <div className="grid 2xl:grid-cols-2">
            <div className="pt-2 2xl:text-2xl xl:text-xl 2xl:text-left 2xl:m-0 xl:mx-16">
              2023 Information Technology Department Xie
            </div>
            <div className="grid grid-cols-3 mt-3">
              <div className="flex pl-[160px] relative 2xl:right-0 2xl:pt-0">
                <div className="text-xl">
                  <ion-icon name="logo-twitter"></ion-icon>
                </div>
                <div className="pl-3 text-xl">
                  <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <div className="pl-3 text-xl">
                  <ion-icon name="logo-instagram"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
