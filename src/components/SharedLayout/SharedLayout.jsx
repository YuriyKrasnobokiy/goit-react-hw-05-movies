import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { Loader } from '../Loader/Loader';
import { HeaderText, Wrapper } from './SharedLayout.Styled';

const NavStyledLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {
  return (
    <Wrapper>
      <header>
        <HeaderText>TrailerQuest: Відкрийте Світ Кіно</HeaderText>
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
    </Wrapper>
  );
};
