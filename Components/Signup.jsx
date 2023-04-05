/* eslint-disable react/button-has-type */
import {
  MdEmail,
  MdLock,
  MdVisibilityOff,
  MdVisibility,
  MdPerson,
} from 'react-icons/md';
import { useState } from 'react';
import Link from 'next/link';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('email');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [confirmpasswordtype, setConfirmpasswordtype] = useState('email');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  const toggleConfirmPassword = () => {
    if (confirmpasswordtype === 'password') {
      setConfirmpasswordtype('text');
      return;
    }
    setConfirmpasswordtype('password');
  };

  return (
    <div className="flex h-screen w-full flex-col justify-center items-center bg-Mischka">
      <div className="h-auto flex flex-col justify-between bg-Lavender-Blush items-center p-5 rounded-[40px] border-[4px] border-white">
        {/* SignUp Content */}
        <div className=" w-full mt-6 flex flex-col justify-center items-center">
          <div>
            <p className=" text-gray-400">Xavier Institute of Engineering</p>
          </div>
          <div className="">
            <h2 className=" text-3xl font-extrabold font-pops tracking-wider">
              Create an Account
            </h2>
          </div>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-2 mt-8">
          <div className="w-full p-1 flex bg-transparent items-center justify-between">
            <div className=" text-[#000000] mr-2 ">
              <MdPerson size={20} />
            </div>
            <div className="w-full">
              <input
                className=" p-3 w-full border-none rounded-xl "
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                name="username"
                placeholder="Enter Username"
              />
            </div>
          </div>

          {/* Email */}
          <div className="w-full p-1 flex bg-transparent items-center justify-between">
            <div className=" text-[#000000] mr-2">
              <MdEmail size={20} />
            </div>
            <div className="w-full">
              <input
                className=" p-3 w-full border-none rounded-xl "
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                placeholder="Enter Email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-full p-1  flex items-center justify-between bg-transparent">
            <div className="flex justify-start w-full">
              <div className=" text-[#000000] mr-2 mt-3">
                <MdLock size={20} />
              </div>
              <div className="w-full relative">
                <input
                  className=" p-3 w-full border-none rounded-xl"
                  type={passwordType}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  placeholder="Enter Password"
                />
                <div
                  className=" cursor-pointer flex absolute bottom-[30%] left-[87%]"
                  onClick={togglePassword}
                >
                  {passwordType === 'password' ? (
                    <MdVisibilityOff size={20} className=" text-gray-400" />
                  ) : (
                    <MdVisibility size={20} className=" text-black" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="w-full p-1  flex items-center justify-between bg-transparent">
            <div className="flex justify-start w-full">
              <div className=" text-[#000000] mr-2 mt-3">
                <MdLock size={20} />
              </div>
              <div className="w-full relative">
                <input
                  className=" p-3 w-full border-none rounded-xl"
                  type={confirmpasswordtype}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  value={confirmpassword}
                  name="confirmpassword"
                  placeholder="Confirm Password"
                />
                <div
                  className=" cursor-pointer flex absolute bottom-[30%] left-[87%]"
                  onClick={toggleConfirmPassword}
                >
                  {confirmpasswordtype === 'password' ? (
                    <MdVisibilityOff size={20} className=" text-gray-400" />
                  ) : (
                    <MdVisibility size={20} className=" text-black" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className=" bg-[#000000] tracking-wider text-white hover:opacity-[0.8] active:opacity-[0.5] py-2.5 px-12 rounded-md mx-auto transition-all ease-in duration-150 font-semibold">
            Create Account
          </button>
        </div>

        <div className="flex text-center mt-8 mb-2">
          <h1 className="text-gray-500">Already have an account?</h1>
          <Link href="/login">LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
