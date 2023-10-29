import styled from 'styled-components';

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MovieListLi = styled.li`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;
