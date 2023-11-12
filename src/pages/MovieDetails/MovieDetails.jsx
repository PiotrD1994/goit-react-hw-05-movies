import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { movieIDFetch } from "../../API/Api.jsx";
import Loader from '../../components/Loader/Loader.jsx';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("Fetching movie details for movieId:", movieId);
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const detailMovie = await movieIDFetch(movieId);
        console.log("Detail Movie:", detailMovie);
        setMovieInfo(detailMovie);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieInfo) {
    return (
      <div>
        {loading && <Loader />}
        <p>Loading...</p>
      </div>
    );
  }

  const { title, release_date, popularity, overview, genres, poster_path, original_title } = movieInfo;

  return (
    <div>
      <Link to={location.state?.from ?? '/'}><button type="button">Return</button></Link>
      {loading && <Loader />}
      <div>
        <img
          width="300px"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
          }
          alt={original_title}
        />
      </div>
      <div>
        <h1>
          {title} ({release_date.slice(0, 4)})
        </h1>
        <p>User score: {popularity}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetails;