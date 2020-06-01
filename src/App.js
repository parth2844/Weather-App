import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import WeatherDisplay from './components/WeatherDisplay'
import Axios from 'axios';

class App extends Component {

  state = {
    coords: {
      latitude: 45,
      longitude: 60
    },
    data: {},
    inputData:""
  }

  componentDidMount(){
    if(navigator.geolocation){
      
      navigator.geolocation.getCurrentPosition((position) => {
        
        let newCooords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({coords:newCooords});

        Axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then( response => {

          let weatherData = {
            location: response.data.location.name,
            temperature: response.data.current.temperature,
            description: response.data.current.weather_descriptions[0],
            region: response.data.location.region,
            country: response.data.location.country,
            wind_speed: response.data.current.wind_speed,
            pressure: response.data.current.pressure,
            precip: response.data.current.precip,
            humidity: response.data.current.humidity,
            img: response.data.current.weather_icons,
            feelslike: response.data.current.feelslike,
            is_day: response.data.current.is_day,
            time: response.data.location.localtime

          }

          this.setState({data: weatherData});
          
        })

      })

      
    } else {
      console.log("Not supported");
    }

  }

  change = (value) => {
    this.setState({inputData:value});
  }

  changeWeather = (event) => {
    event.preventDefault();
    
    Axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${this.state.inputData}`).then( response => {
      
      let weatherData = {
        location: response.data.location.name,
        temperature: response.data.current.temperature,
        description: response.data.current.weather_descriptions[0],
        region: response.data.location.region,
        country: response.data.location.country,
        wind_speed: response.data.current.wind_speed,
        pressure: response.data.current.pressure,
        precip: response.data.current.precip,
        humidity: response.data.current.humidity,
        img: response.data.current.weather_icons,
        feelslike: response.data.current.feelslike,
        is_day: response.data.current.is_day,
        time: response.data.location.localtime

      }

      this.setState({data: weatherData});
      this.setState({inputData: ""});

      document.getElementById("search-city").reset();
    })
    
  }

  render(){
    return (
      <React.Fragment>
        <NavBar changeWeather={this.changeWeather} changeRegion= {this.change}/>
        <WeatherDisplay weatherData = {this.state.data}/>
      </React.Fragment>
    );
  }
}  

export default App;
