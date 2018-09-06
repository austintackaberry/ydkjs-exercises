import React from 'react';
import {
  Blackout,
  ModalContainer,
  ModalText,
  ModalButtonContainer,
  ModalButton,
} from './styles';

const ResetModal = props => {
  return (
    <Blackout>
      <ModalContainer>
        <ModalText>Are you sure you want to reset your score?</ModalText>
        <ModalButtonContainer>
          <ModalButton>Yes</ModalButton>
          <ModalButton>No</ModalButton>
        </ModalButtonContainer>
      </ModalContainer>
    </Blackout>
  );
};

export default ResetModal;
