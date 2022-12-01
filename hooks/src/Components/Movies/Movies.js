import { useState } from "react";
import "./Movies.css";
import movies from "../../db/movies.json";
import MoviesWrappers from "./MoviesWrapper";
import MoviesMain from "./MoviesMain";
import MoviesAction from "./MoviesAction";
import Card from "./Card";

function Movies() {
  const [moviesList, setMoviesList] = useState(movies);
  const [fadeIn, setFadeIn] = useState(true);
  const changeVisibility = (filteredMovies) => {
    setFadeIn(false);
    setTimeout(() => {
      setMoviesList(filteredMovies);
      setFadeIn(true);
    }, 500);
  };

  const filterComedy = () => {
    let comedyMovies = movies.filter((movie) => {
      return movie.genre.includes("Comedy");
    });
    changeVisibility(comedyMovies);
  };
  const filterDrama = () => {
    let dramaMovies = movies.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    changeVisibility(dramaMovies);
  };
  const noFilter = () => {
    changeVisibility(movies);
  };

  return (
    <MoviesMain>
      <MoviesAction
        onFilterComedy={filterComedy}
        onFilterDrama={filterDrama}
        noFilter={noFilter}
      ></MoviesAction>
      <MoviesWrappers>
        {moviesList.map((movie) => (
          <Card key={movie.id} movie={movie} fadeIn={fadeIn} />
        ))}
      </MoviesWrappers>
    </MoviesMain>
  );
}

export default Movies;
