import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export const Wrapper = styled(Box)`
  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  &.active {
    text-decoration: underline;
  }
`;
