"use client"; // This must be the first line in the file

import styles from '../../styles/FileList.module.css';

const FileList = ({ files, onDownload }: { files: string[], onDownload: (fileName: string) => void }) => {
  return (
    <ul className={styles.fileList}>
      {files.map((file) => (
        <li key={file} className={styles.fileItem}>
          {file} <button onClick={() => onDownload(file)} className={styles.downloadButton}>Download</button>
        </li>
      ))}
    </ul>
  );
};

export default FileList;
