import Image from 'next/image';
import React from 'react';
import { MdOutlineSearch } from 'react-icons/md';

const SearchBox = ({ isMobile, searchtext, setSearchText }) => (
  <div className=" w-full rounded-lg bg-white px-4 py-2 flex justify-between items-center">
    <div className=" flex bg-slate-200 gap-1 p-2 rounded-md justify-start items-center">
      <MdOutlineSearch className=" text-slate-400" size={25} />
      <input
        value={searchtext}
        onChange={(e) => setSearchText(e.target.value)}
        className=" focus:outline-none h-7 border-none bg-transparent rounded-md  outline-none "
        type="text"
        placeholder="Search"
      />
    </div>
    {isMobile ? null : (
      <div className="flex flex-col justify-center items-center">
        <Image
          className=" rounded-full"
          src="/../public/assets/images/profilePic.png"
          alt="/"
          width={50}
          height={50}
        />
      </div>
    )}
  </div>
);

export default SearchBox;
