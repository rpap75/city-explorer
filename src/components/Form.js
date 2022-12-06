import React from "react";

class Form extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>Search For A Location</label>
          <input type="text" name="search" placeholder="Enter City Name Here" />
          <button type="submit">Explore!</button>
        </form>
      </div>
    )
  }
}




export default Form;