import React from "react";
import Movie from "./Movie";

function MovieList(props) {
  const { movies } = props;
  return (
    <div className="movies">
      {movies.map((index) => (
        <Movie key={index.imdbID} {...index} />
      ))}
    </div>
  );
}

export default MovieList;
