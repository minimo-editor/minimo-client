// TODO: add track caption
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';
import useModal from '../../../hooks/useModal';
import Modal from '../../Modal';
import ConfigIcon from '../../shared/Config/Config';
import LinkForm from '../../shared/LinkForm';

const defaultVideoContents = {
  src: 'https://cdn.dribbble.com/users/361958/screenshots/15114989/media/e8d6dac6dcc7172d310b23a4df9be2bc.mp4',
};

export default function Video({
  data,
  index,
  isActive,
  resetBlockContents,
}) {
  const contents = data.contents ?? defaultVideoContents;
  const { modalOpen, setModalOpen, toggle } = useModal();

  function handleSubmitForm(updatedData) {
    resetBlockContents(index, updatedData);
    setModalOpen(false);
  }

  return (
    <>
      <VideoWrapper>
        <video
          autoPlay
          loop
          src={contents.src}
        />
      </VideoWrapper>
      {modalOpen && (
        <Modal
          handleClose={() => setModalOpen(false)}
          title='Change Video Link'
        >
          <LinkForm
            inputs={contents}
            handleSubmitForm={handleSubmitForm}
          />
        </Modal>
      )}
      {isActive && (
        <ConfigIcon onClick={toggle} />
      )}
    </>
  );
}

const VideoWrapper = styled.div`
  width: 100%;
  & video {
    width: 100%;
  }
`;
