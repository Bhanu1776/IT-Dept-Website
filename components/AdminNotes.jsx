import { uploadBytes, ref } from 'firebase/storage';
import { Upload, Button } from 'antd';
import { FaFileUpload } from 'react-icons/fa';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { v4 } from 'uuid';
import { storage } from '../lib/firebase.jsx';

const AdminNotes = () => {
  const [showForm, setShowForm] = useState(true);
  const [year, setYear] = useState('');
  const [sem, setSem] = useState('');
  const [subject, setSubject] = useState('');

  const [isUploadDisabled, setIsUploadDisabled] = useState(true);

  /* const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  }; */

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
  const getSemesterOptions = () => {
    switch (year) {
      case 'SE':
        return ['III', 'IV'];
      case 'TE':
        return ['V', 'VI'];
      case 'BE':
        return ['VII', 'VIII'];
      default:
        return [];
    }
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
    if (event.target.value && sem && year) {
      setIsUploadDisabled(false);
    } else {
      setIsUploadDisabled(true);
    }
  };
  const getSubjectOptions = () => {
    switch (sem) {
      case 'III':
        return ['EM-III', 'DSA', 'DBMS', 'PCOM', 'PCPF'];
      case 'IV':
        return ['EM-IV', 'CNND', 'OS', 'AT', 'COA'];
      case 'V':
        return ['IP', 'CNS', 'EEB', 'SE', 'ADSA'];
      case 'VI':
        return ['DMBI', 'WEBX', 'WT', 'AI_DS-1', 'GIT'];
      case 'VII':
        return ['AI_DS-II', 'IOE', 'STQA', 'IRS', 'DMM'];
      case 'VIII':
        return ['BDA', 'IOE', 'UID', 'PM'];
      default:
        return [];
    }
  };
  const [filesup, setFiles] = useState([]);
  const fileSubmitted = filesup[0]?.name;

  const { Dragger } = Upload;
  const props = {
    name: 'file',

    onChange(info) {
      setFiles(info.fileList);
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  const handleUpload = async () => {
    try {
      // eslint-disable-next-line no-plusplus
      const file = filesup[0];
      const storageRef = ref(
        storage,
        `notes/${year}/${sem}/${subject}/${file.name + v4()}`
      );
      const uploadFile = await uploadBytes(storageRef, file);
      alert('Notes Submitted');
      console.log(`File uploaded: ${uploadFile.ref}`);
    } catch (e) {
      console.log(e);
      alert('File not Uploaded');
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
              {/** AntD File Uploader */}
              <Dragger
                {...props}
                listType="picture"
                progress={{
                  strokeColor: {
                    '0%': '#f0f',
                    '100%': '#ff0',
                  },
                  strokeWidth: 4,
                  style: { top: 12 },
                }}
                style={{ backgroundColor: '#ebf4fd' }}
              >
                <div className="flex justify-center">
                  <FaFileUpload className=" text-blue-500" size={35} />
                </div>
                <p className="px-20 font-semibold ant-upload-text">
                  Click or Drag and Drop to Upload
                </p>
              </Dragger>

              {/** File Name */}
              {/* <div className=" flex flex-col bg-gray-200 rounded-md py-1 px-2 justify-start items-start">
                <h1 className=" text-sm text-gray-700">File Name</h1>

                <input
                  className=" bg-transparent w-full outline-none border-0 appearance-none h-6 p-1"
                  id="fileName"
                  name="fileName"
                  type="text"
                  value={filesup[0]?.name}
                  readOnly
                />
              </div> */}
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
                {year && (
                  <div className="flex px-2 py-1 bg-gray-200 rounded-md flex-col w-full justify-start items-start">
                    <h1 className=" text-sm text-gray-700">
                      Select Semester<span className=" text-red-500">*</span>
                    </h1>
                    <select
                      className=" bg-transparent outline-none appearance-none border-0  h-8 p-1 w-full"
                      id="sem"
                      name="sem"
                      value={sem}
                      onChange={handleSemChange}
                    >
                      <option value="">--Select Sem--</option>
                      {getSemesterOptions().map((semesterOption) => (
                        <option key={semesterOption} value={semesterOption}>
                          {semesterOption}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {/** Subject Selection */}
                {year && sem && (
                  <div className="flex px-2 py-1 bg-gray-200 rounded-md flex-col w-full justify-start items-start">
                    <h1 className=" text-sm text-gray-700">
                      Select Subject<span className=" text-red-500">*</span>
                    </h1>
                    <select
                      className=" bg-transparent outline-none appearance-none border-0  h-8 p-1 w-full"
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={handleSubjectChange}
                    >
                      <option value="">--Select Subject--</option>
                      {getSubjectOptions().map((subjectOption) => (
                        <option key={subjectOption} value={subjectOption}>
                          {subjectOption}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              <div className="flex mt-4 w-full justify-center items-center">
                <Button
                  onClick={handleUpload}
                  disabled={!year || !sem || !subject || !fileSubmitted}
                  className={`flex py-5 uppercase text-white tracking-wider justify-center items-center ${
                    isUploadDisabled ? 'bg-blue-300' : 'bg-blue-600'
                  } w-full`}
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
