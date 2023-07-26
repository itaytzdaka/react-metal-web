import React from 'react';
import { StyledMenuButton } from './styled/menu-button.styled';

const CloseWindowButton = () => {
  const handleCloseWindow = () => {
    window.close();
  };

  return (
    <StyledMenuButton onClick={handleCloseWindow}>
      יציאה
    </StyledMenuButton>
  );
};

export default CloseWindowButton;