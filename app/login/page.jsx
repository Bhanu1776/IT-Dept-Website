/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';
import { MdEmail, MdLock, MdVisibilityOff, MdVisibility } from 'react-icons/md';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import Link from 'next/link';
import { auth } from '../../lib/firebase';

const Login = () => {
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
      router.push('/admin');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-Mischka">
      <div className="h-[80%] flex flex-col justify-between bg-Lavender-Blush items-center p-5 rounded-[40px] border-[4px] border-white">
        {/* Login layout */}
        <div className="flex flex-col items-center justify-center w-full mt-6 ">
          <div>
            <p className="text-gray-400 ">Xavier Institute of Engineering</p>
          </div>
          <div className="">
            <h2 className="text-3xl font-extrabold tracking-wider font-pops">
              Welcome Back!
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex w-full p-1 bg-transparent ">
            {/** Email */}
            <div className=" text-[#000000] mr-2 mt-3">
              <MdEmail size={20} />
            </div>
            <div className="w-full">
              <input
                className="w-full p-3 border-none rounded-xl"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="flex items-center justify-between w-full p-1 bg-transparent ">
            {/** Password */}
            <div className="flex justify-start w-full ">
              <div className=" text-[#000000] mr-2 mt-3">
                <MdLock size={20} />
              </div>
              <div className="relative w-full">
                <input
                  className="w-full p-3 border-none rounded-xl"
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
                    <MdVisibilityOff size={20} className="text-gray-400 " />
                  ) : (
                    <MdVisibility size={20} className="text-black " />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <button
            onClick={handleLogin}
            className=" bg-[#000000] uppercase tracking-wider text-white hover:opacity-[0.8] active:opacity-[0.5] py-2.5 px-12 rounded-md mx-auto transition-all ease-in duration-150"
          >
            Login
          </button>
        </div>

        <div className="flex items-center mb-3 text-sm ">
          <Link href="/forgot-password">
            <p className="text-gray-500 cursor-pointer underline-offset-2 hover:underline">
              Forgot password?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
