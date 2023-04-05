import { Button } from 'antd';
import React from 'react';

const ResetPass = () => (
  <div className=" flex w-full gap-4 justify-center items-center">
    {/** Email */}
    <div className=" flex flex-col justify-between items-start">
      <Button className="mt-2 text-white bg-blue-600 tracking-wider w-full">
        Reset Password
      </Button>
    </div>
  </div>
);

export default ResetPass;
