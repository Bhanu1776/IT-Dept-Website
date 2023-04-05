import Image from 'next/image';
import React from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import profilePic from '../../public/assets/images/TE_IT-01.jpeg';

const EditProfile = () => (
  <>
    {/** Image */}
    <div className="p-4  flex justify-start items-center ">
      <div className=" relative min-h-[8rem] min-w-[8rem] flex justify-center items-center border-2 border-blue-400 rounded-full">
        <Image
          className=" object-cover object-center rounded-full "
          src={profilePic}
          alt="/"
          width={120}
          height={120}
        />
        <div class=" cursor-pointer absolute p-2 bg-blue-500 hover:bg-blue-300 rounded-full bottom-0 right-2 flex duration-150 ">
          <MdOutlineEdit className=" text-white" size={20} />
        </div>
      </div>
    </div>
    {/** Name */}
    <div className="flex flex-col gap-4 justify-center items-center">
      {/** FirstName */}
      <div className="flex flex-col justify-between items-start">
        <div>
          <h1 className=" text-gray-500">First Name</h1>
        </div>
        <div>
          <input
            className=" rounded-md p-1 bg-blue-50 border-gray-300"
            type="text"
            readOnly
            value="Mrunal"
          />
        </div>
      </div>
      {/** lastName */}
      <div className=" flex flex-col justify-between items-start">
        <div>
          <h1 className=" text-gray-500">Last Name</h1>
        </div>
        <div>
          <input
            className=" rounded-md p-1 bg-blue-50 border-gray-300"
            type="text"
            readOnly
            value="Vaidya"
          />
        </div>
      </div>
    </div>
  </>
);

export default EditProfile;
