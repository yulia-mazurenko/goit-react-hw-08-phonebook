import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: rgba(66, 153, 225, 0.6);
  margin-right: auto;
  margin-left: auto;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 479px) {
    width: 100%;
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 600px;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 479px) {
    width: 100%;
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    max-width: 600px;
  }

  @media screen and (min-width: 768px) {
    /* width: 600px; */
  }

  max-width: 600px;
`;
