import React from 'react';
import styled from 'styled-components';
import useModal from '../../../hooks/useModal';
import Modal from '../../shared/Modal';
import ConfigIcon from '../../shared/Config/Config';
import LinkForm from '../../shared/LinkForm';

const Image = styled.img`
  width: 100%;
`;

const defaultImgContents = {
  src: 'https://i.pinimg.com/originals/55/51/4d/55514dfd272080a0f6f0e2074205aa80.jpg',
};

export default function Img({
  data,
  index,
  isActive,
  resetBlockContents,
}) {
  const { modalOpen, setModalOpen, toggle } = useModal();
  const contents = data.contents ?? defaultImgContents;

  function handleSubmitForm(updatedData) {
    resetBlockContents(index, updatedData);
    setModalOpen(false);
  }

  return (
    <>
      <Image src={contents.src} alt='img' />
      {modalOpen && (
        <Modal
          handleClose={() => setModalOpen(false)}
          title='Change Image Link'
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
