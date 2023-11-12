import {Route, Routes} from 'react-router-dom'
import {lazy} from 'react'
import Layout from '../components/Layout/Layout.jsx'

const Cast = lazy(() => import('../components/Cast/Cast.jsx'))
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'))
const Home =lazy(() => import('../pages/Home/Home.jsx'))
const MovieDetails =lazy(() => import('../pages/MovieDetails/MovieDetails.jsx'))
const Movies = lazy(() => import('../pages/Movies/Movies.jsx'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App
