/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineSchedule, AiOutlineSetting } from 'react-icons/ai';
import { BiBook, BiLogOut } from 'react-icons/bi';
import { CgNotes } from 'react-icons/cg';
import { IoLogoXing } from 'react-icons/io';
import {
  MdOutlineClose,
  MdOutlineDashboard,
  MdOutlineMenu,
  MdOutlineQuiz,
} from 'react-icons/md';
import { Modal } from 'antd';
import { useRouter } from 'next/router';

const MobileNavbar = ({ nav, setNav }) => {
  const [modal1Open, setModal1Open] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className=" md:hidden z-[200]  fixed w-full flex h-16 px-4 bg-blue-700/80 text-white justify-between items-center backdrop-blur-md">
        <div
          onClick={setModal1Open}
          className=" relative cursor-pointer rounded-full border-2 border-white flex justify-center items-center object-cover object-center "
        >
          <Image
            className=" rounded-full "
            src="/../public/assets/images/profilePic.png"
            alt="/"
            width={45}
            height={45}
          />
        </div>
        <Modal
          title="Mrunal V"
          style={{
            top: 70,
            left: 10,
            position: 'absolute',
          }}
          open={modal1Open}
          onOk={() => setModal1Open(false)}
          okText="Logout"
          onCancel={() => setModal1Open(false)}
          width={300}
          mask={false}
        >
          <h1>Do you want to Logout?</h1>
        </Modal>
        <div>
          <IoLogoXing size={25} />
        </div>
        <div onClick={() => setNav(!nav)} className=" cursor-pointer z-[100]">
          {nav ? (
            ''
          ) : (
            <div className=" bg-white rounded-md p-1">
              <MdOutlineMenu className=" text-[#214ED3]" size={25} />
            </div>
          )}
        </div>
      </div>
      {/** Overlay and Actions */}
      <div
        className={
          nav
            ? 'md:hidden z-[200]  fixed left-0 top-0 h-full w-full bg-black/70'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed z-[200]  right-0 top-0 bg-white px-4 py-0 h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-200'
              : 'fixed z-[200] right-[-100%] top-0 bg-white  px-4 py-0  h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-200'
          }
        >
          <div className=" p-4 py-5 w-full h-full flex flex-col justify-between items-center">
            <div className="flex items-center justify-between w-full gap-2">
              <Link href="/admin">
                <div
                  onClick={() => setNav(false)}
                  className=" cursor-pointer flex justify-start items-center gap-2"
                >
                  <IoLogoXing className=" text-blue-600" size={28} />
                  <h1 className=" uppercase tracking-widest">IT-Dept</h1>
                </div>
              </Link>
              <div
                onClick={() => setNav(false)}
                className=" bg-white rounded-full border-[1px] border-blue-600 p-1"
              >
                <MdOutlineClose className=" text-[#214ED3]" size={25} />
              </div>
            </div>

            <div className="flex flex-col w-full gap-4 ">
              {/** Actions */}
              <div className="uppercase w-full px-4 flex flex-col gap-4 justify-center items-center">
                <Link href="/admin">
                  <div
                    onClick={() => setNav(false)}
                    className={`${
                      router.asPath === '/admin'
                        ? 'text-blue-600'
                        : 'text-gray-500'
                    } flex w-full justify-start items-center gap-2 p-2 hover:bg-blue-600 rounded-md hover:text-white cursor-pointer group transition-all ease-in duration-150`}
                  >
                    <div>
                      <MdOutlineDashboard
                        className="  group-hover:text-white"
                        size={26}
                      />
                    </div>

                    <div>
                      <h2 className=" tracking-wider">Dashboard</h2>
                    </div>
                  </div>
                </Link>
                <Link href="/uploadQuizzes">
                  <div
                    onClick={() => setNav(false)}
                    className={`${
                      router.asPath === '/uploadQuizzes'
                        ? 'text-blue-600'
                        : 'text-gray-500'
                    } flex w-full justify-start items-center gap-2 p-2 hover:bg-blue-600 rounded-md hover:text-white cursor-pointer group transition-all ease-in duration-150`}
                  >
                    <div>
                      <MdOutlineQuiz
                        className="  group-hover:text-white"
                        size={26}
                      />
                    </div>

                    <div>
                      <h2 className=" tracking-wider">Quizzes</h2>
                    </div>
                  </div>
                </Link>
                <Link href="/uploadTT">
                  <div
                    onClick={() => setNav(false)}
                    className={`${
                      router.asPath === '/uploadTT'
                        ? 'text-blue-600'
                        : 'text-gray-500'
                    } flex w-full justify-start items-center gap-2 p-2 hover:bg-blue-600 rounded-md hover:text-white cursor-pointer group transition-all ease-in duration-150`}
                  >
                    <div>
                      <AiOutlineSchedule
                        className="  group-hover:text-white"
                        size={26}
                      />
                    </div>

                    <div>
                      <h2 className=" tracking-wider">time-table</h2>
                    </div>
                  </div>
                </Link>
                <Link href="/uploadNotes">
                  <div
                    onClick={() => setNav(false)}
                    className={`${
                      router.asPath === '/uploadNotes'
                        ? 'text-blue-600'
                        : 'text-gray-500'
                    } flex w-full justify-start items-center gap-2 p-2 hover:bg-blue-600 rounded-md hover:text-white cursor-pointer group transition-all ease-in duration-150`}
                  >
                    <div>
                      <CgNotes className="  group-hover:text-white" size={26} />
                    </div>

                    <div>
                      <h2 className=" tracking-wider">Notes</h2>
                    </div>
                  </div>
                </Link>
                <Link href="/uploadQB">
                  <div
                    onClick={() => setNav(false)}
                    className={`${
                      router.asPath === '/uploadQB'
                        ? 'text-blue-600'
                        : 'text-gray-500'
                    } flex w-full justify-start items-center gap-2 p-2 hover:bg-blue-600 rounded-md hover:text-white cursor-pointer group transition-all ease-in duration-150`}
                  >
                    <div>
                      <BiBook className="  group-hover:text-white" size={26} />
                    </div>

                    <div>
                      <h2 className=" tracking-wider">Q-Banks</h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" flex flex-col w-full gap-4 ">
              {/** Setting and logout */}
              <div className="uppercase w-full px-4 flex flex-col justify-center items-center">
                <Link href="/settings">
                  <div
                    onClick={() => setNav(false)}
                    className={`${
                      router.asPath === '/settings'
                        ? 'text-blue-600'
                        : 'text-gray-500'
                    } flex w-full justify-start items-center gap-2 p-2 hover:bg-blue-600 rounded-md hover:text-white cursor-pointer group transition-all ease-in duration-150`}
                  >
                    <div>
                      <AiOutlineSetting
                        className="  group-hover:text-white group-hover:rotate-90 duration-200"
                        size={26}
                      />
                    </div>

                    <div>
                      <h2 className=" tracking-wider">Settings</h2>
                    </div>
                  </div>
                </Link>
                <Link href="/settings">
                  <div
                    onClick={() => setNav(false)}
                    className="flex text-gray-500 w-full justify-start items-center gap-2 p-2 hover:bg-blue-600 rounded-md hover:text-white cursor-pointer group transition-all ease-in duration-150"
                  >
                    <div>
                      <BiLogOut
                        className="  group-hover:text-white"
                        size={26}
                      />
                    </div>

                    <div>
                      <h2 className=" tracking-wider">Logout</h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
