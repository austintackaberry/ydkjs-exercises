import styled from 'styled-components';

export const Blackout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 19;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
  padding: 30px 0;
  background-color: white;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalText = styled.div`
  posistion: relative;
  text-align: center;
  margin-top: 10px;
  font-size: 1em;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButton = styled.button`
  margin: 10px;
  background-color: lightgrey;
  border: none;
  padding: 0.5rem 1.5rem;
`;
