import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function showModal() {
    setIsShowing(true);
  };

  function hideModal() {
    setIsShowing(false);
  };

  return {
    isShowing,
    showModal,
    hideModal
  };
};

export default useModal;