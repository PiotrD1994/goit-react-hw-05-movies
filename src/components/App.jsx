import {Route, Routes} from 'react-router-dom'
import {lazy} from 'react'
import {Layout} from '../components/Layout/Layout.jsx'

const Cast = lazy(() => import('../components/Cast/Cast.jsx'))
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'))
const Home =lazy(() => import('../pages/Home/Home'))
const MovieDetails =lazy(() => import('..pages/MovieDetails/MovieDetails'))
const Movies = lazy(() => import('../pages/Movies/Movies'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App
