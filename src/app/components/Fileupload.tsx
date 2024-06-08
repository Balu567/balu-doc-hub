"use client"; // This must be the first line in the file

import { useState } from 'react';
import styles from '../../styles/FileUpload.module.css';

const FileUpload = ({ onUpload }: { onUpload: () => void }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await fetch('/api/files/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('File uploaded successfully');
      onUpload();
    } else {
      alert('File upload failed');
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <input type="file" onChange={handleFileChange} className={styles.fileInput} />
      <button onClick={handleFileUpload} className={styles.uploadButton}>Upload</button>
    </div>
  );
};

export default FileUpload;
