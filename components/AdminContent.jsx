import React, { useEffect, useState } from 'react';

import SearchBox from './SearchBox';
import Uploads from './Uploads';

const AdminContent = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className={`${
        isMobile ? '' : 'h-screen'
      } flex flex-col justify-start gap-2 px-4 pt-2 py-4 overflow-y-auto`}
    >
      <SearchBox
        isMobile={isMobile}
        searchtext={searchText}
        setSearchText={setSearchText}
      />
      <div className=" bg-white flex rounded-lg p-4">
        <Uploads searchText={searchText} />
      </div>
    </div>
  );
};

export default AdminContent;
