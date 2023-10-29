import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { Loader } from '../Loader/Loader';

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
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
