import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const apiKey = "f10daba5t5ce3fc3ed35o46ebd038a42";
  let unit = "imperial";
  let city = "Cincinnati";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&units=${unit}&key=${apiKey}`;

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
      <h1>Middletown</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Snow</li>
      </ul>
      <div className="row mt-3">
        <div className="col-sm-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="weather icon"
          />

          <span className="temperature">6</span>
          <span className="unit">°F</span>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Feels like: 2°F</li>
            <li>Humidity: 70%</li>
            <li>Wind: 8 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
