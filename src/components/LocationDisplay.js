import React from "react";

class LocationDisplay extends React.Component {
  render() {
    return (
      <p>{
        this.props.name}
        {this.props.lat}
        {this.props.lon}
      </p>
    )
  }

}

export default LocationDisplay;