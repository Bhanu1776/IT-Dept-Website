import { storage } from "../lib/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Button } from 'antd';
import { useEffect, useState } from "react";


const view = () => {
  const [files, setfiles] = useState([])

  useEffect(() => {
  
    const fetchURLS = async () => {
      const listRef = ref(storage, "test/");
      const list = await listAll(listRef);
      const urls = await Promise.all(
        list.items.map(async (item) => {
          const url = await getDownloadURL(item);
          console.log(url)
          return { url, name: item.name };
        })
      );
      setfiles(urls);
    };
    fetchURLS();
  }, [])
  
  return (
    <div>
      {files.map((file)=>(
        <>
        <div key={file.name}>
          <a href={file.url}>{file.name}</a>
        </div>
        </>
      ))}
    </div>
  )
}

export default view
