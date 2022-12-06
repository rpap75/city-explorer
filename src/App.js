import React from 'react';
import Form from './components/Form';
import axios from 'axios';
import LocationDisplay from './components/LocationDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display_name: '',
      locationSearch: '',
      latitude: '',
      longitude: '',
    }
  }

  handleLocationSearch = async (e) => {
    e.preventDefault();
    await this.setState({
      locationSearch: e.target.search.value

    })
    let locationUrl = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.locationSearch}&format=json`

    let locationResponse = await axios.get(locationUrl)

    console.log(locationResponse);

    let city = locationResponse.data[0]
    this.setState({
      display_name: city.display_name,
      latitude: city.lat,
      longitude: city.lon,
    })
  }

  render() {
    return (
      <div className="App" >
        <Form handleSubmit={this.handleLocationSearch} />
        <LocationDisplay
          name={this.state.display_name}
          lon={this.state.longitude}
          lat={this.state.latitude}
        />
      </div>
    );
  }
}


export default App;
