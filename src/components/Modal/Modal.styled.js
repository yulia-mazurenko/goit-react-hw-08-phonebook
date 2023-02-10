import styled from '@emotion/styled';

export const ModalBackDrop = styled.div`
  @media screen and (max-width: 479px) {
    position: fixed;
    width: 600px;
    height: 600px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  background-color: rgb(190 197 203 / 88%); ;
`;

export const Modal = styled.div`
  @media screen and (max-width: 479px) {
    position: fixed;
    top: 25%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  width: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 20px;
  border-radius: 10px;
  outline: 1px solid rgba(66, 153, 225, 0.6);
  background-color: #ffffff;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const ModalTitle = styled.h2`
  padding-top: 16px;
  padding-bottom: 8px;
  color: #3950af;
  text-align: center;
`;
