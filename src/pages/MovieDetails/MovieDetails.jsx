import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { movieIDFetch } from "../../API/Api.jsx";
import Loader from '../../components/Loader/Loader.jsx';
import css from './MovieDetails.module.css'

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
    <div className={css.container}>
      <Link to={location.state?.from ?? '/'}><button type="button">Return</button></Link>
      {loading && <Loader />}
      <div className={css.container}>
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
      <div className={css.container}>
        <h1 className={css.title}>
          {title} ({release_date.slice(0, 4)})
        </h1>
        <p className={css.text}>User score: {popularity}</p>
        <h2>Overview</h2>
        <p className={css.text}>{overview}</p>
        <h2 className={css.header2}>Genres</h2>
        <ul className={css.list}>
          {genres.map((genre) => (
            <li className={css.item} key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <hr />
      <h3 className={css.header3}>Additional information</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <Link to="cast">Cast</Link>
        </li>
        <li className={css.item}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetails;