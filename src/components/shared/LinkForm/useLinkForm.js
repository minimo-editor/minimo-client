import { useState } from 'react';

export default function useLinkForm(inputs, handleSubmitForm) {
  const [data, setData] = useState(inputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitForm(data);
  }

  return {
    data,
    handleSubmit,
    handleChange,
  };
}
