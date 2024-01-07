import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieListWrapper = styled.div`
  padding: 20px;
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-items: center;
`;

export const MovieListLi = styled.li`
  width: 200px;
  border: transparent;
  /* padding: 10px; */
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MovieListLink = styled(Link)`
  text-decoration: none;
  color: aliceblue;
  transition: color 250ms cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    color: #6a046a;
  }
`;
