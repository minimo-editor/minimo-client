import React, { useState } from 'react';
import styled from 'styled-components';
import * as ICON from 'react-feather';
import useModal from '../../../hooks/useModal';
import Modal from '../../Modal';
import isEmptyObject from '../../../utils/isEmptyObject';

const DEFAULT_DATA = {
  facebookLink: '',
  twitterLink: '',
  youtubeLink: '',
};

export default function Socials({
  data,
  index,
  resetBlockData,
}) {
  const links = (isEmptyObject(data)) ? DEFAULT_DATA : data;

  const {
    facebookLink,
    twitterLink,
    youtubeLink,
  } = links;

  const { modalOpen, toggle, setModalOpen } = useModal();

  function handleSubmitForm(e, updatedData) {
    e.preventDefault();
    resetBlockData(index, updatedData);
    setModalOpen(false);
  }

  return (
    <>
      <SocialsContainer>
        <SocialIcon
          target='_blank'
          bgColor='#408bdb'
          href={facebookLink}
        >
          <ICON.Facebook fill='white' />
        </SocialIcon>
        <SocialIcon
          target='_blank'
          href={twitterLink}
          bgColor='#52bfff'
        >
          <ICON.Twitter fill='white' />
        </SocialIcon>
        <SocialIcon
          target='_blank'
          href={youtubeLink}
          bgColor='#df3220'
        >
          <ICON.Youtube fill='white' />
        </SocialIcon>
      </SocialsContainer>
      <Config
        onClick={toggle}
      >
        <ICON.Settings color='grey' />
      </Config>
      {modalOpen && (
        <Modal
          handleClose={() => setModalOpen(false)}
          title='Change Social Links'
        >
          <Form
            inputs={links}
            onSubmit={handleSubmitForm}
          />
        </Modal>
      )}
    </>
  );
}

function Form({
  inputs,
  onSubmit,
}) {
  const [data, setData] = useState(inputs);

  function onChange(e) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <FormContainer
      onSubmit={(e) => onSubmit(e, data)}
    >
      {Object.entries(data).map((input) => (
        <Label>
          {input[0]}
          <input
            type='text'
            name={input[0]}
            value={input[1]}
            onChange={(e) => onChange(e)}
          />
        </Label>
      ))}
      <button type='submit'>
        SUBMIT
      </button>
    </FormContainer>
  );
}

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  & input {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
`;

const SocialsContainer = styled.div`
  position: relative;
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

const Config = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;

  &:hover {
    cursor: pointer;
  }
`;
