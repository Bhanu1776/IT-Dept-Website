import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const hidden = () => {
    if (typeof window !== 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  };
  const unset = () => {
    document.body.style.overflow = 'unset';
  };

  const handleClick = () => {
    setOpen(!open);
    open ? unset() : hidden();
  };
  return (
    <nav className="bg-[#202124] px-7  py-3.5 shadow sticky top-0 left-0 z-20 w-full flex flex-wrap items-center justify-between">
      <div className="">
        <span className="self-center text-lg font-normal text-white whitespace-nowrap dark:text-white">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="inline-block mr-3 h-9 "
            alt="Flowbite Logo"
          />
          {/* <span className="hidden md:inline-block">INFORMATION TECHNOLOGY</span> */}
        </span>
      </div>
      <div className="pl-10">
        <ul
          className={`  mx-auto md:flex md:items-center z-[-1] md:z-auto md:static bg-[#202124] absolute  w-full left-0 md:w-auto  md:py-0 py-4 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${
            open ? 'top-[60px] opacity-100' : 'top-[-400px] opacity-0'
          }`}
        >
          <li className="my-5 ml-8 md:my-0">
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white duration-500 rounded hover:text-blue-700 md:bg-transparent md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li className="my-5 ml-8 md:my-0">
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white duration-500 rounded hover:text-blue-700 md:bg-transparent md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              Quiz
            </a>
          </li>
          <li className="my-5 ml-8 md:my-0">
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white duration-500 rounded hover:text-blue-700 md:bg-transparent md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              Videos
            </a>
          </li>
          <li className="mx-8 my-5 md:my-0">
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white duration-500 rounded hover:text-blue-700 md:bg-transparent md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              Academics
            </a>
          </li>
          <button
            type="button"
            className="block w-full py-2 my-5 ml-10 text-sm font-medium text-center text-white bg-blue-700 rounded-lg mr- md:hidden hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="hidden px-5 py-2 mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg md:inline-block hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <span
          className="block p-1 text-3xl cursor-pointer md:hidden"
          // onClick={handleClick}
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
