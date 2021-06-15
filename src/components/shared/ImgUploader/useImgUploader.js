import { useCallback, useEffect, useState } from 'react';
import uploadImageToS3 from '../../../apis/S3';
import useAsync from '../../../hooks/useAsync';

export default function useImgUploader(handleUpload) {
  const [imgFiles, setImgFiles] = useState([]);
  const [previewImgs, setPreviewImgs] = useState([]);

  const cachedFunction = useCallback(() => uploadImageToS3(imgFiles[0]), [imgFiles]);

  const {
    data,
    loading,
    error,
    executeAsyncFn,
  } = useAsync(cachedFunction, false);

  useEffect(() => {
    if (data) {
      handleUpload(data);
    }
  }, [data]);

  function handleClickSubmit() {
    if (imgFiles.length > 0) {
      executeAsyncFn();
    }
  }

  async function handleFileChange(e) {
    const { files } = e.target;

    setImgFiles(files);

    Object.values(files).forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener('load', () => {
        const img = {
          name: file.name,
          type: file.type,
          size: file.size,
          src: reader.result,
        };

        setPreviewImgs((prev) => prev.concat(img));
      });
    });
  }

  function handleDragEnterCapture(e) {
    e.stopPropagation();
  }

  return {
    data,
    loading,
    error,
    previewImgs,
    handleDragEnterCapture,
    handleFileChange,
    handleClickSubmit,
  };
}
