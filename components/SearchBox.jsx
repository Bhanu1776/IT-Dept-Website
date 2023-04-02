import React from 'react';
import { MdOutlineSearch } from 'react-icons/md';

const SearchBox = ({ searchText, setSearchText }) => (
  <div className="arounded-lg bg-white flex justify-between items-center">
    <div className=" flex  bg-slate-200 p-1 rounded-md justify-start items-center">
      <MdOutlineSearch className=" text-slate-400" size={25} />
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className=" focus:outline-none h-7 border-none bg-transparent rounded-md  outline-none "
        type="text"
        placeholder="Search"
      />
    </div>
  </div>
);

export default SearchBox;
