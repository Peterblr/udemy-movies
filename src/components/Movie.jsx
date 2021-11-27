import React from "react";

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  return (
    <div id={imdbID} className="row movie">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={Poster} />
            <span className="card-title">{Title}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </a>
            <p>
              {Year}
              <span className="right">{Type}</span>
            </p>
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
