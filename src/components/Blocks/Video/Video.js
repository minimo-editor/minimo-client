// TODO: add track caption
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';

const defaultVideoSrc = 'https://cdn.dribbble.com/users/361958/screenshots/15114989/media/e8d6dac6dcc7172d310b23a4df9be2bc.mp4';

export default function Video({ src = defaultVideoSrc }) {
  return (
    <VideoWrapper>
      <video
        autoPlay
        loop
        src={src}
      />
    </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
  width: 100%;
  & video {
    width: 100%;
  }
`;
