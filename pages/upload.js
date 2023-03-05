import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const upload = () => (
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
export default upload;