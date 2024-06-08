"use client";

import { useState } from 'react';
import Layout from './layout';
import FileUpload from './components/Fileupload';
import FileList from './components/FileList';
import useFetchFiles from './hooks/useFetchFiles';

export default function Home() {
  const files = useFetchFiles();
  const [update, setUpdate] = useState(false);

  const handleFileDownload = (fileName: string) => {
    window.location.href = `/api/files/download?file=${fileName}`;
  };

  const handleUpload = () => {
    setUpdate(!update);
  };

  return (
    <Layout>
      <h1>File Upload and Download</h1>
      <FileUpload onUpload={handleUpload} />
      <h2>Uploaded Files</h2>
      <FileList files={files} onDownload={handleFileDownload} />
    </Layout>
  );
}
