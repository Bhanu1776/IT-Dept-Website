/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Modal } from 'antd';

const DashBoard = ({ isMobile }) => {
  const router = useRouter();
  const [modal1Open, setModal1Open] = useState(false);

  return (
    <>
      {/** DashBoard */}
      <div
        className={`rounded-lg ${
          isMobile ? 'mt-16' : ''
        } border-[1px] p-1 flex justify-between items-center bg-white`}
      >
        {/** Action Page */}
        <div className=" ml-4">
          <h1 className=" text-blue-900 tracking-wider font-extrabold">
            {router.asPath === '/admin'
              ? 'Hello, Mrunal V.'
              : router.asPath === '/uploadQuizzes'
              ? 'Quizz Panel'
              : router.asPath === '/uploadNotes'
              ? 'Notes Panel'
              : router.asPath === '/uploadQB'
              ? 'Question-Banks Panel'
              : router.asPath === '/uploadTT'
              ? 'Time-Table Panel'
              : router.asPath === '/settings'
              ? 'Settings'
              : 'Hello, Mrunal V.'}
          </h1>
        </div>
        {/** Search & User Info */}
        <div className="flex relative gap-2 justify-between items-center">
          <div
            onClick={setModal1Open}
            className=" cursor-pointer border-blue-500 border-2 hidden md:flex justify-center items-center rounded-full  "
          >
            <Image
              className=" rounded-full object-center object-cover "
              src="/../public/assets/images/profilePic.png"
              alt="/"
              width={40}
              height={40}
            />
          </div>

          <Modal
            title="Mrunal V"
            style={{
              top: 60,
              right: 16,
              padding: 0,
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
        </div>
      </div>
    </>
  );
};

export default DashBoard;
