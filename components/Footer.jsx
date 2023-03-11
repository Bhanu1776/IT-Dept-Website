import React from 'react';

const Footer = () => (
  <>
    <div className="grid md:grid-cols-3 grid-rows-1 border-red-200 border-2 gap-4">
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
    <div className="flex text-center text-xs bg-slate-100 rounded-t-full px-4 pt-1 pb-1 tablet:text-base tablet:justify-start md:px-10">
      ©{new Date().getFullYear()} Information Technology Department, Xavier's
      Institute of Engineering
    </div>
  </>
);

export default Footer;
