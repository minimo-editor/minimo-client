import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function PhoneFrameImg({ src }) {
  return (
    <PhoneContainer>
      <PhoneHeader />
      <PhoneBody>
        <img src={src} alt='sample' />
      </PhoneBody>
      <PhoneFooter />
    </PhoneContainer>
  );
}

PhoneFrameImg.propTypes = {
  src: PropTypes.string.isRequired,
};

const PhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & div {
    border-top: 2.5px solid black;
    border-left: 2.5px solid black;
    border-right: 2.5px solid black;
    width: 300px;
  }
`;

const PhoneHeader = styled.div`
  height: 30px;
  border-radius: 25px 25px 0 0;
`;

const PhoneBody = styled.div`
  height: 30rem;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const PhoneFooter = styled.div`
  height: 30px;
  border-radius: 0 0 25px 25px;
  border-bottom: 2.5px solid black;
`;
