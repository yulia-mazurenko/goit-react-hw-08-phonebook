import styled from '@emotion/styled';

export const BackDrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  background-color: rgb(190 197 203 / 88%); ;
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  width: 350px;
  height: 150px;
  top: 140px;
  right: 230px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  padding-right: 40px;
  border-radius: 10px;
  outline: 1px solid rgba(66, 153, 225, 0.6);
`;

export const NotificationButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`;
