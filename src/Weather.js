import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.city,
      date: "Sunday, December 25, 2022",
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-sm-6">
            <img src={weatherData.icon} alt={weatherData.description} />

            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLike)} °F</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f10daba5t5ce3fc3ed35o46ebd038a42";
    let unit = "imperial";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&units=${unit}&key=${apiKey}`;

    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
