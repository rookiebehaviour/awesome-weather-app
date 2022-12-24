import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
            />
          </div>
          <div className="col-sm-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Middletown</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Snow</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="weather icon"
          />
          6°F
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
