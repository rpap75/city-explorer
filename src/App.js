import React from 'react';
import Form from './components/Form';
import axios from 'axios';
import LocationDisplay from './components/LocationDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import Weather from './components/Weather';
import Movie from './components/Movie';


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
      forecastData: [],
      movieData: [],
    }
  }
  handleError = () => {
    this.setState({ errorMsg: null });
  }

  handleLocationSearch = async (e) => {
    e.preventDefault();
    this.setState({ locationSearch: e.target.search.value })

    try {
      let request = {
        method: 'GET',
        url: `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${e.target.search.value}&format=json`
      }

      let response = await axios(request);

      this.setState({
        display_name: response.data[0].display_name,
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
        mapDisplay: true,
        displayError: false,
      }, this.handleWeatherSearch);
      this.handleMovieSearch();
    } catch (error) {
      this.setState({
        errorMsg: error.response.status + ' : ' + error.response.data,
        mapDisplay: false,
        displayError: true,
      })
    }
  }

  handleMovieSearch = async () => {
    let request = {
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/movies?searchQuery=${this.state.locationSearch}`
    }
    try {
      let response = await axios(request);
      this.setState({
        movieData: response.data,
      });
    } catch (err) {
      this.setState({ errorMsg: err });
    }
  }

  handleWeatherSearch = async () => {
    let request = {
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/weather?lat=${this.state.latitude}&lon=${this.state.longitude}`
    }
    try {
      let response = await axios(request);
      this.setState({
        forecastData: response.data,
      });
    } catch (err) {
      this.setState({ errorMsg: err });
    }
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
        <ErrorDisplay
          handleError={this.handleError}
          errorMsg={this.state.errorMsg}
          displayError={this.state.displayError}
        />
        {this.state.forecastData.length ?
          < Weather forecast={this.state.forecastData} />
          : null
        }
        {this.state.movieData.length ?
          < Movie movieLi={this.state.movieData} />
          : null
        }
      </div>
    );
  }
}

export default App;