import React from 'react';
import { StyledMenuButton } from './menu-button.styled';

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