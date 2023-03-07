import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
import { storage } from "../lib/firebase";
import { uploadBytes, ref } from "firebase/storage";
import { useState } from 'react';


const upload = () => {
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
      for (let i = 0; i < filesup.length; i++) {
        const file = filesup[i];
        const storageRef = ref(storage, `test/${file.name}`);
        const uploadFile = await uploadBytes(storageRef, file);
        console.log("File uploaded: " + uploadFile.ref)

      }


    } catch (e) {
      console.log(e)
      alert("File not Uploaded")
    }
  }


  return (
    <>
      <div className='grid h-full place-content-center'>
        <Dragger {...props} listType='picture' progress={{
          strokeColor: {
            "0%": "#f0f",
            "100%": "#ff0"
          }, strokeWidth: 4,
          style: { top: 12 }
        }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or Drag and Drop to Upload</p>
        </Dragger>
      </div>
      <Button onClick={handleUpload}>Upload</Button>
    </>
  );
}

export default upload