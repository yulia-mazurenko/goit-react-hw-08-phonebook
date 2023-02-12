import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: rgba(66, 153, 225, 0.6);
  margin-right: auto;
  margin-left: auto;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 320px) {
    width: 320px;
    padding-left: 8px;
    padding-right: 8px;
  }

  @media screen and (min-width: 321px) and (max-width: 479px) {
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 600px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
    padding-left: 32px;
    padding-right: 24px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 320px) {
    width: 300px;
  }

  @media screen and (min-width: 321px) and (max-width: 479px) {
    width: 100%;
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 550px;
  }

  @media screen and (min-width: 768px) {
    width: 550px;
  }
`;
