import { Button } from 'antd';

import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaFileUpload } from 'react-icons/fa';

const AdminNotes = () => {
  const [showForm, setShowForm] = useState(false);
  const [year, setYear] = useState('');
  const [sem, setSem] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isUploadDisabled, setIsUploadDisabled] = useState(true);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setSem('');
    if (event.target.value && sem) {
      setIsUploadDisabled(false);
    } else {
      setIsUploadDisabled(true);
    }
  };

  const handleSemChange = (event) => {
    setSem(event.target.value);
    if (event.target.value && year) {
      setIsUploadDisabled(false);
    } else {
      setIsUploadDisabled(true);
    }
  };
  return (
    <div className="p-2 bg-white flex flex-col w-full justify-start items-center">
      <div className="flex w-full justify-end items-center">
        <Button
          onClick={() => setShowForm(!showForm)}
          className="flex bg-blue-600 py-5 text-white tracking-wider gap-1 justify-center items-center"
        >
          <AiOutlinePlus
            className={`${showForm ? 'rotate-45' : 'rotate-0'}`}
            size={20}
          />
          Upload Notes
        </Button>
      </div>
      {showForm ? (
        <div className=" flex flex-col w-full justify-start items-center">
          {/** Form starts */}
          <div className=" p-4 flex flex-col justify-between items-center rounded-lg bg-white border-[1px] shadow-sm m-2">
            <form className="flex flex-col gap-2" action="">
              {/** File Selection */}
              <div className=" bg-blue-100 flex flex-col gap-2 w-full py-10 justify-center items-center border-dashed border-2 border-red-400 rounded-lg">
                <div className=" p-2 bg-blue-200 rounded-md">
                  <FaFileUpload className=" text-blue-400" size={30} />
                </div>
                <div className="flex w-full flex-col justify-center gap-1 items-center px-4">
                  <h1>Drag or drop Files, or </h1>
                  <div>
                    <input
                      className="flex w-full"
                      id="file"
                      name="file"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              {/** File Name */}
              <div className=" flex flex-col bg-gray-200 rounded-md py-1 px-2 justify-start items-start">
                <h1 className=" text-sm text-gray-700">File Name</h1>
                <input
                  className=" bg-transparent w-full outline-none border-0 appearance-none h-6 p-1"
                  id="fileName"
                  name="fileName"
                  type="text"
                  value={fileName}
                  readOnly
                />
              </div>
              {/** Year Selection */}
              <div className=" flex flex-col gap-2 items-center justify-between">
                <div className="flex px-2 py-1 bg-gray-200 rounded-md flex-col w-full justify-start items-start">
                  <h1 className=" text-sm text-gray-700">
                    Select Year<span className=" text-red-500">*</span>
                  </h1>
                  <select
                    className=" bg-transparent outline-none appearance-none border-0  h-8 p-1 w-full"
                    id="year"
                    name="year"
                    value={year}
                    onChange={handleYearChange}
                  >
                    <option value="">-- Select year --</option>
                    <option value="SE">SE</option>
                    <option value="TE">TE</option>
                    <option value="BE">BE</option>
                  </select>
                </div>
                {/** Sem Selection */}
                {year === 'SE' && (
                  <div className="flex px-2 py-1 bg-gray-200 rounded-md flex-col w-full justify-start items-start">
                    <h1 className=" text-sm text-gray-700">
                      Select SEM<span className=" text-red-500">*</span>
                    </h1>
                    <select
                      className=" bg-transparent outline-none appearance-none border-0  h-8 p-1 w-full"
                      id="sem"
                      name="sem"
                      value={sem}
                      onChange={handleSemChange}
                    >
                      <option value="">-- Select SEM --</option>
                      <option value="III">III</option>
                      <option value="IV">IV</option>
                    </select>
                  </div>
                )}
                {year === 'TE' && (
                  <div className="flex px-2 py-1 bg-gray-200 rounded-md flex-col w-full justify-start items-start">
                    <h1 className=" text-sm text-gray-700">
                      Select SEM<span className=" text-red-500">*</span>
                    </h1>
                    <select
                      className=" bg-transparent outline-none appearance-none border-0  h-8 p-1 w-full"
                      id="sem"
                      name="sem"
                      value={sem}
                      onChange={handleSemChange}
                    >
                      <option value="">-- Select SEM --</option>
                      <option value="V">V</option>
                      <option value="VI">VI</option>
                    </select>
                  </div>
                )}
                {year === 'BE' && (
                  <div className="flex px-2 py-1 bg-gray-200 rounded-md flex-col w-full justify-start items-start">
                    <h1 className=" text-sm text-gray-700">
                      Select SEM<span className=" text-red-500">*</span>
                    </h1>
                    <select
                      className=" bg-transparent outline-none appearance-none border-0  h-8 p-1 w-full"
                      id="sem"
                      name="sem"
                      value={sem}
                      onChange={handleSemChange}
                    >
                      <option value="">-- Select SEM --</option>
                      <option value="VII">VII</option>
                      <option value="VIII">VIII</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="flex mt-4 w-full justify-center items-center">
                <Button
                  onClick={() => alert('Submitted')}
                  disabled={!year || !sem || !file}
                  className="flex py-5 uppercase text-white tracking-wider justify-center items-center bg-blue-600 w-full"
                >
                  Upload
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      <div className=" flex w-full justify-start items-center">
        <h1>Uploaded Notes</h1>
      </div>
    </div>
  );
};

export default AdminNotes;
