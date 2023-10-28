import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';
import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

import { Movies } from 'pages/Movies';

const NavStyledLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavStyledLink to="/">Home</NavStyledLink>
          <NavStyledLink to="/movies">Movies</NavStyledLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />}>
          {/* <Route index element={<SearchBar />} /> */}
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
