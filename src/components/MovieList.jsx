import React from "react";
import Movie from "./Movie";

function MovieList(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((index) => <Movie key={index.imdbID} {...index} />)
      ) : (
        <h3>Nothing Found </h3>
      )}
    </div>
  );
}

export default MovieList;
