/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { MdOutlineEdit, MdOutlineLockReset } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { useState } from 'react';
import EditProfile from './Settings/EditProfile';
import ResetPass from './Settings/ResetPass';
import ChangeEmail from './Settings/ChangeEmail';

const AdminSettings = () => {
  const [isSelected, setIsSelected] = useState('editProfile');
  const handleSelect = (componentName) => {
    setIsSelected(componentName);
  };
  return (
    <div className="bg-white  h-full w-full overflow-hidden rounded-lg border-[1px] flex flex-col md:flex-row gap-2 justify-start items-start">
      {/** Action name */}
      <div className="flex md:flex-col w-full md:w-fit h-full justify-start items-center border-r-[2px]">
        <div
          onClick={() => {
            handleSelect('editProfile');
          }}
          className={`${
            isSelected === 'editProfile' ? ' bg-blue-500 text-white' : ''
          } cursor-pointer flex-wrap p-4 border-b-[1px] flex justify-center md:justify-start items-center gap-1 w-full`}
        >
          <MdOutlineEdit size={22} />
          <h1>Edit Profile Info</h1>
        </div>
        <div
          onClick={() => {
            handleSelect('resetPass');
          }}
          className={`${
            isSelected === 'resetPass' ? ' bg-blue-500 text-white' : ''
          } cursor-pointer flex-wrap p-4 border-b-[1px] flex justify-center md:justify-start items-center gap-1 w-full`}
        >
          <MdOutlineLockReset size={22} />
          <h1>Reset Password</h1>
        </div>
        <div
          onClick={() => {
            handleSelect('changeEmail');
          }}
          className={`${
            isSelected === 'changeEmail' ? ' bg-blue-500 text-white' : ''
          } cursor-pointer flex-wrap p-4 border-b-[1px] flex justify-center md:justify-start items-center gap-1 w-full`}
        >
          <RxUpdate size={22} />
          <h1>Change Email</h1>
        </div>
      </div>
      {/** Render */}
      <div className="p-2 flex-1 flex justify-center items-center w-full">
        {isSelected === 'editProfile' && <EditProfile />}
        {isSelected === 'resetPass' && <ResetPass />}
        {isSelected === 'changeEmail' && <ChangeEmail />}
      </div>
    </div>
  );
};

export default AdminSettings;
