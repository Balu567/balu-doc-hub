"use client"; // This must be the first line in the file

import { useState, useEffect } from 'react';

const useFetchFiles = () => {
  const [fileList, setFileList] = useState<string[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/files/list');
      const data = await response.json();
      setFileList(data.files);
    };

    fetchFiles();
  }, []);

  return fileList;
};

export default useFetchFiles;
