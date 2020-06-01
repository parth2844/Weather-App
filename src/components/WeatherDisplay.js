import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import './WeatherDisplay.css'

function WeatherDisplay(props) {
    const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity, img, feelslike, time } = props.weatherData;
    return (
        <Container className="main-container">
            <Row className="row-custom">
                <Col>
                    <h1>Weather Today in {location}, {region}</h1>
                </Col>                                               
            </Row>
            <Row className="row-custom">
                <Col>
                    <h4>Local Time: {time}</h4>
                </Col>                                               
            </Row>
            <Row className="row-custom">
                <Col xs="auto">
                    <img className="mainImg" src={img} alt="weather-img" />
                </Col>
                <Col>
                    <Row><h3>{temperature}<sup>o</sup>C, Feels Like {feelslike}<sup>o</sup>C</h3></Row>
                    <Row><h6>{description}</h6></Row>                    
                </Col>             
            </Row>
            <Row className="row-custom">
                <Col>
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{wind_speed}</h2>
                </Col>
                <Col>
                    <p><b>Preassure</b>(millibar)</p>
                    <h2>{pressure}</h2>
                </Col>
                <Col>
                    <p><b>Precipitation</b>(mm)</p>
                    <h2>{precip}</h2>
                </Col>
                <Col>
                    <p><b>Humidity</b>(%)</p>
                    <h2>{humidity}</h2>
                </Col>
            </Row>
            
            
        </Container>
    )
}

export default WeatherDisplay
