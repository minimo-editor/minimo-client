import React from 'react';
import useModal from '../../../hooks/useModal';
import ImgUploader from '../../shared/ImgUploader';
import Modal from '../../shared/Modal';

export default function ImgFile({
  data,
  index,
  isActive,
}) {
  const { modalOpen, setModalOpen, toggle } = useModal();
  const contents = data.contents ?? defaultImgContents;

  function handleSubmitForm(updatedData) {
    resetBlockContents(index, updatedData);
    setModalOpen(false);
  }

  return (
    <>
      <ImgUploader src={contents.src} alt='img' />
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
