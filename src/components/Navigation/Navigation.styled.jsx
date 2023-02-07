import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  &.active {
    text-decoration: underline;
  }
`;
