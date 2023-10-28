import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const NavStyledLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavStyledLink to="/">Home</NavStyledLink>
          <NavStyledLink to="/movies">Movies</NavStyledLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
