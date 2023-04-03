import Link from 'next/link';
import React from 'react';
import { AiOutlineRight, AiOutlineSchedule } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { CgNotes } from 'react-icons/cg';
import { MdOutlineQuiz } from 'react-icons/md';

const AdminStats = () => (
  <div className=" flex flex-col justify-center items-center">
    <div className=" w-full grid gap-4 md:gap-8 grid-cols-2 lg:grid-cols-4">
      {/** Card */}
      <div className=" relative flex flex-col gap-1 w-full justify-start items-start p-2  bg-blue-600 rounded-lg">
        <div className="p-2 rounded-md flex flex-col w-full justify-between items-center bg-blue-800">
          <div className=" flex w-full justify-between items-center">
            <div className=" p-1 bg-gray-200/40 rounded-sm">
              <MdOutlineQuiz className="text-white" size={25} />
            </div>

            <Link href="/uploadQuizzes">
              <div className=" cursor-pointer bg-white p-2 rounded-full">
                <AiOutlineRight />
              </div>
            </Link>
          </div>
          <div className="flex w-full mt-4">
            <h1 className=" uppercase font-bold tracking-wider text-white">
              Quizzes
            </h1>
          </div>
        </div>

        <div className="w-full px-1 flex justify-between items-center">
          <div>
            <h1>Uploaded</h1>
          </div>
          <div>
            <h2 className=" text-yellow-300">25</h2>
          </div>
        </div>
        <div className="w-full px-1 flex justify-between items-center">
          <div>
            <h1>Active</h1>
          </div>
          <div>
            <h2 className=" text-yellow-300">15</h2>
          </div>
        </div>
      </div>
      {/** Card */}
      <div className=" relative flex flex-col gap-1 w-full justify-start items-start p-2  bg-blue-600 rounded-lg">
        <div className="p-2 rounded-md flex flex-col w-full justify-between items-center bg-blue-800">
          <div className=" flex w-full justify-between items-center">
            <div className=" p-1 bg-gray-200/40 rounded-sm">
              <AiOutlineSchedule className="text-white" size={25} />
            </div>

            <Link href="/uploadTT">
              <div className=" cursor-pointer bg-white p-2 rounded-full">
                <AiOutlineRight />
              </div>
            </Link>
          </div>
          <div className="flex w-full mt-4">
            <h1 className=" uppercase font-bold tracking-wider text-white">
              Time-Table
            </h1>
          </div>
        </div>

        <div className="w-full px-1 flex justify-between items-center">
          <div>
            <h1>Uploaded</h1>
          </div>
          <div>
            <h2 className=" text-yellow-300">5</h2>
          </div>
        </div>
        <div className="w-full px-1 flex justify-between items-center">
          <div>
            <h1>Active</h1>
          </div>
          <div>
            <h2 className=" text-yellow-300">2</h2>
          </div>
        </div>
      </div>
      {/** Card */}
      <div className=" relative flex flex-col gap-1 w-full justify-start items-start p-2  bg-blue-600 rounded-lg">
        <div className="p-2 rounded-md flex flex-col w-full justify-between items-center bg-blue-800">
          <div className=" flex w-full justify-between items-center">
            <div className=" p-1 bg-gray-200/40 rounded-sm">
              <CgNotes className="text-white" size={25} />
            </div>

            <Link href="/uploadNotes">
              <div className=" cursor-pointer bg-white p-2 rounded-full">
                <AiOutlineRight />
              </div>
            </Link>
          </div>
          <div className="flex w-full mt-4">
            <h1 className=" uppercase font-bold tracking-wider text-white">
              Notes
            </h1>
          </div>
        </div>

        <div className="w-full px-1 flex justify-between items-center">
          <div>
            <h1>Uploaded</h1>
          </div>
          <div>
            <h2 className=" text-yellow-300">35</h2>
          </div>
        </div>
        <div className="w-full px-1 flex justify-between items-center">
          <div>
            <h1>Active</h1>
          </div>
          <div>
            <h2 className=" text-yellow-300">35</h2>
          </div>
        </div>
      </div>
      {/** Card */}
      <div className=" relative flex flex-col gap-1 w-full justify-start items-start p-2  bg-blue-600 rounded-lg">
        <div className="p-2 rounded-md flex flex-col w-full justify-between items-center bg-blue-800">
          <div className=" flex w-full justify-between items-center">
            <div className=" p-1 bg-gray-200/40 rounded-sm">
              <BiBook className="text-white" size={25} />
            </div>

            <Link href="/uploadQB">
              <div className=" cursor-pointer bg-white p-2 rounded-full">
                <AiOutlineRight />
              </div>
            </Link>
          </div>
          <div className="flex w-full mt-4">
            <h1 className=" uppercase font-bold tracking-wider text-white">
              QUestion-Banks
            </h1>
          </div>
        </div>

        <div className="w-full px-1 flex justify-between items-center">
          <div>
            <h1>Uploaded</h1>
          </div>
          <div>
            <h2 className=" text-yellow-300">20</h2>
          </div>
        </div>
        <div className="w-full px-1 flex justify-between items-center">
          <div>
            <h1>Active</h1>
          </div>
          <div>
            <h2 className=" text-yellow-300">20</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AdminStats;
