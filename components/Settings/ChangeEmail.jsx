import { Button } from 'antd';
import React from 'react';

const ChangeEmail = () => (
  <div className=" flex w-full gap-4 justify-center items-center">
    {/** Email */}
    <div className=" flex flex-col justify-between items-start">
      <div>
        <h1 className=" text-gray-500">Email Address</h1>
      </div>
      <div className=" flex w-full">
        <input
          className=" rounded-md p-1 bg-blue-50 border-gray-300"
          type="text"
          readOnly
          value="mrunalvaidya0715@gmail.com"
        />
      </div>
      <Button className="mt-2 text-white bg-blue-600 tracking-wider w-full">
        Change Email
      </Button>
    </div>
  </div>
);

export default ChangeEmail;
