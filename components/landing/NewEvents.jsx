import React from 'react';
import { Badge } from 'antd';
import NewEventsCards from './NewEventCards';

const NewEvents = () => (
  <div className="h-screen">
    <div className="text-center text-3xl font-bold">
      <h1>Latest Events</h1>
    </div>

    <div className="h-[80%] mt-5 md:mx-10 xxsm:mx-5 flex md:flex-row xxsm:flex-col gap-5">
      {/* Section 1 */}
      <div className="relative p-5 md:w-[45%] bg-gray-800 rounded-lg shadow-xl">
        <img
          className="absolute inset-0 h-[100%] block object-cover object-center opacity-50 rounded-lg w-[100%]"
          src="/assets/images/carousel/SE_IT_STAFF.jpg"
          alt=""
        />
        <div className="relative z-10 w-full text-left md:top-[80%]">
          <h2 className="mb-2 md:text-2xl font-medium text-white title-font">
            Event Name
          </h2>
          <p className="leading-relaxed md:text-[15px] xxsm:text-[10px] text-white">
            It is a long established fact that a reader will be distracted by
            the readable content
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 xxsm:grid-cols-1 gap-5 md:w-[55%]">
        <NewEventsCards
          cardname="card1"
          cardimg="/assets/images/carousel/SE_IT_STAFF.jpg"
          eventname="Event Name"
        />
        <NewEventsCards
          cardname="card2"
          cardimg="/assets/images/carousel/SE_IT_STAFF.jpg"
          eventname="Event Name"
        />
        <NewEventsCards
          cardname="card3"
          cardimg="/assets/images/carousel/SE_IT_STAFF.jpg"
          eventname="Event Name"
        />
        <NewEventsCards
          cardname="card4"
          cardimg="/assets/images/carousel/SE_IT_STAFF.jpg"
          eventname="Event Name"
        />
      </div>
    </div>
  </div>
);

export default NewEvents;
