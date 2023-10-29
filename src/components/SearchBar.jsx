import { Input, SearchBtn } from './SearchBar.Styled';

export const SearchBar = ({ handlerSubmit }) => {
  return (
    <form onSubmit={handlerSubmit}>
      <Input type="text" name="movieName" placeholder="Search movie by name" />
      <SearchBtn type="submit">Search movie</SearchBtn>
    </form>
  );
};
