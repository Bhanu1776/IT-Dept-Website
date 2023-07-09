'use client'
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import { MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { confirmPasswordReset } from 'firebase/auth';
import { auth } from '../../lib/firebase';


const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('email');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const router = useRouter();

  const { oobCode } = router.query;
  const handlePasswordReset = async () => {
    try {
      await confirmPasswordReset(auth, oobCode, password);
      alert('Password set Successfully');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className=" flex h-screen w-full flex-col justify-center items-center">
      <div className=" w-[420px] gap-2 flex flex-col justify-between items-center p-5 bg-white rounded-lg border-[1px] border-gray-200 shadow-md shadow-gray-200">
        {/* Login layout */}
        <div className=" w-full mb-4 flex flex-col justify-center items-center">
          <div className=" uppercase">
            <h2 className=" text-xl font-bold tracking-wide">New Password</h2>
          </div>
        </div>

        <div className=" w-full p-1 border-2 border-gray-100 rounded-md flex items-center justify-start bg-transparent">
          {/** Email */}
          <div className=" flex justify-start w-full">
            <div className=" text-[#214ED3] m-2">
              <MdLock size={20} />
            </div>
            <div className="w-full">
              <input
                className=" p-2 w-full outline-none "
                type={passwordType}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div className=" cursor-pointer flex " onClick={togglePassword}>
            {passwordType === 'password' ? (
              <MdVisibilityOff size={20} className=" text-gray-400" />
            ) : (
              <MdVisibility size={20} className=" text-black" />
            )}
          </div>
        </div>

        <div className=" w-full">
          <button
            onClick={handlePasswordReset}
            className=" bg-[#214ED3] uppercase tracking-wider text-white hover:opacity-[0.8] active:opacity-[0.5] p-4 rounded-md w-full transition-all ease-in duration-150"
          >
            Reset Password
          </button>
        </div>

        <div className=" flex items-center text-sm">
          <Link href="/login">
            <p className=" text-blue-400 cursor-pointer">Back to Log in</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
