import React from "react";
import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {
  render() {
    return (
      <>
        {
          this.props.forecast.map((day, i) => (
            <WeatherDay
              key={i}
              day={day}
            />
          ))
        }
      </>
    )
  }
}

export default Weather;