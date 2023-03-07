import React from 'react';
import { Card, TypographyProps, Button, Badge } from 'antd';

import Image from 'next/image';
import classphoto from '../public/Assets/images/TE_IT.jpg';

const LatestEvents = () => (
  <div className="2xl:mx-[150px] lg:mx-[150px]">
    <h1 className="text-4xl font-fira text-bold">Latest Events</h1>
    <div className="grid gap-10 pt-4 2xl:grid-cols-4 lg:grid-cols-2">
      <Badge.Ribbon text="NEW EVENT">
        <Card
          className="2xl:w-[375px] 2xl:h-[435px]"
          hoverable
          style={{
            boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
          }}
          cover={<Image src={classphoto} width={200} height={100} />}
        >
          <h1 className="text-xl">TE-IT Class photo</h1>
          <Button
            type="link"
            href="www.google.com"
            className="text-white bg-blue-500 mt-14"
            block=""
          >
            Event Detail
          </Button>
        </Card>
      </Badge.Ribbon>
      <Card
        className="2xl:w-[375px] 2xl:h-[435px]"
        hoverable
        style={{
          boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
        }}
        cover={<Image src={classphoto} width={200} height={100} />}
      >
        <h1 className="text-xl">TE-IT Class photo</h1>
        <Button className="text-white bg-blue-500 mt-14" block="">
          Event Detail
        </Button>
      </Card>
      <Card
        className="2xl:w-[375px] 2xl:h-[435px]"
        hoverable
        style={{
          boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
        }}
        cover={<Image src={classphoto} width={200} height={100} />}
      >
        <h1 className="text-xl">TE-IT Class photo</h1>
        <Button className="text-white bg-blue-500 mt-14" block="">
          Event Detail
        </Button>
      </Card>
      <Card
        className="2xl:w-[375px] 2xl:h-[435px]"
        hoverable
        style={{
          boxShadow: '5px 8px 20px 5px rgba(208, 216, 243, 0.6)',
        }}
        cover={<Image src={classphoto} width={200} height={100} />}
      >
        <h1 className="text-xl">TE-IT Class photo</h1>
        <Button className="text-white bg-blue-500 mt-14" block="">
          Event Detail
        </Button>
      </Card>
    </div>
  </div>
);

export default LatestEvents;
