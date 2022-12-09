import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <>
        {this.props.movieLi.map((movie, i) => (
          <div key={i}>
            <p>{movie.movie.title}</p>
          </div>
        ))
        }
      </>
    )
  }
}

export default Movie;