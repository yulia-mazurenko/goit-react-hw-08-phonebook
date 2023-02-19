import { Card } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const WrapperCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* box-shadow: 0px 4px 1px rgba(66, 153, 225, 0.6); */
  box-shadow: 0px 17px 24px 5px rgba(66, 153, 225, 0.6);
  -webkit-box-shadow: 0px 17px 24px 5px rgba(66, 153, 225, 0.6);
  -moz-box-shadow: 0px 17px 24px 5px rgba(66, 153, 225, 0.6);

  @media screen and (max-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 321px) and (max-width: 479px) {
    width: 100%;
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 600px;
  }
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const WrapperContactsCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 17px 24px 5px rgba(66, 153, 225, 0.6);
  -webkit-box-shadow: 0px 17px 24px 5px rgba(66, 153, 225, 0.6);
  -moz-box-shadow: 0px 17px 24px 5px rgba(66, 153, 225, 0.6);

  @media screen and (max-width: 320px) {
    flex-direction: column;
    width: 320px;
  }
  @media screen and (min-width: 321px) and (max-width: 479px) {
    flex-direction: column;
    width: 100%;
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 600px;
  }
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const Delimiter = styled.hr`
  border: 1px solid rgba(66, 153, 225, 0.6);
  @media screen and (max-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 321px) and (max-width: 479px) {
    width: 100%;
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 600px;
  }
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;
