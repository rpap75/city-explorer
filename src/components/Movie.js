import React from "react";

class Movie extends React.Component {
  render() {
    return (
      this.props.movieLi.map((movieList, i) => (
        <div key={i}>
          <p>{movieList.movie}</p>
        </div>
      ))
    )
  }
}

export default Movie;