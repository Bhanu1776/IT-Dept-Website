/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';
import { MdEmail, MdLock, MdVisibilityOff, MdVisibility } from 'react-icons/md';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Link from 'next/link';
import { app } from '../../lib/firebase';
// import { auth } from '../../lib/firebase';

const Login = () => {
  const auth = getAuth(app);
  const router = useRouter();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('email');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged In successfully');
      router.push('/homepage');
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <div className=" w-[420px] h-[50%] flex flex-col justify-between items-center p-5 bg-white rounded-lg border-[1px] border-gray-200 shadow-md shadow-gray-200">
        {/* Login layout */}
        <div className="flex flex-col items-center justify-center w-full mb-4 ">
          <div className="uppercase ">
            <h2 className="text-xl font-bold tracking-wider ">Login</h2>
          </div>
          <div>
            <p className="text-gray-400 ">Xavier Institute of Engineering</p>
          </div>
        </div>

        <div className="flex items-center justify-start w-full p-1 bg-transparent border-2 border-gray-100 rounded-md ">
          {/** Email */}
          <div className=" text-[#214ED3] m-2">
            <MdEmail size={20} />
          </div>
          <div className="w-full">
            <input
              className="w-full p-2 outline-none "
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              placeholder="Enter Email"
            />
          </div>
        </div>

        <div className="flex items-center justify-between w-full p-1 bg-transparent border-2 border-gray-100 rounded-md ">
          {/** Email */}
          <div className="flex justify-start w-full ">
            <div className=" text-[#214ED3] m-2">
              <MdLock size={20} />
            </div>
            <div className="w-full">
              <input
                className="w-full p-2 outline-none "
                type={passwordType}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div className="flex cursor-pointer " onClick={togglePassword}>
            {passwordType === 'password' ? (
              <MdVisibilityOff size={20} className="text-gray-400 " />
            ) : (
              <MdVisibility size={20} className="text-black " />
            )}
          </div>
        </div>

        <div className="w-full ">
          <button
            onClick={handleLogin}
            className=" bg-[#214ED3] uppercase tracking-wider text-white hover:opacity-[0.8] active:opacity-[0.5] p-4 rounded-md w-full transition-all ease-in duration-150"
          >
            Login
          </button>
        </div>

        <div className="flex items-center text-sm ">
          <Link href="/login/forgotPassword">
            <p className="text-gray-500 cursor-pointer underline-offset-2 hover:underline">
              Forgot password?{' '}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
