import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from './Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<div>Movie Cast</div>} />
              <Route path="reviews" element={<div>Movie Reviews</div>} />
            </Route>
          </Route>
        </Route>
      </Routes>

      <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="light"
      />
    </>
  );
};
