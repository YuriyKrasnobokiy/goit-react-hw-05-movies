import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
`;

export const BackLinkStyled = styled(Link)`
  display: flex;
  font-size: 16px;
  color: inherit;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    color: rgba(128, 0, 128, 0.8);
  }

  &:focus {
    color: rgba(128, 0, 128, 0.8);
  }
`;

export const MovieWrap = styled.div`
  display: flex;
  /* justify-content: center; */
  padding: 20px 0;
`;

export const DetailsWrapper = styled.div`
  padding: 20px;
`;

export const DetailsTextWrapper = styled.div`
  margin-bottom: 20px;
`;

export const DetailsUlStyled = styled.ul`
  display: flex;
`;

export const DetailsLiStyled = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const DetailsLinkStyled = styled(Link)`
  font-size: 16px;
  color: inherit;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    color: rgba(128, 0, 128, 0.8);
  }

  &:focus {
    color: rgba(128, 0, 128, 0.8);
  }
`;
