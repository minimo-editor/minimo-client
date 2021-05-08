import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;

const defaultImgSrc = 'https://i.pinimg.com/originals/55/51/4d/55514dfd272080a0f6f0e2074205aa80.jpg';

export default function Img({ data }) {
  return (
    <Image src={data.src ?? defaultImgSrc} alt='img' />
  );
}
