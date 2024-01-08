import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  padding: 20px 20px;
`;

export const NavStyled = styled.nav`
  margin-bottom: 20px;
`;

export const NavStyledLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 400;
  color: inherit;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.25, 0.1, 0.25, 1);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: rgba(128, 0, 128, 0.8);
  }

  &:focus {
    color: rgba(128, 0, 128, 0.8);
  }

  &.active {
    color: rgba(128, 0, 128, 0.8);
  }
`;

export const HeaderText = styled.h1`
  font-size: 44px;
  color: #131415;
  text-shadow: 2px 2px 4px rgba(128, 0, 128, 0.8),
    -2px -2px 4px rgba(128, 0, 128, 0.8), 2px -2px 4px rgba(128, 0, 128, 0.8),
    -2px 2px 4px rgba(128, 0, 128, 0.8);
  text-align: center;
`;
