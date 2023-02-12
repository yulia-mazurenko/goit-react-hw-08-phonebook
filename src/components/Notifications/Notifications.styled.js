import styled from '@emotion/styled';

export const BackDrop = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  height: 100%;
  top: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  background-color: rgb(190 197 203 / 88%); ;
`;

export const MessageWrapper = styled.div`
  @media screen and (max-width: 320px) {
    width: 250px;
  }

  @media screen and (min-width: 321px) and (max-width: 479px) {
    width: 250px;
  }

  @media screen and (min-width: 480px) {
    width: 400px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  width: 350px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
