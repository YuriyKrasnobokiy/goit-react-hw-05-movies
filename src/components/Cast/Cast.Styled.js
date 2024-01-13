import styled from 'styled-components';

export const CastWrap = styled.div`
  padding: 10px 0 0;
`;

export const CastTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
`;

export const CastLi = styled.li`
  width: 200px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
