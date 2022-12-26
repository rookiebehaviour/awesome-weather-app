import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-sm-6">
          <span>
            {" "}
            <img src={props.data.icon} alt={props.data.description} />
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </span>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)} °F</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
