import React from 'react';
import styled from 'styled-components';
import * as ICON from 'react-feather';

export default function Socials({
  data,
  index,
  onChange,
}) {
  const { facebookLink, twitterLink, youtubeLink } = data;
  return (
    <SocialsContainer>
      <SocialIcon
        target='_blank'
        bgColor='#408bdb'
        href={facebookLink || 'https://www.facebook.com/'}
      >
        <ICON.Facebook fill='white' />
      </SocialIcon>
      <SocialIcon
        target='_blank'
        href={twitterLink || 'https://twitter.com/?lang=en'}
        bgColor='#52bfff'
      >
        <ICON.Twitter fill='white' />
      </SocialIcon>
      <SocialIcon
        target='_blank'
        href={youtubeLink || 'https://youtube.com/?lang=en'}
        bgColor='#df3220'
      >
        <ICON.Youtube fill='white' />
      </SocialIcon>
    </SocialsContainer>
  );
}

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  margin: auto;
`;

const SocialIcon = styled.a`
  background: ${({ bgColor }) => bgColor ?? 'white'};
  border-radius: 50%;
  padding: 1rem;
  line-height: 0;
  cursor: pointer;
`;
