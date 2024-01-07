import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader } from '../Loader/Loader';
import {
  HeaderText,
  NavStyled,
  NavStyledLink,
  Wrapper,
} from './SharedLayout.Styled';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <header>
        <NavStyled>
          <NavStyledLink to="/">Home</NavStyledLink>
          <NavStyledLink to="/movies">Movies</NavStyledLink>
        </NavStyled>
        <HeaderText>TrailerQuest: Discover the Cinema World</HeaderText>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};
