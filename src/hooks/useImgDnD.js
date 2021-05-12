import React, { useState } from 'react';
import styled from 'styled-components';

export default function ImgDnd() {
  const [imgs, setImgs] = useState([]);

  function onFileChange(e) {
    const { files } = e.target;

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

        setImgs((prev) => prev.concat(img));
      });
    });
  }

  return (
    <Form>
      <DropZone>
        Drop image here
        <input multiple type='file' onChange={onFileChange} />
      </DropZone>
      {imgs && (
        imgs.map((img) => (
          <StyledImg src={img.src} alt={img.name} />
        ))
      )}
    </Form>
  );
}

const DropZone = styled.label`
  display: block;
  width: 500px;
  height: 500px;
  border: 1px dashed blue;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;

const Form = styled.form`
  width: 300px;
  height: 300px;
`;
