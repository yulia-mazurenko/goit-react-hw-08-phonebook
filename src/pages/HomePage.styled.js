import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 320px) {
    width: 320px;
    height: 400px;
  }
  @media screen and (min-width: 321px) and (max-width: 479px) {
    width: 100%;
    height: 400px;
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 600px;
  }
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const Title = styled.b`
  font-size: 32px;
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;

  @media screen and (max-width: 479px) {
    font-size: 24px;
  }
`;
