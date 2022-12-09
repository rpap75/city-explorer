import React from "react";

class Weather extends React.Component {
  render() {
    return (
      this.props.forecast.map((day, i) => (
        <div key={i}>
          <p>{day.date}</p>
          <p>{day.description}</p>
        </div>
      ))
    )
  }
}

export default Weather;