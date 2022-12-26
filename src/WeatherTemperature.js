import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weatherTemperature">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="unit">°F</span>
    </div>
  );
}
