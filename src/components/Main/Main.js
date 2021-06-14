import React from 'react';
import styled from 'styled-components';
import PhoneFrameImg from '../shared/PhoneFrameImg';

export default function Main() {
  return (
    <Container>
      <MainText>
        Bring your ideas to life
      </MainText>
      <ExamplesContainer>
        <PhoneFrameImg
          src='https://api2.projector.com/v2/image/3c86df9c-2efb-4064-9901-ccffec67888d?width=1024'
        />
        <PhoneFrameImg
          src='/assets/sample2.png'
        />
        <PhoneFrameImg
          src='https://api2.projector.com/v2/image/66a1e182-de70-4761-9d0d-3459d5b95704?width=1024'
        />
        <PhoneFrameImg
          src='/assets/sample1.png'
        />
      </ExamplesContainer>
    </Container>
  );
}

const MainText = styled.div`
  margin-top: 7rem;
  width: 100%;
  text-align: center;
  font-family: Scto, Arial, sans-serif;
  font-weight: 300;
  font-size: calc(30px + 2.5vw);
  line-height: 88px;
  letter-spacing: -6px;
  color: rgb(255, 255, 255);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: rgb(15, 65, 59);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ExamplesContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 7rem;

  & div {
    width: 90%;
    min-width: 180px;
  }

  @media (max-width: 950px) {
    & div {
      margin-left: .5rem;
      margin-right: .5rem;
    }
  }
`;
