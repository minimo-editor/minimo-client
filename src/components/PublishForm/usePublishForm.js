import { useContext, useState } from 'react';
import { checkValidAddress, postProject } from '../../apis/project';
import { ProjectContext } from '../../contexts/ProjectContext';
import getValidText from '../../utils/getValidTexts';

export default function usePublishForm() {
  const {
    project,
    handleChangeTitle,
    updateAddress,
  } = useContext(ProjectContext);

  const { title } = project;

  const [address, setAddress] = useState('');
  const [isPublished, setIsPublished] = useState('');
  const [isAddressValid, setIsAddressValid] = useState(null);

  function handleChangeAddress(e) {
    setIsAddressValid(null);
    setAddress(getValidText(e.target.value));
  }

  async function handleClickCheckAddress() {
    const isValid = await checkValidAddress(address);
    setIsAddressValid(isValid);

    if (isValid) {
      updateAddress(address);
    }
  }

  async function handleSubmitForm(e) {
    e.preventDefault();

    if (!isAddressValid) {
      return;
    }

    try {
      const isPosted = await postProject(project);
      setIsPublished(isPosted);
    } catch (error) {
      setIsPublished(false);
    }
  }

  return {
    title,
    address,
    isPublished,
    isAddressValid,
    handleChangeTitle,
    handleSubmitForm,
    handleChangeAddress,
    handleClickCheckAddress,
  };
}
