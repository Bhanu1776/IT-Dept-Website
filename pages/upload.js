import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { storage } from "../lib/firebase";
import { uploadBytes, ref } from "firebase/storage";
import { useState } from 'react';


const upload = () => {
  const [file, setFile] = useState([]);
  const { Dragger } = Upload;
  const props = {
    name: 'file',
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        setFile(info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        // setFile(info.file);
        console.log(file);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  const handleUpload = async () => {
    if (file) {
      const name = file.name;
      const storageRef = ref(storage, `notes/${name}`);
      uploadFile = await uploadBytes(storageRef, file);

    }
  };


  const handleRemoveFile = () => setImageFile(undefined);


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
    </>
  );
}

export default upload
