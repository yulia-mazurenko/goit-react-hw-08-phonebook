import { Card } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const WrapperCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

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
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);

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
