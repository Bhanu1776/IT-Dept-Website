// import { Button } from 'antd';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="bg-[#202124] px-3.5  py-3.5 shadow sticky top-0 left-0 z-20 w-full flex flex-wrap items-center justify-between">
      <div className="">
        <span className="self-center text-lg font-normal text-white whitespace-nowrap dark:text-white">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="inline-block mr-3 h-9 "
            alt="Flowbite Logo"
          />
          <span className="hidden md:inline-block">INFORMATION TECHNOLOGY</span>
        </span>
      </div>

      <ul
        className={`mx-auto md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-inherit w-full left-0 md:w-auto top-10 md:py-0 py-4 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${
          open ? 'top-[60px] opacity-100' : 'top-[-400px] opacity-0'
        }`}
      >
        <li className="mx-4 my-6 md:my-0">
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-white duration-500 rounded hover:text-blue-700 md:bg-transparent md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-white duration-500 rounded hover:text-blue-700 md:bg-transparent md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
            aria-current="page"
          >
            Quiz
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-white duration-500 rounded hover:text-blue-700 md:bg-transparent md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
            aria-current="page"
          >
            Videos
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-white duration-500 rounded hover:text-blue-700 md:bg-transparent md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
            aria-current="page"
          >
            Academics
          </a>
        </li>
      </ul>
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="inline-block px-5 py-2 mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg lg:ml-40 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Login
        </button>
        <span
          className="inline-block p-1 text-3xl cursor-pointer md:hidden "
          onClick={handleClick}
        >
          {open ? (
            <AiOutlineClose className="text-white" name="close" />
          ) : (
            <AiOutlineMenu className="text-white" name="menu" />
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
