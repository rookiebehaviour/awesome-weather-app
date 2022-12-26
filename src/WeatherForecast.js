import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "f10daba5t5ce3fc3ed35o46ebd038a42";
    let lat = props.coordinates.latitude;
    let lon = props.coordinates.longitude;
    let url = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&units=imperial&key=${apiKey}`;

    axios.get(url).then(handleResponse);

    return null;
  }
}
