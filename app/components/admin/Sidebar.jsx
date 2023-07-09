'use client'
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineQuiz,
} from 'react-icons/md';
import { IoLogoXing } from 'react-icons/io';
import { BiBook, BiLogOut } from 'react-icons/bi';
import { AiOutlineSchedule, AiOutlineSetting } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import DashBoard from './DashBoard';

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [nav, setNav] = useState(true);
  const [showDiv, setShowDiv] = useState(false);

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
    <div className="flex">
      <div
        className={`relative ${
          open ? ' w-64' : 'w-20'
        } min-h-screen p-2 py-4 bg-white border-r-[1px] flex flex-col gap-4 justify-between items-center transition-all ease-linear duration-[150ms]`}
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
            <div className=" flex justify-center items-center">
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
          <Link href="/uploadQuizzes">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center  hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <MdOutlineQuiz
                  className=" text-blue-600 group-hover:text-white"
                  size={30}
                />
              </div>
              {showDiv ? (
                <div>
                  <h1>Quizzes</h1>
                </div>
              ) : null}
            </div>
          </Link>
          <Link href="/uploadTT">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center  hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <AiOutlineSchedule
                  className=" text-blue-600 group-hover:text-white"
                  size={30}
                />
              </div>
              {showDiv ? (
                <div>
                  <h1>Time-table</h1>
                </div>
              ) : null}
            </div>
          </Link>
          <Link href="/uploadNotes">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center  hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <CgNotes
                  className=" text-blue-600 group-hover:text-white"
                  size={30}
                />
              </div>
              {showDiv ? (
                <div>
                  <h1>Notes</h1>
                </div>
              ) : null}
            </div>
          </Link>
          <Link href="/uploadQB">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center  hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <BiBook
                  className=" text-blue-600 group-hover:text-white"
                  size={30}
                />
              </div>
              {showDiv ? (
                <div>
                  <h1>QuestionBanks</h1>
                </div>
              ) : null}
            </div>
          </Link>
        </div>
        {/** Logout */}
        <div className="w-full flex flex-col justify-between items-center gap-2">
          <Link href="/quizzes">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group flex cursor-pointer rounded-md p-1 gap-2 text-white uppercase items-center bg-blue-600 hover:bg-blue-800 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <HiOutlinePlusCircle
                  className=" text-white group-hover:text-white"
                  size={30}
                />
              </div>
              {showDiv ? (
                <div>
                  <h1>Upload</h1>
                </div>
              ) : null}
            </div>
          </Link>
          <Link href="/quizzes">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <AiOutlineSetting
                  className=" text-blue-600 group-hover:text-white"
                  size={30}
                />
              </div>
              {showDiv ? (
                <div>
                  <h1>Settings</h1>
                </div>
              ) : null}
            </div>
          </Link>
          <Link href="/quizzes">
            <div
              className={`w-full ${
                open ? 'justify-start px-6' : 'justify-center'
              } group flex cursor-pointer rounded-md p-1 gap-2 uppercase items-center hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-150`}
            >
              <div>
                <BiLogOut
                  className=" text-blue-600 group-hover:text-white"
                  size={30}
                />
              </div>
              {showDiv ? (
                <div>
                  <h1>Logout</h1>
                </div>
              ) : null}
            </div>
          </Link>
        </div>
      </div>
      {/** DashBoard Pages */}
      <div className="px-4 flex flex-col gap-2 flex-1 w-full h-screen overflow-y-auto">
        {/** DashBoard */}
        <DashBoard />
        {/** Pages are Load here */}
        <main className="rounded-lg flex-1 w-full bg-slate-100    ">
          {children}
        </main>
      </div>
    </div>
  );
};
export default Sidebar;
