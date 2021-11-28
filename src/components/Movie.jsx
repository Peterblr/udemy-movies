import React from "react";

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  return (
    <div id={imdbID} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {Poster === "N/A" ? (
          <img
            className="activator"
            src={`https://via.placeholder.com/300x500?text=${Title}`}
            alt=""
          />
        ) : (
          <img className="activator" src={Poster} alt="" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year}
          <span className="right">{Type}</span>
        </p>
      </div>
    </div>
    // <div id={imdbID} classNameName="row movie">
    //   <div classNameName="col s12 m6">
    //     <div classNameName="card">
    //       <div classNameName="card-image">
    //         <img src={Poster} />
    //         <span classNameName="card-title">{Title}</span>
    //         <a classNameName="btn-floating halfway-fab waves-effect waves-light red">
    //           <i classNameName="material-icons">add</i>
    //         </a>
    //         <p>
    //           {Year}
    //           <span classNameName="right">{Type}</span>
    //           {Type}
    //         </p>
    //       </div>
    //       <div classNameName="card-content">
    //         <p>
    //           I am a very simple card. I am good at containing small bits of
    //           information. I am convenient because I require little markup to
    //           use effectively.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Movie;
