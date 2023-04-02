import React from 'react';
import { Collapse, Divider, Space, Text } from 'antd';

const SEAccordian = () => {
  const { Panel } = Collapse;

  return (
    <div className="mx-4 my-8 md:mx-24 md:my-16">
      <Collapse
        defaultActiveKey={['1']}
        expandIconPosition="end"
        className="shadow-xl bg-sky-200"
      >
        <Panel header="&nbsp;&nbsp;SEM 7" key="1" className="text-lg font-bold">
          <h5 className="px-4 text-base font-normal cursor-pointer">
            Syllabus
          </h5>
          <Divider />
          <h5 className="px-4 text-base font-normal cursor-pointer">
            TimeTable
          </h5>
          <Divider />
          <h5 className="px-4 text-base font-normal cursor-pointer">Notes</h5>
          <Divider />
          <h5 className="px-4 text-base font-normal cursor-pointer">QB</h5>
        </Panel>
      </Collapse>
      <br />
      <Collapse
        expandIconPosition="end"
        className="text-[#353535] bg-sky-200 shadow-xl "
      >
        <Panel header="&nbsp;&nbsp;SEM 8" key="2" className="text-lg font-bold">
          <h5 className="px-4 text-base font-normal cursor-pointer">
            Syllabus
          </h5>
          <Divider />
          <h5 className="px-4 text-base font-normal cursor-pointer">
            TimeTable
          </h5>
          <Divider />
          <h5 className="px-4 text-base font-normal cursor-pointer">Notes</h5>
          <Divider />
          <h5 className="px-4 text-base font-normal cursor-pointer">QB</h5>
        </Panel>
      </Collapse>
    </div>
  );
};

export default SEAccordian;
