import styled from '@emotion/styled';

export const Header = styled.header`
  background-image: radial-gradient(
    at center,
    rgba(66, 153, 225, 0.6) 10%,
    rgb(17 104 124 / 94%) 20%,
    rgba(66, 153, 225, 0.6) 30%,
    rgb(17 104 124 / 94%) 40%,
    rgba(66, 153, 225, 0.6) 50%,
    rgb(17 104 124 / 94%) 60%,
    rgba(66, 153, 225, 0.6) 70%,
    rgb(17 104 124 / 94%) 80%,
    rgba(66, 153, 225, 0.6) 90%,
    rgb(17 104 124 / 94%)
  );

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
