// src/components/WeatherApp.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { getWeatherIcon } from './WeatherIcons';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = () => {
    const apiKey = '79401f77a68a8d1455abd3b71d3ca1ce'; // Replace with your actual API key

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then((response) => {
        const data = response.data;
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      });
  };

  // Function to convert temperature from Kelvin to Celsius
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const dateBuilder = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="weather-app" >
      <div className='header'>
      <h1> Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
         </div>

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <div className="date">{dateBuilder(new Date())}</div>
          <p>Temperature: {Math.round(kelvinToCelsius(weatherData.main.temp))}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <img className='WeatherIcon' src={getWeatherIcon(weatherData.weather[0].description)} alt="Weather Icon" />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
