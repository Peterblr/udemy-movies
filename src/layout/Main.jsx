import React, { Component } from "react";
import MovieList from "../components/MovieList";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=649e39bd&s=matrix").then((response) =>
      response.json().then((data) => this.setState({ movies: data.Search }))
    );
  }

  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        {movies.length ? (
          <MovieList movies={this.state.movies} />
        ) : (
          <h3>Loading...</h3>
        )}
      </main>
    );
  }
}

export default Main;
