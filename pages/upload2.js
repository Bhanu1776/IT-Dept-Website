import { useState } from 'react';
import Image from 'next/image';
import { uploadBytes, ref } from 'firebase/storage';
import { message, Upload, Button, Row, Col, Card } from 'antd';
import { storage } from '../lib/firebase.jsx';
import Folder from '../public/assets/images/Folder.png';

const FileUpload = () => {
  const [filesup, setFiles] = useState([]);
  const { Dragger } = Upload;
  const props = {
    name: 'file',
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        console.log(filesup);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
      setFiles(info.fileList);
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const handleUpload = async () => {
    try {
      // const name = filesup.name
      // Array.from(filesup).forEach(async (file) => {
      //     const storageRef = ref(storage, `test/${name}`);
      //     const uploadFile = await uploadBytes(storageRef, file);
      //     console.log("File uploaded: " + uploadFile.ref)

      // });
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < filesup.length; i++) {
        const file = filesup[i];
        const storageRef = ref(storage, `test/${file.name}`);
        const uploadFile = await uploadBytes(storageRef, file);
        console.log(`File uploaded: ${uploadFile.ref}`);
      }
    } catch (e) {
      console.log(e);
      alert('File not Uploaded');
    }
  };

  return (
    // <div >
    <Row
      className="grid items-center justify-items-center bg-gradient-to-b from-[#D6E4F3] to-[#abcaf1]"
      style={{
        margin: 0,
        height: '100vh',
        width: '100%',
      }}
    >
      <Col span={24} className="h-full">
        <Row className="my-[50%] drop-shadow-xl">
          <Col span={24}>
            <Card>
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
                <p className=" ant-upload-drag-icon">
                  <Image src={Folder} alt="folder" height={80} width={80} />
                </p>
                <p className="px-20 font-semibold ant-upload-text">
                  Click or Drag and Drop to Upload
                </p>
              </Dragger>
              <Button
                onClick={handleUpload}
                className="w-full mt-2 font-medium"
              >
                Upload
              </Button>
            </Card>
            {/* <Button onClick={handleRemoveFile}>Remove</Button> */}
          </Col>
        </Row>
      </Col>
    </Row>
    // </div>
  );
};

export default FileUpload;
