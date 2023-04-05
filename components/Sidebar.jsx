/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineDashboard,
  MdOutlineQuiz,
} from 'react-icons/md';
import { IoLogoXing } from 'react-icons/io';
import { BiBook, BiLogOut } from 'react-icons/bi';
import { AiOutlineSchedule, AiOutlineSetting } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { useRouter } from 'next/router';
import DashBoard from './DashBoard';
import MobileNavbar from './MobileNavbar';

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [nav, setNav] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setShowDiv(true);
      }, 150);
    } else {
      setShowDiv(false);
    }
  }, [open]);

  return (
    <div className={`flex ${isMobile ? 'flex-col gap-1' : ''}`}>
      <div
        className={`relative ${
          open ? ' w-64' : 'w-20'
        } min-h-screen p-2 py-4 bg-white border-r-[1px] hidden md:flex flex-col gap-4 justify-between items-center transition-all ease-linear duration-[150ms]`}
      >
        {/** Open/Close */}
        <div
          onClick={() => setOpen(!open)}
          className=" cursor-pointer absolute rounded-full -right-3 top-12 bg-white border-2 border-blue-600"
        >
          {open ? (
            <MdKeyboardArrowLeft className=" text-[#214ED3]" size={25} />
          ) : (
            <MdKeyboardArrowRight className=" text-[#214ED3]" size={25} />
          )}
        </div>

        <div className=" flex gap-4 justify-between items-center">
          <Link href="/admin">
            <div className=" cursor-pointer flex justify-center items-center">
              {/** Logo */}
              <div>
                <IoLogoXing className=" text-blue-600" size={35} />
              </div>
              {showDiv ? (
                <div>
                  <h1 className=" font-bold uppercase tracking-widest ">
                    IT-DEPT
                  </h1>
                </div>
              ) : null}
            </div>
          </Link>
        </div>
        {/** Actions */}
        <div className=" flex w-full flex-1 flex-col gap-3 justify-center items-center">
          <Link href="/admin">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group flex ${
                router.asPath === '/admin'
                  ? ' border-r-[5px] translate-x-2 text-blue-600 border-blue-800 rounded-l-md rounded-none'
                  : 'text-gray-500 '
              } cursor-pointer rounded-md p-1 gap-2 uppercase items-center   hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <MdOutlineDashboard
                  className="  group-hover:text-white"
                  size={30}
                />
              </div>
              {showDiv ? (
                <div>
                  <h1>Dashboard</h1>
                </div>
              ) : null}
            </div>
          </Link>
          <Link href="/uploadQuizzes">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group${
                router.asPath === '/uploadQuizzes'
                  ? ' border-r-[5px] translate-x-2 text-blue-600 border-blue-800 rounded-l-md rounded-none'
                  : ' text-gray-500'
              } flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <MdOutlineQuiz className="  group-hover:text-white" size={30} />
              </div>
              {showDiv ? (
                <div>
                  <h1 className=" tracking-wide">Quizzes</h1>
                </div>
              ) : null}
            </div>
          </Link>
          <Link href="/uploadTT">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group ${
                router.asPath === '/uploadTT'
                  ? ' border-r-[5px] translate-x-2 text-blue-600 border-blue-800 rounded-l-md rounded-none'
                  : 'text-gray-500'
              } flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center   hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <AiOutlineSchedule
                  className="  group-hover:text-white"
                  size={30}
                />
              </div>
              {showDiv ? (
                <div>
                  <h1 className=" tracking-wide">Time-table</h1>
                </div>
              ) : null}
            </div>
          </Link>
          <Link href="/uploadNotes">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group ${
                router.asPath === '/uploadNotes'
                  ? ' border-r-[5px] translate-x-2 text-blue-600 border-blue-800 rounded-l-md rounded-none'
                  : 'text-gray-500'
              } flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center   hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <CgNotes className="  group-hover:text-white" size={30} />
              </div>
              {showDiv ? (
                <div>
                  <h1 className=" tracking-wide">Notes</h1>
                </div>
              ) : null}
            </div>
          </Link>
          <Link href="/uploadQB">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group ${
                router.asPath === '/uploadQB'
                  ? ' border-r-[5px] translate-x-2 text-blue-600 border-blue-800 rounded-l-md rounded-none'
                  : 'text-gray-500'
              } flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center   hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <BiBook className="  group-hover:text-white" size={30} />
              </div>
              {showDiv ? (
                <div>
                  <h1 className=" tracking-wide">Q-Banks</h1>
                </div>
              ) : null}
            </div>
          </Link>
        </div>
        {/** Upload,Setting & Logout  */}
        <div className="w-full flex flex-col justify-between items-center gap-2">
          <Link href="/settings">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group ${
                router.asPath === '/settings'
                  ? ' border-r-[5px] translate-x-2 text-blue-600 border-blue-800 rounded-l-md rounded-none'
                  : 'text-gray-500'
              } flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <AiOutlineSetting
                  className=" group-hover:text-white group-hover:rotate-90 duration-200"
                  size={30}
                />
              </div>
              {showDiv ? (
                <div>
                  <h1 className=" tracking-wide">Settings</h1>
                </div>
              ) : null}
            </div>
          </Link>
          <Link href="/">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <BiLogOut className=" group-hover:text-white" size={30} />
              </div>
              {showDiv ? (
                <div>
                  <h1 className=" tracking-wide">Logout</h1>
                </div>
              ) : null}
            </div>
          </Link>
        </div>
      </div>

      {/** Mobile Screen Navbar */}
      <MobileNavbar nav={nav} setNav={setNav} />

      {/** DashBoard & Pages */}
      <div className="px-2 md:px-4 flex flex-col gap-2 flex-1 w-full h-screen overflow-y-auto">
        {/** DashBoard */}
        <DashBoard isMobile={isMobile} />
        {/** Pages are Load here */}
        <main className="rounded-lg flex-1 w-full bg-slate-100    ">
          {children}
        </main>
      </div>
    </div>
  );
};
export default Sidebar;