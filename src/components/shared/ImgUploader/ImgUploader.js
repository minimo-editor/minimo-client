import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { OkButton } from '../StyledButton';
import uploadImageToS3 from '../../../apis/S3';
import useAsync from '../../../hooks/useAsync';

export default function ImgUploader({ handleUpload, handleClose }) {
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

  async function onFileChange(e) {
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

  function onDragEnterCapture(e) {
    e.stopPropagation();
  }

  return (
    <ImgUploaderContainer>
      <DropZone>
        <PlaceHolder>DRAG & DROP IMAGE HERE</PlaceHolder>
        <input
          type='file'
          onChangeCapture={onFileChange}
          onDragEnterCapture={onDragEnterCapture}
          accept='image/x-png, image/jpeg, image/gif'
        />
      </DropZone>
      <PreviewImgContainer>
        {previewImgs && (
          previewImgs.map((img) => (
            <PreviewImg src={img.src} alt={img.name} />
          ))
        )}
      </PreviewImgContainer>
      {error && 'error occured! please try again.'}
      {!data && (
        <OkButton onClick={handleClickSubmit}>
          {loading ? 'UPLOADING...' : 'CONFIRM'}
        </OkButton>
      )}
      {data && (
        <OkButton onClick={handleClose}>
          {loading ? 'UPLOADING...' : 'CLOSE'}
        </OkButton>
      )}
    </ImgUploaderContainer>
  );
}

ImgUploader.propTypes = {
  handleUpload: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const PlaceHolder = styled.p`
  margin: 0;
  position: absolute;
  width: 100%;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  color: #bfbdbd;
  font-size: 1.5rem;
  font-weight: bolder;
  text-align: center;
`;

const ImgUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: rgba(255,255,255,1);
  padding: 12px 12px;
  border: 1px solid rgb(243, 243, 243);
  box-shadow: 4px 17px 20px 0px rgb(0 0 0 / 8%);
  box-sizing: border-box;
`;

const DropZone = styled.label`
  display: block;
  position: relative;
  width: 100%;
  height: 200px;
  border: 0.3rem dashed #bfbdbd;

  & input {
    width: 100%;
    height: 100%;
  }

  & ::-webkit-file-upload-button {
    display: none;
  }
`;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PreviewImgContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-rows: 100px;
  margin-top: 1rem;
  gap: 10px;
  overflow-x: scroll;
`;
