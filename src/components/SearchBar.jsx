import { Input } from './SearchBar.Styled';

export const SearchBar = ({ handlerSubmit }) => {
  return (
    <form onSubmit={handlerSubmit}>
      <Input type="text" name="movieName" placeholder="Search movie name" />
      <button type="submit">Search movie name</button>
    </form>
  );
};
