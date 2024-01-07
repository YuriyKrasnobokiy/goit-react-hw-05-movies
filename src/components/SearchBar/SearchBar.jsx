import { FormStyled, Input, SearchBtn, Wrapper } from './SearchBar.Styled';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = ({ handlerSubmit }) => {
  return (
    <Wrapper>
      <FormStyled onSubmit={handlerSubmit}>
        <Input
          type="text"
          name="movieName"
          placeholder="Search movie by name"
        />
        <SearchBtn type="submit">
          <FaSearch />
        </SearchBtn>
      </FormStyled>
    </Wrapper>
  );
};
