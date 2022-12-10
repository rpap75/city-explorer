import React from "react";
import MovieDay from './MovieDay.js';

class Movie extends React.Component {
  render() {
    console.log(this.props.movieLi);
    return (
      <>
        {
          this.props.movieLi.map((data) => (
            <MovieDay
              // key={i}
              data={data}
            />
          ))
        }
      </>
    )
  }
}

export default Movie;