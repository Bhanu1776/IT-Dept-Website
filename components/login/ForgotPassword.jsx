/* eslint-disable react/button-has-type */
import { sendPasswordResetEmail } from 'firebase/auth';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../lib/firebase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const router = useRouter();

  const handleEmailSend = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert(`Email sent successfully to ${email}`);
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
          <div className="">
            <h2 className=" text-xl uppercase font-bold tracking-wide">
              Forgot Password?
            </h2>
          </div>
          <div className="">
            <p className=" text-gray-500 text-sm">
              No worries, we'll send you reset link
            </p>
          </div>
        </div>

        <div className=" w-full p-1 border-2 border-gray-100 rounded-md flex items-center justify-start bg-transparent">
          {/** Email */}
          <div className=" text-[#214ED3] m-2">
            <MdEmail size={20} />
          </div>
          <div className="w-full">
            <input
              className=" p-2 w-full outline-none "
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              placeholder="Enter Email"
            />
          </div>
        </div>

        <div className=" w-full">
          <button
            onClick={handleEmailSend}
            className=" bg-[#214ED3] tracking-wider text-white hover:opacity-[0.8] active:opacity-[0.5] p-4 rounded-md w-full transition-all ease-in duration-150"
          >
            Send Email
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

export default ForgotPassword;
