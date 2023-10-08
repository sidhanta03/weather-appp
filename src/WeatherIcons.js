// src/utils/weatherIcons.js

export const getWeatherIcon = (weatherDescription) => {
    if (weatherDescription.includes("clear")) {
      return "./images/clear-sky.png";
    } else if (weatherDescription.includes("cloud")) {
      return "./images/cloudy.png";
    } else if (weatherDescription.includes("rain")) {
      return "./images/storm.png";
    } else if (weatherDescription.includes("snow")) {
      return "./images/snow.png";
    } else if (weatherDescription.includes("thunderstorm")) {
      return "./images/thunder.png";
    } else if (weatherDescription.includes("haze") || weatherDescription.includes("mist")) {
      return "./images/haze.png";
    } else {
      return "./images/fog.png";
    }
  };
  