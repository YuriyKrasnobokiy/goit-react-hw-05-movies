import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  padding: 10px 0 0;
`;

export const ReviewTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const ReviewsLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
