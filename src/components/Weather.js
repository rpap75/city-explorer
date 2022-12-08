import React from "react";

class Weather extends React.Component {
  render() {
    return (
      this.props.forecast.map((day, i) => (
        <div key={i}>
          <p>{day.weather}</p>
        </div>
      ))
    )
  }
}

export default Weather;