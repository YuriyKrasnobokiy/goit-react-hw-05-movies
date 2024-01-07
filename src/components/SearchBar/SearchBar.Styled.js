import styled from 'styled-components';

export const FormStyled = styled.form`
  position: relative;
  display: inline-block;
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 24px;
  padding: 8px 32px 8px 8px;
  color: inherit;
  background-color: transparent;
  border-radius: 5px;
  border: 1px dashed rgba(128, 0, 128, 0.8);
`;

export const SearchBtn = styled.button`
  position: absolute;
  background: none;
  border: none;
  color: inherit;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
`;
