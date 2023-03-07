import React from 'react';
import { Button } from 'antd';

const Home = () => (
  <>
    <div className="text-red-800">Home</div>
    <Button type="primary">Primary Button</Button>
  </>
);
import React from "react";
import Homepage from "./homepage";
const Home = () => {
  return (
    <>
      <Homepage />
    </>
  );
};

export default Home;
