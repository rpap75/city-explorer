import React from 'react';
import Form from './components/Form';
import axios from 'axios';
import LocationDisplay from './components/LocationDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import Weather from './components/Weather';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display_name: '',
      locationSearch: '',
      latitude: '',
      longitude: '',
      errorMsg: '',
      displayError: false,
      mapDisplay: false,
      weatherData: [],
    }
  }

  handleError = () => {
    this.setState({ errorMsg: null });
  }

  handleLocationSearch = async (e) => {
    e.preventDefault();

    try {

      await this.setState({
        locationSearch: e.target.search.value
      })
      let locationUrl = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.locationSearch}&format=json`;

      let locationResponse = await axios.get(locationUrl)

      console.log(locationResponse);

      let city = locationResponse.data[0]
      this.setState({
        display_name: city.display_name,
        latitude: city.lat,
        longitude: city.lon,
        mapDisplay: true,
        displayError: false,
      })
    } catch (error) {
      this.setState({
        errorMsg: error.response.status + ' : ' + error.response.data,
        mapDisplay: false,
        displayError: true,
      })
    }

  }

  handleWeatherSearch = async (lat, lon) => {
    try {

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/weather?searchQuery=${this.state.location}&lat=${lat}&lon=${lon}`);

      this.setState({
        forecastData: response.data,
      })
    }
    catch (err) {
      this.setState({ error: err.response.data });
    }
  };


  render() {
    return (
      <div className="App" >
        <Form handleSubmit={this.handleLocationSearch} />
        <LocationDisplay
          name={this.state.display_name}
          lon={this.state.longitude}
          lat={this.state.latitude}
        />
        <ErrorDisplay
          handleError={this.handleError}
          errorMsg={this.state.errorMsg}
          displayError={this.state.displayError}
        />
        <Weather forecast={this.state.forecastData} />
      </div>
    );
  }
}


export default App;
