import React from "react";

class LocationDisplay extends React.Component {
  render() {
    return (
      <>
        <p>
          {this.props.name}
          {this.props.lat}
          {this.props.lon}
        </p>
        <img alt="location" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=14`}
        />
      </>
    )
  }
}

export default LocationDisplay;