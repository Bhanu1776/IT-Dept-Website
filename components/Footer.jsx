import React from 'react';

const Footer = () => (
  <>
    <div className="grid grid-rows-1 gap-4 border-2 border-red-200 md:grid-cols-3">
      <div className="border-2 border-green-500">
        <h1>Information Technology</h1>
        <p>Logo</p>
        <p>With all details</p>
      </div>
      <div className="border-2 border-blue-600">
        <h1>Short Links</h1>
        <p>Sem 3</p>
        <p>Sem 4</p>
        <p>Sem 5</p>
        <p>Sem 6</p>
        <p>Sem 7</p>
        <p>Sem 8</p>
      </div>
      <div className="border-2 border-yellow-500">
        <h1>Extra Stuff</h1>
      </div>
    </div>
    <div className="flex px-4 pt-1 pb-1 text-xs text-center rounded-t-full bg-slate-100 tablet:text-base tablet:justify-start md:px-10">
      ©{new Date().getFullYear()} Information Technology Department, Xavier's
      Institute of Engineering
    </div>
  </>
);

export default Footer;
