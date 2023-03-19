import React from 'react';
import { Collapse, Space, Text, Panel } from 'antd';

// eslint-disable-next-line camelcase
const SE_Accordian = () => (
  <div className="container">
    <Collapse
      bordered={false}
      // ghost
      expandIconPosition="right"
      defaultActiveKey={['1']}
    >
      <Panel header="How To Buy" key="1">
        <Space direction="vertical">
          <Text>Payment methods </Text>
          <Text>Order and pick up </Text>
          <Text>Order with delivery </Text>
          <Text>Shopping over the phone </Text>
          <Text>returns </Text>
        </Space>
      </Panel>
      <Panel header="Help" key="2">
        <Space direction="vertical">
          <Text>Contact </Text>
          <Text>Online Help </Text>
          <Text>Our Commitments </Text>
          <Text>Give feedback </Text>
        </Space>
      </Panel>
      <Panel header="Services" key="3">
        <Space direction="vertical">
          <Text>Transport</Text>
          <Text>Design service </Text>
          <Text>Paint an plaster mixing service </Text>
          <Text>Dimensioning and assemly service </Text>
          <Text>Return of used equipment</Text>
          <Text>Additional services</Text>
        </Space>
      </Panel>
      <Panel header="About" key="4">
        <Space direction="vertical">
          <Text>About us</Text>
          <Text>Press Office </Text>
          <Text>For suppliers </Text>
          <Text>Regulations </Text>
          <Text>Privacy Policy</Text>
          <Text>Personal Data Request</Text>
        </Space>
      </Panel>
    </Collapse>
  </div>
);

// eslint-disable-next-line camelcase
export default SE_Accordian;
