/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Modal } from 'antd';
import SearchBox from './SearchBox';

const DashBoard = () => {
  const router = useRouter();
  const [modal1Open, setModal1Open] = useState(false);

  const [searchText, setSearchText] = useState('');
  return (
    <>
      {/** DashBoard */}
      <div className="rounded-lg  border-[1px] p-1 flex justify-between items-center bg-white">
        {/** Action Page */}
        <div className=" ml-4">
          {router.asPath === '/admin'
            ? 'DashBoard'
            : router.asPath === '/uploadQuizzes'
            ? 'Quizz Panel'
            : router.asPath === '/uploadNotes'
            ? 'Notes Panel'
            : router.asPath === '/uploadQB'
            ? 'Question-Banks Panel'
            : router.asPath === '/uploadTT'
            ? 'Time-Table Panel'
            : 'DashBoard'}
        </div>
        {/** Search & User Info */}
        <div className="flex relative gap-2 justify-between items-center">
          <SearchBox searchText={searchText} setSearchText={setSearchText} />
          <div
            onClick={setModal1Open}
            className=" border-blue-500 border-2 flex justify-center items-center rounded-full  "
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
              right: 40,
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
