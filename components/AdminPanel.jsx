import React, { useEffect, useState } from 'react';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineClose,
  MdOutlineMenu,
  MdOutlineQuiz,
} from 'react-icons/md';
import { IoLogoXing } from 'react-icons/io';
import { BiBook, BiLogOut } from 'react-icons/bi';
import { AiOutlineSchedule, AiOutlineSetting } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import Image from 'next/image';
import AdminContent from './AdminContent';

const AdminPanel = () => {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const [modal, setModal] = useState(true);

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

  return (
    <div className={`flex min-h-screen ${isMobile ? 'flex-col' : ''}`}>
      <div
        className={`${
          open ? 'w-72' : 'w-20'
        } px-2 py-4 bg-[#214ED3] hidden md:flex flex-col w-full justify-between items-center duration-150`}
      >
        <div className="flex flex-col w-full justify-center items-center gap-4 relative">
          <div className="flex w-full justify-center items-center ">
            <div className=" flex justify-center gap-2 items-center w-full">
              <IoLogoXing className=" text-white" size={30} />
              <div className={open ? '' : 'hidden'}>
                <h1 className=" text-white uppercase text-xl font-bold">
                  it-dept
                </h1>
              </div>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className=" cursor-pointer absolute rounded-full -right-5 top-5 bg-white border-2 border-[#214ED3]"
            >
              {open ? (
                <MdKeyboardArrowLeft className=" text-[#214ED3]" size={25} />
              ) : (
                <MdKeyboardArrowRight className=" text-[#214ED3]" size={25} />
              )}
            </div>
          </div>
        </div>
        {/** Actions */}
        <div
          className={`uppercase w-full ${
            open ? 'px-6' : ''
          }  flex flex-col gap-5 justify-center items-center text-white`}
        >
          <div
            className={`flex w-full ${
              open ? 'justify-start' : 'justify-center'
            } items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150`}
          >
            <div>
              <MdOutlineQuiz size={25} />
            </div>
            {open ? (
              <div>
                <h2>Quizzes</h2>
              </div>
            ) : null}
          </div>
          <div
            className={`flex w-full ${
              open ? 'justify-start' : 'justify-center'
            } items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150`}
          >
            <div>
              <AiOutlineSchedule size={25} />
            </div>
            {open ? (
              <div>
                <h2>Time-Table</h2>
              </div>
            ) : null}
          </div>
          <div
            className={`flex w-full ${
              open ? 'justify-start' : 'justify-center'
            } items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150`}
          >
            <div>
              <CgNotes size={25} />
            </div>
            {open ? (
              <div>
                <h2>Notes</h2>
              </div>
            ) : null}
          </div>
          <div
            className={`flex w-full ${
              open ? 'justify-start' : 'justify-center'
            } items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150`}
          >
            <div>
              <BiBook size={25} />
            </div>
            {open ? (
              <div>
                <h2>Question Banks</h2>
              </div>
            ) : null}
          </div>
        </div>
        {/** Section 3 */}
        <div className=" w-full flex flex-col gap-7">
          {/** Upload */}
          <div
            className={`uppercase w-full ${
              open ? 'px-6' : ''
            }  flex flex-col justify-center items-center text-white`}
          >
            <div
              className={`flex w-full ${
                open ? 'justify-start' : 'justify-center'
              } items-center gap-2 p-2 bg-[#17295e] rounded-md text-white hover:opacity-[0.6] cursor-pointer transition-all ease-in duration-150`}
            >
              <div>
                <HiOutlinePlusCircle className=" text-white" size={26} />
              </div>
              {open ? (
                <div>
                  <h2>Upload</h2>
                </div>
              ) : null}
            </div>
          </div>
          {/** Settings and Logout */}
          <div
            className={`uppercase w-full ${
              open ? 'px-6' : ''
            }  flex flex-col justify-center items-center text-white`}
          >
            <div
              className={`flex w-full ${
                open ? 'justify-start' : 'justify-center'
              } items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150`}
            >
              <div>
                <AiOutlineSetting size={25} />
              </div>
              {open ? (
                <div>
                  <h2>Settings</h2>
                </div>
              ) : null}
            </div>
            <div
              className={`flex w-full ${
                open ? 'justify-start' : 'justify-center'
              } items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150`}
            >
              <div>
                <BiLogOut size={25} />
              </div>
              {open ? (
                <div>
                  <h2>Logout</h2>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/** Mobile Screen Navbar */}
      <div className=" md:hidden flex h-16 px-4 bg-[#214ED3] text-white justify-between items-center">
        <div className=" rounded-full border-2 border-white w-14 h-14 object-cover object-center ">
          <Image
            className=" rounded-full "
            src="/../public/assets/images/profilePic.png"
            alt="/"
            width={90}
            height={90}
          />
        </div>
        <div>
          <IoLogoXing size={25} />
        </div>
        <div
          onClick={() => setModal(!modal)}
          className=" cursor-pointer z-[100]"
        >
          {modal ? (
            <div className=" bg-white rounded-full p-1">
              <MdOutlineClose className=" text-[#214ED3]" size={22} />
            </div>
          ) : (
            <MdOutlineMenu size={25} />
          )}
        </div>
      </div>
      {/** Overlay and Modal */}
      <div
        className={
          modal ? 'md:hidden fixed left-0 top-0 h-full w-full bg-black/70' : ''
        }
      >
        <div
          className={
            modal
              ? 'fixed  right-0 top-0 bg-[#214ED3] px-4 py-0 h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-200'
              : 'fixed  right-[-100%] top-0 bg-[#214ED3]  px-4 py-0  h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-200'
          }
        >
          <div className=" p-4 py-5 w-full h-full text-white flex flex-col justify-between items-center">
            <div className=" flex w-full gap-2">
              <IoLogoXing size={25} />
              <h1 className=" uppercase">IT-Dept</h1>
            </div>
            <div className="flex flex-col w-full gap-4 ">
              {/** Actions */}
              <div className="uppercase w-full px-4 flex flex-col gap-6 justify-center items-center text-white">
                <div className="flex w-full justify-start items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150">
                  <div>
                    <MdOutlineQuiz size={25} />
                  </div>

                  <div>
                    <h2>Quizzes</h2>
                  </div>
                </div>
                <div className="flex w-full justify-start items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150">
                  <div>
                    <AiOutlineSchedule size={25} />
                  </div>

                  <div>
                    <h2>Time-table</h2>
                  </div>
                </div>
                <div className="flex w-full justify-start items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150">
                  <div>
                    <CgNotes size={25} />
                  </div>

                  <div>
                    <h2>Notes</h2>
                  </div>
                </div>
                <div className="flex w-full justify-start items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150">
                  <div>
                    <BiBook size={25} />
                  </div>

                  <div>
                    <h2>Q-Banks</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col w-full gap-4 ">
              <div className="uppercase w-full px-4 flex flex-col justify-center items-center text-white">
                <div className="flex w-full justify-start items-center gap-2 p-2 bg-[#17295e] rounded-md text-white hover:opacity-[0.6] cursor-pointer transition-all ease-in duration-150">
                  <div>
                    <HiOutlinePlusCircle className=" text-white" size={26} />
                  </div>

                  <div>
                    <h2>Upload</h2>
                  </div>
                </div>
              </div>
              {/** Setting and logout */}
              <div className="uppercase w-full px-4 flex flex-col justify-center items-center text-white">
                <div className="flex w-full justify-start items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150">
                  <div>
                    <AiOutlineSetting size={25} />
                  </div>

                  <div>
                    <h2>Settings</h2>
                  </div>
                </div>
                <div className="flex w-full justify-start items-center gap-2 p-2 hover:bg-white rounded-md hover:text-[#214ED3] cursor-pointer transition-all ease-in duration-150">
                  <div>
                    <BiLogOut size={25} />
                  </div>

                  <div>
                    <h2>Logout</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex-1 bg-coolGray-200 ">
        <AdminContent />
      </div>
    </div>
  );
};

export default AdminPanel;
